const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/30">
      <div className="container-narrow">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center">
              <span className="text-white font-bold text-sm">W</span>
            </div>
            <span className="text-lg font-semibold text-foreground">WeOut</span>
          </div>

          {/* Status */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-muted-foreground">Bêta privée en préparation</span>
          </div>

          {/* Contact */}
          <a 
            href="mailto:contact.weout@gmail.com" 
            className="text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            contact.weout@gmail.com
          </a>
        </div>

        <div className="mt-10 pt-6 border-t border-border/20 text-center">
        <p className="text-xs text-text-tertiary">
          © {new Date().getFullYear()} WeOut. Tous droits réservés.
        </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
