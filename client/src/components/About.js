import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users } from 'lucide-react';
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

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 items-center justify-items-center"
        >
          {/* Profile Image */}
          <motion.div variants={itemVariants} className="flex items-center justify-center">
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
