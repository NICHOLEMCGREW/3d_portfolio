import HeroTitle from "./HeroTitle";
import LinkButton from "./LinkButton";
import DownloadCVButton from "./DownloadCVButton";
import Image from "../assets/img/hero.png";

const HeroSection = () => {
  return (
    <section className="h-screen flex items-center lg:pt-24 sm:pt-16">
      <div className="lg:ml-12 grid grid-cols-1 sm:grid-cols-12 mx-auto w-full">
        {/* Hero Text Section */}
        <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start px-4 sm:px-8 lg:px-20 pt-6 sm:pt-8 lg:pt-10">
          <div>
            <HeroTitle />
          </div>
          <p className="text-[#ADB7BE] text-base sm:text-lg pt-6 pb-3 sm:pb-6 md:pb-6 lg:text-xl">
            Curious, Creative, Problem Solver, Collaborator, Craftsman, Teacher,
            Student.
          </p>
          <div>
            <LinkButton to="contact">Hire Me</LinkButton>
            <DownloadCVButton />
          </div>
        </div>

        {/* Hero Image Section */}
        <div className="col-span-4 sm:col-span-4 lg:col-span-2 place-self-center mt-4 lg:mt-2">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden mx-auto">
            <img
              src={Image}
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
