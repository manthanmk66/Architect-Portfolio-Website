import React from "react";
import { FaUser, FaBriefcase } from "react-icons/fa"; // Import icons from react-icons

function AboutMe() {
  return (
    <div className="flex flex-col bg-richblack-700 md:flex-row justify-center content-center gap-8 md:gap-12 p-6 md:p-10 bg-background shadow-lg h-full min-h-screen">
      <div className="md:w-1/2 space-y-6 pt-12">
        <div className="grid gap-2">
          <h2 className="text-2xl font-bold text-white flex items-center">
            <FaUser className="mr-2" /> About Me
          </h2>
          <p className="font-poppins text-xl text-white">
            I am a Civil Engineer with extensive experience in the construction
            industry. My expertise spans across various aspects of construction,
            including site management, 2D drawings, 3D modeling, estimation, and
            costing.
          </p>
        </div>
        <div className="grid gap-2 text-white">
          <h3 className="text-lg font-semibold flex items-center">
            <FaBriefcase className="mr-2" /> Experience
          </h3>
          <div className="text-xl font-karla grid gap-4 text-muted-foreground">
            <div>
              <span className="font-medium">Construction Site Management:</span>{" "}
              7 years
            </div>
            <div>
              <span className="font-medium">2D Drawings:</span> 5 years
            </div>
            <div>
              <span className="font-medium">3D Modeling:</span> 4 years
            </div>
            <div>
              <span className="font-medium">Estimation and Costing:</span> 6
              years
            </div>
            <div>
              <span className="font-medium">Total Time in Construction:</span>{" "}
              10 years
            </div>
            <div>
              <span className="font-medium">Interior Design Experience:</span> 3
              years
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center md:w-1/2">
        <div className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[350px] rounded-full overflow-hidden">
          <img
            src="./vrushabh.jpeg"
            alt="Profile Picture"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
