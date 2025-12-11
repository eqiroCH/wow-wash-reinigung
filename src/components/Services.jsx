import { motion } from 'framer-motion';
import { Home, Building2, Sparkles, Droplets, Building, Wrench } from 'lucide-react';
import './Services.css';

const Services = () => {
  // Echte Dienstleistungen aus Google Business und Flyern
  const services = [
    {
      icon: Building2,
      title: 'Büroreinigung',
      description: 'Saubere Arbeitsumgebung für Ihr Unternehmen.',
      serviceValue: 'buero',
    },
    {
      icon: Home,
      title: 'Wohnungsreinigung',
      description: 'Professionelle Reinigung für Ihr Zuhause.',
      serviceValue: 'wohnung',
    },
    {
      icon: Droplets,
      title: 'Fensterreinigung',
      description: 'Glänzende Fenster und Glasflächen.',
      serviceValue: 'fenster',
    },
    {
      icon: Wrench,
      title: 'Hochdruckreinigung',
      description: 'Gründliche Reinigung mit Hochdruck.',
      serviceValue: 'hochdruck',
    },
    {
      icon: Building,
      title: 'Fassadenreinigung',
      description: 'Professionelle Reinigung von Gebäudefassaden.',
      serviceValue: 'fassade',
    },
    {
      icon: Sparkles,
      title: 'Unterhaltsreinigung',
      description: 'Regelmässige Reinigung für langfristige Sauberkeit.',
      serviceValue: 'unterhalt',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const handleServiceClick = (serviceValue) => {
    // Dispatch custom event to set service in contact form
    window.dispatchEvent(new CustomEvent('selectService', { detail: serviceValue }));
    
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="services" id="services">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-badge">Unsere Dienstleistungen</span>
          <h2 className="section-title">Reinigung für jeden Bedarf</h2>
          <p className="section-subtitle">
            Ihr Partner für professionelle Reinigung in Zürich und Umgebung.
          </p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="service-card"
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              onClick={() => handleServiceClick(service.serviceValue)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleServiceClick(service.serviceValue);
                }
              }}
            >
              <div className="service-icon">
                <service.icon size={48} strokeWidth={1.5} />
              </div>
              
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              
              <span className="service-cta">Anfrage stellen →</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
