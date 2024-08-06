import React from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/About";
import AboutMe from "./components/AboutMe";
import DesignToolsSection from "./components/DesignToolsSection";
import CivilWorkSection from "./components/CivilWorkSection";
import InteriorDesignSection from "./components/InteriorDesignSection";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      <AboutMe />
      <AboutSection />
      {/* <DesignToolsSection />
      <CivilWorkSection />
      <InteriorDesignSection /> */}
    </div>
  );
}

export default App;
