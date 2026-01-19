import { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Léa",
    age: 21,
    emoji: "🎓",
    text: "Ça m'a permis de sortir sans envoyer 15 messages dans le groupe.",
  },
  {
    name: "Thomas",
    age: 19,
    emoji: "🏀",
    text: "Enfin une app sociale sans malaise.",
  },
  {
    name: "Inès",
    age: 22,
    emoji: "✨",
    text: "Simple, privé, efficace. J'attends le lancement public.",
  },
  {
    name: "Mathis",
    age: 20,
    emoji: "🎮",
    text: "Je découvre des plans que j'aurais jamais connu sinon.",
  },
  {
    name: "Chloé",
    age: 23,
    emoji: "☕",
    text: "Je viens d'arriver à Lyon. WeOut m'a sauvé la vie sociale.",
  },
];

const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let scrollPosition = 0;
    const speed = 0.5;

    const scroll = () => {
      scrollPosition += speed;
      
      // Reset when reaching the middle (where duplicates start)
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    // Pause on hover
    const handleMouseEnter = () => cancelAnimationFrame(animationFrameId);
    const handleMouseLeave = () => {
      animationFrameId = requestAnimationFrame(scroll);
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="section-spacing overflow-hidden bg-muted/30">
      <div className="container-narrow mb-10">
        <div className="text-center">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Retours bêta</span>
          <h2 className="section-title mt-3">
            Ils testent <span className="text-accent">WeOut</span>.
          </h2>
        </div>
      </div>

      {/* Horizontal scrolling carousel */}
      <div 
        ref={scrollRef}
        className="flex gap-4 overflow-x-hidden px-6 cursor-grab"
        style={{ scrollBehavior: "auto" }}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-72 p-5 rounded-2xl bg-card/50 border border-border/50"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-lg">
                {testimonial.emoji}
              </div>
              <div>
                <p className="font-medium text-foreground text-sm">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.age} ans</p>
              </div>
            </div>
            <p className="text-sm text-foreground/90 leading-relaxed">
              "{testimonial.text}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
