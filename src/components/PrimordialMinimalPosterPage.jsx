import React, { useEffect, useRef, useState } from "react";

const LOGO_SRC = "/logo.svg";

// --- Primitives ---

const FadeIn = ({ children, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const Section = ({ id, className, children }) => (
  <section id={id} className={`relative px-6 md:px-12 py-20 md:py-32 ${className}`}>
    <div className="max-w-[720px] mx-auto relative z-10">
      {children}
    </div>
  </section>
);

const Eyebrow = ({ children, className = "" }) => (
  <p className={`mb-6 text-[11px] md:text-xs font-mono-alt tracking-[0.3em] text-prim-purple-05/80 uppercase ${className}`}>
    {children}
  </p>
);

const Heading = ({ children, className = "" }) => (
  <h2 className={`font-founders-condensed font-bold text-3xl md:text-5xl leading-tight mb-8 ${className}`}>
    {children}
  </h2>
);

const BodyText = ({ children, className = "" }) => (
  <p className={`text-sm md:text-lg leading-relaxed text-prim-purple-05 ${className}`}>
    {children}
  </p>
);

const HighlightItem = ({ title, children, delay }) => (
  <FadeIn delay={delay}>
    <div className="mb-8 last:mb-0 border-l border-prim-purple-05/20 pl-6">
      <h3 className="font-founders-condensed font-bold text-2xl md:text-3xl mb-2 text-white uppercase tracking-wide">{title}</h3>
      <p className="text-sm md:text-base text-prim-purple-05/80 leading-relaxed">{children}</p>
    </div>
  </FadeIn>
);

// --- Main Component ---

export default function PrimordialMinimalPosterPage() {
  return (
    <div className="min-h-screen text-white selection:bg-prim-cyan selection:text-prim-purple-01 bg-[color:var(--prim-hero-bg)] relative overflow-x-hidden">

      {/* Background Gradient Overlay for depth (Global) */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#3D305E] via-transparent to-transparent opacity-60 pointer-events-none z-0" />

      {/* M graphic decoration - Fixed background */}
      <div className="fixed right-0 bottom-0 pointer-events-none z-0 opacity-20 md:opacity-30 translate-x-[10%] translate-y-[8%] mix-blend-screen">
        <img
          src="/m.svg"
          alt=""
          className="m-graphic max-w-none animate-float"
          aria-hidden="true"
        />
      </div>

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 md:py-8">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <img src={LOGO_SRC} alt="Primordial logo" className="h-6 sm:h-8 w-auto" />
          <a
            href="mailto:contact@primordial.net"
            className="hidden sm:inline-flex items-center text-xs font-mono-alt font-bold tracking-[0.15em] text-white hover:text-prim-cyan transition-colors uppercase"
          >
            Get in Touch
          </a>
        </div>
      </header>

      <main className="relative z-10">
        {/* 1. HERO SECTION */}
        <section id="hero" className="min-h-screen flex items-center px-6 md:px-12 pt-20">
          <div className="max-w-[720px] mx-auto w-full">
            <FadeIn delay={100}>
              <Eyebrow>
                Financial Infrastructure for Music Royalties
              </Eyebrow>
            </FadeIn>

            <FadeIn delay={200}>
              <h1 className="font-founders-condensed font-bold text-[48px] leading-[0.9] sm:text-[64px] md:text-[80px] lg:text-[96px] tracking-tight mb-8">
                Redefining How The <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-prim-purple-05">World Values Creativity</span>
              </h1>
            </FadeIn>

            <FadeIn delay={300}>
              <a
                href="mailto:contact@primordial.net"
                className="group inline-flex items-center gap-3 text-sm font-bold font-mono-alt tracking-[0.18em] text-prim-cyan uppercase transition-all hover:text-white"
              >
                <span className="border-b-2 border-prim-cyan group-hover:border-white pb-1 transition-colors">Contact Us</span>
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </a>
            </FadeIn>
          </div>
        </section>

        {/* 2. ABOUT SECTION */}
        <Section id="about">
          <FadeIn>
            <div className="max-w-[720px]">
              <Heading>About</Heading>
              <BodyText>
                Primordial is building the financial infrastructure of the creative economy, starting with the music royalties market.
                <br /><br />
                Our proprietary data pipeline and quantitative models reveal the true value of music, transforming creative IP from an opaque, intuition-driven asset into a transparent, investable asset class.
              </BodyText>
            </div>
          </FadeIn>
        </Section>

        {/* 3. PRODUCT HIGHLIGHTS SECTION */}
        <Section id="product">
          <FadeIn>
            <Heading>Product Highlights</Heading>
          </FadeIn>

          <div className="mt-12 space-y-12">
            <HighlightItem title="Data" delay={100}>
              Unifies fragmented royalty, usage, and metadata into a single structured source of truth.
            </HighlightItem>
            <HighlightItem title="Automation" delay={200}>
              Transforms manual DCF workflows into instant, scalable valuations, cutting time and cost by 100x.
            </HighlightItem>
            <HighlightItem title="Quant Precision" delay={300}>
              Applies systematic modeling to capture the true value of music where traditional models fall short.
            </HighlightItem>
          </div>
        </Section>

        {/* 4. CTA / FOOTER SECTION */}
        <Section id="contact" className="pb-32 md:pb-48">
          <FadeIn>
            <div className="max-w-[720px]">
              <Heading>Discover the true worth <br /> of your music.</Heading>

              <div className="mb-12">
                <BodyText>
                  Your catalog holds stories, value, and legacy, we help you see its full potential.
                  <br /><br />
                  Gain confidence, clarity, and control, all before going to market.
                </BodyText>
              </div>

              <div>
                <a
                  href="mailto:contact@primordial.net"
                  className="group inline-flex items-center gap-4 text-base md:text-lg font-bold font-mono-alt tracking-[0.18em] text-prim-cyan uppercase transition-all hover:text-white"
                >
                  <span className="border-b-2 border-prim-cyan group-hover:border-white pb-1 transition-colors">Contact Us</span>
                  <span className="inline-block transition-transform group-hover:translate-x-2">→</span>
                </a>
              </div>
            </div>
          </FadeIn>
        </Section>

      </main>

      {/* Simple Footer */}
      <footer className="absolute bottom-0 left-0 right-0 py-8 px-6 md:px-12 text-center md:text-left border-t border-white/5">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-mono-alt text-prim-purple-05/40 uppercase tracking-widest">
            © {new Date().getFullYear()} Primordial. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
