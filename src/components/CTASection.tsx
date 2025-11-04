import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function CTASection() {
  return (
    <section id="candidature" className="relative border-t border-white/10 bg-slate-950/60 py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(69,95,255,0.25),_rgba(15,23,42,0.95))]" />
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="badge mx-auto">Candidature ouverte</span>
        <h2 className="mt-6 text-3xl font-display font-semibold text-white md:text-4xl">
          Postulez pour rejoindre Le Cercle Scale
        </h2>
        <p className="lead mt-4">
          Nous constituons un groupe resserré pour garantir un niveau d&apos;échange stratégique élevé. Détaillez votre structure,
          vos enjeux et vos objectifs sur 12 mois, nous revenons vers vous sous 72h.
        </p>
        <a
          href="mailto:contact@lecerclescale.fr?subject=Candidature%20Le%20Cercle%20Scale"
          className="mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-base font-semibold text-slate-900 shadow-xl shadow-brand-900/20 transition hover:-translate-y-0.5"
        >
          <EnvelopeIcon className="size-5" />
          Envoyer ma candidature
        </a>
        <p className="mt-6 text-xs uppercase tracking-[0.4em] text-slate-400">
          12 places · Paris & Lyon · Début de cohorte : Septembre 2024
        </p>
      </div>
    </section>
  );
}
