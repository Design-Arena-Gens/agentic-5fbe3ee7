"use client";

import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-20 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="grid-fade" />
      </div>
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="badge mb-6">Mastermind Dirigeants Ambulance</span>
          <h1 className="text-4xl font-display font-semibold leading-tight tracking-tight text-white md:text-5xl">
            Le Cercle Scale &middot; Passez de l&apos;artisanat à l&apos;entreprise data-driven en 12 journées sur-mesure
          </h1>
          <p className="lead mt-6">
            8 à 10 dirigeants triés sur le volet pour structurer, digitaliser et piloter une entreprise d&apos;ambulance capable de
            croître sans perdre sa culture. Un an de transformation guidé par 25 ans d&apos;expérience terrain, 30 collaborateurs et un
            modèle éprouvé à 0,04% d&apos;impayés.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-300">
            <div className="flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-2">
              <span className="size-2 rounded-full bg-brand-400" />
              Fermé à 10 dirigeants max
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <span className="size-2 rounded-full bg-emerald-400" />
              12 journées · 1 par mois
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <span className="size-2 rounded-full bg-cyan-400" />
              Accès direct au réseau & aux outils
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-slate-900 shadow-lg shadow-brand-900/20 transition hover:translate-y-0.5 hover:bg-slate-100"
              href="#candidature"
            >
              Rejoindre la cohorte
              <ArrowRightIcon className="ml-2 size-5" />
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-base font-semibold text-white transition hover:border-white/40"
              href="#programme"
            >
              Découvrir le programme
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
