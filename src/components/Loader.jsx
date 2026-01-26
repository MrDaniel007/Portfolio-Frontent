import { useEffect, useState } from "react";

export default function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      start += 1;
      setProgress(start);
      if (start >= 100) clearInterval(interval);
    }, 20); // скорость лазера

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fixed inset-0 z-[99999] pointer-events-none"
      style={{
        clipPath: `inset(${progress}% 0 0 0)`,
        transition: "clip-path 0.02s linear",
      }}
    >
      {/* СИНИЙ СЛОЙ */}
      <div className="absolute inset-0 bg-gray-800" />

      {/* ЛАЗЕР */}
      <div
        className="absolute left-0 w-full h-[4px] bg-cyan-300 shadow-[0_0_25px_10px_rgba(56,189,248,0.9)]"
        style={{
          top: `${progress}vh`,
        }}
      />
    </div>
  );
}