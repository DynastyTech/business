import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Building, Globe, Target, Users, Zap } from 'lucide-react';
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
      title: "Excellence",
      description: "Founded by distinguished graduate with 18 distinctions"
    },
    {
      icon: Building,
      title: "Enterprise Experience",
      description: "IBM South Africa expertise in Software, DevOps, Data & AI"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Revolutionizing Civil Engineering Industry Worldwide"
    },
    {
      icon: Target,
      title: "Quality Focus",
      description: "Top-notch solutions that exceed client expectations"
    }
  ];

  const values = [
    {
      icon: Users,
      title: "Collaboration",
      description: "Thriving in team environments with strong leadership"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge technology"
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
              className="mb-6"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
                About <span className="gradient-text">Dynasty Tech Solutions</span>
              </h2>
              <p className="text-lg text-secondary-600 dark:text-gray-300 leading-relaxed">
                Dynasty Tech Solutions is a cutting-edge technology consulting firm that specializes 
                in software development, AI consulting, and digital transformation. Founded by a 
                distinguished graduate with exceptional expertise from IBM South Africa and Nelson 
                Mandela University, we ensure every project exceeds expectations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8"
            >
              <h3 className="text-xl font-semibold text-secondary-800 dark:text-gray-200 mb-4">
                Our Mission
              </h3>
              <p className="text-secondary-600 dark:text-gray-300 leading-relaxed">
                To revolutionize industries through innovative technology solutions. We're currently 
                developing a groundbreaking Civil Engineering application that will transform the 
                entire industry on a global scale. Our commitment to quality, innovation, and 
                client success drives everything we do.
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

          {/* Right Column - Image and Values */}
          <motion.div variants={itemVariants} className="space-y-8">
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

            {/* Company Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-secondary-800 dark:text-white text-center">
                Our Core Values
              </h3>
              <div className="space-y-3">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, x: 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                    transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-secondary-50 dark:bg-gray-800 card-hover-enhanced"
                  >
                    <div className="w-10 h-10 icon-gradient-box flex-shrink-0">
                      <value.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-800 dark:text-white text-sm">
                        {value.title}
                      </h4>
                      <p className="text-xs text-secondary-600 dark:text-gray-300">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
