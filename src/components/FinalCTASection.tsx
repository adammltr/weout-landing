import { ArrowRight, Sparkles } from "lucide-react";
import { useBetaSignup } from "@/hooks/useBetaSignup";

const FinalCTASection = () => {
  const { email, setEmail, isSubmitting, error, handleSubmit } = useBetaSignup();

  return (
    <section className="section-spacing relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />
      
      <div className="container-narrow relative">
        <div className="text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 border border-accent/30 mb-8">
            <Sparkles className="w-8 h-8 text-accent" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Rejoins la bêta <span className="text-accent">avant tout le monde</span>.
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-md mx-auto mb-3">
            Accès limité. On ouvre progressivement pour garder une vraie expérience.
          </p>
          
          <p className="text-sm text-accent/80 mb-8">
            ✨ Premiers testeurs = premiers à influencer le produit
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
            <p className="text-xs text-muted-foreground mt-4">
              Pas de spam. Tu reçois juste ton accès quand c'est prêt. 🤙
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
