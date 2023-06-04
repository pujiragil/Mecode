import Layout from "../Layout";
import {
  CardPrimaryContent,
  CardPrimaryImage,
  CardSecondaryContent,
  CardSecondaryContentItem,
  CardSecondaryImage,
} from "./CardElements";

const CardPrimary = () => {
  return (
    <Layout
      bg="bg-white"
      styles="overflow-hidden"
      padding={["px-5", "py-10", "md:px-6", "md:py-12", "lg:py-20"]}
    >
      <div className="grid place-items-center gap-20 lg:grid-cols-2">
        <CardPrimaryContent />
        <CardPrimaryImage />
      </div>
    </Layout>
  );
};

const cardDatas = [
  {
    id: "university",
    imgLink: "/assets/university.svg",
    title: "University",
    description:
      "Browse hundreds of in-depth videos, courses, and guides to get up and running fast",
  },
  {
    id: "showcase",
    imgLink: "/assets/showcase.svg",
    title: "Showcase",
    description:
      "Get inspired by the incredible websites built by members of the community",
  },
];

const CardSecondary = () => {
  return (
    <Layout
      bg="bg-white"
      padding={["px-5", "py-10", "md:px-6", "md:py-12", "lg:py-20"]}
    >
      <div className="grid place-items-center gap-10 text-center md:text-left lg:grid-cols-2 lg:place-items-end ">
        <CardSecondaryContent>
          {cardDatas.map((data, index) => (
            <CardSecondaryContentItem key={data.id} idx={index + 1} {...data} />
          ))}
        </CardSecondaryContent>
        <CardSecondaryImage />
      </div>
    </Layout>
  );
};

const CardSection = () => {
  return (
    <>
      <CardPrimary />
      <CardSecondary />
    </>
  );
};

export default CardSection;
