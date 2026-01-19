const benefits = [
  {
    emoji: "🔒",
    title: "Privé, pas public",
    description: "Tes sorties restent entre vous. Pas de feed public, pas de malaise.",
  },
  {
    emoji: "👥",
    title: "Petits groupes",
    description: "5-10 personnes max. Qualité > quantité.",
  },
  {
    emoji: "🎯",
    title: "Par intention",
    description: "Tu rejoins parce que t'es vraiment chaud, pas par politesse.",
  },
  {
    emoji: "⚡",
    title: "Contrôle total",
    description: "C'est toi qui décides avec qui et quand.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="section-spacing">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Pourquoi WeOut</span>
          <h2 className="section-title mt-3">
            Social, mais <span className="text-accent">à ta façon</span>.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-accent/40 transition-all group overflow-hidden"
            >
              {/* Subtle gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors text-2xl">
                  {benefit.emoji}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
