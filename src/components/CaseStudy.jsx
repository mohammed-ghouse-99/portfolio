import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { PROJECTS } from "./Work";
import Navbar from "./Navbar";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

export default function CaseStudy() {
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#090D16] flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">Project not found</h1>
          <Link to="/" className="text-teal-400 hover:underline">← Back to home</Link>
        </div>
      </div>
    );
  }

  const { title, metric, image, repo, tags, detail } = project;

  return (
    <div className="min-h-screen bg-[#090D16] text-white">
      <Navbar activeSection="" />

      <main className="max-w-5xl mx-auto px-6 lg:px-10 pt-28 pb-24">

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-teal-400 transition-colors font-medium"
          >
            <FaArrowLeft className="text-xs" />
            Back to Work
          </Link>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-[clamp(2.2rem,6vw,4rem)] font-black tracking-tight text-white leading-tight mb-3"
          >
            {title}
          </motion.h1>

          {/* Metric */}
          <motion.p variants={fadeUp} className="text-teal-400 text-lg font-semibold mb-10">
            {metric}
          </motion.p>

          {/* Meta row */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-10 border-b border-white/[0.07] mb-12"
          >
            {[
              { label: "DURATION", value: detail.duration },
              { label: "ROLE", value: project.role },
              { label: "CLIENT", value: detail.client },
              { label: "INDUSTRY", value: detail.industry },
            ].map(({ label, value }) => (
              <div key={label}>
                <div className="text-[10px] font-semibold tracking-[0.18em] text-teal-400 uppercase mb-1">
                  {label}
                </div>
                <div className="text-sm font-medium text-white/70">{value}</div>
              </div>
            ))}
          </motion.div>

          {/* Hero image */}
          {image && (
            <motion.div
              variants={fadeUp}
              className="rounded-2xl overflow-hidden mb-14 bg-[#0D1220]"
            >
              <img
                src={image}
                alt={title}
                className="w-full max-h-[500px] object-cover"
              />
            </motion.div>
          )}

          {/* Content */}
          <motion.div variants={container} className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: Challenge + Solution */}
            <div className="lg:col-span-2 space-y-10">
              <motion.div variants={fadeUp}>
                <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-white/30 mb-3">
                  THE CHALLENGE
                </h2>
                <p className="text-white/60 text-base leading-relaxed">
                  {detail.challenge}
                </p>
              </motion.div>

              <motion.div variants={fadeUp}>
                <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-white/30 mb-3">
                  THE SOLUTION
                </h2>
                <p className="text-white/60 text-base leading-relaxed">
                  {detail.solution}
                </p>
              </motion.div>
            </div>

            {/* Right: Outcomes + Tags */}
            <motion.div variants={fadeUp} className="space-y-8">
              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-white/30 mb-4">
                  KEY OUTCOMES
                </h3>
                <ul className="space-y-3">
                  {detail.outcome.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-white/60">
                      <span className="text-teal-400 mt-0.5 shrink-0 font-bold">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-white/30 mb-4">
                  TECH STACK
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-teal-400/10 text-teal-400 border border-teal-400/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-3">
                <a
                  href={repo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg glass-card text-sm font-semibold text-white/60 hover:text-teal-400 hover:border-teal-400/20 transition-all"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Next project navigation */}
          <motion.div
            variants={fadeUp}
            className="mt-20 pt-10 border-t border-white/[0.06]"
          >
            <p className="text-xs text-white/30 uppercase tracking-wider mb-4 font-semibold">Next Project</p>
            {(() => {
              const idx = PROJECTS.findIndex((p) => p.id === id);
              const next = PROJECTS[(idx + 1) % PROJECTS.length];
              return (
                <Link
                  to={`/project/${next.id}`}
                  className="group inline-flex items-center gap-3 text-xl font-black text-white hover:text-teal-400 transition-colors"
                >
                  {next.title}
                  <FaExternalLinkAlt className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              );
            })()}
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
