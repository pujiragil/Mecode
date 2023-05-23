import { createContext, useContext } from "react";

const FaqCardContext = createContext(null);

export function useFaqCardContext() {
  const context = useContext(FaqCardContext);
  if (!context) {
    throw Error(
      "FaqCard.* component must be rendered as child of FaqCard component"
    );
  }

  return context;
}

export default FaqCardContext;
