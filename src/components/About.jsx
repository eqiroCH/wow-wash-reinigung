import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const cards = [
    { icon: '🏠', label: 'Wohnungen', delay: 0 },
    { icon: '🏢', label: 'Büros', delay: 0.2 },
    { icon: '✨', label: 'Spezial', delay: 0.4 },
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
              WOW WASH ist Ihr Reinigungsdienst in Zürich und Umgebung.
              Wir bieten professionelle Reinigung für Wohnungen, Büros und Spezialreinigung.
            </p>
            
            <p className="about-text">
              📍 Standort: Wädenswil, Zürich
            </p>
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
                  <div className="about-card-icon">{card.icon}</div>
                  <span>{card.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
