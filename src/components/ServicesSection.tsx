import React, { useEffect, useRef } from "react";
import "swiper/css";
import "swiper/css/navigation"; // Import Swiper navigation styles
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { servicesData } from "@/data";
import { ServiceCard } from "./ServiceCard";

export const ServicesSection: React.FC = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null); // Ref for Previous Button
  const nextRef = useRef<HTMLButtonElement | null>(null); // Ref for Next Button
  const swiperRef = useRef<any>(null); // Ref for the Swiper instance

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.params && swiperRef.current.navigation) {
      // Attach refs to Swiper navigation after Swiper is initialized
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div className="rounded-none w-full max-w-[1200px] mx-auto relative">
      {/* Header */}
      <h2 className="text-3xl font-medium font-poppins text-cyan-500 ml-3 mt-16 text-left">
        <span className="text-white text-3xl font-medium">Nuqi</span>{" "}
        <span className="text-cyan-500 text-3xl font-medium">
          Prive Offerings
        </span>
      </h2>

      {/* Swiper Component */}
      <div className="relative">
        <Swiper
          modules={[Navigation]} // Enable Navigation
          onSwiper={(swiper) => {
            swiperRef.current = swiper; // Store Swiper instance in the ref
          }}
          spaceBetween={32}
          slidesPerView={1}
          loop={true}
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
              <ServiceCard {...service} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="absolute left-0 right-0 lg:right-36 lg:left-36 bottom-[-40px] flex justify-center items-center ">
          {/* Previous Button */}
          <button
            ref={prevRef} // Attach ref for Swiper navigation
            className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center text-black shadow-lg hover:bg-gray-200 -mb-4 mx-3"
            aria-label="Previous Slide"
          >
            <span className="text-black font-bold text-lg">◀</span>
          </button>

          {/* Next Button */}
          <button
            ref={nextRef} // Attach ref for Swiper navigation
            className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center text-black shadow-lg hover:bg-gray-200 -mb-4 mx-3"
            aria-label="Next Slide"
          >
            <span className="text-black font-bold text-lg">▶</span>
          </button>
        </div>
      </div>
    </div>
  );
};


