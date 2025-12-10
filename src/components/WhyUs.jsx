import { motion } from 'framer-motion';
import './WhyUs.css';

const WhyUs = () => {
  // Diese 5 Gründe stammen direkt aus dem Instagram-Post Screenshot
  const reasons = [
    {
      number: '01',
      title: 'Zuverlässigkeit',
      description: 'Bei uns gibt\'s keine Ausreden. Wir erscheinen pünktlich, arbeiten effizient und halten uns an Abmachungen – ganz einfach, weil du dich auf uns verlassen können sollst.',
    },
    {
      number: '02',
      title: 'Schweizer Qualität',
      description: 'Wir stehen für gründliche und saubere Arbeit – mit Liebe zum Detail. Ob Wohnung, Büro oder Treppenhaus: Wir reinigen so, wie wir es auch für uns selbst tun würden.',
    },
    {
      number: '03',
      title: 'Faire Preise',
      description: 'Transparente Stundenansätze, keine versteckten Kosten. Du zahlst nur für das, was effektiv geleistet wird – ehrlich, klar und nachvollziehbar.',
    },
    {
      number: '04',
      title: 'Individuelle Lösungen',
      description: 'Jeder Kunde ist anders. Deshalb passen wir unsere Reinigungsdienste flexibel deinen Bedürfnissen an – ob regelmässig oder spontan, klein oder gross.',
    },
    {
      number: '05',
      title: 'Vertrauen & Diskretion',
      description: 'Deine Privatsphäre ist uns wichtig. Wir behandeln dein Zuhause und deine Informationen mit absoluter Sorgfalt und Diskretion.',
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

  return (
    <section className="why-us" id="why-us">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-badge dark">Warum WOW WASH</span>
          <h2 className="section-title light">5 Gründe, warum du die Wow Wash Reinigung wählen solltest</h2>
        </motion.div>

        <motion.div
          className="reasons-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.number}
              className="reason-card"
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="reason-number">{reason.number}</div>
              <h3 className="reason-title">{reason.title}</h3>
              <p className="reason-desc">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="why-us-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          📍 Reinigungsservice mit Herz – lokal, professionell, persönlich.<br />
          📞 Melde dich jetzt für eine unverbindliche Beratung!
        </motion.p>
      </div>
    </section>
  );
};

export default WhyUs;
