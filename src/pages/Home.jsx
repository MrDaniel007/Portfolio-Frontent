
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
import MagneticButton from "../components/MagneticButton";
import Reactor from "../assets/svg/reactor.svg";
import Contact from "../components/Contact";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="bg-black text-white mx-auto">

      {/* HERO */}
      <section id="home" className="min-h-screen flex items-center px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">

          {/* LEFT */}
          <div data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-easing="ease-in-sine" className="flex flex-col justify-center" >
            <p className="text-gray-400 mb-4 text-lg">
              Frontend Developer
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Hi, I’m <span className="text-blue-400">Daniel</span> <br />
              I build modern web interfaces.
            </h1>

            <p className="text-gray-400 max-w-xl mb-8">
              I’m a frontend developer focused on building clean,
              responsive and interactive user interfaces using
              modern technologies.
            </p>

            <div className="flex items-center gap-6 " >
              <MagneticButton>
                <a

                  href="#projects"
                  className="px-2 sm:px-4px md:px-6 py-1 md:py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
                >
                  My Projects
                </a>
              </MagneticButton>
              <a
                href="#about"
                className="text-gray-400 hover:text-white transition"
              >
                About me →
              </a>
            </div>
          </div>

          {/* RIGHT */}

          <div data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-easing="ease-in-sine"
            className="hidden md:flex items-center justify-center relative">
            <ArcReactor /></div>

        </div>
      </section>

      {/* ABOUT */}
      <section data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1500"
        data-aos-once="false"
        id="about" className="max-w-64 md:max-w-3xl lg:max-w-6xl py-32 px-8 md:px-20  mx-auto">
        <h2 className="text-3xl font-bold mb-10">This is me</h2>

        <div className="grid md:grid-cols-2 gap-10 text-gray-300">
          <p>
            I’m Daniel, a frontend developer from Bishkek, currently studying at Asian Innovative College.
            I specialize in React, TailwindCSS, and modern UI/UX design. I build responsive, adaptive,
            and branded web interfaces that feel premium, polished, and user-friendly.
          </p>

          <p>
            I enjoy breaking down complex code into clear steps, collaborating with teams using Git, and
            crafting interactive user experiences with smooth animations and creative details. My goal is
            to launch a professional portfolio and continue growing as a frontend developer who creates
            elegant, high-quality websites and helps others learn along the way.
          </p>

        </div>
      </section>

      {/* STACK */}
      <section className=" py-32 px-8 md:px-20 bg-neutral-900">
        <div className="flex items-center gap-6 mb-16">
         
          <img     // Реактор Iron Man 
            src={Reactor} // твой SVG файл реактора
            alt="Arc Reactor"
            className="w-16 h-16 animate-spin-slow"
          />
          <h2 className="text-4xl font-bold">My Stack</h2>
        </div>

        {/* FRONTEND */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <h3
            data-aos="fade-right"
              data-aos-once="false"
            className="text-5xl font-extrabold text-white"
          >
            Frontend
          </h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-gray-300 text-base sm:text-xl md:text-2xl">
            <li data-aos="fade-up" data-aos-delay="200"   data-aos-once="false" className="flex items-center gap-2"><img src={html} className="w-10 h-10" />HTML</li>
            <li data-aos="fade-up" data-aos-delay="400" data-aos-once="false" className="flex items-center gap-2"><img src={css} className="w-10 h-10" />CSS</li>
            <li data-aos="fade-up" data-aos-delay="600" data-aos-once="false" className="flex items-center gap-2"><img src={js} className="w-10 h-10" />JavaScript</li>
            <li data-aos="fade-up" data-aos-delay="800" data-aos-once="false" className="flex items-center gap-2"><img src={react} className="w-10 h-10" />React</li>
            <li data-aos="fade-up" data-aos-delay="1000" data-aos-once="false" className="flex items-center gap-2"><img src={tailwind} className="w-10 h-10" />Tailwind</li>
            <li data-aos="fade-up" data-aos-delay="1200" data-aos-once="false" className="flex items-center gap-2"><img src={fammer} className="w-10 h-10" />Framer Motion</li>
            <li data-aos="fade-up" data-aos-delay="1400" data-aos-once="false" className="flex items-center gap-2"><img src={sass} className="w-10 h-10" />SASS</li>
          </ul>
        </div>

        {/* TOOLS */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <h3
            data-aos="fade-right"
              data-aos-once="false"
            className="text-5xl font-extrabold text-white"
          >
            Tools
          </h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-gray-300 text-base sm:text-xl md:text-2xl">
            <li data-aos="fade-up" data-aos-delay="200" data-aos-once="false" className="flex items-center gap-2"><img src={git} className="w-10 h-10" />Git</li>
            <li data-aos="fade-up" data-aos-delay="400" data-aos-once="false" className="flex items-center gap-2"><img src={github} className="w-10 h-10" />GitHub</li>
            <li data-aos="fade-up" data-aos-delay="600" data-aos-once="false" className="flex items-center gap-2"><img src={vite} className="w-10 h-10" />Vite</li>
            <li data-aos="fade-up" data-aos-delay="800" data-aos-once="false" className="flex items-center gap-2"><img src={npm} className="w-10 h-10" />Npm</li>
            <li data-aos="fade-up" data-aos-delay="1000" data-aos-once="false" className="flex items-center gap-2"><img src={vs} className="w-10 h-10" />VS Code</li>
          </ul>
        </div>

        {/* LEARNING */}
        <div className="grid md:grid-cols-2 gap-12">
          <h3
            data-aos="fade-right"
              data-aos-once="false"
            className="text-5xl font-extrabold text-white"
          >
            Learning
          </h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-gray-300 text-base sm:text-xl md:text-2xl">
            <li data-aos="fade-up" data-aos-delay="200" data-aos-once="false" className="flex items-center gap-2"><img src={typescript} className="w-10 h-10" />TypeScript</li>
            <li data-aos="fade-up" data-aos-delay="400" data-aos-once="false" className="flex items-center gap-2"><img src={python} className="w-10 h-10" />Python</li>
            <li data-aos="fade-up" data-aos-delay="600" data-aos-once="false" className="flex items-center gap-2"><img src={node} className="w-10 h-10" />Node.js</li>
          </ul>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" data-aos="zoom-out-up"
      data-aos-once="false"
        className="py-32 px-8 md:px-20 max-w-64 md:max-w-xl lg:max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Experience</h2>
        <p className="text-gray-400 max-w-3xl">
          I build personal projects, practice real-world UI patterns,
          work with APIs and continuously improve my frontend skills
          through hands-on development.
        </p>
      </section>

      {/* PROJECTS */}
      <section data-aos="flip-up"
       data-aos-duration="2000"
       data-aos-anchor-placement="top-bottom"
        id="projects" className=" max-w-64 md:max-w-xl lg:max-w-3xl mx-auto bg-black px-4 sm:px-6 md:px-12 lg:px-20 pt-24 md:pt-40 overflow-x-hidden z-99">
        <Projects />
      </section>

      <section id="contact"
        data-aos="flip-up"
        data-aos-duration="2000"
       data-aos-anchor-placement="top-bottom"
        className=" max-w-64 md:max-w-xl lg:max-w-3xl mx-auto px-4 overflow-hidden">
        <Contact />
      </section>

      <section id="resume" className="max-w-full  h-[600px] flex justify-center items-center  ">
        <Link to="/resume">
          <MagneticButton>
            <div className="max-w-40  p-2 border border-cyan-400
          text-cyan-400 rounded-full
              hover:bg-cyan-400 hover:text-black transition">
              Show  Resume

            </div>
          </MagneticButton>
        </Link>

      </section>
    </main>

  );
}