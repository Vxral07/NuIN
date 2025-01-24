import React from "react";

const Card: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <div className="bg-gradient-to-b from-[#1d1d1f]/60 to-[#0d0d0d]/60  rounded-[20px] shadow-lg hover:!bg-black hover:!bg-none hover:shadow-[inset_0_0_20px_#0dd3ff] transition-all duration-300 ease-in-out p-6">
      <h3 className="text-xl  text-cyan-500 font-poppins font-medium mb-3">{title}</h3>
      <p className="text-base  font-poppins font-light leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export const InvestmentFeatures: React.FC = () => {
  const features = [
    {
      title: "Secure and Regulated",
      description:
        "NUQI Digital Wealth (SEBI) operates under the robust oversight of DFSA regulations, ensuring smooth and compliant product offerings tailored to your requirements. With retail endorsement, NUQI lowers entry barriers, making quality investment opportunities more accessible.",
    },
    {
      title: "Tailored Equity Solutions",
      description:
        "Gain access to 5,000+ carefully selected stocks, screened through a robust exclusion list of industries and financial ratios to ensure quality and alignment. Additionally, explore 18+ expertly Curated Equity Portfolio’s, tailored to meet diverse financial goals and strategies.",
    },
    {
      title: "Portfolio Rebalancing",
      description:
        "NUQI's expert team of advisors, alongside a supervisory panel, ensures portfolios are rebalanced every six months to maintain alignment with your investment goals and market conditions.",
    },
    {
      title: "Asset Diversification",
      description:
        "Equity, ETFs, and Mutual Funds to spread your exposure across various asset classes, enhancing stability and potential returns.",
    },
    {
      title: "Robo Advisory",
      description:
        "Utilize NUQI's AI-powered Robo Advisory, which analyzes industry trends and tailors recommendations to suit your unique risk profile and investment goals. This cutting-edge technology ensures smarter, data-driven decisions to optimize your portfolio.",
    },
    {
      title: "Global Market Access",
      description:
        "Gain unparalleled access to 9+ global markets, complemented by in-depth fundamental data at your fingertips. NUQI empowers you to make informed investment decisions with seamless access to international opportunities.",
    },
  ];

  return (
    <div className="relative min-h-screen  bg-black text-white">
      {/* Video bgg */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-28 left-0 w-full h-full object-cover"
      >
        <source src="/home.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/60"></div> */}

      {/* Cardsssssssss */}
      <div className="relative z-10 container mx-auto  px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <Card key={index} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </div>
  );
};
