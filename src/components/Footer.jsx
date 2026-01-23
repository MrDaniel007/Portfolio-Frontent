import React from 'react'
import { motion } from "framer-motion";

export default function Footer() {
  return (
   <footer className="bg-slate-900 text-white  py-8 ">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <p>You know how to find me  
          <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400 cursor-pointer"
          animate={{ x: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          onClick={() =>
            document.getElementById("about").scrollIntoView({ behavior: "smooth" })
          }
        >
          
        </motion.div></p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="https://github.com/MrDaniel007" className="hover:text-blue-400 transition">GitHub</a>
          <a href="#" className="hover:text-blue-400 transition">LinkedIn</a>
          <a href="mailto:kitntnogt@gmail.com" className="hover:text-blue-400 transition">Email</a>
        </div>
      </div>
    </footer>
  )
}
