import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
}

export function CursorTrail() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    let particleId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!enabled) return;

      const newParticle: Particle = {
        id: particleId++,
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 8 + 4,
        rotation: Math.random() * 360,
      };

      setParticles((prev) => [...prev.slice(-20), newParticle]);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [enabled]);

  // Remove old particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) => {
        if (prev.length > 0) {
          return prev.slice(1);
        }
        return prev;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[99] hidden md:block">
      {particles.map((particle, index) => (
        <motion.div
          key={particle.id}
          initial={{
            x: particle.x,
            y: particle.y,
            scale: 1,
            opacity: 0.6,
            rotate: particle.rotation,
          }}
          animate={{
            scale: 0,
            opacity: 0,
            y: particle.y - 50,
          }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{
            width: particle.size,
            height: particle.size,
          }}
        >
          {/* Triangle shape */}
          <svg
            width={particle.size}
            height={particle.size}
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 0 L10 10 L0 10 Z"
              fill="currentColor"
              className="text-black/10"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
