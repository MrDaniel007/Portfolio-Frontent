// import { motion, useMotionValue, useSpring } from "framer-motion";
// import { useEffect, useState } from "react";

// export default function Cursor() {
//   const [clicked, setClicked] = useState(false);
//   const [hoverText, setHoverText] = useState(false);

//   // координаты мышки
//   const mouseX = useMotionValue(-100);
//   const mouseY = useMotionValue(-100);

//   // плавное движение
//   const springX = useSpring(mouseX, { damping: 20, stiffness: 150 });
//   const springY = useSpring(mouseY, { damping: 20, stiffness: 150 });

//   // отслеживаем движение и клики
//   useEffect(() => {
//     const move = (e) => {
//       mouseX.set(e.clientX - 15);
//       mouseY.set(e.clientY - 15);
//     };
//     const down = () => setClicked(true);
//     const up = () => setClicked(false);

//     window.addEventListener("mousemove", move);
//     window.addEventListener("mousedown", down);
//     window.addEventListener("mouseup", up);

//     return () => {
//       window.removeEventListener("mousemove", move);
//       window.removeEventListener("mousedown", down);
//       window.removeEventListener("mouseup", up);
//     };
//   }, [mouseX, mouseY]);

//   return (
//     <motion.div
//       style={{
//         x: springX,
//         y: springY,
//       }}
//       animate={{
//         scale: clicked ? 4 : hoverText ? 2 : 1, // увеличиваем при клике и при hoverText
//         backgroundColor: hoverText ? "#ffffff" : "#ffffff", // можно менять на другой цвет
//       }}
//       transition={{ type: "spring", stiffness: 300, damping: 20 }}
//       className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference "
//     />
//   );
// }

// И чтобы hoverText работал, на текстах делаем так:
{/* <h1
  onMouseEnter={() => setHoverText(true)}
  onMouseLeave={() => setHoverText(false)}
>
  Frontend Developer
</h1> */}


import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function Cursor() {
  const [clicked, setClicked] = useState(false);
  const [hoverText, setHoverText] = useState(false);

  // позиция мыши
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // плавность для большого круга
  const bigX = useSpring(mouseX, { stiffness: 200, damping: 25 });
  const bigY = useSpring(mouseY, { stiffness: 200, damping: 25 });

  // плавность для точки (чуть быстрее)
  const dotX = useSpring(mouseX, { stiffness: 600, damping: 40 });
  const dotY = useSpring(mouseY, { stiffness: 600, damping: 40 });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    const down = () => setClicked(true);
    const up = () => setClicked(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, []);


useEffect(() => {
  const elements = document.querySelectorAll("[data-cursor]");

  elements.forEach(el => {
    el.addEventListener("mouseenter", () => setHoverText(true));
    el.addEventListener("mouseleave", () => setHoverText(false));
  });

  return () => {
    elements.forEach(el => {
      el.removeEventListener("mouseenter", () => setHoverText(true));
      el.removeEventListener("mouseleave", () => setHoverText(false));
    });
  };
}, []);

  return (
    <>
      {/* 🔴 МАЛЕНЬКАЯ ТОЧКА — САМА МЫШКА */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
        }}
        className="
          fixed top-2 left-2
          w-2 h-2
          rounded-full
          bg-white
          pointer-events-none
          z-[10000]
          mix-blend-difference
        "
      />

      {/* ⚪ БОЛЬШОЙ КРУГ — ПОЛЕ */}
<motion.div
      style={{
        x: bigX,
        y: bigY,
      }}
      animate={{
        scale: clicked ? 4 : hoverText ? 2 : 1, // увеличиваем при клике и при hoverText
        backgroundColor: hoverText ? "#ffffff" : "#ffffff", // можно менять на другой цвет
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference "
     />
    </>
  );
}
