import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "C'est public ?",
    answer: "Non. Tes sorties sont visibles uniquement par les personnes que tu choisis. Pas de feed public, pas de découverte aléatoire.",
  },
  {
    question: "Est-ce que mes amis voient tout ce que je fais ?",
    answer: "Tu contrôles qui voit quoi. Tu peux créer des cercles différents et choisir la visibilité de chaque sortie.",
  },
  {
    question: "C'est pour rencontrer des inconnus ?",
    answer: "Non. WeOut est fait pour organiser des sorties avec des gens que tu connais déjà ou que tu veux mieux connaître, dans un cadre privé et contrôlé.",
  },
  {
    question: "C'est gratuit ?",
    answer: "Oui, WeOut est gratuit. On ne vend pas tes données et il n'y a pas de pub.",
  },
  {
    question: "C'est dispo partout ?",
    answer: "La bêta commence à Paris et Lyon. On ouvre progressivement à d'autres villes selon la demande.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-spacing">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="section-title mt-3">
            Questions <span className="text-accent">fréquentes</span>.
          </h2>
        </div>

        <Accordion type="single" collapsible className="max-w-xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
              <AccordionTrigger className="text-left text-foreground hover:text-accent hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
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
