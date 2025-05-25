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

export default function AboutSection({
  weddingData,
  bgImageUrl: imageUrl,
}: Props) {
  return (
    <Section bgImageUrl={imageUrl}>
      <SectionTitle>Наша история</SectionTitle>
      <SectionContainer className=" md:grid-cols-2 ">
        <div className="grid gap-5 text-xl">
          {weddingData.couple.description.split("\n").map((item, index) => (
            <p key={index} className="block">
              {item}
            </p>
          ))}
        </div>
        <img
          src="/together.png"
          alt="Наша история"
          className="w-full rounded-lg shadow-lg bg-white"
        />
      </SectionContainer>
    </Section>
  );
}
