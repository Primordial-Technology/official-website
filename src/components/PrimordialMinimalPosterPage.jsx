import React from "react";

const LOGO_SRC = "/logo.svg";

export default function PrimordialMinimalPosterPage() {
  return (
    <div className="min-h-screen text-white selection:bg-prim-cyan selection:text-prim-purple-01">

      {/* SINGLE HERO SECTION ONLY */}
      <section
        id="hero"
        className="relative min-h-screen overflow-hidden bg-[color:var(--prim-hero-bg)]"
      >
        {/* Background Gradient Overlay for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#3D305E] via-transparent to-transparent opacity-60 pointer-events-none z-0" />

        {/* M graphic decoration - bottom right background */}
        <div className="absolute right-0 bottom-0 pointer-events-none z-0 opacity-20 md:opacity-30 translate-x-[10%] translate-y-[8%] mix-blend-overlay animate-float">
          <img
            src="/m.svg"
            alt=""
            className="m-graphic max-w-none"
            aria-hidden="true"
          />
        </div>

        {/* Hero content column + header */}
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-12 flex flex-col min-h-screen">
          {/* Header / nav */}
          <header className="flex items-center justify-between py-8 md:py-12 animate-fade-in-up">
            <div className="flex items-center gap-3">
              <img
                src={LOGO_SRC}
                alt="Primordial logo"
                className="h-8 sm:h-10 w-auto"
              />
            </div>

            {/* Header CTA - Desktop only or simplified */}
            <a
              href="mailto:contact@primordial.net"
              className="hidden sm:inline-flex items-center px-5 py-2 text-xs font-mono-alt font-bold tracking-[0.15em] text-white border border-white/20 hover:border-prim-cyan hover:text-prim-cyan hover:bg-prim-cyan/5 transition-all duration-300 uppercase rounded-sm"
            >
              Get in Touch
            </a>
          </header>

          {/* Hero text block - Centered vertically */}
          <div className="flex-grow flex items-center pb-20">
            <div className="max-w-2xl">
              <p className="mb-8 text-[11px] md:text-xs font-mono-alt tracking-[0.3em] text-prim-purple-05/80 uppercase animate-fade-in-up delay-100">
                Financial Infrastructure for Music Royalties
              </p>

              <h1 className="font-founders-condensed font-bold text-[48px] leading-[0.9] sm:text-[64px] md:text-[80px] lg:text-[96px] tracking-tight animate-fade-in-up delay-200">
                Redefining How The <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-prim-purple-05">World Values Creativity</span>
              </h1>

              <p className="mt-8 text-sm md:text-lg leading-relaxed text-prim-purple-05 max-w-lg animate-fade-in-up delay-300">
                Primordial is building the financial infrastructure of the creative economy. Our proprietary data pipeline and quantitative models reveal the true value of music, turning creative IP into a transparent, investable asset class.
              </p>

              <div className="mt-10 animate-fade-in-up delay-400">
                <a
                  href="mailto:contact@primordial.net"
                  className="group inline-flex items-center gap-3 text-sm font-bold font-mono-alt tracking-[0.18em] text-prim-cyan uppercase transition-all hover:text-white"
                >
                  <span className="border-b-2 border-prim-cyan group-hover:border-white pb-1 transition-colors">Contact Us</span>
                  <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
