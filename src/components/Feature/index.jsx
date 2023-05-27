import { useRef } from "react";
import { useInView } from "framer-motion";
import { Heading, Paragraph } from "../GlobalElements";
import Layout from "../Layout";
import { SliderWrapper } from "./SliderElements";

const FeatureSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px", once: true });

  return (
    <Layout
      bg="bg-[#FAFAFA]"
      padding={["px-5", "py-10", "md:px-6", "md:py-12"]}
    >
      <div className="flex w-full flex-col gap-8 overflow-hidden md:flex-row md:items-center">
        <div
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="relative basis-full space-y-[18px]"
        >
          <Heading
            type="h2"
            widths={["w-full", "lg:w-10/12"]}
            text="Our Features Special For You"
          />
          <Paragraph
            isPrimary={false}
            sizes={["text-base", "md:text-lg"]}
            widths={["w-full"]}
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
