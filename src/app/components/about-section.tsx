import { motion, useInView } from "framer-motion";
import { useRef } from 'react';
import { Award, Users, Building, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Building, value: '50+', label: 'Projects Completed' },
  { icon: Users, value: '500+', label: 'Happy Clients' },
  { icon: Award, value: '15+', label: 'Years Experience' },
  { icon: TrendingUp, value: '100%', label: 'Client Satisfaction' },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F] via-[#1C1C1C] to-[#0F0F0F]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="text-[#C9A24A] uppercase tracking-wider text-sm">About Us</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              About <span className="text-[#C9A24A]">RADEV Realty Group</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-white/70 text-lg leading-relaxed mb-8"
            >
              RADEV Realty Group Private Limited is a Hyderabad-based real estate company 
              specializing in high-quality construction, apartment development, contract works, 
              and premium interior solutions. We build residential and commercial towers designed 
              with modern architecture, quality materials, and future-focused planning.
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="bg-[#1C1C1C]/50 backdrop-blur-sm border border-[#C9A24A]/20 p-4 rounded-lg hover:border-[#C9A24A]/50 transition-all duration-300 group"
                >
                  <stat.icon className="text-[#C9A24A] mb-2 group-hover:scale-110 transition-transform" size={24} />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#C9A24A]/20 to-transparent z-10"></div>
              
              <img
                src="https://images.unsplash.com/photo-1486718448742-163732cd1544?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzM1OTM0OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern Architecture"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              
              {/* Decorative border */}
              <div className="absolute inset-0 border-2 border-[#C9A24A]/30 rounded-2xl"></div>
              
              {/* Floating badge */}
              <motion.div
  initial={{ scale: 0 }}
  animate={isInView ? { scale: 1 } : {}}
  transition={{ delay: 1, type: "spring" }}
  className="absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-[#C9A24A] text-[#0F0F0F] p-4 md:p-6 rounded-xl md:rounded-2xl shadow-xl z-20"
>
  <div className="text-2xl md:text-3xl font-bold">15+</div>
  <div className="text-xs md:text-sm">Years of Excellence</div>
</motion.div>
            </div>

            {/* Background decoration */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#C9A24A]/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-[#C9A24A]/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
