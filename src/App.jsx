import {
  HeroSection,
  PlatformSection,
  FeatureSection,
  PriceSection,
  CardSection,
  FAQSection,
} from "./components";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <HeroSection />
      <PlatformSection />
      <FeatureSection />
      <CardSection />
      <PriceSection />
      <FAQSection />
      <div className="bg-black">
        <div className="container mx-auto">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
