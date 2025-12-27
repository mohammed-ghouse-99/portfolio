import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PortfolioBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi 👋 I'm PortfolioRecruiterBot. Ask me about Mohammed's skills, projects, or experience.",
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
      const res = await fetch(
        "https://agent-prod.studio.lyzr.ai/v3/inference/chat/",
        {
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
        }
      );

      const data = await res.json();

      const botReply = data.response;

      setMessages((prev) => [...prev, { role: "bot", text: botReply }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "⚠️ Failed to connect to the agent." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-gray-800 dark:bg-gray-700 text-white px-5 py-4 rounded-full shadow-lg font-bold hover:bg-gray-700 dark:hover:bg-gray-600 z-50"
      >
        🤖 Recruiter Bot
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="
              fixed bottom-20 right-6
              w-[95vw] sm:w-[440px]
              h-[70vh] sm:h-[560px]
              bg-gray-900
              border border-gray-700
              rounded-xl shadow-xl
              z-50 flex flex-col
            "
          >
            {/* Header */}
            <div className="p-4 border-b border-gray-700 text-gray-400 font-semibold text-lg">
              PortfolioRecruiterBot
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 space-y-3 overflow-y-auto text-sm">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`max-w-[90%] p-3 rounded-lg ${
                    m.role === "user"
                      ? "ml-auto bg-gray-700 text-white"
                      : "mr-auto bg-gray-800 text-gray-300"
                  }`}
                >
                  <p className="whitespace-pre-wrap break-words">
                    {m.text}
                  </p>
                </div>
              ))}
              {loading && (
                <div className="text-gray-400 text-xs">Typing…</div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-700 flex gap-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    if (input.trim()) sendMessage();
                  }
                }}
                className="flex-1 bg-gray-800 text-gray-100 rounded-lg px-4 py-3 text-sm outline-none"
                placeholder="Ask about skills, projects..."
              />
              <button
                onClick={sendMessage}
                className="bg-gray-700 px-5 py-3 rounded-lg text-white font-semibold hover:bg-gray-600"
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