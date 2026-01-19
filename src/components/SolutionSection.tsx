const steps = [
  {
    number: "01",
    emoji: "✋",
    title: "Tu déclares une envie",
    description: "\"Chaud ciné ce soir\" — en 5 secondes, c'est posté.",
  },
  {
    number: "02",
    emoji: "👀",
    title: "Tu vois qui est partant",
    description: "Tes potes répondent. Tu sais qui vient avant d'y aller.",
  },
  {
    number: "03",
    emoji: "🚀",
    title: "Tu rejoins sans awkwardness",
    description: "Petit groupe, intention claire. Zéro malaise.",
  },
];

const SolutionSection = () => {
  return (
    <section className="section-spacing">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Comment ça marche</span>
          <h2 className="section-title mt-3">
            3 étapes. <span className="text-accent">C'est tout.</span>
          </h2>
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex items-center gap-6 p-6 rounded-2xl bg-card/30 border border-border/50 hover:bg-card/50 transition-all group"
            >
              {/* Step number */}
              <div className="hidden sm:flex w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 border border-accent/30 items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <span className="text-2xl">{step.emoji}</span>
              </div>
              
              {/* Mobile emoji */}
              <div className="sm:hidden w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 text-xl">
                {step.emoji}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs font-mono text-accent/60">{step.number}</span>
                  <h3 className="text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm sm:text-base">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
