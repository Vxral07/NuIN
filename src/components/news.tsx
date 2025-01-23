import React, { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/keyboard";
import "swiper/css/navigation";
import { Keyboard, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { NewsCard } from "./NewsCard";

const newsData = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/efc2cd1e18b64cb1917ba0d95e13dd7a6403861d6eeeac5ae5d902e064d56162?placeholderIfAbsent=true&apiKey=8031103fb59b4417b3d6df6558972104",
    title: "Nuqi Digital Wealth attains DFSA license",
    imageAlt: "Nuqi Digital Wealth DFSA license announcement",
    link: "https://gulfnews.com/business/corporate-news/nuqi-digital-wealth-attains-dfsa-license-1.1705932392422",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f877d4fa14b9776bb91ba2e76410ead82ac4d8f5f0a22e6d8dab98d4a8ec5b9c?placeholderIfAbsent=true&apiKey=8031103fb59b4417b3d6df6558972104",
    title: "Discover NUQI WEALTH",
    imageAlt: "NUQI WEALTH discovery presentation",
    link: "https://www.linkedin.com/posts/difc_nuqiwealth-wechosedifc-activity-7160164331937017857-U_1H/?utm_source=share&utm_medium=member_desktop",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5b367d6a828c05b3c006f81cd046ffeadd487811a9061ca0fc3f9d824f9615de?placeholderIfAbsent=true&apiKey=8031103fb59b4417b3d6df6558972104",
    title: "Nuqi Digital Wealth secures DFSA license",
    imageAlt: "Nuqi Digital Wealth DFSA license security announcement",
    link: "https://www.zawya.com/en/business/fintech/nuqi-digital-wealth-secures-dfsa-licence-spinmed8",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/be4457d7fbb826cadc89ca9b6a85977daabbe691adf0bfd88325245b34fcc843?placeholderIfAbsent=true&apiKey=8031103fb59b4417b3d6df6558972104",
    title: "Empowering Gen Z",
    imageAlt: "Generation Z empowerment initiative",
    link: "https://dailyguardian.ae/empowering-gen-z-nuqi-digital-wealths-approach-to-sustainable-investing-for-the-younger-generation/",
  },
  {
    imageSrc:
      "/khaleeji.png",
    title: "Nuqi Digital wealth granted DFSA license",
    imageAlt: "Generation Z empowerment initiative",
    link: "https://www.khaleejtimes.com/kt-network/nuqi-digital-wealth-granted-dfsa-licence",
  },
];

export const News: React.FC = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<any>(null);

  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.params && swiperRef.current.navigation) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current;

      swiper.on("slideChange", () => {
        if (swiper.isBeginning) {
          setIsPrevDisabled(true);
        } else {
          setIsPrevDisabled(false);
        }

        if (swiper.isEnd) {
          setIsNextDisabled(true);
        } else {
          setIsNextDisabled(false);
        }
      });
    }
  }, []);

  return (
    <div className="w-full max-w-[1200px] mx-auto relative">
      {/* Header */}
      <h2 className="text-3xl text-cyan-400 font-medium font-poppins leading-6 tracking-wide mb-10 text-center lg:text-3xl">
        <span className="text-white">Nuqi</span> in the News
      </h2>

      {/* Swiper */}
      <div className="relative">
        <Swiper
          modules={[Keyboard, Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={24}
          slidesPerView={1}
          loop={false}
          keyboard={{ enabled: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="news-swiper"
        >
          {newsData.map((news, index) => (
            <SwiperSlide key={index}>
              <NewsCard
                imageSrc={news.imageSrc}
                title={news.title}
                imageAlt={news.imageAlt}
                link={news.link}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="absolute left-0 right-0 lg:right-36 lg:left-36 bottom-[-80px] flex justify-center items-center gap-5">
          {/* Previous Button */}
          <button
            ref={prevRef}
            className={`h-14 w-14 bg-cyan-400 hover:bg-white rounded-full flex items-center justify-center transition-colors duration-300 ${
              isPrevDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            aria-label="Previous Slide"
            disabled={isPrevDisabled}
          >
            <span className="text-black text-3xl font-bold">←</span>
          </button>

          {/* Next Button */}
          <button
            ref={nextRef}
            className={`h-14 w-14 bg-cyan-400 hover:bg-white rounded-full flex items-center justify-center transition-colors duration-300 ${
              isNextDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            aria-label="Next Slide"
            disabled={isNextDisabled}
          >
            <span className="text-black text-3xl font-bold">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};
