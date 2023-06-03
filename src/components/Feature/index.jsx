import { useRef } from "react";
import { useInView } from "framer-motion";
import { Heading, Paragraph } from "../GlobalElements";
import Layout from "../Layout";
import { SliderWrapper } from "./SliderElements";

const FeatureSection = () => {
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { amount: 0.5, once: true });

  const paragraphRef = useRef(null);
  const isParagraphInView = useInView(paragraphRef, {
    amount: 0.5,
    once: true,
  });

  return (
    <Layout
      bg="bg-[#FAFAFA]"
      padding={["px-5", "py-10", "md:px-6", "md:py-12"]}
    >
      <div className="flex w-full flex-col gap-8 overflow-hidden md:flex-row md:items-center">
        <div className="relative basis-full space-y-[18px]">
          <Heading
            type="h2"
            ref={headingRef}
            widths={["w-full", "lg:w-10/12"]}
            animate={`${
              isHeadingInView ? "slide-in-x" : "slide-out-x"
            } delay-300`}
            text="Our Features Special For You"
          />
          <Paragraph
            ref={paragraphRef}
            widths={["w-full"]}
            animate={`${
              isParagraphInView ? "slide-in-x" : "slide-out-x"
            } delay-500`}
            text="We provide various special
            features for all of you"
          />
          <img
            className="absolute bottom-0 right-0 z-0 hidden w-40 -rotate-45 md:block lg:-bottom-2/3 lg:left-0"
            src="/assets/arrow.svg"
            alt="arrow"
          />
        </div>
        <SliderWrapper />
      </div>
    </Layout>
  );
};

export default FeatureSection;
