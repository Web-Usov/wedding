import { WeddingData } from "../types/wedding";
import SaveTheDateCalendar from "./Calendar";
import { Section, SectionBackgroundProps, SectionContainer } from "./ui";

interface Props extends SectionBackgroundProps {
  weddingData: WeddingData;
}

export default function CalendarSection({
  weddingData,
  bgImageUrl: imageUrl,
}: Props) {
  const { date } = weddingData;
  return (
    <Section bgImageUrl={imageUrl}>
      <SectionContainer>
        <SaveTheDateCalendar date={date} />
      </SectionContainer>
    </Section>
  );
}
