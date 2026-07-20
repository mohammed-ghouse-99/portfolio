import { motion } from "framer-motion";
import { FaFilePdf, FaExternalLinkAlt } from "react-icons/fa";

const PAPERS = [
  {
    id: 1,
    title: "Automated Detection of Recyclable Waste in Real-Time Using Deep Learning and Computer Vision Techniques",
    conference: "International Journal of Science, Engineering and Technology",
    year: "2025",
    image: "/images/research1.jpeg",
    link: "https://zenodo.org/records/17699446",
    type: "Journal Article",
    abstract:
      "Proposes a computer vision pipeline using YOLOv5 for real-time classification of recyclable waste streams, achieving 91% detection accuracy in live conveyor-belt environments.",
  },
  {
    id: 2,
    title: "Internet of Things-Based Arrhythmia Disease Prediction Using Machine Learning Techniques",
    conference: "National Student Conference on AI and Data Frontiers (NSCADF)",
    year: "2025",
    image: "/images/research2.jpeg",
    link: "/paper/Ghouse_Research_Paper_1.pdf",
    type: "Conference Paper",
    abstract:
      "Presents an IoT-integrated ECG monitoring system using SVM with RBF kernel on the MITBIH dataset, achieving 85% classification accuracy across five arrhythmia categories with real-time Telegram alerts.",
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

export default function Research() {
  return (
    <section id="research" className="py-28 border-t border-white/[0.05]">
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
            ACADEMIC CONTRIBUTIONS
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight">
            Research Papers
          </h2>
        </motion.div>

        {/* Papers list */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {PAPERS.map((paper) => (
            <motion.div
              key={paper.id}
              variants={fadeUp}
              className="glass-card rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-300 hover:-translate-y-0.5 group"
            >
              <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-0">
                {/* Image */}
                <div className="h-48 md:h-auto bg-[#0D1220] overflow-hidden relative">
                  <img
                    src={paper.image}
                    alt={paper.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0D1220] hidden md:block" />
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col justify-between gap-5">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-teal-400/10 text-teal-400 border border-teal-400/20 uppercase tracking-wide">
                        {paper.type}
                      </span>
                      <span className="text-xs text-white/30">{paper.year}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white leading-snug mb-3 group-hover:text-teal-400 transition-colors">
                      {paper.title}
                    </h3>

                    <p className="text-sm text-white/40 leading-relaxed mb-3">
                      {paper.abstract}
                    </p>

                    <p className="text-xs text-white/25 font-medium italic">
                      {paper.conference}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <a
                      href={paper.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-400 text-[#090D16] text-xs font-bold hover:bg-teal-300 transition-colors"
                    >
                      <FaFilePdf />
                      View Paper
                    </a>
                    <a
                      href={paper.link}
                      download
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass-card text-xs font-semibold text-white/50 hover:text-white hover:border-white/15 transition-all"
                    >
                      <FaExternalLinkAlt className="text-[10px]" />
                      Download PDF
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
