import React from "react";

function AboutSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 h-screen">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              About
            </div>
            <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              Designing the Future
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
            <img
              src="/building.jpg"
              width="600"
              height="400"
              alt="Hero Image"
              className="mx-auto rounded-lg object-cover"
              style={{ aspectRatio: "600/400", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
