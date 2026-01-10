const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <div className="text-xl font-semibold text-foreground">
          Synoutt
        </div>
        <div className="hidden sm:block">
          <a
            href="#cta"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Rejoindre la bêta
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
