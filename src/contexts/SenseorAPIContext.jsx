// // SensorAPIContext 本程式碼供感測器使用API串接後端server時使用之範例程式碼
// //亦可供區域網路內IoT使用

// import axios from "axios";
// import { createContext, useContext, useEffect, useState, } from "react";
// import PropTypes from "prop-types";

// //Sensor API
// // const Sensor_API_URL = import.meta.env.VITE_SENSOR_01_API_URL;
// const Sensor_API_URL = "/api"; // 使用相對路徑

// const defaultSensorContext = {
//   number: null,
//   temperature: "--",
//   humidity: "--",
//   connect: "disconnect",
// }

// const Sensor1Context = createContext(defaultSensorContext);
// // eslint-disable-next-line react-refresh/only-export-components
// export const useSensor1Context = () => useContext(Sensor1Context);

// //prop-types驗證
// Sensor1Provider.propTypes = {
//   children: PropTypes.node.isRequired,
// }

// export function Sensor1Provider({ children }) {
//   const [data, setData] = useState(defaultSensorContext);
//   const [connect, setConnect] = useState("disconnect");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         console.log("Actual API URL:", `${Sensor_API_URL}/data`);
//         const response = await axios.get(`${Sensor_API_URL}/data`, {
//           withCredentials: true,
//         });
//         console.log(response.data);
//         setData(response.data);
//         setConnect("connect");
//       } catch (error) {
//         if (error.response) {
//           // 伺服器回傳錯誤狀態碼
//           console.error("Server error:", error.response.status);
//           setConnect(`Server Error: ${error.response.status}`);
//           setData({ temperature: "--", humidity: "--" });
//         } else if (error.request) {
//           // 無法發送請求
//           console.error("Network error:", error.request);
//           setConnect("Network Error");
//           setData({ temperature: "--", humidity: "--" });
//         } else {
//           // 其他錯誤
//           console.error("Error fetching data", error.message);
//           setConnect("Fetch Error");
//           setData({ temperature: "--", humidity: "--" });
//         }
//       }
//     };

//     //每3秒獲取一次資料
//     const interval = setInterval(fetchData, 3000);
//     return () => clearInterval(interval);
//   }, []);
  
//   return (
//     <Sensor1Context.Provider
//       value={{
//         number: "01",
//         connect,
//         temperature: data.temperature,
//         humidity: data.humidity,
//       }}
//     >
//       {children}
//     </Sensor1Context.Provider>
//   );
// }