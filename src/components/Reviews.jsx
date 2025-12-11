import { motion } from 'framer-motion';
import { useEffect } from 'react';
import './Reviews.css';

const Reviews = () => {
  useEffect(() => {
    // Elfsight Script laden
    if (!document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://elfsightcdn.com/platform.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="reviews" id="reviews">
      <div className="container">
        <motion.div
          className="reviews-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">Bewertungen</span>
          <h2 className="section-title">Was unsere Kunden sagen</h2>
          <p className="section-subtitle">
            Überzeugen Sie sich selbst von unserer Qualität
          </p>
        </motion.div>

        <motion.div
          className="reviews-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Elfsight Widget Container */}
          <div className="elfsight-widget-container">
            {/* Elfsight Google Reviews Widget */}
            <div className="elfsight-app-39cf0151-a59d-4276-a62a-89f9452eb9c4" data-elfsight-app-lazy></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;

