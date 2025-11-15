import { motion } from "motion/react";
import { AnimatedCounter } from "./AnimatedCounter";
import { TrendingUp, Users, Zap, Award } from "lucide-react";

const stats = [
  {
    icon: <TrendingUp className="w-8 h-8" />,
    value: 300,
    suffix: "%",
    label: "Average Efficiency Gain",
    description: "Our AI solutions boost productivity"
  },
  {
    icon: <Users className="w-8 h-8" />,
    value: 12,
    suffix: "+",
    label: "Projects Delivered",
    description: "Successfully launched applications"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    value: 99,
    suffix: ".9%",
    label: "Accuracy Rate",
    description: "In computer vision models"
  },
  {
    icon: <Award className="w-8 h-8" />,
    value: 100,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Every project exceeds expectations"
  },
];

export function StatsShowcase() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-[1800px] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight">
            Impact by Numbers
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Real results from real projects. Our AI solutions deliver measurable outcomes.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Card */}
              <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 h-full">
                {/* Icon */}
                <motion.div
                  className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="text-white/80 group-hover:text-white transition-colors">
                    {stat.icon}
                  </div>
                </motion.div>

                {/* Value */}
                <div className="text-6xl md:text-7xl mb-3 tracking-tight tabular-nums">
                  <AnimatedCounter 
                    value={stat.value} 
                    suffix={stat.suffix}
                    className="text-white"
                  />
                </div>

                {/* Label */}
                <div className="text-xl mb-2 text-white/90">
                  {stat.label}
                </div>

                {/* Description */}
                <p className="text-sm text-white/50 leading-relaxed">
                  {stat.description}
                </p>

                {/* Hover Effect Line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-white"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
