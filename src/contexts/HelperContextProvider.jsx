// ... React modules
import { createContext } from "react";

// ... Components

// ... Assets
// svg
import clouds_svg from "../assets/images/weather_svg/clouds.svg";
import rain_svg from "../assets/images/weather_svg/rain.svg";
import shine_svg from "../assets/images/weather_svg/shine.svg";
import snow_svg from "../assets/images/weather_svg/snow.svg";
import storm_svg from "../assets/images/weather_svg/storm.svg";
import fog_svg from "../assets/images/weather_svg/fog.svg";
import default_svg from "../assets/images/weather_svg/default.svg";

// img
import clouds_img from "../assets/images/weather/clouds.jpeg";
import rain_img from "../assets/images/weather/rain.jpeg";
import shine_img from "../assets/images/weather/shine.jpeg";
import snow_img from "../assets/images/weather/snow.jpeg";
import storm_img from "../assets/images/weather/storm.jpeg";
import fog_img from "../assets/images/weather/fog.jpeg";
import default_img from "../assets/images/weather/fine.jpeg";

export const HelperContext = createContext({
  kelvinToCelsius: () => {},
  interpretPressure: () => {},
  interpretHumidity: () => {},
  interpretTemp: () => {},
  getWeatherSvg: () => {},
  getWeatherImg: () => {},
  getDate: () => {},
});

const HelperContextProvider = ({ children }) => {
  /* 
  |----------------------------------------
  | Helper
  |----------------------------------------
  */
  function kelvinToCelsius(temp, dec = 2) {
    const kelvin = parseFloat(temp);
    if (!isNaN(kelvin)) {
      const result = kelvin - 273.15;
      return result.toFixed(dec);
    } else {
      return null;
    }
  }
  function interpretPressure(pres) {
    if (pres) {
      const pressure = parseFloat(pres);
      if (pressure > 1013.25) {
        return "High pressure";
      } else if (pressure < 1013.25) {
        return "Low pressure";
      } else {
        return "Normal pressure";
      }
    } else {
      return null;
    }
  }
  function interpretHumidity(humid) {
    if (humid) {
      const humidity = parseFloat(humid);
      if (humidity >= 70) {
        return "High humidity";
      } else if (humidity >= 30 && humidity < 70) {
        return "Moderate humidity";
      } else {
        return "Low humidity";
      }
    } else {
      return null;
    }
  }
  function interpretTemp(temp) {
    if (temp) {
      const temperature = kelvinToCelsius(temp);
      if (temperature >= 30) {
        return "Hot temperature";
      } else if (temperature >= 20 && temperature < 30) {
        return "Warm temperature";
      } else if (temperature >= 10 && temperature < 20) {
        return "Mild temperature";
      } else {
        return "Cool temperature";
      }
    } else {
      return null;
    }
  }
  function getWeatherSvg(weatherCondition) {
    switch (weatherCondition) {
      case "Clear":
        return shine_svg;
      case "Clouds":
        return clouds_svg;
      case "Rain":
      case "Drizzle":
        return rain_svg;
      case "Snow":
        return snow_svg;
      case "Thunderstorm":
        return storm_svg;
      case "Mist":
      case "Fog":
        return fog_svg;
      default:
        return default_svg;
    }
  }
  function getWeatherImg(weatherCondition) {
    switch (weatherCondition) {
      case "Clear":
        return shine_img;
      case "Clouds":
        return clouds_img;
      case "Rain":
      case "Drizzle":
        return rain_img;
      case "Snow":
        return snow_img;
      case "Thunderstorm":
        return storm_img;
      case "Mist":
      case "Fog":
        return fog_img;
      default:
        return default_img;
    }
  }

  const getDate = (dt) => {
    if (dt) {
      const date = new Date(dt * 1000); // Multiply by 1000 to convert to milliseconds

      // Get the day and date in a human-readable format
      const day = date.toLocaleString("default", { weekday: "long" }); // e.g. "Sunday"
      const dateStr = date.toLocaleString("default", {
        month: "long",
        day: "numeric",
      }); // e.g. "May 22"
      const year = date.getFullYear();

      const data = {
        day,
        dateStr,
        year,
      };

      return data;
    }
  };

  const context = {
    kelvinToCelsius,
    interpretPressure,
    interpretHumidity,
    interpretTemp,
    getWeatherSvg,
    getWeatherImg,
    getDate,
  };
  return (
    <HelperContext.Provider value={context}>{children}</HelperContext.Provider>
  );
};

export default HelperContextProvider;
