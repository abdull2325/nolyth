import { motion } from "motion/react";

const capabilities = [
  "Machine Learning",
  "Computer Vision",
  "Generative AI",
  "Full-Stack Development",
  "Process Automation",
  "Data Engineering",
];

export function Marquee() {
  return (
    <section className="py-24 overflow-hidden border-y border-black/5 relative">
      {/* Subtle geometric background */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <motion.div
          className="absolute top-1/2 left-1/4 -translate-y-1/2"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg width="60" height="60" viewBox="0 0 60 60">
            <polygon
              points="30,10 50,30 30,50 10,30"
              fill="none"
              stroke="rgba(0, 0, 0, 0.05)"
              strokeWidth="1.5"
            />
          </svg>
        </motion.div>
      </div>
      
      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
        
        {/* Marquee content */}
        <div className="flex gap-20 marquee">
          {[...capabilities, ...capabilities, ...capabilities].map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center gap-12"
            >
              <span 
                className="text-black/20 whitespace-nowrap text-5xl md:text-6xl lg:text-7xl tracking-tight"
              >
                {item}
              </span>
              {/* Rotating diamond separator */}
              <motion.div
                animate={{
                  rotate: [0, 90, 180, 270, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.1,
                }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12">
                  <polygon
                    points="6,1 11,6 6,11 1,6"
                    fill="rgba(0, 0, 0, 0.15)"
                  />
                </svg>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
