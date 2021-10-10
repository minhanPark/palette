import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Rounter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Rounter>
      <App />
    </Rounter>
  </React.StrictMode>,
  document.getElementById("root")
);
