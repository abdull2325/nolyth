import { motion } from "motion/react";

interface TransitionProps {
  text?: string;
  variant?: "default" | "minimal" | "bold";
}

export function Transition({ text, variant = "default" }: TransitionProps) {
  if (variant === "minimal") {
    return (
      <div className="py-12 md:py-20 px-6 md:px-12 lg:px-24 bg-[#fafaf9]">
        <div className="max-w-[1800px] mx-auto">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="h-px bg-black/10 origin-left"
          />
        </div>
      </div>
    );
  }

  if (variant === "bold") {
    return (
      <div className="py-20 md:py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="max-w-[1800px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-8xl md:text-9xl lg:text-[12rem] text-black/5 tracking-tighter select-none"
          >
            {text || "◆"}
          </motion.div>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-[#fafaf9]">
      <div className="max-w-[1800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-6"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-black/10 flex-1 max-w-xs origin-left"
          />
          {text && (
            <span className="text-xs tracking-[0.3em] uppercase text-black/30">
              {text}
            </span>
          )}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-black/10 flex-1 max-w-xs origin-right"
          />
        </motion.div>
      </div>
    </div>
  );
}
