// WeatherIcon component
import {
  WiDaySunny,
  WiCloud,
  WiDayCloudy,
  WiDayRain,
  WiDayThunderstorm,
  WiFog,
  WiSnow,
  WiNightClear,
  WiCloudy,
  WiNightAltCloudy,
  WiNightAltRain,
  WiThunderstorm,
} from "react-icons/wi";
import PropTypes from "prop-types";





const WeatherIcon = ({weatherCode, refreshTime}) => {
  //氣象局的天氣代碼分類
  const weatherTypes = {
    isSunny: [1],
    isCloudy: [4, 5, 6, 7],
    isSunnyOrCloudy: [2, 3],
    isCloudyOrRain: [8, 9, 10, 11, 12, 13, 14, 19, 20, 29, 30, 31, 32, 38, 39],
    isThunderstorm: [15, 16, 17, 18, 21, 22, 33, 34, 35, 36, 41],
    isFog: [24, 25, 26, 27, 28],
    isSnowing: [23, 42, 37],
  };

  //根據代碼分類及日夜差異對應的icon
  const weatherTypeToIcon = {
    day: {
      isSunny: <WiDaySunny />,
      isCloudy: <WiCloud />,
      isSunnyOrCloudy: <WiDayCloudy />,
      isCloudyOrRain: <WiDayRain />,
      isThunderstorm: <WiDayThunderstorm />,
      isFog: <WiFog />,
      isSnowing: <WiSnow />,
    },
    night: {
      isSunny: <WiNightClear />,
      isCloudy: <WiCloudy />,
      isSunnyOrCloudy: <WiNightAltCloudy />,
      isCloudyOrRain: <WiNightAltRain />,
      isThunderstorm: <WiThunderstorm />,
      isFog: <WiFog />,
      isSnowing: <WiSnow />,
    },
  };

  //根據回傳代碼資料找尋對應的天氣分類
  const findWeatherType = (weatherCode) => {
    //weatherCode為氣象局的天氣代碼，需轉換型別從字串改為數字才能對應上面分類
    const foundType = Object.keys(weatherTypes).find((type) =>
      weatherTypes[type].includes(Number(weatherCode)),
    );

    return foundType || null;
  };
  

  //根據回傳的觀測時間(小時)判斷是否為白天
  const isDaytime = (refreshTime) => {
    //時間格式是Dec 14, 15:20，需取得小時
    //使用正規表達式取得':'前的小時
    const match = refreshTime.match(/(\d+):/)
    const hour = match ? parseInt(match[1], 10) : null

    // 假設白天是早上6點到晚上6點
    return hour >= 6 && hour < 18;
  };

  const iconType = findWeatherType(weatherCode);
  const timeOfDay = isDaytime(refreshTime) ? "day" : "night";

  return iconType ? (
  <div>
    {weatherTypeToIcon[timeOfDay][iconType]}
    </div> 
  ) : 'null';
};

WeatherIcon.propTypes = {
  weatherCode: PropTypes.string,
  refreshTime: PropTypes.string,
}

export default WeatherIcon;