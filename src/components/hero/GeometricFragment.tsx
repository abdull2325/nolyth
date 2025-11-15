import { motion } from "motion/react";

interface GeometricFragmentProps {
  type: number;
  delay: number;
}

export function GeometricFragment({ type, delay }: GeometricFragmentProps) {
  // Golden ratio and fibonacci inspired positioning for elegant spacing
  const positions = [
    { x: 12, y: 18 },
    { x: 28, y: 32 },
    { x: 44, y: 22 },
    { x: 61, y: 38 },
    { x: 76, y: 28 },
    { x: 88, y: 48 },
    { x: 18, y: 62 },
    { x: 34, y: 72 },
    { x: 52, y: 58 },
    { x: 68, y: 68 },
    { x: 82, y: 78 },
    { x: 24, y: 88 },
    { x: 38, y: 12 },
    { x: 56, y: 8 },
    { x: 72, y: 14 },
    { x: 14, y: 42 },
    { x: 86, y: 62 },
    { x: 48, y: 48 },
    { x: 92, y: 32 },
    { x: 8, y: 78 },
  ];
  
  const pos = positions[type % positions.length];
  
  // Sizes based on importance hierarchy
  const sizes = [16, 20, 24, 18, 22];
  const size = sizes[type % sizes.length];
  
  // Only geometric shapes - triangles, lines, minimal forms
  // Ultra-fine strokes, whisper-light opacity
  const fragments = [
    // Ascending triangle (echoing logo)
    <polygon 
      key="t1" 
      points="12,3 21,21 3,21" 
      fill="none" 
      stroke="rgba(0,0,0,0.04)" 
      strokeWidth="0.5" 
    />,
    // Inverted triangle
    <polygon 
      key="t2" 
      points="3,3 21,3 12,21" 
      fill="none" 
      stroke="rgba(0,0,0,0.035)" 
      strokeWidth="0.5" 
    />,
    // Minimal square with rounded corners
    <rect 
      key="sq" 
      x="4" 
      y="4" 
      width="16" 
      height="16" 
      rx="1"
      fill="none" 
      stroke="rgba(0,0,0,0.03)" 
      strokeWidth="0.5" 
    />,
    // Layered triangles (logo echo)
    <g key="layer">
      <polygon 
        points="12,5 19,19 5,19" 
        fill="none" 
        stroke="rgba(0,0,0,0.025)" 
        strokeWidth="0.5" 
      />
      <polygon 
        points="12,8 16,16 8,16" 
        fill="none" 
        stroke="rgba(0,0,0,0.025)" 
        strokeWidth="0.5" 
      />
    </g>,
    // Simple line accent
    <line 
      key="line" 
      x1="4" 
      y1="12" 
      x2="20" 
      y2="12" 
      stroke="rgba(0,0,0,0.045)" 
      strokeWidth="0.5" 
    />,
  ];
  
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left: `${pos.x}%`,
        top: `${pos.y}%`,
      }}
      initial={{
        opacity: 0,
        scale: 0.9,
        rotate: -5,
      }}
      animate={{
        y: [-6, 6, -6],
        opacity: [0, 1, 1, 0],
        scale: [0.9, 1, 0.9],
        rotate: [-5, 5, -5],
      }}
      transition={{
        duration: 20 + (type % 3) * 5,
        delay: delay + 2,
        repeat: Infinity,
        ease: [0.45, 0, 0.55, 1], // Custom ease for elegance
        repeatDelay: 3,
      }}
    >
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24"
        style={{ 
          transform: 'translateX(-50%) translateY(-50%)',
          filter: 'contrast(1.1)',
        }}
      >
        {fragments[type % fragments.length]}
      </svg>
    </motion.div>
  );
}
