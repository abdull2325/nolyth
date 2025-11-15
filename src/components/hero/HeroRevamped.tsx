import { motion, useMotionValue, useSpring } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { VoronoiPattern } from "./VoronoiPattern";
import { ThoughtWave } from "./ThoughtWave";
import { GeometricFragment } from "./GeometricFragment";
import { IntelligenceNode } from "./IntelligenceNode";
import { NodeConnection } from "./NodeConnection";
import { EdgeParticle } from "./EdgeParticle";
import { MorphingShape } from "./MorphingShape";

export function HeroRevamped() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showConnections, setShowConnections] = useState(false);
  
  const mouseXRaw = useMotionValue(0.5);
  const mouseYRaw = useMotionValue(0.5);
  
  const mouseX = useSpring(mouseXRaw, { damping: 50, stiffness: 200 });
  const mouseY = useSpring(mouseYRaw, { damping: 50, stiffness: 200 });
  
  const nodes = [
    { x: 20, y: 20 },
    { x: 80, y: 20 },
    { x: 50, y: 35 },
    { x: 20, y: 80 },
    { x: 80, y: 80 },
    { x: 50, y: 65 },
  ];
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseXRaw.set(e.clientX / window.innerWidth);
      mouseYRaw.set(e.clientY / window.innerHeight);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    // Show connections after delay
    const timer = setTimeout(() => setShowConnections(true), 2000);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, [mouseXRaw, mouseYRaw]);
  
  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f5f1eb]"
    >
      {/* Voronoi background pattern */}
      <VoronoiPattern />
      
      {/* Thought waves */}
      {[...Array(4)].map((_, i) => (
        <ThoughtWave key={i} delay={i * 1} />
      ))}
      
      {/* Floating geometric fragments */}
      {[...Array(20)].map((_, i) => (
        <GeometricFragment key={i} type={i} delay={i * 0.3} />
      ))}
      
      {/* Intelligence nodes */}
      {nodes.map((node, i) => (
        <IntelligenceNode
          key={i}
          x={node.x}
          y={node.y}
          delay={1 + i * 0.1}
          mouseX={mouseX}
          mouseY={mouseY}
        />
      ))}
      
      {/* Node connections */}
      {showConnections && (
        <>
          <NodeConnection from={nodes[0]} to={nodes[2]} delay={0} active />
          <NodeConnection from={nodes[1]} to={nodes[2]} delay={0.1} active />
          <NodeConnection from={nodes[2]} to={nodes[5]} delay={0.2} active />
          <NodeConnection from={nodes[3]} to={nodes[5]} delay={0.3} active />
          <NodeConnection from={nodes[4]} to={nodes[5]} delay={0.4} active />
        </>
      )}
      
      {/* Edge particles */}
      {[...Array(12)].map((_, i) => (
        <EdgeParticle key={i} path={i} delay={i * 0.2} />
      ))}
      
      {/* Central morphing shapes */}
      {[...Array(4)].map((_, i) => (
        <MorphingShape key={i} mouseX={mouseX} mouseY={mouseY} index={i} />
      ))}
      
      {/* Radial gradient overlay for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 50%, transparent 20%, rgba(245, 241, 235, 0.5) 60%, rgba(245, 241, 235, 0.9) 100%)",
        }}
      />
      
      {/* Content */}
      <div className="relative z-20 w-full h-full">
        {/* Top - Brand with morphing indicator */}
        <motion.div
          className="absolute top-16 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="flex flex-col items-center justify-center gap-4 mt-[480px] w-full text-center">
            <motion.div className="flex items-center gap-4">
              {/* Morphing status indicator */}
              <motion.div className="flex gap-1.5">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-8 bg-black/60 rounded-full"
                    animate={{
                      height: [32, 16, 32],
                      opacity: [0.6, 0.85, 0.6],
                    }}
                    transition={{
                      duration: 1.5,
                      delay: i * 0.2,
                      repeat: Infinity,
                    }}
                  />
                ))}
              </motion.div>
              
              <span className="text-xl tracking-[0.3em] uppercase text-black/75">
                Nolyth
              </span>
              
              <motion.div className="flex gap-1.5">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-8 bg-black/20 rounded-full"
                    animate={{
                      height: [32, 16, 32],
                      opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                      duration: 1.5,
                      delay: i * 0.2 + 0.5,
                      repeat: Infinity,
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
            
            <motion.p
              className="text-sm tracking-widest uppercase text-black/40"
              animate={{ opacity: [0.4, 0.6, 0.4] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Evolving Intelligence
            </motion.p>
          </div>
        </motion.div>
        
        {/* Center - Main message revealed through morphing */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2 }}
        >
          <motion.div
            className="text-6xl tracking-tight text-black/[0.2] pointer-events-none select-none"
            animate={{
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          >
            AI
          </motion.div>
        </motion.div>
        
        {/* Left - Philosophy */}
        <motion.div
          className="absolute left-12 top-1/2 -translate-y-1/2 max-w-xs"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <motion.div
            className="space-y-4"
            whileHover={{ x: 10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-black/20" />
              <span className="text-xs tracking-wider uppercase text-black/50">
                Paradigm
              </span>
            </div>
            
            <p className="text-sm text-black/60 leading-relaxed">
              Intelligence that adapts,
              <br />
              transforms, and evolves
              <br />
              with every iteration
            </p>
          </motion.div>
        </motion.div>
        
        {/* Right - Navigation dots */}
        <motion.div
          className="absolute right-12 top-1/2 -translate-y-1/2"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <motion.div
            className="flex flex-col gap-3"
            whileHover={{ x: -10 }}
            transition={{ duration: 0.3 }}
          >
{[
              { sectionId: "hero", isCurrent: true },
              { sectionId: "work", isCurrent: false },
              { sectionId: "services", isCurrent: false },
              { sectionId: "why-us", isCurrent: false },
              { sectionId: "tech", isCurrent: false },
              { sectionId: "process", isCurrent: false },
              { sectionId: "testimonials", isCurrent: false },
              { sectionId: "team", isCurrent: false },
              { sectionId: "about", isCurrent: false },
              { sectionId: "contact", isCurrent: false }
            ].map((cap, i) => (
              <motion.div
                key={i}
                onClick={() => {
                  document.getElementById(cap.sectionId)?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
                className="flex items-center justify-end group cursor-pointer h-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.6 + i * 0.1 }}
                whileHover={{ x: -5 }}
              >
                <motion.div
                  className={`w-6 h-px transition-colors ${
                    cap.isCurrent
                      ? 'bg-black/10'
                      : 'bg-black/20 group-hover:bg-black/40'
                  }`}
                  whileHover={{ width: cap.isCurrent ? 24 : 40 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Bottom left - CTA */}
        <motion.div
          className="absolute bottom-20 left-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          <motion.button
            onClick={() =>
              document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })
            }
            className="group flex items-center gap-3 text-sm text-black/70 hover:text-black/90 transition-colors"
            whileHover={{ x: 5 }}
          >
            <motion.div
              className="w-10 h-10 rounded-full border-2 border-black/20 flex items-center justify-center group-hover:border-black/40 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
            <span className="border-b border-transparent group-hover:border-black/40 transition-colors">
              Explore our work
            </span>
          </motion.button>
        </motion.div>
        
        {/* Bottom right - Stats morphing */}
        <motion.div
          className="absolute bottom-20 right-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <div className="flex items-end gap-8">
            {[
              { value: "50+", label: "Projects" },
              { value: "6", label: "Domains" },
              { value: "∞", label: "Possibilities" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-end gap-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.2 + i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <motion.span
                  className="text-3xl text-black/80 tracking-tight"
                  animate={{
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.3,
                    repeat: Infinity,
                  }}
                >
                  {stat.value}
                </motion.span>
                <span className="text-[10px] tracking-widest text-black/40 uppercase">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-[-702px] left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-5 h-8 rounded-full border-2 border-black/20 flex items-start justify-center p-1">
              <motion.div
                className="w-1 h-2 rounded-full bg-black/40"
                animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
            <span className="text-[10px] tracking-widest uppercase text-black/40">
              Discover
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
