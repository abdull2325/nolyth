import { motion } from "motion/react";

// Morphing footer geometry
function FooterGeometry({ delay, x, y }: { delay: number; x: string; y: string }) {
  return (
    <motion.div
      className="absolute opacity-8"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, rotate: 0 }}
      animate={{ 
        opacity: [0.05, 0.12, 0.05],
        rotate: [0, 180, 360] 
      }}
      transition={{
        duration: 15,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <svg width="200" height="200" viewBox="0 0 200 200">
        <polygon
          points="100,30 170,100 100,170 30,100"
          fill="none"
          stroke="rgba(0, 0, 0, 0.3)"
          strokeWidth="2"
        />
        <polygon
          points="100,60 140,100 100,140 60,100"
          fill="none"
          stroke="rgba(0, 0, 0, 0.2)"
          strokeWidth="1.5"
        />
      </svg>
    </motion.div>
  );
}

// Floating particle trail
function ParticleTrail({ index }: { index: number }) {
  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full bg-black/20"
      initial={{ opacity: 0, y: 0 }}
      animate={{
        opacity: [0, 0.3, 0],
        y: [-50, -200],
        x: [0, (index % 2 === 0 ? 20 : -20)],
      }}
      transition={{
        duration: 4,
        delay: index * 0.3,
        repeat: Infinity,
        ease: "easeOut",
      }}
      style={{
        left: `${20 + index * 10}%`,
        bottom: 0,
      }}
    />
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-black/5">
      {/* Geometric background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FooterGeometry delay={0} x="15%" y="20%" />
        <FooterGeometry delay={3} x="75%" y="60%" />
        
        {/* Particle trails */}
        {[...Array(6)].map((_, i) => (
          <ParticleTrail key={i} index={i} />
        ))}

        {/* Neural network lines */}
        <svg className="absolute inset-0 w-full h-full opacity-5">
          <motion.path
            d="M 10% 30% Q 50% 10% 90% 40%"
            stroke="rgba(0,0,0,0.4)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.path
            d="M 20% 70% Q 60% 50% 85% 80%"
            stroke="rgba(0,0,0,0.3)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
          />
        </svg>

        {/* Hexagon cluster */}
        <motion.div
          className="absolute right-1/4 top-1/3"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg width="120" height="120" viewBox="0 0 120 120" className="opacity-10">
            <polygon
              points="60,15 95,37.5 95,82.5 60,105 25,82.5 25,37.5"
              fill="none"
              stroke="rgba(0, 0, 0, 0.4)"
              strokeWidth="2"
            />
          </svg>
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="py-40 md:py-60 lg:py-80 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="max-w-[1800px] mx-auto text-center relative">
          {/* Geometric accent behind text */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <svg width="600" height="600" viewBox="0 0 600 600">
              <polygon
                points="300,100 500,300 300,500 100,300"
                fill="none"
                stroke="rgba(0, 0, 0, 0.4)"
                strokeWidth="3"
              />
            </svg>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-6xl mx-auto relative z-10"
          >
            <h2 className="text-black mb-12 md:mb-16 text-6xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.9]">
              Let's Build
              <br />
              <span className="text-black/30">Something Great</span>
            </h2>
            
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-12 py-5 bg-black text-white rounded-full overflow-hidden transition-all duration-500 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Geometric button animation */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-10"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <svg width="100%" height="100%" viewBox="0 0 100 100">
                  <polygon points="50,10 90,50 50,90 10,50" fill="white" />
                </svg>
              </motion.div>
              <span className="relative z-10">Start a Project</span>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="border-t border-black/5 py-24 px-6 md:px-12 lg:px-24 relative">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-2"
            >
              <div className="flex items-center gap-4 mb-6">
                {/* Geometric logo accent */}
                <motion.div
                  animate={{
                    rotate: [0, 120, 240, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <svg width="32" height="32" viewBox="0 0 32 32">
                    <polygon
                      points="16,4 28,16 16,28 4,16"
                      fill="none"
                      stroke="rgba(0, 0, 0, 0.3)"
                      strokeWidth="2"
                    />
                  </svg>
                </motion.div>
                
                <h3 className="text-4xl text-black tracking-tight">
                  NOLYTH
                </h3>
              </div>
              
              <p className="text-black/50 leading-relaxed max-w-md text-lg">
                Architecting intelligent software through precision engineering and design excellence.
              </p>
            </motion.div>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3 mb-8">
                <motion.div 
                  className="w-3 h-3 rotate-45 border border-black/20"
                  animate={{ rotate: [45, 225, 405] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
                <h4 className="text-xs tracking-[0.3em] uppercase text-black/30">
                  Navigation
                </h4>
              </div>
              
              <ul className="space-y-4">
                {[
                  { label: "Work", href: "#work" },
                  { label: "Services", href: "#services" },
                  { label: "About", href: "#about" },
                  { label: "Contact", href: "#contact" },
                ].map((link, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
                  >
                    <a
                      href={link.href}
                      className="text-black/50 hover:text-black transition-colors duration-500 inline-flex items-center gap-2 group"
                    >
                      <motion.span
                        className="w-1 h-1 bg-black/0 group-hover:bg-black/30 rounded-full transition-colors"
                      />
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3 mb-8">
                <motion.div 
                  className="w-3 h-3"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <svg viewBox="0 0 12 12">
                    <polygon points="6,1 11,11 1,11" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5" />
                  </svg>
                </motion.div>
                <h4 className="text-xs tracking-[0.3em] uppercase text-black/30">
                  Connect
                </h4>
              </div>
              
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:contact@nolyth.dev"
                    className="text-black/50 hover:text-black transition-colors duration-500"
                  >
                    contact@nolyth.dev
                  </a>
                </li>
                <li className="text-black/30">
                  Available for projects
                </li>
                <li className="text-black/30">
                  24h response time
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="pt-12 border-t border-black/5"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-8 text-xs text-black/30">
                <span>© {currentYear} Nolyth</span>
                <span className="text-black/10">·</span>
                <a href="#" className="hover:text-black transition-colors duration-500">
                  Privacy
                </a>
                <a href="#" className="hover:text-black transition-colors duration-500">
                  Terms
                </a>
              </div>

              {/* Back to Top with geometric indicator */}
              <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-xs text-black/30 hover:text-black transition-colors duration-500 tracking-wider inline-flex items-center gap-3 group"
                whileHover={{ y: -2 }}
              >
                <motion.div
                  className="w-3 h-3 opacity-0 group-hover:opacity-100"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <svg viewBox="0 0 12 12">
                    <polygon points="6,1 11,6 6,11 1,6" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5" />
                  </svg>
                </motion.div>
                Back to top ↑
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
