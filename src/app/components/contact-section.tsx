import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  Instagram,
  Facebook,
  Linkedin,
  User
} from 'lucide-react';

const contactInfo = [
  {
    icon: User,
    label: 'Contact Person',
    value: 'Prasad Poloju',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 93922 96636',
    href: 'tel:+919392296636',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'prasadpoloju9@gmail.com',
    href: 'mailto:prasadpoloju9@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '1-98/90/22, Ground Floor, Madhapur Main Road, Hitech City Road, Hyderabad, Telangana 500081',
  },
];

const businessHours = [
  { days: 'Monday – Friday', hours: '9:00 AM – 5:00 PM' },
  { days: 'Saturday', hours: '9:00 AM – 2:00 PM' },
  { days: 'Sunday', hours: 'Closed' },
];

const socialMedia = [
  { icon: Instagram, name: 'Instagram', handle: '@radevrealtygroup', href: 'https://instagram.com/radevrealtygroup' },
  { icon: Facebook, name: 'Facebook', handle: 'RADEV Realty Group', href: '#' },
  { icon: Linkedin, name: 'LinkedIn', handle: 'RADEV Realty Group', href: '#' },
];

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
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
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Contact <span className="text-[#C9A24A]">Us</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Let's discuss your next real estate project
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#1C1C1C]/50 backdrop-blur-sm border border-[#C9A24A]/20 rounded-xl p-5 hover:border-[#C9A24A]/50 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-[#C9A24A]/10 p-3 rounded-lg group-hover:bg-[#C9A24A]/20 transition-colors">
                      <info.icon className="text-[#C9A24A]" size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="text-white/60 text-sm mb-1">{info.label}</div>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-white hover:text-[#C9A24A] transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-white">{info.value}</div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="bg-[#1C1C1C]/50 backdrop-blur-sm border border-[#C9A24A]/20 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#C9A24A]/10 p-3 rounded-lg">
                  <Clock className="text-[#C9A24A]" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Business Hours</h3>
              </div>
              <div className="space-y-3">
                {businessHours.map((schedule) => (
                  <div key={schedule.days} className="flex justify-between text-white/70">
                    <span>{schedule.days}</span>
                    <span className="text-[#C9A24A]">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="bg-[#1C1C1C]/50 backdrop-blur-sm border border-[#C9A24A]/20 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
              <div className="space-y-3">
                {socialMedia.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/70 hover:text-[#C9A24A] transition-colors group"
                  >
                    <social.icon size={20} className="group-hover:scale-110 transition-transform" />
                    <span>{social.handle}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-[#1C1C1C]/50 backdrop-blur-sm border border-[#C9A24A]/20 rounded-2xl p-8">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0F0F0F] border border-[#C9A24A]/30 rounded-lg px-4 py-3 text-white focus:border-[#C9A24A] focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0F0F0F] border border-[#C9A24A]/30 rounded-lg px-4 py-3 text-white focus:border-[#C9A24A] focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-white mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-[#0F0F0F] border border-[#C9A24A]/30 rounded-lg px-4 py-3 text-white focus:border-[#C9A24A] focus:outline-none transition-colors"
                    placeholder="+91 12345 67890"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-[#0F0F0F] border border-[#C9A24A]/30 rounded-lg px-4 py-3 text-white focus:border-[#C9A24A] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#C9A24A] text-[#0F0F0F] py-4 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-[#d4b05f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send size={20} />
                </motion.button>
              </div>
            </form>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="mt-8 rounded-2xl overflow-hidden border border-[#C9A24A]/20"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3867724774387!2d78.3888!3d17.4485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI2JzU0LjYiTiA3OMKwMjMnMTkuNyJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RADEV Realty Group Location"
              ></iframe>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
