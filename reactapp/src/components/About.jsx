import React from "react";
import HighlightText from "../animation/HighlightEffect";

function AboutSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 h-screen">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              Designing
              <HighlightText text={"the Future"} />
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Blanditiis maiores esse perspiciatis molestias minima ullam
              voluptatum, perferendis quo atque, sit obcaecati ea assumenda
              tempora, fugiat adipisci repellat ducimus beatae quae suscipit
              accusantium. Neque ducimus aspernatur ab vero sequi consectetur
              illo?{" "}
            </p>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <div className="relative w-fit h-fit shadow-blue-200 shadow-[0px_0px_30px_0px]">
              <div className="absolute lg:left-[50%] lg:bottom-0 lg:translate-x-[-50%] lg:translate-y-[50%] bg-gradient-to-r mt-4 from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 flex lg:flex-row flex-col text-white uppercase py-5 gap-4 lg:gap-0 lg:py-10 ">
                {/* Section 1 */}
                <div className="flex gap-5 items-center lg:border-r border-fuchsia-500 px-7 lg:px-14">
                  <h1 className="text-3xl font-bold w-[75px]">10</h1>
                  <h1 className="text-caribbeangreen-300 text-sm w-[75px]">
                    Years experiences
                  </h1>
                </div>

                {/* Section 2 */}
                <div className="flex gap-5 items-center lg:px-14 px-7">
                  <h1 className="text-3xl font-bold w-[75px]">250+</h1>
                  <h1 className="text-caribbeangreen-300 text-sm w-[75px]">
                    Projects Delivered
                  </h1>
                </div>
              </div>
              <img
                src="/building.jpg"
                alt="Building 2"
                className="shadow-white shadow-[20px_20px_0px_0px] object-cover h-[400px] lg:h-fit"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
