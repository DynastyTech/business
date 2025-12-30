import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Mail, 
  Github, 
  Linkedin, 
  MapPin, 
  ArrowUp,
  Phone
} from 'lucide-react';

// WhatsApp Icon Component
const WhatsAppIcon = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Services', href: '#services' },
      { name: 'Projects', href: '#projects' },
      { name: 'Contact', href: '#contact' }
    ],
    services: [
      'Web Development',
      'Mobile Apps',
      'AI Consulting',
      'Data Engineering',
      'Cloud Solutions',
      'Custom Software'
    ],
    contact: [
      { icon: Mail, text: 'lraseemela@gmail.com', href: 'mailto:lraseemela@gmail.com' },
      { icon: Phone, text: '+27 72 900 3705', href: 'tel:+27729003705' },
      { icon: MapPin, text: 'Sandton, Gauteng, South Africa', href: null },
      { icon: Github, text: '@DynastyTech', href: 'https://github.com/DynastyTech' },
      { icon: Linkedin, text: 'Lionel Raseemela', href: 'https://www.linkedin.com/in/lionel-raseemela-46090ab9/' }
    ]
  };

  return (
    <footer className="bg-secondary-900 dark:bg-gray-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 icon-gradient-box">
                    <Code className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-2xl font-bold text-white">
                    Dynasty Tech
                  </span>
                </div>
                <p className="text-secondary-300 leading-relaxed max-w-md">
                  Transforming businesses through innovative technology solutions. We deliver 
                  cutting-edge software development, AI consulting, and digital transformation 
                  services that drive unprecedented growth.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-3"
              >
                {footerLinks.contact.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 icon-gradient-box flex-shrink-0">
                      <contact.icon className="w-4 h-4 text-white" />
                    </div>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        target={contact.href.startsWith('http') ? "_blank" : "_self"}
                        rel={contact.href.startsWith('http') ? "noopener noreferrer" : ""}
                        className="text-secondary-300 hover:text-primary-400 transition-colors duration-300"
                      >
                        {contact.text}
                      </a>
                    ) : (
                      <span className="text-secondary-300">
                        {contact.text}
                      </span>
                    )}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-secondary-300 hover:text-primary-400 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-2">
                {footerLinks.services.map((service, index) => (
                  <li key={index}>
                    <span className="text-secondary-300">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary-700"></div>

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center md:text-left"
            >
              <p className="text-secondary-400 text-sm">
                © {currentYear} Dynasty Tech Solutions & Consulting Pty Ltd. All rights reserved.
              </p>
              
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center space-x-6"
            >
              <a
                href="https://github.com/DynastyTech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-400 hover:text-primary-400 transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/lionel-raseemela-46090ab9/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-400 hover:text-primary-400 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:lraseemela@gmail.com"
                className="text-secondary-400 hover:text-primary-400 transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/27729003705"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-24 right-4 sm:right-8 w-12 h-12 sm:w-14 sm:h-14 whatsapp-btn text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center group"
        title="Chat on WhatsApp"
      >
        <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7" />
        <span className="absolute right-14 sm:right-16 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden sm:block">
          Chat on WhatsApp
        </span>
      </motion.a>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3, delay: 0.8 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-4 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 icon-gradient text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center"
      >
        <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
      </motion.button>
    </footer>
  );
};

export default Footer;
