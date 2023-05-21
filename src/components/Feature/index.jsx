import { Heading, Paragraph } from "../GlobalElements";
import Layout from "../Layout";
import { CardWrapper } from "./SliderElements";

const FeatureSection = () => {
  return (
    <Layout
      bg="bg-[#FAFAFA]"
      padding={["px-5", "py-10", "md:px-6", "md:py-12"]}
    >
      <div className="w-full flex flex-col gap-8 md:flex-row md:items-center">
        <div className="relative basis-full space-y-[18px]">
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
            className="hidden md:block absolute w-40 z-0 -rotate-45 bottom-0 right-0 lg:-bottom-2/3 lg:left-0"
            src="/assets/arrow.svg"
            alt="arrow"
          />
        </div>
        <CardWrapper />
      </div>
    </Layout>
  );
};

export default FeatureSection;
