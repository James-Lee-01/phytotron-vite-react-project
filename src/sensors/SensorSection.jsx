// SensorSection
import SensorInfo from "../components/SensorInfo.jsx";
import WeatherNow from "../components/WeatherNow.jsx";
import SensorBoard from "../components/SensorBoard.jsx";
import { Sensor1Provider } from "../contexts/Sensor1Context.jsx";

const SensorSection = () => {
  return (
    <div className="md:w-full">
      <Sensor1Provider>
        <SensorInfo />
        <WeatherNow />
        <SensorBoard />
      </Sensor1Provider>
    </div>
  );
};

export default SensorSection;
