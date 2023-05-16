import content from "../../data/content.json";
import { Heading, Paragraph } from "../GlobalElements";
import Layout from "../Layout";
import Navbar from "../Navbar";

const HeroButton = () => {
  return (
    <button className="px-5 py-3 flex items-center gap-4 font-poppins font-medium bg-black text-white md:text-[22px]">
      Get started
      <img
        className="w-[35px] h-[35px] object-center md:w-[45px] md:h-[45px]"
        src="/assets/arrow-button.svg"
        alt="arrow"
      />
    </button>
  );
};

export const HeroText = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <Heading type="h1" text="Improve your skills by study with coding" />
        <img
          className="w-16 h-auto object-cover"
          src="/assets/line.svg"
          alt="line"
        />
        <Paragraph
          isPrimary={true}
          sizes={["text-xs", "md:text-base"]}
          widths={["w-full", "md:w-4/5"]}
          text="Create, launch, and iterate on new marketing campaigns without distracting your product team."
        />
      </div>
      <HeroButton />
    </div>
  );
};

export const HeroImage = () => {
  return (
    <div className="relative lg:after:absolute lg:after:top-0 lg:after:left-0 lg:after:bg-black lg:after:h-full lg:after:w-[50vw]">
      <div className="relative flex justify-center items-center w-full h-full overflow-hidden bg-black">
        <img
          className="absolute bottom-0 right-0 z-[3] h-auto w-4/5 max-w-[300px] sm:max-w-[350px] lg:max-w-[400px]"
          src="/assets/person.webp"
          alt="person"
        />
        <img
          className="absolute z-[1] bottom-10 -right-10 max-w-[400px] sm:max-w-[500px] lg:right-0 lg:max-w-[650px]"
          src="/assets/yellow.svg"
          alt="yellow"
        />
      </div>
      <img
        className="absolute z-[2] bottom-10 left-0 h-auto w-10/12 sm:w-3/5 md:w-8/12 lg:-left-32 lg:w-11/12 lg:bottom-0"
        src="/assets/code.webp"
        alt="code"
      />
    </div>
  );
};

export default function HeroSection() {
  return (
    <Layout bg={"bg-[#FAFAFA]"}>
      <div className="grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
        <div className="p-5 pb-20 space-y-14">
          <Navbar data={content.navbar} />
          <HeroText />
        </div>
        <HeroImage />
      </div>
    </Layout>
  );
}
