import { Heading, Paragraph } from "../GlobalElements";
import { useFaqCardContext } from "../../contexts/FaqCardContext";

function FaqTitle() {
  const data = useFaqCardContext();
  return <Heading type="h4" text={data.title} />;
}

function FaqDescription() {
  const data = useFaqCardContext();
  return (
    <div
      className={`${
        data.isOpen ? "accordion is-open" : "accordion"
      } grid transition-all duration-200 ease-in`}
    >
      <Paragraph
        isPrimary={false}
        widths={["w-full", "md:w-2/3"]}
        text={data.description}
      />
    </div>
  );
}

function FaqButton({ onClick }) {
  const data = useFaqCardContext();

  const handleOpen = () => {
    onClick(data.id);
  };

  return (
    <button
      onClick={handleOpen}
      className={`flex h-8 w-8 items-center justify-center rounded-full font-poppins text-2xl font-medium transition-all duration-300 ease-in md:h-12 md:w-12 md:text-4xl ${
        data.isOpen
          ? "rotate-0 bg-[#DDF247] text-black"
          : "rotate-90 border border-black text-[#DDF247]"
      }`}
    >
      {data.isOpen ? "-" : "+"}
    </button>
  );
}

export { FaqTitle, FaqDescription, FaqButton };
