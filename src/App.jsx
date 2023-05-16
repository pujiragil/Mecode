import content from "./data/content.json";

import Navbar from "./components/Navbar";
import HeroSection, { HeroImage, HeroText } from "./components/Hero";
import Platform from "./components/Platform";
import Slider from "./components/Slider";
import Section from "./components/Section";
import Card from "./components/Card";
import FAQ from "./components/faq";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <HeroSection />
      <div className="bg-white">
        <div className="container mx-auto">
          <Platform />
        </div>
      </div>
      <div className="bg-main">
        <div className="container mx-auto p-5">
          <Slider />
        </div>
      </div>
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
