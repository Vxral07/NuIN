import * as React from "react";
import { HeroSection } from "./HeroSection";

export const NuqiPrive: React.FC = () => {
  return (
    <HeroSection
      title="Prive"
      highlightedText="Nuqi"
      imageSrc="/priveeeeee 4.png"
      subheading="Welcome to NUQI Prive: Tailored Solutions for Ultra-High Net Worth Individuals." // New Subheading
      description={`
        At NUQI Prive, we understand that managing wealth is more than just numbers—it's about preserving and growing legacies while addressing unique financial aspirations. As our dedicated asset management division, NUQI Prive caters exclusively to Ultra-High Net Worth Individuals (UHN) with bespoke services that reflect our commitment to excellence and discretion.
      `}
    />
  );
};
