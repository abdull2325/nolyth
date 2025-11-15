import { motion, useScroll, useTransform } from "motion/react";
import { useState, useRef } from "react";

const technologies = [
  { name: "TensorFlow", category: "AI/ML", color: "from-orange-500/20 to-red-500/20" },
  { name: "PyTorch", category: "AI/ML", color: "from-red-500/20 to-pink-500/20" },
  { name: "OpenAI", category: "GenAI", color: "from-green-500/20 to-emerald-500/20" },
  { name: "LangChain", category: "GenAI", color: "from-blue-500/20 to-cyan-500/20" },
  { name: "React", category: "Frontend", color: "from-cyan-500/20 to-blue-500/20" },
  { name: "TypeScript", category: "Frontend", color: "from-blue-600/20 to-blue-400/20" },
  { name: "Python", category: "Backend", color: "from-yellow-500/20 to-blue-500/20" },
  { name: "Node.js", category: "Backend", color: "from-green-600/20 to-green-400/20" },
  { name: "OpenCV", category: "Vision", color: "from-purple-500/20 to-pink-500/20" },
  { name: "YOLO", category: "Vision", color: "from-indigo-500/20 to-purple-500/20" },
  { name: "Hugging Face", category: "GenAI", color: "from-yellow-400/20 to-orange-400/20" },
  { name: "FastAPI", category: "Backend", color: "from-teal-500/20 to-green-500/20" },
];

// Floating tech particle
function TechParticle({ index, total }: { index: number; total: number }) {
  const angle = (index / total) * Math.PI * 2;
  const radius = 150;
  
  return (
    <motion.div
      className="absolute w-1.5 h-1.5 rounded-full bg-black/20"
      animate={{
        x: [
          Math.cos(angle) * radius,
          Math.cos(angle + Math.PI * 2) * radius,
        ],
        y: [
          Math.sin(angle) * radius,
          Math.sin(angle + Math.PI * 2) * radius,
        ],
        opacity: [0.1, 0.3, 0.1],
      }}
      transition={{
        duration: 15,
        delay: index * 0.2,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}

export function TechStack() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section id="tech" ref={containerRef} className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Geometric background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Central rotating geometry */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ rotate }}
        >
          <svg width="500" height="500" viewBox="0 0 500 500" className="opacity-5">
            <polygon
              points="250,50 450,250 250,450 50,250"
              fill="none"
              stroke="rgba(0, 0, 0, 0.4)"
              strokeWidth="2"
            />
            <polygon
              points="250,100 400,250 250,400 100,250"
              fill="none"
              stroke="rgba(0, 0, 0, 0.3)"
              strokeWidth="1.5"
            />
            <polygon
              points="250,150 350,250 250,350 150,250"
              fill="none"
              stroke="rgba(0, 0, 0, 0.2)"
              strokeWidth="1"
            />
          </svg>
          
          {/* Orbiting particles */}
          <div className="absolute left-1/2 top-1/2">
            {[...Array(8)].map((_, i) => (
              <TechParticle key={i} index={i} total={8} />
            ))}
          </div>
        </motion.div>

        {/* Hexagon pattern */}
        <motion.div
          className="absolute right-1/4 top-1/4 opacity-8"
          animate={{
            rotate: [0, -360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg width="200" height="200" viewBox="0 0 200 200">
            <polygon
              points="100,30 170,70 170,130 100,170 30,130 30,70"
              fill="none"
              stroke="rgba(0, 0, 0, 0.25)"
              strokeWidth="2"
            />
          </svg>
        </motion.div>
      </div>

      <div className="max-w-[1800px] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-6 mb-8">
            <motion.div 
              className="w-16 h-px bg-black/15"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
            <span className="text-xs tracking-[0.3em] uppercase text-black/30">
              Technology Stack
            </span>
            <motion.div 
              className="w-16 h-px bg-black/15"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          </div>
          <h2 className="text-5xl md:text-7xl text-black mb-6 tracking-tight">
            Tools We Master
          </h2>
          <p className="text-xl text-black/50 max-w-2xl mx-auto">
            Cutting-edge technologies powering next-generation AI solutions
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="relative p-6 md:p-8 rounded-2xl border border-black/5 hover:border-black/15 transition-all duration-500 cursor-pointer overflow-hidden"
                style={{ backgroundColor: '#faf8f4' }}
              >
                {/* Geometric hover indicator */}
                <motion.div
                  className="absolute top-3 right-3 opacity-0 group-hover:opacity-100"
                  animate={hoveredIndex === index ? {
                    rotate: [0, 180, 360],
                  } : {}}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20">
                    <polygon
                      points="10,3 17,10 10,17 3,10"
                      fill="none"
                      stroke="rgba(0, 0, 0, 0.15)"
                      strokeWidth="1.5"
                    />
                  </svg>
                </motion.div>

                {/* Background subtle effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "radial-gradient(circle at center, rgba(0,0,0,0.02) 0%, transparent 70%)"
                  }}
                />

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    {/* Category badge with triangle marker */}
                    <motion.div 
                      className="w-2 h-2"
                      animate={hoveredIndex === index ? {
                        rotate: [0, 120, 240, 360]
                      } : {}}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <svg viewBox="0 0 8 8">
                        <polygon points="4,1 7,7 1,7" fill="none" stroke="rgba(0,0,0,0.25)" strokeWidth="1" />
                      </svg>
                    </motion.div>
                    <div className="text-sm text-black/30 tracking-wide uppercase">
                      {tech.category}
                    </div>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl text-black group-hover:text-black transition-colors">
                    {tech.name}
                  </h3>

                  {/* Animated underline */}
                  <motion.div
                    className="mt-4 h-px bg-black/0 group-hover:bg-black/20 origin-left"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                {/* Corner geometric accent */}
                <motion.div
                  className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-20"
                  animate={hoveredIndex === index ? {
                    rotate: [0, -90, -180, -270, -360],
                  } : {}}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <polygon
                      points="12,2 22,12 12,22 2,12"
                      fill="none"
                      stroke="rgba(0, 0, 0, 0.6)"
                      strokeWidth="2"
                    />
                  </svg>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
