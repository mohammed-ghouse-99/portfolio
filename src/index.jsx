import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaFilePdf, FaSun, FaMoon } from "react-icons/fa";
import emailjs from "@emailjs/browser";

// ------------------------------
// DATA
// ------------------------------
const DATA = {
  name: "Mohammed Ghouse Mohiuddin",
  role: "Data & Machine Learning Enthusiast",
  location: "Hyderabad, Telangana",
  email: "ghousenaser2005@gmail.com",
  linkedin: "http://www.linkedin.com/in/mohammed-ghouse-mohiuddin-0622a12a6",
  github: "https://github.com/mohammed-ghouse-99",
  resume: "/resume.pdf", // replace with real resume url
  photo: "/images/profilepic.jpg",
  intro: `I’m a technology enthusiast passionate about designing intelligent, data-driven solutions.
My expertise lies across Data Analytics, Machine Learning and new Technologies.
From developing predictive models to creating interactive web applications.I enjoy transforming raw data into meaningful insights that drive decisions.
Continuous learning and innovation define my approach to technology.
I’m fascinated by how AI can support human creativity,its like having a partner in problem-solving...


  skills: [
    "Machine Learning Algorithms",
    "Python",
    "Deep Learning",
    "OpenCV",
    "Large Language Models",
    "RAG",
    "Frontend Development",
    "Structured Query Language",
    "Power BI",
  ],

  researchPapers: [
    {
      title: "Automated Detection of Recyclable Waste in Real-Time Using Deep Learning and Computer Vision Techniques",
      file: "/paper/Ghouse_Research_Paper_2.pdf",
    },
    {
      title: "Internet of Things-Based Arrhythmia Disease Prediction Using Machine Learning Techniques ",
      file: "/paper/Ghouse_Research_Paper_1.pdf",
    },
  ],

  projects: [
    {
      title: " Detection of Recyclable Waste in Real-Time",
      summary:
        "Real-time waste classification using YOLOv5 + OpenCV with a FastAPI backend.",
      tags: ["Computer Vision", "YOLOv5", "FastAPI"],
      repo: "https://github.com/mohammed-ghouse-99",
      image: "/images/Screenshot_2025-08-03_231319.png",
    },
    {
      title: "PulsePredict (IoT Arrhythmia)",
      summary:
        "ECG signal processing + SVM classifier with Flask front-end and Telegram alerts.",
      tags: ["MITBIH Dataset", "SVM", "Flask"],
      repo: "https://github.com/mohammed-ghouse-99",
      image: "/images/res1.jpeg",
    },
    {
      title: "HR Analytics Dashboard",
      summary:
        "Power BI dashboard for workforce analytics — attrition, salary trends and KPIs.",
      tags: ["SQL","Power BI", "ETL", "Visual Reports"],
      repo: "https://github.com/mohammed-ghouse-99/HR-Data-Cleaning-and-Analytics",
      image: "/images/pic2.jpg",
    },
  ],

  achievements: [
  "Secured top positions in national and industry-level professional hackathons",
  "Internship: Engineered a real-time scrap detection solution at MS Scrap Recyclers",
  "Research & Publications: Contributed to multiple scholarly papers in academic volumes",
],
  footerNote: "Available for internships, freelance projects, and collaborative research.",
};

// ------------------------------
// COMPONENTS
// ------------------------------
const Badge = ({ children }) => (
  <span className="inline-block bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 px-3 py-1 rounded-full text-sm mr-2 mb-2 font-medium select-none">
    {children}
  </span>
);

const SocialLink = ({ href, children, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 hover:underline font-semibold"
  >
    {icon} <span>{children}</span>
  </a>
);

// ------------------------------
// MAIN PORTFOLIO COMPONENT
// ------------------------------
export default function Portfolio() {
  // theme toggle
  const [dark, setDark] = useState(true);

  // contact form state
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // loading + status for UI feedback
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(""); // success / error message

  // helper to update form fields
  const onChange = (e) => {
    const { id, value } = e.target;
    setForm((s) => ({ ...s, [id]: value }));
  };

  // ------------------------------
  // handleBooking (replaces submitContact)
  // - sends email via EmailJS using env variables
  // - shows toast-style status (fades out after a few seconds)
  // - keeps form clearing and loading UX
  // ------------------------------
  const handleBooking = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const payload = {
      name: form.name || "Visitor",
      email: form.email || "no-email",
      message: form.message || "",
      time: new Date().toLocaleString(),
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        payload,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // success
      setStatus(" Message sent successfully! I will get back to you soon.");
      setForm({ name: "", email: "", message: "" });

      // auto-hide status after 4 seconds
      setTimeout(() => setStatus(""), 4000);
    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus(" Failed to send message. Please try again later.");
      setTimeout(() => setStatus(""), 4000);
    } finally {
      setLoading(false);
    }
  };

  // (Optional) the old mailto fallback if you ever want it — kept for reference (not used)
  // const submitContact = (e) => {
  //   e.preventDefault();
  //   const subject = encodeURIComponent(`Portfolio contact from ${form.name || "Visitor"}`);
  //   const body = encodeURIComponent(form.message + "\n\nFrom: " + (form.email || "no-email"));
  //   window.location.href = `mailto:${DATA.email}?subject=${subject}&body=${body}`;
  // };

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-500 ${
        dark ? "dark bg-[#0b1220] text-slate-200" : "bg-white text-slate-900"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* NAVIGATION */}
        <header className="flex flex-col sm:flex-row items-center justify-between mb-12">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold select-none cursor-default">
              {DATA.name[0]}
            </div>
            <div>
              <h1 className="text-xl font-extrabold">{DATA.name}</h1>
              <p className="text-indigo-400 text-sm tracking-wide">
                {DATA.role} • {DATA.location}
              </p>
            </div>
          </div>

          <nav className="flex items-center space-x-4 mt-6 sm:mt-0">
            <a
              href={DATA.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-indigo-600 hover:text-indigo-800 text-lg"
            >
              <FaGithub />
            </a>
            <a
              href={DATA.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-indigo-600 hover:text-indigo-800 text-lg"
            >
              <FaLinkedin />
            </a>
            <a
              href={DATA.resume}
              target="_blank"
              rel="noreferrer"
              aria-label="Resume"
              className="text-indigo-600 hover:text-indigo-800 text-lg"
            >
              <FaFilePdf />
            </a>

            <button
              onClick={() => setDark(!dark)}
              aria-label="Toggle Dark Mode"
              className="ml-4 p-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {dark ? <FaSun /> : <FaMoon />}
            </button>
          </nav>
        </header>

        {/* HERO */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center mb-14">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="md:col-span-2"
          >
            <h2 className="text-5xl font-extrabold leading-tight mb-4">
              Hi, I'm {DATA.name} <span className="text-indigo-500">.</span>
            </h2>
            <p className="text-lg text-slate-400">{DATA.intro}</p>

            <div className="mt-8 flex space-x-4">
              <a
                href={DATA.github}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-indigo-600 rounded-md text-white font-semibold hover:bg-indigo-700 transition"
              >
                View GitHub
              </a>
              <a
                href={DATA.linkedin}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 border border-indigo-600 rounded-md text-indigo-600 font-semibold hover:bg-indigo-50 transition"
              >
                Connect on LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="w-56 h-56 rounded-3xl overflow-hidden shadow-lg bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-800">
              {DATA.photo ? (
                <img src={DATA.photo} alt="Profile" className="object-cover w-full h-full" />
              ) : (
                <div className="flex items-center justify-center h-full text-indigo-600 font-bold text-3xl">
                  {DATA.name.split(" ").slice(0, 2).map((n) => n[0]).join("")}
                </div>
              )}
            </div>
          </motion.div>
        </section>

        {/* SKILLS */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-4">Skills</h3>
          <p className="text-indigo-400 mb-6">Core tools & technologies I use</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {DATA.skills.map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="mb-20">
          <h3 className="text-3xl font-bold mb-4">Projects</h3>
          <p className="text-indigo-400 mb-6">End-to-end projects — code & deployment</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DATA.projects.map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="bg-white dark:bg-[#121f3d] rounded-xl shadow-md border border-indigo-700 p-6 flex flex-col"
              >
                <div className="h-40 bg-indigo-100 dark:bg-indigo-900 rounded-md mb-4 flex items-center justify-center overflow-hidden">
                  {p.image ? (
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="text-indigo-400 text-center select-none">Project screenshot</div>
                  )}
                </div>
                <h4 className="font-semibold text-xl mb-1">{p.title}</h4>
                <p className="text-indigo-300 mb-3 flex-grow">{p.summary}</p>
                <div className="mb-4">
                  {p.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
                <div className="flex space-x-4 mt-auto">
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-indigo-500 hover:text-indigo-700 font-semibold"
                    >
                      Code
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-indigo-500 hover:text-indigo-700 font-semibold"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section className="mb-20">
          <h3 className="text-3xl font-bold mb-4">Achievements</h3>
          <ul className="list-disc list-inside space-y-2 text-indigo-300">
            {DATA.achievements.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </section>

        {/* RESEARCH PAPERS with DOWNLOAD BUTTONS */}
        <section className="mb-20">
          <h3 className="text-3xl font-bold mb-6">Research Papers</h3>
          <p className="text-indigo-400 mb-6">Published papers and studies you can view here</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {DATA.researchPapers.map((paper, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="p-6 border border-indigo-600 rounded-lg bg-indigo-900 bg-opacity-20 flex items-center space-x-4"
              >
                <a
                  href={paper.file}
                  download
                  className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md"
                  aria-label={`View research paper: ${paper.title}`}
                >
                  View my research 
                </a>
                <h4 className="text-indigo-300 font-semibold text-lg">{paper.title}</h4>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONNECT ON LINKEDIN */}
        <section className="mb-20 bg-indigo-700 rounded-xl p-8 text-white shadow-lg">
          <h3 className="text-3xl font-bold mb-4">Let's Connect on LinkedIn</h3>
          <p className="text-indigo-200 mb-6 max-w-xl">
            I'm actively growing my professional network and would love to connect with like-minded people.
            Feel free to check my LinkedIn profile and send me a message or invite.
            I'll respond quickly and look forward to meaningful conversations.
          </p>
          <a
            href={DATA.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-block px-8 py-4 bg-white text-indigo-700 font-bold rounded-lg shadow-md hover:bg-indigo-100 transition"
          >
            View My LinkedIn Profile
          </a>
        </section>

        {/* CONTACT */}
        <section className="mb-20">
          <h3 className="text-3xl font-bold mb-4">Contact Me</h3>
          <p className="text-indigo-400 mb-6">
            Want to collaborate? Book a meeting or send a message — I'll reply within 48 hours.
          </p>

          <motion.form
            onSubmit={handleBooking}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl mx-auto bg-indigo-900 bg-opacity-20 rounded-xl p-8 space-y-6"
          >
            <div>
              <label htmlFor="name" className="block mb-1 font-semibold">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={onChange}
                required
                className="w-full rounded-md border border-indigo-600 bg-indigo-800 bg-opacity-70 px-4 py-2 text-indigo-100 placeholder-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 font-semibold">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={onChange}
                required
                className="w-full rounded-md border border-indigo-600 bg-indigo-800 bg-opacity-70 px-4 py-2 text-indigo-100 placeholder-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 font-semibold">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                value={form.message}
                onChange={onChange}
                required
                className="w-full rounded-md border border-indigo-600 bg-indigo-800 bg-opacity-70 px-4 py-2 text-indigo-100 placeholder-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Write your message here"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 rounded-md font-bold text-white transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Book a Meeting"}
            </button>

            {/* status toast (fades in/out) */}
            <div className="h-6">
              <AnimatePresence>
                {status && (
                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    className="mt-2 text-center text-sm"
                  >
                    {status}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </motion.form>
        </section>

        {/* FOOTER */}
        <footer className="text-center text-indigo-400 text-sm mb-8 select-none">{DATA.footerNote}</footer>
      </div>
    </div>
  );
}
