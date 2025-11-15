import { motion, useTransform } from "motion/react";
import { useEffect, useState } from "react";

interface MorphingShapeProps {
  mouseX: any;
  mouseY: any;
  index: number;
}

export function MorphingShape({ mouseX, mouseY, index }: MorphingShapeProps) {
  const [morphState, setMorphState] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setMorphState((prev) => (prev + 1) % 4);
    }, 4000 + index * 500);
    return () => clearInterval(interval);
  }, [index]);
  
  const shapes = [
    // Triangle
    "M 200,50 L 350,300 L 50,300 Z",
    // Hexagon
    "M 200,50 L 320,130 L 320,250 L 200,330 L 80,250 L 80,130 Z",
    // Diamond
    "M 200,50 L 350,200 L 200,350 L 50,200 Z",
    // Circle (approximated with path)
    "M 200,50 Q 350,50 350,200 Q 350,350 200,350 Q 50,350 50,200 Q 50,50 200,50 Z",
  ];
  
  const x = useTransform(mouseX, [0, 1], [-20, 20]);
  const y = useTransform(mouseY, [0, 1], [-20, 20]);
  const rotate = useTransform(mouseX, [0, 1], [-5, 5]);
  
  return (
    <motion.div
      className="absolute left-1/2 top-1/2"
      style={{
        x,
        y,
        rotate,
        translateX: "-50%",
        translateY: "-50%",
        scale: 1 - index * 0.15,
        zIndex: 10 - index,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.65 - index * 0.08 }}
      transition={{ duration: 1, delay: index * 0.2 }}
    >
      <svg width="400" height="400" viewBox="0 0 400 400">
        <defs>
          <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(0, 0, 0, 0.45)" />
            <stop offset="50%" stopColor="rgba(0, 0, 0, 0.65)" />
            <stop offset="100%" stopColor="rgba(0, 0, 0, 0.45)" />
          </linearGradient>
          
          <filter id={`glow-${index}`}>
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        <motion.path
          d={shapes[morphState]}
          fill="none"
          stroke={`url(#gradient-${index})`}
          strokeWidth="2"
          filter={`url(#glow-${index})`}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
        />
      </svg>
    </motion.div>
  );
}
