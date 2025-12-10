import { motion } from 'framer-motion';
import { Home, Building2, Sparkles } from 'lucide-react';
import './Services.css';

const Services = () => {
  // NUR verifizierte Services aus Instagram Bio
  const services = [
    {
      icon: Home,
      title: 'Wohnungen',
      description: 'Professionelle Reinigung für Ihr Zuhause.',
      featured: false,
      serviceValue: 'wohnung',
    },
    {
      icon: Building2,
      title: 'Büros',
      description: 'Saubere Arbeitsumgebung für Ihr Unternehmen.',
      featured: true,
      serviceValue: 'buero',
    },
    {
      icon: Sparkles,
      title: 'Spezialreinigung',
      description: 'Individuelle Reinigungslösungen für besondere Anforderungen.',
      featured: false,
      serviceValue: 'spezial',
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
              className={`service-card ${service.featured ? 'featured' : ''}`}
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
