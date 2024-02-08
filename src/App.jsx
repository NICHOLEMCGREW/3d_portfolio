import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import { About, Contact, Hero, Navbar, Skills, Projects, StarsCanvas } from "./components";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar isOpen={isOpen} toggleMenu={toggleMenu} />
          <Hero />
        </div>
        <About />
        <Skills />
        <Projects />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
