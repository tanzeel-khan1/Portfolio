"use client";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiRedux,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
  { name: "React", icon: <FaReact className="text-cyan-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-slate-900" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Express.js", icon: <SiExpress className="text-slate-600" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-600" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
  { name: "GitHub", icon: <FaGithub className="text-slate-800" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="section-block bg-white">
      <div className="container-main">
        <header className="section-head text-center items-center mx-auto">
          <p className="section-label">Expertise</p>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-desc mx-auto">
            Tools I use to build modern, scalable, and high-performance web
            applications.
          </p>
        </header>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              className="card-surface flex flex-col items-center gap-5 p-8 md:p-10 hover:shadow-[var(--shadow-lg)] hover:border-indigo-100 transition-all duration-300"
            >
              <div className="text-5xl">{skill.icon}</div>
              <span className="text-[15px] font-semibold text-slate-700">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
