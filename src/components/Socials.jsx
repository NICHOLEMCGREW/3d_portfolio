import React from "react";

import { SectionWrapper } from "../hoc";
import { socials } from "../constants";

const Socials = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {socials.map((social) => (
        <div className='w-28 h-28' key={social.name}>
          <BallCanvas icon={social.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");