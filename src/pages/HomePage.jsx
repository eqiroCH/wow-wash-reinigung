import { Navbar, Hero, Services, About, WhyUs, Reviews, Contact, Footer } from '../components';

const HomePage = () => {
  return (
    <>
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
    </>
  );
};

export default HomePage;
