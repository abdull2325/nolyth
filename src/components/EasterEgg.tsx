import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles } from "lucide-react";

export function EasterEgg() {
  const [activated, setActivated] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const konamiCode = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "b",
      "a",
    ];
    let konamiIndex = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          setActivated(true);
          setShowMessage(true);
          konamiIndex = 0;

          // Add fun effect to page
          document.body.style.animation = "rainbow 3s infinite";

          // Remove effect after 5 seconds
          setTimeout(() => {
            document.body.style.animation = "";
            setActivated(false);
          }, 5000);

          // Hide message after 3 seconds
          setTimeout(() => {
            setShowMessage(false);
          }, 3000);
        }
      } else {
        konamiIndex = 0;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* Add rainbow animation CSS */}
      <style>{`
        @keyframes rainbow {
          0%, 100% { filter: hue-rotate(0deg); }
          50% { filter: hue-rotate(360deg); }
        }
        
        @keyframes confetti-fall {
          0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        
        .confetti {
          animation: confetti-fall 3s linear;
        }
      `}</style>

      {/* Success Message */}
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -50 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[300] pointer-events-none"
          >
            <div className="bg-black text-white px-8 py-6 rounded-2xl shadow-2xl flex items-center gap-4">
              <Sparkles className="w-8 h-8 animate-spin" />
              <div>
                <div className="text-2xl font-bold mb-1">You Found It!</div>
                <div className="text-sm text-white/70">
                  Thanks for exploring! 🎉
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Confetti Effect */}
      {activated && (
        <div className="fixed inset-0 pointer-events-none z-[250]">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="confetti absolute w-3 h-3 bg-black/20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-${Math.random() * 20}vh`,
                animationDelay: `${Math.random() * 0.5}s`,
                borderRadius: Math.random() > 0.5 ? "50%" : "0%",
              }}
            />
          ))}
        </div>
      )}
    </>
  );
}
