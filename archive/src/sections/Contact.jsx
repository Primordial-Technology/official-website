export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-prim-purple-01 py-20 text-white"
    >
      <div className="absolute inset-0" style={{ backgroundImage: "var(--hero-gradient)" }} />
      <div className="relative mx-auto max-w-4xl rounded-[40px] border border-white/10 bg-[#120b22]/90 p-10 text-center shadow-[0_0_120px_rgba(104,77,255,0.25)]">
        <p className="eyebrow text-prim-purple-05">Next steps</p>
        <h2 className="mt-4 font-founders-cond text-4xl leading-tight sm:text-5xl">
          Discover the true worth of your music
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-prim-purple-05">
          Send us a catalog, a revenue statement, or simply a thesis. We will return a transparent valuation memo,
          risk notes, and actionable paths to unlock capital.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:contact@primordial.fm"
            className="rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-prim-purple-01 transition hover:bg-prim-purple-05 hover:text-prim-purple-01"
          >
            Email the team
          </a>
          <a
            href="mailto:contact@primordial.fm?subject=Primordial%20Brief"
            className="pill border-white/30 text-white/80 hover:text-white"
          >
            Request briefing deck
          </a>
        </div>
      </div>
    </section>
  );
}
