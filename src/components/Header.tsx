import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/30"
          : "bg-transparent"
      }`}
    >
      <div className="container-narrow py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
              Synoutt
            </span>
          </a>

          <a
            href="#cta"
            className="px-5 py-2.5 bg-accent/10 text-accent font-medium text-sm rounded-full hover:bg-accent hover:text-white transition-all duration-300"
          >
            Rejoindre la bêta
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
