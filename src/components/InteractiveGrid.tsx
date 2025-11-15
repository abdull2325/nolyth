import { motion } from "motion/react";
import { useState } from "react";
import { Brain, Eye, Sparkles, Zap, Code, Database } from "lucide-react";

const items = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Machine Learning",
    description: "Custom models trained on your data",
    color: "from-blue-500 to-cyan-500",
    stats: "99.5% accuracy",
  },
  {
    icon: <Eye className="w-8 h-8" />,
    title: "Computer Vision",
    description: "Real-time image & video analysis",
    color: "from-purple-500 to-pink-500",
    stats: "30fps processing",
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Generative AI",
    description: "LLM integration & fine-tuning",
    color: "from-green-500 to-emerald-500",
    stats: "GPT-4 powered",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Automation",
    description: "Intelligent workflow optimization",
    color: "from-orange-500 to-red-500",
    stats: "10x faster",
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Full-Stack",
    description: "End-to-end development",
    color: "from-indigo-500 to-purple-500",
    stats: "Cloud native",
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Data Engineering",
    description: "Scalable data pipelines",
    color: "from-teal-500 to-cyan-500",
    stats: "PB scale",
  },
];

export function InteractiveGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-32 px-6 md:px-12 lg:px-24 bg-[#fafaf9] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.03) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
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
          <h2 className="text-6xl md:text-8xl lg:text-9xl tracking-tighter mb-6">
            Capabilities
          </h2>
          <p className="text-2xl text-black/50 max-w-2xl mx-auto">
            End-to-end AI solutions that scale
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
            >
              <motion.div
                className="relative h-full p-8 rounded-3xl border border-black/5 overflow-hidden"
                style={{ backgroundColor: '#faf8f4' }}
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Gradient Background on Hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Animated Glow */}
                {hoveredIndex === index && (
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-20 blur-2xl`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1.2, opacity: 0.2 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                )}

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-black/5 group-hover:bg-black/10 flex items-center justify-center mb-6 relative overflow-hidden border border-black/5"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Rotating geometric background */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100"
                      animate={{
                        rotate: [0, 90, 180, 270, 360],
                      }}
                      transition={{
                        duration: 6 + index,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <svg width="50" height="50" viewBox="0 0 50 50">
                        <polygon
                          points="25,8 42,25 25,42 8,25"
                          fill="none"
                          stroke="rgba(0, 0, 0, 0.08)"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </motion.div>
                    
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                    />
                    <div className="relative text-black/60 group-hover:text-black transition-colors z-10">
                      {item.icon}
                    </div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl mb-3 tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-black/60 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Stats Badge with geometric indicator */}
                  <motion.div
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-black/5 rounded-full text-xs tracking-wide group/badge hover:bg-black/10 transition-colors border border-black/5"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12">
                        <polygon
                          points="6,2 10,6 6,10 2,6"
                          className={`fill-current text-black/30`}
                        />
                      </svg>
                    </motion.div>
                    <span className="text-black/50">{item.stats}</span>
                  </motion.div>
                </div>

                {/* Bottom Border Indicator */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${item.color}`}
                  initial={{ width: 0 }}
                  animate={{ width: hoveredIndex === index ? "100%" : 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Corner Accent */}
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 rounded-bl-full opacity-0 group-hover:opacity-10"
                  style={{
                    background: `linear-gradient(135deg, ${item.color.includes('blue') ? '#3b82f6' : item.color.includes('purple') ? '#a855f7' : item.color.includes('green') ? '#10b981' : item.color.includes('orange') ? '#f97316' : item.color.includes('indigo') ? '#6366f1' : '#14b8a6'} 0%, transparent 100%)`
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Floating CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mt-20"
        >
          <motion.button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-black text-white rounded-full relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <span className="relative">Let's Build Something Amazing</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
