export const PlatformImage = ({ src, alt, width, height, isLazy }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={isLazy ? "lazy" : "eager"}
      className="w-full h-auto"
    />
  );
};

export const Triangle = () => {
  return (
    <img
      className="absolute z-10 -top-12 right-9 w-24 md:w-40 md:absolute md:-top-[90px] lg:absolute lg:w-48 lg:-top-28"
      src="/assets/triangle.svg"
      alt="triangle"
    />
  );
};
