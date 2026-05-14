import { personal } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-600 text-xs">
          © {year}{" "}
          <span className="text-gold-500/70 font-semibold">{personal.name}</span>. All rights reserved.
        </p>

        <p className="text-slate-600 text-xs">
          Built with{" "}
          <span className="text-slate-500">Next.js</span>
          {" · "}
          <span className="text-slate-500">Tailwind CSS</span>
          {" · "}
          <span className="text-slate-500">Framer Motion</span>
        </p>
      </div>
    </footer>
  );
}
