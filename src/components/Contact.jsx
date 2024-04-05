import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { EarthCanvas } from "./canvas"; // Import EarthCanvas component
import { styles } from "../styles";
import { socials } from "../constants"; // Import social links data

const Contact = () => {
  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className='flex-[0.75] bg- p-2 rounded-2xl'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <div className="bg-black-600 bg-opacity-50 border border-silver border-opacity-50 rounded-2xl md:max-w-md lg:max-w-lg sm:max-w-xl sm:p-4 pb-3">
          <div className="flex flex-col gap-4 mt-4 px-2">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 items-center text-white"
              >
                <div className="rounded-full border border-white p-2">
                  <img src={social.icon} alt={social.name} className="w-7 h-7" />
                </div>
                <p>{social.contactP}</p>
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
