import { navLinks, stats } from "../data";
import logoSrc from "/logo.svg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-prim-purple-01 text-white"
    >
      <div className="pointer-events-none absolute inset-0 opacity-80" style={{ backgroundImage: "var(--hero-gradient)" }} />
      <div className="pointer-events-none absolute -right-32 top-16 h-[420px] w-[420px] rounded-full bg-prim-purple-03 blur-[140px] opacity-40" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-16 pt-10 sm:px-8 lg:px-0 lg:pb-24 lg:pt-12">
        <header className="flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.28em] text-prim-purple-05/90">
          <div className="flex items-center gap-3">
            <img src={logoSrc} alt="Primordial" className="h-7 w-auto" />
            <span className="font-mono text-[11px] tracking-[0.4em] text-prim-purple-05/70">
              Primordial
            </span>
          </div>
          <nav className="flex flex-wrap gap-5 text-[11px]">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>
        </header>

        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="space-y-6">
            <p className="eyebrow text-prim-purple-05/80">
              Financial infrastructure for music royalties
            </p>
            <h1 className="font-founders-cond text-[42px] leading-[0.95] sm:text-[56px] md:text-[70px]">
              Redefining how the world values creativity
            </h1>
            <p className="max-w-xl text-base text-prim-purple-05">
              Primordial reveals the true value of music IP. Our proprietary data pipeline and quantitative models
              transform opaque catalog assets into transparent, investable instruments for creators, investors, and partners.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="mailto:contact@primordial.fm"
                className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-prim-purple-01 transition hover:bg-prim-purple-05 hover:text-prim-purple-01"
              >
                Contact Us
              </a>
              <a
                href="#platform"
                className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-[0.2em] text-prim-cyan"
              >
                See the platform
                <span aria-hidden="true" className="text-base">
                  →
                </span>
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <div className="space-y-6">
              {stats.map((stat) => (
                <div key={stat.label} className="border-b border-white/5 pb-4 last:border-none last:pb-0">
                  <p className="text-sm uppercase tracking-[0.4em] text-prim-purple-05/70">{stat.label}</p>
                  <p className="mt-2 font-founders-cond text-5xl leading-none text-white">{stat.value}</p>
                  <p className="mt-2 text-sm text-prim-purple-05">{stat.meta}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
