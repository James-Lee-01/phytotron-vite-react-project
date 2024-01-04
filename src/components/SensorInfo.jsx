// SensorInfo
import { useSensorContext } from "../contexts/SensorContext";
import { useState } from "react";
import { FaCircleInfo } from "react-icons/fa6";
import { FaCircleXmark } from "react-icons/fa6";

const SensorInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { name, connect, isConnected } = useSensorContext();
  const serverColor =
    isConnected === "connected" ? "text-lime-600" : "text-rose-500";
  const statusColor =
    connect === "searching" ? "text-rose-500" : "text-lime-600";

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="grid place-content-center bg-neutral-800 pb-4 shadow-md md:p-4">
      {/* <div className="flex items-center justify-between"> */}
      <h1 className="relative text-3xl font-bold">
        Sensor Info
        <span className="absolute top-1/2 ml-4 -translate-y-1/2 transform cursor-pointer text-xl">
          <FaCircleInfo onClick={openModal} />
        </span>
      </h1>

      {/* </div> */}

      <div className="flex flex-wrap items-end text-lg">
        <p className="mr-2">No. :</p>
        <p className="text-lime-600">{name}</p>
      </div>
      <div className="flex flex-wrap items-end text-lg">
        <p className="mr-2">Server :</p>
        <p className={`${serverColor}`}>{isConnected}</p>
      </div>
      <div className="flex flex-wrap items-end text-lg">
        <p className="mr-2">Update :</p>
        <p className={`${statusColor}`}>{connect}</p>
      </div>

      {isModalOpen && (
        <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center">
          <div
            className="absolute h-full w-full bg-neutral-600 opacity-80"
            onClick={closeModal}
          ></div>
          <div className="relative z-10 rounded-md bg-neutral-900 p-4">
            <FaCircleXmark
              className="absolute -right-2 -top-2 cursor-pointer text-xl"
              onClick={closeModal}
            />
            <ul className="mx-4 list-inside list-disc space-y-2 xs:text-base text-sm">
              <h3 className="text-lg font-bold">關於本頁：</h3>
              <li>「No.」為感測器編號。</li>
              <li>「Server」為資料庫連線狀態。</li>
              <li>「Update」為感測器最新更新時間。</li>
              <li>
                氣象資料更新頻率 10分鐘一次，手動更新。
              </li>
              <li>感測器更新頻率 20秒一次，自動更新。</li>
              <li>感測器1分鐘以上未更新，請檢查其狀態。</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SensorInfo;
