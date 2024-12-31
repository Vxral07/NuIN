import { LinkedinIcon } from "lucide-react";
import { Link } from "react-router-dom";
import "../../index.css";
import { SparklesCore } from "../ui/sparkles";

const AboutPage = () => {
    return (
        <section className="py-10 sm:py-16 lg:py-20">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="h-[10rem] w-full -mt-24 flex flex-col items-center justify-center overflow-hidden rounded-md">
                    <h2 className="text-3xl font-poppins pb-5 font-medium leading-tight tracking-wide text-cyan-400 sm:text-3xl lg:text-5xl">
                        <span className="text-white">About</span> Us
                    </h2>
                    <div className="w-full sm:w-[40rem] lg:w-[50rem] h-10 relative">
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
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-white font-poppins max-w-2xl mx-auto -mt-6 text-base sm:text-base lg:text-base leading-relaxed">
                        Nuqi boasts top-tier financial experts and elite technology talent, striving to execute proven investment tactics and craft a bespoke investment journey for you. Our skilled team, with decades of experience from esteemed institutions like Citibank, Standard Chartered, Credit Suisse, Dubai Islamic Bank, Microsoft, IBM, ICICI Bank, and EY, is committed to your financial growth.
                    </p>
                </div>

                <h2 className="text-white font-poppins text-3xl text-center mt-8 font-bold leading-tight">
                    Meet Our Team
                </h2>

                <div className="flex text-white font-poppins flex-col justify-center items-center mt-16">
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                        {/* Team Member 1 */}
                        <div className="abtWrap flex flex-col bg-stone-950 md:flex-row gap-4 justify-center items-center p-4">
                            <div className="leftWrp text-center">
                                <img
                                    src="/team/ab-1.png"
                                    alt="Imran Farooqui"
                                    className="mt-4 w-full sm:w-48 lg:w-56 rounded-lg mx-auto"
                                />
                            </div>
                            <div className="text-center sm:mt-0">
                                <div className="text-base sm:text-lg">
                                    <h6 className="text-xl sm:text-xl lg:text-xl">
                                        <Link
                                            to={"https://www.linkedin.com/in/imran-farooqui-baa2b7208/"}
                                            target="_blank"
                                        >
                                            <LinkedinIcon className="my-2 text-white sm:justify-center ml-60 -mb-5" />
                                        </Link>
                                        <p className="text-cyan-400 text-left font-medium text-xl">Imran Farooqui</p>
                                        <span className="mr-44 lg:whitespace-nowrap">Founder & CEO</span>
                                    </h6><br />
                                    <p className="text-lg text-left">
                                        Over two decades in the banking and financial sector across geographies. He specialises in Investment Strategies, Asset Allocation, Private Wealth management, and ESG investments.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Team Member 2 */}
                        <div className="abtWrap flex flex-col bg-stone-950 md:flex-row gap-4 justify-center items-center p-4">
                            <div className="leftWrp text-center">
                                <img
                                    src="/team/ab-2.png"
                                    alt="Shreemohan Chauhaan"
                                    className="mt-4 w-full sm:w-48 lg:w-56 rounded-lg mx-auto"
                                />
                            </div>
                            <div className="text-center -mr-7 sm:mt-0">
                                <div className="text-base sm:text-lg">
                                    <Link
                                        to={"https://www.linkedin.com/in/imran-farooqui-baa2b7208/"}
                                        target="_blank"
                                    >
                                        <LinkedinIcon className="my-2 text-white  ml-64 -mb-6" />
                                    </Link>
                                    <h6 className="text-xl sm:text-xl lg:text-xl">
                                        <p className="text-cyan-400 font-medium text-left text-xl">Shreemohan Chauhaan</p>
                                        <span className="mr-36 whitespace-nowrap">Co-Founder & COO</span>
                                    </h6><br />
                                    <p className="text-lg text-left">
                                        23 years of Global Banking Experience, MBA in marketing, Alternative Investment from Harvard Business School & Climate Finance from CFA Institute. Has been actively associated with India / GCC / Africa and Southeast Asian financial markets.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Team Member 3 */}
                        <div className="abtWrap flex flex-col bg-stone-950 md:flex-row gap-4 justify-center items-center p-4">
                            <div className="leftWrp text-center">
                                <img
                                    src="/team/ab-4.png"
                                    alt="Irfan Mulla"
                                    className="mt-4 w-full sm:w-48 lg:w-56 rounded-lg mx-auto"
                                />
                            </div>
                            <div className="text-center -mr-11 sm:mt-0">
                                <div className="text-base sm:text-lg">
                                    <Link
                                        to={"https://www.linkedin.com/in/imran-farooqui-baa2b7208/"}
                                        target="_blank"
                                    >
                                        <LinkedinIcon className="my-2 text-white ml-64 -mb-6" />
                                    </Link>
                                    <h6 className="text-xl sm:text-xl lg:text-xl">
                                        <p className="text-cyan-400 text-left font-medium text-xl">Irfan Mulla</p>
                                        <span className="mr-44 whitespace-nowrap">Head of Marketing</span>
                                    </h6><br />
                                    <p className="text-lg text-left">
                                        Advertising and Marketing lead with focused digital ecosystem marketing experience across AMEA regions. Statistics graduate with over 25 years of industry experience.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Team Member 4 */}
                        <div className="abtWrap flex flex-col bg-stone-950 md:flex-row gap-4 justify-center items-center p-4">
                            <div className="leftWrp text-center">
                                <img
                                    src="/team/ab-5.png"
                                    alt="Osama Sharif"
                                    className="mt-4 w-full sm:w-48 lg:w-56 rounded-lg mx-auto"
                                />
                            </div>
                            <div className="text-center -mr-9 sm:mt-0">
                                <div className="text-base sm:text-lg">
                                    <Link
                                        to={"https://www.linkedin.com/in/imran-farooqui-baa2b7208/"}
                                        target="_blank"
                                    >
                                        <LinkedinIcon className="my-2 text-white ml-64 -mb-6" />
                                    </Link>
                                    <h6 className="text-xl sm:text-xl lg:text-xl">
                                        <p className="text-cyan-400 text-left font-medium text-xl">Osama Sharif</p>
                                        <span className="mr-36 whitespace-nowrap">Head of Technology</span>
                                    </h6><br />
                                    <p className="text-lg text-left">
                                        10+ Years experience in IT Digital Transformation in Saudi Arabia, UAE & India. Certified Project Management Professional (PMP) and Oracle Certified Programmer (OCP) to lead Product Implementation.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Team Member 5 */}
                        <div className="abtWrap flex flex-col bg-stone-950 md:flex-row gap-4 justify-center items-center p-4">
                            <div className="leftWrp text-center">
                                <img
                                    src="/team/ab-6.png"
                                    alt="Sonell Kanyal"
                                    className="mt-4 w-full sm:w-48 lg:w-56 rounded-lg mx-auto"
                                />
                            </div>
                            <div className="text-center sm:mt-0">
                                <div className="text-base sm:text-lg">
                                    <Link
                                        to={"https://www.linkedin.com/in/imran-farooqui-baa2b7208/"}
                                        target="_blank"
                                    >
                                        <LinkedinIcon className="my-2 text-white ml-64 -mb-6" />
                                    </Link>
                                    <h6 className="text-xl sm:text-xl lg:text-xl">
                                        <p className="text-cyan-400 text-left font-medium text-xl">Sonell Kanyal</p>
                                        <span className="mr-8 lg:whitespace-nowrap">Head of Investment Advisory</span>
                                    </h6><br />
                                    <p className="text-lg text-left">
                                        23 years of Global Banking Experience, MBA in marketing, Alternative Investment from Harvard Business School & Climate Finance from CFA Institute. Has been actively associated with India / GCC / Africa and Southeast Asian financial markets.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Team Member 6 */}
                        <div className="abtWrap flex flex-col bg-stone-950 md:flex-row gap-4 justify-center items-center p-4">
                            <div className="leftWrp text-center">
                                <img
                                    src="/team/ab-7.jpeg"
                                    alt="Sohail Shafiq"
                                    className="mt-4 w-full sm:w-48 lg:w-56 rounded-lg mx-auto"
                                />
                            </div>
                            <div className="text-center -mr-4 sm:mt-0">
                                <div className="text-base sm:text-center sm:text-lg">
                                    <Link
                                        to={"https://www.linkedin.com/in/imran-farooqui-baa2b7208/"}
                                        target="_blank"
                                    >
                                        <LinkedinIcon className="my-2 text-white ml-64 -mb-6" />
                                    </Link>
                                    <h6 className="text-xl sm:text-xl lg:text-xl">
                                        <p className="text-cyan-400 text-left font-medium text-xl">Sohail Shafiq</p>
                                        <span className="mr-4 whitespace-nowrap">Global Head of Ethical Finance</span>
                                    </h6><br />
                                    <p className="text-lg text-left">
                                        Sohail brings over 20 years of experience in Islamic banking, having worked with leading institutions like EY and Standard Chartered. He specializes in product development, branch setups, and advising on Islamic finance.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;

