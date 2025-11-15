import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, TechVision Inc",
    company: "TechVision",
    content: "Nolyth transformed our legacy system with cutting-edge AI. Their GenAI solutions increased our efficiency by 300%. Simply outstanding work.",
    rating: 5,
    project: "Unlimit",
  },
  {
    name: "Marcus Rodriguez",
    role: "Head of Innovation",
    company: "FinanceFlow",
    content: "The computer vision solution delivered by Nolyth exceeded all expectations. Real-time accuracy and seamless integration into our existing infrastructure.",
    rating: 5,
    project: "Allah-u-Allam",
  },
  {
    name: "Dr. Emily Watson",
    role: "Research Director",
    company: "MedTech Labs",
    content: "Their expertise in machine learning is unparalleled. The automation system they built saves us 40 hours per week and continues to learn and improve.",
    rating: 5,
    project: "Genesys",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-32 px-6 md:px-12 lg:px-24 bg-[#fafaf9] relative overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <motion.div
          className="absolute top-32 right-16"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg width="120" height="120" viewBox="0 0 120 120">
            <polygon
              points="60,15 105,60 60,105 15,60"
              fill="none"
              stroke="rgba(0, 0, 0, 0.05)"
              strokeWidth="2"
            />
          </svg>
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 left-16"
          animate={{
            rotate: [0, -90, -180, -270, -360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg width="90" height="90" viewBox="0 0 90 90">
            <polygon
              points="45,12 78,45 45,78 12,45"
              fill="none"
              stroke="rgba(0, 0, 0, 0.04)"
              strokeWidth="1.5"
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
          className="max-w-4xl mb-20"
        >
          <div className="flex items-center gap-6 mb-8">
            <div className="w-16 h-px bg-black/10" />
            <span className="text-xs tracking-[0.3em] uppercase text-black/30">
              Client Success
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl text-black mb-6 tracking-tight">
            Trusted by Innovators
          </h2>
          <p className="text-xl text-black/50">
            What our clients say about working with us
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="relative p-8 rounded-2xl border border-black/5 hover:border-black/10 transition-all duration-500 h-full flex flex-col overflow-hidden"
                style={{ backgroundColor: '#faf8f4' }}>
                {/* Geometric Corner Accents */}
                <motion.div
                  className="absolute top-3 right-3 opacity-0 group-hover:opacity-100"
                  animate={{
                    rotate: [0, 90, 180, 270, 360],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <polygon
                      points="12,4 20,12 12,20 4,12"
                      fill="none"
                      stroke="rgba(0, 0, 0, 0.1)"
                      strokeWidth="1.5"
                    />
                  </svg>
                </motion.div>
                
                {/* Geometric Quote Icon */}
                <div className="mb-6 relative">
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
                        points="16,6 26,26 6,26"
                        fill="none"
                        stroke="rgba(0, 0, 0, 0.1)"
                        strokeWidth="2"
                        className="group-hover:stroke-black/20 transition-colors"
                      />
                    </svg>
                  </motion.div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                    >
                      <Star
                        className="w-4 h-4 fill-black text-black"
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <p className="text-black/70 leading-relaxed mb-8 flex-1">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="border-t border-black/5 pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-black mb-1">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-black/40">
                        {testimonial.role}
                      </div>
                    </div>
                    <div className="text-xs text-black/20 tracking-wider uppercase">
                      {testimonial.project}
                    </div>
                  </div>
                </div>

                {/* Geometric Hover Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/5">
                  <motion.div
                    className="h-full bg-black flex items-center justify-end pr-1"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.4 }}
                  >
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <svg width="6" height="6" viewBox="0 0 6 6">
                        <polygon
                          points="3,0 6,3 3,6 0,3"
                          fill="white"
                        />
                      </svg>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-12 md:gap-20"
        >
          {[
            { value: "100%", label: "Client Satisfaction" },
            { value: "5.0", label: "Average Rating" },
            { value: "12+", label: "Success Stories" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl text-black mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm text-black/40 tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
