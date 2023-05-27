import { useRef } from "react";
import { motion, useInView } from "framer-motion";

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
      className={`flex h-full min-h-[378px] flex-col gap-28 rounded-xl p-8 pb-12 ${background}`}
    >
      <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-white">
        <img className="h-10 w-10 object-contain" src={imgLink} alt="branch" />
      </div>
      <div className="space-y-3.5">
        <Heading type="h3" text={title} />
        <Paragraph text={description} />
      </div>
    </section>
  );
};

export const SliderWrapper = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-150px", once: true });
  const [paginationEl, paginationRef] = useSwiperRef();

  return (
    <motion.div
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      className="flex w-full flex-col gap-6 overflow-hidden md:basis-full"
    >
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
    </motion.div>
  );
};
