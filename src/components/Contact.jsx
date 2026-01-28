import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

// WhatsApp Icon Component
const WhatsAppIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);
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
      value: '+41 76 249 10 12',
      href: 'tel:+41762491012',
    },
    {
      icon: MapPin,
      label: 'Standort',
      value: 'Tobelrainstrasse 10, 8820 Wädenswil',
      href: 'https://maps.google.com/?q=Tobelrainstrasse+10,+8820+Wädenswil',
    },
    {
      icon: WhatsAppIcon,
      label: 'WhatsApp',
      value: '+41 76 249 10 12',
      href: 'https://wa.me/41762491012',
    },
  ];

  // Echte Dienstleistungen aus Google Business
  const services = [
    { value: 'buero', label: 'Büroreinigung' },
    { value: 'wohnung', label: 'Wohnungsreinigung' },
    { value: 'fenster', label: 'Fensterreinigung' },
    { value: 'hochdruck', label: 'Hochdruckreinigung' },
    { value: 'fassade', label: 'Fassadenreinigung' },
    { value: 'unterhalt', label: 'Unterhaltsreinigung' },
    { value: 'bodengrund', label: 'Bodengrundreinigung' },
    { value: 'polierung', label: 'Polierung' },
    { value: 'hauswartung', label: 'Hauswartung' },
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
