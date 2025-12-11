import { motion } from 'framer-motion';
import { Home, Building2, Sparkles, MapPin, ImageIcon, Instagram } from 'lucide-react';
import './About.css';

const About = () => {
  const cards = [
    { icon: Home, label: 'Wohnungen', delay: 0 },
    { icon: Building2, label: 'Büros', delay: 0.2 },
    { icon: Sparkles, label: 'Spezial', delay: 0.4 },
  ];

  // Neue Galerie-Bilder
  const galleryImages = [
    { 
      id: 1, 
      src: '/gallery/gallery-1.jpeg', 
      alt: 'WOW WASH Mitarbeiter bei der Bodenreinigung',
      position: 'top' // Oben links: mehr Boden zeigen
    },
    { 
      id: 2, 
      src: '/gallery/gallery-2.jpeg', 
      alt: 'Saubere Praxis nach der Reinigung' 
    },
    { 
      id: 3, 
      src: '/gallery/gallery-3.jpeg', 
      alt: 'Professionelle Reinigungsergebnisse' 
    },
    { 
      id: 4, 
      src: '/gallery/gallery-4.jpeg', 
      alt: 'Glänzender Holzboden im Büro',
      position: 'bottom' // Unten links: mehr Boden zeigen
    },
    { 
      id: 5, 
      src: '/gallery/gallery-5.jpeg', 
      alt: 'Frisch gereinigte Holztreppe' 
    },
    { 
      id: 6, 
      src: '/gallery/gallery-6.jpeg', 
      alt: 'Sauberes Badezimmer',
      position: 'top' // Unten rechts: mehr Boden zeigen
    },
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-badge">Über WOW WASH</span>
            <h2 className="section-title">Ihr Partner für professionelle Reinigung</h2>
            
            <p className="about-text">
              WOW WASH Reinigung ist Ihr Reinigungsdienst in Zürich und Umgebung.
              Unter der Leitung von Hassan Alkinani bieten wir professionelle Reinigungsservices 
              rund um die Uhr. Wir sind spezialisiert auf Büro-, Wohnungs-, Fenster-, 
              Hochdruck-, Fassaden- und Unterhaltsreinigung.
            </p>

            {/* Standort mit Karte */}
            <div className="about-location">
              <div className="about-location-header">
                <MapPin size={20} />
                <span>Wädenswil, Zürich</span>
              </div>
              <div className="about-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2712.5!2d8.6651!3d47.2289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aa7b5c1c1c1c1%3A0x0!2sW%C3%A4denswil%2C%20Switzerland!5e0!3m2!1sde!2sch!4v1702200000000!5m2!1sde!2sch"
                  width="100%"
                  height="180"
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="WOW WASH Standort - Wädenswil"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="about-image-container">
              <div className="about-shape" />
              
              {cards.map((card, index) => (
                <motion.div
                  key={card.label}
                  className={`about-card about-card-${index + 1}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: card.delay }}
                  whileHover={{ y: -5 }}
                >
                  <div className="about-card-icon">
                    <card.icon size={32} strokeWidth={1.5} />
                  </div>
                  <span>{card.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Galerie für Instagram-Bilder */}
        <motion.div
          className="about-gallery"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="about-gallery-title">Einblicke in unsere Arbeit</h3>
          <p className="about-gallery-subtitle">Folgen Sie uns auf Instagram für mehr</p>
          
          <div className="about-gallery-grid">
            {galleryImages.map((img, index) => (
              <motion.div
                key={img.id}
                className="about-gallery-item"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                {img.placeholder ? (
                  <div className="about-gallery-placeholder">
                    <ImageIcon size={32} />
                    <span>Bald mehr</span>
                  </div>
                ) : (
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    loading="lazy"
                    className={img.position ? `gallery-img-${img.position}` : ''}
                  />
                )}
              </motion.div>
            ))}
          </div>
          
          <div className="about-social-links">
            <p className="about-social-text">Mehr auf:</p>
            <div className="about-social-icons">
              <a 
                href="https://www.tiktok.com/@wowwash_reinigung" 
                target="_blank" 
                rel="noopener noreferrer"
                className="about-social-icon"
                aria-label="TikTok"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/wow_wash_reinigung/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="about-social-icon"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
