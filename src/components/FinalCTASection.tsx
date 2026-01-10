import { useState } from "react";
import { ArrowRight, Bell } from "lucide-react";

const FinalCTASection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail("");
    }, 1000);
  };

  return (
    <section className="section-spacing relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />
      
      <div className="container-narrow relative">
        <div className="text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 border border-accent/30 mb-8">
            <Bell className="w-8 h-8 text-accent" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à sortir <span className="text-accent">plus souvent</span> ?
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-sm mx-auto mb-10">
            Rejoins la bêta et fais partie des premiers à tester Synoutt.
          </p>

          {!isSubmitted ? (
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
                      C'est parti
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
              
              <p className="text-xs text-muted-foreground mt-4">
                Pas de spam. Promis 🤙
              </p>
            </form>
          ) : (
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-3 px-8 py-5 rounded-2xl bg-accent/10 border border-accent/30">
                <span className="text-3xl">✨</span>
                <div className="text-left">
                  <p className="text-accent font-semibold">Parfait !</p>
                  <p className="text-sm text-muted-foreground">On te tient au courant.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
