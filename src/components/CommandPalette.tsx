import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Search, ArrowRight, Mail, Briefcase, Info, Home, Award, Cpu, GitBranch, Star, Users } from "lucide-react";

interface Command {
  id: string;
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  action: () => void;
  category: string;
}

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const commands: Command[] = [
    {
      id: "home",
      title: "Go to Home",
      subtitle: "Scroll to top",
      icon: <Home className="w-4 h-4" />,
      action: () => window.scrollTo({ top: 0, behavior: "smooth" }),
      category: "Navigation"
    },
    {
      id: "work",
      title: "View Work",
      subtitle: "See our projects",
      icon: <Briefcase className="w-4 h-4" />,
      action: () => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" }),
      category: "Navigation"
    },
    {
      id: "services",
      title: "View Services",
      subtitle: "What we offer",
      icon: <ArrowRight className="w-4 h-4" />,
      action: () => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" }),
      category: "Navigation"
    },
    {
      id: "why-us",
      title: "Why Choose Us",
      subtitle: "Our strengths",
      icon: <Award className="w-4 h-4" />,
      action: () => document.getElementById("why-us")?.scrollIntoView({ behavior: "smooth" }),
      category: "Navigation"
    },
    {
      id: "tech",
      title: "Tech Stack",
      subtitle: "Our technologies",
      icon: <Cpu className="w-4 h-4" />,
      action: () => document.getElementById("tech")?.scrollIntoView({ behavior: "smooth" }),
      category: "Navigation"
    },
    {
      id: "process",
      title: "Our Process",
      subtitle: "How we work",
      icon: <GitBranch className="w-4 h-4" />,
      action: () => document.getElementById("process")?.scrollIntoView({ behavior: "smooth" }),
      category: "Navigation"
    },
    {
      id: "testimonials",
      title: "Testimonials",
      subtitle: "Client feedback",
      icon: <Star className="w-4 h-4" />,
      action: () => document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" }),
      category: "Navigation"
    },
    {
      id: "team",
      title: "Our Team",
      subtitle: "Meet the experts",
      icon: <Users className="w-4 h-4" />,
      action: () => document.getElementById("team")?.scrollIntoView({ behavior: "smooth" }),
      category: "Navigation"
    },
    {
      id: "about",
      title: "About Us",
      subtitle: "Learn more",
      icon: <Info className="w-4 h-4" />,
      action: () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }),
      category: "Navigation"
    },
    {
      id: "contact",
      title: "Contact",
      subtitle: "Get in touch",
      icon: <Mail className="w-4 h-4" />,
      action: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }),
      category: "Navigation"
    },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(search.toLowerCase()) ||
    cmd.subtitle?.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // CMD+K or CTRL+K
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }

      // Escape
      if (e.key === "Escape") {
        setIsOpen(false);
        setSearch("");
        setSelectedIndex(0);
      }

      if (!isOpen) return;

      // Arrow navigation
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
      }

      // Enter to execute
      if (e.key === "Enter" && filteredCommands[selectedIndex]) {
        filteredCommands[selectedIndex].action();
        setIsOpen(false);
        setSearch("");
        setSelectedIndex(0);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, search, selectedIndex, filteredCommands]);

  // Reset selected index when search changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [search]);

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-[calc(50%+192px)] right-8 -translate-y-1/2 hidden lg:flex items-center gap-2 px-4 py-2 bg-black/5 hover:bg-black/10 rounded-full text-sm text-black/40 transition-all duration-300 z-40 group"
      >
        <Search className="w-4 h-4" />
        <span className="text-xs">Quick search</span>
        <kbd className="px-2 py-0.5 bg-white/50 rounded text-xs font-mono">⌘K</kbd>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setIsOpen(false);
                setSearch("");
              }}
              className="fixed inset-0 bg-black/20 backdrop-blur-md z-[200]"
            />

            {/* Palette */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="fixed top-[20vh] left-1/2 -translate-x-1/2 w-full max-w-2xl z-[201]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-black/10 mx-4">
                {/* Search Input */}
                <div className="flex items-center gap-3 px-6 py-4 border-b border-black/5">
                  <Search className="w-5 h-5 text-black/30" />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search for commands..."
                    className="flex-1 bg-transparent text-black placeholder:text-black/30 focus:outline-none"
                    autoFocus
                  />
                  <kbd className="px-2 py-1 bg-black/5 rounded text-xs font-mono text-black/40">
                    ESC
                  </kbd>
                </div>

                {/* Commands List */}
                <div className="max-h-[60vh] overflow-y-auto">
                  {filteredCommands.length === 0 ? (
                    <div className="py-12 text-center text-black/30">
                      No commands found
                    </div>
                  ) : (
                    <div className="py-2">
                      {filteredCommands.map((cmd, index) => (
                        <motion.button
                          key={cmd.id}
                          onClick={() => {
                            cmd.action();
                            setIsOpen(false);
                            setSearch("");
                          }}
                          className={`w-full flex items-center gap-4 px-6 py-3 transition-colors ${
                            index === selectedIndex
                              ? "bg-black/5"
                              : "hover:bg-black/5"
                          }`}
                          whileHover={{ x: 4 }}
                        >
                          <div className="w-8 h-8 rounded-lg bg-black/5 flex items-center justify-center text-black/60">
                            {cmd.icon}
                          </div>
                          <div className="flex-1 text-left">
                            <div className="text-sm text-black">{cmd.title}</div>
                            {cmd.subtitle && (
                              <div className="text-xs text-black/40">{cmd.subtitle}</div>
                            )}
                          </div>
                          <ArrowRight className="w-4 h-4 text-black/20" />
                        </motion.button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between px-6 py-3 border-t border-black/5 bg-black/[0.02] text-xs text-black/40">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <kbd className="px-1.5 py-0.5 bg-white rounded font-mono">↑↓</kbd>
                      Navigate
                    </span>
                    <span className="flex items-center gap-1">
                      <kbd className="px-1.5 py-0.5 bg-white rounded font-mono">↵</kbd>
                      Select
                    </span>
                  </div>
                  <span>Quick navigation</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
