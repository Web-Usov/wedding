import { WeddingData } from "./types/wedding";
import HeroSection from "./components/1-HeroSection";
import AboutSection from "./components/2-AboutSection";
import LocationSection from "./components/3-LocationSection";
import ProgramSection from "./components/4-ProgramSection";
import DressCodeSection from "./components/6-DressCodeSection";
import RSVPSection from "./components/5-RSVPSection";

function App(props: { weddingData: WeddingData }) {
  const { weddingData } = props;

  return (
    <div>
      <HeroSection weddingData={weddingData} bgImageUrl="/wedding-bg-1.png" />
      <AboutSection weddingData={weddingData} />
      <LocationSection
        weddingData={weddingData}
        bgImageUrl="/wedding-bg-2.png"
      />
      <DressCodeSection weddingData={weddingData} />
      <ProgramSection
        weddingData={weddingData}
        bgImageUrl="/wedding-bg-3.png"
      />
      {/* <GallerySection weddingData={weddingData} /> */}
      <RSVPSection />
    </div>
  );
}

export default App;
