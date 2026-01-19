import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "C'est public ?",
    answer: "Tu configures la visibilité de chaque sortie : amis proches uniquement, cercle élargi, ou ouverte aux gens autour de toi. Tu gardes le contrôle.",
  },
  {
    question: "Est-ce que mes amis voient tout ce que je fais ?",
    answer: "Tu choisis qui voit quoi. Chaque sortie peut avoir une visibilité différente selon tes cercles.",
  },
  {
    question: "C'est pour rencontrer des inconnus ?",
    answer: "Tu peux rencontrer de nouvelles personnes si tu le souhaites, mais c'est toujours encadré : filtres, règles de visibilité, et contrôle de ton côté.",
  },
  {
    question: "C'est gratuit ?",
    answer: "Oui, WeOut est gratuit. On ne vend pas tes données et il n'y a pas de pub.",
  },
  {
    question: "C'est dispo où ?",
    answer: "L'app s'ouvre progressivement là où il y a le plus de demande chez les bêta testeurs.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-spacing relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px]" />
      </div>
      
      <div className="container-narrow relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4">
            FAQ
          </span>
          <h2 className="section-title">
            Questions <span className="text-accent">fréquentes</span>.
          </h2>
        </div>

        <Accordion type="single" collapsible className="max-w-xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border/40">
              <AccordionTrigger className="text-left text-foreground hover:text-accent hover:no-underline py-5 text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
