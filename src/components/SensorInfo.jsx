// SensorInfo
import { useSensor1Context } from "../contexts/Sensor1Context";

const SensorInfo = () => {
  const { number, connect, isConnected } = useSensor1Context();
  const serverColor =
    isConnected === "connected" ? "text-lime-600" : "text-rose-500";
  const statusColor =
    connect === "searching" ? "text-rose-500" : "text-lime-600";

  return (
    <div className="grid place-content-center bg-neutral-800 pb-4 shadow-md md:p-4">
      <h1 className="mb-4 text-3xl font-bold">Sensor Info</h1>
      <div className="flex flex-wrap items-end text-lg">
        <p className="mr-2">No. :</p>
        <p className="text-lime-600">{number}</p>
      </div>
      <div className="flex flex-wrap items-end text-lg">
        <p className="mr-2">Server :</p>
        <p className={`${serverColor}`}>{isConnected}</p>
      </div>
      <div className="flex flex-wrap items-end text-lg">
        <p className="mr-2">Update :</p>
        <p className={`${statusColor}`}>{connect}</p>
      </div>
    </div>
  );
};

export default SensorInfo;
