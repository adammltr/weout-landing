const problems = [
  {
    emoji: "🔄",
    text: "Toujours les mêmes",
    subtext: "Tu sors qu'avec ton groupe de base, même si t'aimerais varier",
  },
  {
    emoji: "👻",
    text: "Personne répond",
    subtext: "T'envoies un message, silence radio pendant 3 jours",
  },
  {
    emoji: "💀",
    text: "Groupes WhatsApp morts",
    subtext: "200 messages pour un plan qui capote",
  },
  {
    emoji: "📱",
    text: "Stories passives",
    subtext: "Tu vois les autres sortir, mais t'es jamais invité",
  },
];

const ProblemSection = () => {
  return (
    <section className="section-spacing bg-muted/30">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Le problème</span>
          <h2 className="section-title mt-3">
            Sortir devrait pas être<br />
            <span className="text-muted-foreground">aussi compliqué.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-5 rounded-2xl bg-card/50 border border-border/50 hover:border-accent/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors text-2xl">
                {problem.emoji}
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
