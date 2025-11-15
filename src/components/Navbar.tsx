import { motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const updateScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  // Track active section using Intersection Observer
  useEffect(() => {
    const sections = ["work", "services", "why-us", "tech", "process", "testimonials", "team", "about", "contact"];
    
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: [0, 0.25, 0.5, 0.75, 1],
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      let maxRatio = 0;
      let mostVisibleSection = "";

      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          mostVisibleSection = entry.target.id;
        }
      });

      if (mostVisibleSection) {
        setActiveSection(mostVisibleSection);
      } else if (window.scrollY < 100) {
        setActiveSection("");
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Tech", href: "#tech" },
    { name: "Process", href: "#process" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Team", href: "#team" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Glassmorphic Floating Badge */}
      <motion.div
        className="fixed top-4 left-1/2 -translate-x-1/2 z-[60]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 100%)',
            backdropFilter: 'blur(12px) saturate(180%)',
            WebkitBackdropFilter: 'blur(12px) saturate(180%)',
            boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.3), 0 8px 16px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Sparkles className="w-4 h-4 text-black/60" />
          <span className="text-sm text-black/70">AI-Powered Innovation</span>
        </motion.div>
      </motion.div>
      
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "backdrop-blur-xl border-b border-black/5" : ""
        }`}
        style={scrolled ? { backgroundColor: 'rgba(245, 241, 235, 0.6)' } : {}}
      >
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24 py-8 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="text-sm tracking-wider relative group flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            {/* Geometric Logo Accent */}
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
              <svg width="14" height="14" viewBox="0 0 14 14">
                <polygon
                  points="7,2 12,7 7,12 2,7"
                  fill="none"
                  stroke="rgba(0, 0, 0, 0.6)"
                  strokeWidth="1.5"
                />
              </svg>
            </motion.div>
            
            <span className="text-black">NOLYTH</span>
            <div className="absolute -bottom-1 left-0 h-px w-0 bg-black group-hover:w-full transition-all duration-500" />
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, i) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative text-xs tracking-wider transition-colors duration-500 group/link ${
                    isActive ? "text-black" : "text-black/40 hover:text-black"
                  }`}
                >
                  {/* Geometric Active Indicator */}
                  {isActive && (
                    <motion.div
                      className="absolute -left-4 top-1/2 -translate-y-1/2"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        animate={{
                          rotate: [0, 90, 180, 270, 360],
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <svg width="8" height="8" viewBox="0 0 8 8">
                          <polygon
                            points="4,1 7,4 4,7 1,4"
                            fill="rgba(0, 0, 0, 0.4)"
                          />
                        </svg>
                      </motion.div>
                    </motion.div>
                  )}
                  
                  {link.name}
                  
                  {/* Geometric Hover Underline */}
                  <div className="absolute -bottom-1 left-0 right-0 h-px overflow-hidden">
                    <motion.div
                      className="h-full bg-black flex items-center"
                      initial={{ width: isActive ? "100%" : "0%" }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className="ml-auto"
                        animate={{
                          x: [0, 4, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <svg width="6" height="6" viewBox="0 0 6 6" className="opacity-0 group-hover/link:opacity-100 transition-opacity">
                          <polygon
                            points="3,1 5,3 3,5 1,3"
                            fill="white"
                          />
                        </svg>
                      </motion.div>
                    </motion.div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative w-6 h-6 flex flex-col justify-center gap-1.5 group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`w-full h-px bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-px bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-px bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          y: isMenuOpen ? 0 : -20,
          pointerEvents: isMenuOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 backdrop-blur-xl z-40 lg:hidden overflow-hidden"
        style={{ backgroundColor: 'rgba(245, 241, 235, 0.98)' }}
      >
        {/* Geometric Background Elements */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <motion.div
            className="absolute top-20 right-10"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <svg width="100" height="100" viewBox="0 0 100 100">
              <polygon
                points="50,10 90,50 50,90 10,50"
                fill="none"
                stroke="rgba(0, 0, 0, 0.1)"
                strokeWidth="2"
              />
            </svg>
          </motion.div>
          
          <motion.div
            className="absolute bottom-32 left-10"
            animate={{
              rotate: [0, -120, -240, -360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <svg width="80" height="80" viewBox="0 0 80 80">
              <polygon
                points="40,10 70,40 40,70 10,40"
                fill="none"
                stroke="rgba(0, 0, 0, 0.08)"
                strokeWidth="1.5"
              />
            </svg>
          </motion.div>
        </div>
        
        <div className="h-full flex flex-col items-center justify-center gap-8 px-8 relative z-10">
          {navLinks.map((link, i) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            
            return (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isMenuOpen ? 1 : 0,
                  y: isMenuOpen ? 0 : 20,
                }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                onClick={() => setIsMenuOpen(false)}
                className={`text-4xl transition-colors duration-300 flex items-center gap-4 ${
                  isActive ? "text-black" : "text-gray-600 hover:text-black"
                }`}
                whileTap={{ scale: 0.95 }}
              >
                {isActive && (
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16">
                      <polygon
                        points="8,2 14,8 8,14 2,8"
                        fill="rgba(0, 0, 0, 0.6)"
                      />
                    </svg>
                  </motion.div>
                )}
                {link.name}
              </motion.a>
            );
          })}
          
          {/* Mobile menu footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isMenuOpen ? 1 : 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="absolute bottom-12 text-center"
          >
            <p className="text-sm text-black/40 mb-4">Get in touch</p>
            <a 
              href="mailto:contact@nolyth.dev"
              className="text-black/60 hover:text-black transition-colors"
            >
              contact@nolyth.dev
            </a>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
