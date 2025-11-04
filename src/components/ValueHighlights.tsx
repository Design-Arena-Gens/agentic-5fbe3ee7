const highlights = [
  {
    label: "Expérience terrain",
    value: "25 ans",
    detail: "Direction d'opérations ambulancières et mise à l'échelle multi-sites"
  },
  {
    label: "Équipe accompagnée",
    value: "30 salariés",
    detail: "Structure stable, gouvernance installée, croissance maîtrisée"
  },
  {
    label: "Impacts financiers",
    value: "0,04%",
    detail: "Taux d'impayés vs 2-5% dans le secteur grâce à un process facturation blindé"
  },
  {
    label: "Historique de croissance",
    value: "10 → 80",
    detail: "Scalabilité sans turnover, capital humain fidélisé pendant la croissance"
  }
];

export default function ValueHighlights() {
  return (
    <section className="relative isolate">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 rounded-3xl border border-white/10 bg-slate-900/60 p-10 shadow-2xl shadow-brand-900/20 backdrop-blur">
          <div className="grid gap-6 md:grid-cols-4">
            {highlights.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/5 bg-slate-900/70 p-6">
                <div className="text-sm uppercase tracking-[0.2em] text-brand-200/70">{item.label}</div>
                <div className="mt-3 text-4xl font-display font-semibold text-white">{item.value}</div>
                <p className="mt-2 text-sm text-slate-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
