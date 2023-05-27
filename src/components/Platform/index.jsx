import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import Layout from "../Layout";

const platforms = [
  {
    id: "edx",
    src: "/assets/edx.svg",
    alt: "edx-icon",
    width: 51,
    height: 31,
    isLazy: true,
  },
  {
    id: "udemy",
    src: "/assets/udemy.svg",
    alt: "udemy-icon",
    width: 84,
    height: 32,
    isLazy: true,
  },
  {
    id: "coursera",
    src: "/assets/coursera.svg",
    alt: "coursera-icon",
    width: 83,
    height: 13,
    isLazy: true,
  },
];

const PlatformImage = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });
  const delayMs = `${props.idx * 200}ms`;

  return (
    <motion.img
      ref={ref}
      src={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height}
      loading={props.isLazy ? "lazy" : "eager"}
      style={{ transitionDelay: delayMs }}
      className={`${
        isInView ? "translate-y-0 opacity-100" : "translate-y-4 md:translate-y-8 opacity-0"
      } h-auto w-full transition-all duration-500 ease-in sm:w-full sm:max-w-[10rem] md:max-w-[11rem] lg:max-w-[12rem]`}
    />
  );
};

const Triangle = () => {
  return (
    <img
      className="absolute -top-28 right-0 z-10 w-32 sm:-top-32 sm:w-40 lg:-top-36 lg:w-44"
      src="/assets/triangle.svg"
      alt="triangle"
    />
  );
};

const PlatformSection = () => {
  return (
    <Layout bg="bg-white" padding={["px-5", "py-10", "md:px-6", "md:py-12"]}>
      <div className="relative">
        <Triangle />
        <div className="grid grid-cols-3 place-items-center gap-14 overflow-hidden">
          {platforms.map((platform, index) => (
            <PlatformImage key={platform.id} idx={index + 1} {...platform} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default PlatformSection;
