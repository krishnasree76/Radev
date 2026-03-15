import { useEffect } from 'react';
import { Navbar } from './components/navbar';
import { HeroSection } from './components/hero-section';
import { AboutSection } from './components/about-section';
import { ServicesSection } from './components/services-section';
import { ProjectsSection } from './components/projects-section';
import { ContactSection } from './components/contact-section';
import { Footer } from './components/footer';

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0F0F0F] overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection scrollToSection={scrollToSection} />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
