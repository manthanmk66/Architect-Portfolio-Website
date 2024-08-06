import React from "react";
import { FaDraftingCompass, FaCube, FaPalette } from "react-icons/fa";

const DesignToolsSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Design Tools
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Acme Architects utilizes a wide range of software and tools to bring
            our designs to life. From industry-leading CAD programs to
            cutting-edge visualization and collaboration tools, we leverage the
            latest technology to deliver exceptional results.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <Tool icon={FaDraftingCompass} name="AutoCAD" />
          <Tool icon={FaCube} name="SketchUp" />
          <Tool icon={FaPalette} name="Photoshop" />
        </div>
      </div>
    </section>
  );
};

const Tool = ({ icon: Icon, name }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Icon size={48} className="text-primary" />
      <p className="mt-2 text-lg font-medium">{name}</p>
    </div>
  );
};

export default DesignToolsSection;
