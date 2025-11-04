import { BuildingOffice2Icon, UserGroupIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

const pillars = [
  {
    title: "Réorganisation structurelle",
    description: "Design organigramme, clarification des responsabilités, délégation maîtrisée et installation du CODIR.",
    icon: BuildingOffice2Icon
  },
  {
    title: "Gouvernance & process",
    description: "Process facturation 0,04% impayés, cartographie des 7 flux clés, tableaux de bord temps réel.",
    icon: ShieldCheckIcon
  },
  {
    title: "Capital humain",
    description: "Croissance 10 à 80 salariés sans turnover grâce à un modèle de recrutement et de fidélisation éprouvé.",
    icon: UserGroupIcon
  }
];

export default function FounderSection() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 split-gradient" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <span className="badge">Mentorat par un dirigeant de la filière</span>
            <h2 className="section-title mt-6">25 ans d&apos;hypercroissance maîtrisée dans l&apos;ambulance</h2>
            <p className="lead mt-4">
              Après avoir transformé une structure artisanale en groupe régional digitalisé, je partage sans filtre la méthode,
              les outils et les arbitrages qui m&apos;ont permis d&apos;atteindre 0,04% d&apos;impayés, de multiplier par 8 la taille des équipes sans
              turnover et de garder le contrôle à chaque étape.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {pillars.map(({ icon: Icon, title, description }) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
                  <Icon className="size-8 text-brand-300" />
                  <h3 className="mt-4 text-base font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold text-white">Ce mastermind est fait pour vous si…</h3>
            <ul className="mt-5 space-y-4 text-sm text-slate-300">
              <li className="flex gap-3">
                <span className="mt-1 size-2 flex-none rounded-full bg-brand-400" />
                <span>Vous êtes dirigeants d&apos;une entreprise d&apos;ambulance entre 10 et 120 collaborateurs et vous voulez reprendre le contrôle.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 size-2 flex-none rounded-full bg-brand-400" />
                <span>Vous cherchez un cadre confidentiel pour challenger vos décisions stratégiques et accélérer la digitalisation.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 size-2 flex-none rounded-full bg-brand-400" />
                <span>Vous souhaitez capitaliser sur un réseau fermé de dirigeants partageant la même ambition de structuration.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
