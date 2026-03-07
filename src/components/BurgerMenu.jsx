import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BurgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ===== BURGER BUTTON ===== */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-7 right-8 z-[10000] flex flex-col gap-2"
      >
        <motion.span
          animate={{
            rotate: open ? 45 : 0,
            y: open ? 8 : 0,
          }}
          className="w-8 h-[2px] md:w-10 md:h-[3px] lg:w-11 lg:h-[4px] bg-white block"
        />
        <motion.span
          animate={{
            rotate: open ? -45 : 0,
            y: open ? -8 : 0,
          }}
          className="w-8 h-[2px] md:w-10 md:h-[3px] lg:w-11 lg:h-[4px] bg-white block"
        />
      </button>

      {/* ===== MENU PANEL ===== */}
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-screen w-[320px] bg-black border-l-4 border-orange-500 z-[9999] flex"
          >
            {/* LEFT SIDE (SOCIALS) */}
            <div className="w-1/2 flex flex-col justify-center items-start pl-6 gap-6 text-white">
              <p className="text-orange-500 text-sm">CONTACT</p>
              <a href="https://t.me/gypsum_2025" className="hover:text-orange-500">Telegram</a>
              <a href="https://github.com/MrDaniel007" className="hover:text-orange-500">GitHub</a>
              <a href="https://www.linkedin.com/in/даниэль-махамадзакиров-7907363a2" className="hover:text-orange-500">LinkedIn</a>
            </div>

            {/* RIGHT SIDE (NAVIGATION) */}
            <div className="w-1/2 flex flex-col justify-center items-start gap-8 text-white text-xl font-semibold">
              <a href="#home" onClick={() => setOpen(false)} className="hover:text-orange-500">
                Home
              </a>
              <a href="#about" onClick={() => setOpen(false)} className="hover:text-orange-500">
                About Me
              </a>
              <a href="#experience" onClick={() => setOpen(false)} className="hover:text-orange-500">
                Experience
              </a>
              <a href="#projects" onClick={() => setOpen(false)} className="hover:text-orange-500">
                Projects
              </a>
              <a href="#contact" onClick={() => setOpen(false)} className="hover:text-orange-500">
                Contact
              </a>
              <a href="#resume" onClick={() => setOpen(false)} className="hover:text-orange-500">
                Resume
              </a>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}