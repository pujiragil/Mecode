import content from "../../data/content.json";
import { Heading, Paragraph } from "../GlobalElements";
import Layout from "../Layout";
import Navbar from "../Navbar";

const HeroButton = () => {
  return (
    <button className="px-6 py-3 flex items-center gap-3 font-poppins font-semibold bg-black text-white rounded md:text-xl">
      Get started
      <img
        className="w-8 h-auto md:w-10"
        src="/assets/arrow-button.svg"
        alt="arrow"
      />
    </button>
  );
};
const HeroText = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <Heading
          type="h1"
          widths={["w-full"]}
          text="Improve your skills by study with coding"
        />
        <img
          className="w-16 h-auto object-cover"
          src="/assets/line.svg"
          alt="line"
        />
        <Paragraph
          isPrimary={true}
          sizes={["text-base", "md:text-lg"]}
          widths={["w-full", "md:w-8/12", "lg:w-10/12"]}
          text="Create, launch, and iterate on new marketing campaigns without distracting your product team."
        />
      </div>
      <HeroButton />
    </div>
  );
};

const HeroImage = () => {
  return (
    <div className="relative lg:after:absolute lg:after:top-0 lg:after:left-0 lg:after:bg-black lg:after:h-full lg:after:w-[50vw]">
      <div className="relative flex justify-center items-center w-full h-full overflow-hidden bg-black">
        <img
          className="absolute bottom-0 right-0 z-[3] h-auto w-4/5 max-w-[300px] sm:max-w-[350px] md:max-w-[370px]"
          src="/assets/person.webp"
          alt="person"
        />
        <img
          className="absolute z-[1] bottom-10 -right-10 h-full max-w-[400px] sm:max-w-[500px] md:max-w-[80%] lg:right-0 lg:max-w-[650px]"
          src="/assets/yellow.svg"
          alt="yellow"
        />
      </div>
      <img
        className="absolute z-[2] bottom-10 left-0 h-auto w-11/12 sm:w-8/12 md:w-8/12 lg:-left-36 lg:w-full lg:max-w-[600px] lg:bottom-0"
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
        <div className="p-5 pb-20 space-y-14 md:p-6 md:pb-20">
          <Navbar data={content.navbar} />
          <HeroText />
        </div>
        <HeroImage />
      </div>
    </Layout>
  );
}
