import { motion } from "framer-motion";
import { useState } from "react";

export default function ArcReactor() {
  const [active, setActive] = useState(false);
  const [hovered, setHovered] = useState(false)

  return (
    
    <div
      className="w-56 h-56 flex items-center justify-center"
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      onMouseEnter={() => setHovered(true)}  // мышь навела
      onMouseLeave={() => setHovered(false)} // мышь ушла
    >
      <motion.svg
        viewBox="0 0 200 200"
        className="w-full h-full drop-shadow-[0_0_25px_rgba(34,211,238,0.6)]"
      >

        {/* 🔵 ВНЕШНИЙ СВЕТОВОЙ СЕГМЕНТ */}
        <motion.circle
          cx="100"
          cy="100"
          r="85"
          fill="none"
          stroke="#67e8f9"
          strokeWidth="10"
          strokeDasharray="18 10"
          animate={{ rotate: active ? 360 : 0,
               opacity: hovered ? 1 : 0.7,   // <--- вот яркость
    scale: hovered ? 1.05 : 1     // <--- немного увеличиваем при hover
          }}
          transition={{
            repeat: Infinity,
            duration: active ? 1.2 : 6,
            ease: "linear",
          }}
          style={{ originX: "50%", originY: "50%" }}
        />

        {/* ⚙️ МЕТАЛЛИЧЕСКОЕ КОЛЬЦО */}
        <circle
          cx="100"
          cy="100"
          r="72"
          fill="none"
          stroke="#94a3b8"
          strokeWidth="6"
        />

        {/* 🔷 ВНУТРЕННИЕ ПРОРЕЗИ */}
        <motion.circle
          cx="100"
          cy="100"
          r="60"
          fill="none"
          stroke="#22d3ee"
          strokeWidth="5"
          strokeDasharray="6 14"
          animate={{ rotate: -360 }}
          transition={{
            repeat: Infinity,
            duration: active ? 2 : 10,
            ease: "linear",
          }}
          style={{ originX: "50%", originY: "50%" }}
        />

        {/* ⚪ ЯДРО */}
        <motion.circle
          cx="100"
          cy="100"
          r="18"
          fill="#e0f2fe"
          animate={{
            scale: active ? 1.15 : 1,
            opacity: active ? 1 : 0.85,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* ✨ СВЕЧЕНИЕ ЯДРА */}
        <circle
          cx="100"
          cy="100"
          r="28"
          fill="none"
          stroke="#7dd3fc"
          strokeWidth="2"
          opacity="0.6"
        />
      </motion.svg>
    </div>
  );
}