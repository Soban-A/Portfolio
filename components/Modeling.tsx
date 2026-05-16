"use client";

import { motion } from "framer-motion";
import { personal, modelingWork } from "@/data/portfolio";

export default function Modeling() {
  return (
    <section id="modeling" className="py-28 md:py-36 bg-navy-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-gold-500 font-mono text-sm tracking-widest">03</span>
          <div className="h-px w-8 bg-gold-500/40" />
          <span className="text-slate-500 text-xs tracking-widest uppercase">Portfolio</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <h2
            className="text-5xl md:text-6xl font-black leading-tight text-white uppercase"
            style={{ fontFamily: "var(--font-open-sans)" }}
          >
            Beyond
            <br />
            <span className="text-gold-500">The Screen.</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
            Editorial, commercial, and campaign work. Represented by myself — open for collaborations.
          </p>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {modelingWork.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-xl bg-navy-700 border border-white/5 cursor-pointer ${
                i === 1 ? "md:row-span-2" : ""
              }`}
              style={{ aspectRatio: i === 1 ? "3/4" : "3/4" }}
            >
              {/* Photo placeholder — drop your images in /public/modeling/ */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, ${item.accent}15, #080f1a 60%)`,
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-4">
                  <p
                    className="text-4xl font-black opacity-10 mb-2"
                    style={{ fontFamily: "var(--font-open-sans)", color: item.accent }}
                  >
                    {String(item.id).padStart(2, "0")}
                  </p>
                  <p className="text-slate-600 text-xs text-center">
                    Add photo
                    <br />
                    <span className="text-slate-700 text-[10px]">
                      /public/modeling/{item.id}.jpg
                    </span>
                  </p>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-navy-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <p
                  className="text-white font-bold text-lg"
                  style={{ fontFamily: "var(--font-open-sans)" }}
                >
                  {item.label}
                </p>
                <p className="text-gold-500 text-xs tracking-widest uppercase mt-1">
                  {item.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Booking CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 border border-gold-500/20 rounded-2xl p-8 bg-gold-500/5"
        >
          <div>
            <h3
              className="text-2xl font-black text-white"
              style={{ fontFamily: "var(--font-open-sans)" }}
            >
              Interested in collaborating?
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              Available for editorial, commercial, and brand campaigns.
            </p>
          </div>
          <a
            href={`mailto:${personal.email}?subject=Modeling Inquiry`}
            className="shrink-0 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold px-7 py-3 rounded transition-all duration-200 text-sm tracking-wide whitespace-nowrap"
          >
            Book Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
