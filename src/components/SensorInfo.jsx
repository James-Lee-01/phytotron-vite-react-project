// SensorInfo
import { useSensor1Context } from "../contexts/Sensor1Context";

const SensorInfo = () => {
  const { number, connect } = useSensor1Context();
  const statusColor = connect === "connect" ? "text-lime-600" : "text-rose-500";

  return (
    <div className="grid place-content-center bg-neutral-800 md:p-4 shadow-md pb-4">
      <h1 className="mb-4 text-3xl font-bold">Sensor Info</h1>
      <div className="flex flex-wrap items-end text-lg">
        <p className="mr-2">No. :</p>
        <p className="text-lime-600">{number}</p>
      </div>
      <div className="flex flex-wrap items-end text-lg">
        <p className="mr-2">Connection :</p>
        <p className={`${statusColor}`}>{connect}</p>
      </div>
    </div>
  );
};

export default SensorInfo;
