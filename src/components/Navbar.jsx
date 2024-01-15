import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import SocialIcon1 from '../assets/img/social-icon1.svg';
import SocialIcon2 from '../assets/img/social-icon2.svg';
import SocialIcon3 from '../assets/img/social-icon3.svg';

import { styles } from "../styles";
import { navLinks } from "../constants";
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
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Nichole &nbsp;
            <span className='sm:block hidden'> McGrew</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10 ml-80'>
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

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex space-x-4 ml-auto'>
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
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

{/* "Let's Connect" Button with Transparent White Border */}
<Link
  to='/connect'
  className='text-white text-[18px] font-medium cursor-pointer hover:text-white relative'
  onClick={() => {
    setToggle(false);
    setActive("Let's Connect");
  }}
>
  <span className='border-white border-opacity-50 border-2 p-3 '>
    Let's Connect
  </span>
</Link>

{/* Social Media Icons Section */}
<div className="flex items-center gap-5">
  <a href='#' target='_blank' rel='noopener noreferrer'><img src={SocialIcon1} alt='Social Icon 1' className='w-6 h-6 object-contain' style={{ width: '24px' }} /></a>
  <a href='#' target='_blank' rel='noopener noreferrer'><img src={SocialIcon2} alt='Social Icon 2' className='w-6 h-6 object-contain' style={{ width: '24px' }} /></a>
  <a href='#' target='_blank' rel='noopener noreferrer'><img src={SocialIcon3} alt='Social Icon 3' className='w-6 h-6 object-contain' style={{ width: '24px' }} /></a>
  {/* Add more social icons as needed */}
</div>

      </div>
    </nav>
  );
};

export default Navbar;
