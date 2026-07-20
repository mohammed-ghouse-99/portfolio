import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const NAV_ITEMS = [
  { label: "Work", href: "#work" },
  { label: "Research", href: "#research" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (e, href) => {
    if (!isHome) return;
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#090D16]/90 backdrop-blur-md border-b border-white/[0.04]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-black tracking-tight text-white hover:text-teal-400 transition-colors">
          Ghouse
        </Link>

        {/* Nav links */}
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

        {/* CTA */}
        <a
          href="#work"
          onClick={(e) => scrollTo(e, "#work")}
          className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-md bg-teal-400 text-[#090D16] text-sm font-bold hover:bg-teal-300 transition-colors duration-200"
        >
          View Projects
        </a>
      </div>
    </motion.header>
  );
}
