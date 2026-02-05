import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import './Legal.css';

const Impressum = () => {
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
          <h1>Impressum</h1>
          
          <section className="legal-section">
            <h2>Angaben gemäss Schweizer Recht</h2>
            
            <h3>Firma</h3>
            <p>
              WOW WASH Reinigung<br />
              Tobelrainstrasse 10<br />
              8820 Wädenswil<br />
              Schweiz
            </p>

            <h3>Kontakt</h3>
            <p>
              Telefon: <a href="tel:+41762491012">+41 76 249 10 12</a><br />
              E-Mail: <a href="mailto:info@wowwash.ch">info@wowwash.ch</a><br />
              Website: <a href="https://www.wowwash.ch">www.wowwash.ch</a>
            </p>

            <h3>Vertretungsberechtigte Person</h3>
            <p>
              Hassan Al Kinani<br />
              Geschäftsführer
            </p>
          </section>

          <section className="legal-section">
            <h2>Haftungsausschluss</h2>
            <p>
              Der Autor übernimmt keine Gewähr für die Richtigkeit, Genauigkeit, Aktualität, 
              Zuverlässigkeit und Vollständigkeit der Informationen.
            </p>
            <p>
              Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, 
              die aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten 
              Informationen, durch Missbrauch der Verbindung oder durch technische Störungen 
              entstanden sind, werden ausgeschlossen.
            </p>
            <p>
              Alle Angebote sind freibleibend. Der Autor behält es sich ausdrücklich vor, 
              Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, 
              zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
            </p>
          </section>

          <section className="legal-section">
            <h2>Haftungsausschluss für Links</h2>
            <p>
              Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres 
              Verantwortungsbereichs. Es wird jegliche Verantwortung für solche Webseiten 
              abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene 
              Gefahr des jeweiligen Nutzers.
            </p>
          </section>

          <section className="legal-section">
            <h2>Urheberrechte</h2>
            <p>
              Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen 
              Dateien auf dieser Website gehören ausschliesslich WOW WASH Reinigung oder den 
              speziell genannten Rechteinhabern. Für die Reproduktion jeglicher Elemente ist 
              die schriftliche Zustimmung des Urheberrechtsträgers im Voraus einzuholen.
            </p>
          </section>

          <section className="legal-section">
            <h2>Datenschutz</h2>
            <p>
              Gestützt auf Artikel 13 der Schweizerischen Bundesverfassung und die 
              datenschutzrechtlichen Bestimmungen des Bundes hat jede Person Anspruch auf 
              Schutz ihrer Privatsphäre sowie auf Schutz vor Missbrauch ihrer persönlichen 
              Daten. Wir halten diese Bestimmungen ein. Persönliche Daten werden streng 
              vertraulich behandelt und weder an Dritte verkauft noch weitergegeben.
            </p>
            <p>
              In enger Zusammenarbeit mit unseren Hosting-Providern bemühen wir uns, die 
              Datenbanken so gut wie möglich vor fremden Zugriffen, Verlusten, Missbrauch 
              oder vor Fälschung zu schützen.
            </p>
            <p>
              Beim Zugriff auf unsere Webseiten werden folgende Daten in Logfiles gespeichert: 
              IP-Adresse, Datum, Uhrzeit, Browser-Anfrage und allgemein übertragene 
              Informationen zum Betriebssystem resp. Browser. Diese Nutzungsdaten bilden die 
              Basis für statistische, anonyme Auswertungen, sodass Trends erkennbar sind, 
              anhand derer wir unsere Angebote entsprechend verbessern können.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Impressum;
