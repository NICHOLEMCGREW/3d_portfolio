import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import { About, Contact, Hero, Navbar, Skills, Projects, StarsCanvas } from "./components";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <BrowserRouter>
      <div className={`relative z-0 ${darkMode ? 'dark' : ''}`}>
        <div className={`bg-hero-pattern bg-cover bg-no-repeat bg-center ${darkMode ? 'dark:bg-gradient-to-tr from-[#0235a3] via-[#030a1c] to-[#05174e]' : ''}`}>
          <Navbar
            darkMode={darkMode}
            isOpen={isOpen}
            toggleMenu={toggleMenu}
            toggleTheme={toggleTheme}
          />
          <Hero />
        </div>
        <About />
        <Skills />
        <Projects />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
