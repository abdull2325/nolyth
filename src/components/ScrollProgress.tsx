import { motion, useScroll, useSpring, useTransform } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Transform scroll progress to shape index (0 to 2)
  const shapeIndex = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 2]);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-[100]">
      {/* Progress bar background */}
      <div className="absolute inset-0 bg-black/5" />
      
      {/* Animated progress bar */}
      <motion.div
        className="absolute inset-0 bg-black origin-left flex items-center justify-end"
        style={{ scaleX }}
      >
        {/* Morphing geometric shape at the end of progress bar */}
        <motion.div
          className="absolute right-0 -translate-y-1/2 top-1/2"
          animate={{
            rotate: [0, 120, 240, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" className="drop-shadow-md">
            <motion.polygon
              points="8,2 14,8 8,14 2,8"
              fill="white"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}
