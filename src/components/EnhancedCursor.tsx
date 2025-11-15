import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function EnhancedCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursorVariant = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.closest("a, button, [role='button']")) {
        setCursorVariant("pointer");
        const text = target.getAttribute("data-cursor-text");
        setCursorText(text || "");
      } else if (target.closest("input, textarea")) {
        setCursorVariant("text");
        setCursorText("");
      } else if (target.closest(".project-slide")) {
        setCursorVariant("view");
        setCursorText("View");
      } else {
        setCursorVariant("default");
        setCursorText("");
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mousemove", updateCursorVariant);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mousemove", updateCursorVariant);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const variants = {
    default: {
      width: 40,
      height: 40,
      backgroundColor: "rgba(0, 0, 0, 0)",
      border: "1.5px solid rgba(0, 0, 0, 0.3)",
    },
    pointer: {
      width: 60,
      height: 60,
      backgroundColor: "rgba(0, 0, 0, 0.05)",
      border: "1.5px solid rgba(0, 0, 0, 0.4)",
    },
    text: {
      width: 2,
      height: 30,
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      border: "0px solid transparent",
    },
    view: {
      width: 100,
      height: 100,
      backgroundColor: "rgba(0, 0, 0, 0.9)",
      border: "1.5px solid rgba(0, 0, 0, 1)",
    },
  };

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-[100]">
      {/* Main cursor ring */}
      <motion.div
        className="fixed rounded-full pointer-events-none flex items-center justify-center"
        animate={cursorVariant}
        variants={variants}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
          mass: 0.5,
        }}
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: "translate(-50%, -50%)",
          opacity: isVisible ? 1 : 0,
        }}
      >
        {/* Cursor text */}
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-xs text-white font-medium"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed w-1.5 h-1.5 rounded-full bg-black pointer-events-none"
        animate={{
          scale: cursorVariant === "pointer" || cursorVariant === "view" ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: "translate(-50%, -50%)",
          opacity: isVisible ? 1 : 0,
        }}
      />

      {/* Trailing effect */}
      <motion.div
        className="fixed w-8 h-8 rounded-full border border-black/10 pointer-events-none"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          opacity: cursorVariant === "default" ? 0.3 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 20,
          mass: 0.2,
        }}
        style={{
          opacity: isVisible ? 0.3 : 0,
        }}
      />
    </div>
  );
}
