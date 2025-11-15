import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { LoadingQuotes } from "./LoadingQuotes";

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{ backgroundColor: '#f5f1eb' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative px-6">
            {/* Animated logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-12"
            >
              <motion.h1
                className="text-6xl md:text-7xl tracking-tighter text-black mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                NOLYTH
              </motion.h1>
              
              {/* Loading bar */}
              <div className="w-64 h-px bg-black/10 relative overflow-hidden mx-auto">
                <motion.div
                  className="absolute inset-0 bg-black origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </motion.div>

            {/* Loading Quotes */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <LoadingQuotes isLoading={isLoading} />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
