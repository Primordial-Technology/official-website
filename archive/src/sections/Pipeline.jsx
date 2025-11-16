import { pipeline } from "../data";

const accentMap = {
  "prim-cyan": "#6ADDDD",
  "prim-purple-03": "#7E44F1",
  "prim-pink": "#F869FC",
  "prim-orange": "#E2492F"
};

export default function Pipeline() {
  return (
    <section className="bg-[#0b0716] py-20 text-white" aria-labelledby="pipeline-title">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-0">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow text-prim-pink">System flow</p>
            <h2 id="pipeline-title" className="section-title mt-4">
              A four-beat pipeline built for royalty assets
            </h2>
          </div>
          <p className="max-w-xl text-sm text-prim-purple-05">
            Every module is API-first and auditable. Use it end-to-end or plug specific stages into existing diligence
            stacks without breaking provenance.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {pipeline.map((stage, index) => (
            <article
              key={stage.title}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6"
            >
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100" style={{
                background: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08), transparent 60%)"
              }} />
              <div className="relative">
                <div className="flex items-center gap-4 text-sm uppercase">
                  <span className="font-mono tracking-[0.35em] text-white/60">0{index + 1}</span>
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: accentMap[stage.accent] }}
                  />
                </div>
                <h3 className="mt-4 font-founders-cond text-3xl">{stage.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-prim-purple-05">
                  {stage.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span
                        className="mt-1 h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: accentMap[stage.accent] }}
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
