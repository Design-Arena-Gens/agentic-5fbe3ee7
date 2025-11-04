export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/60 py-8 text-sm text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 text-center md:flex-row md:justify-between md:text-left">
        <p>© {new Date().getFullYear()} Le Cercle Scale &middot; Tous droits réservés.</p>
        <p>Programme mastermind pour dirigeants d&apos;ambulance.</p>
      </div>
    </footer>
  );
}
