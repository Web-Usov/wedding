import { WeddingData } from "../types/wedding";
import {
  Button,
  Section,
  SectionBackgroundProps,
  SectionContainer,
  SectionTitle,
} from "./ui";

interface Props extends SectionBackgroundProps {
  weddingData: WeddingData;
}

export default function LocationSection({ weddingData, bgImageUrl }: Props) {
  return (
    <Section bgImageUrl={bgImageUrl}>
      <SectionTitle>Локация</SectionTitle>
      <SectionContainer className=" md:grid-cols-2 ">
        <div>
          <img
            src={weddingData.location.image}
            alt={weddingData.location.name}
            className="w-full max-h-[70vh] object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="text-accent text-3xl">{weddingData.location.name}</h3>
          <p className="italic text-gold">{weddingData.location.address}</p>
          <p>{weddingData.location.description}</p>
          <a
            href={weddingData.location.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="hover:-translate-y-1 w-full">
              Посмотреть на карте
            </Button>
          </a>
        </div>
      </SectionContainer>
    </Section>
  );
}
