import React from "react";
import CVCircle from "../animation/CVCircle";
import { IoIosDownload } from "react-icons/io";

function HeroSection() {
  return (
    <section className="relative h-screen p-8 bg-primary text-primary-foreground py-12 md:py-24 lg:py-32">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/building2.jpg')" }}
      ></div>

      <div className="absolute top-4 left-4 z-10">
        <img src="/vks.png" alt="VKS Logo" className="h-16" />
      </div>
      <CVCircle />

      <div className="container relative flex flex-col justify-center items-start h-full z-10">
        <div className="grid gap-8 md:grid-cols-2 md:gap-16">
          <div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Hello, I'm{" "}
              <span className="text-fuchsia-600">Vrushabh Kothe</span>
            </h1>
            <h2 className="pt-4 text-1xl font-bold tracking-tighter sm:text-4xl md:text-4xl lg:text-5xl">
              Designing Innovative Spaces
            </h2>
            <p className="  mt-4 text-lg text-bold ">
              Welcome to my architecture portfolio. I'm a passionate architect
              dedicated to creating beautiful and functional spaces that enhance
              the lives of those who inhabit them.
              <div>
                <a
                  href="https://drive.google.com/file/d/1juAEu-RCv9ctOKlHEXntZpOJC234SPhF/view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    type="button"
                    class="flex items-center text-white bg-gradient-to-r mt-4 from-cyan-500 to-blue-500 hover:bg-gradient-to-bl  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Resume
                    <span class="ml-2">
                      <IoIosDownload />
                    </span>
                  </button>
                </a>
              </div>
            </p>
          </div>

          {/* <img
            src="/building.jpg"
            width="600"
            height="400"
            alt="Hero Image"
            className="mx-auto rounded-lg object-cover"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          /> */}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
