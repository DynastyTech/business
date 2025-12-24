import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Music, 
  Gamepad2, 
  Users, 
  BookOpen, 
  Heart, 
  Zap,
  Headphones,
  Trophy,
  Lightbulb,
  Target
} from 'lucide-react';

const Hobbies = () => {
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

  const hobbies = [
    {
      icon: Music,
      title: "Part-Time DJ",
      description: "Passionate about all genres of music, creating unforgettable experiences through sound and rhythm. From electronic to hip-hop, jazz to rock - every genre tells a story.",
      details: [
        "All Genre Specialist",
        "Event Entertainment",
        "Music Production",
        "Crowd Engagement"
      ],
      color: "from-purple-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      icon: Gamepad2,
      title: "Digital & Board Games",
      description: "Strategic thinking through gaming - both digital and traditional board games. Understanding complex systems and developing problem-solving skills through interactive entertainment.",
      details: [
        "Strategic Gaming",
        "Problem Solving",
        "System Analysis",
        "Competitive Play"
      ],
      color: "from-blue-500 to-cyan-500",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
    },
    {
      icon: Users,
      title: "Helping Others at Work",
      description: "Dedicated to supporting colleagues and fostering a collaborative work environment. Sharing knowledge and expertise to help the team succeed together.",
      details: [
        "Team Collaboration",
        "Knowledge Sharing",
        "Problem Resolution",
        "Support & Guidance"
      ],
      color: "from-green-500 to-emerald-500",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
    },
    {
      icon: BookOpen,
      title: "Mentoring & Tutoring",
      description: "Passionate about education and helping others grow. Serving as a mathematics and computer science tutor, university mentor, and IT trainer.",
      details: [
        "Mathematics Tutoring",
        "Computer Science Education",
        "University Mentoring",
        "IT Training"
      ],
      color: "from-orange-500 to-red-500",
      image: "https://images.unsplash.com/photo-1523240798132-00581f4bff25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  const personalTraits = [
    {
      icon: Heart,
      title: "Passion for Technology",
      description: "Unwavering dedication to innovation and technological advancement"
    },
    {
      icon: Zap,
      title: "Continuous Learning",
      description: "Always exploring new technologies and expanding knowledge base"
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on delivering exceptional results and exceeding expectations"
    },
    {
      icon: Lightbulb,
      title: "Creative Problem Solver",
      description: "Approaching challenges with innovative thinking and unique solutions"
    }
  ];

  return (
    <section id="hobbies" className="section-padding bg-white dark:bg-gray-900">
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
            Beyond <span className="gradient-text">Technology</span>
          </h2>
          <p className="text-lg text-secondary-600 dark:text-gray-300 max-w-3xl mx-auto">
            While technology is our passion, we believe in maintaining a balanced life that includes 
            creative pursuits, helping others, and continuous personal growth.
          </p>
        </motion.div>

        {/* Main Hobbies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 mb-16"
        >
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.title}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg card-hover-enhanced overflow-hidden border border-secondary-100 dark:border-gray-700">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={hobby.image}
                    alt={hobby.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${hobby.color} flex items-center justify-center`}>
                      <hobby.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4 group-hover:text-primary-600 transition-colors duration-300">
                    {hobby.title}
                  </h3>
                  
                  <p className="text-secondary-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {hobby.description}
                  </p>

                  {/* Details */}
                  <div className="grid grid-cols-2 gap-3">
                    {hobby.details.map((detail, detailIndex) => (
                      <motion.div
                        key={detail}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, delay: 0.8 + index * 0.2 + detailIndex * 0.1 }}
                        className="flex items-center space-x-2"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${hobby.color}`}></div>
                        <span className="text-sm text-secondary-700 font-medium">
                          {detail}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Personal Traits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-secondary-900 mb-8">
            Personal <span className="gradient-text">Traits</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {personalTraits.map((trait, index) => (
              <motion.div
                key={trait.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.2 }}
                className="text-center bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 border border-primary-100 dark:border-gray-600 card-hover-enhanced"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <trait.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-secondary-900 dark:text-white mb-2">
                  {trait.title}
                </h4>
                <p className="text-sm text-secondary-600 dark:text-gray-300">
                  {trait.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Special Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="text-center bg-gradient-to-r from-accent-500 to-primary-600 rounded-3xl p-12 text-white"
        >
          <div className="flex justify-center mb-4">
            <Headphones className="w-12 h-12 text-accent-200" />
          </div>
          <h3 className="text-3xl font-bold mb-4">
            "I won't rest if my app is not working"
          </h3>
          <p className="text-xl text-accent-100 max-w-3xl mx-auto">
            This dedication to quality and perfection drives everything we do at Dynasty Tech Solutions. 
            We're committed to delivering solutions that not only work flawlessly but exceed expectations.
          </p>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 2.0 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-secondary-600 mb-6">
            Ready to work with a team that's passionate about both technology and people?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-lg px-8 py-4"
          >
            Let's Connect
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hobbies;
