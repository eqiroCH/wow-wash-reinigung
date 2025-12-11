import { useState, useEffect } from 'react';
import { Menu, X, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';
import Logo from './Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [googleRating, setGoogleRating] = useState(5.0);

  // Lade Bewertung vom Elfsight Widget (wenn verfügbar)
  useEffect(() => {
    const checkElfsightRating = () => {
      // Versuche die Bewertung vom Elfsight Widget zu lesen
      const ratingElement = document.querySelector('.elfsight-app-39cf0151-a59d-4276-a62a-89f9452eb9c4');
      if (ratingElement) {
        // Warte bis Elfsight geladen ist
        const interval = setInterval(() => {
          const ratingText = document.querySelector('.elfsight-app-39cf0151-a59d-4276-a62a-89f9452eb9c4 [class*="rating"]');
          if (ratingText) {
            const ratingMatch = ratingText.textContent.match(/(\d+\.?\d*)/);
            if (ratingMatch) {
              setGoogleRating(parseFloat(ratingMatch[1]));
              clearInterval(interval);
            }
          }
        }, 500);
        
        // Timeout nach 5 Sekunden
        setTimeout(() => clearInterval(interval), 5000);
      }
    };

    // Prüfe nach 2 Sekunden (wenn Elfsight geladen sein könnte)
    const timeout = setTimeout(checkElfsightRating, 2000);
    
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Dienstleistungen' },
    { href: '#about', label: 'Über uns' },
    { href: '#why-us', label: 'Warum wir' },
    { href: '#reviews', isReviews: true }, // Reviews Badge zwischen "Warum wir" und "Kontakt"
    { href: '#contact', label: 'Kontakt', isCta: true },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const handleReviewsClick = (e) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const reviewsSection = document.getElementById('reviews');
    if (reviewsSection) {
      reviewsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="nav-logo">
          <Logo size={40} />
          <span className="logo-name">WOW WASH</span>
        </a>

        <button
          className={`nav-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menü öffnen"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => {
            if (link.isReviews) {
              return (
                <li key="reviews-badge" className="nav-reviews-widget">
                  <button
                    onClick={handleReviewsClick}
                    className="nav-reviews-badge"
                    aria-label={`Bewertungen - ${googleRating.toFixed(1)} Sterne`}
                  >
                    {/* Google G Logo */}
                    <div className="nav-google-logo">
                      <svg viewBox="0 0 24 24" width="18" height="18">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                    </div>
                    <Star size={16} fill="#F2D541" stroke="#D4B82E" strokeWidth="0.5" />
                    <span className="nav-rating-number">{googleRating.toFixed(1)}</span>
                  </button>
                </li>
              );
            }
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`nav-link ${link.isCta ? 'nav-cta' : ''}`}
                  onClick={handleLinkClick}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;


