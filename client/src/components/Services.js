import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Globe, 
  Smartphone, 
  Brain, 
  Users, 
  Database, 
  Cloud, 
  Shield, 
  Zap,
  Code,
  BarChart3,
  Cpu,
  Network
} from 'lucide-react';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 2,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const services = [
    {
      icon: Globe,
      title: "Full-Stack Web Development",
      description: "Complete web applications with modern frameworks, responsive design, and scalable architecture. Delivered within 7 days guaranteed.",
      features: ["React, Angular, Node.js", "Responsive Design", "SEO Optimization", "Performance Tuning", "7-Day Delivery Guarantee"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native iOS and Android applications with cross-platform solutions using Flutter and React Native.",
      features: ["iOS & Android Apps", "Flutter Development", "React Native", "App Store Optimization"]
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Custom AI solutions, machine learning models, and intelligent automation for business processes.",
      features: ["Custom AI Models", "Machine Learning", "Process Automation", "Data Analytics"]
    },
    {
      icon: Users,
      title: "Technology Consulting",
      description: "Strategic technology guidance to help businesses grow and adopt cutting-edge solutions.",
      features: ["Digital Transformation", "Technology Strategy", "Process Optimization", "Team Training"]
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Data infrastructure, analytics platforms, and business intelligence solutions.",
      features: ["Data Warehousing", "ETL Pipelines", "Business Intelligence", "Data Visualization"]
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "AWS cloud infrastructure, DevOps automation, and scalable cloud architecture.",
      features: ["AWS Services", "DevOps Automation", "CI/CD Pipelines", "Infrastructure as Code"]
    }
  ];

  const specialServices = [
    {
      icon: Shield,
      title: "Custom Solutions",
      description: "We build anything your business requires, even non-existing applications that revolutionize industries."
    },
    {
      icon: Zap,
      title: "Revolutionary Projects",
      description: "Currently developing a Civil Engineering app that will transform the entire industry globally."
    }
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-secondary-50 to-primary-50 dark:from-gray-900 dark:to-gray-800">
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
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-secondary-600 dark:text-gray-300 max-w-3xl mx-auto">
            From concept to deployment, we deliver comprehensive technology solutions that drive 
            business growth and innovation. Our expertise spans the entire technology spectrum.
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg service-card-hover h-full border border-secondary-100 dark:border-gray-700">
                {/* Icon */}
                <div className="w-16 h-16 icon-gradient-box mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-4 group-hover:text-primary-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-secondary-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 + featureIndex * 0.05 }}
                      className="flex items-center text-sm text-secondary-600"
                    >
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Special Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-secondary-900 mb-8">
            <span className="gradient-text">Special Capabilities</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {specialServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-2 border-accent-200 dark:border-accent-600 service-card-hover"
              >
                <div className="w-20 h-20 icon-gradient-box mx-auto mb-6">
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-secondary-900 dark:text-white mb-4">
                  {service.title}
                </h4>
                <p className="text-secondary-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Delivery Guarantee Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center bg-gradient-to-r from-accent-500 to-primary-600 rounded-3xl p-12 text-white mb-8"
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-3xl font-bold">⚡</span>
            </div>
          </div>
          <h3 className="text-3xl font-bold mb-4">
            Lightning-Fast Delivery
          </h3>
          <p className="text-xl text-accent-100 mb-6 max-w-3xl mx-auto">
            We understand that time is money. That's why we guarantee delivery of your website within 
            <span className="font-bold text-white text-2xl mx-2">7 days</span> 
            from project approval.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-200">Day 1-2</div>
              <div className="text-sm text-accent-100">Planning & Design</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-200">Day 3-5</div>
              <div className="text-sm text-accent-100">Development</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-200">Day 6-7</div>
              <div className="text-sm text-accent-100">Testing & Launch</div>
            </div>
          </div>
          <p className="text-lg text-accent-100 font-medium">
            Quality never compromised for speed - we deliver both!
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
