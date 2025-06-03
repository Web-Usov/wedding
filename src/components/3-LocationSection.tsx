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
  const { locations } = weddingData;
  return (
    <Section bgImageUrl={bgImageUrl}>
      <SectionTitle>Локация</SectionTitle>
      {locations.map((location, index) => (
        <SectionContainer
          className={`md:grid-cols-2 mb-10 last:mb-0 ${
            index % 2 !== 0
              ? "md:[&>*:nth-child(1)]:order-2 md:[&>*:nth-child(2)]:order-1 md:text-right"
              : ""
          }`}
          key={location.name}
        >
          <div>
            <img
              src={location.image}
              alt={location.name}
              className="w-full max-h-[70vh] object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-accent text-3xl">{location.name}</h3>
            <p className="italic text-gold">{location.address}</p>
            <p>{location.description}</p>
            <a href={location.mapUrl} target="_blank" rel="noopener noreferrer">
              <Button className="hover:-translate-y-1 w-full">
                Посмотреть на карте
              </Button>
            </a>
          </div>
        </SectionContainer>
      ))}
    </Section>
  );
}
