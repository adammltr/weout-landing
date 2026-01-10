const SocialProofSection = () => {
  return (
    <section className="section-spacing overflow-hidden">
      <div className="container-wide">
        <div className="relative rounded-3xl bg-gradient-to-br from-primary/20 via-card to-accent/10 border border-border/50 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/20 rounded-full blur-2xl" />
          
          <div className="relative p-8 md:p-12 lg:p-16">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Visual side - Abstract social representation */}
              <div className="relative order-2 md:order-1">
                <div className="flex justify-center items-center gap-3 flex-wrap">
                  {/* Friend avatars representation */}
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="relative"
                      style={{ 
                        transform: `rotate(${(i - 2) * 8}deg)`,
                        zIndex: 5 - Math.abs(i - 2)
                      }}
                    >
                      <div 
                        className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl ${
                          i === 2 
                            ? 'bg-gradient-to-br from-accent to-accent/70 ring-4 ring-accent/30' 
                            : 'bg-gradient-to-br from-primary/60 to-primary/30'
                        } flex items-center justify-center`}
                      >
                        <span className="text-2xl md:text-3xl">
                          {['🎉', '🔥', '✨', '💫', '🚀'][i]}
                        </span>
                      </div>
                      {/* Status indicator */}
                      <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-card ${
                        i < 3 ? 'bg-green-500' : i === 3 ? 'bg-yellow-500' : 'bg-muted-foreground'
                      }`} />
                    </div>
                  ))}
                </div>
                
                {/* Mock notification */}
                <div className="mt-8 flex justify-center">
                  <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-card/80 border border-accent/30 backdrop-blur-sm">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span className="text-sm text-foreground">
                      <span className="text-accent font-medium">3 potes</span> sont dispos ce soir
                    </span>
                  </div>
                </div>
              </div>

              {/* Text side */}
              <div className="order-1 md:order-2 text-center md:text-left">
                <span className="text-accent font-medium text-sm uppercase tracking-wider">Le vibe</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
                  Vos potes,<br />
                  <span className="text-accent">en un coup d'œil.</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Plus besoin de checker 15 messages pour savoir qui peut venir.
                  L'info est là, claire, en temps réel.
                </p>
                
                {/* Social proof elements */}
                <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50">
                    <span className="text-accent">🎓</span>
                    <span className="text-sm text-muted-foreground">Pensé pour les étudiants</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50">
                    <span className="text-accent">⚡</span>
                    <span className="text-sm text-muted-foreground">Simple et rapide</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
