export const Heading = ({ type, text, widths }) => {
  switch (type) {
    case "h1": {
      return (
        <h1
          className={`font-source text-[34px] font-medium leading-10 text-black md:text-6xl md:leading-[75px] ${
            widths?.length ? widths.join(" ") : ""
          }`}
        >
          {text}
        </h1>
      );
    }

    case "h2": {
      return (
        <h2
          className={`font-poppins text-[34px] font-bold leading-10 tracking-[0.25px] text-black md:text-5xl md:leading-normal ${
            widths?.length ? widths.join(" ") : ""
          }`}
        >
          {text}
        </h2>
      );
    }

    case "h3": {
      return (
        <h3
          className={`font-poppins text-2xl font-bold tracking-[0.25px] text-black md:text-[34px] ${
            widths?.length ? widths.join(" ") : ""
          }`}
        >
          {text}
        </h3>
      );
    }

    case "h4": {
      return (
        <h4
          className={`font-poppins text-xl font-medium tracking-[0.25px] text-black md:text-3xl md:font-bold ${
            widths?.length ? widths?.join(" ") : ""
          }`}
        ></h4>
      );
    }
  }
};

export const Paragraph = ({ isPrimary, sizes, weights, widths, text }) => {
  const generateClassname = (isPrimary, sizes, weights, widths) => {
    const selectedFont = isPrimary ? "font-source" : "font-poppins";
    const fontSize = sizes?.length ? sizes.join(" ") : null;
    const fontWeight = weights?.length ? weights.join(" ") : null;
    const textWidth = widths?.length ? widths.join(" ") : null;
    return [selectedFont, fontSize, fontWeight, textWidth].join(" ");
  };

  return (
    <p
      className={`${generateClassname(
        isPrimary,
        sizes,
        weights,
        widths
      )} leading-5 text-black`}
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
