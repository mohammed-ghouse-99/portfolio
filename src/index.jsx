import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaFilePdf, FaSun, FaMoon, FaCalendarAlt, FaMapMarkerAlt, FaEnvelope, FaPhone, FaGraduationCap, FaBriefcase, FaAward, FaCode, FaDatabase, FaBrain } from "react-icons/fa";
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
  resume: "/RESUME_Me.pdf",
  photo: "/images/profilepic.jpg",

  intro: `I'm a technology enthusiast, passionate about designing intelligent, data-driven solutions.
My expertise lies across Data Analytics, Machine Learning and new Technologies.
From developing predictive models to creating interactive web applications, I enjoy transforming raw data into meaningful insights that drive decisions.
Continuous learning and innovation define my approach to technology.
I'm fascinated by how AI can support human creativity — for me it's like having a partner in problem-solving!!!`,

  // Expanded skills with categories
  technicalSkills: {
    "Machine Learning": ["Scikitlearn", "Deep Learning", "LLMs", "OpenCV"],
    "Programming": ["Python", "SQL", "Basic JavaScript"],
    "Tools & Frameworks": ["Power BI", "HuggingFace", "Git"],
    "Data Management": ["Data Analysis", "Database Design", "Visual Reports", "YFinance API"],
  },

  // Experience section
  experience: [
    {
      role: "Data & ML Intern",
      company: "MS Scrap Recyclers",
      duration: "Jun 2023 - Aug 2023",
      description: "Engineered a real-time scrap detection solution using computer vision and deep learning techniques to optimize recycling processes.",
      achievements: ["Reduced manual sorting time by 40%", "Implemented YOLOv5 for object detection", "Built real-time monitoring dashboard"]
    },
    {
      role: "Research Assistant",
      company: "Academic Research Projects",
      duration: "Jan 2023 - Present",
      description: "Conducted research on IoT-based healthcare monitoring and waste management systems using ML algorithms.",
      achievements: ["Published 2 research papers", "Developed predictive models with 85% accuracy", "Presented findings at academic conferences"]
    }
  ],

  // Education section
  education: [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering",
      institution: "Lords Institute of Engineering & Technology",
      duration: "2023 - 2027",
      grade: "CGPA: 8.0/10",
    }
  ],


  // Stats/Counter section
  stats: [
    { label: "Projects Completed", value: "15+" },
    { label: "Research Papers", value: "2" },
    { label: "Hackathon Wins", value: "3" },
    { label: "Technologies", value: "5+" }
  ],

  // Featured projects (keep existing plus new)
  featuredProjects: [
    {
      title: "Detection of Recyclable Waste in Real-Time",
      summary: "Real-time waste classification using YOLOv5 + OpenCV with a FastAPI backend.",
      tags: ["Computer Vision", "YOLOv5", "FastAPI", "OpenCV"],
      repo: "https://github.com/mohammed-ghouse-99",
      image: "/images/Screenshot_2025-08-03_231319.png",
      featured: true
    },
    {
      title: "PulsePredict (IoT Arrhythmia)",
      summary: "ECG signal processing + SVM classifier with Flask front-end and Telegram alerts.",
      tags: ["MITBIH Dataset", "SVM", "Flask", "IoT"],
      repo: "https://github.com/mohammed-ghouse-99",
      image: "/images/res1.jpeg",
      featured: true
    },
    {
      title: "HR Analytics Dashboard",
      summary: "Power BI dashboard for workforce analytics — attrition, salary trends and KPIs.",
      tags: ["SQL", "Power BI", "ETL", "Visual Reports"],
      repo: "https://github.com/mohammed-ghouse-99/HR-Data-Cleaning-and-Analytics",
      image: "/images/pic2.jpg",
      featured: true
    },
    {
      title: "Customer Churn Prediction",
      summary: "ML model predicting customer churn with 92% accuracy using Random Forest.",
      tags: ["Machine Learning", "Scikit-learn", "Pandas", "Flask"],
      repo: "#",
      demo: "#",
      featured: false
    }
  ],

  // Process/Workflow section
  process: [
    {
      title: "Research & Analysis",
      description: "Deep dive into problem domain, data exploration, and requirement gathering."
    },
    {
      title: "Model Development",
      description: "Building, training, and validating machine learning models with proper evaluation."
    },
    {
      title: "Deployment",
      description: "Creating production-ready APIs and integrating with frontend applications."
    },
    {
      title: "Monitoring & Improvement",
      description: "Continuous performance tracking and iterative model improvements."
    }
  ],

  researchPapers: [
    {
      title: "Automated Detection of Recyclable Waste in Real-Time Using Deep Learning and Computer Vision Techniques",
      file: "/paper/Ghouse_Research_Paper_2.pdf",
      conference: "International Conference on AI & Sustainability",
      year: "2024"
    },
    {
      title: "Internet of Things-Based Arrhythmia Disease Prediction Using Machine Learning Techniques",
      file: "/paper/Ghouse_Research_Paper_1.pdf",
      conference: "Journal of Medical Systems",
      year: "2023"
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
  <span className="inline-block bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-300 px-3 py-1 rounded-full text-sm mr-2 mb-2 font-medium select-none">
    {children}
  </span>
);

const SocialLink = ({ href, children, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="flex items-center space-x-2 text-gray-700 dark:text-gray-400 hover:underline font-semibold"
  >
    {icon} <span>{children}</span>
  </a>
);

// New Component: Stats Card
const StatCard = ({ value, label }) => (
  <div className="text-center p-4">
    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{value}</div>
    <div className="text-sm text-gray-600 dark:text-gray-400">{label}</div>
  </div>
);

// New Component: Process Step
const ProcessStep = ({ number, title, description }) => (
  <div className="relative p-6 border-l border-gray-300 dark:border-gray-700 ml-4">
    <div className="absolute -left-5 top-6 w-10 h-10 rounded-full bg-gray-800 dark:bg-gray-700 flex items-center justify-center text-white font-bold">
      {number}
    </div>
    <h4 className="text-lg font-semibold mb-2">{title}</h4>
    <p className="text-gray-600 dark:text-gray-400">{description}</p>
  </div>
);

// ------------------------------
// MAIN PORTFOLIO COMPONENT
// ------------------------------
export default function Portfolio() {
  // theme toggle
  const [dark, setDark] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const onChange = (e) => {
    const { id, value } = e.target;
    setForm((s) => ({ ...s, [id]: value }));
  };

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

      setStatus("Message sent successfully! I will get back to you soon.");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(""), 4000);
    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus("Failed to send message. Please try again later.");
      setTimeout(() => setStatus(""), 4000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-500 ${
        dark ? "dark bg-gray-900 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* NAVIGATION */}
        <header className="flex flex-col sm:flex-row items-center justify-between mb-16 py-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white text-3xl font-bold select-none cursor-default">
              {DATA.name[0]}
            </div>
            <div>
              <h1 className="text-2xl font-bold">{DATA.name}</h1>
              <p className="text-gray-500 dark:text-gray-400 text-sm tracking-wide">
                {DATA.role} • {DATA.location}
              </p>
            </div>
          </div>

          <nav className="flex items-center space-x-6 mt-6 sm:mt-0">
            <a href="#projects" className="text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium">Projects</a>
            <a href="#experience" className="text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium">Experience</a>
            <a href="#contact" className="text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium">Contact</a>
            
            <div className="flex items-center space-x-3">
              <a href={DATA.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-lg">
                <FaGithub />
              </a>
              <a href={DATA.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-lg">
                <FaLinkedin />
              </a>
              <a href={DATA.resume} target="_blank" rel="noreferrer" aria-label="Resume" className="text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-lg">
                <FaFilePdf />
              </a>
            </div>

            <button
              onClick={() => setDark(!dark)}
              aria-label="Toggle Dark Mode"
              className="p-2 rounded-full bg-gray-700 dark:bg-gray-800 text-white hover:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              {dark ? <FaSun /> : <FaMoon />}
            </button>
          </nav>
        </header>

        {/* HERO SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transforming Data into <span className="text-gray-600 dark:text-gray-400">Intelligent</span> Solutions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              {DATA.intro}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              {DATA.stats.map((stat, index) => (
                <div key={index} className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg">
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={DATA.github}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3 bg-gray-800 dark:bg-gray-700 rounded-md text-white font-semibold hover:bg-gray-700 dark:hover:bg-gray-600 transition transform hover:-translate-y-1"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-gray-700 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-400 font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900">
                {DATA.photo ? (
                  <img src={DATA.photo} alt="Profile" className="object-cover w-full h-full" />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-600 dark:text-gray-400 font-bold text-4xl">
                    {DATA.name.split(" ").slice(0, 2).map((n) => n[0]).join("")}
                  </div>
                )}
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gray-800 dark:bg-gray-900 p-4 rounded-xl shadow-lg border border-gray-700">
                <div className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="text-gray-400" />
                  <div>
                    <div className="font-semibold">Based in</div>
                    <div className="text-sm text-gray-400">{DATA.location}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SKILLS SECTION */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Technical Expertise</h3>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              A comprehensive skill set spanning from data analysis to full-stack development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(DATA.technicalSkills).map(([category, skills], idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-300 dark:border-gray-700"
              >
                <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  {category === "Machine Learning" && <FaBrain className="text-gray-600 dark:text-gray-400" />}
                  {category === "Programming" && <FaCode className="text-gray-600 dark:text-gray-400" />}
                  {category === "Data Management" && <FaDatabase className="text-gray-600 dark:text-gray-400" />}
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Professional Journey</h3>
            <p className="text-gray-500 dark:text-gray-400">Where I've applied my skills to solve real-world problems</p>
          </div>
          
          <div className="space-y-8">
            {DATA.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-300 dark:border-gray-700 hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold">{exp.role}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
                  </div>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full text-sm font-medium">
                    {exp.duration}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-gray-600 dark:text-gray-400 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Featured Projects</h3>
            <p className="text-gray-500 dark:text-gray-400">End-to-end implementations showcasing technical capabilities</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {DATA.featuredProjects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-300 dark:border-gray-700 group"
              >
                <div className="h-48 bg-gray-100 dark:bg-gray-900 overflow-hidden">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
                      Project Image
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-xl mb-2">{project.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.summary}</p>
                  <div className="mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-semibold flex items-center gap-2"
                    >
                      <FaGithub /> Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-semibold"
                      >
                        Live Demo →
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* RESEARCH PAPERS */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Research Contributions</h3>
            <p className="text-gray-500 dark:text-gray-400">Academic papers contributing to the field of AI and ML</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {DATA.researchPapers.map((paper, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="p-6 border border-gray-300 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <a
                    href={paper.file}
                    download
                    className="px-6 py-3 bg-gray-800 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 text-white font-semibold rounded-md whitespace-nowrap"
                  >
                    View Paper
                  </a>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">{paper.title}</h4>
                    <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <p>{paper.conference}</p>
                      <p>Published: {paper.year}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">My Development Process</h3>
            <p className="text-gray-500 dark:text-gray-400">A structured approach to building robust ML solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DATA.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-300 dark:border-gray-700 text-center"
              >
                <div className="w-12 h-12 bg-gray-800 dark:bg-gray-700 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h4 className="font-semibold text-lg mb-2">{step.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Let's Work Together</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Interested in collaboration? I'm available for internships, freelance projects, and research opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-300 dark:border-gray-700">
                <h4 className="text-xl font-bold mb-6">Get In Touch</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-gray-600 dark:text-gray-400" />
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Email</div>
                      <a href={`mailto:${DATA.email}`} className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                        {DATA.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaMapMarkerAlt className="text-gray-600 dark:text-gray-400" />
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Location</div>
                      <div className="text-gray-700 dark:text-gray-300">{DATA.location}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaLinkedin className="text-gray-600 dark:text-gray-400" />
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</div>
                      <a href={DATA.linkedin} target="_blank" rel="noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                        Connect with me
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Available for */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-300 dark:border-gray-700">
                <h4 className="text-xl font-bold mb-4">Available For</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge>Machine Learning Internships</Badge>
                  <Badge>Data Science Projects</Badge>
                  <Badge>Research Collaborations</Badge>
                  <Badge>Freelance Work</Badge>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              onSubmit={handleBooking}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-100 dark:bg-gray-900 rounded-xl p-8 space-y-6 shadow-lg"
            >
              <div>
                <label htmlFor="name" className="block mb-2 font-semibold">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={onChange}
                  required
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 font-semibold">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  required
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  value={form.message}
                  onChange={onChange}
                  required
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-gray-800 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 rounded-lg font-bold text-white transition disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    <FaCalendarAlt /> Schedule a Meeting
                  </>
                )}
              </button>

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
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-8 border-t border-gray-300 dark:border-gray-700">
          <div className="text-center mb-6">
            <div className="flex justify-center space-x-6 mb-4">
              <a href={DATA.github} target="_blank" rel="noreferrer" className="text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <FaGithub size={20} />
              </a>
              <a href={DATA.linkedin} target="_blank" rel="noreferrer" className="text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <FaLinkedin size={20} />
              </a>
              <a href={DATA.resume} target="_blank" rel="noreferrer" className="text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <FaFilePdf size={20} />
              </a>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">{DATA.footerNote}</p>
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400 text-xs pt-4 border-t border-gray-300 dark:border-gray-700">
            © {new Date().getFullYear()} {DATA.name}. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}