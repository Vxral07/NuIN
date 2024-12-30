import React from "react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { servicesData } from "@/data";
import { ServiceCard } from "./ServiceCard";

export const ServicesSection: React.FC = () => {
  return (
    <div className="rounded-none w-full max-w-[1200px] mx-auto relative">
      {/* Header */}
      <h2 className="text-3xl font-medium font-poppins text-cyan-500 ml-3 mt-16 text-left">
      <span className="text-white text-3xl font-medium">Nuqi</span>{" "} 
      <span className="text-cyan-500 text-3xl font-medium">Prive Offerings</span>{" "}
      </h2>

      {/* Swiper Component */}
      <Swiper
        modules={[Autoplay]} // Enable Autoplay
        autoplay={{
          delay: 3000, // 3 seconds delay between slides
          disableOnInteraction: false, // Continue autoplay after user interaction
        }}
        spaceBetween={32} // Space between cards
        slidesPerView={1}
        loop={true} // Infinite loop
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="my-swiper"
      >
        {servicesData.services.map((service, index) => (
          <SwiperSlide key={index}>
            <ServiceCard
              mediaSrc={service.mediaSrc}
              title={service.title}
              description={service.description}
              mediaAlt={service.mediaAlt}
              isVideo={service.isVideo}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
