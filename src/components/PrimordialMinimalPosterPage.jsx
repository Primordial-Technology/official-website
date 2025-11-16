import React from "react";

const LOGO_SRC = "/logo.svg";

export default function PrimordialMinimalPosterPage() {
  return (
    <div className="min-h-screen text-white">

      {/* SINGLE HERO SECTION ONLY */}
      <section
        id="hero"
        className="relative min-h-screen overflow-hidden bg-[color:var(--prim-hero-bg)]"
      >
        {/* M graphic decoration - bottom right background */}
        <div className="absolute right-0 bottom-0 pointer-events-none z-0 opacity-25 md:opacity-35 translate-x-[10%] translate-y-[8%]">
          <img
            src="/m.svg"
            alt=""
            className="m-graphic max-w-none"
            aria-hidden="true"
          />
        </div>

        {/* Hero content column + header */}
        <div className="relative z-10 max-w-[720px] mx-auto px-6">
          {/* Header / nav, non-sticky */}
          <header className="flex items-center py-8 text-xs tracking-[0.18em] uppercase">
            <div className="flex items-center gap-3">
              <img
                src={LOGO_SRC}
                alt="Primordial logo"
                className="h-8 sm:h-9 w-auto"
              />
            </div>
          </header>

          {/* Hero text block */}
          <div className="flex min-h-[calc(100vh-96px)] items-center">
            <div className="max-w-xl">
              <p className="mb-6 text-[11px] font-mono-alt tracking-[0.3em] text-[color:var(--prim-purple-05)] uppercase">
                FINANCIAL INFRASTRUCTURE FOR MUSIC ROYALTIES
              </p>

              <h1 className="font-founders-condensed font-bold text-[40px] leading-[0.95] sm:text-[52px] md:text-[64px]">
                Redefining How The World Values Creativity
              </h1>

              <p className="mt-7 text-sm md:text-base text-[color:var(--prim-purple-05)] max-w-lg">
                Primordial is building the financial infrastructure of the creative economy, starting with the music royalties market. Our proprietary data pipeline and quantitative models reveal the true value of music, turning creative IP from an opaque, intuition-driven asset into a transparent, investable asset class.
              </p>

              <a
                href="mailto:contact@primordial.net"
                className="mt-7 inline-flex items-center text-sm font-semibold font-mono-alt tracking-[0.18em] text-[color:var(--prim-cyan-bright)] uppercase transition hover:text-white underline underline-offset-4 decoration-2"
              >
                CONTACT US
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
