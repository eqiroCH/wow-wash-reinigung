import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Send, CheckCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  // Listen for service selection from Services component
  useEffect(() => {
    const handleSelectService = (event) => {
      setFormData((prev) => ({ ...prev, service: event.detail }));
    };

    window.addEventListener('selectService', handleSelectService);
    return () => window.removeEventListener('selectService', handleSelectService);
  }, []);

  // Verifizierte Kontaktdaten aus Instagram
  const contactInfo = [
    {
      icon: Mail,
      label: 'E-Mail',
      value: 'info@wowwash.ch',
      href: 'mailto:info@wowwash.ch',
    },
    {
      icon: Phone,
      label: 'Telefon',
      value: '+41 076 249 10 12',
      href: 'tel:+41762491012',
    },
    {
      icon: MapPin,
      label: 'Adresse',
      value: 'Tobelrainstrasse 10, 8820 Wädenswil',
      href: null,
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@wow_wash_reinigung',
      href: 'https://www.instagram.com/wow_wash_reinigung/',
    },
  ];

  // Nur verifizierte Services
  const services = [
    { value: 'wohnung', label: 'Wohnungen' },
    { value: 'buero', label: 'Büros' },
    { value: 'spezial', label: 'Spezialreinigung' },
    { value: 'andere', label: 'Andere' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Send to Formspree
      const response = await fetch('https://formspree.io/f/xwpkvpqr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Nicht angegeben',
          service: services.find(s => s.value === formData.service)?.label || 'Nicht angegeben',
          message: formData.message,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        });
      } else {
        throw new Error('Formular konnte nicht gesendet werden');
      }
    } catch (error) {
      setSubmitError('Es gab einen Fehler beim Senden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt per Telefon.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-badge">Kontakt</span>
            <h2 className="section-title">Lassen Sie uns wissen, wie wir Ihnen helfen können</h2>
            <p className="contact-text">
              Rufen Sie uns gerne an oder schreiben Sie uns.
            </p>

            <div className="contact-details">
              {contactInfo.map((item) => {
                const Content = (
                  <>
                    <div className="contact-icon">
                      <item.icon size={24} />
                    </div>
                    <div className="contact-item-content">
                      <span className="contact-label">{item.label}</span>
                      <span className="contact-value">{item.value}</span>
                    </div>
                  </>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="contact-item"
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {Content}
                  </a>
                ) : (
                  <div key={item.label} className="contact-item">
                    {Content}
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {isSubmitted ? (
              <div className="form-success">
                <div className="form-success-icon">
                  <CheckCircle size={40} />
                </div>
                <h3>Vielen Dank!</h3>
                <p>Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns so schnell wie möglich bei Ihnen.</p>
                <button
                  className="btn btn-primary"
                  onClick={() => setIsSubmitted(false)}
                  style={{ marginTop: '24px' }}
                >
                  Neue Anfrage
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Ihr Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">E-Mail *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="ihre@email.ch"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Telefon</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+41 ..."
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="service">Gewünschte Dienstleistung</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={formData.service === '' ? 'placeholder' : ''}
                  >
                    <option value="" disabled hidden>
                      Bitte wählen...
                    </option>
                    {services.map((service) => (
                      <option key={service.value} value={service.value}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Nachricht *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Beschreiben Sie Ihr Anliegen..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                {submitError && (
                  <div className="form-error">
                    {submitError}
                  </div>
                )}

                <button
                  type="submit"
                  className={`btn btn-primary btn-full ${isSubmitting ? 'loading' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span>Wird gesendet...</span>
                  ) : (
                    <>
                      <span>Nachricht senden</span>
                      <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
