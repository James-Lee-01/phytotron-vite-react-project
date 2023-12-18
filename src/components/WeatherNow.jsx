// WeatherNow component
import dayjs from "dayjs";
import { useState, useEffect } from "react";
import { WiHumidity } from "react-icons/wi";
import { WiStrongWind } from "react-icons/wi";
import { WiUmbrella } from "react-icons/wi";
import { IoRefresh } from "react-icons/io5";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { weatherNowAPI, weatherForecastAPI } from "../api/weatherAPI";
import  WeatherIcon  from "./WeatherIcon.jsx"

const WeatherNow = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [currentWeather, setCurrentWeather] = useState({
    locationName: "預報縣市",
    weatherStatus: "天氣概況",
    comfortability: "--",
    windSpeed: "--",
    temperature: "--",
    relativeHumidity: "--",
    rainPossibility: "--",
    observationTime: false,
  });

  const refreshTime = dayjs(currentWeather.observationTime).format(
    "MMM D, HH:mm",
  );


  const fetchData = async () => {
    setLoading(true);

    try {
      const weatherNowData = await weatherNowAPI();
      const weatherForecastData = await weatherForecastAPI();
      // console.log("weatherNowData", weatherNowData);
      // console.log("weatherForecastData", weatherForecastData);
      setCurrentWeather((prevWeather) => ({
        ...prevWeather, //避免race情況
        locationName: weatherNowData.locationName,
        windSpeed: weatherNowData.windSpeed,
        temperature: weatherNowData.temperature,
        relativeHumidity: weatherNowData.relativeHumidity,
        observationTime: weatherNowData.observationTime,
        weatherCode: weatherForecastData.weatherCode,
        weatherStatus: weatherForecastData.weatherStatus,
        rainPossibility: weatherForecastData.rainPossibility,
        comfortability: weatherForecastData.comfortability,
      }));

      setSuccess(true);
    } catch (error) {
      console.error("Failed to fetch data", error);
    } finally {
      setLoading(false);
    }
  };

  //Set timer
  useEffect(() => {
    let timer;

    if (success) {
      timer = setTimeout(() => {
        setSuccess(false);
      }, 5000)
    }

    return () => {
      clearTimeout(timer)
    }
  }, [success])

  useEffect(() => {
    fetchData();
  }, [])

  const handleClick = async () => {
    fetchData()
  }

  return (
    <div className="mx-1 my-4 flex flex-col items-center justify-center">
      <div className="xs:w-[410px] flex min-h-[300px] w-full flex-col justify-evenly gap-2 rounded-3xl bg-neutral-800 p-4 shadow-md">
        <h1 className="text-2xl">{currentWeather.locationName}</h1>
        <h2 className="flex gap-2 text-lg">
          <span>{currentWeather.weatherStatus}</span>
          <span>{currentWeather.comfortability}</span>
        </h2>
        <div className="flex items-center justify-evenly">
          <div className="text-5xl">
            {Math.round(currentWeather.temperature) || "--"} °C
          </div>
          <div className="text-8xl">
            <WeatherIcon
              weatherCode={currentWeather.weatherCode}
              refreshTime={refreshTime}
            />
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="flex items-center">
            <WiStrongWind className="text-3xl" />
            {currentWeather.windSpeed} km/h
          </div>
          <div className="flex items-center">
            <WiHumidity className="text-3xl" />
            {currentWeather.relativeHumidity} %
          </div>
        </div>

        <div className="flex items-center">
          <WiUmbrella className="text-3xl" />
          {currentWeather.rainPossibility} %
        </div>
        <div className="flex flex-wrap items-center justify-end gap-1 text-right">
          Latest Data:{" "}
          {currentWeather.observationTime ? refreshTime : "--"}
          <div className="text-lg">
            {loading ? (
              <div className="animate-spin">
                <IoRefresh />
              </div>
            ) : success ? (
              <IoMdCheckmarkCircleOutline />
            ) : (
              <IoRefresh className="cursor-pointer" onClick={handleClick} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherNow;
