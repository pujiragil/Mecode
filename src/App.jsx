import { HeroSection, PlatformSection, FeatureSection } from "./components";
import Section from "./components/Section";
import Card from "./components/Card";
import FAQ from "./components/faq";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <HeroSection />
      <PlatformSection />
      <FeatureSection />
      <div className="bg-white">
        <div className="container mx-auto">
          <Section />
          <Card />
          <FAQ />
        </div>
      </div>
      <div className="bg-black">
        <div className="container mx-auto">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
