import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { 
  Globe, 
  Smartphone, 
  Brain, 
  Users, 
  Database, 
  Cloud, 
  Shield, 
  Zap
} from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import './ServicesCarousel.css';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary-900 dark:text-white mb-3 sm:mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-secondary-600 dark:text-gray-300 max-w-3xl mx-auto">
            From concept to deployment, we deliver comprehensive technology solutions that drive 
            business growth and innovation. Our expertise spans the entire technology spectrum.
          </p>
        </motion.div>

        {/* Services Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="services-carousel-section mb-16"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            loop={true}
            className="services-swiper"
          >
            {services.map((service, index) => (
              <SwiperSlide key={service.title}>
                <motion.div
                  className="service-card-carousel"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon Header */}
                  <div className="service-icon-container">
                    <service.icon />
                  </div>

                  {/* Content */}
                  <div className="service-info">
                    <h3>{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                    
                    {/* Features */}
                    <ul className="service-features">
                      {service.features.slice(0, 4).map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Special Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-secondary-900 dark:text-white mb-6 sm:mb-8">
            <span className="gradient-text">Special Capabilities</span>
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
            {specialServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-5 sm:p-8 shadow-lg border-2 border-accent-200 dark:border-accent-600 service-card-hover"
              >
                <div className="w-14 h-14 sm:w-16 md:w-20 sm:h-16 md:h-20 icon-gradient-box mx-auto mb-4 sm:mb-6">
                  <service.icon className="w-7 h-7 sm:w-8 md:w-10 sm:h-8 md:h-10 text-white" />
                </div>
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-secondary-900 dark:text-white mb-3 sm:mb-4">
                  {service.title}
                </h4>
                <p className="text-sm sm:text-base text-secondary-600 dark:text-gray-300 leading-relaxed">
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
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center bg-gradient-to-r from-accent-500 to-primary-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-white"
        >
          <div className="flex justify-center mb-3 sm:mb-4">
            <div className="w-12 h-12 sm:w-14 md:w-16 sm:h-14 md:h-16 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-xl sm:text-2xl md:text-3xl font-bold">⚡</span>
            </div>
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
            Lightning-Fast Delivery
          </h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-accent-100 mb-4 sm:mb-6 max-w-3xl mx-auto">
            We understand that time is money. That's why we guarantee delivery of your website within 
            <span className="font-bold text-white text-lg sm:text-xl md:text-2xl mx-1 sm:mx-2">7 days</span> 
            from project approval.
          </p>
          <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto mb-4 sm:mb-6">
            <div className="text-center">
              <div className="text-base sm:text-lg md:text-2xl font-bold text-accent-200">Day 1-2</div>
              <div className="text-xs sm:text-sm text-accent-100">Planning & Design</div>
            </div>
            <div className="text-center">
              <div className="text-base sm:text-lg md:text-2xl font-bold text-accent-200">Day 3-5</div>
              <div className="text-xs sm:text-sm text-accent-100">Development</div>
            </div>
            <div className="text-center">
              <div className="text-base sm:text-lg md:text-2xl font-bold text-accent-200">Day 6-7</div>
              <div className="text-xs sm:text-sm text-accent-100">Testing & Launch</div>
            </div>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-accent-100 font-medium">
            Quality never compromised for speed - we deliver both!
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
