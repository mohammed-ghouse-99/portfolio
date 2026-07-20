import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const NAV_ITEMS = [
  { label: "Work", href: "#work" },
  { label: "Research", href: "#research" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const scrollTo = (e, href) => {
    if (!isHome) return;
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileOpen
            ? "bg-[#090D16]/90 backdrop-blur-md border-b border-white/[0.04]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="text-lg sm:text-xl font-black tracking-tight text-white hover:text-teal-400 transition-colors"
          >
            Mohammed Ghouse Mohiuddin
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {isHome ? (
              NAV_ITEMS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={(e) => scrollTo(e, href)}
                  className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                    activeSection === href.replace("#", "")
                      ? "text-teal-400 underline underline-offset-[6px] decoration-teal-400 decoration-2"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {label}
                </a>
              ))
            ) : (
              NAV_ITEMS.map(({ label, href }) => (
                <Link
                  key={label}
                  to={`/${href}`}
                  className="text-sm font-medium tracking-wide text-white/60 hover:text-white transition-colors"
                >
                  {label}
                </Link>
              ))
            )}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#work"
            onClick={(e) => scrollTo(e, "#work")}
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-md bg-teal-400 text-[#090D16] text-sm font-bold hover:bg-teal-300 transition-colors duration-200"
          >
            View Projects
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden text-white/70 hover:text-teal-400 transition-colors p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 top-16 z-40 bg-[#090D16]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-6"
          >
            {NAV_ITEMS.map(({ label, href }, i) => (
              <motion.a
                key={label}
                href={href}
                onClick={(e) => scrollTo(e, href)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
                className={`text-2xl font-bold tracking-tight transition-colors ${
                  activeSection === href.replace("#", "")
                    ? "text-teal-400"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {label}
              </motion.a>
            ))}

            <motion.a
              href="#work"
              onClick={(e) => scrollTo(e, "#work")}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: NAV_ITEMS.length * 0.06, duration: 0.3 }}
              className="mt-4 px-8 py-3 rounded-lg bg-teal-400 text-[#090D16] text-base font-bold hover:bg-teal-300 transition-colors"
            >
              View Projects
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
