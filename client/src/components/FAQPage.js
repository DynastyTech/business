import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqCategories = [
    {
      category: "Pricing & Packages",
      faqs: [
        {
          q: "What are your pricing packages?",
          a: "We offer transparent pricing: AI Integration from R1,000, Starter websites from R2,000, Professional websites from R4,000, E-commerce from R10,000, and Mobile Apps from R15,000. All packages include free domain, hosting, and 1 year maintenance."
        },
        {
          q: "Are there any hidden costs?",
          a: "Absolutely not. Our pricing is completely transparent. What you see is what you pay. Free domain, free hosting, and 1 year maintenance are included in every package."
        },
        {
          q: "What payment terms do you offer?",
          a: "We require a 50% deposit upon agreement to start your project. The remaining 50% is due upon completion and your approval of the final product."
        },
        {
          q: "Do you offer refunds?",
          a: "We work closely with you throughout the project to ensure satisfaction. If we cannot deliver what was agreed upon, we offer a full refund of your deposit."
        }
      ]
    },
    {
      category: "Development Process",
      faqs: [
        {
          q: "How long does it take to build a website?",
          a: "Starter and Professional websites are delivered within 7 days. E-commerce sites take up to 14 days. Mobile apps typically take 21 days. We guarantee our delivery timelines."
        },
        {
          q: "Do you use WordPress or website builders?",
          a: "No. We write 100% custom code for every project. This gives you full ownership, better performance, enhanced security, and complete flexibility. No WordPress, Wix, or third-party builders."
        },
        {
          q: "Will I be able to update my website myself?",
          a: "Yes! We can set up a user-friendly content management system that allows you to easily update text, images, and content without any coding knowledge."
        },
        {
          q: "How do you keep me updated during development?",
          a: "We provide regular progress updates via WhatsApp or email. You'll see your project taking shape and can provide feedback at every stage."
        }
      ]
    },
    {
      category: "Support & Maintenance",
      faqs: [
        {
          q: "What support do you offer after launch?",
          a: "All packages include 1 year of free maintenance and support. This covers bug fixes, minor updates, security patches, and general assistance with your website or app."
        },
        {
          q: "What happens after the 1 year maintenance period?",
          a: "After the first year, you can choose to renew your maintenance plan or manage the website yourself. We'll provide all necessary documentation and training."
        },
        {
          q: "Do you offer hosting?",
          a: "Yes! Free web hosting is included with every website package for the first year. After that, hosting continues at competitive rates."
        },
        {
          q: "Can you help with an existing website?",
          a: "Absolutely. We can help improve, redesign, or add features to existing websites. Contact us for a free assessment."
        }
      ]
    },
    {
      category: "Technical Questions",
      faqs: [
        {
          q: "What technologies do you use?",
          a: "We use modern, industry-standard technologies including React, Node.js, TypeScript, Flutter for mobile apps, and various databases. Our stack ensures fast, secure, and scalable solutions."
        },
        {
          q: "Will my website be mobile-friendly?",
          a: "Yes! Every website we build is fully responsive and works perfectly on all devices - desktops, tablets, and smartphones."
        },
        {
          q: "Do you provide SEO optimization?",
          a: "Yes, basic SEO is included in all packages. This includes proper meta tags, structured data, sitemap, and Google Analytics integration. Advanced SEO services are available upon request."
        },
        {
          q: "Is my website secure?",
          a: "Security is a priority. All websites include SSL certificates, secure coding practices, and regular security updates during the maintenance period."
        }
      ]
    },
    {
      category: "Getting Started",
      faqs: [
        {
          q: "How do I get started?",
          a: "Simply contact us via WhatsApp, email, or our contact form. We'll schedule a free consultation to discuss your project requirements and provide a quote."
        },
        {
          q: "What information do you need from me?",
          a: "We'll need your business details, project goals, any design preferences, content (text and images), and examples of websites you like. Don't worry - we guide you through everything."
        },
        {
          q: "Do you work with businesses outside South Africa?",
          a: "Yes! While we're based in South Africa, we work with clients globally. All communication and development can be done remotely."
        },
        {
          q: "What if I'm not sure what I need?",
          a: "That's what our free consultation is for! We'll help you understand your options and recommend the best solution for your specific needs and budget."
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex, faqIndex) => {
    const key = `${categoryIndex}-${faqIndex}`;
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Everything you need to know about working with Dynasty Tech Solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {category.category}
              </h2>

              <div className="space-y-3">
                {category.faqs.map((faq, faqIndex) => {
                  const isOpen = openIndex === `${categoryIndex}-${faqIndex}`;
                  return (
                    <div
                      key={faqIndex}
                      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFAQ(categoryIndex, faqIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                      >
                        <span className="font-semibold text-gray-900 dark:text-white pr-4">
                          {faq.q}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="px-6 pb-4 text-gray-600 dark:text-gray-300">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <MessageSquare className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We're here to help! Reach out to us and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
              >
                Contact Us
              </Link>
              <a
                href="https://wa.me/27729003705?text=Hi,%20I%20have%20a%20question"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;

