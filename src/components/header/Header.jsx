// ... React modules
import { useContext } from "react";

// ... Context
import { WeatherContext } from "../../contexts/WeatherContextProvider";

// ... Components
import Spinner from "../Spinner";

// ... Assets

const Header = () => {
  const {
    searchTerm,
    setSearchTerm,
    getWeatherData,
    pageIsLoading,
    setPageIsLoading,
    notFound,
    setNotFound,
    weatherInformation,
  } = useContext(WeatherContext);

  const getWeatherHandler = () => {
    if (searchTerm) {
      getWeatherData();
    } else {
      setPageIsLoading(true);
    }
  };

  const weather_info = weatherInformation();
  const date = weather_info?.date;

  return (
    <>
      <div className="header py-3">
        <h3 className="mb-sm-3 mb-5">
          Jhay<span className="text_accent">Weather</span>
        </h3>
        {/* Form */}
        <div className="search_container">
          <form
            className="form-inline"
            onSubmit={(e) => {
              e.preventDefault();
              getWeatherHandler();
            }}
          >
            <div className="input-group input-group-lg">
              <input
                type="text"
                className="form-control border-0 bg_primary_color_2"
                style={{ color: "white", outline: "none" }}
                placeholder="Search for places"
                value={searchTerm ?? ""}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  if (e.target.value.trim().length === 0) {
                    setNotFound(false);
                    setPageIsLoading(true);
                  }
                }}
              />
              <div className="input-group-append input-group-lg">
                <button
                  className="btn btn-outline-secondary border-0 bg_primary_color_2"
                  type="submit"
                >
                  <i className="fa fa-search" style={{ color: "white" }}></i>
                </button>
              </div>
            </div>
          </form>
        </div>

        <p className="m-0 mt-2 text-muted">
          {notFound
            ? "No matching location found. Try again"
            : "Just type the name of the city and press enter"}
        </p>

        {pageIsLoading || notFound ? <Spinner /> : ""}

        {/* display one small screen */}
        <div className="d-sm-none d-block mt-4">
          <p className="city_name text m-0 mb-2 fs-5">
            {weather_info?.city ? `${weather_info?.city} , ` : ""}
            {weather_info?.country_code ?? ""}
          </p>
          <p className="city_date text m-0 text-muted lead">{`${
            date?.day ?? ""
          } ${date?.dateStr ?? ""} ${date?.year ?? ""}`}</p>
        </div>
      </div>
    </>
  );
};

export default Header;
