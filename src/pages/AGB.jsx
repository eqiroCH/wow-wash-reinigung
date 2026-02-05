import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import './Legal.css';

const AGB = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <header className="legal-header">
        <div className="container">
          <Link to="/" className="legal-back">
            <ArrowLeft size={20} />
            <span>Zurück zur Startseite</span>
          </Link>
          <Link to="/" className="legal-logo">
            <div className="legal-logo-circle">
              <Logo size={62} />
            </div>
            <span>WOW WASH</span>
          </Link>
        </div>
      </header>

      <main className="legal-content">
        <div className="container">
          <h1>Allgemeine Geschäftsbedingungen (AGB)</h1>
          
          <section className="legal-section">
            <h2>1. Geltungsbereich</h2>
            <p>
              Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen 
              WOW WASH Reinigung (nachfolgend «Auftragnehmer») und dem Kunden (nachfolgend 
              «Auftraggeber») über Reinigungsdienstleistungen und damit verbundene Arbeiten.
            </p>
            <p>
              Mit der Auftragserteilung anerkennt der Auftraggeber diese AGB als verbindlich.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Vertragsabschluss</h2>
            <p>
              Ein Vertrag kommt durch schriftliche oder mündliche Auftragserteilung und deren 
              Annahme durch den Auftragnehmer zustande. Angebote des Auftragnehmers sind 
              freibleibend und unverbindlich.
            </p>
          </section>

          <section className="legal-section">
            <h2>3. Leistungsumfang</h2>
            <p>
              Der Umfang der zu erbringenden Leistungen ergibt sich aus der jeweiligen 
              Auftragsbestätigung oder dem Angebot. Der Auftragnehmer erbringt seine 
              Leistungen nach bestem Wissen und Gewissen sowie unter Verwendung geeigneter 
              Reinigungsmittel und -geräte.
            </p>
            <p>
              Nicht im Leistungsumfang enthalten sind, sofern nicht ausdrücklich vereinbart:
            </p>
            <ul>
              <li>Entrümpelung und Entsorgung von Gegenständen</li>
              <li>Reinigung von stark verschmutzten oder beschädigten Oberflächen, 
                  die eine Spezialbehandlung erfordern</li>
              <li>Reparaturen oder handwerkliche Arbeiten</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Pflichten des Auftraggebers</h2>
            <p>
              Der Auftraggeber stellt sicher, dass:
            </p>
            <ul>
              <li>Der Zugang zu den zu reinigenden Räumlichkeiten zum vereinbarten 
                  Zeitpunkt gewährleistet ist</li>
              <li>Wertgegenstände, Dokumente und persönliche Gegenstände vor Beginn 
                  der Reinigung gesichert werden</li>
              <li>Besondere Verschmutzungen oder empfindliche Oberflächen vorab 
                  mitgeteilt werden</li>
              <li>Strom- und Wasseranschlüsse verfügbar sind</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. Preise und Zahlung</h2>
            <p>
              Die Preise verstehen sich in Schweizer Franken (CHF) inklusive 
              Mehrwertsteuer. Der Preis richtet sich nach dem vereinbarten Angebot 
              oder dem aktuellen Stundensatz.
            </p>
            <p>
              Die Rechnung ist innerhalb von 14 Tagen nach Rechnungsstellung ohne 
              Abzug zahlbar. Bei Zahlungsverzug werden Verzugszinsen von 5% p.a. berechnet.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Stornierung und Terminänderung</h2>
            <p>
              Terminabsagen oder -verschiebungen müssen spätestens 24 Stunden vor 
              dem vereinbarten Termin erfolgen. Bei kurzfristigeren Absagen behält 
              sich der Auftragnehmer vor, eine Aufwandsentschädigung von bis zu 50% 
              des vereinbarten Preises in Rechnung zu stellen.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Haftung</h2>
            <p>
              Der Auftragnehmer haftet für Schäden, die durch grobe Fahrlässigkeit 
              oder Vorsatz verursacht werden. Die Haftung für leichte Fahrlässigkeit 
              ist ausgeschlossen.
            </p>
            <p>
              Schäden müssen unverzüglich, spätestens jedoch innerhalb von 24 Stunden 
              nach Ausführung der Arbeiten, schriftlich gemeldet werden. Spätere 
              Meldungen werden nicht berücksichtigt.
            </p>
            <p>
              Der Auftragnehmer haftet nicht für Schäden an bereits vorgeschädigten 
              oder mangelhaften Oberflächen und Gegenständen.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Gewährleistung</h2>
            <p>
              Der Auftraggeber ist verpflichtet, die erbrachte Leistung unmittelbar 
              nach Ausführung zu prüfen. Beanstandungen sind unverzüglich mitzuteilen. 
              Der Auftragnehmer wird berechtigte Mängel in angemessener Frist kostenlos 
              nachbessern.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Datenschutz</h2>
            <p>
              Der Auftragnehmer behandelt alle personenbezogenen Daten des 
              Auftraggebers vertraulich und gemäss den geltenden 
              Datenschutzbestimmungen. Die Daten werden ausschliesslich zur 
              Vertragsabwicklung verwendet und nicht an Dritte weitergegeben.
            </p>
          </section>

          <section className="legal-section">
            <h2>10. Schlussbestimmungen</h2>
            <p>
              Es gilt ausschliesslich Schweizer Recht. Gerichtsstand ist Wädenswil, 
              Kanton Zürich.
            </p>
            <p>
              Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, 
              bleibt die Wirksamkeit der übrigen Bestimmungen davon unberührt.
            </p>
          </section>

          <section className="legal-section">
            <h2>Kontakt</h2>
            <p>
              WOW WASH Reinigung<br />
              Tobelrainstrasse 10<br />
              8820 Wädenswil<br />
              <a href="tel:+41762491012">+41 76 249 10 12</a><br />
              <a href="mailto:info@wowwash.ch">info@wowwash.ch</a>
            </p>
            <p><em>Stand: Februar 2026</em></p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AGB;
