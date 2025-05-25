import { WeddingData } from "../types/wedding";
import {
  Section,
  SectionBackgroundProps,
  SectionContainer,
  SectionTitle,
} from "./ui";

interface Props extends SectionBackgroundProps {
  weddingData: WeddingData;
}

export default function ProgramSection({ weddingData, bgImageUrl }: Props) {
  return (
    <Section bgImageUrl={bgImageUrl}>
      <SectionTitle>Тайминги</SectionTitle>
      <SectionContainer className="md:grid-cols-3 items-stretch">
        {weddingData.program.map((item) => (
          <div
            key={item.time}
            className="bg-white/85 p-8 rounded-lg shadow-md text-center flex flex-col justify-between items-center gap-5"
          >
            <h3 className="text-accent text-xl">{item.time}</h3>
            <hr className="border-secondary border w-1/2" />
            <p className="text-accent">
              {item.event}
              {item.description && (
                <span className="block text-accent">{item.description}</span>
              )}
            </p>
          </div>
        ))}
      </SectionContainer>
    </Section>
  );
}
