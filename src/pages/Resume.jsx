export default function Resume() {
  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-20 py-24">
      
      {/* HEADER */}
      <section className="max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          Mahamadzakirov Daniel
        </h1>
        <p className="text-blue-400 text-lg mb-4">
          Frontend Developer · React & JavaScript
        </p>

        <div className="text-gray-400 space-y-1">
          <p>📧 kitntnogt@gmail.com</p>
          <a href="https://github.com/MrDaniel007" className="text-blue-300 hover:text-blue-400">
            🐙 github.com/MrDaniel007
          </a>
          <p>📍 Bishkek, Kyrgyzstan</p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-300 leading-relaxed">
          Frontend developer focused on building modern SPA applications using
          React and JavaScript. Experienced in building responsive interfaces,
          integrating REST APIs with Axios and creating reusable component
          architectures. Constantly improving skills through real-world projects
          and studying TypeScript and backend technologies.
        </p>
      </section>

      {/* SKILLS */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300">
          <span>HTML5</span>
          <span>CSS3</span>
          <span>SASS / SCSS</span>
          <span>Tailwind CSS</span>
          <span>Bootstrap 5</span>
          <span>JavaScript (ES6+)</span>
          <span>React</span>
          <span>React Router v6</span>
          <span>Axios</span>
          <span>REST API</span>
          <span>Firebase</span>
          <span>Git / GitHub</span>
          <span>Vite</span>
          <span>Responsive Design</span>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>

        <ul className="text-gray-300 space-y-4">
          <li>
            <strong>Kicks Project</strong> — E-commerce sneaker store built with
            React, SASS and Axios. Implemented product filtering, dynamic data
            loading and modern responsive UI.
          </li>

          <li>
            <strong>Smart Tech Hub</strong> — Electronics store with product
            catalog (80+ items), search functionality, category filtering and
            Voice Search API.
          </li>

          <li>
            <strong>Ozon Clone</strong> — Marketplace interface built using
            React, Tailwind CSS and Firebase (Auth & Firestore) with reusable
            components architecture.
          </li>
        </ul>
      </section>

      {/* EDUCATION */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <div className="text-gray-300 space-y-2">
          <p>Asian Innovative College — Information Technology (1st year)</p>
          <p>Frontend Development Bootcamp — Okurmen</p>
          <p>Edu Pro Academy — Frontend Internship (3 months)</p>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <p className="text-gray-300">
          Frontend Developer Intern — Participated in frontend development
          internship focusing on React, Git workflow and real project practice.
        </p>
      </section>

      {/* DOWNLOAD */}
      <section className="max-w-4xl mx-auto text-center">
        <a
          href="/resume.pdf"
          download
          className="inline-block px-8 py-4 border border-blue-400 text-blue-400 rounded-lg
                     hover:bg-blue-400 hover:text-black transition"
        >
          Download PDF Resume
        </a>
      </section>

    </main>
  );
}