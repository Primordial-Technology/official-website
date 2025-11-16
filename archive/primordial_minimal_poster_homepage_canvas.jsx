import React from "react";

const LOGO_SRC = "/logo.svg";

export default function PrimordialMinimalPosterPage() {
  return (
    <div className="min-h-screen text-white">
      {/* Design tokens & font fallbacks */}
      <style>{`
        /* Self-hosted Founders Grotesk webfonts */
        @font-face {
          font-family: "Founders Grotesk X-Condensed";
          src: url("/fonts/FoundersGroteskXCond-Bold.otf") format("opentype");
          font-weight: 700;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: "Founders Grotesk";
          src: url("/fonts/FoundersGrotesk-Regular.otf") format("opentype");
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: "Fira Mono";
          src: url("/fonts/FiraCode-Regular.woff2") format("woff2");
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: "Fira Mono";
          src: url("/fonts/FiraCode-SemiBold.woff2") format("woff2");
          font-weight: 600;
          font-style: normal;
          font-display: swap;
        }

        :root {
          --prim-purple-01: #2D2246;
          --prim-purple-05: #BBB0F7;
          --prim-hero-bg: #2D2246;
        }
        .font-founders {
          font-family: "Founders Grotesk", system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Arial, sans-serif;
        }
        .font-founders-condensed {
          font-family: "Founders Grotesk X-Condensed", system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif;
        }
        .font-mono-alt {
          font-family: "Fira Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        }
      `}</style>

      {/* SINGLE HERO SECTION ONLY */}
      <section
        id="hero"
        className="relative min-h-screen overflow-hidden bg-[color:var(--prim-hero-bg)]"
      >
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
                href="mailto:contact@primordial.fm"
                className="mt-7 inline-flex items-center gap-2 text-sm font-mono-alt tracking-[0.18em] text-[#D7FEFF] uppercase transition hover:underline underline-offset-4"
              >
                CONTACT US
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
