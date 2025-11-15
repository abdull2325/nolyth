import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { X, Keyboard } from "lucide-react";

export function ShortcutsMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Show shortcuts menu with ? or Command/Ctrl + /
      if (e.key === "?" || ((e.metaKey || e.ctrlKey) && e.key === "/")) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      
      // Close with Escape
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isOpen]);

  const shortcuts = [
    { key: "H", description: "Home / Top" },
    { key: "W", description: "Work section" },
    { key: "S", description: "Services section" },
    { key: "A", description: "About section" },
    { key: "C", description: "Contact section" },
    { key: "?", description: "Toggle this menu" },
    { key: "Esc", description: "Close modals" },
  ];

  return (
    <>
      {/* Help button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 left-8 z-50 w-12 h-12 rounded-full bg-black/5 hover:bg-black/10 backdrop-blur-sm flex items-center justify-center transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Keyboard shortcuts"
      >
        <Keyboard className="w-5 h-5 text-black/60" />
      </motion.button>

      {/* Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[150]"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[151] w-full max-w-md bg-white rounded-2xl shadow-2xl p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl text-black">Keyboard Shortcuts</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full hover:bg-black/5 flex items-center justify-center transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5 text-black/60" />
                </button>
              </div>

              {/* Shortcuts list */}
              <div className="space-y-3">
                {shortcuts.map((shortcut, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center justify-between py-3 border-b border-black/5 last:border-0"
                  >
                    <span className="text-black/60">{shortcut.description}</span>
                    <kbd className="px-3 py-1.5 bg-black/5 rounded-lg text-sm font-mono text-black">
                      {shortcut.key}
                    </kbd>
                  </motion.div>
                ))}
              </div>

              {/* Footer */}
              <p className="mt-6 text-xs text-black/40 text-center">
                Press ? to toggle this menu anytime
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
