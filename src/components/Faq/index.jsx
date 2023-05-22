import React from "react";
import Layout from "../Layout";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useState } from "react";
// import { FaqWrapper } from "./FaqElements";
import { Heading } from "../GlobalElements";

const FaqDescription = ({ isOpen, description }) => {
  return (
    <div
      className={`${
        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      } grid transition-all duration-300 ease-in`}
    >
      <p>{description}</p>
    </div>
  );
};

const FaqSection = ({ isOpen, title, description }) => {
  const [open, setOpen] = useState(false);

  const clickOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="grid divide-y divide-[#E4E4E4]">
      <div className="grid grid-cols-[1fr_32px]">
        <div>
          <Heading type="h4" text={title} />
          <p>{description}</p>
        </div>
        <div>
          <button
            className={`h-8 w-8 rounded-full font-poppins text-2xl font-medium ${
              isOpen
                ? "bg-[#DDF247] text-black"
                : "border border-black text-[#DDF247]"
            }`}
          >
            {isOpen ? "-" : "+"}
          </button>
        </div>
      </div>
    </div>
  );
};

const FaqSubtitle = ({ text }) => {
  return <h2 className="font-inter w-3/4 text-xl font-medium">{text}</h2>;
};

const FaqButton = ({ open, clickOpen }) => {
  return (
    <div>
      <button
        onClick={clickOpen}
        className="block flex h-10 w-10 items-center justify-center  rounded-full bg-primary-card text-xl"
      >
        {open ? <FaMinus /> : <FaPlus />}
      </button>
    </div>
  );
};

const FaqAnswer = ({ open }) => {
  return (
    <div
      className={`${
        open ? "h-fit duration-300 ease-in-out" : "h-0 overflow-hidden"
      } font-inter w-11/12 text-justify text-lg font-extralight md:w-3/4`}
    >
      <p>
        Nulla lectus lectus, suscipit at posuere sit amet, imperdiet sit amet
        sapien. Donec ornare odio justo, ac efficitur enim fermen. Nam enim
        ligula, lacinia vitae venenatis quis, suscipit id augue.
      </p>
    </div>
  );
};

const FAQSection = () => {
  return (
    <Layout
      bg="bg-white"
      padding={["px-5", "py-10", "md:px-6", "md:py-12", "lg:py-20"]}
    >
      <div className="space-y-14 text-center">
        <Heading type="h2" text="FAQs" />
        <div className="text-left">
          <FaqSection
            isOpen={true}
            title="01. Can I Find the right information faster?"
            description="Nulla lectus lectus, suscipit at posuere sit amet, imperdiet sit amet sapien. Donec ornare odio justo, ac efficitur enim fermen. Nam enim ligula, lacinia vitae venenatis quis, suscipit id augue."
          />
          <FaqSection
            isOpen={false}
            title="02. How to share feature demos and ideas?"
            description="Nulla lectus lectus, suscipit at posuere sit amet, imperdiet sit amet sapien. Donec ornare odio justo, ac efficitur enim fermen. Nam enim ligula, lacinia vitae venenatis quis, suscipit id augue."
          />
          <FaqSection
            isOpen={false}
            title="03. How to get insights from users?"
            description="Nulla lectus lectus, suscipit at posuere sit amet, imperdiet sit amet sapien. Donec ornare odio justo, ac efficitur enim fermen. Nam enim ligula, lacinia vitae venenatis quis, suscipit id augue."
          />
          <FaqSection
            isOpen={false}
            title="04. Can I develop my website without code?"
            description="Nulla lectus lectus, suscipit at posuere sit amet, imperdiet sit amet sapien. Donec ornare odio justo, ac efficitur enim fermen. Nam enim ligula, lacinia vitae venenatis quis, suscipit id augue."
          />
        </div>
        {/* <FaqWrapper /> */}
      </div>
    </Layout>
  );
};

export default FAQSection;
