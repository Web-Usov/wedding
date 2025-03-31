export function setupSectionBg(
  maxBgIndex: number,
  bgPath: string,
  bgFormat: string
) {
  const sections = document.querySelectorAll(
    ".section"
  ) as NodeListOf<HTMLElement>;
  let lastBgIndex = 0;
  sections.forEach((section, sectionIndex) => {
    const isSectionWithBg = !!!(sectionIndex % 2);

    if (!isSectionWithBg) return;
    lastBgIndex++;
    const pgPath = `/${bgPath}-${lastBgIndex}.${bgFormat}`;
    if (lastBgIndex >= maxBgIndex) lastBgIndex = 0;
    section.style.backgroundImage = `url(${pgPath})`;
  });
}
