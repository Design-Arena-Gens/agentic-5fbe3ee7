import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-poppins" });

export const metadata: Metadata = {
  title: "Le Cercle Scale | Mastermind Dirigeants Ambulance",
  description:
    "Le programme mastermind fermé sur 12 mois pour dirigeants d'ambulance : structure, digitalisation et pilotage data pour scaler sans turnover.",
  openGraph: {
    title: "Le Cercle Scale",
    description:
      "Mastermind fermé pour dirigeants d'ambulance : 12 journées pour passer de l'artisanat à l'entreprise digitalisée & pilotée par la data.",
    url: "https://agentic-5fbe3ee7.vercel.app",
    siteName: "Le Cercle Scale",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${poppins.variable} font-sans bg-slate-950 text-slate-100 min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}
