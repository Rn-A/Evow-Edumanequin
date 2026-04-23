import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Team from './components/Team';
import Programs from './components/Programs';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Team />
      <Programs />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}
