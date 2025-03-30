import { getHtml } from "./html";
import "./style.css";
import { WeddingData } from "./types/wedding";
import { loadGallery } from "./utils/load-gallery";
import { setupRSVPForm } from "./utils/setup-rsvp-form";
import { setupSmoothScroll } from "./utils/setup-smooth-scroll";

// Загрузка данных
async function loadWeddingData(): Promise<WeddingData> {
  const response = await fetch("/data.json");
  return (await response.json()) as WeddingData;
}

// Рендеринг приложения
async function renderApp() {
  const weddingData = await loadWeddingData();

  const app = document.getElementById("root")!;

  app.innerHTML = await getHtml({ weddingData });
}

// Инициализация
document.addEventListener("DOMContentLoaded", async () => {
  await renderApp();
  loadGallery();
  setupRSVPForm();
  setupSmoothScroll();
});
