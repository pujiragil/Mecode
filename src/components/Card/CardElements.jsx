import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heading, Paragraph } from "../GlobalElements";

const CardPrimaryContent = () => {
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { amount: 0.5, once: true });

  const paragraphRef = useRef(null);
  const isParagraphInView = useInView(paragraphRef, {
    amount: 0.5,
    once: true,
  });

  const buttonRef = useRef(null);
  const isButtonInView = useInView(buttonRef, { amount: 0.5, once: true });

  return (
    <div className="space-y-8 lg:order-2">
      <div className="space-y-5">
        <Heading
          ref={headingRef}
          type="h2"
          widths={["w-full", "sm:w-4/5", "lg:w-full"]}
          animate={`${
            isHeadingInView
              ? "translate-x-0 opacity-100"
              : "translate-x-40 opacity-0"
          } transition-all duration-700 ease-in-out delay-300`}
          text="The language for building web pages"
        />
        <Paragraph
          ref={paragraphRef}
          sizes={["text-base", "md:text-lg"]}
          widths={["w-full", "sm:w-4/5", "md:w-9/12", "lg:w-10/12"]}
          animate={`${
            isParagraphInView
              ? "translate-x-0 opacity-100"
              : "translate-x-40 opacity-0"
          } transition-all duration-700 ease-in-out delay-[400ms]`}
          text="Go live on a fast, reliable, and hassle-free hosting network that scales with your business with one click and go code!"
        />
      </div>
      <button
        ref={buttonRef}
        className={`${
          isButtonInView
            ? "translate-x-0 opacity-100"
            : "translate-x-40 opacity-0"
        } flex items-center gap-3 rounded bg-black px-6 py-3 font-poppins font-semibold text-white transition-all delay-500 duration-700 ease-in-out md:text-xl`}
      >
        Try it Yourself
        <img
          className="h-auto w-8 md:w-10"
          src="/assets/arrow-button.svg"
          alt="arrow-button"
        />
      </button>
    </div>
  );
};

const CardPrimaryImage = () => {
  return (
    <div className="relative flex w-full justify-center sm:w-4/5 md:w-3/4 lg:order-1 lg:w-full">
      <img className="w-full" src="/assets/code2.webp" alt="code" />
      <img
        className="absolute bottom-0 right-0 h-auto w-28 object-cover md:w-40 lg:w-32"
        src="/assets/triangle.svg"
        alt="triangle"
      />
    </div>
  );
};

const CardSecondaryContentItem = ({ imgLink, title, description, idx }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${idx * 340}ms`,
      }}
      className={`${
        isInView ? "translate-y-0 opacity-100" : "translate-y-[100px] opacity-0"
      } flex w-2/3 flex-col items-center justify-center gap-10 py-10 transition-all duration-500 ease-in-out md:w-full md:items-start md:py-0 md:first:pr-10 md:last:pl-10`}
    >
      <img
        className="h-10 w-10 object-contain"
        src={imgLink}
        alt="university"
      />
      <div className="space-y-8">
        <Heading type="h3" text={title} />
        <Paragraph
          isPrimary={false}
          sizes={["text-base", "md:text-lg"]}
          text={description}
        />
      </div>
    </div>
  );
};

const CardSecondaryContent = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  return (
    <div className="flex flex-col gap-10">
      <div
        ref={ref}
        className={`${
          isInView
            ? "translate-y-0 opacity-100"
            : "translate-y-[100px] opacity-0"
        } transition-all delay-200 delay-300 duration-700 ease-in-out`}
      >
        <Heading
          type="h2"
          widths={["w-full", "md:w-3/4", "lg:w-full"]}
          text="Get up and running fast together"
        />
      </div>
      <div className="grid place-items-center divide-y divide-[#E4E4E4] py-10 md:w-3/4 md:grid-cols-2 md:place-items-start md:divide-x  md:divide-y-0 md:divide-[#EAEAEA] lg:w-full">
        {children}
      </div>
    </div>
  );
};

const CardSecondaryImage = () => {
  return (
    <div className="relative grid max-w-[400px] place-items-center p-6 before:absolute before:left-0 before:top-0 before:h-3/4 before:w-full before:rounded-xl before:bg-black md:max-w-[460px] lg:place-self-end">
      <div className="relative flex w-full justify-end overflow-hidden rounded-xl bg-[#DDF247] p-5">
        <div className="absolute left-6 top-6 space-y-3 text-left font-poppins font-bold">
          <p className="text-xl text-black/30">TUTORS</p>
          <h3 className="text-2xl text-black/20">Anthoney Mills</h3>
        </div>
        <img
          className="relative -bottom-20 -right-5"
          src="/assets/tutors.webp"
          alt="tutors"
        />
      </div>
    </div>
  );
};

export {
  CardPrimaryContent,
  CardPrimaryImage,
  CardSecondaryContent,
  CardSecondaryContentItem,
  CardSecondaryImage,
};
