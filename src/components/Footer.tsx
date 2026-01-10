const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/30">
      <div className="container-narrow">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <div className="text-xl font-semibold text-foreground mb-1">
              Synoutt
            </div>
            <p className="text-sm text-muted-foreground">
              Bêta privée
            </p>
          </div>

          <div className="text-sm text-muted-foreground">
            Contact : <a href="mailto:hello@synoutt.com" className="text-primary hover:underline transition-colors">hello@synoutt.com</a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/20 text-center">
          <p className="text-xs text-text-tertiary">
            © {new Date().getFullYear()} Synoutt. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
