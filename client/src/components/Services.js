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
  Coins
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
    },
    {
      icon: Coins,
      title: "Blockchain & Web3",
      description: "Smart contracts, DeFi solutions, NFT platforms, and decentralized applications on Ethereum, Solana, and more.",
      features: ["Smart Contracts", "DeFi & DApps", "NFT Marketplaces", "Token Development"]
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


      </div>
    </section>
  );
};

export default Services;
