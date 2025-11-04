import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FormatDetails from "@/components/FormatDetails";
import FounderSection from "@/components/FounderSection";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import ProgramTimeline from "@/components/ProgramTimeline";
import ValueHighlights from "@/components/ValueHighlights";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col gap-24 pb-24">
      <NavBar />
      <Hero />
      <ValueHighlights />
      <ProgramTimeline />
      <div id="format">
        <FormatDetails />
      </div>
      <div id="mentor">
        <FounderSection />
      </div>
      <CTASection />
      <Footer />
    </main>
  );
}
