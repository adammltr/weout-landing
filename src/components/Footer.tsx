import weoutLogo from "@/assets/weout-logo-1.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/30">
      <div className="container-narrow">
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

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://tiktok.com/@weout" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              TikTok
            </a>
            <span className="text-border">•</span>
            <a 
              href="https://instagram.com/weout" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              Instagram
            </a>
          </div>

          {/* Contact */}
          <a 
            href="mailto:contact.weout@gmail.com" 
            className="text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            contact.weout@gmail.com
          </a>
        </div>

        <div className="mt-10 pt-6 border-t border-border/20">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-accent transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-accent transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-accent transition-colors">CGU</a>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-4">
            © {new Date().getFullYear()} WeOut. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
