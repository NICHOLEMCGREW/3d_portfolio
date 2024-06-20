import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
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
    <nav className={`py-6 bg-opacity-0 bg-[#181818] w-full flex items-center fixed top-0 z-20 ${scrolled ? "bg-opacity-100" : "border-none"}`}>
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center px-6 sm:px-16">
        <Link to="/" className="flex items-center gap-2" onClick={() => { setActive(""); window.scrollTo(0, 0); }}>
          <img src={logo} alt="logo" className="w-11 h-11 object-contain" />
          <p className={`text-white text-18px font-bold cursor-pointer flex ${scrolled ? "block" : "hidden"}`}>
            Nichole &nbsp;
            <span className="sm:block">McGrew</span>
          </p>
        </Link>

        <ul className="hidden md:flex flex-row gap-10 ml-auto text-white text-opacity-70 tracking-0.8px text-18px">
          {navLinks.map((nav) => (
            <li key={nav.id} className={`hover:text-white text-secondary text-18px font-medium cursor-pointer`}>
              <HashLink smooth to={`#${nav.id}`} className="no-underline">
                {nav.title}
              </HashLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 ml-10">
          <div className="hidden lg:flex socials items-center gap-2">
            {socials.map((social) => (
              <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer" className="relative flex items-center justify-center w-10 h-10 rounded-full border border-white border-opacity-50 hover:bg-white hover:opacity-1 transform transition-transform duration-300 ease-in-out">
                <img src={social.icon} alt={`${social.name} Icon`} className="w-full h-full object-contain filter invert-0 hover:invert-1 hover:invert-0.99 align-middle transform transition-all duration-ease hover:rotate-360deg hover:transition-0.3s hover:duration-ease-in-out hover:z--1" style={{ width: "19px" }} />
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <li className={`${active === letsConnectLink.title ? "text-white" : "text-secondary"} hover:text-white text-17px font-medium cursor-pointer list-none connect vvd ml-7`} onClick={() => setActive(letsConnectLink.title)}>
              <HashLink smooth to="/#contact" className={`contact relative ${letsConnectLink.className || ""} text-white transition duration-300 ease-in-out`} style={{ padding: "15px 16px" }} onClick={() => { setToggle(false); setActive(letsConnectLink.title); }}>
                {letsConnectLink.title}
                <span className="before-transform transition-transform duration-300 ease-in-out"></span>
              </HashLink>
            </li>
          </div>
        </div>

        <div className="flex flex-1 justify-end items-center lg:hidden">
          <img src={toggle ? close : menu} alt="menu" className="w-28px h-28px object-contain" onClick={() => setToggle(!toggle)} />

          <div className={`${toggle ? "flex" : "hidden"} absolute top-20 right-0 mx-4 my-2 min-w-140px z-10 p-6 black-gradient rounded-xl`}>
            <ul className="flex flex-col items-start justify-end gap-4 list-none flex-1">
              {navLinks.map((nav) => (
                <li key={nav.id} className={`font-poppins font-medium cursor-pointer text-16px ${active === nav.title ? "text-white" : "text-secondary"}`} onClick={() => { setToggle(!toggle); setActive(nav.title); }}>
                  <HashLink smooth to={`#${nav.id}`}>
                    {nav.title}
                  </HashLink>
                </li>
              ))}

              <div className="flex items-center gap-2 md:hidden socials">
                {socials.map((social) => (
                  <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer" className="relative flex items-center justify-center w-9 h-9 rounded-full border border-white border-opacity-50 hover:bg-white hover:opacity-1 transform transition-transform duration-300 ease-in-out">
                    <span className="before-transform transition-transform duration-300 ease-in-out"></span>
                    <img src={social.icon} alt={`${social.name} Icon`} className="w-full h-full object-contain filter invert-0 hover:invert-1 hover:invert-0.99 align-middle transform transition-all duration-ease hover:rotate-360deg hover:transition-0.3s hover:duration-ease-in-out hover:z--1" style={{ width: "19px" }} />
                  </a>
                ))}
              </div>

              <li className={`${active === letsConnectLink.title ? "text-white" : "text-secondary"} hover:text-white text-16px font-medium cursor-pointer`} onClick={() => { setToggle(!toggle); setActive(letsConnectLink.title); }}>
                <HashLink smooth to="/#contact" className={`contact relative ${letsConnectLink.className || ""} text-white transition duration-300 ease-in-out`} onClick={() => { setToggle(false); setActive(letsConnectLink.title); }}>
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
