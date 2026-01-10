import { MessageCircle, Clock, HelpCircle, X } from "lucide-react";

const problems = [
  {
    icon: MessageCircle,
    text: "Discussion qui tourne en rond",
    subtext: "\"Qui vient ?\" \"On fait quoi ?\" \"À quelle heure ?\"",
  },
  {
    icon: Clock,
    text: "Réponses qui arrivent jamais",
    subtext: "Trois jours pour savoir qui est dispo",
  },
  {
    icon: HelpCircle,
    text: "Personne qui décide",
    subtext: "\"Moi je suis chaud si vous êtes chauds\"",
  },
  {
    icon: X,
    text: "Plan annulé",
    subtext: "...après 50 messages",
  },
];

const ProblemSection = () => {
  return (
    <section className="section-spacing bg-muted/30">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Le problème</span>
          <h2 className="section-title mt-3">
            Organiser une sortie,<br />
            <span className="text-muted-foreground">c'est devenu un taf.</span>
          </h2>
        </div>

        <div className="grid gap-4 max-w-lg mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-5 rounded-2xl bg-card/50 border border-border/50 hover:border-accent/30 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                <problem.icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="font-medium text-foreground">{problem.text}</p>
                <p className="text-sm text-muted-foreground mt-1">{problem.subtext}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
