import { Zap, Eye, Users, Volume2 } from "lucide-react";

const solutions = [
  {
    icon: Zap,
    title: "Proposez un plan rapidement",
    description: "En quelques secondes, pas en 20 messages.",
  },
  {
    icon: Eye,
    title: "Voyez qui est dispo",
    description: "Disponible, bientôt dispo, ou indisponible. C'est clair.",
  },
  {
    icon: Users,
    title: "Avancez sans tout le monde",
    description: "Pas besoin d'attendre la réponse de chacun pour agir.",
  },
  {
    icon: Volume2,
    title: "Moins de bruit",
    description: "Fini les fils de discussion qui partent dans tous les sens.",
  },
];

const SolutionSection = () => {
  return (
    <section className="section-spacing bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent">
      <div className="container-wide">
        <h2 className="section-title text-center mb-4">
          Une approche simple
        </h2>
        <p className="section-subtitle text-center max-w-lg mx-auto mb-16">
          Synoutt simplifie l'organisation sans remplacer vos conversations.
        </p>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl glass-card transition-all duration-300 hover:border-primary/30 hover:glow-primary"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                <solution.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {solution.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
