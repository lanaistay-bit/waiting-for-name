import { u as useNavigate, j as jsxRuntimeExports, r as reactExports } from "./index-CWBSPPg1.js";
import { S as SubTabRibbon } from "./SubTabRibbon-CeM4RiSE.js";
import { B as BOARD_OF_GOVERNANCE } from "./aboutus-DHwoebON.js";
import "./utils-CwJNFt5C.js";
import "./chevron-left-DHJqGKal.js";
import "./chevron-right-CGGygREL.js";
import "./generatedImages-CQJnp3HI.js";
const ABOUT_US_TABS = [
  { id: "about-university", label: "About University" },
  {
    id: "authorities-boards-committees",
    label: "Authorities, Boards & Committees"
  },
  { id: "board-of-governance", label: "Board of Governance" }
];
const TAB_ROUTES = {
  "about-university": "/about-us/about-university",
  "authorities-boards-committees": "/about-us/authorities-boards-committees",
  "board-of-governance": "/about-us/board-of-governance"
};
function useReveal() {
  const ref = reactExports.useRef(null);
  const [visible, setVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
}
function HeroSection() {
  const [mounted, setMounted] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      style: {
        background: "linear-gradient(135deg, #081E5C 0%, #0F3499 45%, #1648C8 100%)"
      },
      className: "relative overflow-hidden pt-28 pb-20 px-6",
      "data-ocid": "board-hero.section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            "aria-hidden": true,
            className: "absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-10",
            style: {
              background: "radial-gradient(circle, #E8C42A 0%, transparent 70%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            "aria-hidden": true,
            className: "absolute -bottom-20 -left-20 w-96 h-96 rounded-full opacity-[0.07]",
            style: {
              background: "radial-gradient(circle, #ffffff 0%, transparent 70%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "max-w-5xl mx-auto text-center relative z-10",
            style: {
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s ease, transform 0.7s ease"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "nav",
                {
                  className: "flex items-center justify-center gap-2 text-sm mb-6",
                  style: {
                    fontFamily: "var(--font-body)",
                    color: "rgba(255,255,255,0.65)"
                  },
                  "aria-label": "Breadcrumb",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "hover:text-white transition-colors", children: "Home" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: "/" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/about-us", className: "hover:text-white transition-colors", children: "About Us" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: "/" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "rgba(255,255,255,0.85)" }, children: "Board of Governance" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h1",
                {
                  className: "text-5xl md:text-6xl font-bold text-white mb-5 leading-tight",
                  style: { fontFamily: "var(--font-display)" },
                  children: "Board of Governance"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-xl md:text-2xl",
                  style: {
                    fontFamily: "var(--font-body)",
                    color: "rgba(255,255,255,0.80)"
                  },
                  children: "Shaping the Future of Technical Education in Maharashtra"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "mx-auto mt-8 h-1 w-20 rounded-full",
                  style: { background: "#1648C8" },
                  "aria-hidden": true
                }
              )
            ]
          }
        )
      ]
    }
  );
}
function ChairmanSection() {
  const [ref, visible] = useReveal();
  const { chairman } = BOARD_OF_GOVERNANCE;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      ref,
      className: "py-16 px-6",
      style: { background: "#EEF3FF" },
      "data-ocid": "board-chairman.section",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-white rounded-2xl shadow-lg overflow-hidden grid md:grid-cols-[300px_1fr]",
          style: {
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
            border: "1.5px solid #DDEAFF"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex flex-col items-center justify-center gap-5 p-10",
                style: {
                  background: "linear-gradient(160deg, #EEF3FF 0%, #D8E5FF 100%)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "rounded-full overflow-hidden flex-shrink-0",
                      style: {
                        width: 148,
                        height: 148,
                        border: "4px solid #1648C8",
                        boxShadow: "0 0 0 6px rgba(22,72,200,0.15)"
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "img",
                        {
                          src: chairman.imageUrl,
                          alt: chairman.name,
                          width: 148,
                          height: 148,
                          className: "w-full h-full object-cover"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold",
                      style: {
                        background: "#1648C8",
                        color: "#fff",
                        fontFamily: "var(--font-body)"
                      },
                      children: "⭐ Chairman, Board of Governance"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-10 flex flex-col justify-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h2",
                {
                  className: "text-3xl font-bold leading-tight",
                  style: { fontFamily: "var(--font-display)", color: "#0F3499" },
                  children: chairman.name
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-base font-semibold",
                  style: { fontFamily: "var(--font-body)", color: "#1648C8" },
                  children: chairman.designation
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-sm uppercase tracking-widest",
                  style: { fontFamily: "var(--font-body)", color: "#6B7280" },
                  children: chairman.organization
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "h-px my-1",
                  style: {
                    background: "linear-gradient(to right, #1648C8, transparent)"
                  },
                  "aria-hidden": true
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-[17px] leading-relaxed",
                  style: { fontFamily: "var(--font-body)", color: "#374151" },
                  children: chairman.bio
                }
              )
            ] })
          ]
        }
      ) })
    }
  );
}
function IntroSection() {
  const [ref, visible] = useReveal();
  const { intro, legalBasis } = BOARD_OF_GOVERNANCE;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      ref,
      className: "py-16 px-6 bg-white",
      "data-ocid": "board-intro.section",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "max-w-3xl mx-auto text-center",
          style: {
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.65s ease, transform 0.65s ease"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                className: "text-3xl md:text-4xl font-bold mb-6",
                style: { fontFamily: "var(--font-display)", color: "#0F3499" },
                children: "About the Board"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-lg leading-relaxed mb-6",
                style: { fontFamily: "var(--font-body)", color: "#374151" },
                children: intro
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "inline-flex items-center gap-3 px-6 py-3 rounded-lg text-sm font-medium",
                style: {
                  background: "#EEF3FF",
                  border: "1px solid #BFCFFF",
                  color: "#0F3499",
                  fontFamily: "var(--font-body)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🏛️" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: legalBasis })
                ]
              }
            )
          ]
        }
      )
    }
  );
}
function MembersSection() {
  const [ref, visible] = useReveal();
  const { members } = BOARD_OF_GOVERNANCE;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      ref,
      className: "py-16 px-6",
      style: { background: "#F7F9FF" },
      "data-ocid": "board-members.section",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "max-w-5xl mx-auto",
          style: {
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.7s ease, transform 0.7s ease"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h2",
                {
                  className: "text-3xl md:text-4xl font-bold mb-3",
                  style: { fontFamily: "var(--font-display)", color: "#0F3499" },
                  children: "Board Members"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-base",
                  style: { fontFamily: "var(--font-body)", color: "#6B7280" },
                  children: "Distinguished leaders from academia, industry, and government"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "hidden md:block rounded-2xl overflow-hidden",
                style: {
                  border: "1.5px solid #BFCFFF",
                  boxShadow: "0 4px 24px rgba(22,72,200,0.08)"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "table",
                  {
                    className: "w-full text-sm",
                    style: { fontFamily: "var(--font-body)" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { style: { background: "#1648C8" }, children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "th",
                          {
                            className: "py-4 px-5 text-left text-white font-semibold",
                            style: {
                              fontFamily: "var(--font-display)",
                              fontSize: "0.85rem",
                              letterSpacing: "0.05em"
                            },
                            children: "Sr. No."
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "th",
                          {
                            className: "py-4 px-5 text-left text-white font-semibold",
                            style: {
                              fontFamily: "var(--font-display)",
                              fontSize: "0.85rem",
                              letterSpacing: "0.05em"
                            },
                            children: "Role / Category"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "th",
                          {
                            className: "py-4 px-5 text-left text-white font-semibold",
                            style: {
                              fontFamily: "var(--font-display)",
                              fontSize: "0.85rem",
                              letterSpacing: "0.05em"
                            },
                            children: "Member Name"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "th",
                          {
                            className: "py-4 px-5 text-left text-white font-semibold",
                            style: {
                              fontFamily: "var(--font-display)",
                              fontSize: "0.85rem",
                              letterSpacing: "0.05em"
                            },
                            children: "Designation"
                          }
                        )
                      ] }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: members.map((m, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "tr",
                        {
                          style: {
                            background: idx % 2 === 0 ? "#ffffff" : "#F0F4FF",
                            transition: "background 0.2s ease"
                          },
                          className: "hover:!bg-[#D8E5FF] cursor-default",
                          "data-ocid": `board-members.item.${m.srNo}`,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "td",
                              {
                                className: "py-4 px-5 font-bold",
                                style: { color: "#1648C8", width: 80 },
                                children: String(m.srNo).padStart(2, "0")
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "td",
                              {
                                className: "py-4 px-5 font-medium",
                                style: { color: "#374151" },
                                children: m.member
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "td",
                              {
                                className: "py-4 px-5 font-semibold",
                                style: { color: "#0F3499" },
                                children: m.name
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 px-5", style: { color: "#6B7280" }, children: m.role })
                          ]
                        },
                        `member-${m.srNo}-${m.name}`
                      )) })
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden flex flex-col gap-4", children: members.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "rounded-xl p-5 bg-white",
                style: {
                  border: "1.5px solid #BFCFFF",
                  boxShadow: "0 2px 12px rgba(22,72,200,0.07)"
                },
                "data-ocid": `board-members.item.${m.srNo}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0",
                        style: { background: "#1648C8" },
                        children: m.srNo
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded",
                        style: { background: "#EEF3FF", color: "#1648C8" },
                        children: m.member
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-base font-bold mb-1",
                      style: { color: "#0F3499", fontFamily: "var(--font-display)" },
                      children: m.name
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-sm leading-relaxed",
                      style: { color: "#6B7280", fontFamily: "var(--font-body)" },
                      children: m.role
                    }
                  )
                ]
              },
              `member-card-${m.srNo}-${m.name}`
            )) })
          ]
        }
      )
    }
  );
}
const FRAMEWORK_CARDS = [
  {
    icon: "⚖️",
    title: "Strategic Oversight",
    body: "The Board sets the strategic direction and ensures alignment with national education policy, Maharashtra's vision for technical excellence, and global best practices in higher education governance."
  },
  {
    icon: "🎓",
    title: "Academic Excellence",
    body: "Champions academic standards, research output, and innovation across all programmes. The Board ensures COEP Tech remains at the forefront of engineering, technology, and interdisciplinary education."
  },
  {
    icon: "🏛️",
    title: "Financial Stewardship",
    body: "Responsible for sound financial management, resource allocation, and institutional sustainability. The Board upholds fiscal discipline and maximises value from public and self-generated funds."
  }
];
function FrameworkSection() {
  const [ref, visible] = useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      ref,
      className: "py-16 px-6 bg-white",
      "data-ocid": "board-framework.section",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h2",
            {
              className: "text-3xl md:text-4xl font-bold mb-3",
              style: { fontFamily: "var(--font-display)", color: "#0F3499" },
              children: "Governance Framework"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-base max-w-xl mx-auto",
              style: { fontFamily: "var(--font-body)", color: "#6B7280" },
              children: "Three pillars that define how COEP Technological University is led and governed"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "grid md:grid-cols-3 gap-6",
            style: {
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 0.7s ease, transform 0.7s ease"
            },
            children: FRAMEWORK_CARDS.map((card, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "rounded-xl p-7 flex flex-col gap-4 bg-white",
                style: {
                  borderLeft: "4px solid #1648C8",
                  boxShadow: "0 2px 20px rgba(22,72,200,0.07)",
                  border: "1px solid #DDEAFF",
                  borderLeftWidth: 4,
                  borderLeftColor: "#1648C8",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(30px)",
                  transition: `opacity 0.6s ease ${idx * 0.15}s, transform 0.6s ease ${idx * 0.15}s`
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl", children: card.icon }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h3",
                    {
                      className: "text-xl font-bold",
                      style: { fontFamily: "var(--font-display)", color: "#0F3499" },
                      children: card.title
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-[16px] leading-relaxed",
                      style: { fontFamily: "var(--font-body)", color: "#374151" },
                      children: card.body
                    }
                  )
                ]
              },
              `framework-${card.title}`
            ))
          }
        )
      ] })
    }
  );
}
function CtaBanner() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      className: "py-12 px-6",
      style: {
        background: "linear-gradient(90deg, #081E5C 0%, #1648C8 100%)"
      },
      "data-ocid": "board-cta.section",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "text-white text-lg mb-2",
            style: { fontFamily: "var(--font-body)" },
            children: "Learn more about our governance structure"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h3",
          {
            className: "text-white text-2xl font-bold mb-6",
            style: { fontFamily: "var(--font-display)" },
            children: "Authorities, Boards & Committees"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "/about-us/authorities-boards-committees",
            className: "inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm transition-transform hover:scale-105",
            style: {
              background: "#E8C42A",
              color: "#1a1200",
              fontFamily: "var(--font-body)"
            },
            "data-ocid": "board-cta.link",
            children: "View All Committees →"
          }
        )
      ] })
    }
  );
}
function BoardOfGovernancePage() {
  const navigate = useNavigate();
  function handleTabChange(tabId) {
    const route = TAB_ROUTES[tabId];
    if (route) navigate({ to: route });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-h-screen", style: { fontFamily: "var(--font-body)" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SubTabRibbon,
      {
        tabs: ABOUT_US_TABS,
        activeTab: "board-of-governance",
        onTabChange: handleTabChange
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ChairmanSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(IntroSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MembersSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FrameworkSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CtaBanner, {})
  ] });
}
export {
  BoardOfGovernancePage as default
};
