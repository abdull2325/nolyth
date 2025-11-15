import { motion } from "motion/react";

interface NodeConnectionProps {
  from: { x: number; y: number };
  to: { x: number; y: number };
  delay: number;
  active: boolean;
}

export function NodeConnection({ from, to, delay, active }: NodeConnectionProps) {
  if (!active) return null;
  
  return (
    <motion.svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.45 }}
      transition={{ duration: 0.5 }}
    >
      <motion.line
        x1={`${from.x}%`}
        y1={`${from.y}%`}
        x2={`${to.x}%`}
        y2={`${to.y}%`}
        stroke="rgba(0,0,0,0.45)"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay }}
      />
    </motion.svg>
  );
}
