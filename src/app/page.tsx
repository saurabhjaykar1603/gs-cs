import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { FeatureCards } from '@/components/FeatureCards';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { FloatingSocialButtons } from '@/components/FloatingSocialButtons';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FeatureCards />
      <About />
      <Contact />
      <Footer />
      <FloatingSocialButtons />
    </main>
  );
}
