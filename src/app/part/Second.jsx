"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Second() {
  return (
    <section className="section-block relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 h-[28rem] w-[28rem] rounded-full bg-indigo-200/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 -left-24 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl"
      />

      <div className="container-main relative">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 md:gap-20 lg:gap-28">
          <div className="w-full lg:flex-1 text-center lg:text-left space-y-8 md:space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="section-label">Full Stack Developer</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[4.5rem] font-bold tracking-tight text-slate-900 leading-[1.08]">
                Hi, I&apos;m{" "}
                <span className="text-indigo-600">Tanzeel</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                I build modern, responsive, and scalable web applications with{" "}
                <span className="font-semibold text-slate-800">React</span>,{" "}
                <span className="font-semibold text-slate-800">Next.js</span>, and{" "}
                <span className="font-semibold text-slate-800">MERN</span>.
                Focused on clean code and polished user experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center lg:justify-start pt-2"
            >
              <Link href="/project" className="btn-primary">
                View Projects
                <ArrowRight size={18} />
              </Link>
              <a
                href="https://github.com/tanzeel-khan1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                GitHub Profile
              </a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="w-full lg:flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative p-3 md:p-4">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-500/20 to-blue-400/10 blur-sm" />
              <img
                src="https://avatars.githubusercontent.com/u/204762480?v=4"
                alt="Tanzeel Khan"
                className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-[1.75rem] object-cover border-4 border-white shadow-[var(--shadow-lg)]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
