import { useRef } from "react";
import { useInView } from "framer-motion";

import content from "../../data/content.json";
import { Heading, Paragraph } from "../GlobalElements";
import Layout from "../Layout";
import Navbar from "../Navbar";

const HeroButton = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <button
      ref={ref}
      className={`${
        isInView ? "slide-in-y delay-300" : "slide-out-y"
      } flex items-center gap-3 rounded bg-black px-6 py-3 font-poppins font-semibold text-white md:text-xl`}
    >
      Get started
      <img
        className="h-auto w-8 md:w-10"
        src="/assets/arrow-button.svg"
        alt="arrow"
      />
    </button>
  );
};
const HeroText = () => {
  const headRef = useRef(null);
  const isHeadInView = useInView(headRef, { once: true });

  const paragraphRef = useRef(null);
  const isParagraphInView = useInView(paragraphRef, { once: true });

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <Heading
          ref={headRef}
          type="h1"
          widths={["w-full"]}
          animate={`${isHeadInView ? "slide-in-y" : "slide-out-y"}`}
          text="Improve your skills by study with coding"
        />
        <img
          className="h-auto w-16 object-cover"
          src="/assets/line.svg"
          alt="line"
        />
        <Paragraph
          ref={paragraphRef}
          font={{
            family: "source",
          }}
          animate={`${
            isParagraphInView ? "slide-in-y delay-200" : "slide-out-y"
          }`}
          widths={["w-full", "md:w-8/12", "lg:w-10/12"]}
          text="Create, launch, and iterate on new marketing campaigns without distracting your product team."
        />
      </div>
      <HeroButton />
    </div>
  );
};

const PersonImage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <img
      ref={ref}
      className={`${
        isInView ? "translate-x-0 opacity-100" : "translate-x-40 opacity-0"
      } absolute bottom-0 right-0 z-[3] h-auto w-4/5 max-w-[300px] transition-all duration-700 ease-in-out sm:max-w-[350px] md:max-w-[370px]`}
      src="/assets/person.webp"
      alt="person"
    />
  );
};

const CodeImage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <img
      ref={ref}
      className={`${
        isInView
          ? "translate-y-0 opacity-100 delay-300"
          : "translate-y-[200px] opacity-0 "
      } absolute bottom-10 left-0 z-[2] h-auto w-11/12 transition-all duration-500 ease-in-out sm:w-8/12 md:w-8/12 lg:-left-36 lg:bottom-0 lg:w-full lg:max-w-[600px]`}
      src="/assets/code.webp"
      alt="code"
    />
  );
};

const HeroImage = () => {
  return (
    <div className="relative lg:after:absolute lg:after:left-0 lg:after:top-0 lg:after:h-full lg:after:w-[50vw] lg:after:bg-black">
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-black">
        <PersonImage />
        <img
          className="absolute -right-10 bottom-10 z-[1] h-full max-w-[400px] sm:max-w-[500px] md:max-w-[80%] lg:right-0 lg:max-w-[650px]"
          src="/assets/yellow.svg"
          alt="yellow"
        />
      </div>
      <CodeImage />
    </div>
  );
};

export default function HeroSection() {
  return (
    <Layout bg={"bg-[#FAFAFA]"}>
      <div className="grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
        <div className="space-y-14 p-5 pb-20 md:p-6 md:pb-20">
          <Navbar data={content.navbar} />
          <HeroText />
        </div>
        <HeroImage />
      </div>
    </Layout>
  );
}