// import { LinkedinIcon } from "lucide-react";
// import { Link } from "react-router-dom";
// import "../../index.css";
// import { SparklesCore } from "../ui/sparkles";

// const AboutPage = () => {
//     return (
//         <section className="py-10 sm:py-16 lg:py-20">
//             <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
//                 <div className="h-[10rem] w-full -mt-24 flex flex-col items-center justify-center overflow-hidden rounded-md">
//                     <h2 className="text-3xl font-poppins pb-5 font-medium leading-tight tracking-wide text-cyan-400 sm:text-3xl lg:text-5xl text-center">
//                         <span className="text-white">About</span> Us
//                     </h2>
//                     <div className="w-full sm:w-[40rem] lg:w-[50rem] h-10 relative">
//                         {/* Gradients */}
//                         <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
//                         <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
//                         <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
//                         <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

//                         {/* Core component */}
//                         <SparklesCore
//                             background="transparent"
//                             minSize={0.4}
//                             maxSize={1}
//                             particleDensity={1200}
//                             className="w-full h-full"
//                             particleColor="#030F26"
//                         />
//                         {/* Radial Gradient to prevent sharp edges */}
//                         <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
//                     </div>
//                 </div>
//                 <div className="max-w-3xl mx-auto text-center">
//                     <p className="text-white font-poppins max-w-2xl mx-auto -mt-6 text-base sm:text-base lg:text-base leading-relaxed">
//                         Nuqi boasts top-tier financial experts and elite technology talent, striving to execute proven investment tactics and craft a bespoke investment journey for you. Our skilled team, with decades of experience from esteemed institutions like Citibank, Standard Chartered, Credit Suisse, Dubai Islamic Bank, Microsoft, IBM, ICICI Bank, and EY, is committed to your financial growth.
//                     </p>
//                 </div>

//                 <h2 className="text-white font-poppins text-3xl text-center mt-8 font-bold leading-tight">
//                     Meet Our Team
//                 </h2>

