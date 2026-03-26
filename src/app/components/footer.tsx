import { motion } from "framer-motion";
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin,Heart } from "lucide-react";
import logo from '../../assets/logo.png';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const services = [
  'Construction',
  'Apartment Development',
  'Contract Works',
  'Interior Design',
  'Residential Towers',
  'Commercial Towers',
];

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/radevrealtygroup', label: 'Instagram' },
  // { icon: Facebook, href: '#', label: 'Facebook' },
  // { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#0F0F0F] border-t border-[#C9A24A]/20 overflow-hidden">
      {/* Gold gradient divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#C9A24A] to-transparent"></div>

      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C9A24A]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#C9A24A]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <motion.img
  whileHover={{ scale: 1.05 }}
  src={logo}
  alt="RADEV Realty Group"
  className="h-16 mb-6"
/>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Building landmarks and creating legacies in Hyderabad with premium construction 
              and development solutions.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="bg-[#C9A24A]/10 p-3 rounded-lg hover:bg-[#C9A24A]/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} className="text-[#C9A24A]" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/60 hover:text-[#C9A24A] transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-white/60 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-[#C9A24A] mt-1 flex-shrink-0" />
                <a
                  href="tel:+919392296636"
                  className="text-white/60 hover:text-[#C9A24A] transition-colors text-sm"
                >
                  +91 93922 96636
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-[#C9A24A] mt-1 flex-shrink-0" />
                <a
                  href="mailto:prasadpoloju9@gmail.com"
                  className="text-white/60 hover:text-[#C9A24A] transition-colors text-sm break-all"
                >
                  prasadpoloju9@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#C9A24A] mt-1 flex-shrink-0" />
                <span className="text-white/60 text-sm">
                  1-98/90/22, Ground Floor
                  <br />
                  Madhapur Main Road
                  <br />
                  Hitech City Road
                  <br />
                  Hyderabad, Telangana 500081
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#C9A24A]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} RADEV Realty Group Private Limited. All rights reserved.
            </p>
            <div className="flex justify-center items-center gap-1">
            Made with <Heart className="inline h-4 w-4 text-red-500 mx-1" /> by
            <a
              href="https://staffarc.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-orange-600 hover:underline"
            >
              <img
                src="https://www.staffarc.in/images/Staffarc-logo.png"
                alt="StaffArc logo"
                className="h-5 w-5 object-contain"
              />
              StaffArc
            </a>
          </div>
            <div className="flex gap-6 text-sm">
              {/* <button className="text-white/60 hover:text-[#C9A24A] transition-colors">
                Privacy Policy
              </button>
              <button className="text-white/60 hover:text-[#C9A24A] transition-colors">
                Terms of Service
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
