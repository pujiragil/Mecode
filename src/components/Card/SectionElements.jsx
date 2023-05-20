import { Button, Heading, Paragraph } from "../GlobalElements";
import { BsArrowRight } from "react-icons/bs";

export const SectionOne = () => {
  return (
    <div className="mb-20 flex flex-col items-center justify-center lg:flex-row lg:items-end lg:justify-between">
      <div className="mb-20 lg:order-2 lg:w-2/5">
        <Heading
          type="h2"
          widths={["w-full"]}
          text="The language for building web pages"
        />
        <Paragraph
          text="Go live on a fast, reliable, and hassle-free hosting network that scales with your business with one click and go code!"
          width="w-full md:w-3/5 lg:w-11/12"
          mb="mb-8"
        />
        <Button
          text="Try it Yourself"
          icon={<BsArrowRight className="text-2xl" />}
          style="flex justify-center items-center gap-x-4 bg-primary-button text-primary font-medium w-full md:w-3/5 py-5 text-lg font-inter"
        />
      </div>
      <div className="relative lg:order-1 lg:w-fit">
        <img
          className="relative w-full md:w-max"
          src="/assets/code2.webp"
          alt="code"
        />
        <img
          className="absolute -bottom-4 right-0 w-28 rotate-12 object-cover md:w-44 lg:-right-[30px] lg:bottom-[30%] lg:rotate-[29deg]"
          src="/assets/triangle.svg"
          alt="triangle"
        />
      </div>
    </div>
  );
};

export const SectionTwo = () => {
  return (
    <div className="mb-14 flex-col items-center justify-center text-center md:mb-20 md:flex md:text-left lg:items-start">
      <Heading
        type="h2"
        widths={["w-full", "md:w-4/5"]}
        text="Get up and running fast together"
      />
      <div className="relative grid grid-cols-1 grid-rows-2 gap-y-28 md:grid-cols-2 md:grid-rows-1 lg:w-4/5 lg:content-start lg:justify-items-start">
        <CardSection
          logo="/assets/university.svg"
          alt="university"
          title="University"
          paragraph="Browse hundreds of in-depth videos, courses, and guides to get up and running fast"
        />
        <span className="absolute inset-y-1/2 w-full rounded-full border-b-2 border-main md:hidden"></span>
        <CardSection
          logo="/assets/showcase.svg"
          alt="showcase"
          title="Showcase"
          paragraph="Get inspired by the incredible websites built by members of the community"
        />
      </div>
    </div>
  );
};

const CardSection = ({ logo, alt, title, paragraph }) => {
  return (
    <div className="font-inter flex flex-col items-center justify-center text-center lg:items-start lg:text-start">
      <img className="mb-10 block w-10" src={logo} alt={alt} />
      <h1 className="mb-8 text-3xl font-bold">{title}</h1>
      <p className="w-3/4 text-lg">{paragraph}</p>
    </div>
  );
};

export const SectionImg = () => {
  return (
    <div className="mb-[278px] h-80 w-full rounded-lg bg-primary-button p-4 md:mx-auto md:w-3/5 lg:mb-0 lg:max-w-[520px]">
      <div className="font-inter relative h-[368px] w-full rounded-lg bg-primary-card p-4">
        <h2 className="text-2xl font-bold text-black opacity-30">Tutors</h2>
        <h2 className="text-3xl font-bold text-black opacity-20">Manigga</h2>
        <img
          className="absolute bottom-0 right-0 h-[320px] w-auto rounded-lg object-cover"
          src="/assets/tutors.webp"
          alt="Tutors"
        />
      </div>
    </div>
  );
};
