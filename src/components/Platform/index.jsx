import Layout from "../Layout";

const platforms = [
  {
    id: "edx",
    src: "/assets/edx.svg",
    alt: "edx-icon",
    width: 51,
    height: 31,
    isLazy: true,
  },
  {
    id: "udemy",
    src: "/assets/udemy.svg",
    alt: "udemy-icon",
    width: 84,
    height: 32,
    isLazy: true,
  },
  {
    id: "coursera",
    src: "/assets/coursera.svg",
    alt: "coursera-icon",
    width: 83,
    height: 13,
    isLazy: true,
  },
];

const PlatformImage = ({ src, alt, width, height, isLazy }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={isLazy ? "lazy" : "eager"}
      className="w-full h-auto sm:w-full sm:max-w-[10rem] md:max-w-[11rem] lg:max-w-[12rem]"
    />
  );
};

const Triangle = () => {
  return (
    <img
      className="absolute z-10 w-32 -top-28 right-0 sm:w-40 sm:-top-32 lg:-top-36 lg:w-44"
      src="/assets/triangle.svg"
      alt="triangle"
    />
  );
};


const Platform = () => {
  return (
    <Layout bg="bg-white" padding={["px-5", "py-10","md:px-6", "md:py-12"]}>
      <div className="relative grid grid-cols-3 place-items-center gap-14">
        <Triangle />
        {platforms.map((platform) => (
          <PlatformImage
            key={platform.id}
            src={platform.src}
            alt={platform.alt}
            width={platform.width}
            height={platform.height}
            isLazy={platform.isLazy}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Platform;
