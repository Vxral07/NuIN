import { SparklesCore } from "../ui/sparkles";

const Partnership = () => {
  return (
    <section className="py-10 sm:py-16">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl font-poppins">
        <div className="h-[10rem] -mt-14 w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
          <h2 className="text-3xl pb-5 font-poppins font-medium leading-tight tracking-wide text-cyan-400 hover:text-cyan-400 sm:text-4xl lg:text-5xl">
            Partnership
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
            <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
        </div>
        <div className="text-base leading-relaxed">
          <p className="mb-6 text-gray-300">
            At <span className="text-cyan-400">NUQI</span> Group, we firmly
            believe in the power of collaboration to drive meaningful change.
            Our partnerships reflect our commitment to creating lasting social
            impact by working with organizations and causes that align with our
            values of ethical growth and community development. With a strong
            focus on social responsibility and impactful initiatives, we aim to
            foster connections that uplift underserved communities and promote
            sustainability across various regions. These associations are not
            just collaborations; they are steps toward building a better
            tomorrow by making a tangible difference today.
          </p>
          <p className="mb-6 text-gray-300">
            Our social and impact philosophy is rooted in the belief that shared
            efforts lead to exponential outcomes. Whether it's through advancing
            financial literacy, supporting education, or driving
            climate-conscious efforts, our partnerships are a testament to our
            dedication to creating value for society at large. By uniting with
            like-minded organizations, we hope to extend our reach and amplify
            our impact in regions like Africa, India, and the UAE, where the
            need for innovative and inclusive solutions is most urgent.
          </p>
        </div>
        <div className="text-base leading-relaxed">
          <p className="mb-6 text-gray-300">
            <p className="font-medium text-3xl font-poppins">Our Current Partnerships:</p>
            <br />
            {/* GEFI Partnership */}
            <div className="flex items-center gap-4 mb-6">
              <p className="font-semibold font-poppins text-xl text-cyan-500">
                Global Ethical Finance Initiative (GEFI)
              </p>
              <img
                src="/tmp_c224faea-f27f-4cbc-ae40-8be3ab977e12.png"
                alt="GEFI Logo"
                className="h-[3rem] w-[10rem] object-contain"
              />
            </div>
            <p className="text-white font-poppins">
              <span className="text-cyan-500">NUQI</span> proudly partnered with GEFI to participate in events leading
              up to COP28 in the UAE and the Climate Summit in Edinburgh. Our
              association with GEFI emphasizes creating value in underserved
              areas across Africa, India, and the UAE. Together, we strive to
              promote ethical finance solutions that address pressing global
              challenges.
            </p>
          </p>
          <p className="mb-6 text-base font-poppins text-gray-300">
            Capitalised terms not defined in these Terms of Use shall have the
            same meaning attributed to them in the relevant Rules of the DIFC.
          </p>
          {/* IFA Sport Partnership */}
          <div className="mb-6">
            <div className="flex items-center gap-4 mb-6">
              <p className="font-poppins font-semibold text-xl text-cyan-500">IFA Sport</p>
              <img
                src="/tmp_2538863c-7ecc-45dc-88fb-a36b91146e6d.png"
                alt="IFA Sport Logo"
                className="h-[3rem] w-[5rem] object-contain"
              />
            </div>
            <p className="text-gray-300 font-poppins">
              In collaboration with IFA Sport, a decade-old academy in the UAE,
              NUQI is making strides in shaping the future of over 1,000
              families. By integrating financial literacy education into their
              youth programs, we aim to empower youngsters at a formative age,
              equipping them with the tools they need for a secure and informed
              financial future. Learn more about IFA Sport.
            </p>
          </div>
        </div>

        {/*Images IFSA */}
        <div className="mt-5">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <img
              src="/DSC_8222 (1).jpg"
              alt="Partnership Highlight 1"
              className="rounded-lg object-cover w-full h-full"
            />
            <img
              src="/DSC_8073 (1).jpg"
              alt="Partnership Highlight 2"
              className="rounded-lg object-cover w-full h-full"
            />
            <img
              src="/DSC_8212 (1).jpg"
              alt="Partnership Highlight 3"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
