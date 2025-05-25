import { WeddingData } from "../types/wedding";
import { Section, SectionBackgroundProps } from "./ui";

interface Props extends SectionBackgroundProps {
  weddingData?: WeddingData;
}

export default function HeroSection({ bgImageUrl }: Props) {
  return (
    <Section
      bgImageUrl={bgImageUrl}
      className="flex flex-col justify-center items-center text-center text-accent h-screen "
    >
      <img
        src="/main-bg.png"
        alt="Главное изображение"
        className="w-full h-auto md:w-auto md:h-full rounded-full opacity-90 max-w-none"
      />
    </Section>
  );
}
