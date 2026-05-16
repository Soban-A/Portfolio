import { personal, skills } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36 bg-navy-900 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-gold-500 font-mono text-sm tracking-widest">01</span>
          <div className="h-px w-8 bg-gold-500/40" />
          <span className="text-slate-500 text-xs tracking-widest uppercase">About Me</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Text */}
          <div>
            <h2
              className="text-5xl md:text-6xl font-black leading-tight text-white mb-8 uppercase"
              style={{ fontFamily: "var(--font-open-sans)" }}
            >
              The Person
              <br />
              <span className="text-gold-500">Behind</span>
              <br />
              The Code.
            </h2>

            <p className="text-slate-400 text-base leading-relaxed mb-6">
              {personal.bio}
            </p>

            <p className="text-slate-400 text-base leading-relaxed mb-8">
              When I&apos;m not shipping features, you&apos;ll find me on set — modeling has taught me
              discipline, presence, and how to perform under pressure. Both worlds require
              precision, creativity, and the ability to collaborate with a vision.
            </p>

            <p className="text-slate-500 text-sm mb-3 tracking-widest uppercase">
              Skills
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-medium text-gold-400 border border-gold-500/25 bg-gold-500/5 px-3 py-1.5 rounded-full tracking-wide"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-10">
              <a
                href={personal.resumeUrl}
                className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 text-sm font-semibold tracking-wide transition-colors group"
              >
                Download Resume
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

          {/* Right: Photo + decorative elements */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-72 h-96 md:w-80 md:h-[420px]">
              {/* Main photo placeholder */}
              <div className="w-full h-full rounded-2xl bg-navy-700 border border-gold-500/20 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 via-transparent to-coral-500/5" />
                <p className="text-slate-600 text-sm text-center px-8 relative z-10">
                  Your portrait photo here
                  <br />
                  <span className="text-xs text-slate-700 mt-1 block">
                    Recommended: 800×1000px
                  </span>
                </p>
              </div>

              {/* Decorative offset border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold-500/15 rounded-2xl -z-10" />

              {/* Location badge */}
              <div className="absolute -top-4 -left-4 bg-navy-800 border border-navy-600 rounded-xl px-4 py-2 shadow-xl">
                <p className="text-white text-xs font-semibold">{personal.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
