import { Bot, MessageCircle, Send, X } from "lucide-react";
import { useRef, useState } from "react";

interface Message {
  id: number;
  role: "bot" | "user";
  text: string;
}

const QUICK_REPLIES: { label: string; response: string }[] = [
  {
    label: "Admissions Info",
    response:
      "COEP Tech accepts admissions through MHT-CET / JEE Main for B.Tech, GATE for M.Tech, and CAT/MAT for MBA. Visit coeptech.ac.in/admissions for detailed eligibility criteria and important dates.",
  },
  {
    label: "Programs",
    response:
      "COEP Tech offers B.Tech (15 branches), M.Tech (20+ specializations), MBA through DMS, and PhD programs across Engineering, Technology & Management. Explore all programs at /academics.",
  },
  {
    label: "Research",
    response:
      "COEP Tech has active research in Smart Manufacturing, AR/VR, AI, Renewable Energy and more. The Bhau Institute incubates 100+ startups. Over ₹200 Cr in research grants awarded. See /research for details.",
  },
  {
    label: "Campus Life",
    response:
      "COEP Tech has 20+ student clubs, annual fests like ZEST, Impressions & Aarohan, a 120-year Regatta tradition, sports complex, and vibrant hostels. Discover more at /student-life.",
  },
  {
    label: "Contact Us",
    response:
      "📍 Wellesely Road, Shivajinagar, Pune – 411 005\n📞 +91-20-25507000\n✉️ info@coeptech.ac.in\n🌐 www.coeptech.ac.in",
  },
];

export function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      role: "bot",
      text: "Hi! I'm COEP's virtual assistant. Ask me anything about admissions, programs, or campus life!",
    },
  ]);
  const [input, setInput] = useState("");
  const [pulsed, setPulsed] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(1);

  const addMessage = (role: "bot" | "user", text: string) => {
    setMessages((prev) => [...prev, { id: nextId.current++, role, text }]);
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 60);
  };

  const handleQuickReply = (item: { label: string; response: string }) => {
    addMessage("user", item.label);
    setTimeout(() => addMessage("bot", item.response), 500);
  };

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    addMessage("user", trimmed);
    setInput("");
    setTimeout(() => {
      addMessage(
        "bot",
        "Thank you for your question! For detailed information, please visit coeptech.ac.in or contact our admissions office at +91-20-25507000.",
      );
    }, 700);
  };

  const handleOpen = () => {
    setOpen(true);
    setPulsed(false);
  };

  return (
    <div
      className="fixed z-[9999]"
      style={{ bottom: 24, right: 24 }}
      data-ocid="chatbot.section"
    >
      {/* Chat panel */}
      {open && (
        <div
          className="absolute bottom-16 right-0 flex flex-col bg-card border border-border shadow-premium-hover overflow-hidden"
          style={{
            width: 320,
            height: 420,
            borderRadius: 12,
            animation: "fadeInUp 0.3s ease-out forwards",
          }}
          data-ocid="chatbot.dialog"
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3 flex-shrink-0"
            style={{ background: "#1648C8" }}
          >
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-white" />
              <span
                className="font-bold text-white text-sm"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                COEP Assistant
              </span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white transition-smooth"
              aria-label="Close chat"
              data-ocid="chatbot.close_button"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.role === "bot" && (
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mr-2 mt-0.5"
                    style={{ background: "#1648C8" }}
                  >
                    <Bot className="w-3 h-3 text-white" />
                  </div>
                )}
                <div
                  className="max-w-[75%] px-3 py-2 text-xs leading-relaxed whitespace-pre-line"
                  style={{
                    background:
                      msg.role === "bot" ? "rgba(22,72,200,0.08)" : "#1648C8",
                    color: msg.role === "bot" ? "#0F3499" : "#fff",
                    borderRadius:
                      msg.role === "bot"
                        ? "2px 12px 12px 12px"
                        : "12px 2px 12px 12px",
                    fontFamily: "Source Sans 3, sans-serif",
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Quick replies — show only if last message is bot's opening */}
            {messages.length === 1 && (
              <div className="flex flex-wrap gap-1.5 mt-2">
                {QUICK_REPLIES.map((qr) => (
                  <button
                    key={qr.label}
                    type="button"
                    onClick={() => handleQuickReply(qr)}
                    className="text-xs px-3 py-1.5 rounded-full border transition-smooth hover:text-white"
                    style={{
                      borderColor: "#1648C8",
                      color: "#1648C8",
                      fontFamily: "Source Sans 3, sans-serif",
                      background: "transparent",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#1648C8";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                    }}
                    data-ocid={`chatbot.quick_reply.${qr.label.toLowerCase().replace(/\s/g, "_")}`}
                  >
                    {qr.label}
                  </button>
                ))}
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input bar */}
          <div
            className="flex items-center gap-2 px-3 py-2 border-t border-border flex-shrink-0"
            style={{ background: "#fafafa" }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a question…"
              className="flex-1 text-xs outline-none bg-transparent"
              style={{
                fontFamily: "Source Sans 3, sans-serif",
                color: "#0F3499",
              }}
              data-ocid="chatbot.input"
            />
            <button
              type="button"
              onClick={handleSend}
              className="w-7 h-7 rounded-full flex items-center justify-center transition-smooth"
              style={{ background: "#1648C8" }}
              aria-label="Send message"
              data-ocid="chatbot.submit_button"
            >
              <Send className="w-3.5 h-3.5 text-white" />
            </button>
          </div>
        </div>
      )}

      {/* Floating bubble button */}
      <button
        type="button"
        onClick={handleOpen}
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-cobalt transition-smooth hover:scale-110"
        style={{
          background: "#1648C8",
          animation: pulsed ? "chatbotPulse 2.5s ease-in-out 3" : undefined,
        }}
        aria-label="Open COEP Assistant"
        data-ocid="chatbot.open_modal_button"
      >
        {open ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>
    </div>
  );
}
