// SensorCard
import PropTypes from "prop-types";
import { SlSpeedometer as DefaultIcon } from "react-icons/sl";

const SensorCard = ({ icon: Icon, sensorItem, data, unit, threshold }) => {
  const MainIcon = Icon || DefaultIcon;
  const dataColor = data >= threshold || data === "--" ? "text-rose-600" : "text-lime-500";

  return (
    <div className="xs:max-w-[200px] xs:aspect-square m-1 box-border flex w-full flex-col items-center justify-center rounded-3xl bg-neutral-800 p-2 shadow-md">
      <MainIcon className="mb-1 text-5xl" />
      <h1 className="mb-2 text-lg font-bold">{sensorItem} :</h1>
      <p className="grid grid-cols-3 items-center gap-4 text-base">
        <span className={` col-start-2 text-center text-2xl ${dataColor}`}>
          {data}
        </span>
        <span className="col-start-3 text-left">{unit}</span>
      </p>
    </div>
  );
};

//prop-types驗證
SensorCard.propTypes = {
  icon: PropTypes.elementType,
  sensorItem: PropTypes.string.isRequired,
  data: PropTypes.any.isRequired,
  unit: PropTypes.string,
  threshold: PropTypes.number,
};

export default SensorCard;
