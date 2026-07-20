import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const DATA = {
  github: "https://github.com/mohammed-ghouse-99",
  linkedin: "http://www.linkedin.com/in/mohammed-ghouse-mohiuddin-0622a12a6",
};

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.05] py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="text-lg font-black text-white hover:text-teal-400 transition-colors">
            Mohammed Ghouse Mohiuddin
          </Link>

          {/* Nav */}
          <div className="flex items-center gap-6 text-sm text-white/40">
            {[
              { label: "Work", href: "#work" },
              { label: "Research", href: "#research" },
              { label: "About", href: "#about" },
              { label: "Contact", href: "#contact" },
            ].map(({ label, href }) => (
              <button
                key={label}
                onClick={() => scrollTo(href)}
                className="hover:text-white transition-colors"
              >
                {label}
              </button>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <a href={DATA.linkedin} target="_blank" rel="noreferrer" className="text-white/30 hover:text-white transition-colors">
              <FaLinkedin size={16} />
            </a>
            <a href={DATA.github} target="_blank" rel="noreferrer" className="text-white/30 hover:text-white transition-colors">
              <FaGithub size={16} />
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-white/20">
          © {year} Mohammed Ghouse Mohiuddin. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
