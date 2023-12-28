// SensorSection
import SensorInfoPhytotron from "../components/SensorInfoPhytotron.jsx";
import WeatherNow from "../components/WeatherNow.jsx";
import SensorBoardPhytotron from "../components/SensorBoardPhytotron.jsx";
import { Sensor2Provider } from "../contexts/Sensor2Context.jsx";

const SensorSection = () => {
  return (
    <div className="md:w-full">
      <Sensor2Provider>
        <SensorInfoPhytotron />
        <WeatherNow />
        <SensorBoardPhytotron />
      </Sensor2Provider>
    </div>
  );
};

export default SensorSection;
