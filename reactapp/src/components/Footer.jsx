import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-14 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-4">Let's Connect</h2>
          <p className="text-center mb-6">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Reach out to me through any
            of the platforms below.
          </p>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} PathLogics All rights reserved.
          </p>
        </div>
        <div className="absolute bottom-4  right-5 flex space-x-4">
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
