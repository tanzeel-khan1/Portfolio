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
            className="text-3xl font-semibold md:mt-0 mt-10 text-blue-500"
          >
            Hi ! I'm
          </motion.h1>

          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false }}
            className="text-5xl font-bold mt-2 text-blue-500"
          >
            Tanzeel
          </motion.h1>

         <motion.p
  initial={{ x: -50, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
  viewport={{ once: false }}
  className="mt-6 text-gray-600 leading-relaxed max-w-md"
>
  I’m a passionate frontend developer skilled in{" "}
  <motion.span
    whileHover={{ scale: 1.1, color: "#2563EB" }}
    className="font-semibold text-blue-500 cursor-pointer"
  >
    HTML
  </motion.span>
  ,{" "}
  <motion.span
    whileHover={{ scale: 1.1, color: "#2563EB" }}
    className="font-semibold text-blue-500 cursor-pointer"
  >
    CSS
  </motion.span>
  ,{" "}
  <motion.span
    whileHover={{ scale: 1.1, color: "#2563EB" }}
    className="font-semibold text-blue-500 cursor-pointer"
  >
    JavaScript
  </motion.span>
  , and{" "}
  <motion.span
    whileHover={{ scale: 1.1, color: "#2563EB" }}
    className="font-semibold text-blue-500 cursor-pointer"
  >
    React.js
  </motion.span>
  , with experience building full-stack applications using the{" "}
  <motion.span
    whileHover={{ scale: 1.1, color: "#2563EB" }}
    className="font-semibold text-blue-500 cursor-pointer"
  >
    MERN Stack
  </motion.span>
  . I specialize in creating clean, responsive, and visually appealing user interfaces using{" "}
  <motion.span
    whileHover={{ scale: 1.1, color: "#2563EB" }}
    className="font-semibold text-blue-500 cursor-pointer"
  >
    Next.js
  </motion.span>
  ,{" "}
  <motion.span
    whileHover={{ scale: 1.1, color: "#2563EB" }}
    className="font-semibold text-blue-500 cursor-pointer"
  >
    Tailwind CSS
  </motion.span>
  , and{" "}
  <motion.span
    whileHover={{ scale: 1.1, color: "#2563EB" }}
    className="font-semibold text-blue-500 cursor-pointer"
  >
    Framer Motion
  </motion.span>{" "}
  for smooth animations. I enjoy turning complex requirements into simple, user-friendly solutions, and I’m an active GitHub contributor with achievements like{" "}
  <motion.span
    whileHover={{ scale: 1.1, color: "#2563EB" }}
    className="font-semibold text-blue-500 cursor-pointer"
  >
    Quickdraw
  </motion.span>
  ,{" "}
  <motion.span
    whileHover={{ scale: 1.1, color: "#2563EB" }}
    className="font-semibold text-blue-500 cursor-pointer"
  >
    Pull Shark
  </motion.span>
  , and{" "}
  <motion.span
    whileHover={{ scale: 1.1, color: "#2563EB" }}
    className="font-semibold text-blue-500 cursor-pointer"
  >
    YOLO
  </motion.span>
  . Always eager to learn new technologies, my focus is on delivering engaging and modern web experiences that delight users.
</motion.p>

        </div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
          className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0"
        >
          <img
            src="https://avatars.githubusercontent.com/u/204762480?v=4"
            className="h-60 w-60 md:h-[25rem] md:w-[25rem] rounded-full object-cover"
            alt="img"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Second;
