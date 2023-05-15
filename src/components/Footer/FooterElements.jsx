import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaTelegram,
} from "react-icons/fa";

export const FooterCard = () => {
  return (
    <div className="bg-primary-card p-7 flex flex-col justify-center items-center rounded-lg drop-shadow-footer mb-12 md:w-9/12 md:mx-auto lg:mb-16 lg:w-2/3">
      <h1 className="font-extrabold text-2xl font-roboto text-center mb-4 lg:w-3/5">
        Start upgrading your skills free for this month
      </h1>
      <p className="font-inter font-extralight text-center w-10/12 mb-4">
        Build your site for free and take as long as you need
      </p>
      <div className="w-full md:flex justify-center items-center gap-x-4 md:w-1/2">
        <button className="block rounded bg-[#00000040] w-full md:mb-0 mb-4 py-2.5 text-white">
          Try Yourself
        </button>
        <button className="block rounded bg-black w-full py-2.5 text-white">
          Get Started
        </button>
      </div>
    </div>
  );
};

export const FooterTitle = () => {
  return (
    <div className="flex justify-center items-center text-white gap-x-2 mb-12 md:mb-0">
      <img src="/assets/icon2.svg" alt="icon" />
      <h1 className="text-3xl font-bold">mecode</h1>
    </div>
  );
};

export const FooterMenu = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 md:mb-0 md:h-fit md:justify-items-center md:content-center md:text-base md:gap-x-8 text-white h-40 text-center text-xl font-inter font-extralight items-center mb-12">
      <p>Tutorials</p>
      <p>Resources</p>
      <p>Case Studies</p>
    </div>
  );
};

export const FooterLink = () => {
  return (
    <div className="flex justify-between items-center text-icon py-8 px-4 border-y md:border-none md:p-0 md:m-0 border-icon text-2xl md:text-xl md:gap-x-4 mb-10">
      <a
        href="https://web.facebook.com/profile.php?id=100073858291280  "
        target="_blank"
      >
        <FaFacebook />
      </a>
      <a href="https://instagram.com/ragilsg_164" target="_blank">
        <FaInstagram />
      </a>
      <a href="https://linkedin.com/in/pujiragil/" target="_blank">
        <FaLinkedin />
      </a>
      <a href="https://github.com/pujiragil/" target="_blank">
        <FaGithub />
      </a>
      <a href="https://t.me/Ragilsg" target="_blank">
        <FaTelegram />
      </a>
    </div>
  );
};

export const FooterCopy = () => {
  return (
    <h1 className="text-xl font-extralight text-white text-center md:text-lg">
      © 2021 Copyright.{" "}
      <span className="text-primary font-medium  ">mecode</span>
    </h1>
  );
};
