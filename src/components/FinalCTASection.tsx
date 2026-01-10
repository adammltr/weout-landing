import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

const FinalCTASection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="section-spacing">
      <div className="container-narrow">
        <div className="relative p-8 md:p-12 lg:p-16 rounded-3xl glass-card glow-primary text-center overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prêt à simplifier vos sorties ?
            </h2>
            <p className="section-subtitle max-w-md mx-auto mb-10">
              Rejoignez la bêta et soyez parmi les premiers à tester Synoutt.
            </p>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
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
              <div className="inline-flex items-center gap-3 py-4 px-6 rounded-xl bg-primary/10 border border-primary/20">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-foreground">Parfait ! Vous êtes inscrit.</span>
              </div>
            )}

            <p className="text-sm text-muted-foreground mt-6">
              Bêta fermée — accès progressif
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
