import { getHtml } from "./html";
import "./base.css";
import "./style.css";
import { WeddingData } from "./types/wedding";
import { loadGallery } from "./utils/load-gallery";
import { setupRSVPForm } from "./utils/setup-rsvp-form";
import { setupScrolling } from "./utils/scrolling/scrolling";
import { setupSectionBg } from "./utils/setup-section-bg";

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

  setupScrolling();
}

// Инициализация
document.addEventListener("DOMContentLoaded", async () => {
  await renderApp();
  loadGallery();
  setupRSVPForm();
  setupSectionBg(3, "wedding-bg", "png");
});
