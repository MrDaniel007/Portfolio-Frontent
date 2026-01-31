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
          <p>🐙 github.com/MrDaniel007</p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-300 leading-relaxed">
          Frontend developer focused on building clean, responsive and modern
          user interfaces. Actively learning and improving through real projects,
          working with React, Tailwind CSS and JavaScript.
        </p>
      </section>

      {/* SKILLS */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300">
          <span>HTML</span>
          <span>CSS</span>
          <span>Tailwind CSS</span>
          <span>JavaScript (ES6+)</span>
          <span>React</span>
          <span>Git / GitHub</span>
          <span>REST API (basic)</span>
          <span>Responsive Design</span>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <ul className="text-gray-300 space-y-2 list-disc list-inside">
          <li>Kicks Project</li>
          <li>Cocktail Project</li>
          <li>Smart Tech Hub</li>
        </ul>
      </section>

      {/* EDUCATION */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <div className="text-gray-300 space-y-2">
          <p>Asian Innovative College — Student</p>
          <p>Frontend Development Bootcamp — Graduate</p>
          <p>Secondary School — Graduate (Grade 9)</p>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <p className="text-gray-300">
          Junior Frontend Developer (No commercial experience yet)
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