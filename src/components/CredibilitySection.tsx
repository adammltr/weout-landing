import { Sparkles, Users, Shield } from "lucide-react";

const credibilityPoints = [
  {
    icon: Users,
    text: "Pensé avec des lycéens et étudiants",
  },
  {
    icon: Sparkles,
    text: "Produit en construction — accès anticipé",
  },
  {
    icon: Shield,
    text: "Confidentialité et simplicité avant tout",
  },
];

const CredibilitySection = () => {
  return (
    <section className="section-spacing bg-gradient-to-b from-transparent via-secondary/30 to-transparent">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">
            Un produit honnête
          </h2>
          <p className="section-subtitle max-w-lg mx-auto">
            Pas de fausses promesses. Juste un outil en construction, pensé pour vous.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
          {credibilityPoints.map((point, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-muted-foreground"
            >
              <point.icon className="w-5 h-5 text-primary" />
              <span className="text-sm">{point.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
