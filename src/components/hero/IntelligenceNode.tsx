import { motion, useTransform } from "motion/react";

interface IntelligenceNodeProps {
  x: number;
  y: number;
  delay: number;
  mouseX: any;
  mouseY: any;
}

export function IntelligenceNode({ x, y, delay, mouseX, mouseY }: IntelligenceNodeProps) {
  const offsetX = useTransform(mouseX, [0, 1], [-5, 5]);
  const offsetY = useTransform(mouseY, [0, 1], [-5, 5]);
  
  return (
    <motion.div
      className="absolute"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        x: offsetX,
        y: offsetY,
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay }}
    >
      <motion.div
        className="w-3 h-3 rounded-full bg-black/55 relative shadow-lg"
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 2,
          delay,
          repeat: Infinity,
        }}
      >
        {/* Pulsing ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-black/45"
          animate={{
            scale: [1, 3, 1],
            opacity: [0.8, 0, 0.8],
          }}
          transition={{
            duration: 3,
            delay,
            repeat: Infinity,
          }}
        />
      </motion.div>
    </motion.div>
  );
}
