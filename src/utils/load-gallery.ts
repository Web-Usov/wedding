export function loadGallery() {
  const gallery = document.querySelector(".gallery-grid");
  if (!gallery) {
    console.error("Gallery element not found");
    return;
  }
  const photos = [
    "photo-1.png",
    "photo-2.png",
    "photo-3.png",
    "photo-4.png",
    "photo-5.png",
    "photo-6.png",
  ];

  // Создаем модальное окно
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close">&times;</span>
      <img class="modal-image" src="" alt="Увеличенное фото">
    </div>`;

  document.body.appendChild(modal);

  // Добавляем обработчики для модального окна
  const modalImg = modal.querySelector(".modal-image") as HTMLImageElement;
  const closeBtn = modal.querySelector(".close") as HTMLSpanElement;

  closeBtn?.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Закрытие при клике вне изображения
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    } else {
      console.log(e.target, modal);
    }
  });

  gallery.innerHTML = photos
    .map((photo) => {
      const imgPath = `/gallery/${photo}`;
      return `
        <img 
          src="${imgPath}" 
          alt="Наше фото" 
          class="gallery-img"
          data-full="${imgPath}"
        >`;
    })
    .join("");

  // Добавляем обработчики кликов на изображения
  document.querySelectorAll<HTMLImageElement>(".gallery-img").forEach((img) => {
    img.addEventListener("click", () => {
      if (modalImg) {
        modalImg.src = img.dataset.full || "";
        modal.style.display = "flex";
      }
    });
  });
}
