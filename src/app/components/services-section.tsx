import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { 
  Hammer, 
  Building2, 
  FileText, 
  Palette, 
  Home, 
  Building 
} from 'lucide-react';

const services = [
  {
    icon: Hammer,
    title: 'Construction',
    description: 'High-quality construction services with premium materials and expert craftsmanship.',
  },
  {
    icon: Building2,
    title: 'Apartment Development',
    description: 'Modern residential spaces designed for comfort and luxury living.',
  },
  {
    icon: FileText,
    title: 'Contract Works',
    description: 'Professional contract work services for commercial and residential projects.',
  },
  {
    icon: Palette,
    title: 'Interior Design',
    description: 'Premium interior solutions that blend aesthetics with functionality.',
  },
  {
    icon: Home,
    title: 'Residential Towers',
    description: 'State-of-the-art residential towers with world-class amenities.',
  },
  {
    icon: Building,
    title: 'Commercial Towers',
    description: 'Modern commercial spaces designed for business excellence.',
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="services" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0F0F0F]"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMDEsMTYyLDc0LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#C9A24A] uppercase tracking-wider text-sm mb-4 block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            What We <span className="text-[#C9A24A]">Offer</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Comprehensive real estate solutions tailored to your needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-[#1C1C1C]/50 backdrop-blur-sm border border-[#C9A24A]/20 rounded-2xl p-8 h-full transition-all duration-300 group-hover:border-[#C9A24A] group-hover:shadow-[0_0_30px_rgba(201,162,74,0.3)]">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-[#C9A24A]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#C9A24A]/20 transition-colors"
                >
                  <service.icon className="text-[#C9A24A]" size={32} />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#C9A24A] transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {service.description}
                </p>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C9A24A]/5 to-transparent rounded-2xl"></div>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute -top-2 -right-2 w-20 h-20 border-t-2 border-r-2 border-[#C9A24A]/30 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