//                 <div className="flex text-white font-poppins flex-col justify-center items-center mt-16">
//                     <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
//                         {/* Team Member 1 */}
//                         <div className="abtWrap flex flex-col bg-stone-950 md:flex-row gap-4 justify-center items-center p-4">
//                             <div className="leftWrp text-center">
//                                 <img
//                                     src="/team/ab-1.png"
//                                     alt="Imran Farooqui"
//                                     className="mt-4 w-full sm:w-48 lg:w-56 rounded-lg mx-auto"
//                                 />
//                             </div>
//                             <div className="text-center sm:mt-4">
//                                 <div className="text-base sm:text-lg">
//                                     <h6 className="text-xl sm:text-xl lg:text-xl">
//                                         <Link
//                                             to={"https://www.linkedin.com/in/imran-farooqui-baa2b7208/"}
//                                             target="_blank"
//                                         >
//                                             <LinkedinIcon className="my-2 text-white sm:justify-center ml-60 -mb-5" />
//                                         </Link>
//                                         <p className="text-cyan-400 text-left font-medium text-xl">Imran Farooqui</p>
//                                         <span className="mr-44 lg:whitespace-nowrap">Founder & CEO</span>
//                                     </h6><br />
//                                     <p className="text-lg text-left">
//                                         Over two decades in the banking and financial sector across geographies. He specialises in Investment Strategies, Asset Allocation, Private Wealth management, and ESG investments.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Team Member 2 */}
//                         <div className="abtWrap flex flex-col bg-stone-950 md:flex-row gap-4  items-center p-4">
//                             <div className="leftWrp text-center">
//                                 <img
//                                     src="/team/ab-2.png"
//                                     alt="Shreemohan Chauhaan"
//                                     className="mt-4 w-full sm:w-48 lg:w-56 rounded-lg mx-auto"
//                                 />
//                             </div>
//                             <div className="text-center sm:mt-4">
//                                 <div className="text-base sm:text-lg">
//                                     <Link
//                                         to={"https://www.linkedin.com/in/imran-farooqui-baa2b7208/"}
//                                         target="_blank"
//                                     >
//                                         <LinkedinIcon className="my-2 text-white  ml-64 -mb-6" />
//                                     </Link>
//                                     <h6 className="text-xl sm:text-xl lg:text-xl">
//                                         <p className="text-cyan-400 font-medium text-left text-xl">Shreemohan Chauhaan</p>
//                                         <span className="mr-36 whitespace-nowrap">Co-Founder & COO</span>
//                                     </h6><br />
//                                     <p className="text-lg text-left">
//                                         23 years of Global Banking Experience, MBA in marketing, Alternative Investment from Harvard Business School & Climate Finance from CFA Institute. Has been actively associated with India / GCC / Africa and Southeast Asian financial markets.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Team Member 3 */}
//                         <div className="abtWrap flex flex-col bg-stone-950 md:flex-row gap-4 justify-center items-center p-4">
//                             <div className="leftWrp text-center">
//                                 <img
//                                     src="/team/ab-4.png"
//                                     alt="Irfan Mulla"
//                                     className="mt-4 w-full sm:w-48 lg:w-56 rounded-lg mx-auto"
//                                 />
//                             </div>
//                             <div className="text-center sm:mt-4">
//                                 <div className="text-base sm:text-lg">
//                                     <Link
//                                         to={"https://www.linkedin.com/in/imran-farooqui-baa2b7208/"}
//                                         target="_blank"
//                                     >
//                                         <LinkedinIcon className="my-2 text-white ml-64 -mb-6" />
//                                     </Link>
//                                     <h6 className="text-xl sm:text-xl lg:text-xl">
//                                         <p className="text-cyan-400 text-left font-medium text-xl">Irfan Mulla</p>
//                                         <span className="mr-44 whitespace-nowrap">Head of Marketing</span>
//                                     </h6><br />
//                                     <p className="text-lg text-left">
//                                         Advertising and Marketing lead with focused digital ecosystem marketing experience across AMEA regions. Statistics graduate with over 25 years of industry experience.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Team Member 4 */}
//                         <div className="abtWrap flex flex-col bg-stone-950 md:flex-row gap-4 justify-center items-center p-4">
//                             <div className="leftWrp text-center">
//                                 <img
//                                     src="/team/ab-5.png"
//                                     alt="Osama Sharif"
//                                     className="mt-4 w-full sm:w-48 lg:w-56 rounded-lg mx-auto"
//                                 />
//                             </div>
//                             <div className="text-center sm:mt-4">
//                                 <div className="text-base sm:text-lg">
//                                     <Link
//                                         to={"https://www.linkedin.com/in/imran-farooqui-baa2b7208/"}
//                                         target="_blank"
//                                     >
//                                         <LinkedinIcon className="my-2 text-white ml-64 -mb-6" />
//                                     </Link>
//                                     <h6 className="text-xl sm:text-xl lg:text-xl">
//                                         <p className="text-cyan-400 text-left font-medium text-xl">Osama Sharif</p>
//                                         <span className="mr-36 whitespace-nowrap">Head of Technology</span>
//                                     </h6><br />
//                                     <p className="text-lg text-left">
//                                         10+ Years experience in IT Digital Transformation in Saudi Arabia, UAE & India. Certified Project Management Professional (PMP) and Oracle Certified Programmer (OCP) to lead Product Implementation.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Team Member 5 */}
//                         <div className="abtWrap flex flex-col bg-stone-950 md:flex-row gap-4 justify-center items-center p-4">
//                             <div className="leftWrp text-center">
//                                 <img
//                                     src="/team/ab-6.png"
//                                     alt="Sonell Kanyal"
//                                     className="mt-4 w-full sm:w-48 lg:w-56 rounded-lg mx-auto"
//                                 />
//                             </div>
//                             <div className="text-center sm:mt-4">
//                                 <div className="text-base sm:text-lg">
//                                     <Link
//                                         to={"https://www.linkedin.com/in/imran-farooqui-baa2b7208/"}
//                                         target="_blank"
//                                     >
//                                         <LinkedinIcon className="my-2 text-white ml-64 -mb-6" />
//                                     </Link>
//                                     <h6 className="text-xl sm:text-xl lg:text-xl">
//                                         <p className="text-cyan-400 text-left font-medium text-xl">Sonell Kanyal</p>
//                                         <span className="mr-8 lg:whitespace-nowrap ">Head of Investment Advisory</span>
//                                     </h6><br />
//                                     <p className="text-lg text-left">
//                                         23 years of Global Banking Experience, MBA in marketing, Alternative Investment from Harvard Business School & Climate Finance from CFA Institute. Has been actively associated with India / GCC / Africa and Southeast Asian financial markets.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Team Member 6 */}
//                         <div className="abtWrap flex flex-col bg-stone-950 md:flex-row gap-4 justify-center items-center p-4">
//                             <div className="leftWrp text-center">
//                                 <img
//                                     src="/team/ab-7.jpeg"
//                                     alt="Sohail Shafiq"
//                                     className="mt-4 w-full sm:w-48 lg:w-56 rounded-lg mx-auto"
//                                 />
//                             </div>
//                             <div className="text-center sm:mt-4">
//                                 <div className="text-base sm:text-center sm:text-lg">
//                                     <Link
//                                         to={"https://www.linkedin.com/in/imran-farooqui-baa2b7208/"}
//                                         target="_blank"
//                                     >
//                                         <LinkedinIcon className="my-2 text-white ml-64 -mb-6" />
//                                     </Link>
//                                     <h6 className="text-xl sm:text-xl lg:text-xl">
//                                         <p className="text-cyan-400 text-left font-medium text-xl">Sohail Shafiq</p>
//                                         <span className="mr-4 whitespace-nowrap">Global Head of Ethical Finance</span>
//                                     </h6><br />
//                                     <p className="text-lg text-left">
//                                         Sohail brings over 20 years of experience in Islamic banking, having worked with leading institutions like EY and Standard Chartered. He specializes in product development, branch setups, and advising on Islamic finance.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default AboutPage;

// import { LinkedinIcon } from "lucide-react";
// import { Link } from "react-router-dom";
// import "../../index.css";
// import { SparklesCore } from "../ui/sparkles";

// const AboutPage = () => {
//     return (
//         <section className="py-10 sm:py-16 lg:py-20">
//             <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
//                 <div className="h-[10rem] w-full -mt-24 flex flex-col items-center justify-center overflow-hidden rounded-md">
//                     <h2 className="text-3xl font-poppins pb-5 font-medium leading-tight tracking-wide text-cyan-400 sm:text-3xl lg:text-5xl">
//                         <span className="text-white">About</span> Us
//                     </h2>
//                     <div className="w-full sm:w-[40rem] lg:w-[50rem] h-10 relative">
//                         {/* Gradients */}
//                         <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
//                         <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
//                         <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
//                         <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

//                         {/* Core component */}
//                         <SparklesCore
//                             background="transparent"
//                             minSize={0.4}
//                             maxSize={1}
//                             particleDensity={1200}
//                             className="w-full h-full"
//                             particleColor="#030F26"
//                         />
//                         {/* Radial Gradient to prevent sharp edges */}
//                         <div className="absolute inset-0 w-full h-full  [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
//                     </div>
//                 </div>
//                 <div className="max-w-3xl mx-auto text-center">
//                     <p className="text-white font-poppins max-w-2xl mx-auto -mt-6 text-base sm:text-base lg:text-base leading-relaxed">
//                         Nuqi boasts top-tier financial experts and elite technology talent, striving to execute proven investment tactics and craft a bespoke investment journey for you. Our skilled team, with decades of experience from esteemed institutions like Citibank, Standard Chartered, Credit Suisse, Dubai Islamic Bank, Microsoft, IBM, ICICI Bank, and EY, is committed to your financial growth.
//                     </p>
//                 </div>

//                 <h2 className="text-white font-poppins text-3xl text-center mt-8 font-bold leading-tight">
//                     Meet Our Team
//                 </h2>

