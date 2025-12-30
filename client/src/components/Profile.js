import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowLeft, Award, GraduationCap, Calendar, Users, Code, Heart, BookOpen, Globe, Mail, Music, Gamepad2, Zap, Headphones, Lightbulb, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
    rootMargin: '50px 0px',
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

  const education = [
    {
      degree: "BSc. Computer Science",
      institution: "Nelson Mandela University",
      year: "2023",
      achievements: "18 Distinctions",
      description: "Graduated with exceptional academic performance, demonstrating excellence across all subjects."
    },
    {
      degree: "Mathematics & Applied Mathematics",
      institution: "Nelson Mandela University",
      year: "2023",
      achievements: "Top Performer",
      description: "Strong foundation in mathematical concepts and their practical applications."
    }
  ];

  const experience = [
    {
      role: "Platform Engineer",
      company: "IBM South Africa",
      period: "2023 - Present",
      description: "Specializing in Software, DevOps, Data & AI, and Integration technologies.",
      achievements: ["Leading platform development initiatives", "Implementing DevOps best practices", "AI and data integration solutions"]
    }
  ];

  const personalInterests = [
    {
      icon: Code,
      title: "Technology & Innovation",
      description: "Passionate about emerging technologies, AI, and software development."
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "Always exploring new technologies and methodologies to stay ahead of the curve."
    },
    {
      icon: Heart,
      title: "Problem Solving",
      description: "Enjoys tackling complex challenges and finding innovative solutions."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Committed to creating technology solutions that benefit people worldwide."
    }
  ];

  const skills = [
    "Software Development", "DevOps", "Data Science", "AI & Machine Learning",
    "System Integration", "Cloud Computing", "Mathematics", "Problem Solving",
    "Leadership", "Team Collaboration", "Innovation", "Strategic Thinking"
  ];

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
      image: "https://images.unsplash.com/photo-1523240798132-00581f4bff25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fFit=crop&w=2070&q=80"
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
    <section className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20 lg:pt-24">
      <div className="container-custom py-8 lg:py-16">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onClick={() => navigate('/')}
          className="flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </motion.button>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            {/* Profile Image */}
            <div className="relative w-64 h-64 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full blur-xl opacity-30"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl">
                <img
                  src="/profile-image.jpeg"
                  alt="Lionel Raseemela - Founder & CEO"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback if image fails to load */}
                <div className="w-full h-full bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center" style={{ display: 'none' }}>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-xl font-bold text-secondary-800 dark:text-white">Lionel Raseemela</h1>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">Founder & CEO</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Name and Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 dark:text-white mb-3 sm:mb-4">
              Lionel <span className="gradient-text">Raseemela</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-primary-600 dark:text-primary-400 font-semibold mb-4 sm:mb-6">
              Founder & CEO at Dynasty Tech Solutions
            </p>
            
            {/* Description */}
            <p className="text-lg text-secondary-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A distinguished graduate with 18 distinctions in Computer Science, Mathematics, and Applied Mathematics. 
              Currently serving as a Platform Engineer at IBM South Africa, specializing in Software, DevOps, Data & AI, 
              and Integration technologies. Passionate about revolutionizing industries through innovative solutions.
            </p>
          </motion.div>

          {/* Education Section */}
          <motion.div variants={itemVariants} className="mb-12 sm:mb-16">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-secondary-800 dark:text-white mb-6 sm:mb-8 flex items-center justify-center">
              <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600 mr-2 sm:mr-3 flex-shrink-0" />
              <span>Education & Academic Excellence</span>
            </h3>
            <div className="grid lg:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg card-hover-enhanced border border-secondary-100 dark:border-gray-700"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mr-4">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-secondary-800 dark:text-white mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-primary-600 dark:text-primary-400 font-medium text-sm">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-secondary-500 dark:text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {edu.year}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4 p-3 bg-accent-50 dark:bg-accent-900/20 rounded-lg">
                    <Award className="w-5 h-5 text-accent-500 mr-2 flex-shrink-0" />
                    <span className="text-accent-600 dark:text-accent-400 font-semibold text-sm">
                      {edu.achievements}
                    </span>
                  </div>
                  
                  <p className="text-secondary-600 dark:text-gray-300 leading-relaxed text-sm">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div variants={itemVariants} className="mb-12 sm:mb-16">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-secondary-800 dark:text-white mb-6 sm:mb-8 flex items-center justify-center">
              <Code className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600 mr-2 sm:mr-3 flex-shrink-0" />
              <span>Professional Experience</span>
            </h3>
            <div className="max-w-3xl mx-auto">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg card-hover-enhanced border border-secondary-100 dark:border-gray-700"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center mb-6 gap-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Code className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-secondary-800 dark:text-white mb-1 sm:mb-2">
                        {exp.role}
                      </h4>
                      <p className="text-primary-600 dark:text-primary-400 font-medium text-base sm:text-lg">
                        {exp.company}
                      </p>
                    </div>
                    <div className="sm:text-right">
                      <div className="inline-flex items-center text-secondary-500 dark:text-gray-400 text-xs sm:text-sm bg-secondary-50 dark:bg-gray-700 px-3 py-2 rounded-full">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        {exp.period}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-secondary-600 dark:text-gray-300 leading-relaxed text-lg mb-6">
                    {exp.description}
                  </p>
                  
                  <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-4">
                    <h5 className="font-semibold text-primary-700 dark:text-primary-300 mb-3">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-secondary-700 dark:text-gray-200 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Personal Interests Section */}
          <motion.div variants={itemVariants} className="mb-12 sm:mb-16">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-secondary-800 dark:text-white mb-6 sm:mb-8 flex items-center justify-center">
              <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600 mr-2 sm:mr-3 flex-shrink-0" />
              <span>Personal Interests & Values</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {personalInterests.map((interest, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg card-hover-enhanced border border-secondary-100 dark:border-gray-700"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <interest.icon className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-secondary-800 dark:text-white mb-3 text-center">
                    {interest.title}
                  </h4>
                  <p className="text-secondary-600 dark:text-gray-300 leading-relaxed text-center">
                    {interest.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div variants={itemVariants} className="mb-12 sm:mb-16">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-secondary-800 dark:text-white mb-6 sm:mb-8 flex items-center justify-center">
              <Award className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600 mr-2 sm:mr-3 flex-shrink-0" />
              <span>Key Skills & Competencies</span>
            </h3>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-secondary-100 dark:border-gray-700">
              <div className="flex flex-wrap gap-4 justify-center">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
                    className="px-6 py-3 bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-semibold border border-primary-200 dark:border-primary-700 hover:from-primary-200 hover:to-accent-200 transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Hobbies Section */}
          <motion.div variants={itemVariants} className="mb-12 sm:mb-16">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-secondary-800 dark:text-white mb-6 sm:mb-8 flex items-center justify-center text-center">
              <Music className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600 mr-2 sm:mr-3 flex-shrink-0" />
              <span>Beyond Technology</span>
            </h3>
            <p className="text-lg text-secondary-600 dark:text-gray-300 mb-8 text-center">
              While technology is my passion, I believe in maintaining a balanced life that includes 
              creative pursuits, helping others, and continuous personal growth.
            </p>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {hobbies.map((hobby, index) => (
                <motion.div
                  key={hobby.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg card-hover-enhanced overflow-hidden border border-secondary-100 dark:border-gray-700">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={hobby.image}
                        alt={hobby.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${hobby.color} flex items-center justify-center`}>
                          <hobby.icon className="w-7 h-7 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-secondary-900 dark:text-white mb-3 group-hover:text-primary-600 transition-colors duration-300">
                        {hobby.title}
                      </h4>
                      
                      <p className="text-secondary-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                        {hobby.description}
                      </p>

                      {/* Details */}
                      <div className="grid grid-cols-2 gap-2">
                        {hobby.details.map((detail, detailIndex) => (
                          <div
                            key={detail}
                            className="flex items-center space-x-2"
                          >
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${hobby.color}`}></div>
                            <span className="text-xs text-secondary-700 dark:text-gray-300 font-medium">
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Personal Traits Section */}
          <motion.div variants={itemVariants} className="mb-12 sm:mb-16">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-secondary-800 dark:text-white mb-6 sm:mb-8 flex items-center justify-center">
              <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600 mr-2 sm:mr-3 flex-shrink-0" />
              <span>Personal Traits & Values</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {personalTraits.map((trait, index) => (
                <motion.div
                  key={trait.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
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
          <motion.div variants={itemVariants} className="mb-16">
            <div className="text-center bg-gradient-to-r from-accent-500 to-primary-600 rounded-3xl p-12 text-white">
              <div className="flex justify-center mb-4">
                <Headphones className="w-12 h-12 text-accent-200" />
              </div>
              <h3 className="text-3xl font-bold mb-4">
                "I won't rest if my app is not working"
              </h3>
              <p className="text-xl text-accent-100 max-w-3xl mx-auto">
                This dedication to quality and perfection drives everything I do. 
                I'm committed to delivering solutions that not only work flawlessly but exceed expectations.
              </p>
            </div>
          </motion.div>

          {/* Contact & Social Section */}
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-2xl font-bold text-secondary-800 dark:text-white mb-6">
              Get in Touch
            </h3>
            <p className="text-secondary-600 dark:text-gray-300 mb-6">
              Interested in collaborating or learning more? Feel free to reach out!
            </p>
            <div className="flex justify-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/#contact')}
                className="btn-primary px-6 py-3 flex items-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Profile;
