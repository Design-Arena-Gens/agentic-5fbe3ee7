import Image from "next/image";

const navItems = [
  { label: "Programme", href: "#programme" },
  { label: "Format", href: "#format" },
  { label: "Mentor", href: "#mentor" },
  { label: "Candidature", href: "#candidature" }
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 backdrop-blur bg-slate-950/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="relative size-10 overflow-hidden rounded-full border border-brand-500/50">
            <Image src="/logo.svg" alt="Le Cercle Scale" fill priority sizes="40px" />
          </div>
          <div className="text-sm font-semibold uppercase tracking-[0.3em] text-white">
            Le Cercle Scale
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-200 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#candidature"
          className="hidden rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:border-white/40 md:inline-flex"
        >
          Candidature
        </a>
      </div>
    </header>
  );
}
