import { useEffect, useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import BenefitsSection from "@/components/BenefitsSection";
import SocialProofSection from "@/components/SocialProofSection";
import CredibilitySection from "@/components/CredibilitySection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  // SAFARI FIX: Prevent FOUC by ensuring styles are applied before showing content
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // SAFARI FIX: Small delay to ensure CSS is fully parsed and applied
    // This prevents the flash of unstyled content on WebKit browsers
    const timer = requestAnimationFrame(() => {
      setIsReady(true);
    });
    return () => cancelAnimationFrame(timer);
  }, []);

  return (
    <main 
      className="min-h-screen overflow-x-hidden"
      style={{
        // SAFARI FIX: Smooth fade-in instead of abrupt appearance
        opacity: isReady ? 1 : 0,
        transition: 'opacity 0.15s ease-out'
      }}
    >
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
