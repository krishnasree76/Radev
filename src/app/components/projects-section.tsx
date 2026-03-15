import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { MapPin, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Skyline Residency',
    location: 'Hitech City, Hyderabad',
    image: 'https://images.unsplash.com/photo-1740904259901-2063800012ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNpZGVudGlhbCUyMHRvd2VyfGVufDF8fHx8MTc3MzU5MzU3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    type: 'Residential',
  },
  {
    title: 'Corporate Plaza',
    location: 'Madhapur, Hyderabad',
    image: 'https://images.unsplash.com/photo-1632398793634-e3cd63fc9e84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb21tZXJjaWFsJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzczNDkyMDE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    type: 'Commercial',
  },
  {
    title: 'Golden Heights',
    location: 'Gachibowli, Hyderabad',
    image: 'https://images.unsplash.com/photo-1741764014072-68953e93cd48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBjb21wbGV4fGVufDF8fHx8MTc3MzU5MzU3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    type: 'Apartment Complex',
  },
  {
    title: 'Business Tower',
    location: 'Kondapur, Hyderabad',
    image: 'https://images.unsplash.com/photo-1644562324011-3231c08141ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwb2ZmaWNlJTIwdG93ZXJ8ZW58MXx8fHwxNzczNTkzNTc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    type: 'Office Space',
  },
  {
    title: 'Elite Towers',
    location: 'Financial District, Hyderabad',
    image: 'https://images.unsplash.com/photo-1670352708561-df7fdfac97e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwcmlzZSUyMHJlc2lkZW50aWFsJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzczNTkzNTc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    type: 'High-Rise',
  },
  {
    title: 'Urban Hub',
    location: 'Kukatpally, Hyderabad',
    image: 'https://images.unsplash.com/photo-1764470560142-086c104d1f96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaXhlZCUyMHVzZSUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc3MzU5MzU3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    type: 'Mixed-Use',
  },
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F] via-[#1C1C1C] to-[#0F0F0F]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#C9A24A] uppercase tracking-wider text-sm mb-4 block">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured <span className="text-[#C9A24A]">Projects</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Explore our landmark projects that define Hyderabad's skyline
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden rounded-2xl">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                
                {/* Type Badge */}
                <div className="absolute top-4 right-4 bg-[#C9A24A] text-[#0F0F0F] px-4 py-2 rounded-lg text-sm font-medium">
                  {project.type}
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <motion.h3
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-2xl font-bold text-white mb-2 group-hover:text-[#C9A24A] transition-colors"
                  >
                    {project.title}
                  </motion.h3>
                  
                  <div className="flex items-center gap-2 text-white/70 mb-4">
                    <MapPin size={16} className="text-[#C9A24A]" />
                    <span className="text-sm">{project.location}</span>
                  </div>

                  {/* View Project Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-[#C9A24A] opacity-0 group-hover:opacity-100 transition-all"
                  >
                    <span className="text-sm font-medium">View Details</span>
                    <ExternalLink size={16} />
                  </motion.div>
                </div>

                {/* Border on Hover */}
                <div className="absolute inset-0 border-2 border-[#C9A24A] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#C9A24A] to-[#d4b05f] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity -z-10"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
