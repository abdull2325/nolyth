import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink, Github, Award, Users, Calendar, Zap, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useEffect } from "react";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  year: string;
  category: string;
  image: string;
  fullDescription?: string;
  challenge?: string;
  solution?: string;
  results?: string[];
  technologies?: string[];
  duration?: string;
  teamSize?: string;
  metrics?: { label: string; value: string }[];
  gallery?: string[];
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-md z-[100]"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[101] overflow-y-auto">
            <div className="min-h-screen px-4 py-12 md:py-20 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full max-w-5xl bg-white rounded-2xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-white/90 hover:bg-white backdrop-blur-sm flex items-center justify-center transition-all shadow-lg border border-black/5"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 text-black" />
                </motion.button>

                {/* Hero Image */}
                <div className="relative h-[300px] md:h-[400px] overflow-hidden bg-black/5">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                  
                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="px-4 py-1.5 rounded-full bg-black/90 backdrop-blur-sm text-white text-xs tracking-wider uppercase">
                          {project.category}
                        </span>
                        <span className="text-black/60 text-sm font-medium">{project.year}</span>
                      </div>
                      <h2 className="text-4xl md:text-5xl mb-2 text-black tracking-tight">{project.title}</h2>
                      <p className="text-lg md:text-xl text-black/70">{project.subtitle}</p>
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-10 space-y-10 max-h-[50vh] overflow-y-auto relative">
                  {/* Geometric background elements */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
                    <motion.div
                      className="absolute right-10 top-10"
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <svg width="80" height="80" viewBox="0 0 80 80">
                        <polygon
                          points="40,10 70,40 40,70 10,40"
                          fill="none"
                          stroke="rgba(0, 0, 0, 0.08)"
                          strokeWidth="2"
                        />
                      </svg>
                    </motion.div>
                    
                    <motion.div
                      className="absolute left-10 bottom-20"
                      animate={{
                        rotate: [0, -120, -240, -360],
                      }}
                      transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <svg width="60" height="60" viewBox="0 0 60 60">
                        <polygon
                          points="30,5 55,30 30,55 5,30"
                          fill="none"
                          stroke="rgba(0, 0, 0, 0.06)"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Meta Info Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
                    {project.duration && (
                      <motion.div 
                        className="glass-strong rounded-xl p-5 hover:shadow-md transition-all duration-500 group relative overflow-hidden border border-black/5"
                        whileHover={{ y: -2 }}
                      >
                        {/* Geometric corner accent */}
                        <motion.div
                          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100"
                          animate={{
                            rotate: [0, 90, 180, 270, 360],
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
                              fill="none"
                              stroke="rgba(0, 0, 0, 0.15)"
                              strokeWidth="1.5"
                            />
                          </svg>
                        </motion.div>
                        
                        <Calendar className="w-5 h-5 text-black/40 mb-3" />
                        <div className="text-xs text-black/40 mb-1 tracking-wide uppercase">Duration</div>
                        <div className="text-black">{project.duration}</div>
                      </motion.div>
                    )}
                    {project.teamSize && (
                      <motion.div 
                        className="glass-strong rounded-xl p-5 hover:shadow-md transition-all duration-500 group relative overflow-hidden border border-black/5"
                        whileHover={{ y: -2 }}
                      >
                        <motion.div
                          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100"
                          animate={{
                            rotate: [0, 90, 180, 270, 360],
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
                              fill="none"
                              stroke="rgba(0, 0, 0, 0.15)"
                              strokeWidth="1.5"
                            />
                          </svg>
                        </motion.div>
                        
                        <Users className="w-5 h-5 text-black/40 mb-3" />
                        <div className="text-xs text-black/40 mb-1 tracking-wide uppercase">Team</div>
                        <div className="text-black">{project.teamSize}</div>
                      </motion.div>
                    )}
                    <motion.div 
                      className="glass-strong rounded-xl p-5 hover:shadow-md transition-all duration-500 group relative overflow-hidden border border-black/5"
                      whileHover={{ y: -2 }}
                    >
                      <motion.div
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100"
                        animate={{
                          rotate: [0, 90, 180, 270, 360],
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
                            fill="none"
                            stroke="rgba(0, 0, 0, 0.15)"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </motion.div>
                      
                      <Zap className="w-5 h-5 text-black/40 mb-3" />
                      <div className="text-xs text-black/40 mb-1 tracking-wide uppercase">Status</div>
                      <div className="text-black">Delivered</div>
                    </motion.div>
                    <motion.div 
                      className="glass-strong rounded-xl p-5 hover:shadow-md transition-all duration-500 group relative overflow-hidden border border-black/5"
                      whileHover={{ y: -2 }}
                    >
                      <motion.div
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100"
                        animate={{
                          rotate: [0, 90, 180, 270, 360],
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
                            fill="none"
                            stroke="rgba(0, 0, 0, 0.15)"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </motion.div>
                      
                      <Award className="w-5 h-5 text-black/40 mb-3" />
                      <div className="text-xs text-black/40 mb-1 tracking-wide uppercase">Impact</div>
                      <div className="text-black">High</div>
                    </motion.div>
                  </div>

                  {/* Overview */}
                  <div className="relative z-10">
                    <h3 className="text-2xl md:text-3xl mb-4 text-black flex items-center gap-3">
                      <motion.div
                        animate={{
                          rotate: [0, 120, 240, 360],
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24">
                          <polygon
                            points="12,3 21,12 12,21 3,12"
                            fill="none"
                            stroke="rgba(0, 0, 0, 0.6)"
                            strokeWidth="2"
                          />
                        </svg>
                      </motion.div>
                      Overview
                    </h3>
                    <p className="text-base md:text-lg text-black/60 leading-relaxed">
                      {project.fullDescription || project.description}
                    </p>
                  </div>

                  {/* Challenge */}
                  {project.challenge && (
                    <div className="relative z-10">
                      <h3 className="text-2xl md:text-3xl mb-4 text-black flex items-center gap-3">
                        <motion.div
                          animate={{
                            rotate: [0, 180, 360],
                          }}
                          transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        >
                          <svg width="24" height="24" viewBox="0 0 24 24">
                            <polygon
                              points="12,4 20,12 12,20 4,12"
                              fill="none"
                              stroke="rgba(0, 0, 0, 0.5)"
                              strokeWidth="2"
                            />
                          </svg>
                        </motion.div>
                        Challenge
                      </h3>
                      <p className="text-base md:text-lg text-black/60 leading-relaxed">{project.challenge}</p>
                    </div>
                  )}

                  {/* Solution */}
                  {project.solution && (
                    <div className="relative z-10">
                      <h3 className="text-2xl md:text-3xl mb-4 text-black flex items-center gap-3">
                        <motion.div
                          animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 45, 90, 135, 180],
                          }}
                          transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        >
                          <svg width="24" height="24" viewBox="0 0 24 24">
                            <polygon
                              points="12,5 19,12 12,19 5,12"
                              fill="none"
                              stroke="rgba(0, 0, 0, 0.4)"
                              strokeWidth="2"
                            />
                          </svg>
                        </motion.div>
                        Solution
                      </h3>
                      <p className="text-base md:text-lg text-black/60 leading-relaxed">{project.solution}</p>
                    </div>
                  )}

                  {/* Technologies */}
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="relative z-10">
                      <h3 className="text-2xl md:text-3xl mb-4 text-black flex items-center gap-3">
                        <motion.div
                          animate={{
                            rotate: [0, -90, -180, -270, -360],
                          }}
                          transition={{
                            duration: 12,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        >
                          <svg width="24" height="24" viewBox="0 0 24 24">
                            <polygon
                              points="12,6 18,12 12,18 6,12"
                              fill="none"
                              stroke="rgba(0, 0, 0, 0.3)"
                              strokeWidth="2"
                            />
                          </svg>
                        </motion.div>
                        Technologies
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.03 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="px-4 py-2 rounded-full bg-black/5 hover:bg-black/10 text-black/70 text-sm transition-colors border border-black/10 relative group overflow-hidden"
                          >
                            {/* Geometric hover indicator */}
                            <motion.div
                              className="absolute top-1 right-1 opacity-0 group-hover:opacity-100"
                              animate={{
                                rotate: [0, 360],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                            >
                              <svg width="8" height="8" viewBox="0 0 8 8">
                                <polygon
                                  points="4,1 7,4 4,7 1,4"
                                  fill="none"
                                  stroke="rgba(0, 0, 0, 0.2)"
                                  strokeWidth="1"
                                />
                              </svg>
                            </motion.div>
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Results/Metrics */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="relative z-10">
                      <h3 className="text-2xl md:text-3xl mb-6 text-black flex items-center gap-3">
                        <motion.div
                          animate={{
                            rotate: [0, 360],
                            scale: [1, 1.15, 1],
                          }}
                          transition={{
                            duration: 14,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        >
                          <svg width="24" height="24" viewBox="0 0 24 24">
                            <polygon
                              points="12,7 17,12 12,17 7,12"
                              fill="none"
                              stroke="rgba(0, 0, 0, 0.25)"
                              strokeWidth="2"
                            />
                          </svg>
                        </motion.div>
                        Impact & Results
                      </h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        {project.metrics.map((metric, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -4, scale: 1.02 }}
                            className="glass-strong rounded-xl p-6 text-center hover:shadow-lg transition-all duration-500 group relative overflow-hidden border border-black/5"
                          >
                            {/* Triangle accent */}
                            <motion.div
                              className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100"
                              animate={{
                                rotate: [0, 120, 240, 360],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                            >
                              <svg width="20" height="20" viewBox="0 0 20 20">
                                <polygon
                                  points="10,4 16,16 4,16"
                                  fill="none"
                                  stroke="rgba(0, 0, 0, 0.1)"
                                  strokeWidth="1.5"
                                />
                              </svg>
                            </motion.div>
                            
                            <div className="text-4xl md:text-5xl mb-2 text-black tracking-tight">
                              {metric.value}
                            </div>
                            <div className="text-sm text-black/50 uppercase tracking-wide">
                              {metric.label}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Results List */}
                  {project.results && project.results.length > 0 && (
                    <div className="relative z-10">
                      <h3 className="text-2xl md:text-3xl mb-6 text-black flex items-center gap-3">
                        <motion.div
                          animate={{
                            rotate: [0, -45, -90, -135, -180, -225, -270, -315, -360],
                          }}
                          transition={{
                            duration: 16,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        >
                          <svg width="24" height="24" viewBox="0 0 24 24">
                            <polygon
                              points="12,8 16,12 12,16 8,12"
                              fill="none"
                              stroke="rgba(0, 0, 0, 0.2)"
                              strokeWidth="2"
                            />
                          </svg>
                        </motion.div>
                        Key Results
                      </h3>
                      <div className="space-y-3">
                        {project.results.map((result, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            whileHover={{ x: 4 }}
                            className="flex items-start gap-3 p-4 rounded-xl hover:bg-black/5 transition-all duration-300 group relative border border-transparent hover:border-black/5"
                          >
                            {/* Triangle marker */}
                            <motion.div
                              className="flex-shrink-0 mt-0.5"
                              animate={{
                                rotate: [0, 120, 240, 360],
                              }}
                              transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                            >
                              <svg width="20" height="20" viewBox="0 0 20 20">
                                <polygon
                                  points="10,4 16,16 4,16"
                                  fill="none"
                                  stroke="rgba(0, 0, 0, 0.3)"
                                  strokeWidth="1.5"
                                />
                              </svg>
                            </motion.div>
                            <span className="text-black/70 leading-relaxed">{result}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="p-6 md:p-10 pt-0 flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={onClose}
                    className="flex-1 px-6 py-3 rounded-full bg-black text-white hover:bg-black/90 transition-colors"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => window.scrollTo({ top: document.getElementById('contact')?.offsetTop || 0, behavior: 'smooth' })}
                    className="flex-1 px-6 py-3 rounded-full border border-black/20 text-black hover:bg-black/5 transition-colors"
                  >
                    Start Similar Project
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
