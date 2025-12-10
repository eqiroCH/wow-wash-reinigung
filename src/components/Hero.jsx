import { motion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';
import './Hero.css';
import Logo from './Logo';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="bubble bubble-1" />
        <div className="bubble bubble-2" />
        <div className="bubble bubble-3" />
        <div className="bubble bubble-4" />
        <div className="bubble bubble-5" />
      </div>

      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="hero-badge">✨ Professionelle Reinigung in Zürich</span>
          
          <h1 className="hero-title">
            Glanz und Sauberkeit,
            <span className="highlight">die sich sehen lassen können</span>
          </h1>
          
          <p className="hero-subtitle">
            Ihr Partner für professionelle Reinigung. 
            Wohnungen | Büros | Spezialreinigung.
            Qualität, der Sie vertrauen können.
          </p>

          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">
              <span>Kontaktieren Sie uns</span>
              <ArrowRight size={20} />
            </a>
            <a href="tel:+41762491012" className="btn btn-secondary">
              <Phone size={20} />
              <span>+41 076 249 10 12</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="hero-logo-container">
            <Logo size={350} className="hero-logo" />
            <span className="sparkle sparkle-1">✨</span>
            <span className="sparkle sparkle-2">✨</span>
            <span className="sparkle sparkle-3">⭐</span>
          </div>
        </motion.div>
      </div>

      <div className="hero-wave">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,64 C480,150 960,-20 1440,64 L1440,120 L0,120 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
