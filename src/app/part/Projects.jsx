"use client";
import React from "react";
import { motion } from "framer-motion";

import StartUp from "./StartUp";
import DoctorApp from "./DoctorApp";
import Wheather from "./Wheather";
import Cars from "./Cars";

const Projects = () => {
  return (
    <section className="bg-white px-4 md:px-20 py-20">
      
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-blue-600 text-center mb-14"
      >
         Projects
      </motion.h1>

      {/* PROJECT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
        <StartUp />
        <Cars />
        <Wheather />
        <DoctorApp />
      </div>
    </section>
  );
};

export default Projects;