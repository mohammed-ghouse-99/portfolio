import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export const PROJECTS = [
  {
    id: "waste-detection",
    title: "Real-Time Waste Detection",
    role: "AIML Engineer",
    year: "2024",
    metric: "40% less manual sorting",
    summary: "Real-time recyclable waste classification using YOLOv5 + OpenCV with a FastAPI backend and a live monitoring dashboard.",
    tags: ["Computer Vision", "YOLOv5", "FastAPI", "OpenCV"],
    image: "/images/Screenshot_2025-08-03_231319.png",
    repo: "https://github.com/mohammed-ghouse-99",
    detail: {
      duration: "2023 — 2024",
      client: "MS Scrap Recyclers",
      industry: "Waste Management / CV",
      challenge: "Manual sorting of recyclable materials was slow, error-prone, and labor-intensive. The facility needed an automated vision system that could operate in real-time on a budget hardware setup.",
      solution: "Engineered a computer vision pipeline using YOLOv5 fine-tuned on a custom scrap dataset. Built a FastAPI backend exposing a WebSocket stream to a React dashboard for live detection overlays and throughput metrics.",
      outcome: [
        "Reduced manual sorting time by 40%",
        "Achieved 91% detection accuracy on held-out test set",
        "Built real-time monitoring dashboard with live FPS counter",
        "Deployed on edge hardware using TensorRT optimization",
      ],
    },
  },
  {
    id: "pulse-predict",
    title: "PulsePredict — IoT Arrhythmia",
    role: "AIML Research Assistant",
    year: "2023",
    metric: "85% prediction accuracy",
    summary: "IoT-integrated ECG signal processing + SVM classifier with Flask front-end and real-time Telegram alert system.",
    tags: ["MITBIH Dataset", "SVM", "Flask", "IoT"],
    image: "/images/res1.jpeg",
    repo: "https://github.com/mohammed-ghouse-99",
    detail: {
      duration: "Jan 2023 — Aug 2023",
      client: "Academic Research Project",
      industry: "Healthcare / IoT / AIML",
      challenge: "Cardiac arrhythmia detection in resource-constrained IoT environments requires both high accuracy and low-latency inference to issue timely patient alerts.",
      solution: "Processed ECG signals from the MITBIH dataset. Engineered frequency-domain and time-domain features, trained an SVM with RBF kernel, and deployed via Flask. Integrated Telegram Bot API for instant anomaly alerts.",
      outcome: [
        "Achieved 85% classification accuracy across 5 arrhythmia classes",
        "Alert latency under 2 seconds end-to-end",
        "Published findings at NSCADF national conference",
        "System tested on 48-hour Holter monitor recordings",
      ],
    },
  },
  {
    id: "hr-analytics",
    title: "HR Analytics Dashboard",
    role: "Data Analyst",
    year: "2023",
    metric: "12% attrition identified early",
    summary: "Power BI dashboard for workforce analytics covering attrition prediction, salary trend analysis, and executive KPIs.",
    tags: ["SQL", "Power BI", "ETL", "Data Modeling"],
    image: "/images/pic2.jpg",
    repo: "https://github.com/mohammed-ghouse-99/HR-Data-Cleaning-and-Analytics",
    detail: {
      duration: "Mid 2023",
      client: "Academic / Portfolio",
      industry: "HR Analytics / Business Intelligence",
      challenge: "HR teams lacked a centralized, visual view of workforce KPIs. Raw CSV data contained duplicates, null values, and inconsistent formatting that blocked reliable reporting.",
      solution: "Built a full ETL pipeline in SQL to clean, transform and load HR data. Designed a normalized data model in Power BI with a star schema, then built 6 interactive report pages with drill-through enabled.",
      outcome: [
        "Identified 12% of workforce as high attrition risk",
        "Reduced reporting prep time from 3 days to real-time",
        "Modeled salary trends across 8 departments",
        "Full drill-through from executive summary to employee-level detail",
      ],
    },
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Work() {
  return (
    <section id="work" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-teal-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            SELECTED WORK
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight">
            Projects
          </h2>
        </motion.div>

        {/* Project grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {PROJECTS.map((project) => (
            <motion.div key={project.id} variants={fadeUp}>
              <Link
                to={`/project/${project.id}`}
                className="group block glass-card rounded-2xl overflow-hidden hover:border-white/12 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="h-52 bg-[#0D1220] overflow-hidden relative">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="grid grid-cols-3 gap-2 opacity-20">
                        {Array.from({ length: 6 }).map((_, i) => (
                          <div key={i} className="w-16 h-10 rounded bg-white/10" />
                        ))}
                      </div>
                    </div>
                  )}
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1220] via-transparent to-transparent opacity-60" />
                </div>

                {/* Card body */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs text-white/40 font-medium">
                      {project.role} · {project.year}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-white/50 leading-relaxed mb-5">
                    {project.summary}
                  </p>

                  {/* Metric */}
                  <div className="flex items-center justify-between">
                    <span className="text-teal-400 text-sm font-semibold flex items-center gap-1">
                      {project.metric}
                      <FaArrowRight className="text-[10px] rotate-[-45deg]" />
                    </span>
                    <div className="flex flex-wrap gap-1.5 justify-end">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-white/5 text-white/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
