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

