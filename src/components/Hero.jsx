import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";

const DATA = {
  name: "Mohammed Ghouse Mohiuddin",
  label: "DATA & AIML ENGINEER",
  headline: "Turning raw data into intelligent decisions.",
  tagline: "Building data-driven systems that feel smart, scalable, and human.",
  sub: "Leading AIML strategy, systems thinking, and measurable AI product impact for scalable, human-centered data solutions.",
  github: "https://github.com/mohammed-ghouse-99",
  linkedin: "http://www.linkedin.com/in/mohammed-ghouse-mohiuddin-0622a12a6",
  resume: "/RESUME_Me.pdf",
  photo: "/images/profilepic.jpg",
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden bg-[#090D16]"
    >
      {/* Background Interactive Profile Portrait */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[58%] h-[110%] pointer-events-none overflow-hidden z-0 select-none">
        {/* Soft edge fade masks for smooth transition into deep background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#090D16] via-[#090D16]/50 lg:via-[#090D16]/50 to-[#090D16]/30 lg:to-transparent z-10" />
        <div className="absolute inset-x-0 bottom-0 h-[25%] lg:h-[35%] bg-gradient-to-t from-[#090D16] via-[#090D16]/30 to-transparent z-10" />
        <div className="absolute inset-x-0 top-0 h-[25%] bg-gradient-to-b from-[#090D16] via-[#090D16]/10 to-transparent z-10" />
        
        {/* Ambient teal & rose color glows */}
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[130px] z-10 pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-[15%] right-0 w-[500px] h-[500px] bg-rose-500/5 rounded-full blur-[130px] z-10 pointer-events-none mix-blend-screen" />

        {/* Image */}
        <div className="w-full h-full relative">
          <img
            src={DATA.photo}
            alt="Mohammed Ghouse Mohiuddin Background"
            className="w-full h-full object-cover object-[center_20%] lg:object-[center_12%] opacity-[0.35] lg:opacity-[0.38] mix-blend-lighten grayscale hover:grayscale-0 transition-all duration-1000"
          />
          {/* Dual tone soft color overlay mapping directly to photo */}
          <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 via-transparent to-rose-500/5 mix-blend-color-dodge z-10" />
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full py-20 lg:py-28 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start"
        >
          {/* LEFT COLUMN: Text details */}
          <div>
            <motion.p
              variants={fadeUp}
              className="text-teal-400 text-xs font-semibold tracking-[0.2em] uppercase mb-5"
            >
              {DATA.label}
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-[clamp(2.6rem,6vw,5.2rem)] font-black leading-[1.05] tracking-tight text-white mb-6"
            >
              {DATA.headline}
            </motion.h1>

            <motion.p variants={fadeUp} className="text-white/50 text-base leading-relaxed mb-10 max-w-md">
              {DATA.sub}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo("#work")}
                className="px-6 py-3 rounded-md bg-teal-400 text-[#090D16] text-sm font-bold hover:bg-teal-300 transition-colors duration-200"
              >
                View Work
              </button>
              <a
                href={DATA.resume}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-md border border-white/15 text-white/70 text-sm font-semibold hover:border-white/40 hover:text-white transition-all duration-200"
              >
                Resume
              </a>
            </motion.div>

            {/* Social row */}
            <motion.div variants={fadeUp} className="flex items-center gap-5 mt-10">
              <a href={DATA.github} target="_blank" rel="noreferrer" className="text-white/30 hover:text-white transition-colors">
                <FaGithub size={18} />
              </a>
              <a href={DATA.linkedin} target="_blank" rel="noreferrer" className="text-white/30 hover:text-white transition-colors">
                <FaLinkedin size={18} />
              </a>
              <a href={DATA.resume} target="_blank" rel="noreferrer" className="text-white/30 hover:text-white transition-colors">
                <FaFilePdf size={18} />
              </a>
              <span className="text-white/15 text-xs ml-1">Hyderabad, IN</span>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Tagline and Stats Grid */}
          <motion.div variants={fadeUp} className="flex flex-col items-center lg:items-start justify-start pt-2 lg:pt-16">
            <p className="text-[clamp(1.4rem,3.2vw,2.2rem)] font-bold text-white/85 leading-snug mb-8 w-full text-center lg:text-left drop-shadow-md">
              {DATA.tagline}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-2 w-full">
              {[
                { value: "15+", label: "Projects Completed" },
                { value: "2", label: "Research Papers" },
                { value: "3", label: "Hackathon Wins" },
                { value: "5+", label: "Technologies" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="glass-card rounded-xl p-5 group hover:border-teal-400/20 backdrop-blur-[4px] transition-colors"
                >
                  <div className="text-2xl font-black text-white mb-1 group-hover:text-teal-400 transition-colors">
                    {value}
                  </div>
                  <div className="text-xs text-white/40 font-medium">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[1px] h-10 bg-gradient-to-b from-teal-400/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}


