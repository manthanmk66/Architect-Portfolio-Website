import React from "react";
import {
  SiAutocad,
  SiSketchup,
  SiAdobephotoshop,
  SiAutodeskrevit,
} from "react-icons/si";
import { FaFileExcel } from "react-icons/fa";
import { TbCube3dSphere } from "react-icons/tb";

const cardData = [
  {
    icon: <SiAutocad className="text-6xl text-red-600" />,
    name: "AutoCAD 2D/3D",
    link: "#",
  },
  {
    icon: <SiSketchup className="text-6xl text-red-500" />,
    name: "SketchUp",
    link: "#",
  },
  {
    icon: <SiAdobephotoshop className="text-6xl text-blue-600" />,
    name: "Photoshop",
    link: "#",
  },
  {
    icon: <FaFileExcel className="text-6xl text-green-600" />,
    name: "Excel",
    link: "#",
  },
  {
    icon: <TbCube3dSphere className="text-6xl text-gray-600" />,
    name: "3ds Max",
    link: "#",
  },
  {
    icon: <SiAutodeskrevit className="text-6xl text-blue-500" />,
    name: "Revit",
    link: "#",
  },
];

export default function Component() {
  return (
    <div className="h-screen mt-10">
      <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] flex items-center justify-center">
        Software and Tools
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto max-w-5xl pt-10">
        {cardData.map((card, index) => (
          <a
            key={index}
            href={card.link}
            className="bg-gray-100 rounded-lg p-6 flex flex-col items-center justify-center gap-4 transition-transform duration-300 hover:scale-105 shadow-lg"
          >
            <div
              className="rounded-full p-6 flex items-center justify-center transition-colors duration-300 hover:bg-opacity-80"
              style={{ opacity: 0.8 }}
            >
              {card.icon}
            </div>
            <p className="text-sm font-medium">{card.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