//                 <div className="flex text-white font-poppins flex-col justify-center items-center mt-16">
//                     <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
//                         {/* Team Member 1 */}
//                         <div className="abtWrap flex flex-col bg-stone-950 md:flex-row gap-4 justify-center items-center p-4">
//                             <div className="leftWrp text-center">
//                                 <img
//                                     src="/team/ab-1.png"
//                                     alt="Imran Farooqui"
//                                     className="mt-4 w-full sm:w-48 lg:w-56 rounded-lg mx-auto"
//                                 />
//                             </div>
//                             <div className="text-center sm:mt-0">
//                                 <div className="text-base sm:text-lg">
//                                     <h6 className="text-xl sm:text-xl lg:text-xl">
//                                         <Link
//                                             to={"https://www.linkedin.com/in/imran-farooqui-baa2b7208/"}
//                                             target="_blank"
//                                         >
//                                             <LinkedinIcon className="my-2 text-white sm:justify-center ml-60 -mb-5" />
//                                         </Link>
//                                         <p className="text-cyan-400 text-left font-medium text-xl">Imran Farooqui</p>
//                                         <span className="mr-44 lg:whitespace-nowrap">Founder & CEO</span>
//                                     </h6><br />
//                                     <p className="text-lg text-left">
//                                         Over two decades in the banking and financial sector across geographies. He specialises in Investment Strategies, Asset Allocation, Private Wealth management, and ESG investments.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Team Member 2 */}
//                         <div className="abtWrap flex flex-col bg-stone-950 md:flex-row gap-4  items-center p-4">
//                             <div className="leftWrp text-center">
//                                 <img
//                                     src="/team/ab-2.png"
//                                     alt="Shreemohan Chauhaan"
//                                     className="mt-4 w-full sm:w-48 lg:w-56 rounded-lg mx-auto"
//                                 />
//                             </div>
//                             <div className="text-center sm:mt-0">
//                                 <div className="text-base sm:text-lg">
//                                     <Link
//                                         to={"https://www.linkedin.com/in/imran-farooqui-baa2b7208/"}
//                                         target="_blank"
//                                     >
//                                         <LinkedinIcon className="my-2 text-white  ml-64 -mb-6" />
//                                     </Link>
//                                     <h6 className="text-xl sm:text-xl lg:text-xl">
//                                         <p className="text-cyan-400 font-medium text-left text-xl">Shreemohan Chauhaan</p>
//                                         <span className="mr-36 whitespace-nowrap">Co-Founder & COO</span>
//                                     </h6><br />
//                                     <p className="text-lg text-left">
//                                         23 years of Global Banking Experience, MBA in marketing, Alternative Investment from Harvard Business School & Climate Finance from CFA Institute. Has been actively associated with India / GCC / Africa and Southeast Asian financial markets.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Team Member 3 */}
//                         <div className="abtWrap flex flex-col bg-stone-950 md:flex-row gap-4 justify-center items-center p-4">
//                             <div className="leftWrp text-center">
//                                 <img
//                                     src="/team/ab-4.png"
//                                     alt="Irfan Mulla"
//                                     className="mt-4 w-full sm:w-48 lg:w-56 rounded-lg mx-auto"
//                                 />
//                             </div>
//                             <div className="text-center sm:mt-0">
//                                 <div className="text-base sm:text-lg">
//                                     <Link
//                                         to={"https://www.linkedin.com/in/imran-farooqui-baa2b7208/"}
//                                         target="_blank"
//                                     >
//                                         <LinkedinIcon className="my-2 text-white ml-64 -mb-6" />
//                                     </Link>
//                                     <h6 className="text-xl sm:text-xl lg:text-xl">
//                                         <p className="text-cyan-400 text-left font-medium text-xl">Irfan Mulla</p>
//                                         <span className="mr-44 whitespace-nowrap">Head of Marketing</span>
//                                     </h6><br />
//                                     <p className="text-lg text-left">
//                                         Advertising and Marketing lead with focused digital ecosystem marketing experience across AMEA regions. Statistics graduate with over 25 years of industry experience.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Team Member 4 */}
//                         <div className="abtWrap flex flex-col bg-stone-950 md:flex-row gap-4 justify-center items-center p-4">
//                             <div className="leftWrp text-center">
//                                 <img
//                                     src="/team/ab-5.png"
//                                     alt="Osama Sharif"
//                                     className="mt-4 w-full sm:w-48 lg:w-56 rounded-lg mx-auto"
//                                 />
//                             </div>
//                             <div className="text-center sm:mt-0 ">
//                                 <div className="text-base sm:text-lg ">
//                                     <Link
//                                         to={"https://www.linkedin.com/in/imran-farooqui-baa2b7208/"}
//                                         target="_blank"
//                                     >
//                                         <LinkedinIcon className="my-2 text-white ml-64 -mb-6" />
//                                     </Link>
//                                     <h6 className="text-xl sm:text-xl lg:text-xl">
//                                         <p className="text-cyan-400 text-left font-medium text-xl">Osama Sharif</p>
//                                         <span className="mr-36 whitespace-nowrap">Head of Technology</span>
//                                     </h6><br />
//                                     <p className="text-lg text-left">
//                                         10+ Years experience in IT Digital Transformation in Saudi Arabia, UAE & India. Certified Project Management Professional (PMP) and Oracle Certified Programmer (OCP) to lead Product Implementation.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Team Member 5 */}
//                         <div className="abtWrap flex flex-col bg-stone-950 md:flex-row gap-4 justify-center items-center p-4">
//                             <div className="leftWrp text-center">
//                                 <img
//                                     src="/team/ab-6.png"
//                                     alt="Sonell Kanyal"
//                                     className="mt-4 w-full sm:w-48 lg:w-56 rounded-lg mx-auto"
//                                 />
//                             </div>
//                             <div className="text-center sm:text-center sm:mt-0">
//                                 <div className="text-base sm:text-lg">
//                                     <Link
//                                         to={"https://www.linkedin.com/in/imran-farooqui-baa2b7208/"}
//                                         target="_blank"
//                                     >
//                                         <LinkedinIcon className="my-2 text-white ml-64 -mb-6" />
//                                     </Link>
//                                     <h6 className="text-xl sm:text-xl lg:text-xl">
//                                         <p className="text-cyan-400 text-left font-medium text-xl">Sonell Kanyal</p>
//                                         <span className="mr-8 lg:whitespace-nowrap ">Head of Investment Advisory</span>
//                                     </h6><br />
//                                     <p className="text-lg text-left">
//                                         23 years of Global Banking Experience, MBA in marketing, Alternative Investment from Harvard Business School & Climate Finance from CFA Institute. Has been actively associated with India / GCC / Africa and Southeast Asian financial markets.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Team Member 6 */}
//                         <div className="abtWrap flex flex-col bg-stone-950 md:flex-row gap-4 justify-center items-center p-4">
//                             <div className="leftWrp text-center">
//                                 <img
//                                     src="/team/ab-7.jpeg"
//                                     alt="Sohail Shafiq"
//                                     className="mt-4 w-full sm:w-48 lg:w-56 rounded-lg mx-auto"
//                                 />
//                             </div>
//                             <div className="text-center sm:mt-0">
//                                 <div className="text-base sm:text-center sm:text-lg">
//                                     <Link
//                                         to={"https://www.linkedin.com/in/imran-farooqui-baa2b7208/"}
//                                         target="_blank"
//                                     >
//                                         <LinkedinIcon className="my-2 text-white ml-64 -mb-6" />
//                                     </Link>
//                                     <h6 className="text-xl sm:text-xl lg:text-xl">
//                                         <p className="text-cyan-400 text-left font-medium text-xl">Sohail Shafiq</p>
//                                         <span className="mr-4 whitespace-nowrap">Global Head of Ethical Finance</span>
//                                     </h6><br />
//                                     <p className="text-lg text-left">
//                                         Sohail brings over 20 years of experience in Islamic banking, having worked with leading institutions like EY and Standard Chartered. He specializes in product development, branch setups, and advising on Islamic finance.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default AboutPage;


// import { LinkedinIcon } from "lucide-react";
// import { Link } from "react-router-dom";
// import "../../index.css";
// import { SparklesCore } from "../ui/sparkles";

