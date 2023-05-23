import { useState } from "react";
import {
  HeroSection,
  PlatformSection,
  FeatureSection,
  PriceSection,
  CardSection,
  FaqCard,
} from "./components";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import { Heading } from "./components/GlobalElements";
import { useInView } from "react-intersection-observer";

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

const data = {
  title: "FAQs",
  lists: [
    {
      id: "one",
      title: "01. Can I Find the right information faster?",
      description:
        "Nulla lectus lectus, suscipit at posuere sit amet, imperdiet sit amet sapien. Donec ornare odio justo, acefficitur enim fermen. Nam enim ligula, lacinia vitae venenatis quis, suscipit id augue.",
    },
    {
      id: "two",
      title: "02. How to share feature demos and ideas?",
      description:
        "Nulla lectus lectus, suscipit at posuere sit amet, imperdiet sit amet sapien. Donec ornare odio justo, acefficitur enim fermen. Nam enim ligula, lacinia vitae venenatis quis, suscipit id augue.",
    },
    {
      id: "three",
      title: "03. How to get insights from users?",
      description:
        "Nulla lectus lectus, suscipit at posuere sit amet, imperdiet sit amet sapien. Donec ornare odio justo, acefficitur enim fermen. Nam enim ligula, lacinia vitae venenatis quis, suscipit id augue.",
    },
    {
      id: "four",
      title: "04. Can I develop my website without code?",
      description:
        "Nulla lectus lectus, suscipit at posuere sit amet, imperdiet sit amet sapien. Donec ornare odio justo, acefficitur enim fermen. Nam enim ligula, lacinia vitae venenatis quis, suscipit id augue.",
    },
  ],
};

function FAQSection() {
  const [selectedAccordion, setSelectedAccordion] = useState("");

  const { ref: sectioRef, inView: isSectionInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const handleSelectedAccordion = (currentAccordion) => {
    setSelectedAccordion((prevAccordion) => {
      if (prevAccordion === currentAccordion) {
        return "";
      }

      return currentAccordion;
    });
  };

  return (
    <Layout
      bg="bg-white"
      padding={["px-5", "py-10", "md:px-6", "md:py-12", "lg:py-20"]}
    >
      <div ref={sectioRef} className={`relative space-y-14 text-center duration-[1s] ease-in-out ${isSectionInView ? "bottom-0 opacity-100" : "-bottom-40 opacity-0"}`}>
        <Heading type="h2" text={data.title} />
        <div className="grid divide-y divide-[#E4E4E4] text-left">
          {data.lists.map((list) => (
            <FaqCard
              key={list.id}
              data={{ ...list, isOpen: selectedAccordion === list.id }}
              title={<FaqCard.Title />}
              description={<FaqCard.Description />}
              button={<FaqCard.Button onClick={handleSelectedAccordion} />}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default App;
