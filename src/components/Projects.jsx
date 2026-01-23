import { motion } from "framer-motion";
import { useState } from "react";
import img from "../assets/image/kicks.png";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const data = [
  { id: 1, title: "Kicks Project", tech: "React / Tailwind", img, link: "https://kicks-project-delta.vercel.app/" },
  { id: 2, title: "Shop App", tech: "React / API", img: "https://res.cloudinary.com/duoem1xgw/image/upload/v1768449064/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2025-10-11_003206_rh8d4v.png", link: "https://shopapp.vercel.app" },
  { id: 3, title: "Ozone(clone)", tech: "Motion / UX", img, link: "https://portfolio.vercel.app" },
];

export default function Projects() {
  const [active, setActive] = useState(null);

 

  return (
    <section className="relative py-32 bg-black text-white">
      {data.map((p) => (
  <a
    key={p.id}
    href={p.link}
    target="_blank"
    rel="noopener noreferrer"
    onMouseEnter={() => setActive(p)}
    onMouseLeave={() => setActive(null)}
   
    className="group block border-b border-white/20 py-10 text-3xl cursor-pointer transition duration-300 hover:border-white"
  >
    <span
      className="inline-block transform transition duration-300 group-hover:scale-105 
                 bg-gradient-to-r from-white via-gray-300 to-transparent bg-[length:200%_100%] bg-left 
                 group-hover:bg-right bg-clip-text text-transparent"
    >
      {p.id}. {p.title}
    </span>
    <span className="ml-4 text-sm opacity-50">{p.tech}</span>
  </a>
))}

      {active && (
        <motion.img
          src={active.img}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          className="fixed right-20 top-1/3 w-80 -translate-y-1/2 rounded-lg shadow-xl"
        />
      )}
    </section>
  );
}