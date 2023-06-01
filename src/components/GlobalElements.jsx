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

const FONT_FAMILIES = {
  source: "font-source",
  poppins: "font-poppins",
};

const FONT_SIZES = {
  sm: "text-sm md:text-base",
  base: "text-base md:text-lg",
  lg: "text-lg md:text-xl",
};

const FONT_COLORS = {
  primary: "text-black",
  secondary: "text-white",
};

const FONT_WEIGHTS = {
  xlight: "font-extralight",
  normal: "font-normal",
  medium: "font-medium",
};

export const Paragraph = forwardRef(
  (
    {
      text,
      widths = "",
      font: {
        family = "poppins",
        size = "base",
        color = "primary",
        weight = "normal",
      } = "",
    },
    ref
  ) => {
    const className = `${FONT_FAMILIES[family]} ${FONT_SIZES[size]} ${
      FONT_COLORS[color]
    } ${FONT_WEIGHTS[weight]} ${widths.length && widths.join(" ")}`;

    return React.createElement("p", {
      ref,
      className,
      children: text,
    });
  }
);

export const Button = ({ text, style, icon }) => {
  return (
    <button className={`${style}`}>
      {text}
      {icon && icon}
    </button>
  );
};
