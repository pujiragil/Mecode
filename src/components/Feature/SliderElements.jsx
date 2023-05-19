import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Heading, Paragraph } from "../GlobalElements";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import useSwiperRef from "../../hooks/swiper";

const CardItem = ({ background, imgLink, title, description }) => {
  return (
    <section
      className={`p-8 pb-12 flex flex-col rounded-xl gap-28 h-full ${background}`}
    >
      <div className="w-20 h-20 flex justify-center items-center bg-white rounded-xl">
        <img className="w-10 h-10 object-contain" src={imgLink} alt="branch" />
      </div>
      <div className="space-y-3.5">
        <Heading type="h3" text={title} />
        <Paragraph text={description} />
      </div>
    </section>
  );
};

export const CardWrapper = () => {
  const [paginationEl, paginationRef] = useSwiperRef();

  return (
    <div className="flex flex-col overflow-hidden w-full gap-6 md:basis-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        className="w-full"
        slidesPerView="auto"
        centeredSlides={true}
        spaceBetween={40}
        pagination={{
          clickable: true,
          el: paginationEl,
        }}
        autoplay={{
          delay: 3000,
        }}
      >
        <SwiperSlide className="w-[300px]">
          <CardItem
            background="bg-white"
            imgLink="/assets/branch1.svg"
            title="Best Tutors"
            description="Bring your design vision to life in clean, semantic HTML5"
          />
        </SwiperSlide>
        <SwiperSlide className="w-[300px]">
          <CardItem
            background="bg-[#DDF247]"
            imgLink="/assets/branch2.svg"
            title="Flexible"
            description="Connect your marketing tools with built-in integrations"
          />
        </SwiperSlide>
        <SwiperSlide className="w-[300px]">
          <CardItem
            background="bg-white"
            imgLink="/assets/branch3.svg"
            title="Easy Access"
            description="Bring your design vision to life in clean, semantic HTML5"
          />
        </SwiperSlide>
      </Swiper>
      <div className="flex justify-center gap-4" ref={paginationRef}></div>
    </div>
  );
};
