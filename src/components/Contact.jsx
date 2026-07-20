import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const DATA = {
  email: "ghousenaser2005@gmail.com",
  linkedin: "http://www.linkedin.com/in/mohammed-ghouse-mohiuddin-0622a12a6",
  location: "Hyderabad, Telangana",
  resume: "/RESUME_Me.pdf",
  whatsapp: "+91 8712265317",
  whatsappLink: "https://wa.me/918712265317",
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const onChange = (e) => {
    const { id, value } = e.target;
    setForm((s) => ({ ...s, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const number = "918712265317";
      const text = `Hello Ghouse,

My name is ${form.name || "Visitor"}.
Email: ${form.email || "No email provided"}

Message:
${form.message || ""}`;

      const url = `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
      setStatus("✓ Opening WhatsApp chat...");
      
      setTimeout(() => {
        window.open(url, "_blank");
        setStatus("");
        setForm({ name: "", email: "", message: "" });
      }, 1000);
    } catch {
      setStatus("Failed to open WhatsApp. Please click the direct chat link.");
      setTimeout(() => setStatus(""), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-28 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* CTA Block — mirrors ghouse.me Contact block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-10 lg:p-14 text-center mb-16"
        >
          <p className="text-teal-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            CONTACT
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Let's build something meaningful together.
          </h2>
          <p className="text-white/40 text-base mb-8 max-w-xl mx-auto">
            Open to AIML internships, research collaborations, freelance data projects, and full-time roles.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={DATA.resume}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-md border border-white/15 text-white/70 text-sm font-semibold hover:border-white/40 hover:text-white transition-all duration-200"
            >
              View Resume
            </a>
            <a
              href={DATA.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-md bg-teal-400 text-[#090D16] text-sm font-bold hover:bg-teal-300 transition-colors duration-200 flex items-center gap-2"
            >
              <FaWhatsapp />
              WhatsApp Me
            </a>
          </div>
        </motion.div>

        {/* Contact grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {[
              { icon: FaEnvelope, label: "Email", value: DATA.email, href: `mailto:${DATA.email}` },
              { icon: FaMapMarkerAlt, label: "Location", value: DATA.location, href: null },
              { icon: FaLinkedin, label: "LinkedIn", value: "Connect with me", href: DATA.linkedin },
              { icon: FaWhatsapp, label: "WhatsApp", value: DATA.whatsapp, href: DATA.whatsappLink },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="glass-card rounded-xl p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-teal-400/10 flex items-center justify-center shrink-0">
                  <Icon className="text-teal-400 text-sm" />
                </div>
                <div>
                  <div className="text-xs text-white/30 mb-0.5">{label}</div>
                  {href ? (
                    <a href={href} target="_blank" rel="noreferrer" className="text-sm text-white/70 hover:text-teal-400 transition-colors font-medium">
                      {value}
                    </a>
                  ) : (
                    <div className="text-sm text-white/70 font-medium">{value}</div>
                  )}
                </div>
              </div>
            ))}

            {/* Available for */}
            <div className="glass-card rounded-xl p-5">
              <div className="text-xs text-white/30 mb-3 uppercase tracking-wider font-medium">Available For</div>
              <div className="flex flex-wrap gap-2">
                {["AIML Internships", "Data Science", "Research Collab", "Freelance"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-teal-400/10 text-teal-400 border border-teal-400/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-8 space-y-5"
          >
            {[
              { id: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
              { id: "email", label: "Your Email", type: "email", placeholder: "john@example.com" },
            ].map(({ id, label, type, placeholder }) => (
              <div key={id}>
                <label htmlFor={id} className="block text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">
                  {label}
                </label>
                <input
                  id={id}
                  type={type}
                  value={form[id]}
                  onChange={onChange}
                  required
                  placeholder={placeholder}
                  className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-teal-400/50 focus:bg-white/[0.06] transition-all"
                />
              </div>
            ))}

            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                value={form.message}
                onChange={onChange}
                required
                placeholder="Tell me about your project or opportunity..."
                className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-teal-400/50 focus:bg-white/[0.06] transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-teal-400 text-[#090D16] rounded-lg font-bold text-sm hover:bg-teal-300 transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="text-base" />
              {loading ? "Connecting…" : "Connect Now"}
            </button>

            <AnimatePresence>
              {status && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  className={`text-center text-xs font-medium ${status.startsWith("✓") ? "text-teal-400" : "text-red-400"}`}
                >
                  {status}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.form>
        </div>

      </div>
    </section>
  );
}
