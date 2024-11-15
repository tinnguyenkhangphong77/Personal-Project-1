import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import ProviderMovie from "./pages/store/ProviderMovie";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProviderMovie>
      <App />
    </ProviderMovie>
  </React.StrictMode>
);
serviceWorker.register();
//fdc0f678bb844493bee1a7e44319418d
