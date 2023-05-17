import { Heading, Paragraph } from "../GlobalElements";
import Layout from "../Layout";
import { CardWrapper } from "./SliderElements";

const FeatureSection = () => {
  return (
    <Layout bg="bg-[#FAFAFA]" padding={["px-5", "py-10", "md:px-6", "md:py-12"]}>
      <div className="relative w-full flex flex-col gap-8 md:flex-row">
        <div className="basis-full space-y-[18px]">
          <Heading
            type="h2"
            widths={["w-full"]}
            text="Our Features Special For You"
          />
          <Paragraph
            isPrimary={false}
            sizes={["text-base"]}
            widths={["w-10/12"]}
            weights={["font-extralight"]}
            text="We provide various special
            features for all of you"
          />
        </div>
        <img
          className="hidden lg:block absolute w-40 lg:left-60 lg:bottom-[140px] lg:-rotate-45"
          src="/assets/arrow.svg"
          alt="arrow"
        />
        <CardWrapper />
      </div>
    </Layout>
  );
};

export default FeatureSection;
