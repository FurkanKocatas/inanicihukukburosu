import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Team from '@/components/Team';
import FAQ from '@/components/FAQ';
import WhatsApp from '@/components/WhatsApp';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-offwhite">
      <Header />
      <Hero />
      <About />
      <Services />
      <WhatsApp />
      <Team />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
