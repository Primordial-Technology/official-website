import { signals } from "../data";

export default function Signals() {
  return (
    <section
      id="signals"
      className="bg-[#151026] py-20 text-white sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-0">
        <div className="max-w-3xl">
          <p className="eyebrow text-prim-cyan">Signals for every stakeholder</p>
          <h2 className="section-title mt-4 text-4xl sm:text-5xl">
            Made-to-measure intelligence for owners, investors, and partners
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {signals.map((signal) => (
            <article key={signal.title} className="flex flex-col rounded-[28px] border border-white/10 bg-white/5 p-6">
              <p className="eyebrow text-white/70">{signal.eyebrow}</p>
              <h3 className="mt-4 font-founders-cond text-3xl leading-tight">{signal.title}</h3>
              <p className="mt-3 flex-1 text-sm text-prim-purple-05">{signal.copy}</p>
              <a
                href={signal.action.href}
                className="mt-6 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.3em] text-prim-cyan"
              >
                {signal.action.label}
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
