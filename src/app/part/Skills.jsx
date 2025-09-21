"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiRedux,
} from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-black" />,
  },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  {
    name: "Express",
    icon: <SiExpress className="text-gray-700" />,
  },
  { name: "MERN Stack", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" />
 },
  {
    name: "GitHub",
    icon:<FaGithub className="text-black" />
,
  },
  { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
];

const Skills = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-4xl font-bold text-gray-800 mb-4"
        >
          My <span className="text-blue-600">Skills</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: false }}
          className="text-gray-600 max-w-2xl mx-auto mb-10"
        >
          I have expertise in modern web development technologies and
          frameworks.
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false }}
              className="flex flex-col items-center bg-gray-50 shadow-md p-6 rounded-xl hover:shadow-lg hover:scale-105 transition"
            >
              <div className="text-5xl mb-3">{skill.icon}</div>
              <p className="text-lg font-semibold text-gray-700">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
