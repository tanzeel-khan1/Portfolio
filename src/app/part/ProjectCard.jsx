"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ image, title, description, href, tag }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group h-full"
    >
      <div className="card-surface h-full flex flex-col overflow-hidden hover:shadow-[var(--shadow-lg)] hover:border-indigo-100 transition-all duration-300">
        <div className="aspect-[16/10] overflow-hidden bg-slate-100">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>

        <div className="flex flex-col flex-1 p-8 md:p-10 gap-5">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
              {title}
            </h3>
            <span className="shrink-0 text-xs font-semibold uppercase tracking-wide text-indigo-700 bg-indigo-50 border border-indigo-100 px-3 py-1.5 rounded-lg">
              {tag}
            </span>
          </div>

          <p className="text-slate-600 leading-relaxed flex-1 text-[15px] md:text-base">
            {description}
          </p>

          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[15px] font-semibold text-indigo-600 hover:text-indigo-700 mt-2"
          >
            View project
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
