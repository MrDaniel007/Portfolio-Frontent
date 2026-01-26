import { useState, useEffect } from "react";

export default function ScrollLift() {
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 2;
      setAtBottom(scrolledToBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <div className="fixed right-6 bottom-6 z-50">
      {atBottom ? (
        <button
          onClick={scrollToTop}
          className="bg-gray-800 w-12 text-white p-3 rounded-[50%] shadow-lg hover:bg-cyan-600 transition"
        >
          ↑
        </button>
      ) : (
        <button
          onClick={scrollToBottom}
          className="bg-gray-800 w-12 text-white p-3 rounded-[50%] shadow-lg hover:bg-cyan-600 transition"
        >
          ↓
        </button>
      )}
    </div>
  );
}