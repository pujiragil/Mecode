import {
  HeroSection,
  PlatformSection,
  FeatureSection,
  PriceSection,
  CardSection,
} from "./components";
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
          <CardSection />
          <PriceSection />
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
