"use client";
import React from "react";
import { motion } from "framer-motion";

import StartUp from "./StartUp";

const Projects = () => {
  return (
 <>
 <div className="bg-white">
 <motion.h1
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-4xl md:text-5xl font-extrabold bg-white text-blue-600 mb-10 text-center "
            >
              My Projects
            </motion.h1>
  <div className="h-full w-full bg-white md:pl-22 pr-3 md:pr-22">
 
<div className="h-full w-full  grid md:flex">
  <StartUp/>
<StartUp/>
</div>

  </div>
 </div>
 </>
  );
};

export default Projects;
