import { Heading, Paragraph } from "../GlobalElements";
import Layout from "../Layout";

const CardHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 text-center">
      <Heading type="h2" text="Choose your package" />
      <Paragraph
        isPrimary={false}
        widths={["w-10/12"]}
        sizes={["text-base", "md:text-lg"]}
        text="We provide various types of packages just for you"
      />
    </div>
  );
};

const CardItem = ({ isPrimary, title, price, lists }) => {
  return (
    <div
      className={`${
        isPrimary
          ? "bg-[#010101] text-white lg:h-[560px]"
          : "bg-[#F4F4F4] text-black lg:h-[480px]"
      } flex w-full max-w-[400px] flex-col justify-between gap-20 rounded-lg px-8 py-12 text-center sm:h-[500px] md:h-[560px]  md:w-3/5 md:max-w-[460px] lg:w-full`}
    >
      <div className="space-y-9">
        <h3 className="font-poppins text-xl md:text-2xl">{title}</h3>
        <p className="flex justify-center gap-1 font-poppins text-4xl font-bold md:text-5xl">
          <span className="text-base font-normal">$</span>
          {price}
        </p>
        <div className="font-poppins md:text-lg">
          {lists.map((list) => (
            <p key={list}>{list}</p>
          ))}
        </div>
      </div>
      <button
        className={`${
          isPrimary ? "bg-[#DDF247] text-black" : "bg-white text-[#DDF247]"
        } w-full rounded-lg border-none  py-4 font-poppins text-xl font-medium  outline-none`}
      >
        Buy Now
      </button>
    </div>
  );
};

const PriceSection = () => {
  return (
    <Layout
      bg="bg-white"
      padding={["px-5", "py-10", "md:px-6", "md:py-12", "lg:py-20"]}
    >
      <div className="flex flex-col items-center gap-24">
        <CardHeader />
        <div className="grid place-items-center gap-8 md:gap-12 lg:w-11/12 lg:grid-cols-3 lg:gap-8">
          <CardItem
            isPrimary={false}
            title="DEVELOPMENT"
            price={10}
            lists={["1 Module Javascript", "1 Module Human Resources"]}
          />
          <CardItem
            isPrimary={true}
            title="IT & SOFTWARE"
            price={80}
            lists={[
              "1 Module Javascript",
              "1 Module Human Resources",
              "2 Module Sales Teams",
              "Pack Marketing Skills",
              "5 Module Study Case",
            ]}
          />
          <CardItem
            isPrimary={false}
            title="BUSINESS"
            price={30}
            lists={[
              "1 Module Javascript",
              "1 Module Human Resources",
              "2 Module Sales Teams",
            ]}
          />
        </div>
      </div>
    </Layout>
  );
};

export default PriceSection;
