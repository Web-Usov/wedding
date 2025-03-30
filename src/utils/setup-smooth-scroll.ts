// Плавная прокрутка
export function setupSmoothScroll() {
  const sections = document.querySelectorAll<HTMLElement>(".section");
  const navDots = document.querySelector<HTMLDivElement>(".page-nav-dots");

  // Создаем точки навигации
  if (navDots) {
    sections.forEach((_, index) => {
      const dot = document.createElement("div");
      dot.className = "page-nav-dot";
      (dot as HTMLElement).dataset.index = index.toString();
      navDots.appendChild(dot);
    });

    console.log("navDots", navDots);
  } else {
    console.log("no navDots");
  }

  // Обновляем активную точку
  function updateActiveDot() {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach((section, index) => {
      const dot = document.querySelector<HTMLElement>(
        `.page-nav-dot[data-index="${index}"]`
      );
      if (!dot) return;

      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }

  // Обработка кликов по точкам
  document.querySelectorAll<HTMLElement>(".page-nav-dot").forEach((dot) => {
    dot.addEventListener("click", () => {
      const index = dot.dataset.index;
      if (index && sections[Number(index)]) {
        sections[Number(index)].scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Обработка кликов по якорям
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = anchor.getAttribute("href");
      if (!targetId) return;

      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Обновляем точки при скролле
  window.addEventListener("scroll", updateActiveDot);
  updateActiveDot(); // Инициализация

  // Обработка скролла колесом
  let isScrolling = false;
  let lastScrollTime = 0;

  // Обработка клавиш стрелок
  window.addEventListener("keydown", (e) => {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
    e.preventDefault();

    const direction = e.key === "ArrowDown" ? 1 : -1;
    const sections = document.querySelectorAll(".section, .hero");
    const currentScroll = window.scrollY;
    const viewportHeight = window.innerHeight;

    let targetSection: Element | null = null;

    // Определяем следующую секцию для скролла
    if (direction > 0) {
      // Стрелка вниз
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const sectionTop = section.getBoundingClientRect().top + currentScroll;
        if (sectionTop > currentScroll + viewportHeight * 0.3) {
          targetSection = section;
          break;
        }
      }
    } else {
      // Стрелка вверх
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const sectionTop = section.getBoundingClientRect().top + currentScroll;
        if (sectionTop < currentScroll - viewportHeight * 0.3) {
          targetSection = section;
          break;
        }
      }
    }

    if (targetSection) {
      isScrolling = true;
      lastScrollTime = Date.now();
      targetSection.scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        isScrolling = false;
      }, 800);
    }
  });

  window.addEventListener(
    "wheel",
    (e) => {
      const now = Date.now();
      if (isScrolling || now - lastScrollTime < 500 || Math.abs(e.deltaY) < 50)
        return;

      const direction = Math.sign(e.deltaY);
      const sections = document.querySelectorAll(".section, .hero");
      const currentScroll = window.scrollY;
      const viewportHeight = window.innerHeight;

      let targetSection: Element | null = null;

      // Определяем следующую секцию для скролла
      if (direction > 0) {
        // Скролл вниз
        for (let i = 0; i < sections.length; i++) {
          const section = sections[i];
          const sectionTop =
            section.getBoundingClientRect().top + currentScroll;
          if (sectionTop > currentScroll + viewportHeight * 0.3) {
            targetSection = section;
            break;
          }
        }
      } else {
        // Скролл вверх
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          const sectionTop =
            section.getBoundingClientRect().top + currentScroll;
          if (sectionTop < currentScroll - viewportHeight * 0.3) {
            targetSection = section;
            break;
          }
        }
      }

      if (targetSection) {
        isScrolling = true;
        lastScrollTime = now;
        targetSection.scrollIntoView({ behavior: "smooth" });

        setTimeout(() => {
          isScrolling = false;
        }, 800);
      }
    },
    { passive: true }
  );
}
