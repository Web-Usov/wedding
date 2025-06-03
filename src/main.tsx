import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";
import { NocodbClient } from "./nocodb";
import { config } from "./config";
import { WeddingData } from "./types";

console.log("Config", config);
export const ApiClient = NocodbClient.connect();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

fetch(config.weddingDataUrl)
  .then((res) => res.json())
  .then((data) => {
    const weddingData: WeddingData = {
      ...data,
    };
    root.render(
      <React.StrictMode>
        <App weddingData={weddingData} />
      </React.StrictMode>
    );
  })
  .catch(console.error);
