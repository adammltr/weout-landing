import weoutLogo from "@/assets/weout-logo-1.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/30 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-t from-muted/20 to-transparent pointer-events-none" />
      
      <div className="container-narrow relative z-10">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src={weoutLogo}
              alt="WeOut"
              className="w-8 h-8 rounded-xl"
            />
            <span className="text-lg font-semibold text-foreground">WeOut</span>
          </div>

          {/* Status */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-muted-foreground">Bêta privée en cours</span>
          </div>

          {/* TikTok only */}
          <a 
            href="https://www.tiktok.com/@synoutt" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border/40 text-sm text-muted-foreground hover:text-accent hover:border-accent/40 transition-all"
          >
            <svg 
              viewBox="0 0 24 24" 
              className="w-4 h-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
            TikTok
          </a>

          {/* Contact */}
          <a 
            href="mailto:contact.weout@gmail.com" 
            className="text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            contact.weout@gmail.com
          </a>
        </div>

        <div className="mt-10 pt-6 border-t border-border/20">
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} WeOut. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
