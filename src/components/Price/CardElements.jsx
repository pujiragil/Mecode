import { Heading, Paragraph } from "../GlobalElements";

export const CardHeader = () => {
  return (
    <div className="space-y-6 flex flex-col items-center justify-center text-center">
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

export const CardItem = ({ primary, style, title, price, modules }) => {
  return (
    <div
      className={`${
        primary ? "h-[488px] lg:h-[548px]" : "h-[425px] lg:h-[488px]"
      } ${style} font-inter relative flex flex-col items-center justify-between rounded-lg px-8 py-12 text-center sm:w-3/4 lg:w-[394px] `}
    >
      <h3 className="mb-5 text-2xl uppercase">{title}</h3>
      <p className="mb-10 flex items-start justify-start gap-x-2 text-4xl font-bold">
        <span className="text-xl font-normal">$</span>
        {price}
      </p>
      <div className="mb-5">
        {modules.map((module, index) => (
          <p className="mb-2 text-lg" key={index}>
            {module}
          </p>
        ))}
      </div>
      <button
        className={`${
          primary ? "bg-primary-card text-black" : "bg-white text-primary"
        } w-full rounded-lg py-4 text-lg font-bold`}
      >
        Buy Now
      </button>
      {primary && (
        <img
          className="absolute left-10 top-[100px] w-10 md:left-[100px] lg:left-20 lg:top-36"
          src="/assets/new.svg"
          alt="new"
        />
      )}
    </div>
  );
};
