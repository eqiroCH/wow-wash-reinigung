import { Navbar, Hero, Services, About, WhyUs, Reviews, Contact, Footer } from './components';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <WhyUs />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
