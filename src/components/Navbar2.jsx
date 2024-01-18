import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

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
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
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
          <img src={logo} alt='logo' className='w-12 h-9 object-contain' />
        </Link>

        {/* Navigation items for large screens */}
        <ul className='list-none hidden md:flex flex-row gap-8 ml-auto font-normal text-white tracking-[0.8px] text-[18px]'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
               <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 ml-9">
          {/* Social Media Icons Section for large screens */}
          <div className="socials flex items-center gap-2 hidden lg:flex">
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

          {/* Let's Connect button from letsConnectLink for large screens */}
          <div className="hidden md:block">
            <li
              className={`${
                active === letsConnectLink.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer list-none connect vvd`}
              onClick={() => setActive(letsConnectLink.title)}
            >
              <Link
                to={`/${letsConnectLink.id}`}
                className={`contact relative ${letsConnectLink.className || ''} border-white border-opacity-50 border-2 p-4 text-white transition duration-300 ease-in-out`}
                onClick={() => {
                  setToggle(false);
                  setActive(letsConnectLink.title);
                }}
                
              >
                {letsConnectLink.title}
                <span className="before-transform transition-transform duration-300 ease-in-out"></span>
              </Link>
            </li>
          </div>
        </div>

        {/* Hamburger menu for medium and small screens */}
        <div className='md:hidden flex flex-1 justify-end items-center'>
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
              {/* Navigation items for medium and small screens */}
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
                  <HashLink to={`#${nav.id}`}>{nav.title}</HashLink>
                </li>
              ))}
              
              {/* Social Media Icons Section for small screens */}
              <div className="socials flex items-center gap-2 md:hidden">
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
              {/* Let's Connect button from letsConnectLink for small screens */}
              <li
                className={`${
                  active === letsConnectLink.title ? "text-white" : "text-secondary"
                } hover:text-white text-[16px] font-medium cursor-pointer`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(letsConnectLink.title);
                }}
              >
                <Link
                  to={`/${letsConnectLink.id}`}
                  className={`contact relative ${letsConnectLink.className || ''} text-white transition duration-300 ease-in-out`}
                  onClick={() => {
                    setToggle(false);
                    setActive(letsConnectLink.title);
                  }}
                >
                  {letsConnectLink.title}
                  <span className="before-transform transition-transform duration-300 ease-in-out"></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
