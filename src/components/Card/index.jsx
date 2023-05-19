import React from "react";
import Layout from "../Layout";
import { Heading, Paragraph } from "../GlobalElements";

const CardPrimary = () => {
  return (
    <Layout bg="bg-white" padding={["px-5", "py-10", "md:px-6", "md:py-12"]}>
      <div className="grid gap-20 place-items-center lg:grid-cols-2">
        <div className="space-y-8 lg:order-2">
          <div className="space-y-5">
            <Heading
              type="h2"
              widths={["w-full", "sm:w-4/5"]}
              text="The language for building web pages"
            />
            <Paragraph
              isPrimary={false}
              widths={["w-full", "sm:w-4/5", "md:w-8/12", "lg:w-9/12"]}
              text="Go live on a fast, reliable, and hassle-free hosting network that scales with your business with one click and go code!"
            />
          </div>
          <button className="px-6 py-3 flex items-center gap-3 font-poppins font-semibold bg-black text-white rounded md:text-xl">
            Try it Yourself
            <img
              className="w-8 h-auto md:w-10"
              src="/assets/arrow-button.svg"
              alt="arrow-button"
            />
          </button>
        </div>

        <div className="relative w-full flex justify-center sm:w-4/5 md:w-3/4 lg:order-1 lg:w-full">
          <img className="w-full" src="/assets/code2.webp" alt="code" />
          <img
            className="w-28 h-auto object-cover absolute bottom-0 right-0 md:w-40 lg:w-32"
            src="/assets/triangle.svg"
            alt="triangle"
          />
        </div>
      </div>
    </Layout>
  );
};

const CardSection = () => {
  return (
    <>
      <CardPrimary />
    </>
  );
};

export default CardSection;
