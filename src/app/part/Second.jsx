"use client";

import React from "react";
import { motion } from "framer-motion";

function Second() {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col md:flex-row items-center justify-center">
            <div className="h-auto md:h-[40rem] w-[90%] md:w-[80%] bg-white flex flex-col md:flex-row items-center justify-between px-6 md:px-12 shadow-lg rounded-lg">
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false }}
            className="text-3xl font-semibold text-blue-500">
            Hi ! I'm
          </motion.h1>

          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false }}
            className="text-5xl font-bold mt-2 text-blue-500">
            Tanzeel
          </motion.h1>

         <motion.p
  initial={{ x: -50, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
  viewport={{ once: false }}
  className="mt-6 text-gray-600 leading-relaxed max-w-md">
  I’m a passionate frontend developer skilled in 
  <span className="font-semibold text-blue-500"> HTML</span>, 
  <span className="font-semibold text-blue-500"> CSS</span>, 
  <span className="font-semibold text-blue-500"> JavaScript</span>, and 
  <span className="font-semibold text-blue-500"> React.js</span>.  
  I also work with <span className="font-semibold text-blue-500"> Next.js</span>, 
  <span className="font-semibold text-blue-500"> Tailwind CSS</span> for modern UI design, and 
  <span className="font-semibold text-blue-500"> Framer Motion</span> to create smooth animations.  
  Additionally, I have experience with the 
  <span className="font-semibold text-blue-500"> MERN Stack</span> to build full-stack applications.  
  My focus is on building clean, responsive, and visually appealing user experiences.
</motion.p>


        </div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
          className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src="https://avatars.githubusercontent.com/u/204762480?v=4"
            className="h-60 w-60 md:h-[25rem] md:w-[25rem] rounded-full object-cover"
            alt="img"/>
        </motion.div>

      </div>
    </div>
  );
}

export default Second;
