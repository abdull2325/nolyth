import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface CTABreakProps {
  title: string;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
  theme?: "light" | "dark";
}

export function CTABreak({ 
  title, 
  description, 
  buttonText = "Let's Talk",
  onButtonClick,
  theme = "light" 
}: CTABreakProps) {
  const isDark = theme === "dark";

  return (
    <section className={`py-32 md:py-40 px-6 md:px-12 lg:px-24 ${isDark ? 'bg-black text-white' : 'bg-[#fafaf9] text-black'} relative overflow-hidden`}>
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <motion.div
          className="absolute top-20 left-1/4"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg width="150" height="150" viewBox="0 0 150 150">
            <polygon
              points="75,20 130,75 75,130 20,75"
              fill="none"
              stroke={isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)"}
              strokeWidth="2"
            />
          </svg>
        </motion.div>
        
        <motion.div
          className="absolute bottom-32 right-1/4"
          animate={{
            rotate: [0, -180, -360],
            scale: [1, 1.2, 1],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg width="120" height="120" viewBox="0 0 120 120">
            <polygon
              points="60,15 105,60 60,105 15,60"
              fill="none"
              stroke={isDark ? "rgba(255, 255, 255, 0.06)" : "rgba(0, 0, 0, 0.06)"}
              strokeWidth="1.5"
            />
          </svg>
        </motion.div>
        
        <motion.div
          className="absolute top-1/2 right-10"
          animate={{
            rotate: [0, 120, 240, 360],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg width="100" height="100" viewBox="0 0 100 100">
            <polygon
              points="50,12 88,50 50,88 12,50"
              fill="none"
              stroke={isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)"}
              strokeWidth="1.5"
            />
          </svg>
        </motion.div>
      </div>
      
      <div className="max-w-[1200px] mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl mb-8 tracking-tight leading-[1.1]">
            {title}
          </h2>
          <p className={`text-xl md:text-2xl mb-12 max-w-3xl mx-auto ${isDark ? 'text-white/60' : 'text-black/50'}`}>
            {description}
          </p>
          
          <motion.button
            onClick={onButtonClick || (() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }))}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className={`group inline-flex items-center gap-3 px-8 py-4 rounded-full ${
              isDark 
                ? 'bg-white text-black hover:bg-white/90' 
                : 'bg-black text-white hover:bg-black/90'
            } transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden`}
          >
            {/* Geometric hover effect */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <svg width="60" height="60" viewBox="0 0 60 60">
                <polygon
                  points="30,10 50,30 30,50 10,30"
                  fill="none"
                  stroke={isDark ? "rgba(0, 0, 0, 0.08)" : "rgba(255, 255, 255, 0.08)"}
                  strokeWidth="1.5"
                />
              </svg>
            </motion.div>
            
            <span className="text-lg relative z-10">{buttonText}</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.05, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] md:text-[30rem] ${isDark ? 'text-white' : 'text-black'} select-none pointer-events-none`}
            style={{ lineHeight: 1 }}
          >
            →
          </motion.div>
        </div>
      </div>
    </section>
  );
}
