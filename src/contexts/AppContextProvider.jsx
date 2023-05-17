// ... React modules

import HelperContextProvider from "./HelperContextProvider";
import WeatherContextProvider from "./WeatherContextProvider";

// ... Components

// ... Assets

const AppContextProvider = ({ children }) => {
  return (
    <>
      <HelperContextProvider>
        <WeatherContextProvider>{children}</WeatherContextProvider>
      </HelperContextProvider>
    </>
  );
};

export default AppContextProvider;
