// ... React modules
import ReactDOM from "react-dom/client";

// ... Components
import App from "./App";

// ... Assets
import "./assets/css/main.css";
import "./assets/css/media_queries.css";
import "./assets/css/theme.css";
import "./assets/css/utils.css";
import "./assets/css/spinner.css";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<App />);
