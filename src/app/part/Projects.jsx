"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Projects = () => {
  return (
    <section className="min-h-screen bg-white  flex flex-col items-center justify-center px-6 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-10 text-center"
      >
        My Projects
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        whileHover={{ scale: 1.03 }}
        viewport={{ once: false, amount: 0.3 }}
        className="max-w-md md:max-w-2xl bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
      >
        <div className="relative">
          <img
            src="/prlogo.png"
            alt="Project Thumbnail"
            className="w-full h-64 object-cover"
          />
        </div>

        <div className="p-6 flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-gray-800">StartUp Website</h2>
          <p className="text-gray-600 leading-relaxed">
            This project is a demonstration of a fully responsive{" "}
            <span className="text-blue-700 font-semibold">UI design</span> —
            built just for portfolio presentation.
          </p>

          <div className="mt-4 flex justify-between items-center">
            <a
              href="https://start-up-website-eosin.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1 transition"
            >
              View Project <ArrowUpRight size={18} />
            </a>

            <span className="bg-blue-100 text-blue-700 px-3 py-1 text-sm font-medium rounded-full">
              React App
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
