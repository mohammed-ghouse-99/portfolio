import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Research from "./components/Research";
import About from "./components/About";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const SECTIONS = ["hero", "work", "research", "about", "process", "contact"];

export default function Portfolio() {
  const [loaded, setLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Intersection Observer — track which section is in view
  useEffect(() => {
    if (!loaded) return;
    const observers = [];
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [loaded]);

  // Scroll to top visibility
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Loader */}
      <AnimatePresence>
        {!loaded && <Loader onComplete={() => setLoaded(true)} />}
      </AnimatePresence>

      {/* Page content */}
      {loaded && (
        <div className="bg-[#090D16] text-white min-h-screen font-sans">
          <Navbar activeSection={activeSection} />

          <main>
            <Hero />
            <Work />
            <Research />
            <About />
            <Process />
            <Contact />
          </main>

          <Footer />

          {/* Scroll to top */}
          <AnimatePresence>
            {showTop && (
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="fixed bottom-6 left-6 z-50 w-10 h-10 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all"
                aria-label="Scroll to top"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 15l7-7 7 7" />
                </svg>
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      )}
    </>
  );
}