//Sensor Connect Context
import Ably from "ably"
import { createContext, useContext, useEffect, useState, } from "react";
import PropTypes from "prop-types";

const defaultSensorContext = {
  number: null,
  temperature: "--",
  humidity: "--",
  connect: "searching", //data connection
  isConnected: "disconnect", //server connection
};

const AblyChannel = (sensorNumber) => `[?rewind=1]sensor${sensorNumber}`; // 與 ESP8266 sensor發布的 Channel 名稱相同

const SensorContext = createContext(defaultSensorContext);
// eslint-disable-next-line react-refresh/only-export-components
export const useSensorContext = () => useContext(SensorContext);

export function SensorProvider({ sensorNumber, sensorName, children }) {
  const [data, setData] = useState(defaultSensorContext);
  // 新增連線狀態
  const [isConnected, setIsConnected] = useState("");

  useEffect(() => {
    // Ably API 金鑰
    const ably = new Ably.Realtime(
      import.meta.env.VITE_ABLY_KEY || process.env.VITE_ABLY_KEY,
    );

    const ablyChannel = ably.channels.get(AblyChannel(sensorNumber));

    // 監聽連線狀態
    ably.connection.on((stateChange) => {
      setIsConnected(stateChange.current);
    });

    ablyChannel.subscribe((message) => {
      const decoder = new TextDecoder("utf-8");
      const decodedMessage = decoder.decode(message.data);

      try {
        const jsonData = JSON.parse(decodedMessage);
        setData({
          connect: jsonData.connect,
          temperature: jsonData.temperature,
          humidity: jsonData.humidity,
        });
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    });

    return () => {
      ablyChannel.unsubscribe();
      ably.close();
    };
  }, [sensorNumber]);

  return (
    <SensorContext.Provider
      value={{
        number: sensorNumber,
        name: sensorName,
        connect: data.connect,
        temperature: data.temperature,
        humidity: data.humidity,
        isConnected,
      }}
    >
      {children}
    </SensorContext.Provider>
  );
}

//prop-types驗證
SensorProvider.propTypes = {
  sensorNumber: PropTypes.string.isRequired,
  sensorName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};