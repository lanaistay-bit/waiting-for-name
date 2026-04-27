import { r as reactExports, j as jsxRuntimeExports } from "./index-CWBSPPg1.js";
import { c as createLucideIcon } from "./utils-CwJNFt5C.js";
import { X } from "./x-Bs45HD9q.js";
import { H as Header, F as Footer } from "./Header-D5iK_n6Q.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }]
];
const Bot = createLucideIcon("bot", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
];
const MessageCircle = createLucideIcon("message-circle", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Send = createLucideIcon("send", __iconNode);
const QUICK_REPLIES = [
  {
    label: "Admissions Info",
    response: "COEP Tech accepts admissions through MHT-CET / JEE Main for B.Tech, GATE for M.Tech, and CAT/MAT for MBA. Visit coeptech.ac.in/admissions for detailed eligibility criteria and important dates."
  },
  {
    label: "Programs",
    response: "COEP Tech offers B.Tech (15 branches), M.Tech (20+ specializations), MBA through DMS, and PhD programs across Engineering, Technology & Management. Explore all programs at /academics."
  },
  {
    label: "Research",
    response: "COEP Tech has active research in Smart Manufacturing, AR/VR, AI, Renewable Energy and more. The Bhau Institute incubates 100+ startups. Over ₹200 Cr in research grants awarded. See /research for details."
  },
  {
    label: "Campus Life",
    response: "COEP Tech has 20+ student clubs, annual fests like ZEST, Impressions & Aarohan, a 120-year Regatta tradition, sports complex, and vibrant hostels. Discover more at /student-life."
  },
  {
    label: "Contact Us",
    response: "📍 Wellesely Road, Shivajinagar, Pune – 411 005\n📞 +91-20-25507000\n✉️ info@coeptech.ac.in\n🌐 www.coeptech.ac.in"
  }
];
function AIChatbot() {
  const [open, setOpen] = reactExports.useState(false);
  const [messages, setMessages] = reactExports.useState([
    {
      id: 0,
      role: "bot",
      text: "Hi! I'm COEP's virtual assistant. Ask me anything about admissions, programs, or campus life!"
    }
  ]);
  const [input, setInput] = reactExports.useState("");
  const [pulsed, setPulsed] = reactExports.useState(true);
  const messagesEndRef = reactExports.useRef(null);
  const nextId = reactExports.useRef(1);
  const addMessage = (role, text) => {
    setMessages((prev) => [...prev, { id: nextId.current++, role, text }]);
    setTimeout(() => {
      var _a;
      (_a = messagesEndRef.current) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
    }, 60);
  };
  const handleQuickReply = (item) => {
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
        "Thank you for your question! For detailed information, please visit coeptech.ac.in or contact our admissions office at +91-20-25507000."
      );
    }, 700);
  };
  const handleOpen = () => {
    setOpen(true);
    setPulsed(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "fixed z-[9999]",
      style: { bottom: 24, right: 24 },
      "data-ocid": "chatbot.section",
      children: [
        open && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "absolute bottom-16 right-0 flex flex-col bg-card border border-border shadow-premium-hover overflow-hidden",
            style: {
              width: 320,
              height: 420,
              borderRadius: 12,
              animation: "fadeInUp 0.3s ease-out forwards"
            },
            "data-ocid": "chatbot.dialog",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-center justify-between px-4 py-3 flex-shrink-0",
                  style: { background: "#1648C8" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "w-5 h-5 text-white" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "font-bold text-white text-sm",
                          style: { fontFamily: "Playfair Display, serif" },
                          children: "COEP Assistant"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => setOpen(false),
                        className: "text-white/70 hover:text-white transition-smooth",
                        "aria-label": "Close chat",
                        "data-ocid": "chatbot.close_button",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto px-3 py-3 space-y-3", children: [
                messages.map((msg) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: `flex ${msg.role === "user" ? "justify-end" : "justify-start"}`,
                    children: [
                      msg.role === "bot" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mr-2 mt-0.5",
                          style: { background: "#1648C8" },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "w-3 h-3 text-white" })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "max-w-[75%] px-3 py-2 text-xs leading-relaxed whitespace-pre-line",
                          style: {
                            background: msg.role === "bot" ? "rgba(22,72,200,0.08)" : "#1648C8",
                            color: msg.role === "bot" ? "#0F3499" : "#fff",
                            borderRadius: msg.role === "bot" ? "2px 12px 12px 12px" : "12px 2px 12px 12px",
                            fontFamily: "Source Sans 3, sans-serif"
                          },
                          children: msg.text
                        }
                      )
                    ]
                  },
                  msg.id
                )),
                messages.length === 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 mt-2", children: QUICK_REPLIES.map((qr) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => handleQuickReply(qr),
                    className: "text-xs px-3 py-1.5 rounded-full border transition-smooth hover:text-white",
                    style: {
                      borderColor: "#1648C8",
                      color: "#1648C8",
                      fontFamily: "Source Sans 3, sans-serif",
                      background: "transparent"
                    },
                    onMouseEnter: (e) => {
                      e.currentTarget.style.background = "#1648C8";
                    },
                    onMouseLeave: (e) => {
                      e.currentTarget.style.background = "transparent";
                    },
                    "data-ocid": `chatbot.quick_reply.${qr.label.toLowerCase().replace(/\s/g, "_")}`,
                    children: qr.label
                  },
                  qr.label
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: messagesEndRef })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-center gap-2 px-3 py-2 border-t border-border flex-shrink-0",
                  style: { background: "#fafafa" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "text",
                        value: input,
                        onChange: (e) => setInput(e.target.value),
                        onKeyDown: (e) => e.key === "Enter" && handleSend(),
                        placeholder: "Type a question…",
                        className: "flex-1 text-xs outline-none bg-transparent",
                        style: {
                          fontFamily: "Source Sans 3, sans-serif",
                          color: "#0F3499"
                        },
                        "data-ocid": "chatbot.input"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: handleSend,
                        className: "w-7 h-7 rounded-full flex items-center justify-center transition-smooth",
                        style: { background: "#1648C8" },
                        "aria-label": "Send message",
                        "data-ocid": "chatbot.submit_button",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-3.5 h-3.5 text-white" })
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: handleOpen,
            className: "w-14 h-14 rounded-full flex items-center justify-center shadow-cobalt transition-smooth hover:scale-110",
            style: {
              background: "#1648C8",
              animation: pulsed ? "chatbotPulse 2.5s ease-in-out 3" : void 0
            },
            "aria-label": "Open COEP Assistant",
            "data-ocid": "chatbot.open_modal_button",
            children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-6 h-6 text-white" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-6 h-6 text-white" })
          }
        )
      ]
    }
  );
}
function Layout({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AIChatbot, {})
  ] });
}
export {
  Layout as L
};
