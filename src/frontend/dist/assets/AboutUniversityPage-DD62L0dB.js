import { u as useNavigate, j as jsxRuntimeExports, r as reactExports } from "./index-CUgpWnl1.js";
import { S as SubTabRibbon } from "./SubTabRibbon-BKmFbHDc.js";
import { T as TIMELINE_DATA, a as ALUMNI_DATA } from "./aboutus-DHwoebON.js";
import "./utils-B1sCwcN7.js";
import "./chevron-left-CYfXXX7B.js";
import "./chevron-right-Bz1X5sn9.js";
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
function useScrollReveal() {
  const ref = reactExports.useRef(null);
  const [visible, setVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}
function useGridReveal() {
  const ref = reactExports.useRef(null);
  const [visible, setVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}
function TimelineEntry({
  event,
  index
}) {
  const { ref, visible } = useScrollReveal();
  const isEven = index % 2 === 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref,
      className: "relative flex items-start gap-0 group",
      style: {
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.65s ease ${index * 0.07}s, transform 0.65s ease ${index * 0.07}s`
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `flex-1 ${isEven ? "pr-10 text-right" : "order-last pl-10 text-left"}`,
            children: isEven ? /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineCard, { event, align: "right" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center z-10 shrink-0 w-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-10 h-10 rounded-full flex items-center justify-center font-inter font-bold text-white shadow-cobalt",
              style: { background: COBALT },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "10px" }, children: event.year })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "flex-1 w-0.5 bg-cobalt opacity-30 mt-1",
              style: { minHeight: "40px" }
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `flex-1 ${!isEven ? "pl-10 text-left" : "order-none pr-0"}`,
            children: !isEven ? /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineCard, { event, align: "left" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden absolute left-14 right-0 top-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineCard, { event, align: "left" }) })
      ]
    }
  );
}
function TimelineCard({
  event,
  align
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `bg-white rounded-2xl shadow-premium hover:shadow-premium-hover transition-premium p-5 mb-8 border border-gray-100 group-hover:border-cobalt-subtle ${align === "right" ? "text-right" : "text-left"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `flex items-center gap-2 mb-2 ${align === "right" ? "justify-end" : ""}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "px-3 py-0.5 rounded-full typo-support text-xs",
                  style: { background: "rgba(26, 35, 126, 0.1)", color: COBALT },
                  children: event.era
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "font-inter font-bold text-2xl",
                  style: { color: COBALT },
                  children: event.year
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h3",
          {
            className: "font-cinzel font-semibold text-lg mb-2 leading-snug",
            style: { color: DEEP_BLUE },
            children: event.title
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-body text-sm mb-3", style: { color: "#4a5568" }, children: event.description }),
        event.imageUrl && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-xl img-hover-zoom", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: event.imageUrl,
            alt: event.title,
            className: "w-full h-40 object-cover rounded-xl transition-transform duration-700 group-hover:scale-105",
            loading: "lazy"
          }
        ) })
      ]
    }
  );
}
function AlumniCard({ alumni, delay }) {
  const { ref, visible } = useScrollReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref,
      className: "bg-white rounded-2xl shadow-premium hover:shadow-premium-hover transition-premium cursor-default relative overflow-hidden group border-l-4",
      style: {
        borderLeftColor: COBALT,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500 rounded-2xl",
            style: {
              background: "linear-gradient(135deg, rgba(26, 35, 126, 0.04) 0%, rgba(26, 35, 126, 0) 60%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex flex-col items-center text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-full mb-4 ring-4 ring-cobalt overflow-hidden shadow-cobalt transition-transform duration-500 group-hover:scale-105", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: alumni.imageUrl,
              alt: alumni.name,
              className: "w-full h-full object-cover",
              loading: "lazy"
            }
          ) }),
          alumni.award && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "px-3 py-1 rounded-full typo-support text-xs mb-2 inline-block font-bold",
              style: { background: COBALT, color: "white" },
              children: alumni.award
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              className: "typo-card-title text-lg mb-1",
              style: { color: DEEP_BLUE },
              children: alumni.name
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2 mb-1 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "typo-support font-semibold text-cobalt", children: alumni.batch }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-300", children: "•" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "typo-support text-cobalt", children: alumni.department })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-support italic mb-3", style: { color: "#4a5568" }, children: alumni.designation }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-body text-sm", style: { color: "#6b7280" }, children: alumni.contribution })
        ] })
      ]
    }
  );
}
function AboutUniversityPage() {
  const introRef = useScrollReveal();
  const statsRef = useScrollReveal();
  const alumniGrid = useGridReveal();
  const navigate = useNavigate();
  function handleTabChange(tabId) {
    const route = TAB_ROUTES[tabId];
    if (route) navigate({ to: route });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "font-source", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative min-h-[420px] flex flex-col justify-center overflow-hidden",
        style: {
          background: "linear-gradient(135deg, #081E5C 0%, #0F3399 45%, #1A237E 100%)"
        },
        "data-ocid": "about-university.hero",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 opacity-10",
              style: {
                backgroundImage: "url('/assets/dms-hero-bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                mixBlendMode: "overlay"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0",
              style: { background: "rgba(8, 30, 92, 0.45)" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "relative z-10 max-w-5xl mx-auto px-6 py-16 text-center fade-in-up",
              style: { animationDelay: "0.1s" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "nav",
                  {
                    className: "flex items-center justify-center gap-2 typo-support text-sm mb-6",
                    style: { color: "rgba(255,255,255,0.65)" },
                    "aria-label": "Breadcrumb",
                    "data-ocid": "about-university.breadcrumb",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Home" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "›" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "About Us" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "›" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "rgba(255,255,255,0.85)" }, children: "About University" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "h1",
                  {
                    className: "typo-hero-heading text-white mb-5 leading-tight fade-in-up",
                    style: { animationDelay: "0.2s" },
                    children: [
                      "About COEP",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "white" }, children: "Technological University" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "typo-hero-tagline text-white/80 fade-in-up",
                    style: { animationDelay: "0.35s" },
                    children: "Established 1854  ·  Third Oldest Engineering College in Asia  ·  172 Years of Excellence"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "mx-auto mt-8 rounded-full fade-in-up",
                    style: {
                      width: "60px",
                      height: "3px",
                      background: GOLD,
                      animationDelay: "0.5s"
                    }
                  }
                )
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SubTabRibbon,
      {
        tabs: ABOUT_US_TABS,
        activeTab: "about-university",
        onTabChange: handleTabChange
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-white py-16 md:py-20",
        "data-ocid": "about-university.intro",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              ref: statsRef.ref,
              className: "grid grid-cols-2 md:grid-cols-4 gap-6 mb-14",
              style: {
                opacity: statsRef.visible ? 1 : 0,
                transform: statsRef.visible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.7s ease, transform 0.7s ease"
              },
              children: [
                { label: "Founded", value: "1854" },
                { label: "Rank in Asia", value: "3rd Oldest" },
                { label: "Years of Excellence", value: "172" },
                { label: "University Status", value: "Unitary Public" }
              ].map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "text-center py-5 px-4 rounded-xl border-b-4",
                  style: {
                    borderBottomColor: COBALT,
                    background: "rgba(26, 35, 126, 0.04)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "typo-stat-number mb-1",
                        style: { color: DEEP_BLUE },
                        children: stat.value
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "typo-stat-label uppercase tracking-wide font-semibold",
                        style: { color: COBALT },
                        children: stat.label
                      }
                    )
                  ]
                },
                stat.label
              ))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              ref: introRef.ref,
              className: "grid md:grid-cols-5 gap-10 items-start",
              style: {
                opacity: introRef.visible ? 1 : 0,
                transform: introRef.visible ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-3 space-y-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-cobalt" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "typo-section-label text-cobalt", children: "Our Heritage" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h2",
                    {
                      className: "typo-section-heading leading-tight",
                      style: { color: DEEP_BLUE },
                      children: "172 Years of Engineering Excellence"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-body", style: { color: "#374151" }, children: "Established in the era of British in the year 1854, well before any of the formal degree awarding universities took roots in India, College of Engineering Pune (COEP) now known as COEP Technological University (COEP Tech) is the third oldest engineering college in the country, and indeed in Asia, after College of Engineering, Guindy, and IIT Roorkee, having glorious history of 172 years." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-body", style: { color: "#374151" }, children: "Started as the Poona Engineering Class and Mechanical School, it was used for training officers involved in public works such as the construction of buildings, dams, canals, railways and bridges. The school was renamed several times before it became College of Engineering, Poona (COEP), in the year 1911." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-body", style: { color: "#374151" }, children: "It was initially affiliated to the University of Bombay for a degree of Licentiate in Civil Engineering known as LCE and later to the University of Pune. The degree programs in Civil Engineering, Mechanical Engineering and Electrical Engineering were started in 1908, 1912 and 1932, respectively. From then on, the college has gone on expanding adding new departments and new wings by the year." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2 flex flex-col gap-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "rounded-2xl p-7 text-white relative overflow-hidden",
                      style: {
                        background: "linear-gradient(135deg, #0F3399, #1A237E)"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "absolute top-4 left-5 font-cinzel font-bold opacity-10",
                            style: { fontSize: "6rem", color: "#283593" },
                            children: '"'
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "typo-body-lg relative z-10 italic",
                            style: { fontStyle: "italic" },
                            children: "In 2022, COEP was elevated to a full-fledged Unitary Public University — opening new avenues for research, innovation, and global partnerships."
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-0.5 bg-gold" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "typo-section-label text-white/70", children: "Government of Maharashtra, 2022" })
                        ] })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "rounded-2xl p-6 border-l-4",
                      style: {
                        borderLeftColor: COBALT,
                        background: "rgba(26, 35, 126, 0.05)"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "font-baskerville font-semibold text-sm mb-1",
                            style: { color: MIDNIGHT },
                            children: "Unitary Public University"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-body text-sm", style: { color: "#4a5568" }, children: "Recognised by the Government of Maharashtra with full academic and administrative independence — the highest distinction in Indian higher education." })
                      ]
                    }
                  )
                ] })
              ]
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16 md:py-24",
        style: { background: "#f8f9fa" },
        "data-ocid": "about-university.timeline",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-cobalt mx-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "typo-section-label text-cobalt", children: "Since 1854" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-cobalt mx-0" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                className: "typo-section-heading mb-4",
                style: { color: DEEP_BLUE },
                children: "Our Journey Through History"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-1 bg-cobalt mx-auto rounded-full" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 hidden md:block",
                style: {
                  background: "linear-gradient(to bottom, #1A237E, rgba(26, 35, 126, 0.1))"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-0", children: TIMELINE_DATA.map((event, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              TimelineEntry,
              {
                event,
                index
              },
              `${event.year}-${event.title}`
            )) })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-white py-16 md:py-24",
        "data-ocid": "about-university.alumni",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-cobalt mx-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "typo-section-label text-cobalt", children: "Alumni Legacy" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-cobalt mx-0" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                className: "typo-section-heading mb-3",
                style: { color: DEEP_BLUE },
                children: "Distinguished Alumni"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-body-lg", style: { color: "#6b7280" }, children: "Minds that shaped the world" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-1 bg-cobalt mx-auto mt-4 rounded-full" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              ref: alumniGrid.ref,
              className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7",
              children: ALUMNI_DATA.map((alumni, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                AlumniCard,
                {
                  alumni,
                  delay: alumniGrid.visible ? index * 0.08 : 0
                },
                alumni.id
              ))
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-14 text-white text-center",
        style: {
          background: "linear-gradient(135deg, #081E5C 0%, #1A237E 100%)"
        },
        "data-ocid": "about-university.cta",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "typo-section-heading mb-4 text-white", children: "Be Part of the Legacy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-body-lg text-white/80 mb-8", children: "Join one of Asia's oldest and most prestigious engineering universities — where tradition meets innovation." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "https://www.coeptech.ac.in/admissions",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-block px-8 py-3 rounded-full typo-btn transition-smooth hover:opacity-90 hover:shadow-gold",
              style: { background: GOLD, color: MIDNIGHT },
              "data-ocid": "about-university.admissions_link",
              children: "Explore Admissions"
            }
          )
        ] })
      }
    )
  ] });
}
export {
  AboutUniversityPage as default
};
