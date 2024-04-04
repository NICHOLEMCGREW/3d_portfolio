import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { skills } from "../constants";

const Skills = () => {
  // Function to handle animation variants
  const textVariant = () => ({
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  });

  return (
    <div>
      {/* Header section */}
      <motion.div variants={textVariant()} initial="hidden" animate="visible">
        <h2 className={`${styles.sectionHeadText}`}>Skills.</h2>
      </motion.div>

      {/* Content section */}
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {/* Existing skills mapped */}
        {skills.map((skill) => (
          <div className='w-28 h-28' key={skill.name}>
            <BallCanvas icon={skill.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Skills, "skills");
