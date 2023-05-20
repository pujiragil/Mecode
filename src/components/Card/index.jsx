import Layout from "../Layout";
import { Heading, Paragraph } from "../GlobalElements";

const CardPrimary = () => {
  return (
    <Layout
      bg="bg-white"
      padding={["px-5", "py-10", "md:px-6", "md:py-12", "lg:py-20"]}
    >
      <div className="grid place-items-center gap-20 lg:grid-cols-2">
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
          <button className="flex items-center gap-3 rounded bg-black px-6 py-3 font-poppins font-semibold text-white md:text-xl">
            Try it Yourself
            <img
              className="h-auto w-8 md:w-10"
              src="/assets/arrow-button.svg"
              alt="arrow-button"
            />
          </button>
        </div>

        <div className="relative flex w-full justify-center sm:w-4/5 md:w-3/4 lg:order-1 lg:w-full">
          <img className="w-full" src="/assets/code2.webp" alt="code" />
          <img
            className="absolute bottom-0 right-0 h-auto w-28 object-cover md:w-40 lg:w-32"
            src="/assets/triangle.svg"
            alt="triangle"
          />
        </div>
      </div>
    </Layout>
  );
};

const CardSecondary = () => {
  return (
    <Layout
      bg="bg-white"
      padding={["px-5", "py-10", "md:px-6", "md:py-12", "lg:py-20"]}
    >
      <div className="grid place-items-center gap-10 text-center md:text-left lg:grid-cols-2 lg:place-items-end ">
        {/* content */}
        <div className="flex flex-col gap-10">
          <Heading
            type="h2"
            widths={["w-full", "md:w-3/4", "lg:w-full"]}
            text="Get up and running fast together"
          />
          <div className="grid place-items-center divide-y divide-[#E4E4E4] py-10 md:w-3/4 md:grid-cols-2 md:place-items-start md:divide-x  md:divide-y-0 md:divide-[#EAEAEA] lg:w-full">
            <div className="flex w-2/3 flex-col items-center justify-center gap-10 py-10 md:w-full md:items-start md:py-0 md:pr-10">
              <img
                className="h-10 w-10 object-contain"
                src="/assets/university.svg"
                alt="university"
              />
              <div className="space-y-8">
                <Heading type="h3" text="University" />
                <Paragraph
                  isPrimary={false}
                  text="Browse hundreds of in-depth videos, courses, and guides to get up and running fast"
                />
              </div>
            </div>
            <div className="flex w-2/3 flex-col items-center justify-center gap-10 py-10 md:w-full md:items-start md:py-0 md:pl-10">
              <img
                className="h-10 w-10 object-contain"
                src="/assets/showcase.svg"
                alt="showcase"
              />
              <div className="space-y-8">
                <Heading type="h3" text="Showcase" />
                <Paragraph
                  isPrimary={false}
                  text="Get inspired by the incredible websites built by members of the community"
                />
              </div>
            </div>
          </div>
        </div>
        {/* image */}
        <div className="relative grid max-w-[400px] place-items-center p-6 before:absolute before:left-0 before:top-0 before:h-3/4 before:w-full before:rounded-xl before:bg-black lg:max-w-[400px] lg:max-w-[460px] lg:place-self-end">
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
      </div>
    </Layout>
  );
};

const CardSection = () => {
  return (
    <>
      <CardPrimary />
      <CardSecondary />
    </>
  );
};

export default CardSection;