// const AboutPage = () => {
//     return (
//         <section className="py-10 sm:py-16 lg:py-20">
//             <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
//                 <div className="h-[10rem] w-full -mt-24 flex flex-col items-center justify-center overflow-hidden rounded-md">
//                     <h2 className="text-3xl font-poppins pb-5 font-medium leading-tight tracking-wide text-cyan-400 sm:text-3xl lg:text-5xl">
//                         <span className="text-white">About</span> Us
//                     </h2>
//                     <div className="w-full sm:w-[40rem] lg:w-[50rem] h-10 relative">
//                         {/* Gradients */}
//                         <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
//                         <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
//                         <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
//                         <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

//                         {/* Core component */}
//                         <SparklesCore
//                             background="transparent"
//                             minSize={0.4}
//                             maxSize={1}
//                             particleDensity={1200}
//                             className="w-full h-full"
//                             particleColor="#030F26"
//                         />
//                         {/* Radial Gradient to prevent sharp edges */}
//                         <div className="absolute inset-0 w-full h-full  [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
//                     </div>
//                 </div>
//                 <div className="max-w-3xl mx-auto text-center">
//                     <p className="text-white font-poppins max-w-2xl mx-auto -mt-6 text-base sm:text-base lg:text-base leading-relaxed">
//                         Nuqi boasts top-tier financial experts and elite technology talent, striving to execute proven investment tactics and craft a bespoke investment journey for you. Our skilled team, with decades of experience from esteemed institutions like Citibank, Standard Chartered, Credit Suisse, Dubai Islamic Bank, Microsoft, IBM, ICICI Bank, and EY, is committed to your financial growth.
//                     </p>
//                 </div>

//                 <h2 className="text-white font-poppins text-3xl text-center mt-8 font-bold leading-tight">
//                     Meet Our Team
//                 </h2>

//                 <div className="flex text-white font-poppins flex-col justify-center items-center mt-16">
//                     <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8">
//                         {/* Team Member 1 */}
//                         <div className="abtWrap flex flex-col bg-stone-950 md:flex-row gap-4 justify-center items-center p-4">
//                             <div className="leftWrp text-center">
//                                 <img
//                                     src="/team/ab-1.png"
//                                     alt="Imran Farooqui"
//                                     className="mt-4 w-full sm:w-48 lg:w-56 rounded-lg mx-auto"
//                                 />
//                             </div>
//                             <div className="text-center sm:mt-0">
//                                 <div className="text-base sm:text-lg">
//                                     <h6 className="text-xl sm:text-xl lg:text-xl">
//                                         <Link
//                                             to={"https://www.linkedin.com/in/imran-farooqui-baa2b7208/"}
//                                             target="_blank"
//                                         >
//                                             <LinkedinIcon className="my-2 text-white sm:justify-center ml-60 -mb-5" />
//                                         </Link>
//                                         <p className="text-cyan-400 text-left font-medium text-xl">Imran Farooqui</p>
//                                         <span className="mr-44 lg:whitespace-nowrap">Founder & CEO</span>
//                                     </h6><br />
//                                     <p className="text-lg text-left">
//                                         Over two decades in the banking and financial sector across geographies. He specialises in Investment Strategies, Asset Allocation, Private Wealth management, and ESG investments.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Team Member 2 */}
//                         <div className="abtWrap flex flex-col bg-stone-950 md:flex-row gap-4 justify-center  items-center p-4">
//                             <div className="leftWrp text-center">
//                                 <img
//                                     src="/team/ab-2.png"
//                                     alt="Shreemohan Chauhaan"
//                                     className="mt-4 w-full sm:w-48 lg:w-56 rounded-lg mx-auto"
//                                 />
//                             </div>
//                             <div className="text-center sm:mt-0">
//                                 <div className="text-base sm:text-lg">
//                                     <Link
//                                         to={"https://www.linkedin.com/in/imran-farooqui-baa2b7208/"}
//                                         target="_blank"
//                                     >
//                                         <LinkedinIcon className="my-2 text-white  ml-64 -mb-6" />
//                                     </Link>
//                                     <h6 className="text-xl sm:text-xl lg:text-xl">
//                                         <p className="text-cyan-400 font-medium text-left text-xl">Shreemohan Chauhaan</p>
//                                         <span className="mr-36 whitespace-nowrap">Co-Founder & COO</span>
//                                     </h6><br />
//                                     <p className="text-lg text-left">
//                                         23 years of Global Banking Experience, MBA in marketing, Alternative Investment from Harvard Business School & Climate Finance from CFA Institute. Has been actively associated with India / GCC / Africa and Southeast Asian financial markets.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Team Member 3 */}
//                         <div className="abtWrap flex flex-col bg-stone-950 md:flex-row gap-4 justify-center items-center p-4">
//                             <div className="leftWrp text-center">
//                                 <img
//                                     src="/team/ab-4.png"
//                                     alt="Irfan Mulla"
//                                     className="mt-4 w-full sm:w-48 lg:w-56 rounded-lg mx-auto"
//                                 />
//                             </div>
//                             <div className="text-center sm:mt-0">
//                                 <div className="text-base sm:text-lg">
//                                     <Link
//                                         to={"https://www.linkedin.com/in/imran-farooqui-baa2b7208/"}
//                                         target="_blank"
//                                     >
//                                         <LinkedinIcon className="my-2 text-white ml-64 -mb-6" />
//                                     </Link>
//                                     <h6 className="text-xl sm:text-xl lg:text-xl">
//                                         <p className="text-cyan-400 text-left font-medium text-xl">Irfan Mulla</p>
//                                         <span className="mr-44 whitespace-nowrap">Head of Marketing</span>
//                                     </h6><br />
//                                     <p className="text-lg text-left">
//                                         Advertising and Marketing lead with focused digital ecosystem marketing experience across AMEA regions. Statistics graduate with over 25 years of industry experience.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Team Member 4 */}
//                         <div className="abtWrap flex flex-col bg-stone-950 md:flex-row gap-4 justify-center items-center p-4">
//                             <div className="leftWrp text-center">
//                                 <img
//                                     src="/team/ab-5.png"
//                                     alt="Osama Sharif"
//                                     className="mt-4 w-full sm:w-48 lg:w-56 rounded-lg mx-auto"
//                                 />
//                             </div>
//                             <div className="text-center sm:mt-0">
//                                 <div className="text-base sm:text-lg">
//                                     <Link
//                                         to={"https://www.linkedin.com/in/imran-farooqui-baa2b7208/"}
//                                         target="_blank"
//                                     >
//                                         <LinkedinIcon className="my-2 text-white ml-64 -mb-6" />
//                                     </Link>
//                                     <h6 className="text-xl sm:text-xl lg:text-xl">
//                                         <p className="text-cyan-400 text-left font-medium text-xl">Osama Sharif</p>
//                                         <span className="mr-36 whitespace-nowrap">Head of Technology</span>
//                                     </h6><br />
//                                     <p className="text-lg text-left">
//                                         10+ Years experience in IT Digital Transformation in Saudi Arabia, UAE & India. Certified Project Management Professional (PMP) and Oracle Certified Programmer (OCP) to lead Product Implementation.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Team Member 5 */}
//                         <div className="abtWrap flex flex-col bg-stone-950 md:flex-row gap-4 justify-center items-center p-4">
//                             <div className="leftWrp text-center">
//                                 <img
//                                     src="/team/ab-6.png"
//                                     alt="Sonell Kanyal"
//                                     className="mt-4 w-full sm:w-48 lg:w-56 rounded-lg mx-auto"
//                                 />
//                             </div>
//                             <div className="text-center sm:mt-0">
//                                 <div className="text-base sm:text-lg">
//                                     <Link
//                                         to={"https://www.linkedin.com/in/imran-farooqui-baa2b7208/"}
//                                         target="_blank"
//                                     >
//                                         <LinkedinIcon className="my-2 text-white ml-64 -mb-6" />
//                                     </Link>
//                                     <h6 className="text-xl sm:text-xl lg:text-xl">
//                                         <p className="text-cyan-400 text-left font-medium text-xl">Sonell Kanyal</p>
//                                         <span className="mr-8 lg:whitespace-nowrap">Head of Investment Advisory</span>
//                                     </h6><br />
//                                     <p className="text-lg text-left">
//                                         23 years of Global Banking Experience, MBA in marketing, Alternative Investment from Harvard Business School & Climate Finance from CFA Institute. Has been actively associated with India / GCC / Africa and Southeast Asian financial markets.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Team Member 6 */}
//                         <div className="abtWrap flex flex-col bg-stone-950 md:flex-row gap-4 justify-center items-center p-4">
//                             <div className="leftWrp text-center">
//                                 <img
//                                     src="/team/ab-7.jpeg"
//                                     alt="Sohail Shafiq"
//                                     className="mt-4 w-full sm:w-48 lg:w-56 rounded-lg mx-auto"
//                                 />
//                             </div>
//                             <div className="text-center sm:mt-0">
//                                 <div className="text-base sm:text-center sm:text-lg">
//                                     <Link
//                                         to={"https://www.linkedin.com/in/imran-farooqui-baa2b7208/"}
//                                         target="_blank"
//                                     >
//                                         <LinkedinIcon className="my-2 text-white ml-64 -mb-6" />
//                                     </Link>
//                                     <h6 className="text-xl sm:text-xl lg:text-xl">
//                                         <p className="text-cyan-400 text-left font-medium text-xl">Sohail Shafiq</p>
//                                         <span className="mr-4 whitespace-nowrap">Global Head of Ethical Finance</span>
//                                     </h6><br />
//                                     <p className="text-lg text-left">
//                                         Sohail brings over 20 years of experience in Islamic banking, having worked with leading institutions like EY and Standard Chartered. He specializes in product development, branch setups, and advising on Islamic finance.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default AboutPage;

