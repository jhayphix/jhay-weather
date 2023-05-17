// ... React modules
import { useContext } from "react";

// ... Contexts
import { WeatherContext } from "../../contexts/WeatherContextProvider";
import { HelperContext } from "../../contexts/HelperContextProvider";

// ... Components
import WeatherComponent from "./WeatherComponent";

// ... Assets
// import weather_svg from "../../assets/images/weather_svg/shine.svg";
import half_temp_svg from "../../assets/images/weather_svg/temperature_half.svg";
import high_temp_svg from "../../assets/images/weather_svg/temperature_high.svg";
import low_temp_svg from "../../assets/images/weather_svg/temperature_low.svg";
import humidity_svg from "../../assets/images/weather_svg/humidity.svg";
import pressure_svg from "../../assets/images/weather_svg/pressure.svg";

// matrix, des, value, svg

const Aside = () => {
  const { weatherMatrix, weatherInformation } = useContext(WeatherContext);
  const { getWeatherSvg } = useContext(HelperContext);

  const weather_mat = weatherMatrix();
  const weather_info = weatherInformation();

  const weather_svg = getWeatherSvg(weather_info?.type);

  return (
    <>
      <div className="aside">
        <div className="aside_container">
          <div className="weather_svg_container">
            <img src={weather_svg} alt="weather svg" className="weather_svg" />
          </div>
          <div className="px-3 pb-3">
            <p className="weather_name lead my-4 text-capitalize text_accent">
              {weather_info?.description ?? ""}
            </p>

            <WeatherComponent
              matrix="Temperature"
              des={weather_mat?.temp_des ?? ""}
              value={weather_mat?.temp ?? "-"}
              unit={weather_mat?.temp ? "\u00B0C" : ""}
              svg={half_temp_svg}
            />
            <WeatherComponent
              matrix="Max-Temperature"
              des={weather_mat?.temp_max_des ?? ""}
              value={weather_mat?.temp_max ?? "-"}
              unit={weather_mat?.temp_max ? "\u00B0C" : ""}
              svg={high_temp_svg}
            />
            <WeatherComponent
              matrix="Min-Temperature"
              des={weather_mat?.temp_min_des ?? ""}
              value={weather_mat?.temp_min ?? "-"}
              unit={weather_mat?.temp_min ? "\u00B0C" : ""}
              svg={low_temp_svg}
            />
            <WeatherComponent
              matrix="Humidity"
              des={weather_mat?.humidity_des ?? ""}
              value={weather_mat?.humidity ?? "-"}
              unit={weather_mat?.humidity ? `%` : ""}
              svg={humidity_svg}
            />
            <WeatherComponent
              matrix="Pressure"
              des={weather_mat?.pressure_des ?? ""}
              value={weather_mat?.pressure ?? "-"}
              unit={weather_mat?.pressure ? "Atm" : ""}
              svg={pressure_svg}
            />

            <div className="footer d-flex-center-center px-2 py-3">
              <a
                href="https://jhayphix.github.io/portfolio"
                rel="noreferrer noopener"
                target="_blank"
                className="p-0 text-center text_accent lead text-decoration-underline"
              >
                By Jhayphix
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aside;
