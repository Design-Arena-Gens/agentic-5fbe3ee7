const inclusions = [
  {
    title: "12 journées intensives",
    details: "1 journée par mois en présentiel dans des lieux inspirants pour prendre de la hauteur sur vos opérations."
  },
  {
    title: "Hotline dirigeant 24h",
    details: "Accès direct au mentorat pour vos arbitrages sensibles entre les sessions (stratégie, RH, finance)."
  },
  {
    title: "Plateforme data & templates",
    details: "Tableaux de bord, modèles de contrats, organigrammes, scripts d&apos;appels, checklists de conformité."
  },
  {
    title: "Communauté fermée",
    details: "Groupe d'entraide pour partager deals, recrutements, innovations et benchmarks anonymisés."
  }
];

const engagements = [
  "8-10 dirigeants maximum pour une dynamique de confiance",
  "Sélection sur dossier et entretien pour garantir le niveau du groupe",
  "Confidentialité totale : pacte de non-divulgation signé par tous",
  "Investissement échelonné sur 12 mois, ROI visé dès le trimestre 1"
];

export default function FormatDetails() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div className="card">
            <h2 className="section-title">Ce que vous obtenez</h2>
            <p className="lead mt-4">
              Le Cercle Scale est pensé comme votre CODIR augmenté. Vous repartez de chaque session avec un plan d&apos;action détaillé,
              des KPI opérationnels et l&apos;accompagnement pour embarquer vos équipes.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {inclusions.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/5 bg-slate-950/40 p-5">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{item.details}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="card">
              <h3 className="text-xl font-semibold text-white">Engagement mutuel</h3>
              <ul className="mt-5 space-y-3 text-sm text-slate-300">
                {engagements.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 size-2 flex-none rounded-full bg-brand-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-white">Livrables clés</h3>
              <ul className="mt-5 space-y-3 text-sm text-slate-300">
                <li>Roadmap transformation 18 mois personnalisée</li>
                <li>Pack KPI & cockpit dirigeant customisé</li>
                <li>Playbook recrutement & fidélisation</li>
                <li>Framework gouvernance data et conformité</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
