export const Heading = ({ type, text, widths }) => {
  switch (type) {
    case "h1": {
      return (
        <h1
          className={`font-source font-medium text-black text-[34px] tracking-wide leading-10 md:text-6xl md:leading-[75px] ${
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
          className={`font-poppins font-bold text-black text-[34px] leading-10 tracking-[0.25px] md:text-5xl md:leading-normal ${
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
          className={`font-poppins font-bold text-black text-2xl tracking-[0.25px] md:text-[34px] ${
            widths?.length ? widths.join(" ") : ""
          }`}
        >
          {text}
        </h3>
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
      )} text-black leading-5`}
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
