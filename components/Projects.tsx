"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "@/data/portfolio";
import { GithubIcon } from "@/components/SocialIcons";

export default function Projects() {
  return (
    <section id="projects" className="py-28 md:py-36 bg-navy-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-gold-500 font-mono text-sm tracking-widest">02</span>
          <div className="h-px w-8 bg-gold-500/40" />
          <span className="text-slate-500 text-xs tracking-widest uppercase">Projects</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <h2
            className="text-5xl md:text-6xl font-black leading-tight text-white uppercase"
            style={{ fontFamily: "var(--font-open-sans)" }}
          >
            Things I&apos;ve
            <br />
            <span className="text-gold-500">Built.</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
            A selection of projects — from production apps to open-source tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-navy-700 border border-white/5 rounded-2xl p-6 hover:border-gold-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,166,35,0.05)] flex flex-col"
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-6 right-6 h-0.5 rounded-b-full opacity-60 group-hover:opacity-100 transition-opacity"
                style={{ background: project.accent }}
              />

              {/* Project number */}
              <span
                className="text-6xl font-black opacity-[0.04] absolute top-4 right-6 select-none"
                style={{ fontFamily: "var(--font-open-sans)", color: project.accent }}
              >
                {String(project.id).padStart(2, "0")}
              </span>

              <div className="flex-1">
                <h3
                  className="text-xl font-bold text-white mb-3 group-hover:text-gold-400 transition-colors"
                  style={{ fontFamily: "var(--font-open-sans)" }}
                >
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] text-slate-400 bg-navy-900/60 border border-white/5 px-2.5 py-1 rounded-full tracking-wide"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-500 hover:text-white text-xs font-medium tracking-wide transition-colors"
                >
                  <GithubIcon size={14} />
                  Source
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-slate-500 hover:text-gold-500 text-xs font-medium tracking-wide transition-colors"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-gold-500 text-sm font-medium tracking-wide transition-colors group"
          >
            <GithubIcon size={16} />
            See more on GitHub
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
