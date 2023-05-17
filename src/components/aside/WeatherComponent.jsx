// ... React modules

// ... Components

// ... Assets
import weather_svg from "../../assets/images/weather_svg/temperature_half.svg";

const WeatherComponent = ({ matrix, des, value, svg, unit }) => {
  return (
    <div className="weather_component_container">
      <div className="d-flex align-items-center">
        <img src={svg} alt="humidity svg" className="weather_component_image" />
        <div className="ms-4">
          <p className="weather_component_name text-muted">{matrix}</p>
          <p className="weather_component_name">{des}</p>
        </div>
      </div>
      <p className="weather_component_value">
        {value} {unit}
      </p>
    </div>
  );
};

export default WeatherComponent;

WeatherComponent.defaultProps = {
  matrix: "-",
  des: "-",
  value: "-",
  svg: weather_svg,
  unit: "",
};
