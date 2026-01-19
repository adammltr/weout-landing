const benefits = [
  {
    title: "Sorties proches de toi",
    description: "Découvre ce qui se passe autour, sans scroller pendant des heures.",
    gradient: "from-accent/15 via-accent/5 to-transparent",
    size: "lg",
  },
  {
    title: "Visibilité configurable",
    description: "Tu contrôles qui voit quoi. Amis proches, cercle élargi, ou sorties ouvertes.",
    gradient: "from-primary/15 via-primary/5 to-transparent",
    size: "sm",
  },
  {
    title: "Rencontres encadrées",
    description: "Rencontre de nouvelles personnes, mais avec des filtres et des règles claires.",
    gradient: "from-primary/10 via-accent/10 to-transparent",
    size: "sm",
  },
  {
    title: "Petits groupes",
    description: "5-10 personnes max. Qualité > quantité. Zéro pression sociale.",
    gradient: "from-accent/10 via-primary/10 to-transparent",
    size: "lg",
  },
];

const BenefitsSection = () => {
  return (
    <section className="section-spacing relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[150px]" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px]" />
      
      <div className="container-narrow relative z-10">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4">
            Pourquoi WeOut
          </span>
          <h2 className="section-title">
            Social, mais <span className="text-accent">à ta façon</span>.
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`relative p-7 rounded-2xl bg-gradient-to-br ${benefit.gradient} border border-border/40 hover:border-border/60 transition-all group overflow-hidden ${
                benefit.size === "lg" ? "sm:col-span-1" : ""
              }`}
            >
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-to-br from-white/[0.03] to-transparent blur-2xl" />
              
              <div className="relative">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
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
