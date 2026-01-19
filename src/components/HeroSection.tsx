import { ArrowRight } from "lucide-react";
import { useBetaSignup } from "@/hooks/useBetaSignup";

const HeroSection = () => {
  const { email, setEmail, isSubmitting, error, handleSubmit } = useBetaSignup();

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center pt-20 pb-12 overflow-hidden">
      {/* Gradient orbs background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] animate-pulse-glow" />
        <div 
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/15 blur-[100px] animate-pulse-glow" 
          style={{ animationDelay: "1s" }} 
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-[150px]" 
        />
      </div>

      <div className="container-narrow relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Promise Badge - Safari search bar style */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-accent/15 to-primary/15 border border-accent/25 mb-8 animate-fade-in backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-foreground/90">Sorties proches, rencontres vraies</span>
          </div>

          {/* Headline - Balanced, emotional, clear */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Trouve des gens chauds<br />
            <span className="text-accent">pour sortir ce soir.</span>
          </h1>

          {/* Subheadline - Who, problem, solution */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 animate-fade-in leading-relaxed" style={{ animationDelay: "0.2s" }}>
            Nouveau quelque part ? Marre de sortir seul ou toujours avec les mêmes ?
            <br className="hidden sm:block" />
            WeOut te connecte à des sorties près de toi, avec des gens qui veulent vraiment y aller.
          </p>

          {/* CTA Form */}
          <form onSubmit={handleSubmit} className="w-full max-w-sm animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ton email"
                className="flex-1 input-field text-center sm:text-left"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-cta group whitespace-nowrap"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">...</span>
                ) : (
                  <>
                    Accès bêta
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
            {error && (
              <p className="text-xs text-red-400 mt-2">{error}</p>
            )}
            {/* Micro social proof - honest, no emoji */}
            <p className="text-xs text-muted-foreground mt-5 flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
              Bêta privée — premiers testeurs en cours
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
