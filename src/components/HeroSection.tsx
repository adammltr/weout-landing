import { ArrowRight, Smartphone } from "lucide-react";
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
      </div>

      <div className="container-narrow relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Promise Badge - Safari search bar style */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6 animate-fade-in">
            <span className="text-sm font-medium text-accent">L'app pour ceux qui veulent vraiment sortir</span>
          </div>

          {/* Headline - Clear, result-oriented */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Propose. Vois qui vient.<br />
            <span className="text-accent">Sortez.</span>
          </h1>

          {/* Subheadline - Who, problem, solution */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Tu viens d'arriver quelque part ou t'en as marre de sortir toujours avec les mêmes ?
            WeOut te montre qui est chaud, sans galère.
          </p>

          {/* Mobile app indicator */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-10 animate-fade-in" style={{ animationDelay: "0.25s" }}>
            <Smartphone className="w-4 h-4 text-accent" strokeWidth={2} />
            <span className="text-sm text-foreground/80 font-medium">Bêta v1 sur iOS</span>
          </div>

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
                    Accès early
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
            {error && (
              <p className="text-xs text-red-400 mt-2">{error}</p>
            )}
            {/* Micro social proof - honest */}
            <p className="text-xs text-muted-foreground mt-4">
              🔒 Bêta privée — premiers testeurs en cours
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
