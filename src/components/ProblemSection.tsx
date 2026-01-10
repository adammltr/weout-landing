import { MessageCircle, Clock, HelpCircle, XCircle } from "lucide-react";

const problems = [
  {
    icon: MessageCircle,
    text: "Discussions interminables",
  },
  {
    icon: Clock,
    text: "Réponses tardives ou absentes",
  },
  {
    icon: HelpCircle,
    text: "Indécision collective",
  },
  {
    icon: XCircle,
    text: "Plans annulés faute de clarté",
  },
];

const ProblemSection = () => {
  return (
    <section className="section-spacing">
      <div className="container-narrow">
        <h2 className="section-title text-center mb-4">
          Un problème familier
        </h2>
        <p className="section-subtitle text-center max-w-lg mx-auto mb-16">
          Organiser une sortie entre potes ne devrait pas être aussi compliqué.
        </p>

        <div className="grid gap-4 md:gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex items-center gap-5 p-5 md:p-6 rounded-2xl glass-card transition-all duration-300 hover:border-primary/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <problem.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-lg md:text-xl text-foreground">{problem.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
