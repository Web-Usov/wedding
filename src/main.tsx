import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const weddingPart = import.meta.env.VITE_WEDDING_PART as string;
if (!weddingPart || typeof weddingPart !== "string") {
  console.warn(`VITE_WEDDING_PART=${weddingPart}`);
  throw new Error("VITE_WEDDING_PART is not defined");
}

const weddingDataUrl = `/data-${weddingPart}.json`;

fetch(weddingDataUrl)
  .then((res) => res.json())
  .then((data) =>
    root.render(
      <React.StrictMode>
        <App weddingData={data} />
      </React.StrictMode>
    )
  )
  .catch(console.error);
