"use client";
import StartUp from "./StartUp";
import DoctorApp from "./DoctorApp";
import Wheather from "./Wheather";
import Cars from "./Cars";

export default function Projects() {
  return (
    <section id="projects" className="section-block">
      <div className="container-main">
        <header className="section-head text-center items-center mx-auto">
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-desc mx-auto">
            Selected work — full-stack applications with clean UI and
            production-ready features.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          <StartUp />
          <DoctorApp />
          <Wheather />
          <Cars />
        </div>
      </div>
    </section>
  );
}
