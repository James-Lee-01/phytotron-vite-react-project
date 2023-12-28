
// SensorBoard
import { useSensor2Context } from "../contexts/Sensor2Context.jsx";
import SensorCard from "./SensorCard.jsx";
import { WiThermometer } from "react-icons/wi";
import { WiHumidity } from "react-icons/wi";

function SensorBoard() {
  const { temperature, humidity } = useSensor2Context();
  
  return (
    <div className="xs:my-6 my-2 flex flex-wrap items-center justify-center xs:gap-1">
      <SensorCard
        icon={WiThermometer}
        sensorItem="Temperature"
        data={temperature}
        unit={"°C"}
        threshold={35}
      />
      <SensorCard
        icon={WiHumidity}
        sensorItem="Humidity"
        data={humidity}
        unit={"%"}
        threshold={85}
      />
    </div>
  );
}

export default SensorBoard;
