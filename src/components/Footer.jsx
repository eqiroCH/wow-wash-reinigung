import { Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: '/#home', label: 'Home' },
    { href: '/#services', label: 'Dienstleistungen' },
    { href: '/#about', label: 'Über uns' },
    { href: '/#why-us', label: 'Warum wir' },
    { href: '/#contact', label: 'Kontakt' },
  ];

  // Echte Dienstleistungen
  const serviceLinks = [
    { href: '/#services', label: 'Büroreinigung' },
    { href: '/#services', label: 'Wohnungsreinigung' },
    { href: '/#services', label: 'Fensterreinigung' },
    { href: '/#services', label: 'Hochdruckreinigung' },
    { href: '/#services', label: 'Fassadenreinigung' },
    { href: '/#services', label: 'Unterhaltsreinigung' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <div className="footer-logo-circle">
                <Logo size={62} />
              </div>
              <span>WOW WASH</span>
            </Link>
            <p className="footer-desc">
              Ihr Partner für professionelle Reinigung in Zürich und Umgebung.
            </p>
            <div className="footer-social">
              <a
                href="https://www.instagram.com/wow_wash_reinigung/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@wowwash_reinigung"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Navigation</h4>
            <ul>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links">
            <h4>Dienstleistungen</h4>
            <ul>
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Kontakt</h4>
            <p>
              Tobelrainstrasse 10
              <br />
              8820 Wädenswil
            </p>
            <p>
              <a href="tel:+41762491012">+41 76 249 10 12</a>
            </p>
            <p>
              <a href="mailto:info@wowwash.ch">info@wowwash.ch</a>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} WOW WASH Reinigung. Alle Rechte vorbehalten.</p>
            <div className="footer-legal-links">
              <Link to="/impressum">Impressum</Link>
              <span className="footer-divider">|</span>
              <Link to="/agb">AGB</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
