import { motion } from "motion/react";
import { Brain, Eye, Sparkles, Workflow } from "lucide-react";

const highlights = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Advanced ML Models",
    description: "State-of-the-art deep learning",
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Computer Vision",
    description: "Real-time object detection",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Generative AI",
    description: "LLM integration & fine-tuning",
  },
  {
    icon: <Workflow className="w-6 h-6" />,
    title: "Automation",
    description: "Intelligent workflow optimization",
  },
];

export function QuickHighlights() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="group relative p-6 rounded-xl border border-black/5 hover:border-black/10 hover:shadow-lg transition-all duration-300"
              style={{ backgroundColor: '#faf8f4' }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-black/5 group-hover:bg-black/10 flex items-center justify-center mb-4 transition-colors">
                <div className="text-black/60 group-hover:text-black transition-colors">
                  {item.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg mb-2 text-black group-hover:text-black transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-black/50">
                {item.description}
              </p>

              {/* Hover indicator */}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-black"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
