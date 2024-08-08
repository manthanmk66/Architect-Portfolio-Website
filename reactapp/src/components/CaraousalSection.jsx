// App.js
import React from "react";
import Carousel from "../animation/CaraousalData";

const CaraousalSection = () => {
  return (
    <div>
      <h1 className="lg:leading-tighter text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl xl:text-[3rem] 2xl:text-[3rem] flex items-center justify-center">
        Here is my recent work{" "}
      </h1>

      <div className="flex flex-wrap justify-center items-center min-h-screen bg-gray-100 p-8">
        <div className="w-full md:w-1/2 p-4">
          <Carousel />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <Carousel />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <Carousel />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default CaraousalSection;
