import React, { useState } from "react";
import Layout from "../Layout";
import { Heading, Paragraph } from "../GlobalElements";

const FaqDescription = ({ isOpen, description }) => {
  return (
    <div
      className={`grid ${
        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      } transition-all duration-300 ease-in`}
    >
      <Paragraph isPrimary={false} text={description} />
    </div>
  );
};

const FaqSection = ({ isOpen, handleOpen, title, description }) => {
  return (
    <div className="grid grid-cols-[1fr_32px] py-10 first:pt-0 last:pb-0">
      <div className="space-y-4">
        <Heading type="h4" text={title} />
        <FaqDescription isOpen={isOpen} description={description} />
      </div>
      <div>
        <button
          onClick={handleOpen}
          className={`flex h-8 w-8 items-center justify-center rounded-full font-poppins text-2xl font-medium transition-all duration-300 ease-in ${
            isOpen
              ? "rotate-0 bg-[#DDF247] text-black"
              : "rotate-90 border border-black text-[#DDF247]"
          }`}
        >
          {isOpen ? "-" : "+"}
        </button>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [selectedAccordion, setSelectedAccordion] = useState("");

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
      <div className="space-y-14 text-center">
        <Heading type="h2" text="FAQs" />
        <div className="grid divide-y divide-[#E4E4E4] text-left">
          <FaqSection
            isOpen={selectedAccordion === "one"}
            handleOpen={() => handleSelectedAccordion("one")}
            title="01. Can I Find the right information faster?"
            description="Nulla lectus lectus, suscipit at posuere sit amet, imperdiet sit amet sapien. Donec ornare odio justo, ac efficitur enim fermen. Nam enim ligula, lacinia vitae venenatis quis, suscipit id augue."
          />
          <FaqSection
            isOpen={selectedAccordion === "two"}
            handleOpen={() => handleSelectedAccordion("two")}
            title="02. How to share feature demos and ideas?"
            description="Nulla lectus lectus, suscipit at posuere sit amet, imperdiet sit amet sapien. Donec ornare odio justo, ac efficitur enim fermen. Nam enim ligula, lacinia vitae venenatis quis, suscipit id augue."
          />
          <FaqSection
            isOpen={selectedAccordion === "three"}
            handleOpen={() => handleSelectedAccordion("three")}
            title="03. How to get insights from users?"
            description="Nulla lectus lectus, suscipit at posuere sit amet, imperdiet sit amet sapien. Donec ornare odio justo, ac efficitur enim fermen. Nam enim ligula, lacinia vitae venenatis quis, suscipit id augue."
          />
          <FaqSection
            isOpen={selectedAccordion === "four"}
            handleOpen={() => handleSelectedAccordion("four")}
            title="04. Can I develop my website without code?"
            description="Nulla lectus lectus, suscipit at posuere sit amet, imperdiet sit amet sapien. Donec ornare odio justo, ac efficitur enim fermen. Nam enim ligula, lacinia vitae venenatis quis, suscipit id augue."
          />
        </div>
      </div>
    </Layout>
  );
};

export default FAQSection;
