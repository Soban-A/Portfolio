"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { personal } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/SocialIcons";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const mailto = `mailto:${personal.email}?subject=${encodeURIComponent(
      data.get("subject") as string || "Portfolio Contact"
    )}&body=${encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`
    )}`;
    window.location.href = mailto;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-28 md:py-36 bg-navy-800 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-gold-500 font-mono text-sm tracking-widest">04</span>
          <div className="h-px w-8 bg-gold-500/40" />
          <span className="text-slate-500 text-xs tracking-widest uppercase">Contact</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <h2
            className="text-5xl md:text-6xl font-black leading-tight text-white uppercase"
            style={{ fontFamily: "var(--font-open-sans)" }}
          >
            Let&apos;s Create
            <br />
            <span className="text-gold-500">Something.</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
            Have a project in mind? Want to collaborate? I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6 mb-10">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                  <Mail size={16} className="text-gold-500" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs tracking-widest uppercase mb-0.5">Email</p>
                  <p className="text-white text-sm font-medium group-hover:text-gold-400 transition-colors">
                    {personal.email}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
                  <MapPin size={16} className="text-gold-500" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs tracking-widest uppercase mb-0.5">Location</p>
                  <p className="text-white text-sm font-medium">{personal.location}</p>
                </div>
              </div>
            </div>

            <div className="h-px bg-white/5 mb-8" />

            <p className="text-slate-500 text-xs tracking-widest uppercase mb-4">Socials</p>
            <div className="flex gap-4">
              {[
                { href: personal.github, icon: GithubIcon, label: "GitHub" },
                { href: personal.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
                { href: personal.instagram, icon: InstagramIcon, label: "Instagram" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-white/10 hover:border-gold-500/50 flex items-center justify-center text-slate-500 hover:text-gold-500 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-slate-500 text-xs tracking-widest uppercase">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Jane Smith"
                  className="bg-navy-700 border border-white/10 focus:border-gold-500/50 rounded-lg px-4 py-3 text-white text-sm placeholder-slate-600 outline-none transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-slate-500 text-xs tracking-widest uppercase">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="jane@example.com"
                  className="bg-navy-700 border border-white/10 focus:border-gold-500/50 rounded-lg px-4 py-3 text-white text-sm placeholder-slate-600 outline-none transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-slate-500 text-xs tracking-widest uppercase">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Project inquiry / Collaboration"
                className="bg-navy-700 border border-white/10 focus:border-gold-500/50 rounded-lg px-4 py-3 text-white text-sm placeholder-slate-600 outline-none transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-slate-500 text-xs tracking-widest uppercase">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="bg-navy-700 border border-white/10 focus:border-gold-500/50 rounded-lg px-4 py-3 text-white text-sm placeholder-slate-600 outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="bg-gold-500 hover:bg-gold-400 active:scale-95 text-navy-900 font-bold px-7 py-3.5 rounded-lg transition-all duration-200 text-sm tracking-wide"
            >
              {sent ? "Opening your mail client..." : "Send Message"}
            </button>

            <p className="text-slate-600 text-xs text-center">
              Prefer email?{" "}
              <a href={`mailto:${personal.email}`} className="text-gold-500/70 hover:text-gold-500">
                {personal.email}
              </a>
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
