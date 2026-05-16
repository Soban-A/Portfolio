"use client";

import { useState, useEffect } from "react";
import { personal } from "@/data/portfolio";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Portfolio", href: "#modeling" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-900/90 backdrop-blur-md border-b border-gold-500/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-display font-bold text-xl tracking-tight"
          style={{ fontFamily: "var(--font-open-sans)" }}
        >
          <span className="text-gold-500">{personal.initials}</span>
          <span className="text-white/20 mx-1">·</span>
          <span className="text-white text-sm font-normal tracking-widest uppercase">
            {personal.firstName}
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-slate-400 hover:text-gold-500 text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={personal.resumeUrl}
              className="border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-navy-900 px-4 py-1.5 rounded text-sm font-semibold tracking-wide transition-all duration-200"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-navy-800 border-t border-gold-500/10 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-slate-400 hover:text-gold-500 text-base font-medium tracking-wide transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={personal.resumeUrl}
            className="border border-gold-500 text-gold-500 px-4 py-2 rounded text-sm font-semibold text-center"
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
}
