import { Heading, Paragraph } from "../GlobalElements";
import { CardWrapper } from "./SliderElements";

const Slider = () => {
  return (
    <>
      <div className="relative w-full flex flex-col gap-6 md:flex-row">
        <div className="basis-1/2 space-y-[18px]">
          <Heading
            type="h2"
            widths={["w-4/5"]}
            text="Our Features Special For You"
          />
          <Paragraph
            isPrimary={false}
            sizes={["text-base"]}
            widths={["w-9/12"]}
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
    </>
  );
};

export default Slider;
