import { RefObject, useEffect } from "react";

export const useSectionBackground = (props: {
  parent: RefObject<HTMLElement | null>;
  loop: number;
  path: string;
  imageFormat: string;
}) => {
  const { parent, loop: step, path, imageFormat } = props;

  const getBackgroundImage = (number: number) => {
    return `${path}-${number}.${imageFormat}`;
  };

  useEffect(() => {
    if (parent.current) {
      const sectionsInParent = parent.current.querySelectorAll(
        "section"
      ) as NodeListOf<HTMLElement>;
      sectionsInParent.forEach((section, index) => {
        if (index % 2 === 0) {
          section.style.backgroundImage = `url(${getBackgroundImage(
            (index % step) + 1
          )})`;
        } else {
          section.style.backgroundImage = "none";
        }
      });
    }
  }, [step, path, imageFormat, parent.current]);
};
