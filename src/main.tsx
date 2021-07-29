import React from "react";
import ReactDOM from "react-dom";
import { App } from "./views/App/App";
import "./styles/global.css";
import "./styles/index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
