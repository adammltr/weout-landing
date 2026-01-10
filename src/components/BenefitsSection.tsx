import { Clock, Smile, Heart, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Moins de temps perdu",
    description: "Fini les discussions interminables.",
  },
  {
    icon: Smile,
    title: "Plus de sorties",
    description: "Des plans qui aboutissent vraiment.",
  },
  {
    icon: Heart,
    title: "Moins de friction",
    description: "Entre vous et vos potes.",
  },
  {
    icon: Sparkles,
    title: "Plus de spontanéité",
    description: "Décidez vite, profitez plus.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="section-spacing bg-muted/30">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Les bénéfices</span>
          <h2 className="section-title mt-3">
            Ce que ça <span className="text-accent">change</span>.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-accent/40 transition-all group overflow-hidden"
            >
              {/* Subtle gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-accent" />
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
