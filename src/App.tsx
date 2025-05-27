import { WeddingData } from "./types/wedding";
import HeroSection from "./components/1-HeroSection";
import AboutSection from "./components/2-AboutSection";
import LocationSection from "./components/3-LocationSection";
import ProgramSection from "./components/4-ProgramSection";
import DressCodeSection from "./components/6-DressCodeSection";
import RSVPSection from "./components/5-RSVPSection";
import { Disabled } from "./components/0-Disabled.component";
import { useRef } from "react";
import { useSectionBackground } from "./hooks/useSectionBackground";

function App({ weddingData }: { weddingData: WeddingData }) {
  const ref = useRef<HTMLDivElement>(null);

  useSectionBackground({
    parent: ref,
    path: "/wedding-bg",
    loop: 3,
    imageFormat: "png",
  });

  if (weddingData.enabled === false) {
    return (
      <div ref={ref}>
        <Disabled />
      </div>
    );
  }
  return (
    <div ref={ref}>
      <HeroSection weddingData={weddingData} />
      <AboutSection weddingData={weddingData} />
      <LocationSection weddingData={weddingData} />
      {weddingData.dressCode?.enabled && (
        <DressCodeSection weddingData={weddingData} />
      )}
      <ProgramSection weddingData={weddingData} />
      {/* <GallerySection weddingData={weddingData} /> */}
      <RSVPSection />
    </div>
  );
}

export default App;
