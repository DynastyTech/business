import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Check, 
  Clock, 
  Shield, 
  Smartphone, 
  Search, 
  Zap,
  ArrowRight,
  MessageSquare
} from 'lucide-react';

const CheapWebsitePage = () => {
  const packages = [
    {
      name: "AI Integration",
      price: "From R1,000",
      description: "Add AI to your existing business",
      features: [
        "AI Chatbot Integration",
        "Process Automation",
        "AI-Powered Analytics",
        "Custom AI Solutions",
        "Training & Support",
        "7-Day Delivery"
      ],
      popular: false
    },
    {
      name: "Starter",
      price: "From R2,000",
      description: "Perfect for small businesses & freelancers",
      features: [
        "3-5 Page Website",
        "Mobile Responsive",
        "Contact Form",
        "Basic SEO Setup",
        "Social Media Links",
        "7-Day Delivery"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "From R4,000",
      description: "Ideal for growing businesses",
      features: [
        "5-10 Page Website",
        "Custom Design",
        "Advanced SEO",
        "Blog Functionality",
        "Google Analytics",
        "Email Integration",
        "7-Day Delivery"
      ],
      popular: true
    },
    {
      name: "E-commerce",
      price: "From R10,000",
      description: "For online stores",
      features: [
        "Full Online Store",
        "Product Catalog",
        "Payment Integration",
        "Inventory Management",
        "Order Tracking",
        "SSL Security",
        "14-Day Delivery"
      ],
      popular: false
    },
    {
      name: "Mobile App",
      price: "From R15,000",
      description: "iOS & Android applications",
      features: [
        "Cross-Platform App",
        "iOS & Android",
        "Custom UI Design",
        "Push Notifications",
        "API Integration",
        "App Store Submission",
        "21-Day Delivery"
      ],
      popular: false
    }
  ];

  const benefits = [
    { icon: Clock, title: "7-Day Delivery", description: "Get your website live in just 7 days, guaranteed" },
    { icon: Shield, title: "Quality Guaranteed", description: "Professional design that rivals expensive agencies" },
    { icon: Smartphone, title: "Mobile Responsive", description: "Looks perfect on all devices" },
    { icon: Search, title: "SEO Optimized", description: "Built to rank on Google from day one" },
    { icon: Zap, title: "Fast Loading", description: "Optimized for speed and performance" },
    { icon: MessageSquare, title: "Free Consulting", description: "We align with your business goals first" },
  ];


  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Transparent Pricing<br />
              <span className="text-yellow-400">No Hidden Costs</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
              We believe in complete transparency. Professional websites from <strong>R2,000</strong>. 
              Delivered in <strong>7 days</strong>. What you see is what you pay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
              >
                Get Free Quote
                <ArrowRight size={20} />
              </Link>
              <a
                href="https://wa.me/27729003705?text=Hi,%20I'm%20interested%20in%20a%20cheap%20website"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-colors text-lg"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Packages
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              Transparent pricing. No hidden costs. What you see is what you pay.
            </p>
            <div className="flex flex-col gap-3 justify-center items-center">
              <div className="flex flex-wrap justify-center gap-3">
                <div className="inline-flex items-center gap-2 px-5 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full text-sm font-medium shadow-md">
                  <Shield size={16} />
                  50% deposit to start
                </div>
                <div className="inline-flex items-center gap-2 px-5 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full text-sm font-medium shadow-md">
                  <Zap size={16} />
                  100% Custom Code
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                <div className="inline-flex items-center gap-2 px-5 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full text-sm font-medium shadow-md">
                  <Check size={16} />
                  Free Domain Name
                </div>
                <div className="inline-flex items-center gap-2 px-5 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full text-sm font-medium shadow-md">
                  <Check size={16} />
                  Free Web Hosting
                </div>
                <div className="inline-flex items-center gap-2 px-5 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full text-sm font-medium shadow-md">
                  <Check size={16} />
                  1 Year Maintenance
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              No WordPress, Wix, or 3rd party builders. Built from scratch. You own your code completely.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden ${
                  pkg.popular ? 'ring-2 ring-primary-500' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-primary-500 text-white px-4 py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {pkg.description}
                  </p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary-600">{pkg.price}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                        <Check className="text-green-500 flex-shrink-0" size={20} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
                      pkg.popular
                        ? 'bg-primary-600 text-white hover:bg-primary-700'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Our Cheap Website Service?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Affordable doesn't mean low quality. Here's what you get:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg"
              >
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="text-primary-600 dark:text-primary-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "How can you offer such cheap websites?",
                a: "We use efficient development processes, modern tools, and proven templates that we customize. This allows us to deliver quality websites fast and affordably."
              },
              {
                q: "Is there a catch with cheap website development?",
                a: "No catch! Our prices are transparent and all-inclusive. You get a fully functional, professional website with free domain, free hosting, and 1 year maintenance included."
              },
              {
                q: "How long does it take to build my website?",
                a: "Most websites are delivered within 7 days. E-commerce sites may take up to 14 days. We guarantee our delivery times."
              },
              {
                q: "Do you offer support after the website is live?",
                a: "Yes! All our packages include 1 year of free maintenance and support. We'll keep your website running smoothly and help with any updates you need."
              },
              {
                q: "Can I update the website myself?",
                a: "Absolutely! We can set up a content management system (CMS) so you can easily update text, images, and content without coding knowledge."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {faq.q}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Your Cheap Website?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Get a professional website from R2,000. Free consultation included.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              Get Free Quote
              <ArrowRight size={20} />
            </Link>
            <a
              href="tel:+27729003705"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors text-lg"
            >
              Call: 072 900 3705
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CheapWebsitePage;

