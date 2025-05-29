import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import CTA from './components/CTA';
import JoinUs from './components/JoinUs';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  useEffect(() => {
    document.title = "Devly - Innovative Digital Solutions";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <CTA />
        <JoinUs />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;