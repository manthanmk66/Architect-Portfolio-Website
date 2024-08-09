import React from "react";
import { FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import { FiCoffee } from "react-icons/fi";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-14">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center">
        <div className="text-left lg:text-left mb-6 lg:mb-0">
          <h2 className="text-xl font-semibold mb-4 flex items-center justify-center lg:justify-start">
            <FiCoffee className="mr-2" />
            Let's Connect
          </h2>
          <p>
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <p className="mb-4">
            Reach out to me through any of the platforms below.
          </p>
        </div>

        <div className="text-center lg:text-left">
          <p className="mb-2">vrushabhkothe99@gmail.com</p>
          <p className="mb-4">+91 9373506216</p>
          <div className="flex justify-center lg:justify-start space-x-4 mb-6 lg:mb-0">
            <a
              href="https://www.linkedin.com/in/vrushabh-kothe-0639ab248/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/mr_allround_er/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="mailto:vrushabhkothe99@gmail.com"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Saksentechnologies. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
