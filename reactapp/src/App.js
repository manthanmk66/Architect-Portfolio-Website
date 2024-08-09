import React from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/About";
import AboutMe from "./components/AboutMe";
import Tools from "./components/Tools";
import WorkExperience from "./components/WorkExperience";
import Footer from "./components/Footer";
import CaraousalSection from "./components/CaraousalSection";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutMe />
      <AboutSection />
      <Tools />
      <CaraousalSection />
      <WorkExperience />
      <Footer />
    </div>
  );
}

export default App;
