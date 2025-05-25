import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

fetch("/data.json")
  .then((res) => res.json())
  .then((data) =>
    root.render(
      <React.StrictMode>
        <App weddingData={data} />
      </React.StrictMode>
    )
  )
  .catch(console.error);
