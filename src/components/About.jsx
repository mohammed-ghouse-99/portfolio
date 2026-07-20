import { motion } from "framer-motion";
import { FaBrain, FaCode, FaDatabase, FaTools } from "react-icons/fa";

const SKILLS = {
  "AIML": {
    icon: FaBrain,
    items: ["Scikit-learn", "LLMs", "OpenCV", "YOLOv5", "RAG"],
  },
  "Programming": {
    icon: FaCode,
    items: ["Python", "SQL", "JavaScript", "FastAPI"],
  },
  "Data & Analytics": {
    icon: FaDatabase,
    items: ["Pandas", "Power BI", "YFinance API"],
  },
  "Tools & Platforms": {
    icon: FaTools,
    items: ["Git", "HuggingFace", "Jupyter", "PostgreSQL"],
  },
};

const EXPERIENCE = [
  {
    role: "Data & AIML Intern",
    company: "MS Scrap Recyclers",
    duration: "Jun 2023 — Aug 2023",
    description: "Engineered a real-time scrap detection solution using computer vision and deep learning to optimize recycling processes.",
    achievements: ["Reduced manual sorting time by 40%", "Implemented YOLOv5 for object detection", "Built real-time monitoring dashboard"],
  },
  {
    role: "Research Assistant",
    company: "Academic Research Projects",
    duration: "Jan 2023 — Present",
    description: "Research on IoT-based healthcare monitoring and waste management systems using AIML algorithms.",
    achievements: ["Published 2 research papers", "Developed predictive models with 85% accuracy", "Presented at national AI conferences"],
  },
];

const EDUCATION = {
  degree: "B.Tech — Computer Science & Engineering",
  institution: "Lords Institute of Engineering & Technology",
  duration: "2023 — 2027",
  grade: "CGPA: 8.0 / 10",
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  return (
    <section id="about" className="py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-teal-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">ABOUT</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Passionate about making AI practical.
            </h2>
            <p className="text-white/50 text-base leading-relaxed pt-2">
              I'm a technology enthusiast from Hyderabad, passionate about designing intelligent,
              data-driven solutions. My expertise spans Data Analytics, Machine Learning, and Computer
              Vision. I enjoy transforming raw data into meaningful insights that drive real decisions —
              and I believe AI should feel like a collaborative partner, not a black box.
            </p>
          </div>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {Object.entries(SKILLS).map(([category, { icon: Icon, items }], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card rounded-2xl p-5 hover:border-white/10 transition-colors"
            >
              <div className="flex items-center gap-2 mb-4">
                <Icon className="text-teal-400 text-sm" />
                <span className="text-xs font-semibold text-white/60 uppercase tracking-wider">{category}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] font-medium px-2 py-1 rounded-full bg-white/5 text-white/60 hover:bg-teal-400/10 hover:text-teal-400 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-black text-white mb-8">Experience</h3>
          <div className="space-y-5">
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 hover:border-white/10 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                  <div>
                    <h4 className="text-base font-bold text-white">{exp.role}</h4>
                    <p className="text-sm text-white/40">{exp.company}</p>
                  </div>
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-white/40 shrink-0">
                    {exp.duration}
                  </span>
                </div>
                <p className="text-sm text-white/50 leading-relaxed mb-4">{exp.description}</p>
                <ul className="space-y-1.5">
                  {exp.achievements.map((a, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-white/40">
                      <span className="text-teal-400 mt-0.5 shrink-0">—</span>
                      {a}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-black text-white mb-6">Education</h3>
          <div className="glass-card rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-base font-bold text-white mb-1">{EDUCATION.degree}</h4>
              <p className="text-sm text-white/40">{EDUCATION.institution}</p>
            </div>
            <div className="text-right shrink-0">
              <div className="text-sm font-medium text-teal-400">{EDUCATION.grade}</div>
              <div className="text-xs text-white/30 mt-1">{EDUCATION.duration}</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
