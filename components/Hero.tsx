"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { personal } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/SocialIcons";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-navy-900">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-coral-500/8 rounded-full blur-3xl" style={{ animationDelay: "3s" }} />
        <div className="absolute top-10 left-10 w-32 h-32 border border-gold-500/10 rounded-full animate-spin-slow" />
        <div className="absolute bottom-20 right-20 w-16 h-16 border border-gold-500/20 rounded-full animate-spin-slow" style={{ animationDirection: "reverse" }} />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.50]"
        style={{
          backgroundImage:
            "linear-gradient(#caf0f8 1px, transparent 1px), linear-gradient(90deg, #caf0f8 1px, transparent 1px)",
          backgroundSize: "90px 90px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 items-center min-h-[80vh]">
          {/* Left: Text content */}
          <div className="flex flex-col justify-center">
            {personal.availableForWork && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6 inline-flex"
              >
                <span className="inline-flex items-center gap-2 border border-gold-500/30 bg-gold-500/10 text-gold-400 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full">
                  <span className="w-2 h-2 bg-gold-500 rounded-full animate-pulse" />
                  Available for Work
                </span>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1
                className="text-7xl sm:text-8xl lg:text-9xl font-black leading-none tracking-tight uppercase"
                style={{ fontFamily: "var(--font-open-sans)" }}
              >
                <span className="text-white block">{personal.firstName}</span>
                <span
                  className="block"
                  style={{
                    WebkitTextStroke: "2px #00b4d8",
                    color: "transparent",
                  }}
                >
                  {personal.lastName}
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 text-slate-400 text-lg font-medium tracking-wider uppercase"
            >
              {personal.title}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-4 text-slate-400 text-base max-w-md leading-relaxed"
            >
              {personal.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold px-7 py-3 rounded transition-all duration-200 text-sm tracking-wide"
              >
                View Projects
              </a>
              <a
                href="#modeling"
                className="border border-white/20 hover:border-gold-500 text-white hover:text-gold-500 font-semibold px-7 py-3 rounded transition-all duration-200 text-sm tracking-wide"
              >
                See Portfolio
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 flex items-center gap-5"
            >
              <span className="text-slate-500 text-xs tracking-widest uppercase">Follow</span>
              <div className="h-px w-8 bg-slate-700" />
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-gold-500 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-gold-500 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={personal.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-gold-500 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
            </motion.div>
          </div>

          {/* Right: Visual element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative w-80 h-96">
              {/* Photo placeholder — replace with your actual photo */}
              <div className="w-full h-full rounded-2xl border-2 border-gold-500/30 bg-navy-700 flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-coral-500/5" />
                <Image
                  src="/pfp.jpeg"
                  alt="Soban Ali"
                  width={240}
                  height={240}
                  className = "rounded object-cover"
                />
              </div>

              {/* Decorative frame */}
              <div className="absolute -top-3 -right-3 w-full h-full border-2 border-gold-500/20 rounded-2xl" />

              {/* Floating stat cards */}
              <div className="absolute -left-12 top-1/4 bg-navy-800 border border-gold-500/20 rounded-xl px-4 py-3 shadow-xl">
                <p className="text-gold-500 font-black text-2xl" style={{ fontFamily: "var(--font-open-sans)" }}>12+</p>
                <p className="text-slate-400 text-xs">Projects</p>
              </div>
              <div className="absolute -right-12 bottom-1/4 bg-navy-800 border border-gold-500/20 rounded-xl px-4 py-3 shadow-xl">
                <p className="text-gold-500 font-black text-2xl" style={{ fontFamily: "var(--font-open-sans)" }}>3+</p>
                <p className="text-slate-400 text-xs">Years Exp.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={14} className="animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
