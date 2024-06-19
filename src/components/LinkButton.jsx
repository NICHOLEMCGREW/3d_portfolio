import { Link } from "react-scroll";

const LinkButton = ({ to, children, className }) => (
  <Link
    to={to}
    smooth={true}
    duration={500}
    className={`cursor-pointer px-6 lg:mt-1 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white ${className}`}
  >
    {children}
  </Link>
);

export default LinkButton;
