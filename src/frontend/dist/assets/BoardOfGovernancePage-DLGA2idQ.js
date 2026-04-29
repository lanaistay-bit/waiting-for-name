import { u as useNavigate, j as jsxRuntimeExports, r as reactExports } from "./index-pJv4La_B.js";
import { S as SubTabRibbon } from "./SubTabRibbon-BV78wOy3.js";
import { B as BOARD_OF_GOVERNANCE } from "./aboutus-DHwoebON.js";
import "./utils-bVAKhGf7.js";
import "./chevron-left-BE8I_4bk.js";
import "./chevron-right-DJxfNPv9.js";
import "./generatedImages-CQJnp3HI.js";
const COBALT = "#1A237E";
const DEEP_BLUE = "#0F3399";
const MIDNIGHT = "#081E5C";
const GOLD = "#E8C42A";
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
        background: "linear-gradient(135deg, #081E5C 0%, #0F3399 45%, #1A237E 100%)"
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
              background: `radial-gradient(circle, ${GOLD} 0%, transparent 70%)`
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
                  className: "flex items-center justify-center gap-2 typo-support text-sm mb-6",
                  style: { color: "rgba(255,255,255,0.65)" },
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "typo-hero-heading text-white mb-5 leading-tight", children: "Board of Governance" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-body-lg", style: { color: "rgba(255,255,255,0.80)" }, children: "Shaping the Future of Technical Education in Maharashtra" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "mx-auto mt-8 h-1 w-20 rounded-full",
                  style: { background: GOLD },
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
                        border: "4px solid #1A237E",
                        boxShadow: "0 0 0 6px rgba(26, 35, 126, 0.15)"
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
                      className: "inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full typo-support font-semibold",
                      style: { background: COBALT, color: "#fff" },
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
                  className: "typo-card-title text-3xl leading-tight",
                  style: { color: DEEP_BLUE },
                  children: chairman.name
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-support font-semibold", style: { color: COBALT }, children: chairman.designation }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-section-label", style: { color: "#6B7280" }, children: chairman.organization }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "h-px my-1",
                  style: {
                    background: `linear-gradient(to right, ${COBALT}, transparent)`
                  },
                  "aria-hidden": true
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-body", style: { color: "#374151" }, children: chairman.bio })
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "typo-section-heading mb-6", style: { color: DEEP_BLUE }, children: "About the Board" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-body-lg mb-6", style: { color: "#374151" }, children: intro }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "inline-flex items-center gap-3 px-6 py-3 rounded-lg typo-support font-medium",
                style: {
                  background: "#EEF3FF",
                  border: "1px solid #BFCFFF",
                  color: DEEP_BLUE
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
                  className: "typo-section-heading mb-3",
                  style: { color: DEEP_BLUE },
                  children: "Board Members"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-body", style: { color: "#6B7280" }, children: "Distinguished leaders from academia, industry, and government" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "hidden md:block rounded-2xl overflow-hidden",
                style: {
                  border: "1.5px solid #BFCFFF",
                  boxShadow: "0 4px 24px rgba(26, 35, 126, 0.08)"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm font-inter", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { style: { background: COBALT }, children: [
                    "Sr. No.",
                    "Role / Category",
                    "Member Name",
                    "Designation"
                  ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "th",
                    {
                      className: "py-4 px-5 text-left font-cinzel font-semibold text-white",
                      style: { fontSize: "0.85rem", letterSpacing: "0.05em" },
                      children: h
                    },
                    h
                  )) }) }),
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
                            className: "py-4 px-5 font-inter font-bold",
                            style: { color: COBALT, width: 80 },
                            children: String(m.srNo).padStart(2, "0")
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "td",
                          {
                            className: "py-4 px-5 typo-body",
                            style: { color: "#374151" },
                            children: m.member
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "td",
                          {
                            className: "py-4 px-5 font-baskerville font-bold",
                            style: { color: DEEP_BLUE },
                            children: m.name
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "td",
                          {
                            className: "py-4 px-5 typo-support",
                            style: { color: "#6B7280" },
                            children: m.role
                          }
                        )
                      ]
                    },
                    `member-${m.srNo}-${m.name}`
                  )) })
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden flex flex-col gap-4", children: members.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "rounded-xl p-5 bg-white",
                style: {
                  border: "1.5px solid #BFCFFF",
                  boxShadow: "0 2px 12px rgba(26, 35, 126, 0.07)"
                },
                "data-ocid": `board-members.item.${m.srNo}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "w-8 h-8 rounded-full flex items-center justify-center font-inter font-bold text-sm text-white flex-shrink-0",
                        style: { background: COBALT },
                        children: m.srNo
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "typo-section-label px-2 py-0.5 rounded",
                        style: {
                          background: "rgba(26, 35, 126, 0.1)",
                          color: COBALT
                        },
                        children: m.member
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "typo-card-title text-base mb-1",
                      style: { color: DEEP_BLUE },
                      children: m.name
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-body text-sm", style: { color: "#6B7280" }, children: m.role })
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
              className: "typo-section-heading mb-3",
              style: { color: DEEP_BLUE },
              children: "Governance Framework"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "typo-body max-w-xl mx-auto",
              style: { color: "#6B7280" },
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
                  border: "1px solid #DDEAFF",
                  borderLeftWidth: 4,
                  borderLeftColor: COBALT,
                  boxShadow: "0 2px 20px rgba(26, 35, 126, 0.07)",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(30px)",
                  transition: `opacity 0.6s ease ${idx * 0.15}s, transform 0.6s ease ${idx * 0.15}s`
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl", children: card.icon }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h3",
                    {
                      className: "font-cinzel font-semibold text-xl",
                      style: { color: DEEP_BLUE },
                      children: card.title
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-body", style: { color: "#374151" }, children: card.body })
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
        background: `linear-gradient(90deg, ${MIDNIGHT} 0%, ${COBALT} 100%)`
      },
      "data-ocid": "board-cta.section",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-body text-white text-lg mb-2", children: "Learn more about our governance structure" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-cinzel font-semibold text-2xl text-white mb-6", children: "Authorities, Boards & Committees" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "/about-us/authorities-boards-committees",
            className: "inline-flex items-center gap-2 px-7 py-3 rounded-full typo-btn transition-transform hover:scale-105",
            style: { background: GOLD, color: "#1a1200" },
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-h-screen font-source", children: [
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
