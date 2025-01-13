import { LinkedinIcon } from "lucide-react";
import { Link } from "react-router-dom";
import "../../index.css";
import { SparklesCore } from "../ui/sparkles";


const AboutPage = () => {
  return (
    <section className="py-10 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 -mt-8 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <div className="h-[10rem] w-full flex -mt-24 flex-col items-center justify-center overflow-hidden rounded-md">
          <h2 className="text-3xl pb-5 font-poppins font-semibold leading-6 tracking-wide text-cyan-400 hover:text-cyan-400 sm:text-4xl lg:text-5xl">
            About <span className="text-white">Us</span>
          </h2>
          <div className="w-[40rem] h-10 relative">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

            {/* Core component */}
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#030F26"
            />
            {/* Radial Gradient to prevent sharp edges */}
            <div className="absolute inset-0 w-full h-full  [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
        </div>
        {/* <div className="h-[10rem] w-full -mt-24 flex flex-col items-center justify-center overflow-hidden rounded-md">
          <h2 className="text-3xl font-poppins pb-5 font-medium leading-tight tracking-wide text-cyan-400 sm:text-3xl lg:text-5xl">
            <span className="text-white">About</span> Us
          </h2>
          <div className="w-full sm:w-[40rem] lg:w-[50rem] h-10 relative">
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#030F26"
            />
            <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
        </div> */}

        {/* Description Section */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white font-poppins max-w-2xl mx-auto -mt-6 text-base sm:text-base lg:text-base leading-relaxed">
            Nuqi boasts top-tier financial experts and elite technology talent,
            striving to execute proven investment tactics and craft a bespoke
            investment journey for you. Our skilled team, with decades of
            experience from esteemed institutions like Citibank, Standard
            Chartered, Credit Suisse, Dubai Islamic Bank, Microsoft, IBM, ICICI
            Bank, and EY, is committed to your financial growth.
          </p>
        </div>

        {/* Team Section Header */}
        <h2 className="text-white font-poppins text-3xl text-center mt-8 font-bold leading-tight">
          Meet Our Team
        </h2>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-16">
          {teamData.map((member, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-4 items-center p-6 bg-gradient-to-b from-[#1d1d1f] to-[#0d0d0d] hover:bg-black hover:bg-none hover:shadow-[inset_0_0_20px_#0dd3ff] transition-all duration-300 ease-in-out group"
            >
              {/* Image Section */}
              <div className="flex-shrink-0 w-full md:w-[40%] lg:w-[35%] group-hover:scale-105 transition-transform duration-500">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
              {/* Details Section */}
              <div className="flex flex-col w-full">
                <div className="flex items-center gap-2 mb-2">
                  <h6 className="text-cyan-400 font-medium text-xl group-hover:text-cyan-300 transition-colors duration-300">
                    {member.name}
                  </h6>
                  <Link to={member.linkedin} target="_blank">
                    <LinkedinIcon className="text-white group-hover:text-cyan-400 transition-colors duration-300" />
                  </Link>
                </div>
                <p className="text-white text-xl font-poppins font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-white text-base font-poppins font-light leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const teamData = [
  {
    name: "Imran Farooqui",
    role: "Founder & CEO",
    image: "/team/ab-1.png",
    linkedin: "https://www.linkedin.com/in/imran-farooqui-baa2b7208/",
    description:
      "Over two decades in the banking and financial sector across geographies. He specialises in Investment Strategies, Asset Allocation, Private Wealth management, and ESG investments.",
  },
  {
    name: "Shreemohan Chauhaan",
    role: "Co-Founder & CXO",
    image: "/team/ab-2.png",
    linkedin: "https://www.linkedin.com/in/shremohan/",
    description:
      "23 years of Global Banking Experience, MBA in marketing, Alternative Investment from Harvard Business School & Climate Finance from CFA Institute. Has been actively associated with India / GCC / Africa and Southeast Asian financial markets.",
  },
  {
    name: "Irfan Mulla",
    role: "Head of Marketing",
    image: "/team/ab-4.png",
    linkedin: "https://www.linkedin.com/in/irfan-mulla-digital/",
    description:
      "Advertising and Marketing lead with focused digital ecosystem marketing experience across AMEA regions. Statistics graduate with over 25 years of industry experience.",
  },
  {
    name: "Osama Sharif",
    role: "Head of Technology",
    image: "/team/ab-5.png",
    linkedin: "https://www.linkedin.com/in/osama-sharif-157425b8/",
    description:
      "10+ Years experience in IT Digital Transformation in Saudi Arabia, UAE & India. Certified Project Management Professional (PMP) and Oracle Certified Programmer (OCP) to lead Product Implementation.",
  },
  {
    name: "Sonell Kanyal",
    role: "Head of Investment Advisory",
    image: "/team/ab-6.png",
    linkedin: "https://www.linkedin.com/in/sonell-kanyal-frm-privatebanker-uae/",
    description:
      "23 years of Global Banking Experience, MBA in marketing, Alternative Investment from Harvard Business School & Climate Finance from CFA Institute. Has been actively associated with India / GCC / Africa and Southeast Asian financial markets.",
  },
  {
    name: "Sohail Shafiq",
    role: "Global Head of Ethical Finance",
    image: "/team/ab-7.jpeg",
    linkedin: "https://www.linkedin.com/in/sohail-shafiq-7779279/",
    description:
      "Sohail brings over 20 years of experience in Islamic banking, having worked with leading institutions like EY and Standard Chartered. He specializes in product development, branch setups, and advising on Islamic finance.",
  },
];

export default AboutPage;
