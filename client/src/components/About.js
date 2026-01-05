import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Building, Globe, Target, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  const highlights = [
    {
      icon: Award,
      title: "18 Distinctions",
      description: "Distinguished graduate from Nelson Mandela University"
    },
    {
      icon: Building,
      title: "IBM Experience",
      description: "Software, DevOps, Data & AI expertise from IBM South Africa"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Building solutions for clients across South Africa & beyond"
    },
    {
      icon: Target,
      title: "100% Custom Code",
      description: "No templates. Every project built from scratch."
    }
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column - Content */}
          <motion.div variants={itemVariants}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-4 sm:mb-6"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary-900 dark:text-white mb-3 sm:mb-4">
                About <span className="gradient-text">Dynasty Tech</span>
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-secondary-600 dark:text-gray-300 leading-relaxed mb-4">
                I started Dynasty Tech with a simple belief: <strong>every South African business deserves 
                a professional online presence, regardless of budget.</strong>
              </p>
              <p className="text-sm sm:text-base text-secondary-600 dark:text-gray-300 leading-relaxed">
                After graduating from Nelson Mandela University with 18 distinctions and gaining invaluable 
                experience at IBM South Africa working on enterprise-level solutions for major banks and 
                corporations, I noticed a gap in the market. Small businesses were either paying too much 
                or settling for cookie-cutter templates that didn't represent their unique brand.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-6 sm:mb-8"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-secondary-800 dark:text-gray-200 mb-3 sm:mb-4">
                Why I Do This
              </h3>
              <p className="text-sm sm:text-base text-secondary-600 dark:text-gray-300 leading-relaxed">
                I believe technology should empower, not overwhelm. That's why I offer <strong>free consultations</strong> to 
                understand your vision, <strong>transparent pricing</strong> with no hidden costs, and <strong>1 year of 
                free maintenance</strong> so you can focus on what you do best — running your business.
              </p>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  className="text-center p-4 rounded-lg bg-primary-50 dark:bg-gray-800 card-hover-enhanced"
                >
                  <div className="w-12 h-12 icon-gradient-box mx-auto mb-2">
                    <highlight.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-secondary-800 dark:text-white mb-1 text-sm">
                    {highlight.title}
                  </h4>
                  <p className="text-xs text-secondary-600 dark:text-gray-300">
                    {highlight.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div variants={itemVariants} className="flex items-center justify-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/profile')}
                className="relative w-80 h-80 mx-auto group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-primary-500 to-accent-500 rounded-full p-1">
                  <div className="w-full h-full bg-white rounded-full p-2">
                    <div className="w-full h-full bg-gradient-to-br from-primary-100 to-accent-100 rounded-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 icon-gradient rounded-full mx-auto mb-4 flex items-center justify-center">
                          <Users className="w-12 h-12 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-secondary-800 dark:text-white">Lionel Raseemela</h3>
                        <p className="text-primary-600 dark:text-primary-400 font-medium">Founder & CEO</p>
                        <p className="text-xs text-secondary-500 dark:text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          Click to view full profile →
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
