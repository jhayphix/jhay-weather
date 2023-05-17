// ... React modules
import { useContext } from "react";

// ... Context
import { WeatherContext } from "../../contexts/WeatherContextProvider";
import { HelperContext } from "../../contexts/HelperContextProvider";

// ... Components

// ... Assets

const Main = () => {
  const { weatherInformation, weatherMatrix } = useContext(WeatherContext);
  const { getWeatherSvg, getWeatherImg } = useContext(HelperContext);

  const weather_info = weatherInformation();
  const weather_mat = weatherMatrix();
  const date = weather_info?.date;
  const weather_svg = getWeatherSvg(weather_info?.type);
  const weather_img = getWeatherImg(weather_info?.type);

  return (
    <div
      id="main"
      className="main"
      style={{ backgroundImage: `url(${weather_img})` }}
    >
      <div className="main_container p-4 justify-content-between">
        <p className="weather_temp">
          {weather_mat?.feels_like ? `${weather_mat?.feels_like} \u00B0C` : ""}
        </p>
        <div className=" d-sm-inline d-none">
          <p className="city_name text">
            {weather_info?.city ? `${weather_info?.city} , ` : ""}
            {weather_info?.country_code ?? ""}
          </p>
          <p className="city_date text">{`${date?.day ?? ""} ${
            date?.dateStr ?? ""
          } ${date?.year ?? ""}`}</p>
        </div>
        <div>
          <img src={weather_svg} alt="weather" className="weather_svg" />
          <p className="weather_type text">{weather_info?.type ?? ""}</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