// import { LinkedinIcon } from "lucide-react";
// import { Link } from "react-router-dom";
// import "../../index.css";
// import { SparklesCore } from "../ui/sparkles";

// const AboutPage = () => {
//     return (
//         <section className="py-10 sm:py-16 lg:py-20">
//             <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
//                 <div className="h-[10rem] w-full -mt-24 flex flex-col items-center justify-center overflow-hidden rounded-md">
//                     <h2 className="text-3xl  font-poppins pb-5 font-medium leading-tight tracking-wide text-cyan-400 hover:text-cyan-400 sm:text-3xl lg:text-5xl">
//                         <span className="text-white">About</span> Us
//                     </h2>
//                     <div className="w-[40rem] h-10 relative">
//                         {/* Gradients */}
//                         <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
//                         <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
//                         <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
//                         <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

//                         {/* Core component */}
//                         <SparklesCore
//                             background="transparent"
//                             minSize={0.4}
//                             maxSize={1}
//                             particleDensity={1200}
//                             className="w-full h-full"
//                             particleColor="#030F26"
//                         />
//                         {/* Radial Gradient to prevent sharp edges */}
//                         <div className="absolute inset-0 w-full h-full  [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
//                     </div>
//                 </div>
//                 <div className="max-w-3xl mx-auto text-center">
//                     <p className="text-white  font-poppins max-w-2xl mx-auto -mt-6 text-base sm:text-base lg:text-base  leading-relaxed ">
//                         Nuqi boasts top-tier financial experts and elite technology talent, striving to execute proven investment tactics and craft a bespoke investment journey for you. Our skilled team, with decades of experience from esteemed institutions like Citibank, Standard Chartered, Credit Suisse, Dubai Islamic Bank, Microsoft, IBM, ICICI Bank, and EY, is committed to your financial growth.
//                     </p>
//                 </div>

//                 <h2 className="text-white font-poppins text-3xl text-center mt-8 font-bold leading-tight">
//                     Meet Our Team
//                 </h2>

//                 <div className="flex text-white font-poppins flex-col justify-center items-center mt-16">
//                     <div className="grid grid-cols-1   sm:grid-cols-2 lg:grid-cols-2 gap-8">
//                         {/* Team Member 1 */}
//                         <div className="abtWrap flex flex-col bg-stone-950  md:flex-row gap-4 justify-center items-center">
//                             <div className="leftWrp text-center">

//                                 <img
//                                     src="/team/ab-1.png"
//                                     alt="Imran Farooqui"
//                                     className="mt-4 w-full sm:w-48 lg:w-56 rounded-lg mx-auto"
//                                 />
//                             </div>
//                             <div className=" sm:mt-0 text-center">
//                                 <div className="text-base sm:text-lg">

//                                     <h6 className="text-xl sm:text-xl lg:text-xl ">
//                                         <Link
//                                             to={"https://www.linkedin.com/in/imran-farooqui-baa2b7208/"}
//                                             target="_blank"
//                                         >
//                                             <LinkedinIcon className="my-2  text-white" />
//                                         </Link>
//                                         <p className="text-cyan-400 text-left font-medium text-xl">Imran Farooqui</p>
//                                         <span className="mr-44">Founder & CEO</span>
//                                     </h6> <br />
//                                     <p className="text-lg text-left"> Over two decades in the banking and financial sector across geographies. He specialises in Investment Strategies, Asset Allocation, Private Wealth management, and ESG investments. </p>


//                                 </div>
//                             </div>
//                         </div>

//                         {/* Team Member 2 */}
//                         <div className="abtWrap flex flex-col bg-stone-950  md:flex-row gap-4 justify-center items-center">
//                             <div className="leftWrp text-center">

//                                 <img
//                                     src="/team/ab-2.png"
//                                     alt="Imran Farooqui"
//                                     className="mt-4 w-full sm:w-48 lg:w-56 rounded-lg mx-auto"
//                                 />
//                             </div>
//                             <div className="  sm:mt-0 text-center">
//                                 <div className="text-base sm:text-lg">
//                                     <Link
//                                         to={"https://www.linkedin.com/in/imran-farooqui-baa2b7208/"}
//                                         target="_blank"
//                                     >
//                                         <LinkedinIcon className="my-2  text-white" />
//                                     </Link>
//                                     <h6 className="text-xl sm:text-xl lg:text-xl ">
//                                         <p className="text-cyan-400 font-medium text-left text-xl">Shreemohan Chauhaan</p>
//                                         <span className="mr-36 whitespace-nowrap">Co-Founder & COO </span> 
//                                     </h6><br />
//                                     <p className="text-lg text-left"> 23 years of Global Banking Experience, MBA in marketing, Alternative Investment from Harvard Business School & Climate Finance from CFA Institute. Has been actively associated with India / GCC / Africa and Southeast Asian financial markets. </p>

//                                 </div>
//                             </div>
//                         </div>

//                         {/* Team Member 3 */}
//                         <div className="abtWrap flex flex-col bg-stone-950  md:flex-row gap-4 justify-center items-center">
//                             <div className="leftWrp text-center">

