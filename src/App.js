import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Portfolio from './components/Portfolio';
import DeveloperPortfolio from './components/DeveloperPortfolio';
import DesignerPortfolio from './components/DesignerPortfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import DesignDemo from './components/DesignDemo';  

function App() {
  const [nav, setNav] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <NavBar nav={nav} setNav={setNav} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Portfolio />
                <Skills />
                <Contact />
              </>
            }
          />
          <Route path="/developer" element={<DeveloperPortfolio />} />
          <Route path="/designer" element={<DesignerPortfolio />} />
          <Route path="/designdemo" element={<DesignDemo />} />
        </Routes>
        <SocialLinks />
      </BrowserRouter>
    </div>
  );
}

export default App;
