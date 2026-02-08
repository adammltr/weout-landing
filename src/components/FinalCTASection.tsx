const INSTAGRAM_COMMUNITY_LINK = "https://ig.me/j/AbbeXs15b1hoSoyM/";

const FinalCTASection = () => {
  return (
    <section className="section-spacing relative overflow-hidden">
      {/* Rich background with gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-accent/10 to-primary/10 blur-[150px]" />
      
      <div className="container-narrow relative z-10">
        <div className="text-center">
          {/* Visual element */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-accent/20 to-primary/20 border border-accent/30 mb-10">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-accent/60" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Fais partie de <span className="text-accent">l'aventure</span>.
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-md mx-auto mb-10 leading-relaxed">
            Rejoins la communauté pour suivre l'avancement, donner ton avis et accéder à l'app en avant-première.
          </p>

          {/* Single CTA - Instagram Community */}
          <a
            href={INSTAGRAM_COMMUNITY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-full transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-background"
            style={{ boxShadow: "0 10px 40px hsl(var(--glow-accent) / 0.3)" }}
          >
            {/* Instagram Logo */}
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Rejoindre la communauté Instagram
          </a>
          
          <p className="text-xs text-muted-foreground mt-6">
            Un projet en construction, avec toi.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
