import Marquee from "react-fast-marquee";

const tieups = [
  "Dfsa1.png",
  "ib1.png",
  "uqudo1.png",
  "ir1.png",
  "tmp_a0c8cabd-f247-409e-bc36-a320f12077cb.png",
  "tmp_76500cfd-7fc0-4ad4-b82c-d5cc3dd3803e.png",
  "six1.png",
];

const RegulatoryTieups = () => {
  return (
    <div className="flex flex-col gap-8 px-14 mt-10 py-12 items-center justify-center antialiased container">
      <div className="flex flex-col bg-[#0d0d0d] rounded-3xl justify-between items-center w-full">
        <div className="flex flex-col justify-between items-center w-full">
          <div className="flex flex-col gap-4 mb-16">
            <h1 className="text-center pb-5 mt-10 tracking-wide leading-6 font-poppins text-3xl font-medium sm:text-3xl lg:text-3xl">
              <span className="text-white text-3xl font-medium">Building</span>{" "}
              <span className="text-cyan-500 text-3xl font-medium">trust</span>{" "}
              <span className="text-cyan-500 text-3xl font-medium">through</span>{" "}
              <span className="text-cyan-500 text-3xl font-medium">
                collaboration
              </span>
            </h1>
            <p className="text-center text-white text-sm leading-6 tracking-wide font-poppins">
              Our collaborations with esteemed financial institutions and
              regulatory authorities underscore our <br /> unwavering commitment
              to security and responsible financial practices, providing a{" "}
              <br />
              trusted and reliable environment for managing your investments.
            </p>
          </div>

          <Marquee direction="left">
            {tieups.map((image, index) => (
              <div
                key={index}
                className={`flex mb-16 min-w-52 justify-center ${
                  image === "tmp_a0c8cabd-f247-409e-bc36-a320f12077cb.png" ||
                  image === "tmp_76500cfd-7fc0-4ad4-b82c-d5cc3dd3803e.png"
                    ? "h-[3.5rem]" // Custom height for specific images
                    : "h-[2.5rem]" // Default height
                }`}
              >
                <img
                  src={`/tieups/${image}`}
                  className={`mx-5 object-cover ${
                    image === "tmp_a0c8cabd-f247-409e-bc36-a320f12077cb.png" ||
                    image === "tmp_76500cfd-7fc0-4ad4-b82c-d5cc3dd3803e.png"
                      ? "w-[200px]" // Custom width for specific images
                      : "w-70" // Default width
                  }`}
                  alt="Tieup Logo"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default RegulatoryTieups;
