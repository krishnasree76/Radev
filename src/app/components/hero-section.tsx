import { motion } from 'motion/react';
import { Building2, ArrowRight } from 'lucide-react';
import logo from 'figma:asset/d06553d0d69cccf08026fc5accd3aaf547b1d800.png';

interface HeroSectionProps {
  scrollToSection: (href: string) => void;
}

export function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F] via-[#1C1C1C] to-[#0F0F0F]"></div>
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#C9A24A] rounded-full filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#C9A24A] rounded-full filter blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Floating Buildings Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 100, opacity: 0 }}
            animate={{ 
              y: [100, -20, 100],
              opacity: [0, 0.3, 0]
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              delay: i * 3,
            }}
            className="absolute"
            style={{
              left: `${20 + i * 15}%`,
              bottom: 0,
            }}
          >
            <Building2 
              size={60 + i * 20} 
              className="text-[#C9A24A]/20"
            />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <img
            src={logo}
            alt="RADEV Realty Group"
            className="mx-auto h-32 md:h-48 lg:h-64 drop-shadow-2xl"
          />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
        >
          Building Landmarks.
          <br />
          <span className="text-[#C9A24A]">Creating Legacies.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl lg:text-2xl text-white/70 mb-12 max-w-3xl mx-auto"
        >
          Premium Construction, Apartment Development, and Commercial Towers in Hyderabad.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(201, 162, 74, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('#projects')}
            className="bg-[#C9A24A] text-[#0F0F0F] px-8 py-4 rounded-lg flex items-center gap-2 group"
          >
            Explore Projects
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('#contact')}
            className="bg-transparent border-2 border-[#C9A24A] text-[#C9A24A] px-8 py-4 rounded-lg hover:bg-[#C9A24A]/10 transition-colors"
          >
            Contact Us
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-[#C9A24A] rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 bg-[#C9A24A] rounded-full"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
