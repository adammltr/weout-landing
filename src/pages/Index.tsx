import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import BenefitsSection from "@/components/BenefitsSection";
import SocialProofSection from "@/components/SocialProofSection";
import CredibilitySection from "@/components/CredibilitySection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

/* SAFARI FIX: Removed artificial isReady state that was causing:
   - Unnecessary 16ms+ delay via requestAnimationFrame
   - Flash from opacity 0→1 transition
   - Extra re-render on mount
   The real fix is in index.html critical CSS, not React state */
const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <SocialProofSection />
      <BenefitsSection />
      <CredibilitySection />
      <section id="cta">
        <FinalCTASection />
      </section>
      <Footer />
    </main>
  );
};

export default Index;
