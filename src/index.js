import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DarkModeContextProvider } from "./context4dash/darkModeContext";

ReactDOM.render(
  <React.StrictMode>
      <DarkModeContextProvider>
      <App />
      </DarkModeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
