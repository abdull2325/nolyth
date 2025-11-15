import { useEffect } from "react";

export function KeyboardShortcuts() {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Only trigger if not typing in input/textarea
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      switch (e.key.toLowerCase()) {
        case "h":
          // Go to top/home
          window.scrollTo({ top: 0, behavior: "smooth" });
          break;
        case "w":
          // Go to work section
          document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
          break;
        case "s":
          // Go to services section
          document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
          break;
        case "a":
          // Go to about section
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          break;
        case "c":
          // Go to contact section
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          break;
        case "escape":
          // Close any open modals or menus
          const closeButton = document.querySelector('[aria-label="Close modal"]') as HTMLButtonElement;
          if (closeButton) {
            closeButton.click();
          }
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return null;
}
