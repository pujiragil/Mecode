import Core, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Heading, Paragraph } from "../GlobalElements";

export const CardItem = ({ primary, branch, title, text }) => {
  return (
    <div
      className={`${
        primary ? "bg-primary-card" : "bg-white"
      } h-card min-w-card rounded-lg p-8`}
    >
      <div className={`bg-white w-fit p-5 rounded-lg mb-[70px]`}>
        <img src={branch} alt="branch" />
      </div>
      <div className="space-y-3.5">
        <Heading type="h3" text={title} />
        <Paragraph widths={["w-full"]} text={text}/>
      </div>
    </div>
  );
};

export const CardWrapper = () => {
  Core.use([Autoplay, Pagination]);
  return (
    <div className="flex items-center justify-center overflow-hidden w-full gap-4 md:basis-full">
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="h-slide"
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={20}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        <SwiperSlide className="w-card h-card">
          <CardItem
            primary={false}
            branch="/assets/branch1.svg"
            title="Best Tutors"
            text="Bring your design vision to life in clean, semantic HTML5"
          />
        </SwiperSlide>

        <SwiperSlide className="w-card h-card">
          <CardItem
            primary={true}
            branch="/assets/branch2.svg"
            title="Flexible"
            text="Connect your marketing tools with built-in integrations"
          />
        </SwiperSlide>

        <SwiperSlide className="w-card h-card">
          <CardItem
            primary={false}
            branch="/assets/branch3.svg"
            title="Easy Access"
            text="Connect your marketing tools with built-in integrations"
          />
        </SwiperSlide>
      </Swiper>
      <div className="swiper-pagination-bullet-active" slot="pagination"></div>
    </div>
  );
};
