import { r as reactExports, u as useNavigate, j as jsxRuntimeExports } from "./index-CUgpWnl1.js";
import { S as SubTabRibbon } from "./SubTabRibbon-BKmFbHDc.js";
import { A as AUTHORITIES_DATA } from "./aboutus-DHwoebON.js";
import "./utils-B1sCwcN7.js";
import "./chevron-left-CYfXXX7B.js";
import "./chevron-right-Bz1X5sn9.js";
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
function useScrollReveal() {
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
  return { ref, visible };
}
function CommitteeCard({
  committee,
  delay,
  parentVisible
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "data-ocid": `committee.item.${committee.srNo}`,
      className: "relative bg-white rounded-2xl overflow-hidden shadow-premium group\n        border border-gray-100 transition-premium\n        hover:shadow-premium-hover hover:-translate-y-1",
      style: {
        opacity: parentVisible ? 1 : 0,
        transform: parentVisible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms, box-shadow 0.35s ease, translate 0.35s ease`
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "absolute top-4 right-4 bg-cobalt text-white font-inter font-bold\n          rounded-full w-6 h-6 flex items-center justify-center shadow-cobalt z-10 text-xs",
            children: committee.srNo
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-7 pb-5 flex flex-col gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-1", role: "img", "aria-hidden": "true", children: committee.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              className: "typo-card-title leading-snug pr-6",
              style: { fontSize: "1.15rem" },
              children: committee.name
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-body text-sm", style: { color: "#4b5563" }, children: committee.description })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "h-1 w-full bg-cobalt group-hover:h-[5px] transition-all duration-300",
            "aria-hidden": "true"
          }
        )
      ]
    }
  );
}
function CommitteeTable({ committees }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full overflow-x-auto rounded-2xl shadow-premium", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full text-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-cobalt text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-4 text-left font-inter font-bold w-16 rounded-tl-2xl", children: "Sr. No." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-4 text-left font-inter font-bold w-64", children: "Committee Name" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-4 text-left font-inter font-bold rounded-tr-2xl", children: "Description" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: committees.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "tr",
      {
        "data-ocid": `committee.row.${c.srNo}`,
        className: `border-b border-gray-100 transition-colors duration-150 hover:bg-blue-50/50 ${c.srNo % 2 === 0 ? "bg-gray-50/60" : "bg-white"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4 text-center font-inter font-bold text-cobalt", children: c.srNo }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-5 py-4 font-baskerville font-bold text-deep-blue text-sm leading-snug", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-2", children: c.icon }),
            c.name
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "td",
            {
              className: "px-5 py-4 typo-body text-sm",
              style: { color: "#4b5563" },
              children: c.description
            }
          )
        ]
      },
      c.name
    )) })
  ] }) });
}
function AuthoritiesPage() {
  const [viewMode, setViewMode] = reactExports.useState("grid");
  const navigate = useNavigate();
  const introSection = useScrollReveal();
  const gridSection = useScrollReveal();
  const tableSection = useScrollReveal();
  const contactSection = useScrollReveal();
  function handleTabChange(tabId) {
    const route = TAB_ROUTES[tabId];
    if (route) navigate({ to: route });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-white font-source", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        "data-ocid": "authorities.hero",
        className: "relative overflow-hidden",
        style: {
          background: "linear-gradient(135deg, #081E5C 0%, #1A237E 100%)",
          minHeight: "340px"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 opacity-10",
              style: {
                backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,.4) 39px,rgba(255,255,255,.4) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,.4) 39px,rgba(255,255,255,.4) 40px)"
              },
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-10",
              style: {
                background: "radial-gradient(circle, #E8C42A 0%, transparent 70%)"
              },
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute -bottom-12 -left-12 w-56 h-56 rounded-full opacity-10",
              style: {
                background: "radial-gradient(circle, #ffffff 0%, transparent 70%)"
              },
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-6xl mx-auto px-6 py-20 flex flex-col items-start gap-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "nav",
              {
                className: "fade-in-down flex items-center gap-2 text-white/70 typo-support",
                "aria-label": "Breadcrumb",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "hover:text-white transition-colors", children: "Home" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-50", children: "›" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/about-us", className: "hover:text-white transition-colors", children: "About Us" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-50", children: "›" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-semibold", children: "Authorities, Boards & Committees" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h1",
              {
                className: "typo-hero-heading text-white leading-tight fade-in-up",
                style: { animationDelay: "100ms" },
                children: "Authorities, Boards & Committees"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "typo-hero-desc text-white/80 max-w-xl fade-in-up",
                style: { animationDelay: "220ms" },
                children: "Governing Excellence in Technical Education"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "h-1 w-24 rounded-full fade-in-up",
                style: { background: "#1A237E", animationDelay: "340ms" },
                "aria-hidden": "true"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SubTabRibbon,
      {
        tabs: ABOUT_US_TABS,
        activeTab: "authorities-boards-committees",
        onTabChange: handleTabChange
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "authorities.intro",
        ref: introSection.ref,
        className: "bg-white py-16",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "max-w-4xl mx-auto px-6",
            style: {
              opacity: introSection.visible ? 1 : 0,
              transform: introSection.visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.6s ease, transform 0.6s ease"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-cobalt", "aria-hidden": "true" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "typo-section-label text-cobalt", children: "Governance Structure" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-body-lg mb-5", style: { color: "#374151" }, children: AUTHORITIES_DATA.intro }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "bg-cobalt-subtle border-l-4 border-cobalt rounded-lg px-6 py-4 typo-body",
                  style: { color: "#374151" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-inter font-bold text-cobalt", children: [
                      "Legal Basis:",
                      " "
                    ] }),
                    "As per the",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-inter font-semibold text-deep-blue", children: "COEP Technological University Act" }),
                    ", Government of Maharashtra — these authorities ensure transparency, accountability, and sustained academic excellence across all facets of university functioning."
                  ]
                }
              )
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "authorities.committees",
        ref: gridSection.ref,
        className: "bg-surface py-20",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "text-center mb-14",
              style: {
                opacity: gridSection.visible ? 1 : 0,
                transform: gridSection.visible ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 0.6s ease, transform 0.6s ease"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-3 mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-cobalt", "aria-hidden": "true" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "typo-section-label text-cobalt", children: "As per COEP Tech Act" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-cobalt", "aria-hidden": "true" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "typo-section-heading text-deep-blue mb-3", children: "University Authorities, Boards and Committees" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "typo-body max-w-2xl mx-auto",
                    style: { color: "#4b5563" },
                    children: "Eleven statutory bodies govern every domain of university life — from academics and finance to student welfare and research excellence."
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end mb-8 gap-2", ref: tableSection.ref, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": "authorities.grid_view.toggle",
                onClick: () => setViewMode("grid"),
                className: `px-4 py-2 rounded-lg typo-support font-semibold transition-smooth border ${viewMode === "grid" ? "bg-cobalt text-white border-cobalt shadow-cobalt" : "bg-white text-cobalt border-cobalt hover:bg-cobalt-subtle"}`,
                children: "⊞ Grid View"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": "authorities.table_view.toggle",
                onClick: () => setViewMode("table"),
                className: `px-4 py-2 rounded-lg typo-support font-semibold transition-smooth border ${viewMode === "table" ? "bg-cobalt text-white border-cobalt shadow-cobalt" : "bg-white text-cobalt border-cobalt hover:bg-cobalt-subtle"}`,
                children: "☰ Table View"
              }
            )
          ] }),
          viewMode === "grid" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: AUTHORITIES_DATA.committees.map((committee) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            CommitteeCard,
            {
              committee,
              delay: committee.srNo * 50,
              parentVisible: gridSection.visible
            },
            committee.name
          )) }),
          viewMode === "table" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                opacity: tableSection.visible ? 1 : 0,
                transform: tableSection.visible ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 0.55s ease, transform 0.55s ease"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(CommitteeTable, { committees: AUTHORITIES_DATA.committees })
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        "data-ocid": "authorities.contact",
        ref: contactSection.ref,
        className: "bg-midnight py-16 relative overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-0 left-0 w-full h-1",
              style: { background: "#1A237E" },
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute -right-24 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full opacity-5",
              style: {
                background: "radial-gradient(circle, #1A237E 0%, transparent 70%)"
              },
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "max-w-4xl mx-auto px-6 text-center",
              style: {
                opacity: contactSection.visible ? 1 : 0,
                transform: contactSection.visible ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 0.6s ease, transform 0.6s ease"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl", role: "img", "aria-label": "Office", children: "🏛️" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h2",
                  {
                    className: "font-cinzel font-semibold text-white mb-4",
                    style: { fontSize: "clamp(1.4rem, 3vw, 2rem)" },
                    children: "Registrar's Office"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-body text-white/80 mb-3 max-w-2xl mx-auto", children: "For official queries regarding governance and committees, contact the Registrar's Office at COEP Technological University." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-support text-white/70 mb-6", children: "📍 Wellesley Rd, Shivajinagar, Pune – 411 005, Maharashtra, India" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    "data-ocid": "authorities.contact_us.button",
                    href: "mailto:info@coeptech.ac.in",
                    className: "inline-flex items-center gap-2 typo-btn bg-gold text-midnight\n              px-7 py-3 rounded-xl shadow-gold transition-smooth\n              hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-midnight",
                    children: "✉ Contact Us"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-support text-white/50 mt-4", children: "info@coeptech.ac.in" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
export {
  AuthoritiesPage as default
};
