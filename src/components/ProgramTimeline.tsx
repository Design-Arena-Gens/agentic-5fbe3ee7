import { program } from "@/data/program";

export default function ProgramTimeline() {
  return (
    <section id="programme" className="relative py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-brand-500/10 to-transparent" />
      </div>
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="section-title">Programme 12 mois</h2>
            <p className="lead mt-4 max-w-2xl">
              Chaque journée est conçue pour aligner gouvernance, process, digitalisation et pilotage financier. Vous repartez avec des
              livrables actionnables et un suivi opérationnel entre les sessions.
            </p>
          </div>
          <div className="badge">1 cohorte / an · 12 rencontres physiques · Accès plateforme & hotline</div>
        </div>
        <div className="mt-12 grid gap-10">
          {program.map((quarter) => (
            <div key={quarter.title} className="card">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-display font-semibold text-white">{quarter.title}</h3>
                  <p className="text-sm uppercase tracking-[0.3em] text-brand-200/70">{quarter.timeframe}</p>
                </div>
                <p className="text-base text-slate-200 md:max-w-sm">{quarter.objective}</p>
              </div>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {quarter.sessions.map((session) => (
                  <div key={session.title} className="rounded-2xl border border-white/5 bg-slate-950/40 p-6">
                    <div className="flex items-center gap-3">
                      <span className="timeline-dot" />
                      <h4 className="text-lg font-semibold text-white">{session.title}</h4>
                    </div>
                    <ul className="mt-4 space-y-3 text-sm text-slate-300">
                      {session.focus.map((point) => (
                        <li key={point} className="flex gap-2">
                          <span className="mt-1 size-1.5 flex-none rounded-full bg-brand-400" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
