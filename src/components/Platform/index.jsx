import { PlatformImage, Triangle } from "./PlatformElements";

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

const Platform = () => {
  return (
    <div className="relative grid grid-cols-3 h-48 lg:h-72 w-full place-items-center gap-14 p-6 md:gap-28 lg:gap-[154px]">
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
  );
};

export default Platform;
