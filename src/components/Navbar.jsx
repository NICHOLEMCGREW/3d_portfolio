import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks, letsConnectLink, socials } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={
        `${
        styles.paddingX
      } w-full flex items-center py-6 fixed top-0 z-20   
       ${
        scrolled ? "bg-[#121212] bg-opacity-100" : "border-none"
      }`
    }
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Nichole &nbsp;
            <span className='sm:block'> McGrew</span>
          </p>
        </Link>

        <ul className='list-none hidden md:flex flex-row gap-10 ml-auto font-normal text-white text-opacity-70 tracking-[0.8px] text-[18px]'>
  {navLinks.map((nav) => (
    <li
      key={nav.id}
      className={`text-secondary hover:text-white text-[18px] font-medium cursor-pointer`}
    >
      <HashLink
        smooth
        to={`#${nav.id}`}
        className='no-underline'
      >
        {nav.title}
      </HashLink>
    </li>
  ))}
</ul>


        <div className="flex items-center gap-4 ml-10">
          <div className="socials flex items-center gap-2 hidden lg:flex">
            {/* Social Media Icons Section for large screens */}
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target='_blank'
                rel='noopener noreferrer'
                className="relative flex items-center justify-center w-10 h-10 rounded-full border border-white border-opacity-50 hover:bg-white hover:opacity-1 transform transition-transform duration-300 ease-in-out"
              >
                <img
                  src={social.icon}
                  alt={`${social.name} Icon`}
                  className="w-full h-full object-contain filter invert-0 hover:invert-1 hover:invert-[.99] align-middle transform transition-all duration-[ease] hover:rotate-[360deg] hover:transition-[0.3s] hover:duration-[ease-in-out] hover:z-[-1];"
                  style={{ width: '19px' }}
                />
              </a>
            ))}
          </div>

          <div className="hidden md:block ">
            <li
              className={`${
                active === letsConnectLink.title ? "text-white" : "text-secondary"
              } hover:text-white text-[17px]  font-medium cursor-pointer list-none connect vvd ml-7`}
              onClick={() => setActive(letsConnectLink.title)}
            >
              <HashLink
                smooth
                to={`/#contact`}
                className={`contact relative ${letsConnectLink.className || ''} text-white transition duration-300 ease-in-out`}
                style={{ padding: '15px 16px' }} 
                onClick={() => {
                  setToggle(false);
                  setActive(letsConnectLink.title);
                }}
              >
                {letsConnectLink.title}
                <span className="before-transform transition-transform duration-300 ease-in-out"></span>
              </HashLink>
            </li>
          </div>
        </div>

        <div className='lg:hidden flex flex-1 justify-end items-center'>
          {/* Hamburger menu for medium and small screens */}
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          {/* Dropdown for medium and small screens */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <HashLink smooth to={`#${nav.id}`}>{nav.title}</HashLink>
                </li>
              ))}

              <div className="socials flex items-center gap-2 md:hidden">
                {/* Social Media Icons Section for small screens */}
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className="relative flex items-center justify-center w-9 h-9 rounded-full border border-white border-opacity-50 hover:bg-white hover:opacity-1 transform transition-transform duration-300 ease-in-out"
                  >
                    <span className="before-transform transition-transform duration-300 ease-in-out"></span>
                    <img
                      src={social.icon}
                      alt={`${social.name} Icon`}
                      className="w-full h-full object-contain filter invert-0 hover:invert-1 hover:invert-[.99] align-middle transform transition-all duration-[ease] hover:rotate-[360deg] hover:transition-[0.3s] hover:duration-[ease-in-out] hover:z-[-1];"
                      style={{ width: '19px' }}
                    />
                  </a>
                ))}
              </div>

              <li
                className={`${
                  active === letsConnectLink.title ? "text-white" : "text-secondary"
                } hover:text-white text-[16px] font-medium cursor-pointer`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(letsConnectLink.title);
                }}
              >
                <HashLink
                  smooth
                  to={`/#contact`}
                  className={`contact relative ${letsConnectLink.className || ''} text-white transition duration-300 ease-in-out`}
                  onClick={() => {
                    setToggle(false);
                    setActive(letsConnectLink.title);
                  }}
                >
                  {letsConnectLink.title}
                  <span className="before-transform transition-transform duration-300 ease-in-out"></span>
                </HashLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
