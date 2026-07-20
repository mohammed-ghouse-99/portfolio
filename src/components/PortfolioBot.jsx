import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PortfolioBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi 👋 I'm Mohammed's AI assistant. Ask me about his skills, projects, or experience!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    const cleaned = input.trim();
    if (!cleaned) return;
    setMessages((prev) => [...prev, { role: "user", text: cleaned }]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("https://agent-prod.studio.lyzr.ai/v3/inference/chat/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": import.meta.env.VITE_LYZR_API_KEY,
        },
        body: JSON.stringify({
          user_id: "ghousenaser2005@gmail.com",
          agent_id: "694f3fe56363be71980eb081",
          session_id: "portfolio-chat-session",
          message: cleaned,
        }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "bot", text: data.response }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "⚠️ Failed to connect. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* FAB */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-teal-400 text-[#090D16] flex items-center justify-center shadow-lg shadow-teal-400/20 hover:bg-teal-300 transition-colors"
        aria-label="Open AI Assistant"
      >
        {open ? (
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5}>
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
            <path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 4a1 1 0 0 0-1 1v5a1 1 0 0 0 .553.894l3 1.5a1 1 0 1 0 .894-1.788L13 11.382V7a1 1 0 0 0-1-1z" />
          </svg>
        )}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-20 right-6 z-50 w-[92vw] sm:w-[380px] h-[480px] flex flex-col rounded-2xl overflow-hidden shadow-2xl shadow-black/60"
            style={{ background: "#0D1220", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-white/[0.06] flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-teal-400/20 flex items-center justify-center">
                <span className="text-teal-400 text-xs font-bold">AI</span>
              </div>
              <div>
                <div className="text-xs font-bold text-white">Portfolio Assistant</div>
                <div className="text-[10px] text-teal-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 inline-block animate-pulse" />
                  Online
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-teal-400 text-[#090D16] font-medium rounded-br-sm"
                        : "bg-white/[0.06] text-white/70 rounded-bl-sm"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white/[0.06] px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        animate={{ y: [0, -4, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.15 }}
                        className="w-1.5 h-1.5 rounded-full bg-white/30 block"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-white/[0.06] flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && input.trim()) sendMessage();
                }}
                placeholder="Ask about skills, projects..."
                className="flex-1 bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-2.5 text-xs text-white placeholder-white/20 focus:outline-none focus:border-teal-400/40 transition-all"
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim()}
                className="px-4 py-2.5 rounded-xl bg-teal-400 text-[#090D16] text-xs font-bold hover:bg-teal-300 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}