//                                 <img
//                                     src="/team/ab-4.png"
//                                     alt="Imran Farooqui"
//                                     className="mt-4 w-full sm:w-48 lg:w-56 rounded-lg mx-auto"
//                                 />
//                             </div>
//                             <div className="  sm:mt-0 text-center">
//                                 <div className="text-base sm:text-lg">
//                                     <Link
//                                         to={"https://www.linkedin.com/in/imran-farooqui-baa2b7208/"}
//                                         target="_blank"
//                                     >
//                                         <LinkedinIcon className="my-2  text-white" />
//                                     </Link>
//                                     <h6 className="text-xl sm:text-xl lg:text-xl ">
//                                         <p className="text-cyan-400 text-left font-medium text-xl">Irfan Mulla</p>
//                                         <span className="mr-44 whitespace-nowrap">Head of Marketing</span>
//                                     </h6><br/>
//                                     <p className="text-lg text-left"> Advertising and Marketing lead with focused digital ecosystem marketing experience across AMEA regions. Statistics graduate with over 25 years of industry experience. </p>

//                                 </div>
//                             </div>
//                         </div>

//                         {/* Team Member 4 */}
//                         <div className="abtWrap flex flex-col bg-stone-950  md:flex-row gap-4 justify-center items-center">
//                             <div className="leftWrp text-center">

//                                 <img
//                                     src="/team/ab-5.png"
//                                     alt="Imran Farooqui"
//                                     className="mt-4 w-full sm:w-48 lg:w-56 rounded-lg mx-auto"
//                                 />
//                             </div>
//                             <div className="  sm:mt-0 text-center">
//                                 <div className="text-base sm:text-lg">
//                                     <Link
//                                         to={"https://www.linkedin.com/in/imran-farooqui-baa2b7208/"}
//                                         target="_blank"
//                                     >
//                                         <LinkedinIcon className="my-2  text-white" />
//                                     </Link>
//                                     <h6 className="text-xl sm:text-xl lg:text-xl ">
//                                         <p className="text-cyan-400 text-left font-medium text-xl">Osama Sharif</p>
//                                         <span className=" mr-36 whitespace-nowrap ">Head of Technology</span>
//                                     </h6><br/>
//                                     <p className="text-lg text-left "> 10+ Years experience in IT Digital Transformation in Saudi Arabia, UAE & India. Certified Project Management Professional (PMP) and Oracle Certified Programmer (OCP) to lead Product Implementation . </p>

//                                 </div>
//                             </div>
//                         </div>

//                         {/* Team Member 5 */}
//                         <div className="abtWrap flex flex-col bg-stone-950  md:flex-row gap-4 justify-center items-center">
//                             <div className="leftWrp text-center">

//                                 <img
//                                     src="/team/ab-6.png"
//                                     alt="Imran Farooqui"
//                                     className="mt-4 w-full sm:w-48 lg:w-56 rounded-lg mx-auto"
//                                 />
//                             </div>
//                             <div className="  sm:mt-0 text-center">
//                                 <div className="text-base sm:text-lg">
//                                     <Link
//                                         to={"https://www.linkedin.com/in/imran-farooqui-baa2b7208/"}
//                                         target="_blank"
//                                     >
//                                         <LinkedinIcon className="my-2  text-white" />
//                                     </Link>
//                                     <h6 className="text-xl sm:text-xl lg:text-xl ">
//                                         <p className="text-cyan-400  text-left font-medium text-xl">Sonell Kanyal</p>
//                                         <span className="mr-8">Head of Investment Advisory</span>
//                                     </h6> <br/>
//                                     <p className="text-lg text-left">23 years of Global Banking Experience, MBA in marketing , Alternative Investment from Harvard Business School & Climate Finance from CFA Institute . Has been actively associated with India / GCC / Africa and Southeast Asian financial markets.F </p>

//                                 </div>
//                             </div>
//                         </div>

//                         {/* Team Member 6 */}
//                         <div className="abtWrap flex flex-col bg-stone-950  md:flex-row gap-4 justify-center items-center">
//                             <div className="leftWrp text-center">

//                                 <img
//                                     src="/team/ab-7.jpeg"
//                                     alt="Imran Farooqui"
//                                     className="mt-4 w-full sm:w-48 lg:w-56 rounded-lg mx-auto"
//                                 />
//                             </div>
//                             <div className="  sm:mt-0 text-center">
//                                 <div className="text-base sm:text-lg">
//                                     <Link
//                                         to={"https://www.linkedin.com/in/imran-farooqui-baa2b7208/"}
//                                         target="_blank"
//                                     >
//                                         <LinkedinIcon className="my-2  text-white" />
//                                     </Link>
//                                     <h6 className="text-xl sm:text-xl lg:text-xl ">
//                                         <p className="text-cyan-400 text-left  font-medium text-xl">Sohail Shafiq</p>
//                                         <span className=" mr-4 whitespace-nowrap">Global Head of Ethical Finance</span>
//                                     </h6><br/>
//                                     <p className="text-lg text-left"> Sohail brings over 20 years of experience in Islamic banking, having worked with leading institutions like EY and Standard Chartered. He specializes in product development, branch setups, and advising on Islamic finance </p>

//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default AboutPage;





// import { LinkedinIcon } from "lucide-react";
// import { Link } from "react-router-dom";
// import "../../index.css";
// import { SparklesCore } from "../ui/sparkles";

// const AboutPage = () => {
//     return (
//         <section className="py-10 sm:py-16 lg:py-20">
//             <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
//         <div className="h-[10rem] w-full -mt-24 flex flex-col items-center justify-center overflow-hidden rounded-md">
//             <h2 className="text-3xl  font-poppins pb-5 font-medium leading-tight tracking-wide text-cyan-400 hover:text-cyan-400 sm:text-3xl lg:text-5xl">
//               <span className="text-white">About</span> Us
//             </h2>
//             <div className="w-[40rem] h-10 relative">
//               {/* Gradients */}
//               <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
//               <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
//               <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
//               <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

//               {/* Core component */}
//               <SparklesCore
//                 background="transparent"
//                 minSize={0.4}
//                 maxSize={1}
//                 particleDensity={1200}
//                 className="w-full h-full"
//                 particleColor="#030F26"
//               />
//               {/* Radial Gradient to prevent sharp edges */}
//               <div className="absolute inset-0 w-full h-full  [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
//             </div>
//         </div>
//                 <div className="max-w-3xl mx-auto text-center">
//                     <p className="text-white font-poppins max-w-2xl mx-auto -mt-6 text-base sm:text-lg lg:text-xl leading-relaxed text-secondary">
//                         Nuqi boasts top-tier financial experts and elite technology talent, striving to execute proven investment tactics and craft a bespoke investment journey for you. Our skilled team, with decades of experience from esteemed institutions like Citibank, Standard Chartered, Credit Suisse, Dubai Islamic Bank, Microsoft, IBM, ICICI Bank, and EY, is committed to your financial growth.
//                     </p>
//                 </div>

//                 <h2 className="text-white font-poppins text-3xl text-center mt-8 font-bold leading-tight">
//                     Meet Our Team
//                 </h2>

