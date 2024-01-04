import axios from 'axios';

const AUTHORIZATION_KEY = import.meta.env.VITE_WEATHER_AUTHORIZATION_KEY
const LOCATION_NAME = "臺北"
const FORECAST_LOCATION = "臺北市"

const now_URL = `https://opendata.cwa.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=${AUTHORIZATION_KEY}&format=JSON&StationId=&StationName=${LOCATION_NAME}`

const forecast_URL = `https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${AUTHORIZATION_KEY}&locationName=${FORECAST_LOCATION}`


//Weather Now
export const weatherNowAPI = async() => {
  try {
    const response = await axios.get(now_URL)
    const station = response?.data?.records?.Station[0] || {};
    const geoInfo = station?.GeoInfo || {};
    const weatherElement = station?.WeatherElement || {};
    const obsTime = station?.ObsTime?.DateTime || '';

    const weatherNowData = {
      locationName: geoInfo.CountyName || '',
      // description: weatherElement.Weather || '',
      windSpeed: weatherElement.WindSpeed || 0,
      temperature: weatherElement.AirTemperature || 0,
      relativeHumidity: weatherElement.RelativeHumidity || 0,
      observationTime: obsTime,
    };
    return weatherNowData
  } catch (error) {
    console.error('weatherNowAPI failed', error)
    return error
  }
}

//Weather Forecast
export const weatherForecastAPI = async() => {
  try {
    const response = await axios.get(forecast_URL)
    const location = response?.data?.records?.location[0] || {};
    const weatherElement = location?.weatherElement || {};
    

    const weatherForecastData = {
      weatherStatus: weatherElement[0].time[0].parameter.parameterName,
      weatherCode: weatherElement[0].time[0].parameter.parameterValue,
      rainPossibility: weatherElement[1].time[0].parameter.parameterName,
      comfortability: weatherElement[3].time[0].parameter.parameterName,
    };
    return weatherForecastData
  } catch (error) {
    console.error('weatherNowAPI failed', error)
    return error
  }
}