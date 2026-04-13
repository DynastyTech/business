import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ClientLogos = () => {
  const shouldReduceMotion = useReducedMotion();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const clients = [
    { name: "IBM", logo: "/Logos/IBM.png" },
    { name: "FNB", logo: "/Logos/FNB.png" },
    { name: "Nedbank", logo: "/Logos/Nedbank.png" },
    { name: "Nelson Mandela University", logo: "/Logos/NMU.png" },
    { name: "Munsoft", logo: "/Logos/Munsoft.png" },
  ];

  const repeatedClients = [...clients, ...clients];
  const carouselDuration = 20;

  const renderTrack = ({ focused }) => (
    <motion.div
      className="flex w-max items-center gap-6 sm:gap-8 md:gap-12"
      animate={shouldReduceMotion ? undefined : { x: ['0%', '-50%'] }}
      transition={
        shouldReduceMotion
          ? undefined
          : { duration: carouselDuration, repeat: Infinity, ease: 'linear' }
      }
    >
      {repeatedClients.map((client, index) => (
        <div
          key={`${client.name}-${index}`}
          className="w-36 sm:w-40 md:w-48 flex-shrink-0 flex flex-col items-center"
        >
          <div
            className={`h-16 md:h-20 flex items-center justify-center transition-all duration-300 ${
              focused ? 'grayscale-0 opacity-100' : 'grayscale opacity-60'
            }`}
          >
            <img
              src={client.logo}
              alt={client.name}
              loading="lazy"
              className="h-full w-auto object-contain max-w-[120px] md:max-w-[150px]"
            />
          </div>
          <span
            className={`mt-2 text-xs ${
              focused
                ? 'text-secondary-700 dark:text-gray-200'
                : 'text-gray-500 dark:text-gray-400'
            }`}
          >
            {client.name}
          </span>
        </div>
      ))}
    </motion.div>
  );

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Trusted by Leading Organizations
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="overflow-hidden">
            {renderTrack({ focused: false })}
          </div>

          {!shouldReduceMotion && (
            <>
              <div className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-36 sm:w-40 md:w-48 overflow-hidden">
                {renderTrack({ focused: true })}
              </div>
              <div className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-36 sm:w-40 md:w-48 rounded-lg ring-1 ring-primary-200/60 dark:ring-primary-500/40" />
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientLogos;
