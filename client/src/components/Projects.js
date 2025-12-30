import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ExternalLink, 
  Github, 
  Globe, 
  Smartphone, 
  Gamepad2, 
  Newspaper,
  Plus,
  Star
} from 'lucide-react';

const Projects = () => {
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

  const projects = [
    {
      title: "Mzansi News App",
      description: "A comprehensive news application developed using Flutter with API integration from NewsAPI.org. Keeps users updated about worldwide events with a modern, intuitive interface.",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["Flutter", "Dart", "NewsAPI", "Mobile Development"],
      category: "Mobile App",
      icon: Newspaper,
      github: "https://github.com/DynastyTech/Mzansi_News_App",
      live: null,
      featured: true
    },
    {
      title: "SOS Game",
      description: "An engaging two-player SOS game built with Java. Features strategic gameplay mechanics and a clean, responsive user interface for an immersive gaming experience.",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      technologies: ["Java", "Game Development", "Object-Oriented Programming", "Swing UI"],
      category: "Game Development",
      icon: Gamepad2,
      github: "https://github.com/DynastyTech/SOS-Game",
      live: null,
      featured: true
    },
    {
      title: "Coming Soon - Project 3",
      description: "An innovative project that will showcase cutting-edge technology and creative problem-solving. Stay tuned for this exciting reveal.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      technologies: ["React", "Node.js", "AI/ML", "Cloud Computing"],
      category: "Web Application",
      icon: Plus,
      github: null,
      live: null,
      featured: false
    },
    {
      title: "Coming Soon - Project 4",
      description: "A revolutionary application that will demonstrate advanced data engineering and machine learning capabilities.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["Python", "TensorFlow", "Data Science", "API Development"],
      category: "AI/ML",
      icon: Plus,
      github: null,
      live: null,
      featured: false
    },
    {
      title: "Coming Soon - Project 5",
      description: "An enterprise-level solution showcasing full-stack development expertise and scalable architecture design.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["Full-Stack", "Microservices", "Docker", "AWS"],
      category: "Enterprise",
      icon: Plus,
      github: null,
      live: null,
      featured: false
    },
    {
      title: "Coming Soon - Project 6",
      description: "A cutting-edge project that will push the boundaries of what's possible with modern web technologies.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80",
      technologies: ["Next.js", "TypeScript", "GraphQL", "Real-time"],
      category: "Web Application",
      icon: Plus,
      github: null,
      live: null,
      featured: false
    }
  ];

  const categories = ["All", "Mobile App", "Game Development", "Web Application", "AI/ML", "Enterprise"];

  return (
    <section id="projects" className="section-padding bg-white dark:bg-gray-900">
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-secondary-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our portfolio of innovative projects that demonstrate our technical expertise 
            and creative problem-solving capabilities across various domains.
          </p>
        </motion.div>

        {/* Featured Project Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <Star className="w-6 h-6 text-accent-300 mr-2" />
                <span className="text-accent-200 font-medium">Featured Project</span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Civil Engineering Revolution
              </h3>
              <p className="text-xl text-primary-100 mb-6 max-w-3xl">
                Currently developing a groundbreaking Civil Engineering application that will transform 
                the entire industry on a global scale. This innovative solution will revolutionize 
                how engineers design, plan, and execute infrastructure projects.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {["AI-Powered Design", "Global Collaboration", "Real-time Analytics", "Industry 4.0"].map((tech) => (
                  <span key={tech} className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-primary-600 font-bold py-3 px-6 rounded-xl hover:shadow-2xl transition-all duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg project-card-hover h-full border border-secondary-100 dark:border-gray-700 overflow-hidden">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {project.category}
                      </span>
                      {project.featured && (
                        <Star className="w-5 h-5 text-accent-400 fill-current" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 icon-gradient-box mr-2 flex-shrink-0">
                      <project.icon className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-secondary-900 dark:text-white group-hover:text-primary-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-secondary-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-secondary-100 dark:bg-gray-700 text-secondary-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.github && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-secondary-100 dark:bg-gray-700 hover:bg-secondary-200 dark:hover:bg-gray-600 text-secondary-700 dark:text-gray-300 font-medium py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </motion.a>
                    )}
                    {!project.github && !project.live && (
                      <div className="flex-1 bg-secondary-100 dark:bg-gray-700 text-secondary-500 dark:text-gray-400 font-medium py-2 px-4 rounded-lg flex items-center justify-center">
                        <Plus className="w-4 h-4 mr-2" />
                        Coming Soon
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-secondary-600 dark:text-gray-300 mb-6">
            Have a project in mind? Let's create something amazing together!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-lg px-8 py-4"
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
