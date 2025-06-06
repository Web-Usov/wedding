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
  const {
    couple: { title, description },
  } = weddingData;
  return (
    <Section bgImageUrl={imageUrl}>
      <SectionTitle>{title}</SectionTitle>
      <SectionContainer className=" md:grid-cols-1 ">
        <div className="grid gap-5 text-xl text-center">
          {description.split("\n").map((item, index) => (
            <p key={index} className="block">
              {item}
            </p>
          ))}
        </div>
        {/* <SaveTheDateCalendar date={date} /> */}
      </SectionContainer>
    </Section>
  );
}
