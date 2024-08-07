import React from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/About";
import AboutMe from "./components/AboutMe";
import Tools from "./components/Tools";
import CVCircle from "./animation/CVCircle";
import DesignToolsSection from "./components/DesignToolsSection";
import CivilWorkSection from "./components/CivilWorkSection";
import InteriorDesignSection from "./components/InteriorDesignSection";
import WorkExperience from "./components/WorkExperience";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      <AboutMe />
      <AboutSection />
      <Tools />
      <WorkExperience />

      {/* <DesignToolsSection />
      <CivilWorkSection />
      <InteriorDesignSection /> */}
    </div>
  );
}

export default App;
