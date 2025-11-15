import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const quotes = [
  "Intelligence is the ability to adapt to change.",
  "The future is already here — it's just not evenly distributed.",
  "Any sufficiently advanced technology is indistinguishable from magic.",
  "Innovation distinguishes between a leader and a follower.",
  "The best way to predict the future is to invent it.",
  "AI is the new electricity.",
  "Data is the new oil, but AI is the refinery.",
  "Machine learning is the art of getting computers to act without being explicitly programmed.",
];

interface LoadingQuotesProps {
  isLoading: boolean;
}

export function LoadingQuotes({ isLoading }: LoadingQuotesProps) {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isLoading]);

  return (
    <div className="text-center max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.p
          key={currentQuote}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-lg text-black/40 italic"
        >
          "{quotes[currentQuote]}"
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
