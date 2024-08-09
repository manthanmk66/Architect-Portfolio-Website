import React from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/About";
import AboutMe from "./components/AboutMe";
import Tools from "./components/Tools";
import CVCircle from "./animation/CVCircle";
import DesignToolsSection from "./components/DesignToolsSection";
import WorkExperience from "./components/WorkExperience";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import CaraousalSection from "./components/CaraousalSection";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      <AboutMe />
      <AboutSection />
      <Tools />
      <WorkExperience />
      <CaraousalSection />
      <Footer />

      {/* <DesignToolsSection />
     
      <InteriorDesignSection /> */}
    </div>
  );
}

export default App;
