import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import React, { useEffect, useState } from "react";
import { PortfolioCard } from "./PortfolioCard"; // Ensure this import is correct

const portfolioData = [
  {
    icon: "/Entrenched enterprises.gif",
    title: "Entrenched Enterprises",
    description:
      "Entrenched Enterprises offers a selection of established companies with strong market presence and proven track records. These stocks represent stable and reliable investments in well-established industries.",
    basket: "global",
  },
  {
    icon: "/Income Generators.gif",
    title: "Income Generators",
    description:
      "Income Generators focuses on dividend-paying stocks known for their consistent income generation. These stocks provide investors with steady cash flow and potential for long-term wealth accumulation.",
    basket: "global",
  },
  {
    icon: "/Artificial Intelligence.gif",
    title: "Artificial Intelligence",
    description:
      "Artificial Intelligence comprises stocks of companies at the forefront of AI technology development. These innovative companies leverage AI to drive growth, efficiency, and disruption in various sectors.",
    basket: "global",
  },
  {
    icon: "/60 40 Portfolios (ETFs).gif",
    title: "60 40 Portfolios (ETFs)",
    description:
      "The 60/40 Portfolios offer a balanced approach to investment, consisting of a mix of 60% equity ETFs and 40% fixed-income ETFs. This diversified portfolio aims to provide stability and growth potential for investors.",
    basket: "global",
  },
];

