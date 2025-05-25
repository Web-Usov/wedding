import { WeddingData } from "../types/wedding";
import { Section, SectionContainer, SectionTitle } from "./ui";

interface Props {
  weddingData: WeddingData;
}

export default function GallerySection({ weddingData }: Props) {
  return (
    <Section>
      <SectionTitle>Наши моменты</SectionTitle>
      <SectionContainer className="md:grid-cols-3 items-stretch">
        {weddingData.gallery.map((photo, index) => (
          <img
            key={index}
            src={`/gallery/${photo}`}
            alt={`Фото ${index + 1}`}
            className="w-full h-64 object-cover rounded-lg shadow-md transition-transform hover:scale-105 cursor-pointer bg-white"
          />
        ))}
      </SectionContainer>
    </Section>
  );
}
