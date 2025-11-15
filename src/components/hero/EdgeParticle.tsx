import { motion } from "motion/react";

interface EdgeParticleProps {
  path: number;
  delay: number;
}

export function EdgeParticle({ path, delay }: EdgeParticleProps) {
  const angle = (path * 60) * Math.PI / 180;
  const radius = 250;
  
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 w-2 h-2 rounded-full bg-black/65"
      animate={{
        x: [
          Math.cos(angle) * radius,
          Math.cos(angle + Math.PI * 2) * radius,
        ],
        y: [
          Math.sin(angle) * radius,
          Math.sin(angle + Math.PI * 2) * radius,
        ],
        scale: [1, 1.5, 1],
        opacity: [0.5, 0.8, 0.5],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <div className="absolute inset-0 rounded-full bg-black/45 blur-sm" />
    </motion.div>
  );
}
