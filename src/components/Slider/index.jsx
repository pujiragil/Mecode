import { Paragraph } from "../GlobalElements";
import { HeroTitle } from "../Hero/HeroElements";
import { CardWrapper } from "./SliderElements";

const Slider = () => {
  return (
    <>
      <div className="relative p-4 md:pt-10 lg:pt-4 text-black h-slider min-h-fit lg:h-lg-slider lg:flex lg:items-center lg:justify-center">
        <div className="lg:w-3/4">
          <HeroTitle
            text="Our Features Special For You"
            icon="false"
            style="w-3/4 mb-4 font-bold"
          />
          <Paragraph
            mb="mb-5"
            text="We provide various special features for all of you"
            width="w-1/2"
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
