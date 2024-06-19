import { TypeAnimation } from "react-type-animation";

const HeroTitle = () => (
  <h1 className="text-white text-3xl sm:text-4xl lg:text-6xl lg:leading-normal font-extrabold mt-6">
    <div className="pt-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 block">
      Hello, I'm Nichole
    </div>
    <TypeAnimation
      sequence={["Software Engineer", 1000, "Full Stack Developer", 1000]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className="mt-2 block"
    />
  </h1>
);

export default HeroTitle;
