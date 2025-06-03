const weddingPart = import.meta.env.VITE_WEDDING_PART as string;
if (!weddingPart || typeof weddingPart !== "string") {
  console.warn(`VITE_WEDDING_PART=${weddingPart}`);
  throw new Error("VITE_WEDDING_PART is not defined");
}

const config = {
  weddingPart,
  weddingDataUrl: `/data-${weddingPart}.json`,
  formEnv: import.meta.env.DEV ? "develop" : weddingPart,
  DEV: import.meta.env.DEV,
  MODE: import.meta.env.MODE,
  NODE_ENV: import.meta.env.NODE_ENV,
};

export { config };
