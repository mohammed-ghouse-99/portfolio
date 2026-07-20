import { motion } from "framer-motion";

const STEPS = [
  {
    number: "01",
    title: "Research & Discovery",
    description: "Deep-dive into the problem domain, data exploration, literature review, and requirement gathering to frame the right question.",
  },
  {
    number: "02",
    title: "Data Engineering",
    description: "Collection, cleaning, feature engineering, and building robust ETL pipelines that make downstream modelling reliable.",
  },
  {
    number: "03",
    title: "Model Development",
    description: "Building, training, and validating AIML models with rigorous cross-validation, hyperparameter tuning, and explainability checks.",
  },
  {
    number: "04",
    title: "Deploy & Monitor",
    description: "Shipping production-ready APIs, integrating with frontends, and setting up continuous performance monitoring.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-28 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-16"
        >
          <div>
            <p className="text-teal-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              PROCESS
            </p>
            <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              How I build AIML solutions.
            </h2>
          </div>
          <p className="text-white/40 text-base leading-relaxed lg:pb-1">
            A structured, repeatable approach that ensures every model I ship is grounded
            in strong data foundations and measurable outcomes.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.05] rounded-2xl overflow-hidden">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#090D16] p-8 group hover:bg-[#0D1220] transition-colors"
            >
              <div className="text-4xl font-black text-white/[0.07] group-hover:text-teal-400/20 transition-colors mb-6 font-mono">
                {step.number}
              </div>
              <h3 className="text-base font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
                {step.title}
              </h3>
              <p className="text-sm text-white/40 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
