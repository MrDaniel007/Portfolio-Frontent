import emailjs from "@emailjs/browser";

export default function Contact() {

  const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      serviceId,
  templateId,
      e.target,
        publicKey
    )
    .then(() => {
      alert("Message sent successfully 🚀");
      e.target.reset();
    })
    .catch(() => {
      alert("Something went wrong ❌");
    });
  };

  return (
    <section
      id="contact"
      className="bg-black text-white flex items-center justify-center px-2 md:px-4 lg:px-6"
    >
      <form
        onSubmit={sendEmail}
        className="w-full max-w-lg p-10 border border-cyan-400/30 rounded-2xl"
      >
        <h2 className="text-4xl font-bold mb-8 text-center">
          Contact <span className="text-cyan-400">me</span>
        </h2>

        <input
          name="from_name"
          placeholder="Your name"
          required
          className="w-full bg-transparent border-b py-3 mb-6 outline-none"
        />

        <input
          name="from_email"
          type="email"
          placeholder="Your email"
          required
          className="w-full bg-transparent border-b py-3 mb-6 outline-none"
        />

        <textarea
          name="message"
          placeholder="Your message"
          required
          rows="4"
          className="w-full bg-transparent border-b py-3 mb-8 outline-none resize-none"
        />

        <button
          type="submit"
          className="w-full py-3 border border-cyan-400 text-cyan-400 rounded-full
          hover:bg-cyan-400 hover:text-black transition"
        >
          Send message
        </button>
      </form>
    </section>
  );
}