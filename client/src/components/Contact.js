import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Mail, 
  Github, 
  Linkedin, 
  MapPin, 
  Phone, 
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitted: true, success: true, message: 'Thank you! Your message has been sent successfully.' });
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      });
      setFormStatus({ submitted: false, success: false, message: '' });
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "lraseemela@gmail.com",
      link: "mailto:lraseemela@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "@HackerWithDrip",
      link: "https://github.com/HackerWithDrip",
      color: "from-gray-700 to-gray-900"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Lionel Raseemela",
      link: "https://www.linkedin.com/in/lionel-raseemela-46090ab9/",
      color: "from-blue-600 to-blue-800"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Sandton, Gauteng, South Africa",
      link: null,
      color: "from-green-500 to-emerald-500"
    }
  ];

  const services = [
    "Full-Stack Web Development",
    "Mobile App Development (iOS & Android)",
    "AI & Machine Learning Consulting",
    "Technology Consulting",
    "Data Engineering",
    "Cloud Solutions",
    "Custom Software Development",
    "Digital Transformation"
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-secondary-50 to-primary-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-secondary-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business with innovative technology solutions? 
            Let's discuss your project and explore how we can help you achieve your goals.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16"
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg contact-card-hover">
              <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-6">
                Start Your Project
              </h3>

              {formStatus.submitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`mb-6 p-4 rounded-lg flex items-center space-x-3 ${
                    formStatus.success 
                      ? 'bg-green-100 text-green-800 border border-green-200' 
                      : 'bg-red-100 text-red-800 border border-red-200'
                  }`}
                >
                  {formStatus.success ? (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-600" />
                  )}
                  <span className="font-medium">{formStatus.message}</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-secondary-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-secondary-900 dark:text-white placeholder-secondary-500 dark:placeholder-gray-400"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-secondary-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-secondary-900 dark:text-white placeholder-secondary-500 dark:placeholder-gray-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-secondary-700 dark:text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-secondary-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-secondary-900 dark:text-white placeholder-secondary-500 dark:placeholder-gray-400"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-secondary-700 dark:text-gray-300 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-secondary-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-secondary-900 dark:text-white"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-700 dark:text-gray-300 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                                          className="w-full px-4 py-3 border border-secondary-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none bg-white dark:bg-gray-700 text-secondary-900 dark:text-white placeholder-secondary-500 dark:placeholder-gray-400"
                      placeholder="Tell us about your project, requirements, and goals..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full btn-primary text-lg py-4 flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="order-1 lg:order-2">
            <div className="space-y-8">
              {/* Company Info */}
              <div className="bg-white rounded-2xl p-8 shadow-lg contact-card-hover">
                <h3 className="text-2xl font-bold text-secondary-900 mb-6">
                  Dynasty Tech Solutions & Consulting
                </h3>
                <p className="text-secondary-600 mb-6 leading-relaxed">
                  We specialize in building innovative technology solutions that drive business growth. 
                  From web applications to AI-powered systems, we deliver quality that exceeds expectations.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">DT</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900">Lionel Raseemela</h4>
                    <p className="text-sm text-secondary-600">Founder & CEO</p>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="bg-white rounded-2xl p-8 shadow-lg contact-card-hover">
                <h3 className="text-xl font-bold text-secondary-900 mb-6">
                  Get In Touch
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, x: 30 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      className="flex items-center space-x-4"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-secondary-900 text-sm">
                          {info.title}
                        </h4>
                        {info.link ? (
                          <a
                            href={info.link}
                            target={info.link.startsWith('http') ? "_blank" : "_self"}
                            rel={info.link.startsWith('http') ? "noopener noreferrer" : ""}
                            className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-300"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-secondary-600 font-medium">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quick Response */}
              <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 text-white text-center">
                <h3 className="text-xl font-bold mb-4">
                  Quick Response Guarantee
                </h3>
                <p className="text-primary-100 mb-6">
                  We typically respond to all inquiries within 24 hours. 
                  For urgent projects, we're available for immediate consultation.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('mailto:lraseemela@gmail.com', '_blank')}
                  className="bg-white text-primary-600 font-bold py-3 px-6 rounded-xl hover:shadow-2xl transition-all duration-300"
                >
                  Email Now
                </motion.button>
              </div>

              {/* Delivery Guarantee */}
              <div className="bg-gradient-to-r from-accent-500 to-primary-600 rounded-2xl p-8 text-white text-center">
                <div className="flex justify-center mb-4">
                  <span className="text-4xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold mb-4">
                  7-Day Website Delivery
                </h3>
                <p className="text-accent-100 mb-4">
                  Get your professional website up and running in just 7 days. 
                  Quality and speed - we deliver both!
                </p>
                <div className="bg-white/20 rounded-lg p-3 mb-4">
                  <span className="text-sm font-medium">
                    🚀 Fast • 💎 Quality • ✅ Guaranteed
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-secondary-900 mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-lg text-secondary-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our innovative solutions can revolutionize your industry 
            and drive unprecedented growth for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary text-lg px-8 py-4"
            >
              Start Your Project
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/HackerWithDrip"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-lg px-8 py-4 flex items-center"
            >
              <Github className="w-5 h-5 mr-2" />
              View GitHub
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
