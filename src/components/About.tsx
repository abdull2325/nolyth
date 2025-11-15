import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { AnimatedCounter } from "./AnimatedCounter";

// Floating geometric particle
function FloatingGeometry({ delay, duration, x, y }: any) {
  return (
    <motion.div
      className="absolute opacity-15"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0.08, 0.15, 0.08],
        scale: [0.8, 1, 0.8],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{ left: x, top: y }}
    >
      <svg width="60" height="60" viewBox="0 0 60 60">
        <polygon
          points="30,10 50,40 10,40"
          fill="none"
          stroke="rgba(0, 0, 0, 0.4)"
          strokeWidth="1.5"
        />
      </svg>
    </motion.div>
  );
}

// Subtle orbiting particle
function OrbitParticle({ radius, duration, delay }: any) {
  return (
    <motion.div
      className="absolute left-0 top-0 w-1.5 h-1.5 rounded-full bg-black/30"
      animate={{
        x: [
          Math.cos(0) * radius,
          Math.cos(Math.PI) * radius,
          Math.cos(Math.PI * 2) * radius,
        ],
        y: [
          Math.sin(0) * radius,
          Math.sin(Math.PI) * radius,
          Math.sin(Math.PI * 2) * radius,
        ],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <section id="about" ref={containerRef} className="py-80 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Geometric background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large geometric shape */}
        <motion.div
          className="absolute right-0 top-1/4"
          style={{ y, rotate }}
        >
          <svg width="400" height="400" viewBox="0 0 400 400">
            <polygon
              points="200,50 350,200 200,350 50,200"
              fill="none"
              stroke="rgba(0, 0, 0, 0.08)"
              strokeWidth="2"
            />
            <polygon
              points="200,100 300,200 200,300 100,200"
              fill="none"
              stroke="rgba(0, 0, 0, 0.05)"
              strokeWidth="1.5"
            />
          </svg>
        </motion.div>

        {/* Floating geometries */}
        <FloatingGeometry delay={0} duration={8} x="10%" y="20%" />
        <FloatingGeometry delay={1.5} duration={10} x="85%" y="60%" />
        <FloatingGeometry delay={3} duration={9} x="15%" y="75%" />

        {/* Voronoi pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="about-voronoi" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <path d="M0,0 L50,30 L30,80 Z M50,30 L120,10 L100,70 Z M100,70 L150,100 L80,120 Z" 
                      fill="none" stroke="rgba(0, 0, 0, 0.5)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-voronoi)" />
          </svg>
        </div>
      </div>

      <div className="max-w-[1800px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-32 lg:gap-48">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="lg:sticky lg:top-32">
              <div className="flex items-center gap-6 mb-8">
                <motion.div 
                  className="w-16 h-px bg-black/20"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
                <span className="text-xs tracking-[0.3em] uppercase text-black/30">
                  About Us
                </span>
              </div>
              
              <h2 className="text-black mb-24">
                Our Story
              </h2>

              {/* Mission Statement */}
              <div className="mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative border-l-2 border-black/15 pl-6 hover:border-black/40 transition-colors group"
                >
                  {/* Geometric accent */}
                  <div className="absolute -left-1 top-0 w-2 h-2 rotate-45 border border-black/20 group-hover:border-black/40 transition-colors" />
                  
                  <div className="text-2xl md:text-3xl text-black mb-3 tracking-tight">
                    Building the future
                  </div>
                  <div className="text-lg text-black/60">
                    One intelligent system at a time
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-4xl md:text-5xl text-black/70 mb-16 leading-tight">
              A precision-driven software agency specializing in{" "}
              <span className="text-black">artificial intelligence</span>{" "}
              and architectural code design.
            </p>
            
            <div className="space-y-8 text-xl text-black/50 leading-relaxed">
              <p>
                Built on the foundation that technology should be both intelligent and elegant, 
                we craft solutions that don't just work—they inspire.
              </p>
              
              <p>
                Our team combines deep expertise in machine learning, computer vision, and 
                full-stack development with an unwavering commitment to code quality and 
                architectural excellence.
              </p>
            </div>

            {/* Values with geometric markers */}
            <div className="mt-24 space-y-12">
              {[
                {
                  title: "Precision Engineering",
                  description: "Every line of code is intentional. We build systems that are as elegant as they are powerful."
                },
                {
                  title: "Innovation First",
                  description: "Pushing the boundaries of what's possible with AI and modern web technologies."
                },
                {
                  title: "Long-term Partnership",
                  description: "We're not just contractors—we're your technology partners invested in your success."
                }
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="relative border-l border-black/15 pl-10 group hover:border-black/30 transition-colors"
                >
                  {/* Geometric marker */}
                  <motion.div 
                    className="absolute -left-2 top-2 w-3 h-3"
                    initial={{ rotate: 0 }}
                    whileInView={{ rotate: 180 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1 + 0.3 }}
                  >
                    <svg viewBox="0 0 12 12">
                      <polygon points="6,1 11,11 1,11" fill="none" stroke="rgba(0,0,0,0.25)" strokeWidth="1.5" />
                    </svg>
                  </motion.div>
                  
                  <h3 className="text-2xl md:text-3xl text-black mb-6">
                    {card.title}
                  </h3>
                  <p className="text-lg text-black/50 leading-relaxed">
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
