// ... React modules

// ... Context

// ... Components
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import Aside from "../components/aside/Aside";

// ... Assets
const Layout = () => {
  return (
    <>
      <div id="app_layout">
        <div className="app_wrapper d-flex justify-content-center align-items-center">
          <div className="app_container bg_primary_color_1 p-3 container-lg">
            <Header />

            <Main />

            <Aside />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
