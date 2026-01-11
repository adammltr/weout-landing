import { Users, Lock, Rocket } from "lucide-react";

const CredibilitySection = () => {
  return (
    <section className="section-spacing bg-muted/30">
      <div className="container-narrow">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Lock className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Accès anticipé</span>
          </div>

          <h2 className="section-title mb-6">
            Un produit <span className="text-accent">en construction</span>.
          </h2>

          <p className="text-muted-foreground text-lg max-w-md mx-auto mb-10">
            WeOut est pensé avec des lycéens et étudiants.
            Pas dans une tour d'ivoire, mais avec ceux qui galèrent vraiment à organiser leurs sorties.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex flex-col items-center p-5 rounded-2xl bg-card/30 border border-border/50">
              <Users className="w-8 h-8 text-accent mb-3" />
              <p className="text-sm text-foreground font-medium">Conçu avec vous</p>
              <p className="text-xs text-muted-foreground mt-1">Pas pour vous</p>
            </div>
            <div className="flex flex-col items-center p-5 rounded-2xl bg-card/30 border border-border/50">
              <Lock className="w-8 h-8 text-accent mb-3" />
              <p className="text-sm text-foreground font-medium">Bêta fermée</p>
              <p className="text-xs text-muted-foreground mt-1">Accès progressif</p>
            </div>
            <div className="flex flex-col items-center p-5 rounded-2xl bg-card/30 border border-border/50">
              <Rocket className="w-8 h-8 text-accent mb-3" />
              <p className="text-sm text-foreground font-medium">Lancement bientôt</p>
              <p className="text-xs text-muted-foreground mt-1">Sois parmi les premiers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
