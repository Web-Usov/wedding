import { WeddingData } from "../types/wedding";
import { Section, SectionTitle } from "./ui";
interface Props {
  weddingData: WeddingData;
}

export default function FooterSection({}: Props) {
  return (
    <Section>
      {/* <SectionTitle>Тайминги</SectionTitle> */}
      <SectionTitle>С любовью, Алексей и Мария</SectionTitle>
    </Section>
  );
}
