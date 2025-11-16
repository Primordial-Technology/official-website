import { capabilities } from "../data";

export default function Story() {
  return (
    <section
      id="story"
      className="bg-[#120b22] py-20 text-white sm:py-24"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 sm:px-8 lg:px-0">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="eyebrow text-prim-cyan">About Primordial</p>
            <h2 className="section-title mt-4 text-4xl sm:text-5xl">
              The financial OS for creative IP
            </h2>
            <p className="mt-6 text-base text-prim-purple-05">
              Primordial unifies fragmented royalty statements, usage telemetry, and market comps to expose the full
              value of catalogs. We pair deterministic data engineering with a quant stack built specifically for the
              creative economy, enabling transparent marks and investable products that respect the artists behind them.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 text-xs font-mono uppercase tracking-[0.35em] text-white/60">
              <span className="pill bg-white/10 text-prim-cyan">Creators first</span>
              <span className="pill bg-white/10 text-prim-pink">Quant + culture</span>
              <span className="pill bg-white/10 text-prim-purple-05">Infra mindset</span>
            </div>
          </div>
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-white/5 p-8">
            <div className="space-y-6 text-sm text-prim-purple-05">
              <p>
                <span className="font-founders-cond text-5xl text-white">3</span> core system layers sync the entire
                lifecycle of music rights: ingest, valuation, and activation. Each layer is API-first and compliant with
                the strictest provenance controls.
              </p>
              <p>
                Time-to-valuation for new catalogs is now <span className="text-prim-cyan">under 72 hours</span>. Our
                partners cite 100x faster diligence and <span className="text-prim-pink">30% tighter spreads</span> when
                Primordial marks anchor the deal.
              </p>
            </div>
          </div>
        </div>

        <div id="platform" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => (
            <article
              key={capability.title}
              className="gradient-card flex flex-col rounded-[28px] border border-white/10 p-6 text-left"
            >
              <span className="eyebrow text-white/70">{capability.tag}</span>
              <h3 className="mt-4 font-founders-cond text-3xl leading-tight">{capability.title}</h3>
              <p className="mt-3 flex-1 text-sm text-prim-purple-05">{capability.copy}</p>
              <p className="mt-4 text-xs uppercase tracking-[0.25em] text-prim-cyan">{capability.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
