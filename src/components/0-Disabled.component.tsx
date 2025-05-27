import { WeddingData } from "../types";
import { Section, SectionBackgroundProps, SectionContainer } from "./ui";

interface Props extends SectionBackgroundProps {
  weddingData?: WeddingData;
}

export const Disabled = ({ bgImageUrl }: Props) => {
  return (
    <Section bgImageUrl={bgImageUrl} className="h-screen text-center">
      <SectionContainer>
        <p className=" text-5xl text-gray-600">
          Приглашение вот-вот будет готово
        </p>
      </SectionContainer>
    </Section>
  );
};
