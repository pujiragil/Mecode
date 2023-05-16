import { FaMinus, FaPlus } from "react-icons/fa";
import { useState } from "react";
import { Heading } from "../GlobalElements";

export const FaqWrapper = () => {
  return (
    <div>
      <Heading type="h2" text="FAQs" />
      <FaqSection text={"01. Can I Find the right information faster?"} />
      <FaqSection text={"02. How to share feature demos and ideas?"} />
      <FaqSection text={"03. How to get insights from users?"} />
      <FaqSection text={"04. Can I develop my website without code?"} />
    </div>
  );
};

export const FaqSection = ({ text }) => {
  const [open, setOpen] = useState(false);

  const clickOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="flex flex-col w-full mb-8 pb-8 border-b md:border-b-2 border-main last:border-0">
      <div className="flex justify-between items-center w-full">
        <FaqSubtitle text={text} />
        <FaqButton open={open} clickOpen={clickOpen} />
      </div>
      <FaqAnswer open={open} />
    </div>
  );
};

export const FaqSubtitle = ({ text }) => {
  return <h2 className="font-inter font-medium text-xl w-3/4">{text}</h2>;
};

export const FaqButton = ({ open, clickOpen }) => {
  return (
    <div>
      <button
        onClick={clickOpen}
        className="bg-primary-card rounded-full w-10 h-10 block text-xl  flex justify-center items-center"
      >
        {open ? <FaMinus /> : <FaPlus />}
      </button>
    </div>
  );
};

export const FaqAnswer = ({ open }) => {
  return (
    <div
      className={`${
        open ? "h-fit duration-300 ease-in-out" : "h-0 overflow-hidden"
      } w-11/12 md:w-3/4 text-justify text-lg font-inter font-extralight`}
    >
      <p>
        Nulla lectus lectus, suscipit at posuere sit amet, imperdiet sit amet
        sapien. Donec ornare odio justo, ac efficitur enim fermen. Nam enim
        ligula, lacinia vitae venenatis quis, suscipit id augue.
      </p>
    </div>
  );
};
