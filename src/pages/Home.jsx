
import { motion } from "framer-motion";
import Projects from "../components/Projects";
import ArcReactor from "../components/ArcReactor";
import html from "../assets/svg/html.svg"
import css from "../assets/svg/css.svg"
import js from "../assets/svg/js.svg"
import react from "../assets/svg/react.svg"
import tailwind from "../assets/svg/tailwindcss.svg"
import fammer from "../assets/svg/frammer.webp"
import sass from "../assets/svg/sass.svg"
import git from "../assets/svg/git.svg"
import github from "../assets/svg/github.svg"
import vite from "../assets/svg/vite.svg"
import npm from "../assets/svg/npm.svg"
import vs from "../assets/svg/vs.svg"
import typescript from "../assets/svg/typescript.svg"
import python from "../assets/svg/python.svg"
import node from "../assets/svg/node.svg"

export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="min-h-screen flex items-center px-8 md:px-20">
        <div className="grid md:grid-cols-2 gap-10 w-full">

          {/* LEFT */}
          <div className="flex flex-col justify-center">
            <p className="text-gray-400 mb-4 text-lg">
              Frontend Developer
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Hi, I’m <span className="text-blue-400">Daniel</span> <br />
              I build modern web interfaces.
            </h1>

            <p className="text-gray-400 max-w-xl mb-8">
              I’m a frontend developer focused on building clean,
              responsive and interactive user interfaces using
              modern technologies.
            </p>

            <div className="flex items-center gap-6">
 <h1 data-cursor >
  Frontend Developer
</h1>
              <a
                href="#projects"
                className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
              >
                My Projects
              </a>

              <a
                href="#about"
                className="text-gray-400 hover:text-white transition"
              >
                About me →
              </a>
            </div>
          </div>

          {/* RIGHT
         
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="w-72 h-72 rounded-full bg-gradient-to-tr from-blue-500/30 to-purple-500/30 blur-2xl"
            />
          */}
 <div className="hidden md:flex items-center justify-center relative">
          <ArcReactor/></div>

        </div>

        {/* SCROLL DOWN */}
        <motion.div
          className="absolute bottom-10 left-3/4 -translate-x-1/2 text-gray-400 cursor-pointer"
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          onClick={() =>
            document.getElementById("about").scrollIntoView({ behavior: "smooth" })
          }
        >
          ↓
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-32 px-8 md:px-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">This is me</h2>

        <div className="grid md:grid-cols-2 gap-10 text-gray-300">
          <p>
            I’m a self-taught frontend developer who enjoys turning ideas
            into interactive and meaningful digital experiences.
          </p>

          <p>
            I focus on performance, clean UI, smooth animations
            and modern frontend architecture.
          </p>
        </div>
      </section>

      {/* STACK */}
      <section className="py-32 px-8 md:px-20 bg-neutral-900">
        <h2 className="text-3xl font-bold mb-16">My Stack</h2>

        <div className="grid md:grid-cols-3 gap-12 text-gray-300">

          <div>
            <h3 className="font-semibold text-white mb-4">Frontend</h3>
            <ul className="space-y-2 text-2xl">
              <li className="flex items-center gap-2"><img src={html} alt="" 
               className="w-10 h-10"/>HTML</li>
              <li className="flex items-center gap-2"><img src={css} alt="" 
               className="w-10 h-10"/> CSS </li>
              <li className="flex items-center gap-2"><img src={js} alt=""  
              className="w-10 h-10"/> JavaScript</li>
              <li className="flex items-center  gap-2"><img src={react} alt=""  
              className="w-10 h-10"/> React</li>
              <li className="flex items-center  gap-2"><img src={tailwind} alt=""  
              className="w-10 h-10"/> Tailwind CSS</li>
              <li className="flex items-center  gap-2"><img src={fammer} alt=""  
              className="w-10 h-10"/> Framer Motion</li>
              <li className="flex items-center gap-2"><img src={sass} alt=""
               className="w-10 h-10"/> SASS</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Tools</h3>
            <ul className="space-y-2 text-2xl">
              <li className="flex items-center gap-2"><img src={git} alt=""  
              className="w-10 h-10"/>Git</li>
              <li className="flex items-center gap-2"><img src={github} alt=""  
              className="w-10 h-10"/>GitHub</li>
              <li className="flex items-center gap-2"><img src={vite} alt=""  
              className="w-10 h-10"/>Vite</li>
              <li className="flex items-center gap-2"><img src={npm} alt=""  
              className="w-10 h-10"/>Npm</li>
              <li className="flex items-center gap-2"><img src={vs} alt=""  
              className="w-10 h-10"/>VS Code</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Learning</h3>
            <ul className="space-y-2 text-2xl">
              <li className="flex items-center gap-2"><img src={typescript} alt=""  
              className="w-10 h-10"/>TypeScript</li>
              <li className="flex items-center gap-2"><img src={python} alt=""  
              className="w-10 h-10"/>Python</li>
              <li className="flex items-center gap-2"><img src={node} alt=""  
              className="w-10 h-10"/>Node.js</li>
            </ul>
          </div>

        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="py-32 px-8 md:px-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Experience</h2>
<p className="text-gray-400 max-w-3xl">
          I build personal projects, practice real-world UI patterns,
          work with APIs and continuously improve my frontend skills
          through hands-on development.
        </p>
      </section>

      {/* PROJECTS */}
       <section id="projects" className="min-h-screen bg-black px-20 pt-40 z-1000">
      <Projects/>
    </section>
    </main>
  );
}