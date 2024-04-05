import { motion } from "framer-motion";
import linkedinIcon from "../assets/socials/linkedin.svg";
import githubIcon from "../assets/socials/github.svg";
import twitterIcon from "../assets/socials/twitter.svg";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { EarthCanvas } from "./canvas"; // Import EarthCanvas component
import { styles } from "../styles";

const Contact = () => {
  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className='flex-[0.75] bg- p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <div className="bg-black-600 bg-opacity-50 border border-silver border-opacity-50 p-8 rounded-2xl">
          <div className="flex flex-col gap-4 mt-4">
            <a href="#" className="flex gap-4 items-center text-white">
              <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8" />
              <p>Connect with me on LinkedIn</p>
            </a>
            <a href="#" className="flex gap-4 items-center text-white">
              <img src={githubIcon} alt="GitHub" className="w-8 h-8" />
              <p>Check out my projects on GitHub</p>
            </a>
            <a href="#" className="flex gap-4 items-center text-white">
              <img src={twitterIcon} alt="Twitter" className="w-8 h-8" />
              <p>Follow me on Twitter</p>
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className='xl:flex-1'>
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
