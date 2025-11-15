import { motion } from "motion/react";

export function SectionSkeleton() {
  return (
    <div className="min-h-screen py-40 px-6 md:px-12 lg:px-24 bg-[#fafaf9]">
      <div className="max-w-[1800px] mx-auto space-y-12">
        {/* Header skeleton */}
        <div className="space-y-6">
          <motion.div
            className="h-2 w-32 bg-black/5 rounded-full"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <motion.div
            className="h-20 w-3/4 bg-black/5 rounded-2xl"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.1 }}
          />
        </div>

        {/* Content skeleton */}
        <div className="space-y-6">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="h-32 w-full bg-black/5 rounded-2xl"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
