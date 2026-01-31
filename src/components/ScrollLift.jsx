import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ScrollLift() {
  const [atBottom, setAtBottom] = useState(false);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const isTop = scrollY < 50;
      const isBottom =
        window.innerHeight + scrollY >= document.body.offsetHeight - 2;

      setAtTop(isTop);
      setAtBottom(isBottom);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  if (!atTop && !atBottom) return null; // ❗ в середине скрываем

  return (
    <div className="fixed right-6 bottom-20 z-50"> {/* ⬅️ подняли выше */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        className="absolute inset-0 rounded-full border-2 border-cyan-400 border-t-transparent"
      />

      {atTop && (
        <button
          onClick={scrollToBottom}
          className="relative bg-black text-cyan-400 w-12 h-12 rounded-full
          flex items-center justify-center font-bold"
        >
          ↓
        </button>
      )}

      {atBottom && (
        <button
          onClick={scrollToTop}
          className="relative bg-black text-cyan-400 w-12 h-12 rounded-full
          flex items-center justify-center font-bold"
        >
          ↑
        </button>
      )}
    </div>
  );
}