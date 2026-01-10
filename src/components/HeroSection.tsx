import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      
      <div className="container-narrow relative z-10 text-center py-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
          <span className="text-sm text-secondary-foreground">Bêta privée — accès progressif</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Organisez vos sorties
          <br />
          <span className="text-gradient-primary">sans perdre de temps</span>
        </h1>

        {/* Subheadline */}
        <p className="section-subtitle max-w-xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Proposez un plan en quelques secondes et voyez instantanément qui est disponible.
        </p>

        {/* Email Form */}
        <div className="max-w-md mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input-field flex-1"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="btn-cta whitespace-nowrap"
              >
                {isLoading ? (
                  <span className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                ) : (
                  <>
                    Rejoindre la bêta
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-3 py-4 px-6 rounded-xl bg-primary/10 border border-primary/20">
              <Check className="w-5 h-5 text-primary" />
              <span className="text-foreground">Vous êtes sur la liste. On vous contacte bientôt.</span>
            </div>
          )}
        </div>

        {/* Trust text */}
        <p className="text-sm text-muted-foreground mt-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          Aucun spam. Juste un accès anticipé à Synoutt.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
