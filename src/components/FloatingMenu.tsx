import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Plus, Mail, Phone, MessageCircle, X } from "lucide-react";

export function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email Us",
      action: () => window.location.href = "mailto:contact@nolyth.dev",
      color: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Schedule Call",
      action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }),
      color: "from-purple-500/10 to-pink-500/10"
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: "Live Chat",
      action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }),
      color: "from-green-500/10 to-emerald-500/10"
    },
  ];

  return (
    <div className="fixed bottom-8 left-8 z-50 hidden lg:block">
      {/* Action buttons */}
      <AnimatePresence>
        {isOpen && (
          <motion.div className="absolute bottom-20 left-0 space-y-3">
            {actions.map((action, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                transition={{ delay: index * 0.05 }}
                onClick={action.action}
                className="flex items-center gap-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 pr-6 pl-4 py-3 border border-black/5 hover:border-black/10 group"
                whileHover={{ x: 5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${action.color} flex items-center justify-center text-black/60 group-hover:text-black transition-colors`}>
                  {action.icon}
                </div>
                <span className="text-sm text-black/70 group-hover:text-black transition-colors whitespace-nowrap">
                  {action.label}
                </span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: isOpen ? 45 : 0 }}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
      </motion.button>
    </div>
  );
}
