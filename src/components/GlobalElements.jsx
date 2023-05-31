import React, { forwardRef } from "react";

export const Heading = forwardRef(({ type, text, widths, animate }, ref) => {
  let fontStyle;

  switch (type) {
    case "h1": {
      fontStyle =
        "font-source text-[34px] font-medium leading-10 text-black md:text-6xl md:leading-[75px]";
      break;
    }

    case "h2": {
      fontStyle =
        "font-poppins text-[34px] font-bold leading-10 tracking-[0.25px] text-black md:text-5xl md:leading-normal";
      break;
    }

    case "h3": {
      fontStyle =
        "font-poppins text-2xl font-bold tracking-[0.25px] text-black md:text-[34px]";
      break;
    }

    case "h4": {
      fontStyle =
        "font-poppins text-xl font-medium tracking-[0.25px] text-black md:text-3xl md:font-bold";
      break;
    }

    default: {
      throw Error("Wrong type of Heading Component");
    }
  }

  const className = `${fontStyle} ${
    widths?.length ? widths?.join(" ") : ""
  } ${animate}`;

  return React.createElement(type, {
    ref,
    className,
    children: text,
  });
});

export const Paragraph = forwardRef((props, ref) => {
  const generateClassName = ({ isPrimary, sizes, weights, widths }) => {
    let selectedFont, fontSize, fontWeight, textWidth, based;
    selectedFont = isPrimary ? "font-source" : "font-poppins";
    fontSize = sizes?.length ? sizes.join(" ") : null;
    fontWeight = weights?.length ? weights.join(" ") : null;
    textWidth = widths?.length ? widths.join(" ") : null;
    based = "overflow-hidden leading-5 text-black";
    return [selectedFont, fontSize, fontWeight, textWidth, based].join(" ");
  };
  const className = generateClassName(props);

  return React.createElement("p", {
    ref,
    className,
    children: props?.text,
  });
});

export const Button = ({ text, style, icon }) => {
  return (
    <button className={`${style}`}>
      {text}
      {icon && icon}
    </button>
  );
};
