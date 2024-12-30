import * as React from "react";
import { HeroSection } from "./HeroSection";

export const NuqiPrive: React.FC = () => {
  return (
    <HeroSection
      title="Prive"
      highlightedText="Nuqi"
      imageSrc="/priveeeeee 4.png"
      description={
        <div>
          <span className="text-white font-semibold text-2xl whitespace-nowrap">
            Welcome to NUQI Prive: Tailored Solutions <br />  for Ultra-High Net Worth Individual
          </span>
          <br />
          <p className="whitespace-nowrap">At NUQI Prive, we understand that managing wealth is more <br/> than just numbers—it's about preserving and growing <br/>legacies while addressing unique financial aspirations. <br/>As our dedicated asset management division, NUQI Prive <br/> caters exclusively to Ultra-High Net Worth Individuals (UHN)<br/> with bespoke services that reflect our commitment to<br/> excellence and discretion.</p>
          
        </div>
      }
    />
  );
};


// export const NuqiPrive: React.FC = () => {
//   return (
//     <HeroSection
//       title="Prive"
//       highlightedText="Nuqi"
//       imageSrc="/priveeeeee 4.png"
//       description="Welcome to NUOI Prive: Tailored Solutions for Ultra-High Net Worth Individual

// At NUQI Prive, we understand that managing wealth is more than just numbers-it's about preserving and growing legacies while addressing unique financial aspirations. As our dedicated asset management division, NUQI Prive caters exclusively to Ultra-High Net Worth Individuals (UHN) with bespoke services that reflect our commitment to excellence and discretion."
//     />
//   );
// };
