import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Heart, X } from "lucide-react";
import weoutLogo from "@/assets/weout-logo-1.png";

const INSTAGRAM_COMMUNITY_LINK = "https://ig.me/j/AbbeXs15b1hoSoyM/";
const INSTAGRAM_PROFILE_LINK = "https://www.instagram.com/weout.music";
const TIKTOK_LINK = "https://www.tiktok.com/@synoutt";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border/30">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Left: Logo + WeOut + Ambassadeur */}
          <div className="flex items-center gap-5 sm:gap-6">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src={weoutLogo}
                alt="WeOut"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl"
              />
              <span className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                WeOut
              </span>
            </Link>
            <Link
              to="/ambassadeur"
              className="hidden sm:flex items-center gap-2.5 text-lg text-muted-foreground hover:text-accent transition-colors"
            >
              <Heart className="w-6 h-6 text-accent" />
              <span className="font-semibold">Ambassadeur</span>
            </Link>
          </div>

          {/* Right: Desktop nav */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={INSTAGRAM_COMMUNITY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-accent text-accent-foreground font-semibold text-base rounded-full hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
            >
              Rejoindre la communauté
            </a>
            {/* Instagram Icon */}
            <a
              href={INSTAGRAM_PROFILE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-muted/50 hover:bg-accent/20 transition-colors"
              title="Instagram"
            >
              <svg
                className="w-6 h-6 text-accent"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            {/* TikTok Icon */}
            <a
              href={TIKTOK_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-muted/50 hover:bg-accent/20 transition-colors"
              title="TikTok"
            >
              <svg
                className="w-6 h-6 text-accent"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
          </div>

          {/* Mobile: Hamburger menu button */}
          <div className="flex sm:hidden items-center gap-3">
            <a
              href={INSTAGRAM_COMMUNITY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-accent text-accent-foreground font-semibold text-sm rounded-full hover:scale-[1.02] transition-all duration-300"
            >
              Rejoindre
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-full bg-muted/50 hover:bg-accent/20 transition-colors"
              aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-accent" />
              ) : (
                <>
                  <span className="w-5 h-0.5 bg-accent rounded-full transition-all" />
                  <span className="w-5 h-0.5 bg-accent rounded-full transition-all" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu overlay */}
        <div
          className={`sm:hidden overflow-hidden transition-all duration-300 ease-out ${
            mobileMenuOpen ? "max-h-80 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
          }`}
        >
          <div className="flex flex-col gap-3 py-4 border-t border-border/30">
            <Link
              to="/ambassadeur"
              className="flex items-center gap-3 px-2 py-3 text-lg font-medium text-foreground hover:text-accent transition-colors rounded-lg hover:bg-muted/30"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Heart className="w-5 h-5 text-accent" />
              <span>Ambassadeur</span>
            </Link>
            <a
              href={INSTAGRAM_PROFILE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-2 py-3 text-lg font-medium text-foreground hover:text-accent transition-colors rounded-lg hover:bg-muted/30"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg
                className="w-5 h-5 text-accent"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Instagram</span>
            </a>
            <a
              href={TIKTOK_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-2 py-3 text-lg font-medium text-foreground hover:text-accent transition-colors rounded-lg hover:bg-muted/30"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg
                className="w-5 h-5 text-accent"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              <span>TikTok</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