//                 <div className="flex text-white font-poppins flex-col justify-center items-center mt-16">
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
//                         {/* Team Member 1 */}
//                         <div className="abtWrap flex flex-col md:flex-row gap-4 justify-center items-center">
//                             <div className="leftWrp text-center">
//                                 <h6 className="text-lg sm:text-xl lg:text-2xl font-semibold">
//                                     <strong>Imran Farooqui</strong>
//                                     <br /> Founder & CEO
//                                 </h6>
//                                 <img
//                                     src="/team/ab-1.png"
//                                     alt="Imran Farooqui"
//                                     className="mt-4 w-full sm:w-48 lg:w-56 rounded-lg mx-auto"
//                                 />
//                             </div>
//                             <div className="rigtWrp mt-4 sm:mt-0 text-center">
//                                 <p className="text-base sm:text-lg">
//                                     <Link
//                                         to={"https://www.linkedin.com/in/imran-farooqui-baa2b7208/"}
//                                         target="_blank"
//                                     >
//                                         <LinkedinIcon className="my-2 text-secondary mx-auto" />
//                                     </Link>
//                                     Over two decades in the banking and financial sector across geographies. He specialises in Investment Strategies, Asset Allocation, Private Wealth management, and ESG investments.
//                                 </p>
//                             </div>
//                         </div>

//                         {/* Team Member 2 */}
//                         <div className="abtWrap flex flex-col md:flex-row gap-4 justify-center items-center">
//                             <div className="leftWrp text-center">
//                                 <h6 className="text-lg sm:text-xl lg:text-2xl font-semibold">
//                                     <strong>Shreemohan Chauhaan</strong>
//                                     <br />
//                                     Co-Founder & COO
//                                 </h6>
//                                 <img
//                                     src="/team/ab-2.png"
//                                     alt="Shreemohan Chauhaan"
//                                     className="mt-4 w-full sm:w-48 lg:w-56 rounded-lg mx-auto"
//                                 />
//                             </div>
//                             <div className="rigtWrp mt-4 sm:mt-0 text-center">
//                                 <p className="text-base sm:text-lg">
//                                     <Link
//                                         to={"https://www.linkedin.com/in/shremohan/"}
//                                         target="_blank"
//                                     >
//                                         <LinkedinIcon className="my-2 text-secondary mx-auto" />
//                                     </Link>
//                                     23 years of Global Banking Experience, MBA in marketing, Alternative Investment from Harvard Business School & Climate Finance from CFA Institute. Has been actively associated with India / GCC / Africa and Southeast Asian financial markets.
//                                 </p>
//                             </div>
//                         </div>

//                         {/* Team Member 3 */}
//                         <div className="abtWrap flex flex-col md:flex-row gap-4 justify-center items-center">
//                             <div className="leftWrp text-center">
//                                 <h6 className="text-lg sm:text-xl lg:text-2xl font-semibold">
//                                     <strong>Irfan Mulla</strong>
//                                     <br />
//                                     Head of Marketing
//                                 </h6>
//                                 <img
//                                     src="/team/ab-4.png"
//                                     alt="Sonell Kanyal"
//                                     className="mt-4 w-full sm:w-48 lg:w-56 rounded-lg mx-auto"
//                                 />
//                             </div>
//                             <div className="rigtWrp mt-4 sm:mt-0 text-center">
//                                 <p className="text-base sm:text-lg">
//                                     <Link
//                                         to={"https://www.linkedin.com/in/sonell-kanyal-frm-privatebanker-uae/"}
//                                         target="_blank"
//                                     >
//                                         <LinkedinIcon className="my-2 text-secondary mx-auto" />
//                                     </Link>
//                                     Advertising and Marketing lead with focused digital ecosystem marketing experience across AMEA regions. Statistics graduate with over 25 years of industry experience.  
//                                 </p>
//                             </div>
//                         </div>

//                         {/* Team Member 4 */}
//                         <div className="abtWrap flex flex-col md:flex-row gap-4 justify-center items-center">
//                             <div className="leftWrp text-center">
//                                 <h6 className="text-lg sm:text-xl lg:text-2xl font-semibold">
//                                     <strong>Osama Sharif</strong>
//                                     <br />
//                                     Head of Technology
//                                 </h6>
//                                 <img
//                                     src="/team/abt-5.png"
//                                     alt="Osama Sharif"
//                                     className="mt-4 w-full sm:w-48  lg:w-56 rounded-lg mx-auto"
//                                 />
//                             </div>
//                             <div className="rigtWrp mt-4 sm:mt-0 text-center">
//                                 <p className="text-base sm:text-lg">
//                                     <Link
//                                         to={"https://www.linkedin.com/in/shremohan/"}
//                                         target="_blank"
//                                     >
//                                         <LinkedinIcon className="my-2 text-secondary mx-auto" />
//                                     </Link>
//                                     10+ Years experience in IT Digital Transformation in Saudi Arabia, UAE & India. Certified Project Management Professional (PMP) and Oracle Certified Programmer (OCP) to lead Product Implementation & development projects for large organizations.                                
//                                 </p>
//                             </div>
//                         </div>

//                         {/* Team Member 5 */}
//                         <div className="abtWrap flex flex-col md:flex-row gap-4 justify-center items-center">
//                             <div className="leftWrp text-center">
//                                 <h6 className="text-lg sm:text-xl lg:text-2xl font-semibold">
//                                     <strong>Sonell Kanyal</strong>
//                                     <br />
//                                     Head of Investment Advisory
//                                 </h6>
//                                 <img
//                                     src="/team/ab-6.png"
//                                     alt="Sonell Kanyal"
//                                     className="mt-4 w-full sm:w-48 lg:w-56 rounded-lg mx-auto"
//                                 />
//                             </div>
//                             <div className="rigtWrp mt-4 sm:mt-0 text-center">
//                                 <p className="text-base sm:text-lg">
//                                     <Link
//                                         to={"https://www.linkedin.com/in/sonell-kanyal-frm-privatebanker-uae/"}
//                                         target="_blank"
//                                     >
//                                         <LinkedinIcon className="my-2 text-secondary mx-auto" />
//                                     </Link>
//                                     Certified Chartered Financial Analyst (CFA Institute US), Financial Risk Manager (GARP US), 17+ years’ experience in financial markets, skilled in diverse asset classes, Capital Markets, Financial planning, and Risk management.
//                                 </p>
//                             </div>
//                         </div>

//                         {/* Team Member 6 */}
//                         <div className="abtWrap flex flex-col md:flex-row gap-4 justify-center items-center">
//                             <div className="leftWrp text-center">
//                                 <h6 className="text-lg sm:text-xl lg:text-2xl font-semibold">
//                                     <strong>Sohail Shafiq</strong>
//                                     <br />
//                                     Global Head of Ethical Finance
//                                 </h6>
//                                 <img
//                                     src="/team/ab-7.jpeg"
//                                     alt="Sohail Shafiq"
//                                     className="mt-4 w-full sm:w-48 lg:w-56 rounded-lg mx-auto"
//                                 />
//                             </div>
//                             <div className="rigtWrp mt-4 sm:mt-0 text-center">
//                                 <p className="text-base sm:text-lg">
//                                     <Link
//                                         to={"https://www.linkedin.com/in/sonell-kanyal-frm-privatebanker-uae/"}
//                                         target="_blank"
//                                     >
//                                         <LinkedinIcon className="my-2 text-secondary mx-auto" />
//                                     </Link>
//                                     Sohail has been associated with Islamic banking for over 20 years, working with leading multinational and regional institutions including EY (Ernst & Young), Bank Sarasin, and Standard Chartered Bank.                                
//                                  </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default AboutPage;


