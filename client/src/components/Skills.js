import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, 
  Database, 
  Cloud, 
  Smartphone, 
  Brain, 
  Shield,
  Zap,
  Globe,
  Server,
  Cpu
} from 'lucide-react';

const Skills = () => {
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
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 95, years: "4+ years" },
        { name: "C#", level: 90, years: "3+ years" },
        { name: "TypeScript", level: 88, years: "3+ years" },
        { name: "JavaScript", level: 92, years: "4+ years" },
        { name: "Python", level: 85, years: "3+ years" },
        { name: "Dart", level: 80, years: "2+ years" }
      ]
    },
    {
      icon: Globe,
      title: "Web Technologies",
      skills: [
        { name: "HTML5", level: 95, years: "4+ years" },
        { name: "CSS3", level: 90, years: "4+ years" },
        { name: "Angular", level: 88, years: "3+ years" },
        { name: "Node.js", level: 85, years: "3+ years" },
        { name: "React", level: 82, years: "2+ years" }
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: [
        { name: "Flutter", level: 88, years: "2+ years" },
        { name: "Android Studio", level: 80, years: "2+ years" },
        { name: "React Native", level: 75, years: "1+ years" }
      ]
    },
    {
      icon: Database,
      title: "Databases & Data",
      skills: [
        { name: "MySQL", level: 90, years: "3+ years" },
        { name: "PostgreSQL", level: 85, years: "3+ years" },
        { name: "Firebase", level: 80, years: "2+ years" },
        { name: "SQL", level: 88, years: "3+ years" },
        { name: "SQLite", level: 82, years: "2+ years" }
      ]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: 85, years: "2+ years" },
        { name: "EC2 & S3", level: 80, years: "2+ years" },
        { name: "Docker", level: 75, years: "1+ years" },
        { name: "CI/CD", level: 78, years: "2+ years" }
      ]
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      skills: [
        { name: "Machine Learning", level: 80, years: "2+ years" },
        { name: "Data Science", level: 75, years: "2+ years" },
        { name: "AI Integration", level: 82, years: "2+ years" }
      ]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      skills: [
        { name: "Ethical Hacking", level: 85, years: "3+ years" },
        { name: "Security Testing", level: 80, years: "2+ years" },
        { name: "Vulnerability Assessment", level: 78, years: "2+ years" }
      ]
    },
    {
      icon: Server,
      title: "Tools & Platforms",
      skills: [
        { name: "Git & GitHub", level: 92, years: "4+ years" },
        { name: "VS Code", level: 90, years: "4+ years" },
        { name: "IntelliJ", level: 85, years: "3+ years" },
        { name: "Postman", level: 80, years: "2+ years" },
        { name: "Figma", level: 75, years: "2+ years" }
      ]
    }
  ];

  const expertiseAreas = [
    {
      icon: Zap,
      title: "Platform Engineering",
      description: "Comprehensive expertise in software, DevOps, data & AI, and integration engineering at IBM South Africa."
    },
    {
      icon: Cpu,
      title: "Full-Stack Development",
      description: "End-to-end development from database design to user interface, ensuring scalable and maintainable solutions."
    },
    {
      icon: Brain,
      title: "AI & Automation",
      description: "Implementing intelligent solutions that streamline business processes and enhance decision-making capabilities."
    }
  ];

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-secondary-50 to-primary-50 dark:from-gray-900 dark:to-gray-800">
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
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-lg text-secondary-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our comprehensive skill set spans the entire technology spectrum, from frontend development 
            to AI integration, ensuring we can tackle any technical challenge your business faces.
          </p>
        </motion.div>

        {/* Expertise Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
              className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-20 h-20 icon-gradient-box mx-auto mb-6">
                <area.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-4">
                {area.title}
              </h3>
              <p className="text-secondary-600 leading-relaxed">
                {area.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg skill-card-hover"
            >
              {/* Category Header */}
              <div className="w-16 h-16 icon-gradient-box mb-6">
                <category.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-6">
                {category.title}
              </h3>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-secondary-700">
                        {skill.name}
                      </span>
                      <span className="text-xs text-secondary-500">
                        {skill.years}
                      </span>
                    </div>
                    
                    {/* Skill Bar */}
                    <div className="w-full bg-secondary-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 1.0 + index * 0.1 + skillIndex * 0.05 }}
                        className="h-2 rounded-full bg-gradient-to-r from-teal-400 via-blue-500 to-amber-400"
                      />
                    </div>
                    
                    <div className="text-right">
                      <span className="text-xs font-medium text-primary-600">
                        {skill.level}%
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-secondary-900 mb-8">
            Additional <span className="gradient-text">Capabilities</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              "Business Intelligence",
              "Agile Methodologies",
              "Team Leadership",
              "Problem Solving",
              "Mathematics Tutoring",
              "IT Training",
              "University Mentoring",
              "Project Management"
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 1.4 + index * 0.05 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md skill-card-hover border border-secondary-100 dark:border-gray-700"
              >
                                  <span className="text-secondary-700 dark:text-gray-300 font-medium text-sm">
                    {skill}
                  </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
