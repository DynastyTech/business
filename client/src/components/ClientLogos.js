import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { motion, useAnimationFrame, useMotionValue, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ClientLogos = () => {
  const shouldReduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [focusIndex, setFocusIndex] = useState(0);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const itemRefs = useRef([]);
  const loopWidthRef = useRef(0);
  const focusIndexRef = useRef(0);

  const clients = useMemo(
    () => [
      { name: "IBM", logo: "/Logos/IBM.png" },
      { name: "FNB", logo: "/Logos/FNB.png" },
      { name: "Nedbank", logo: "/Logos/Nedbank.png" },
      { name: "Nelson Mandela University", logo: "/Logos/NMU.png" },
      { name: "Munsoft", logo: "/Logos/Munsoft.png" },
    ],
    []
  );

  const repeatedClients = useMemo(() => [...clients, ...clients], [clients]);

  const updateFocus = useCallback(() => {
    if (!viewportRef.current || itemRefs.current.length === 0) {
      return;
    }

    const viewportRect = viewportRef.current.getBoundingClientRect();
    const viewportCenter = viewportRect.left + viewportRect.width / 2;

    let nearestIndex = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    itemRefs.current.forEach((item, index) => {
      if (!item) return;
      const itemRect = item.getBoundingClientRect();
      const itemCenter = itemRect.left + itemRect.width / 2;
      const distance = Math.abs(itemCenter - viewportCenter);

      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    if (focusIndexRef.current !== nearestIndex) {
      focusIndexRef.current = nearestIndex;
      setFocusIndex(nearestIndex);
    }
  }, []);

  const updateMeasurements = useCallback(() => {
    if (!trackRef.current || itemRefs.current.length <= clients.length) {
      return;
    }

    const secondSetStart = itemRefs.current[clients.length];
    loopWidthRef.current = secondSetStart ? secondSetStart.offsetLeft : 0;
    updateFocus();
  }, [clients.length, updateFocus]);

  useEffect(() => {
    updateMeasurements();

    const handleResize = () => updateMeasurements();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [updateMeasurements]);

  useEffect(() => {
    if (shouldReduceMotion) {
      x.set(0);
      updateFocus();
    }
  }, [shouldReduceMotion, updateFocus, x]);

  useAnimationFrame((_, delta) => {
    if (shouldReduceMotion || !inView || !loopWidthRef.current) {
      return;
    }

    const speedPixelsPerSecond = 55;
    const movement = (speedPixelsPerSecond * delta) / 1000;
    let nextX = x.get() - movement;

    if (Math.abs(nextX) >= loopWidthRef.current) {
      nextX += loopWidthRef.current;
    }

    x.set(nextX);
    updateFocus();
  });

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
          <div ref={viewportRef} className="overflow-hidden">
            <motion.div
              ref={trackRef}
              style={{ x }}
              className="flex w-max items-center gap-6 sm:gap-8 md:gap-12"
            >
              {repeatedClients.map((client, index) => {
                const isFocused = index === focusIndex;

                return (
                  <div
                    key={`${client.name}-${index}`}
                    ref={(el) => {
                      itemRefs.current[index] = el;
                    }}
                    className="w-36 sm:w-40 md:w-48 flex-shrink-0 flex flex-col items-center"
                  >
                    <div
                      className={`h-16 md:h-20 flex items-center justify-center transition-all duration-300 ${
                        isFocused ? 'grayscale-0 opacity-100 scale-[1.3]' : 'grayscale opacity-60 scale-100'
                      }`}
                    >
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="h-full w-auto object-contain max-w-[120px] md:max-w-[150px]"
                      />
                    </div>
                    <span
                      className={`mt-2 text-xs transition-colors duration-300 ${
                        isFocused
                          ? 'text-secondary-700 dark:text-gray-200'
                          : 'text-gray-500 dark:text-gray-400'
                      }`}
                    >
                      {client.name}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientLogos;
