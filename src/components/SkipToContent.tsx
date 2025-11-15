import { motion } from "motion/react";

export function SkipToContent() {
  return (
    <motion.a
      href="#work"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[300] bg-black text-white px-6 py-3 rounded-full"
      whileFocus={{ scale: 1.05 }}
    >
      Skip to main content
    </motion.a>
  );
}
