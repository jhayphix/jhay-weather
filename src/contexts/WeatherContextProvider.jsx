// ... React modules
import { createContext, useContext, useState } from "react";

// ... Context
import { HelperContext } from "./HelperContextProvider";

// ... Components

// ... Assets

export const WeatherContext = createContext({
  searchTerm: "",
  setSearchTerm: () => {},
  weatherData: null,
  setWeatherData: () => {},

  pageIsLoading: true,
  setPageIsLoading: () => {},
  notFound: false,
  setNotFound: () => {},

  getWeatherData: () => {},
  weatherInformation: () => {},
  weatherMatrix: () => {},
});

const WeatherContextProvider = ({ children }) => {
  /* 
  |----------------------------------------
  | State and variables
  |----------------------------------------
  */
  const {
    kelvinToCelsius,
    interpretPressure,
    interpretHumidity,
    interpretTemp,
    getDate,
  } = useContext(HelperContext);
  const API_KEY = process.env.REACT_APP_API_KEY;
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const [searchTerm, setSearchTerm] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [pageIsLoading, setPageIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  /* 
  |----------------------------------------
  | Fetch data
  |----------------------------------------
  */
  const fetchWeatherData = async () => {
    if (searchTerm) {
      const api_call = `${BASE_URL}?q=${searchTerm.toLowerCase()}&APPID=${API_KEY}`;
      const response = await fetch(api_call);
      const data = await response.json();
      if (response.status === 404) {
        setNotFound(true);
      }
      return data;
    }
  };
  const getWeatherData = async () => {
    const data = await fetchWeatherData();
    setPageIsLoading(false);
    setWeatherData(data);
  };

  /* 
  |----------------------------------------
  | Weather
  |----------------------------------------
  */
  const weatherInformation = () => {
    const info = weatherData?.weather?.[0];
    const type = info?.main;
    const description = info?.description;
    const city = weatherData?.name;
    const country_code = weatherData?.sys?.country;
    const date = getDate(weatherData?.dt);

    const data = { info, city, country_code, type, description, date };

    return data;
  };

  const weatherMatrix = () => {
    const matrix = weatherData?.main;
    const feels_like = kelvinToCelsius(matrix?.feels_like, 0);
    const temp = kelvinToCelsius(matrix?.temp, 0);
    const temp_des = interpretTemp(matrix?.temp);
    const temp_max = kelvinToCelsius(matrix?.temp);
    const temp_max_des = interpretTemp(matrix?.temp_max);
    const temp_min = kelvinToCelsius(matrix?.temp_min);
    const temp_min_des = interpretTemp(matrix?.temp_min);
    const humidity = matrix?.humidity;
    const humidity_des = interpretHumidity(matrix?.humidity);
    const pressure = matrix?.pressure;
    const pressure_des = interpretPressure(matrix?.pressure);

    const data = {
      matrix,

      feels_like,
      temp,
      temp_des,
      temp_max,
      temp_max_des,
      temp_min,
      temp_min_des,

      humidity,
      humidity_des,
      pressure,
      pressure_des,
    };

    return data;
  };

  /* 
  |----------------------------------------
  | Context
  |----------------------------------------
  */
  const context = {
    searchTerm,
    setSearchTerm,
    weatherData,
    setWeatherData,

    pageIsLoading,
    setPageIsLoading,
    notFound,
    setNotFound,

    getWeatherData,
    weatherInformation,
    weatherMatrix,
  };

  return (
    <WeatherContext.Provider value={context}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;
