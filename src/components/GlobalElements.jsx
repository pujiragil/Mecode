export const Heading = ({ type, text, width }) => {
  switch (type) {
    case "h1": {
      return (
        <h1
          className={`font-source font-medium text-black text-[34px] tracking-wide leading-10 md:text-6xl md:leading-[75px] ${
            width?.length ? width.join(" ") : ""
          }`}
        >
          {text}
        </h1>
      );
    }

    case "h2": {
      return (
        <h1
          className={`font-poppins font-medium text-black text-[34px] leading-10 tracking-[0.25px] md:text-5xl md:font-bold md:leading-normal md:w-4/5 ${
            width?.length ? width.join(" ") : ""
          }`}
        >
          {text}
        </h1>
      );
    }
  }
};

export const Paragraph = ({ text, mb, width }) => {
  return (
    <p
      className={`font-inter font-extralight ${width} ${mb} lg:text-xl md:mb-10`}
    >
      {text}
    </p>
  );
};

export const Button = ({ text, style, icon }) => {
  return (
    <button className={`${style}`}>
      {text}
      {icon && icon}
    </button>
  );
};
