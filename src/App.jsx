// ... React modules
import { BrowserRouter, Route, Routes } from "react-router-dom";

// ... Components
import Layout from "./layouts/Layout";
import AppContextProvider from "./contexts/AppContextProvider";

// ... Assets

const App = () => {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <Routes>
          <Route path="/jhay-weather/" element={<Layout />} />
          <Route path="*" element="Not found" />
        </Routes>
      </AppContextProvider>
    </BrowserRouter>
  );
};

export default App;
