import { SectionWrapper } from "../hoc";
import { socials } from "../constants";

const Socials = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {/* <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div> */}
      {socials.map((social) => (
        <div className='w-28 h-28' key={social.name}>
          <BallCanvas icon={social.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Socials, "");