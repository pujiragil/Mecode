import FaqCardContext from "../../contexts/FaqCardContext";
import { FaqButton, FaqDescription, FaqTitle } from "./FaqElements";

function FaqCard({ title, description, button, data }) {
  return (
    <FaqCardContext.Provider value={data}>
      <div className="grid grid-cols-[1fr_32px] place-items-start py-10 first:pt-0 last:pb-0 md:grid-cols-[1fr_48px]">
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
