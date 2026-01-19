import { ArrowRight } from "lucide-react";
import { useBetaSignup } from "@/hooks/useBetaSignup";

const FinalCTASection = () => {
  const { email, setEmail, isSubmitting, error, handleSubmit } = useBetaSignup();

  return (
    <section className="section-spacing relative overflow-hidden">
      {/* Rich background with gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-accent/10 to-primary/10 blur-[150px]" />
      
      <div className="container-narrow relative z-10">
        <div className="text-center">
          {/* Visual element instead of icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-accent/20 to-primary/20 border border-accent/30 mb-10">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-accent/60" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Rejoins la bêta <span className="text-accent">avant tout le monde</span>.
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-md mx-auto mb-4 leading-relaxed">
            Accès limité. On ouvre progressivement pour garder une vraie expérience.
          </p>
          
          <p className="text-sm text-foreground/70 mb-10 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Premiers testeurs = premiers à influencer le produit
          </p>

          <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
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
                    Rejoindre
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
            
            {error && (
              <p className="text-xs text-red-400 mt-2">{error}</p>
            )}
            <p className="text-xs text-muted-foreground mt-5">
              Pas de spam. Tu reçois juste ton accès quand c'est prêt.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
