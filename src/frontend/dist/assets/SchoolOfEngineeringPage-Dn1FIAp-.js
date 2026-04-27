import { j as jsxRuntimeExports, L as Link } from "./index-CWBSPPg1.js";
import { L as Layout } from "./Layout-BqPaQAtX.js";
import { q as motion } from "./proxy-CehUjztl.js";
import { C as ChevronRight } from "./chevron-right-CGGygREL.js";
import { A as ArrowLeft } from "./arrow-left-BXwIpJnC.js";
import { S as Star } from "./star-p-8TBfAe.js";
import { B as BookOpen } from "./book-open-tD07fUNd.js";
import { G as GraduationCap } from "./graduation-cap-CUFFOVXQ.js";
import { M as Microscope } from "./microscope-DphrYeof.js";
import "./utils-CwJNFt5C.js";
import "./x-Bs45HD9q.js";
import "./Header-D5iK_n6Q.js";
const COBALT = "#1648C8";
const DEEP_BLUE = "#0F3499";
const MIDNIGHT = "#081E5C";
const GOLD = "#E8C42A";
const DEPARTMENTS = [
  {
    badge: "ME",
    name: "Mechanical Engineering",
    description: "Covers thermodynamics, fluid mechanics, manufacturing processes, robotics, and design. Home to cutting-edge labs in CAD/CAM, rapid prototyping, and advanced manufacturing.",
    color: COBALT
  },
  {
    badge: "CSE",
    name: "Computer Science & Engineering",
    description: "Algorithms, AI/ML, software systems, networks, and data science. Equipped with high-performance computing labs, AI research centre, and strong industry partnerships.",
    color: DEEP_BLUE
  },
  {
    badge: "CE",
    name: "Civil Engineering",
    description: "Structural engineering, urban infrastructure, geotechnics, transportation, and environmental engineering. Features structural testing and geotechnical investigation labs.",
    color: COBALT
  },
  {
    badge: "EE",
    name: "Electrical Engineering",
    description: "Power systems, electrical drives, renewable energy, smart grid, and power electronics. Features fully equipped power systems and drives laboratories.",
    color: DEEP_BLUE
  },
  {
    badge: "E&TC",
    name: "Electronics & Telecommunication",
    description: "Communication systems, VLSI design, signal processing, embedded systems, and microwave engineering. State-of-the-art VLSI and communication labs.",
    color: COBALT
  },
  {
    badge: "ICE",
    name: "Instrumentation & Control",
    description: "Automation, process control, industrial instrumentation, sensors and actuators. Features advanced process control simulation labs and IoT research setups.",
    color: DEEP_BLUE
  },
  {
    badge: "META",
    name: "Metallurgy & Materials Science",
    description: "Materials characterization, composites, surface engineering, corrosion, and nano-materials. Equipped with SEM, XRD, and advanced materials testing facilities.",
    color: COBALT
  },
  {
    badge: "IT",
    name: "Information Technology",
    description: "Web technologies, database systems, computer networks, cloud computing, and cybersecurity. Fully equipped networking labs and cloud computing infrastructure.",
    color: DEEP_BLUE
  },
  {
    badge: "ASH",
    name: "Applied Sciences & Humanities",
    description: "Mathematics, physics, chemistry, humanities, and English. Provides the analytical and communication foundation underlying all engineering disciplines at COEP.",
    color: COBALT
  }
];
const PROGRAMS = [
  {
    title: "B.Tech",
    duration: "4 Years",
    description: "Undergraduate engineering programme across 8 disciplines. Admission via JEE Main / MHT-CET, with ~540 seats across all branches.",
    eligibility: "10+2 PCM | JEE Main / MHT-CET",
    departments: "8 core engineering branches",
    icon: BookOpen
  },
  {
    title: "M.Tech",
    duration: "2 Years",
    description: "Postgraduate research-oriented programme with 20+ specializations. Offered in partnership with leading research centres and industry collaborators.",
    eligibility: "B.E. / B.Tech + GATE Score",
    departments: "20+ specializations",
    icon: GraduationCap
  },
  {
    title: "PhD",
    duration: "3+ Years",
    description: "Doctoral programme with world-class research facilities, DST/DRDO funded projects, and international collaboration opportunities.",
    eligibility: "M.Tech / M.Sc + Interview",
    departments: "All engineering departments",
    icon: Microscope
  }
];
function DeptCard({
  dept,
  index
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.5, delay: index * 0.06 },
      whileHover: { y: -6, scale: 1.02, transition: { duration: 0.2 } },
      className: "rounded-2xl overflow-hidden flex flex-col group",
      style: {
        background: "#fff",
        border: `1.5px solid ${dept.color}20`,
        boxShadow: "0 2px 12px rgba(22,72,200,0.07)"
      },
      "data-ocid": `engineering.dept_card.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-full", style: { backgroundColor: dept.color } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex flex-col flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-start justify-between mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase",
              style: {
                backgroundColor: `${dept.color}12`,
                color: dept.color,
                border: `1px solid ${dept.color}25`,
                fontFamily: "Source Sans 3, sans-serif"
              },
              children: dept.badge
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              className: "text-base font-bold mb-2 leading-snug",
              style: { fontFamily: "Playfair Display, serif", color: DEEP_BLUE },
              children: dept.name
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-xs leading-relaxed flex-1 mb-4",
              style: { color: "#6b7280", fontFamily: "Source Sans 3, sans-serif" },
              children: dept.description
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs font-semibold transition-all duration-200 group-hover:gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                style: {
                  color: dept.color,
                  fontFamily: "Source Sans 3, sans-serif"
                },
                children: "View Details"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ChevronRight,
              {
                className: "w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1",
                style: { color: dept.color }
              }
            )
          ] })
        ] })
      ]
    }
  );
}
function SchoolOfEngineeringPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative overflow-hidden",
        style: { minHeight: "400px" },
        "data-ocid": "engineering.hero_section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0",
              style: {
                backgroundImage: "url('/assets/generated/school-of-engineering-hero.dim_1600x600.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0",
              style: {
                background: "linear-gradient(135deg, rgba(8,30,92,0.88) 0%, rgba(22,72,200,0.70) 60%, rgba(8,30,92,0.85) 100%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 opacity-[0.06]",
              style: {
                backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)",
                backgroundSize: "28px 28px"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-[1280px] mx-auto px-4 xl:px-8 py-16 md:py-24", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.nav,
              {
                initial: { opacity: 0, y: -16 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5 },
                className: "flex items-center gap-1.5 text-xs text-white/60 mb-6",
                "data-ocid": "engineering.breadcrumb",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Link,
                    {
                      to: "/",
                      className: "hover:text-white transition-colors",
                      "data-ocid": "engineering.breadcrumb.home_link",
                      children: "Home"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3 h-3" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Link,
                    {
                      to: "/academics",
                      className: "hover:text-white transition-colors",
                      "data-ocid": "engineering.breadcrumb.academics_link",
                      children: "Academics"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3 h-3" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/90", children: "School of Engineering" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, x: -20 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.5, delay: 0.1 },
                className: "mb-6",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: "/academics",
                    className: "inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors",
                    "data-ocid": "engineering.back_link",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
                      "Back to Academics"
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: -30 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.6, delay: 0.2 },
                className: "flex items-center gap-3 mb-5",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-14 h-14 rounded-2xl flex items-center justify-center",
                      style: {
                        background: "rgba(255,255,255,0.14)",
                        border: "1px solid rgba(255,255,255,0.25)"
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-7 h-7 text-white" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "text-white/75 text-sm font-semibold uppercase tracking-wider",
                      style: { fontFamily: "Source Sans 3, sans-serif" },
                      children: "COEP Technological University"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.h1,
              {
                initial: { opacity: 0, y: 40 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.7, delay: 0.3 },
                className: "text-4xl md:text-6xl font-bold text-white leading-tight mb-4",
                style: { fontFamily: "Playfair Display, serif" },
                children: "School of Engineering"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                initial: { opacity: 0, y: 24 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.65, delay: 0.45 },
                className: "text-lg md:text-xl text-white/80 mb-8",
                style: { fontFamily: "Source Sans 3, sans-serif" },
                children: "9 Departments  |  2000+ Students  |  150+ Faculty"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 24 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.65, delay: 0.55 },
                className: "flex flex-wrap gap-4",
                children: [
                  { val: "9", label: "Departments" },
                  { val: "2000+", label: "Students" },
                  { val: "150+", label: "Faculty" },
                  { val: "#90", label: "NIRF Rank" }
                ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-2 px-4 py-2 rounded-full",
                    style: {
                      background: "rgba(255,255,255,0.12)",
                      border: "1px solid rgba(255,255,255,0.2)"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "font-bold text-white text-base",
                          style: { fontFamily: "Playfair Display, serif" },
                          children: s.val
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "text-white/70 text-xs uppercase tracking-wider",
                          style: { fontFamily: "Source Sans 3, sans-serif" },
                          children: s.label
                        }
                      )
                    ]
                  },
                  s.label
                ))
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20",
        style: { backgroundColor: "#f5f7fc" },
        "data-ocid": "engineering.departments_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1280px] mx-auto px-4 xl:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.55 },
              className: "text-center mb-14",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "inline-block text-xs font-bold uppercase tracking-[0.22em] mb-3",
                    style: { color: COBALT, fontFamily: "Source Sans 3, sans-serif" },
                    children: "Academic Disciplines"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h2",
                  {
                    className: "text-3xl md:text-4xl font-bold mb-4",
                    style: {
                      fontFamily: "Playfair Display, serif",
                      color: DEEP_BLUE
                    },
                    children: "Our Departments"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "max-w-2xl mx-auto text-base",
                    style: {
                      color: "#6b7280",
                      fontFamily: "Source Sans 3, sans-serif"
                    },
                    children: "Nine departments spanning the breadth of engineering and applied sciences, each a centre of academic rigour and research excellence at COEP."
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5", children: DEPARTMENTS.map((dept, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(DeptCard, { dept, index: i }, dept.badge)) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20",
        style: { backgroundColor: "#fff" },
        "data-ocid": "engineering.programs_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1280px] mx-auto px-4 xl:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.55 },
              className: "text-center mb-14",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "inline-block text-xs font-bold uppercase tracking-[0.22em] mb-3",
                    style: { color: COBALT, fontFamily: "Source Sans 3, sans-serif" },
                    children: "Degree Programmes"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h2",
                  {
                    className: "text-3xl md:text-4xl font-bold mb-4",
                    style: {
                      fontFamily: "Playfair Display, serif",
                      color: DEEP_BLUE
                    },
                    children: "Programs Offered"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "max-w-2xl mx-auto text-base",
                    style: {
                      color: "#6b7280",
                      fontFamily: "Source Sans 3, sans-serif"
                    },
                    children: "From undergraduate engineering to doctoral research — COEP School of Engineering offers transformative programmes at every level."
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: PROGRAMS.map((prog, i) => {
            const Icon = prog.icon;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 40 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.55, delay: i * 0.12 },
                whileHover: { y: -8, transition: { duration: 0.2 } },
                className: "rounded-2xl overflow-hidden flex flex-col group",
                style: {
                  background: `linear-gradient(135deg, ${MIDNIGHT} 0%, ${COBALT} 100%)`,
                  boxShadow: "0 6px 28px rgba(22,72,200,0.22)"
                },
                "data-ocid": `engineering.program_card.${i + 1}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-7 flex flex-col flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-14 h-14 rounded-2xl flex items-center justify-center mb-5",
                      style: {
                        background: "rgba(255,255,255,0.14)",
                        border: "1px solid rgba(255,255,255,0.25)"
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-7 h-7 text-white" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end gap-3 mb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "h3",
                      {
                        className: "text-3xl font-bold text-white",
                        style: { fontFamily: "Playfair Display, serif" },
                        children: prog.title
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "text-sm text-white/70 pb-0.5",
                        style: { fontFamily: "Source Sans 3, sans-serif" },
                        children: prog.duration
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-white/75 text-sm leading-relaxed mb-5 flex-1",
                      style: { fontFamily: "Source Sans 3, sans-serif" },
                      children: prog.description
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/50 text-xs uppercase tracking-wider w-24 flex-shrink-0 pt-0.5", children: "Eligibility" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "text-white/85",
                          style: { fontFamily: "Source Sans 3, sans-serif" },
                          children: prog.eligibility
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/50 text-xs uppercase tracking-wider w-24 flex-shrink-0 pt-0.5", children: "Departments" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "text-white/85",
                          style: { fontFamily: "Source Sans 3, sans-serif" },
                          children: prog.departments
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: "/admissions",
                      className: "mt-6 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-bold text-sm uppercase tracking-wider transition-all duration-200 hover:brightness-110 hover:scale-105",
                      style: {
                        backgroundColor: GOLD,
                        color: MIDNIGHT,
                        fontFamily: "Source Sans 3, sans-serif"
                      },
                      "data-ocid": `engineering.program_apply.${i + 1}`,
                      children: [
                        "Apply Now",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
                      ]
                    }
                  )
                ] })
              },
              prog.title
            );
          }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16",
        style: {
          background: `linear-gradient(135deg, ${MIDNIGHT} 0%, ${COBALT} 100%)`
        },
        "data-ocid": "engineering.cta_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1280px] mx-auto px-4 xl:px-8 flex flex-col md:flex-row items-center justify-between gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: -30 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: 0.55 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-xs font-bold uppercase tracking-widest text-white/60 mb-2",
                    style: { fontFamily: "Source Sans 3, sans-serif" },
                    children: "Ready to Apply?"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    className: "text-2xl font-bold text-white",
                    style: { fontFamily: "Playfair Display, serif" },
                    children: "Join the School of Engineering"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-sm text-white/70 mt-1",
                    style: { fontFamily: "Source Sans 3, sans-serif" },
                    children: "170+ years of engineering excellence in Pune."
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: 30 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: 0.55, delay: 0.1 },
              className: "flex gap-3 flex-shrink-0",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "/admissions",
                    className: "flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm uppercase tracking-wider transition-all duration-200 hover:brightness-110 hover:scale-105",
                    style: {
                      backgroundColor: GOLD,
                      color: MIDNIGHT,
                      fontFamily: "Source Sans 3, sans-serif"
                    },
                    "data-ocid": "engineering.cta_apply_button",
                    children: [
                      "Apply Now",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/academics",
                    className: "flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm uppercase tracking-wider transition-all duration-200 hover:bg-white/15",
                    style: {
                      border: "2px solid rgba(255,255,255,0.4)",
                      color: "white",
                      fontFamily: "Source Sans 3, sans-serif"
                    },
                    "data-ocid": "engineering.cta_back_button",
                    children: "All Schools"
                  }
                )
              ]
            }
          )
        ] })
      }
    )
  ] });
}
export {
  SchoolOfEngineeringPage as default
};
