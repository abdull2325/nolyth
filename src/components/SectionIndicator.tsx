import { motion } from "motion/react";
import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "work", label: "Work" },
  { id: "services", label: "Services" },
  { id: "why-us", label: "Why Us" },
  { id: "tech", label: "Tech Stack" },
  { id: "process", label: "Process" },
  { id: "testimonials", label: "Testimonials" },
  { id: "team", label: "Team" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export function SectionIndicator() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // Section is active when it's in the middle 20% of viewport
      threshold: [0, 0.25, 0.5, 0.75, 1],
    };

    let intersectingMap = new Map<string, number>();

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          intersectingMap.set(entry.target.id, entry.intersectionRatio);
        } else {
          intersectingMap.delete(entry.target.id);
        }
      });

      // Find the section with highest intersection ratio
      let maxRatio = 0;
      let mostVisibleSection = "hero";
      
      intersectingMap.forEach((ratio, id) => {
        if (ratio > maxRatio) {
          maxRatio = ratio;
          mostVisibleSection = id;
        }
      });

      setActiveSection(mostVisibleSection);
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Delayed recheck for lazy-loaded content
    const timeout = setTimeout(() => {
      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element && !intersectingMap.has(id)) {
          observer.observe(element);
        }
      });
    }, 1500);

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
      {/* Elegant connecting vertical line */}
      <motion.div 
        className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-black/20 to-transparent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
      
      {sections.map((section, index) => (
        <motion.a
          key={section.id}
          href={`#${section.id}`}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById(section.id)?.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }}
          className="group relative flex items-center cursor-pointer"
          aria-label={`Navigate to ${section.label}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {/* Larger hit area for better UX */}
          <div className="absolute -inset-3" />
          
          {/* Geometric indicator container */}
          <div className="relative w-6 h-6 flex items-center justify-center">
            {/* Active state - Large rotating diamond */}
            {activeSection === section.id && (
              <>
                <motion.div
                  initial={{ scale: 0, rotate: 0 }}
                  animate={{ 
                    scale: 1, 
                    rotate: [0, 90, 180, 270, 360],
                  }}
                  exit={{ scale: 0 }}
                  transition={{
                    scale: { duration: 0.4, ease: "backOut" },
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" }
                  }}
                  className="absolute"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20">
                    <polygon
                      points="10,2 18,10 10,18 2,10"
                      fill="rgba(0, 0, 0, 0.9)"
                    />
                  </svg>
                </motion.div>
                
                {/* Continuous pulse rings */}
                <motion.div
                  className="absolute"
                  initial={{ scale: 1, opacity: 0.8 }}
                  animate={{ 
                    scale: [1, 2.5, 2.5],
                    opacity: [0.8, 0, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20">
                    <polygon
                      points="10,2 18,10 10,18 2,10"
                      fill="none"
                      stroke="rgba(0, 0, 0, 0.4)"
                      strokeWidth="2"
                    />
                  </svg>
                </motion.div>
              </>
            )}
            
            {/* Inactive state - Morphing on hover */}
            {activeSection !== section.id && (
              <motion.div
                className="absolute"
                whileHover={{ scale: 1.6 }}
                transition={{ duration: 0.3, ease: "backOut" }}
              >
                {/* Default circle */}
                <motion.svg 
                  width="14" 
                  height="14" 
                  viewBox="0 0 14 14"
                  className="group-hover:opacity-0 transition-opacity duration-300"
                >
                  <circle
                    cx="7"
                    cy="7"
                    r="4"
                    fill="rgba(0, 0, 0, 0.25)"
                  />
                </motion.svg>
                
                {/* Hover diamond */}
                <motion.svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 16 16" 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <polygon
                    points="8,1 15,8 8,15 1,8"
                    fill="rgba(0, 0, 0, 0.7)"
                  />
                </motion.svg>
              </motion.div>
            )}
          </div>
          
          {/* Enhanced Tooltip with better visibility */}
          <motion.div
            initial={{ opacity: 0, x: 15, scale: 0.85 }}
            animate={{ 
              opacity: 0,
              x: 15,
              scale: 0.85,
            }}
            whileHover={{ 
              opacity: 1, 
              x: 0, 
              scale: 1,
            }}
            transition={{ 
              duration: 0.25, 
              ease: [0.16, 1, 0.3, 1]
            }}
            className="absolute right-10 pointer-events-none"
          >
            <div className="relative flex items-center gap-2">
              {/* Connection line */}
              <motion.div 
                className="h-px w-4 bg-black/30"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.2 }}
                style={{ originX: 1 }}
              />
              
              {/* Tooltip bubble */}
              <div className="relative bg-black text-white px-5 py-2.5 rounded-full whitespace-nowrap shadow-2xl border border-white/20 backdrop-blur-sm">
                <span className="relative z-10 tracking-wide">
                  {section.label}
                </span>
                
                {/* Rotating geometric accent */}
                <motion.div
                  className="absolute -left-2 top-1/2 -translate-y-1/2 z-20"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12">
                    <polygon
                      points="6,1 11,6 6,11 1,6"
                      fill="white"
                    />
                  </svg>
                </motion.div>
                
                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-full bg-white/5 blur-sm" />
              </div>
            </div>
          </motion.div>
          
          {/* Click ripple effect */}
          <motion.div
            className="absolute inset-0 rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            whileTap={{ 
              scale: 3,
              opacity: [0, 0.3, 0],
            }}
            transition={{ duration: 0.6 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" className="w-full h-full">
              <polygon
                points="12,3 21,12 12,21 3,12"
                fill="rgba(0, 0, 0, 0.2)"
              />
            </svg>
          </motion.div>
        </motion.a>
      ))}
    </div>
  );
}
