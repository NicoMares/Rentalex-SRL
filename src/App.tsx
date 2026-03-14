import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import FleetCarousel from './components/FleetCarousel';
import Projects from './components/Projects';
import ContactCTA from './components/ContactCTA';

function App() {
  useEffect(() => {
    // Basic smooth scroll setup for the whole page (Lenis)
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-industrial-800 min-h-screen text-industrial-gray bg-concrete relative selection:bg-industrial-orange selection:text-industrial-900">
      <Navbar />
      <Hero />
      <Metrics />
      <FleetCarousel />
      <Projects />
      <ContactCTA />
    </div>
  );
}

export default App;
