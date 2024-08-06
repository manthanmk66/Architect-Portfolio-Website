import React from "react";

function HeroSection() {
  return (
    <section className="relative h-screen p-8 bg-primary text-primary-foreground py-12 md:py-24 lg:py-32">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: "url('/building2.jpg')" }}
      ></div>

      {/* Logo */}
      <div className="absolute top-4 left-4 z-10">
        <img src="/vks.png" alt="VKS Logo" className="h-16" />
      </div>

      {/* Content */}
      <div className="container relative flex flex-col justify-center items-start h-full z-10">
        <div className="grid gap-8 md:grid-cols-2 md:gap-16">
          <div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Hello, I'm{" "}
              <span className="text-fuchsia-600">Vrushabh Kothe</span>
            </h1>
            <h2 className="pt-4 text-1xl font-bold tracking-tighter sm:text-4xl md:text-3xl lg:text-5xl">
              Designing Innovative Spaces
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Welcome to my architecture portfolio. I'm a passionate architect
              dedicated to creating beautiful and functional spaces that enhance
              the lives of those who inhabit them.
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
