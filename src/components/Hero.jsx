import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import Image from "../assets/img/hero.png";

const HeroSection = () => {
  const googleDocsLink =
    "https://docs.google.com/document/d/1hqtxe9iwii7zzBRzDM2pcIcLoOrOCCOS2TB6IGXLhEc/edit?usp=drive_link";

  return (
    <section className="h-screen flex items-center lg:pt-24 sm:pt-16"> {/* Adjust top padding here */}
      <div className="lg:ml-12 grid grid-cols-1 sm:grid-cols-12 mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start px-4 sm:px-8 lg:px-20 mt-8 sm:mt-0" // Add margin-top here
        >
          <div style={{ height: "175px", overflow: "hidden" }}>
            <h1 className="text-white mt-6 md:mt-10 sm:mt-8 mb-4 text-3xl sm:text-4xl lg:text-6xl lg:leading-normal font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mt-4 md:mt-0">
                Hello, I'm Nichole{" "}
              </span>
              <br />
              <TypeAnimation
                sequence={["Software Engineer", 1000, "Full Stack Developer", 1000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
          </div>
          <p className="text-[#ADB7BE] text-base sm:text-lg mt-1 mb-6 lg:text-xl">
            Curious, Creative, Problem Solver, Collaborator, Craftsman, Teacher, Student.
          </p>
          <div>
            <Link
              to="contact" // Replace with the correct ID of your contact section
              smooth={true}
              duration={500}
              className="cursor-pointer px-6 lg:mt-10 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white"
            >
              Hire Me
            </Link>
            <a
              href={googleDocsLink}
              target="_blank"
              rel="noreferrer"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3"
              title=""
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 pointer-events-none">
                Download CV
              </span>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 sm:col-span-4 lg:col-span-2 place-self-center mt-4 lg:mt-2"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden mx-auto">
            <img
              src={Image}
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
