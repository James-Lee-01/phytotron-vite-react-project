//Sensor01 Connect Context
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

const AblyChannel = "[?rewind=1]sensor01"; // 與 ESP8266 sensor01發布的 Channel 名稱相同

const Sensor1Context = createContext(defaultSensorContext);
// eslint-disable-next-line react-refresh/only-export-components
export const useSensor1Context = () => useContext(Sensor1Context);

export function Sensor1Provider({ children }) {
  const [data, setData] = useState(defaultSensorContext);
  // 新增連線狀態
  const [isConnected, setIsConnected] = useState("");

  useEffect(() => {
    // Ably API 金鑰
    const ably = new Ably.Realtime(import.meta.env.VITE_ABLY_KEY || process.env.VITE_ABLY_KEY);

    const ablyChannel = ably.channels.get(AblyChannel);

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
  }, []);

  return (
    <Sensor1Context.Provider
      value={{
        number: "01",
        connect: data.connect,
        temperature: data.temperature,
        humidity: data.humidity,
        isConnected,
      }}
    >
      {children}
    </Sensor1Context.Provider>
  );
}

//prop-types驗證
Sensor1Provider.propTypes = {
  children: PropTypes.node.isRequired,
}