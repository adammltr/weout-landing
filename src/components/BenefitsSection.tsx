import { Check } from "lucide-react";

const benefits = [
  "Moins de temps perdu à coordonner",
  "Plus de sorties qui aboutissent vraiment",
  "Moins de frustration et de plans ratés",
  "Plus de spontanéité au quotidien",
];

const BenefitsSection = () => {
  return (
    <section className="section-spacing">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            Ce que ça change
          </h2>
          <p className="section-subtitle max-w-lg mx-auto">
            Des bénéfices concrets, pas des promesses vagues.
          </p>
        </div>

        <div className="max-w-md mx-auto space-y-5">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-5 rounded-xl bg-card/30 border border-border/30"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <span className="text-lg text-foreground">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
