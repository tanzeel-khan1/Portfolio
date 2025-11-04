import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const DoctorApp = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-white flex flex-col items-center justify-center px-6 py-10 md:py-16 md:min-h-[70vh] rounded-2xl  hover: transition-all duration-300 overflow-hidden"
    >
      <div className="relative w-full max-w-md md:max-w-2xl">
        <img
          src="/doctorApp.png"
          alt="Project Thumbnail"
          className="w-full h-64 object-cover rounded-t-2xl"
        />

        <div className="p-6 flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-gray-800">Doctor App</h2>
          <p className="text-gray-600 leading-relaxed">
            This project is a demonstration of a fully responsive{" "}
            <span className="text-blue-700 font-semibold">UI design</span> — built
            just for portfolio presentation.
          </p>

          <div className="mt-4 flex justify-between items-center">
            <a
              href="https://doctor-app-indol.vercel.app/"
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
      </div>
    </motion.section>
  );
};

export default DoctorApp;
