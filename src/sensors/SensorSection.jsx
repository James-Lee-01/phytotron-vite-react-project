// SensorSection
import PropTypes from "prop-types";
import SensorInfo from "../components/SensorInfo.jsx";
import WeatherNow from "../components/WeatherNow.jsx";
import SensorBoard from "../components/SensorBoard.jsx";
import { SensorProvider } from "../contexts/SensorContext.jsx";

const SensorSection = ({ sensorNumber, sensorName }) => {
  return (
    <div className="md:w-full">
      <SensorProvider sensorNumber={sensorNumber} sensorName={sensorName}>
        <SensorInfo />
        <WeatherNow />
        <SensorBoard />
      </SensorProvider>
    </div>
  );
};

export default SensorSection;

SensorSection.propTypes = {
  sensorNumber: PropTypes.string.isRequired,
  sensorName: PropTypes.string.isRequired,
}