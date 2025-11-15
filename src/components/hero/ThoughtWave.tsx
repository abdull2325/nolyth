import { motion } from "motion/react";

interface ThoughtWaveProps {
  delay: number;
}

export function ThoughtWave({ delay }: ThoughtWaveProps) {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-black/25"
      initial={{ width: 0, height: 0, opacity: 0 }}
      animate={{
        width: [0, 800],
        height: [0, 800],
        opacity: [0.7, 0],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeOut",
      }}
    />
  );
}
