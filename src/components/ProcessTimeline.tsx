import { motion } from "motion/react";
import { MessageSquare, Lightbulb, Code, Rocket, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Discovery",
    description: "We dive deep into your challenges, goals, and vision to understand exactly what you need.",
    duration: "1-2 weeks",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Strategy",
    description: "Our team crafts a comprehensive AI/ML strategy tailored to your specific use case and industry.",
    duration: "1-2 weeks",
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Development",
    description: "Agile development with continuous feedback, building and refining your solution iteratively.",
    duration: "4-12 weeks",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Deployment",
    description: "Seamless integration into your infrastructure with comprehensive testing and training.",
    duration: "1-2 weeks",
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: "Support",
    description: "Ongoing optimization, monitoring, and support to ensure continued success and evolution.",
    duration: "Ongoing",
  },
];

export function ProcessTimeline() {
  return (
    <section id="process" className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <motion.div
          className="absolute top-20 left-10"
          animate={{
            rotate: [0, 360],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg width="100" height="100" viewBox="0 0 100 100">
            <polygon
              points="50,10 90,50 50,90 10,50"
              fill="none"
              stroke="rgba(0, 0, 0, 0.06)"
              strokeWidth="2"
            />
          </svg>
        </motion.div>
        
        <motion.div
          className="absolute bottom-32 right-16"
          animate={{
            rotate: [0, -180, -360],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg width="80" height="80" viewBox="0 0 80 80">
            <polygon
              points="40,8 72,40 40,72 8,40"
              fill="none"
              stroke="rgba(0, 0, 0, 0.04)"
              strokeWidth="1.5"
            />
          </svg>
        </motion.div>
      </div>
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-16 h-px bg-black/10" />
            <span className="text-xs tracking-[0.3em] uppercase text-black/30">
              Our Process
            </span>
            <div className="w-16 h-px bg-black/10" />
          </div>
          <h2 className="text-5xl md:text-7xl text-black mb-6 tracking-tight">
            How We Work
          </h2>
          <p className="text-xl text-black/50 max-w-2xl mx-auto">
            A proven methodology that delivers exceptional AI solutions
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line - Desktop with Geometric Particles */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-px bg-black/10">
            {/* Animated particles along the line */}
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 -translate-y-1/2"
                style={{ left: `${i * 25}%` }}
                animate={{
                  scale: [1, 1.5, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
              >
                <svg width="8" height="8" viewBox="0 0 8 8">
                  <polygon
                    points="4,1 7,4 4,7 1,4"
                    fill="rgba(0, 0, 0, 0.2)"
                  />
                </svg>
              </motion.div>
            ))}
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-5 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative"
              >
                {/* Step Number with Morphing Geometric Shape */}
                <div className="flex items-center mb-8 md:justify-center">
                  <motion.div
                    whileHover={{ scale: 1.15, y: -4 }}
                    className="relative z-10 w-16 h-16 rounded-full border-2 border-black/10 flex items-center justify-center group hover:border-black/30 transition-all duration-500 overflow-hidden"
                    style={{ backgroundColor: '#faf8f4' }}
                  >
                    {/* Rotating geometric background */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      animate={{
                        rotate: [0, 90, 180, 270, 360],
                      }}
                      transition={{
                        duration: 8 + index * 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <svg width="40" height="40" viewBox="0 0 40 40" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <polygon
                          points="20,8 32,20 20,32 8,20"
                          fill="none"
                          stroke="rgba(0, 0, 0, 0.08)"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </motion.div>
                    
                    <div className="absolute inset-0 rounded-full bg-black/5 scale-0 group-hover:scale-100 transition-transform duration-500" />
                    <span className="relative text-black/60 group-hover:text-black transition-colors z-10">
                      {step.icon}
                    </span>
                    
                    {/* Step number indicator */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs">
                      {index + 1}
                    </div>
                  </motion.div>
                  
                  {/* Mobile connector with animated particle */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex-1 h-px bg-black/10 ml-4 relative">
                      <motion.div
                        className="absolute top-1/2 -translate-y-1/2"
                        animate={{
                          x: [0, 40, 0],
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <svg width="6" height="6" viewBox="0 0 6 6">
                          <polygon
                            points="3,0 6,3 3,6 0,3"
                            fill="rgba(0, 0, 0, 0.3)"
                          />
                        </svg>
                      </motion.div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="md:text-center">
                  <h3 className="text-xl md:text-2xl text-black mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-black/50 leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/5 text-xs text-black/40 tracking-wide border border-black/5 group hover:border-black/10 transition-colors">
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
                      <svg width="10" height="10" viewBox="0 0 10 10">
                        <polygon
                          points="5,2 8,5 5,8 2,5"
                          fill="rgba(0, 0, 0, 0.3)"
                        />
                      </svg>
                    </motion.div>
                    {step.duration}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-black text-white rounded-full hover:shadow-lg transition-shadow"
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
