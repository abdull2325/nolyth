import { motion } from "motion/react";
import { ArrowRight, TrendingUp, Users, Award, Rocket } from "lucide-react";

export function BentoGrid() {
  return (
    <section id="why-us" className="py-32 px-6 md:px-12 lg:px-24 bg-[#f5f1eb] text-black relative overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <motion.div
          className="absolute top-20 right-20"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg width="150" height="150" viewBox="0 0 150 150">
            <polygon
              points="75,20 130,75 75,130 20,75"
              fill="none"
              stroke="rgba(0, 0, 0, 0.06)"
              strokeWidth="2"
            />
          </svg>
        </motion.div>
        
        <motion.div
          className="absolute bottom-40 left-20"
          animate={{
            rotate: [0, -120, -240, -360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg width="100" height="100" viewBox="0 0 100 100">
            <polygon
              points="50,10 90,50 50,90 10,50"
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
          className="mb-16"
        >
          <div className="flex items-center gap-6 mb-8">
            <div className="w-16 h-px bg-black/10" />
            <span className="text-xs tracking-[0.3em] uppercase text-black/30">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-6xl md:text-8xl tracking-tighter mb-6">
            Why Choose Us
          </h2>
          <p className="text-2xl text-black/60 max-w-2xl">
            We don't just build AI — we create competitive advantages
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-4 md:grid-rows-3 gap-4 md:gap-6">
          {/* Large Feature 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="md:col-span-2 md:row-span-2 group relative rounded-3xl bg-white/40 backdrop-blur-sm p-8 md:p-12 border border-black/10 overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all duration-500"
          >
            {/* Geometric Accent */}
            <motion.div
              className="absolute top-6 right-6 opacity-0 group-hover:opacity-100"
              animate={{
                rotate: [0, 90, 180, 270, 360],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <svg width="40" height="40" viewBox="0 0 40 40">
                <polygon
                  points="20,5 35,20 20,35 5,20"
                  fill="none"
                  stroke="rgba(0, 0, 0, 0.1)"
                  strokeWidth="2"
                />
              </svg>
            </motion.div>
            
            <div className="relative z-10 h-full flex flex-col">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 rounded-2xl bg-black/5 flex items-center justify-center mb-6 border border-black/10"
              >
                <TrendingUp className="w-8 h-8 text-black/60" />
              </motion.div>
              
              <h3 className="text-4xl md:text-5xl mb-4 tracking-tight text-black">
                300%
              </h3>
              <p className="text-xl text-black/60 mb-auto">
                Average efficiency increase across client projects
              </p>

              <motion.div
                className="flex items-center gap-2 text-black/40 group-hover:text-black transition-colors mt-8"
                whileHover={{ x: 5 }}
              >
                <span className="text-sm">Learn how</span>
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </div>
          </motion.div>

          {/* Small Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="group rounded-3xl bg-white/40 backdrop-blur-sm p-8 border border-black/10 shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden"
          >
            <motion.div
              className="absolute top-3 right-3 opacity-0 group-hover:opacity-100"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
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
            
            <Users className="w-8 h-8 mb-4 text-black/60 group-hover:text-black transition-colors" />
            <h3 className="text-3xl mb-2 text-black">12+</h3>
            <p className="text-sm text-black/50">Projects Delivered</p>
          </motion.div>

          {/* Small Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ y: -5 }}
            className="group rounded-3xl bg-white/40 backdrop-blur-sm p-8 border border-black/10 shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden"
          >
            <motion.div
              className="absolute top-3 right-3 opacity-0 group-hover:opacity-100"
              animate={{
                rotate: [0, -120, -240, -360],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
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
            
            <Award className="w-8 h-8 mb-4 text-black/60 group-hover:text-black transition-colors" />
            <h3 className="text-3xl mb-2 text-black">100%</h3>
            <p className="text-sm text-black/50">Client Satisfaction</p>
          </motion.div>

          {/* Wide Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="md:col-span-2 group rounded-3xl bg-white/40 backdrop-blur-sm p-8 border border-black/10 shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden"
          >
            <motion.div
              className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100"
              animate={{
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <svg width="30" height="30" viewBox="0 0 30 30">
                <polygon
                  points="15,5 25,15 15,25 5,15"
                  fill="none"
                  stroke="rgba(0, 0, 0, 0.1)"
                  strokeWidth="2"
                />
              </svg>
            </motion.div>
            
            <div className="relative z-10">
              <Rocket className="w-8 h-8 mb-4 text-black/60 group-hover:text-black transition-colors" />
              <h3 className="text-2xl mb-2 text-black">Rapid Deployment</h3>
              <p className="text-black/50">From concept to production in weeks, not months</p>
            </div>
          </motion.div>

          {/* Large Feature 2 - Proven Results */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            whileHover={{ y: -4 }}
            className="md:col-span-2 md:row-span-2 group relative rounded-3xl bg-white/40 backdrop-blur-sm p-8 md:p-12 border border-black/10 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden cursor-pointer"
          >
            <motion.div
              className="absolute top-6 left-6 opacity-0 group-hover:opacity-100"
              animate={{
                rotate: [0, 45, 90, 135, 180],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <svg width="40" height="40" viewBox="0 0 40 40">
                <polygon
                  points="20,5 35,20 20,35 5,20"
                  fill="none"
                  stroke="rgba(0, 0, 0, 0.08)"
                  strokeWidth="2"
                />
              </svg>
            </motion.div>
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-4xl md:text-5xl mb-6 tracking-tight leading-tight text-black">
                  Proven Track Record
                </h3>
                <p className="text-lg text-black/60 mb-8">
                  Real results from production AI systems deployed at scale
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Efficiency Gain', value: '300%' },
                  { label: 'Model Accuracy', value: '99.9%' },
                  { label: 'Uptime', value: '99.99%' },
                  { label: 'Client Satisfaction', value: '100%' }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-4 bg-black/5 rounded-xl text-center border border-black/10 relative group/stat overflow-hidden"
                  >
                    <motion.div
                      className="absolute top-2 right-2 opacity-0 group-hover/stat:opacity-100"
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
                          fill="rgba(0, 0, 0, 0.2)"
                        />
                      </svg>
                    </motion.div>
                    <div className="text-2xl md:text-3xl text-black mb-1">{stat.value}</div>
                    <div className="text-xs text-black/50">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quote Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -4 }}
            className="md:col-span-2 group rounded-3xl bg-white/40 backdrop-blur-sm p-8 border border-black/10 shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden"
          >
            {/* Rotating Triangle Quote Marker */}
            <motion.div
              className="absolute top-4 left-4"
              animate={{
                rotate: [0, 120, 240, 360],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <svg width="40" height="40" viewBox="0 0 40 40">
                <polygon
                  points="20,8 32,32 8,32"
                  fill="none"
                  stroke="rgba(0, 0, 0, 0.08)"
                  strokeWidth="2"
                />
              </svg>
            </motion.div>
            
            <div className="relative z-10">
              <div className="text-6xl text-black/10 mb-4">"</div>
              <p className="text-lg text-black/70 mb-4 italic">
                Nolyth transformed our vision into reality. Their AI solution exceeded all expectations.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-black/10 border border-black/10" />
                <div>
                  <p className="text-sm text-black">Sarah Chen</p>
                  <p className="text-xs text-black/40">CTO, TechVision Inc</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