export const PortfolioGrid: React.FC = () => {
  const [sliderRef, sliderInstance] = useKeenSlider<HTMLDivElement>({
    loop: true,
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
      <h6 className="mb-5 text-center font-poppins tracking-wide leading-9 text-3xl pb-1 sm:text-3xl font-medium lg:text-3xl">
        <span className="text-white text-3xl">Nuqi</span>{" "}
        <span className="text-white text-3xl">Global</span>{" "}
        <span className="text-cyan-500 text-3xl">
          Curated Equity Portfolios (CEP)
        </span>
      </h6>

      <p className="max-w-3xl text-center font-poppins tracking-wide leading-6 lg:text-lg text-[#b3b3b3] mb-6">
        At NUQI, our team of seasoned investment professionals crafts a diverse
        range of investment themes, seamlessly leading to Curated Equity
        Portfolios tailored to align with distinct risk appetites and financial
        objectives.
      </p>

      {/* Carousel */}
      <div ref={sliderRef} className="keen-slider w-full px-4 lg:px-8 py-6">
        {portfolioData.map((portfolio, index) => (
          <div key={index} className="keen-slider__slide">
            <PortfolioCard
              key={index}
              index={index} // Pass the index to the PortfolioCard
              {...portfolio} // Spread the portfolio data
              onModalToggle={() => {}} // Pass an empty function for now
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center items-center gap-4 mt-4">
        <button
          onClick={handlePrev}
          className={`w-14 h-14 bg-cyan-500 rounded-full flex items-center justify-center text-black shadow-lg hover:bg-gray-200 ${
            isPrevDisabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isPrevDisabled}
        >
          <span className="text-3xl font-bold">←</span> {/* Left arrow with bold and larger size */}
        </button>
        <button
          onClick={handleNext}
          className={`w-14 h-14 bg-cyan-500 rounded-full flex items-center justify-center text-black shadow-lg hover:bg-gray-200 ${
            isNextDisabled ? "opacity-50 cursor-not-allowed" : ""
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
//     icon: "/entrenched.mp4",
//     title: "Entrenched Enterprises",
//     description:
//       "Entrenched Enterprises offers a selection of established companies with strong market presence and proven track records. These stocks represent stable and reliable investments in well-established industries.",
//     basket: "global",
//   },
//   {
//     icon: "/APP_2.mp4",
//     title: "Income Generators",
//     description:
//       "Income Generators focuses on dividend-paying stocks known for their consistent income generation. These stocks provide investors with steady cash flow and potential for long-term wealth accumulation.",
//     basket: "global",
//   },
//   {
//     icon: "/Artificial Intellegence.mp4",
//     title: "Artificial Intelligence",
//     description:
//       "Artificial Intelligence comprises stocks of companies at the forefront of AI technology development. These innovative companies leverage AI to drive growth, efficiency, and disruption in various sectors.",
//     basket: "global",
//   },
//   {
//     icon: "/60 40.mp4",
//     title: "60 40 Portfolios (ETFs)",
//     description:
//       "The 60/40 Portfolios offer a balanced approach to investment, consisting of a mix of 60% equity ETFs and 40% fixed-income ETFs. This diversified portfolio aims to provide stability and growth potential for investors.",
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
//         // Disable the previous button if we're at the first slide
//         if (sliderInstance.current?.track.details.rel === 0) {
//           setIsPrevDisabled(true);
//         } else {
//           setIsPrevDisabled(false);
//         }

//         // Disable the next button if we're at the last slide
//         if (
//           sliderInstance.current?.track.details.rel ===
//           sliderInstance.current?.track.details.slides.length - 1
//         ) {
//           setIsNextDisabled(true);
//         } else {
//           setIsNextDisabled(false);
//         }
//       };

//       updateNavigationState(); // Initial check

//       sliderInstance.current?.on("slideChanged", updateNavigationState); // Listen for slide change
//     }
//   }, [sliderInstance]);

//   return (
//     <div className="flex flex-col items-center py-20 bg-black text-white">
//       {/* Section Header */}
//       <h6 className="mb-5 text-center font-poppins tracking-wide leading-9 text-3xl pb-1 sm:text-3xl font-medium lg:text-3xl">
//         <span className="text-white text-3xl">Nuqi</span>{" "}
//         <span className="text-white text-3xl">Global</span>{" "}
//         <span className="text-cyan-500 text-3xl">
//           Curated Equity Portfolios (CEP)
//         </span>
//       </h6>

//       <p className="max-w-3xl text-center font-poppins tracking-wide leading-6 lg:text-lg text-[#b3b3b3] mb-6">
//         At NUQI, our team of seasoned investment professionals crafts a diverse
//         range of investment themes, seamlessly leading to Curated Equity
//         Portfolios tailored to align with distinct risk appetites and financial
//         objectives.
//       </p>

//       {/* Carousel */}
//       <div ref={sliderRef} className="keen-slider w-full px-4 lg:px-8 py-6">
//         {portfolioData.map((portfolio, index) => (
//           <div key={index} className="keen-slider__slide">
//             <PortfolioCard
//               key={index}
//               index={index} // Pass the index to the PortfolioCard
//               {...portfolio} // Spread the portfolio data
//               onModalToggle={() => {}} // Pass an empty function for now
//             />
//           </div>
//         ))}
//       </div>

//       {/* Navigation Arrows */}
//       <div className="flex justify-center items-center gap-4 mt-4">
//         <button
//           onClick={handlePrev}
//           className={`w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center text-black shadow-lg hover:bg-gray-200 ${
//             isPrevDisabled ? "opacity-50 cursor-not-allowed" : ""
//           }`}
//           disabled={isPrevDisabled}
//         >
//           ← {/* Left arrow */}
//         </button>
//         <button
//           onClick={handleNext}
//           className={`w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center text-black shadow-lg hover:bg-gray-200 ${
//             isNextDisabled ? "opacity-50 cursor-not-allowed" : ""
//           }`}
//           disabled={isNextDisabled}
//         >
//           → {/* Right arrow */}
//         </button>
//       </div>
//     </div>
//   );
// };

// import "keen-slider/keen-slider.min.css";
// import { useKeenSlider } from "keen-slider/react";
// import React from "react";
// import { PortfolioCard } from "./PortfolioCard"; // Ensure this import is correct

// const portfolioData = [
//   {
//     icon: "/entrenched.mp4",
//     title: "Entrenched Enterprises",
//     description:
//       "Entrenched Enterprises offers a selection of established companies with strong market presence and proven track records. These stocks represent stable and reliable investments in well-established industries.",
//     basket: "global",
//   },
//   {
//     icon: "/APP_2.mp4",
//     title: "Income Generators",
//     description:
//       "Income Generators focuses on dividend-paying stocks known for their consistent income generation. These stocks provide investors with steady cash flow and potential for long-term wealth accumulation.",
//     basket: "global",
//   },
//   {
//     icon: "/Artificial Intellegence.mp4",
//     title: "Artificial Intelligence",
//     description:
//       "Artificial Intelligence comprises stocks of companies at the forefront of AI technology development. These innovative companies leverage AI to drive growth, efficiency, and disruption in various sectors.",
//     basket: "global",
//   },
//   {
//     icon: "/60 40.mp4",
//     title: "60 40 Portfolios (ETFs)",
//     description:
//       "The 60/40 Portfolios offer a balanced approach to investment, consisting of a mix of 60% equity ETFs and 40% fixed-income ETFs. This diversified portfolio aims to provide stability and growth potential for investors.",
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

//   const handlePrev = () => sliderInstance.current?.prev();
//   const handleNext = () => sliderInstance.current?.next();

//   return (
//     <div className="flex flex-col items-center py-20 bg-black text-white">
//       {/* Section Header */}
//       <h6 className="mb-5 text-center font-poppins tracking-wide leading-9 text-3xl pb-1 sm:text-3xl font-medium lg:text-3xl">
//         <span className="text-white text-3xl">Nuqi</span>{" "}
//         <span className="text-white text-3xl">Global</span>{" "}
//         <span className="text-cyan-500 text-3xl">
//           Curated Equity Portfolios (CEP)
//         </span>
//       </h6>

//       <p className="max-w-3xl text-center font-poppins tracking-wide leading-6 lg:text-lg text-[#b3b3b3] mb-6">
//         At NUQI, our team of seasoned investment professionals crafts a diverse
//         range of investment themes, seamlessly leading to Curated Equity
//         Portfolios tailored to align with distinct risk appetites and financial
//         objectives.
//       </p>

//       {/* Carousel */}
//       <div ref={sliderRef} className="keen-slider w-full px-4 lg:px-8 py-6">
//         {portfolioData.map((portfolio, index) => (
//           <div key={index} className="keen-slider__slide">
//             <PortfolioCard
//               key={index}
//               index={index} // Pass the index to the PortfolioCard
//               {...portfolio} // Spread the portfolio data
//               onModalToggle={() => {}} // Pass an empty function for now
//             />
//           </div>
//         ))}
//       </div>

//       {/* Navigation Arrows */}
//       <div className="flex justify-center items-center gap-4 mt-4">
//         <button
//           onClick={handlePrev}
//           className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center text-black shadow-lg hover:bg-gray-200"
//         >
//           ◀
//         </button>
//         <button
//           onClick={handleNext}
//           className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center text-black shadow-lg hover:bg-gray-200"
//         >
//           ▶
//         </button>
//       </div>
//     </div>
//   );
// };


