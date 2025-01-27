import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import React, { useEffect, useState } from "react";
import { PortfolioCard } from "./PortfolioCard"; // Ensure this import is correct

const portfolioData = [
  {
    icon: "/Future of Healthcare.png",
    title: "Future of Healthcare",
    description:
      "Capitalize on India's healthcare sector, focusing on pharma, medical equipment, health tech, and wellness companies..",
    basket: "global",
  },
  {
    icon: "/Sustainable Future ESG.png",
    title: "Sustainable Future ESG",
    description:
      "Invest in companies committed to environmental responsibility, social impact, and good governance practices.",
    basket: "global",
  },
  {
    icon: "/Recession Proofers.png",
    title: "Recession Proofers",
    description:
      "Ride out economic downturns with investments in essential sectors like healthcare, consumer staples, utilities, and education.",
    basket: "global",
  },
  {
    icon: "/Inflation beaters.png",
    title: "Inflation beaters",
    description:
      "Protect your wealth against rising prices by investing in companies with strong pricing power and stable cash flows.",
    basket: "global",
  },
];

export const PortfolioGrid: React.FC = () => {
  const [sliderRef, sliderInstance] = useKeenSlider<HTMLDivElement>({
    loop: false,
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 2,
          spacing: 15,
        },
      },
      "(min-width: 1000px)": {
        slides: {
          perView: 3,
          spacing: 10,
        },
      },
    },
    slides: {
      perView: 1,
      spacing: 10,
    },
  });

  const [isPrevDisabled, setIsPrevDisabled] = useState(true); // Disable previous button at the start
  const [isNextDisabled, setIsNextDisabled] = useState(false); // Enable next button at the start

  const handlePrev = () => sliderInstance.current?.prev();
  const handleNext = () => sliderInstance.current?.next();

  useEffect(() => {
    if (sliderInstance.current) {
      const updateNavigationState = () => {
        // Ensure sliderInstance and the track details are available
        const trackDetails = sliderInstance.current?.track?.details;
        if (trackDetails) {
          // Disable the previous button if we're at the first slide
          if (trackDetails.rel === 0) {
            setIsPrevDisabled(true);
          } else {
            setIsPrevDisabled(false);
          }

          // Disable the next button if we're at the last slide
          if (trackDetails.rel === trackDetails.slides.length - 1) {
            setIsNextDisabled(true);
          } else {
            setIsNextDisabled(false);
          }
        }
      };

      updateNavigationState(); // Initial check

      sliderInstance.current?.on("slideChanged", updateNavigationState); // Listen for slide change
    }
  }, [sliderInstance]);

  return (
    <div className="flex flex-col items-center py-20 bg-black text-white">
      {/* Section Header */}
      <h6 className="mb-5 text-center mt-20 font-poppins tracking-wide leading-9 text-3xl pb-1 sm:text-3xl font-medium lg:text-3xl">
        <span className="text-white text-3xl">Nuqi</span>{" "}
        {/* <span className="text-white text-3xl">Global</span>{" "} */}
        <span className="text-cyan-500 text-3xl">
          Curated Equity Portfolios (CEP)
        </span>
      </h6>

      <p className="max-w-3xl text-center font-poppins tracking-wide leading-6 lg:text-lg text-[#b3b3b3] mb-6">
        Our Nuqi India Basket offers a variety of curated investment themes, each catering to specific risk appetite and investment goals.
      </p>

      {/* Carousel */}
      <div ref={sliderRef} className="keen-slider w-full px-4 lg:px-8 py-6">
        {portfolioData.map((portfolio, index) => (
          <div key={index} className="keen-slider__slide">
            <PortfolioCard
              key={index}
              index={index} // Pass the index to the PortfolioCard
              {...portfolio} // Spread the portfolio data
              onModalToggle={() => { }} // Pass an empty function for now
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center items-center gap-4 mt-4">
        <button
          onClick={handlePrev}
          className={`w-14 h-14 bg-cyan-500 rounded-full flex items-center justify-center text-black shadow-lg hover:bg-gray-200 ${isPrevDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
          disabled={isPrevDisabled}
        >
          <span className="text-3xl font-bold">←</span> {/* Left arrow with bold and larger size */}
        </button>
        <button
          onClick={handleNext}
          className={`w-14 h-14 bg-cyan-500 rounded-full flex items-center justify-center text-black shadow-lg hover:bg-gray-200 ${isNextDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
          disabled={isNextDisabled}
        >
          <span className="text-3xl font-bold">→</span> {/* Right arrow with bold and larger size */}
        </button>
      </div>
    </div>
  );
};

// import "keen-slider/keen-slider.min.css";
// import { useKeenSlider } from "keen-slider/react";
// import React, { useEffect, useState } from "react";
// import { PortfolioCard } from "./PortfolioCard"; // Ensure this import is correct

// const portfolioData = [
//   {
//     icon: "/Entrenched-enterprises-unscreen.gif",
//     title: "Future of Healthcare",
//     description:
//       "Capitalize on India's healthcare sector, focusing on pharma, medical equipment, health tech, and wellness companies..",
//     basket: "global",
//   },
//   {
//     icon: "/Income-Generators-1-unscreen.gif",
//     title: "Sustainable Future ESG",
//     description:
//       "Invest in companies committed to environmental responsibility, social impact, and good governance practices.",
//     basket: "global",
//   },
//   {
//     icon: "/Artificial-Intelligence-unscreen.gif",
//     title: "Recession Proofers",
//     description:
//       "Ride out economic downturns with investments in essential sectors like healthcare, consumer staples, utilities, and education.",
//     basket: "global",
//   },
//   {
//     icon: "/60-40-Portfolios-ETFs--unscreen.gif",
//     title: "Inflation beaters",
//     description:
//       "Protect your wealth against rising prices by investing in companies with strong pricing power and stable cash flows.",
//     basket: "global",
//   },
// ];

// export const PortfolioGrid: React.FC = () => {
//   const [sliderRef, sliderInstance] = useKeenSlider<HTMLDivElement>({
//     loop: true,
//     breakpoints: {
//       "(min-width: 768px)": {
//         slides: {
//           perView: 2,
//           spacing: 15,
//         },
//       },
//       "(min-width: 1000px)": {
//         slides: {
//           perView: 3,
//           spacing: 10,
//         },
//       },
//     },
//     slides: {
//       perView: 1,
//       spacing: 10,
//     },
//   });

//   const [isPrevDisabled, setIsPrevDisabled] = useState(true); // Disable previous button at the start
//   const [isNextDisabled, setIsNextDisabled] = useState(false); // Enable next button at the start

//   const handlePrev = () => sliderInstance.current?.prev();
//   const handleNext = () => sliderInstance.current?.next();

//   useEffect(() => {
//     if (sliderInstance.current) {
//       const updateNavigationState = () => {
//         // Ensure sliderInstance and the track details are available
//         const trackDetails = sliderInstance.current?.track?.details;
//         if (trackDetails) {
//           // Disable the previous button if we're at the first slide
//           if (trackDetails.rel === 0) {
//             setIsPrevDisabled(true);
//           } else {
//             setIsPrevDisabled(false);
//           }

//           // Disable the next button if we're at the last slide
//           if (trackDetails.rel === trackDetails.slides.length - 1) {
//             setIsNextDisabled(true);
//           } else {
//             setIsNextDisabled(false);
//           }
//         }
//       };

//       updateNavigationState(); // Initial check

//       sliderInstance.current?.on("slideChanged", updateNavigationState); // Listen for slide change
//     }
//   }, [sliderInstance]);

//   return (
//     <div className="flex flex-col items-center py-20 bg-black text-white">
//       {/* Section Header */}
//       <h6 className="mb-5 text-center mt-20 font-poppins tracking-wide leading-9 text-3xl pb-1 sm:text-3xl font-medium lg:text-3xl">
//         <span className="text-white text-3xl">Nuqi</span>{" "}
//         <span className="text-white text-3xl">Global</span>{" "}
//         <span className="text-cyan-500 text-3xl">
//           Curated Equity Portfolios (CEP)
//         </span>
//       </h6>

//       <p className="max-w-3xl text-center font-poppins tracking-wide leading-6 lg:text-lg text-[#b3b3b3] mb-6">
//         Our Nuqi India Basket offers a variety of curated investment themes, each catering to specific risk appetite and investment goals.
//       </p>

//       {/* Carousel */}
//       <div ref={sliderRef} className="keen-slider w-full px-4 lg:px-8 py-6">
//         {portfolioData.map((portfolio, index) => (
//           <div key={index} className="keen-slider__slide">
//             <PortfolioCard
//               key={index}
//               index={index} // Pass the index to the PortfolioCard
//               {...portfolio} // Spread the portfolio data
//               onModalToggle={() => { }} // Pass an empty function for now
//             />
//           </div>
//         ))}
//       </div>

//       {/* Navigation Arrows */}
//       <div className="flex justify-center items-center gap-4 mt-4">
//         <button
//           onClick={handlePrev}
//           className={`w-14 h-14 bg-cyan-500 rounded-full flex items-center justify-center text-black shadow-lg hover:bg-gray-200 ${isPrevDisabled ? "opacity-50 cursor-not-allowed" : ""
//             }`}
//           disabled={isPrevDisabled}
//         >
//           <span className="text-3xl font-bold">←</span> {/* Left arrow with bold and larger size */}
//         </button>
//         <button
//           onClick={handleNext}
//           className={`w-14 h-14 bg-cyan-500 rounded-full flex items-center justify-center text-black shadow-lg hover:bg-gray-200 ${isNextDisabled ? "opacity-50 cursor-not-allowed" : ""
//             }`}
//           disabled={isNextDisabled}
//         >
//           <span className="text-3xl font-bold">→</span> {/* Right arrow with bold and larger size */}
//         </button>
//       </div>
//     </div>
//   );
// };




