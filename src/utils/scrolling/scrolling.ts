import LocomotiveScroll from "locomotive-scroll";

export function setupScrolling() {
  const container = document.querySelector(
    "[data-scroll-container]"
  )! as HTMLElement;

  console.log(`Scroll container detedted: ${!!container}`);

  const scroll = new LocomotiveScroll({
    el: container,
    smooth: true,
    multiplier: 1,
    smartphone: {
      smooth: false,
    },
    reloadOnContextChange: false,
    repeat: true,
  });

  // Добавляем обработчики для точек навигации
  const sections = document.querySelectorAll<HTMLElement>(
    "[data-scroll-section]"
  );

  // Создаем контейнер для точек навигации
  const navContainer = document.createElement("div");
  navContainer.className = "page-nav";
  const dotsContainer = document.createElement("div");
  dotsContainer.className = "page-nav-dots";
  navContainer.appendChild(dotsContainer);
  document.body.appendChild(navContainer);

  // Создаем точки навигации
  sections.forEach((section, index) => {
    const sectionTitle = section.getAttribute("data-title");
    const dot = document.createElement("div");
    const dotTitle = document.createElement("div");
    dotTitle.className = "page-nav-dot-title";
    dotTitle.textContent = sectionTitle;
    dot.appendChild(dotTitle);
    dot.className = "page-nav-dot";
    if (index === 0) dot.classList.add("active");
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll<HTMLElement>(".page-nav-dot");
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      const targetSection = sections[index];
      if (targetSection) {
        scroll.scrollTo(targetSection);
      }
    });
  });

  // Обновляем активную точку при скролле
  scroll.on("scroll", setActiveSection.bind(null, sections, dots));

  // Обновляем активную точку при старте
  setActiveSection(sections, dots);

  return scroll;
}

function setActiveSection(
  sections: NodeListOf<HTMLElement>,
  dots: NodeListOf<HTMLElement>
) {
  let currentSectionIndex = -1;
  const viewportHeight = window.innerHeight;
  const threshold = viewportHeight * 0.3; // 30% от высоты экрана

  Array.from(sections).forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    const visibleHeight =
      Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
    const visibleRatio = visibleHeight / viewportHeight;

    if (
      visibleRatio > 0.5 ||
      (rect.top <= threshold && rect.bottom >= viewportHeight - threshold)
    ) {
      currentSectionIndex = index;
    }
  });

  if (currentSectionIndex >= 0) {
    dots.forEach((dot, i) => {
      if (i === currentSectionIndex) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }
}
