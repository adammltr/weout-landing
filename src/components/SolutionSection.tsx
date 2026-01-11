import { Zap, Users, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Zap,
    title: "Propose un plan",
    description: "En 10 secondes, pas en 10 messages.",
  },
  {
    icon: Users,
    title: "Vois qui est dispo",
    description: "Dispo, bientôt dispo, ou pas dispo. C'est clair.",
  },
  {
    icon: ArrowRight,
    title: "Avancez ensemble",
    description: "Plus besoin d'attendre tout le monde pour décider.",
  },
];

const SolutionSection = () => {
  return (
    <section className="section-spacing">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">La solution</span>
          <h2 className="section-title mt-3">
            WeOut, c'est <span className="text-accent">simple</span>.
          </h2>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-primary/30 to-transparent hidden md:block" />

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex items-start gap-6 p-6 rounded-2xl bg-card/30 border border-border/50 hover:bg-card/50 transition-all group"
              >
                {/* Step number */}
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 border border-accent/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <step.icon className="w-7 h-7 text-accent" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </div>
                </div>
                
                <div className="pt-2">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
