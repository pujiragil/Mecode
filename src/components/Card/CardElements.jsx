import { Heading } from "../GlobalElements";

export const CardHeader = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center mb-24">
      <Heading type="h2" text="Choose your package" />
      {/* <HeroTitle text="Choose your package" style="font-bold w-3/5 mb-6" /> */}
      <p className="font-inter text-lg w-3/5">
        We provide various types of packages just for you
      </p>
    </div>
  );
};

export const CardItem = ({ primary, style, title, price, modules }) => {
  return (
    <div
      className={`${
        primary ? "h-[488px] lg:h-[548px]" : "h-[425px] lg:h-[488px]"
      } ${style} lg:w-[394px] relative font-inter flex flex-col justify-between items-center text-center px-8 py-12 rounded-lg sm:w-3/4 `}
    >
      <h3 className="text-2xl mb-5 uppercase">{title}</h3>
      <p className="text-4xl font-bold flex justify-start items-start gap-x-2 mb-10">
        <span className="text-xl font-normal">$</span>
        {price}
      </p>
      <div className="mb-5">
        {modules.map((module, index) => (
          <p className="text-lg mb-2" key={index}>
            {module}
          </p>
        ))}
      </div>
      <button
        className={`${
          primary ? "bg-primary-card text-black" : "bg-white text-primary"
        } font-bold text-lg w-full rounded-lg py-4`}
      >
        Buy Now
      </button>
      {primary && (
        <img
          className="absolute top-[100px] left-10 md:left-[100px] lg:top-36 lg:left-20 w-10"
          src="/assets/new.svg"
          alt="new"
        />
      )}
    </div>
  );
};
