import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

export function ScrollHint() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
      className="fixed bottom-32 right-8 z-30 hidden lg:flex items-center gap-2 text-black/40 text-sm"
    >
      <span className="tracking-wide">Scroll horizontally</span>
      <motion.div
        animate={{ x: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronRight className="w-4 h-4" />
      </motion.div>
    </motion.div>
  );
}
