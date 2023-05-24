import { useInView } from "react-intersection-observer";
import FaqCardContext from "../../contexts/FaqCardContext";
import { FaqButton, FaqDescription, FaqTitle } from "./FaqElements";
import { useEffect, useState } from "react";

function FaqCard({ title, description, button, data, index }) {
  const [isVisible, setIsVisible] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  useEffect(() => {
    let timer;
    if (inView) {
      timer = setTimeout(() => {
        setIsVisible(true);
      }, index * 200);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [inView]);

  return (
    <FaqCardContext.Provider value={data}>
      <div
        ref={ref}
        className={`${
          isVisible ? "bottom-0 opacity-100" : "-bottom-20 opacity-0"
        } relative grid grid-cols-[1fr_32px] place-items-start py-10 transition-all duration-500 ease-in first:pt-0 last:pb-0 md:grid-cols-[1fr_48px]`}
      >
        <div className="space-y-4">
          {title}
          {description}
        </div>
        {button}
      </div>
    </FaqCardContext.Provider>
  );
}

FaqCard.Title = FaqTitle;
FaqCard.Description = FaqDescription;
FaqCard.Button = FaqButton;
export default FaqCard;
