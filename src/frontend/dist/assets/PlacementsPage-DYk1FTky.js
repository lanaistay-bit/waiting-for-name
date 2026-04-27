import { a as useParams, u as useNavigate, j as jsxRuntimeExports, r as reactExports } from "./index-CWBSPPg1.js";
import { L as Layout } from "./Layout-BqPaQAtX.js";
import { S as SubTabRibbon } from "./SubTabRibbon-CeM4RiSE.js";
import { M as Mail, P as Phone } from "./x-Bs45HD9q.js";
import { U as Users } from "./users-SohuqeVK.js";
import { M as MapPin } from "./Header-D5iK_n6Q.js";
import { c as createLucideIcon } from "./utils-CwJNFt5C.js";
import { C as ChevronLeft } from "./chevron-left-DHJqGKal.js";
import { C as ChevronRight } from "./chevron-right-CGGygREL.js";
import { B as Briefcase } from "./briefcase-CpOFx9xO.js";
import { C as Calendar } from "./calendar-DJFxlWvd.js";
import { B as BookOpen } from "./book-open-tD07fUNd.js";
import { T as TrendingUp } from "./trending-up-g55Xpi9A.js";
import { B as Building2, T as Trophy } from "./trophy-B6nBFJ4J.js";
import { G as GraduationCap } from "./graduation-cap-CUFFOVXQ.js";
import { A as Award } from "./award-C_G_2_Vu.js";
import { S as Star } from "./star-p-8TBfAe.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
];
const MessageSquare = createLucideIcon("message-square", __iconNode$1);
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
      d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "rib7q0"
    }
  ],
  [
    "path",
    {
      d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "1ymkrd"
    }
  ]
];
const Quote = createLucideIcon("quote", __iconNode);
const COBALT = "#1648C8";
const DEEP_BLUE = "#0F3499";
const MIDNIGHT = "#081E5C";
const GOLD = "#E8C42A";
const TABS = [
  { id: "overview", label: "Overview" },
  { id: "recruiters", label: "Recruiters" },
  { id: "statistics", label: "Placement Statistics" },
  { id: "career-services", label: "Career Services" },
  { id: "training", label: "Training & Development" },
  { id: "alumni", label: "Alumni Success" }
];
function useCountUp(target, duration = 1800) {
  const [value, setValue] = reactExports.useState(0);
  const ref = reactExports.useRef(null);
  const started = reactExports.useRef(false);
  reactExports.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now) => {
            const pct = Math.min((now - start) / duration, 1);
            const ease = 1 - (1 - pct) ** 3;
            setValue(Math.round(target * ease));
            if (pct < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);
  return { value, ref };
}
function AnimatedBar({ pct, color }) {
  const [width, setWidth] = reactExports.useState(0);
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(pct), 100);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [pct]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      className: "h-2.5 rounded-full overflow-hidden",
      style: { backgroundColor: `${color}22` },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "h-full rounded-full",
          style: {
            width: `${width}%`,
            backgroundColor: color,
            transition: "width 1.2s cubic-bezier(0.4,0,0.2,1)"
          }
        }
      )
    }
  );
}
function StatBadge({
  value,
  label,
  delay
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex flex-col items-center text-center px-6 py-5 rounded-2xl",
      style: {
        background: "rgba(255,255,255,0.12)",
        border: "1px solid rgba(255,255,255,0.25)",
        backdropFilter: "blur(8px)",
        animation: `fadeInUp 0.7s ease-out ${delay}s both`
      },
      "data-ocid": "placements.hero_stat",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "text-4xl font-bold leading-none",
            style: { color: "white", fontFamily: "Playfair Display, serif" },
            children: value
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm mt-2 text-white/75 font-medium tracking-wide", children: label })
      ]
    }
  );
}
const OVERVIEW_STATS = [
  {
    label: "Total Offers (2024)",
    numericTarget: 1940,
    display: "1,940+",
    suffix: "+"
  },
  {
    label: "Companies Visited",
    numericTarget: 245,
    display: "245+",
    suffix: "+"
  },
  { label: "Highest CTC", numericTarget: 87, display: "₹87 LPA", suffix: "" },
  { label: "Average CTC", numericTarget: 12, display: "₹12 LPA", suffix: "" },
  { label: "Internships", numericTarget: 365, display: "365+", suffix: "+" },
  { label: "Placement Rate", numericTarget: 90, display: "90%+", suffix: "%" }
];
function StatCard({
  stat,
  idx
}) {
  const { value, ref } = useCountUp(stat.numericTarget, 1800);
  const icons = [Trophy, Building2, Award, TrendingUp, BookOpen, Star];
  const Icon = icons[idx % icons.length];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "rounded-2xl p-7 text-white text-center relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl",
      style: {
        background: `linear-gradient(135deg, ${COBALT} 0%, ${DEEP_BLUE} 60%, ${MIDNIGHT} 100%)`,
        animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`
      },
      "data-ocid": `placements.overview_stat.${idx + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300",
            style: {
              background: "radial-gradient(circle at center, #fff, transparent 70%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-7 h-7 mx-auto mb-3 opacity-60" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { ref, className: "sr-only", children: value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "text-4xl font-bold leading-none mb-2",
            style: { fontFamily: "Playfair Display, serif", color: "white" },
            children: stat.display
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/70 font-medium tracking-wide", children: stat.label })
      ]
    }
  );
}
function OverviewSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "inline-block w-12 h-1 rounded-full mb-4",
            style: { backgroundColor: COBALT }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h2",
          {
            className: "text-4xl font-bold mb-3",
            style: { color: DEEP_BLUE, fontFamily: "Playfair Display, serif" },
            children: "Key Placement Highlights"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg max-w-2xl mx-auto", style: { color: "#555" }, children: "A legacy of excellence — COEP graduates power the world's top organisations" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5", children: OVERVIEW_STATS.map((s, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { stat: s, idx }, s.label)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { animation: "fadeInUp 0.7s ease-out 0.1s both" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "w-12 h-1 rounded-full mb-5",
            style: { backgroundColor: COBALT }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h2",
          {
            className: "text-4xl font-bold mb-5",
            style: { color: DEEP_BLUE, fontFamily: "Playfair Display, serif" },
            children: "Training & Placement Cell"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed mb-4", style: { color: "#444" }, children: "The Training & Placement Cell (TPC) at COEP Technological University is the primary bridge between academia and industry. With over 168 years of legacy, COEP has built deep relationships with India's top employers across every sector." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed mb-6", style: { color: "#444" }, children: "Under dedicated Training & Placement Officers, TPC manages the complete placement cycle — from pre-placement training and company coordination to final offer issuance — ensuring transparent, merit-based placement for all students." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm",
            style: {
              backgroundColor: `${COBALT}12`,
              color: COBALT,
              border: `1px solid ${COBALT}30`,
              fontFamily: "Source Sans 3, sans-serif"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-4 h-4" }),
              "Contact TPC: tpc@coeptech.ac.in  |  +91-20-25507000 Ext. 200"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "rounded-2xl overflow-hidden shadow-2xl",
          style: {
            background: `linear-gradient(135deg, ${COBALT} 0%, ${MIDNIGHT} 100%)`,
            animation: "fadeInUp 0.7s ease-out 0.2s both"
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 text-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h3",
              {
                className: "text-2xl font-bold mb-6",
                style: { fontFamily: "Playfair Display, serif", color: "#fff" },
                children: "Reach Our TPC"
              }
            ),
            [
              {
                Icon: Users,
                title: "Prof. Amol Deshmukh",
                sub: "Training & Placement Officer"
              },
              {
                Icon: Mail,
                title: "tpc@coeptech.ac.in",
                sub: "Official TPC Email"
              },
              {
                Icon: Phone,
                title: "+91-20-25507000 Ext. 200",
                sub: "Mon–Sat, 9AM–5PM IST"
              },
              {
                Icon: MapPin,
                title: "TPC Office, Main Building",
                sub: "COEP Tech University, Pune – 411005"
              }
            ].map(({ Icon, title, sub }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 mb-5 last:mb-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0",
                  style: { backgroundColor: "rgba(255,255,255,0.15)" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4", style: { color: "white" } })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-white/90", children: title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/55", children: sub })
              ] })
            ] }, sub))
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "rounded-3xl py-12 px-8",
        style: {
          background: "linear-gradient(135deg, #f0f4ff 0%, #e8eeff 100%)",
          border: `1px solid ${COBALT}20`
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              className: "text-3xl font-bold text-center mb-2",
              style: { color: DEEP_BLUE, fontFamily: "Playfair Display, serif" },
              children: "Our Placement Process"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center mb-10 text-base", style: { color: "#666" }, children: "A structured, transparent journey from registration to offer letter" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4", children: [
            {
              n: "01",
              t: "Registration",
              d: "Students register with TPC before placement season"
            },
            {
              n: "02",
              t: "PPT",
              d: "Pre-placement talks from visiting companies"
            },
            {
              n: "03",
              t: "Aptitude Test",
              d: "Online/written quantitative & verbal test"
            },
            {
              n: "04",
              t: "Technical Round",
              d: "Domain-specific interview with subject experts"
            },
            {
              n: "05",
              t: "HR Interview",
              d: "Culture fit, soft skills & salary discussion"
            },
            {
              n: "06",
              t: "Offer Letter",
              d: "Final selection and formal offer issuance"
            }
          ].map((step, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex flex-col items-center text-center",
              "data-ocid": `placements.process.${idx + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-14 h-14 rounded-full flex flex-col items-center justify-center mb-3 shadow-lg",
                    style: { backgroundColor: COBALT, color: "#fff" },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold opacity-60", children: step.n })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h4",
                  {
                    className: "font-bold text-sm mb-1",
                    style: {
                      color: DEEP_BLUE,
                      fontFamily: "Playfair Display, serif"
                    },
                    children: step.t
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs leading-snug", style: { color: "#777" }, children: step.d })
              ]
            },
            step.n
          )) })
        ]
      }
    )
  ] });
}
const RECRUITER_ROWS = [
  {
    tier: "Tier 1 — Premier Recruiters",
    companies: [
      { name: "Google", sector: "Technology" },
      { name: "Microsoft", sector: "Technology" },
      { name: "Amazon", sector: "Technology" },
      { name: "Goldman Sachs", sector: "Finance" },
      { name: "Deutsche Bank", sector: "Finance" }
    ],
    large: true
  },
  {
    tier: "IT & Consulting Giants",
    companies: [
      { name: "Capgemini", sector: "IT Consulting" },
      { name: "TCS", sector: "IT Services" },
      { name: "Infosys", sector: "IT Services" },
      { name: "Wipro", sector: "IT Services" },
      { name: "Accenture", sector: "Consulting" },
      { name: "HCL Technologies", sector: "IT Services" }
    ],
    large: false
  },
  {
    tier: "Core Engineering Leaders",
    companies: [
      { name: "L&T Technology Services", sector: "Engineering" },
      { name: "Tata Technologies", sector: "Engineering" },
      { name: "Forbes Marshall", sector: "Manufacturing" },
      { name: "Thermax", sector: "Energy" },
      { name: "Cummins India", sector: "Manufacturing" }
    ],
    large: false
  },
  {
    tier: "Automotive & Manufacturing",
    companies: [
      { name: "Persistent Systems", sector: "IT Services" },
      { name: "Cyient", sector: "Engineering" },
      { name: "KPIT Technologies", sector: "Automotive IT" },
      { name: "Bajaj Auto", sector: "Automotive" },
      { name: "Mahindra & Mahindra", sector: "Automotive" }
    ],
    large: false
  },
  {
    tier: "Finance & Professional Services",
    companies: [
      { name: "Deloitte", sector: "Consulting" },
      { name: "EY", sector: "Consulting" },
      { name: "KPMG", sector: "Consulting" },
      { name: "PwC", sector: "Consulting" },
      { name: "Syntel (Atos)", sector: "IT Services" },
      { name: "Hexaware Technologies", sector: "IT Services" }
    ],
    large: false
  },
  {
    tier: "Global Industrial",
    companies: [
      { name: "Siemens", sector: "Industrial" },
      { name: "ABB", sector: "Industrial" },
      { name: "Honeywell", sector: "Industrial" },
      { name: "Bosch", sector: "Industrial" },
      { name: "Atlas Copco", sector: "Industrial" },
      { name: "Renishaw", sector: "Precision Eng." }
    ],
    large: false
  },
  {
    tier: "Startups & New-Age Tech",
    companies: [
      { name: "Flipkart", sector: "E-Commerce" },
      { name: "Ola", sector: "Mobility" },
      { name: "Zomato", sector: "Food Tech" },
      { name: "Housing.com", sector: "PropTech" },
      { name: "BYJU'S", sector: "EdTech" },
      { name: "upGrad", sector: "EdTech" }
    ],
    large: false
  }
];
const SECTOR_COLORS = {
  Technology: "#1648C8",
  Finance: "#0F3499",
  "IT Consulting": "#1a5e8a",
  "IT Services": "#2563eb",
  Consulting: "#1e40af",
  Engineering: "#0e7490",
  Manufacturing: "#065f46",
  Energy: "#0F3499",
  "Automotive IT": "#1648C8",
  Automotive: "#059669",
  Industrial: "#b45309",
  "Precision Eng.": "#9f1239",
  "E-Commerce": "#c2410c",
  Mobility: "#0369a1",
  "Food Tech": "#b91c1c",
  PropTech: "#0e7490",
  EdTech: "#0f766e",
  "IT Outsourcing": "#1d4ed8"
};
function RecruiterTile({
  name,
  sector,
  large,
  idx
}) {
  const [hovered, setHovered] = reactExports.useState(false);
  const initials = name.split(/[\s&]+/).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  const color = SECTOR_COLORS[sector] ?? COBALT;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "rounded-xl border cursor-pointer overflow-hidden transition-all duration-300",
      style: {
        borderColor: hovered ? COBALT : "rgba(22,72,200,0.18)",
        background: hovered ? COBALT : "#f8faff",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? "0 12px 32px rgba(22,72,200,0.25)" : "none",
        animation: `fadeInUp 0.5s ease-out ${idx % 6 * 0.07}s both`
      },
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      "data-ocid": `placements.recruiter.${idx + 1}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `flex flex-col items-center gap-2.5 p-4 ${large ? "py-6" : ""}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "flex items-center justify-center rounded-lg font-bold text-white",
                style: {
                  width: large ? 56 : 44,
                  height: large ? 56 : 44,
                  fontSize: large ? "1.1rem" : "0.85rem",
                  backgroundColor: hovered ? "rgba(255,255,255,0.2)" : color,
                  transition: "background-color 0.3s"
                },
                children: initials
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-bold leading-tight",
                  style: {
                    fontSize: large ? "0.95rem" : "0.82rem",
                    color: hovered ? "#fff" : DEEP_BLUE,
                    fontFamily: "Source Sans 3, sans-serif",
                    transition: "color 0.3s"
                  },
                  children: name
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-xs mt-0.5",
                  style: {
                    color: hovered ? "rgba(255,255,255,0.7)" : "#888",
                    fontFamily: "Source Sans 3, sans-serif",
                    transition: "color 0.3s"
                  },
                  children: sector
                }
              )
            ] })
          ]
        }
      )
    }
  );
}
function RecruitersSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-14", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "inline-block w-12 h-1 rounded-full mb-4",
          style: { backgroundColor: COBALT }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h2",
        {
          className: "text-4xl font-bold mb-3",
          style: { color: DEEP_BLUE, fontFamily: "Playfair Display, serif" },
          children: "Our Top Recruiters"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg max-w-2xl mx-auto", style: { color: "#555" }, children: "Over 245 companies across sectors trust COEP talent — from global tech giants to industrial leaders and fast-growing startups." })
    ] }),
    RECRUITER_ROWS.map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "w-1 h-7 rounded-full",
            style: { backgroundColor: COBALT }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h3",
          {
            className: "text-xl font-bold",
            style: {
              color: DEEP_BLUE,
              fontFamily: "Playfair Display, serif"
            },
            children: row.tier
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `grid gap-4 ${row.large ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-5" : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"}`,
          children: row.companies.map((c, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            RecruiterTile,
            {
              name: c.name,
              sector: c.sector,
              large: row.large,
              idx
            },
            c.name
          ))
        }
      )
    ] }, row.tier)),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        className: "inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 shadow-lg",
        style: {
          backgroundColor: COBALT,
          color: "#fff",
          fontFamily: "Source Sans 3, sans-serif"
        },
        "data-ocid": "placements.view_all_recruiters_button",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-5 h-5" }),
          "View All Recruiters"
        ]
      }
    ) })
  ] });
}
const YEAR_DATA = {
  "2024-25": {
    eligible: 2150,
    offers: 1940,
    pct: 90,
    highest: "₹87 LPA",
    avg: "₹12 LPA",
    median: "₹8.5 LPA"
  },
  "2023-24": {
    eligible: 2e3,
    offers: 1790,
    pct: 89,
    highest: "₹65 LPA",
    avg: "₹10.8 LPA",
    median: "₹7.9 LPA"
  },
  "2022-23": {
    eligible: 1850,
    offers: 1620,
    pct: 88,
    highest: "₹52 LPA",
    avg: "₹9.6 LPA",
    median: "₹7.2 LPA"
  }
};
const DEPT_STATS = [
  {
    dept: "Computer Science & Engg.",
    eligible: 240,
    placed: 235,
    pct: 98,
    highest: "₹87 LPA",
    avg: "₹18.2 LPA"
  },
  {
    dept: "Electronics & Telecomm.",
    eligible: 180,
    placed: 172,
    pct: 96,
    highest: "₹45 LPA",
    avg: "₹12.4 LPA"
  },
  {
    dept: "Electrical Engineering",
    eligible: 150,
    placed: 141,
    pct: 94,
    highest: "₹38 LPA",
    avg: "₹10.6 LPA"
  },
  {
    dept: "Mechanical Engineering",
    eligible: 180,
    placed: 165,
    pct: 92,
    highest: "₹28 LPA",
    avg: "₹9.2 LPA"
  },
  {
    dept: "I&C Engineering",
    eligible: 120,
    placed: 112,
    pct: 93,
    highest: "₹35 LPA",
    avg: "₹11.1 LPA"
  },
  {
    dept: "Manufacturing Engg.",
    eligible: 120,
    placed: 108,
    pct: 90,
    highest: "₹22 LPA",
    avg: "₹8.4 LPA"
  },
  {
    dept: "Civil Engineering",
    eligible: 140,
    placed: 120,
    pct: 86,
    highest: "₹18 LPA",
    avg: "₹7.8 LPA"
  },
  {
    dept: "Metallurgy & Materials",
    eligible: 90,
    placed: 81,
    pct: 90,
    highest: "₹20 LPA",
    avg: "₹8.0 LPA"
  },
  {
    dept: "MBA (Management Studies)",
    eligible: 90,
    placed: 87,
    pct: 97,
    highest: "₹28 LPA",
    avg: "₹14.2 LPA"
  }
];
const SECTOR_BREAKDOWN = [
  { label: "Software & IT", pct: 40, color: COBALT },
  { label: "Manufacturing & Engineering", pct: 25, color: DEEP_BLUE },
  { label: "Finance & Consulting", pct: 15, color: "#1a5e8a" },
  { label: "Core Engineering", pct: 12, color: MIDNIGHT },
  { label: "Others", pct: 8, color: "#4B7FAD" }
];
function StatisticsSection() {
  const [activeYear, setActiveYear] = reactExports.useState("2024-25");
  const yearData = YEAR_DATA[activeYear];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-14", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "inline-block w-12 h-1 rounded-full mb-4",
          style: { backgroundColor: COBALT }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h2",
        {
          className: "text-4xl font-bold mb-3",
          style: { color: DEEP_BLUE, fontFamily: "Playfair Display, serif" },
          children: "Placement Statistics"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg max-w-2xl mx-auto", style: { color: "#555" }, children: "Transparent, year-on-year data reflecting consistent growth in our placement outcomes" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-3 flex-wrap", children: Object.keys(YEAR_DATA).map((yr) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => setActiveYear(yr),
        className: "px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-200",
        style: {
          fontFamily: "Source Sans 3, sans-serif",
          backgroundColor: activeYear === yr ? COBALT : "transparent",
          color: activeYear === yr ? "#fff" : COBALT,
          border: `1.5px solid ${COBALT}`
        },
        "data-ocid": `placements.year_tab.${yr}`,
        children: yr
      },
      yr
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4", children: [
      {
        label: "Students Eligible",
        value: yearData.eligible.toLocaleString()
      },
      { label: "Total Offers", value: yearData.offers.toLocaleString() },
      { label: "Placement %", value: `${yearData.pct}%` },
      { label: "Highest CTC", value: yearData.highest },
      { label: "Average CTC", value: yearData.avg },
      { label: "Median CTC", value: yearData.median }
    ].map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-xl text-center p-5 border",
        style: {
          borderColor: "rgba(22,72,200,0.15)",
          background: idx % 2 === 0 ? "#f8faff" : "#fff"
        },
        "data-ocid": `placements.year_stat.${idx + 1}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-2xl font-bold mb-1",
              style: { color: COBALT, fontFamily: "Playfair Display, serif" },
              children: item.value
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-center", style: { color: "#666" }, children: item.label })
        ]
      },
      item.label
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "rounded-2xl p-8",
        style: { background: "#f8faff", border: `1px solid ${COBALT}18` },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "h3",
            {
              className: "text-2xl font-bold mb-6",
              style: { color: DEEP_BLUE, fontFamily: "Playfair Display, serif" },
              children: [
                "Sector-wise Breakdown (",
                activeYear,
                ")"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-5", children: SECTOR_BREAKDOWN.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": `placements.sector.${s.label}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-sm font-semibold",
                  style: {
                    color: DEEP_BLUE,
                    fontFamily: "Source Sans 3, sans-serif"
                  },
                  children: s.label
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-bold", style: { color: s.color }, children: [
                s.pct,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedBar, { pct: s.pct, color: s.color })
          ] }, s.label)) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h3",
        {
          className: "text-2xl font-bold mb-6",
          style: { color: DEEP_BLUE, fontFamily: "Playfair Display, serif" },
          children: "Department-wise Statistics (2024–25)"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "overflow-x-auto rounded-xl shadow-lg border",
          style: { borderColor: "rgba(22,72,200,0.12)" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", "data-ocid": "placements.dept_table", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { style: { backgroundColor: COBALT, color: "#fff" }, children: [
              "Department",
              "Eligible",
              "Placed",
              "% Placed",
              "Highest CTC",
              "Avg CTC"
            ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "th",
              {
                className: "px-5 py-4 text-left font-semibold whitespace-nowrap",
                style: { fontFamily: "Source Sans 3, sans-serif" },
                children: h
              },
              h
            )) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: DEPT_STATS.map((row, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "tr",
              {
                className: "border-b transition-colors hover:bg-blue-50/30",
                style: { borderColor: "rgba(22,72,200,0.08)" },
                "data-ocid": `placements.dept_row.${idx + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "td",
                    {
                      className: "px-5 py-4 font-semibold",
                      style: { color: DEEP_BLUE },
                      children: row.dept
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "td",
                    {
                      className: "px-5 py-4 text-right",
                      style: { color: "#444" },
                      children: row.eligible
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "td",
                    {
                      className: "px-5 py-4 text-right",
                      style: { color: "#444" },
                      children: row.placed
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold w-9", style: { color: COBALT }, children: [
                      row.pct,
                      "%"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-w-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedBar, { pct: row.pct, color: COBALT }) })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "td",
                    {
                      className: "px-5 py-4 font-semibold",
                      style: { color: "#16a34a" },
                      children: row.highest
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "td",
                    {
                      className: "px-5 py-4 font-semibold",
                      style: { color: "#555" },
                      children: row.avg
                    }
                  )
                ]
              },
              row.dept
            )) })
          ] })
        }
      )
    ] })
  ] });
}
const SERVICES = [
  {
    Icon: BookOpen,
    title: "Resume Building Workshops",
    desc: "Monthly workshops and a curated template library to craft ATS-friendly, industry-standard résumés that stand out.",
    tag: "Monthly"
  },
  {
    Icon: MessageSquare,
    title: "Mock Interview Sessions",
    desc: "Simulated panel interviews with senior industry professionals and alumni, with detailed feedback reports.",
    tag: "Bi-weekly"
  },
  {
    Icon: TrendingUp,
    title: "Aptitude Training",
    desc: "Structured preparation for quantitative reasoning, logical ability, and verbal communication tests used by top recruiters.",
    tag: "Ongoing"
  },
  {
    Icon: Users,
    title: "Communication Skills",
    desc: "Group discussion sessions, public speaking workshops, and presentation skills training by communication experts.",
    tag: "Weekly"
  },
  {
    Icon: Building2,
    title: "Company Interaction Sessions",
    desc: "Pre-placement talks, campus visits, and direct Q&A with HR teams from visiting companies throughout the year.",
    tag: "As Scheduled"
  },
  {
    Icon: GraduationCap,
    title: "GATE & Higher Education Prep",
    desc: "Study groups, coaching information, and alumni guidance for students pursuing GATE, CAT, GRE, or foreign universities.",
    tag: "Ongoing"
  }
];
function CareerServicesSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-14", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "inline-block w-12 h-1 rounded-full mb-4",
          style: { backgroundColor: COBALT }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h2",
        {
          className: "text-4xl font-bold mb-3",
          style: { color: DEEP_BLUE, fontFamily: "Playfair Display, serif" },
          children: "Career Services"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg max-w-2xl mx-auto", style: { color: "#555" }, children: "Comprehensive, year-round support ensuring every COEP student is placement-ready" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: SERVICES.map((s, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "group rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        style: {
          borderColor: "rgba(22,72,200,0.14)",
          background: "#fff",
          animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`
        },
        "data-ocid": `placements.service.${idx + 1}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 group-hover:scale-110",
                style: {
                  backgroundColor: `${COBALT}14`,
                  transition: "all 0.3s"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.Icon, { className: "w-6 h-6", style: { color: COBALT } })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "text-xs font-bold px-3 py-1 rounded-full",
                style: {
                  backgroundColor: "rgba(22,72,200,0.1)",
                  color: "#0F3499",
                  fontFamily: "Source Sans 3, sans-serif"
                },
                children: s.tag
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              className: "text-xl font-bold mb-3",
              style: {
                color: DEEP_BLUE,
                fontFamily: "Playfair Display, serif"
              },
              children: s.title
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed", style: { color: "#666" }, children: s.desc })
        ]
      },
      s.title
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "rounded-2xl p-8",
        style: {
          background: `linear-gradient(135deg, ${COBALT}10, ${DEEP_BLUE}10)`,
          border: `1px solid ${COBALT}25`
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h3",
              {
                className: "text-2xl font-bold mb-3",
                style: {
                  color: DEEP_BLUE,
                  fontFamily: "Playfair Display, serif"
                },
                children: "TPC Office — Contact & Timings"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "space-y-3 text-sm",
                style: { color: "#444", fontFamily: "Source Sans 3, sans-serif" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      MapPin,
                      {
                        className: "w-4 h-4 flex-shrink-0",
                        style: { color: COBALT }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Room 105, Main Building, COEP Technological University, Pune – 411005" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Phone,
                      {
                        className: "w-4 h-4 flex-shrink-0",
                        style: { color: COBALT }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "+91-20-25507000 Ext. 200  |  +91-20-25507052" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Mail,
                      {
                        className: "w-4 h-4 flex-shrink-0",
                        style: { color: COBALT }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "tpc@coeptech.ac.in" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Calendar,
                      {
                        className: "w-4 h-4 flex-shrink-0",
                        style: { color: COBALT }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Monday to Saturday, 9:00 AM – 5:00 PM (IST)" })
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "mailto:tpc@coeptech.ac.in",
                className: "flex-1 flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90",
                style: {
                  backgroundColor: COBALT,
                  color: "#fff",
                  fontFamily: "Source Sans 3, sans-serif"
                },
                "data-ocid": "placements.contact_email",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-4 h-4" }),
                  "Email TPC"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "tel:+912025507052",
                className: "flex-1 flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90",
                style: {
                  backgroundColor: "transparent",
                  color: COBALT,
                  border: `2px solid ${COBALT}`,
                  fontFamily: "Source Sans 3, sans-serif"
                },
                "data-ocid": "placements.contact_phone",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4" }),
                  "Call TPC"
                ]
              }
            )
          ] })
        ] })
      }
    )
  ] });
}
const TRAINING_MONTHS = [
  {
    month: "Month 1",
    phase: "Aptitude & Reasoning",
    color: COBALT,
    topics: [
      "Quantitative Aptitude",
      "Logical Reasoning",
      "Verbal Ability",
      "Data Interpretation"
    ],
    desc: "Foundation-building with rigorous practice sessions covering all quantitative and verbal topics tested by top recruiters."
  },
  {
    month: "Month 2",
    phase: "Technical Skills & Projects",
    color: DEEP_BLUE,
    topics: [
      "Data Structures & Algorithms",
      "System Design",
      "Core Domain Skills",
      "Project Showcase Prep"
    ],
    desc: "Deep dives into technical domains — coding challenges, system design cases, and hands-on domain-specific workshops."
  },
  {
    month: "Month 3",
    phase: "Interviews & Placements",
    color: MIDNIGHT,
    topics: [
      "Mock Technical Interviews",
      "HR Rounds",
      "Group Discussions",
      "Offer Negotiation"
    ],
    desc: "Full simulation of the recruitment process with real interviewers, followed by live placement drives with visiting companies."
  }
];
const SKILLS = [
  { name: "Data Structures & Algorithms", icon: "💻", level: 90 },
  { name: "System Design", icon: "🏗️", level: 75 },
  { name: "Core Domain Skills", icon: "⚙️", level: 85 },
  { name: "Soft Skills & Communication", icon: "🗣️", level: 88 },
  { name: "Aptitude & Reasoning", icon: "🧠", level: 92 }
];
const UPCOMING_WORKSHOPS = [
  {
    date: "May 10, 2025",
    title: "Resume & LinkedIn Masterclass",
    time: "10:00 AM – 1:00 PM",
    venue: "Seminar Hall A",
    seats: 120
  },
  {
    date: "May 17, 2025",
    title: "Advanced DSA Workshop",
    time: "2:00 PM – 6:00 PM",
    venue: "Computer Lab 3",
    seats: 60
  },
  {
    date: "May 24, 2025",
    title: "Group Discussion Training",
    time: "10:00 AM – 12:00 PM",
    venue: "Mini Auditorium",
    seats: 80
  },
  {
    date: "June 5, 2025",
    title: "Mock Placement Drive",
    time: "9:00 AM – 5:00 PM",
    venue: "Main Auditorium",
    seats: 200
  }
];
function TrainingSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-14", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "inline-block w-12 h-1 rounded-full mb-4",
          style: { backgroundColor: COBALT }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h2",
        {
          className: "text-4xl font-bold mb-3",
          style: { color: DEEP_BLUE, fontFamily: "Playfair Display, serif" },
          children: "Training & Skill Development"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg max-w-2xl mx-auto", style: { color: "#555" }, children: "A structured 3-month pre-placement training programme designed to build interview-ready graduates" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: TRAINING_MONTHS.map((m, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl",
        style: { animation: `fadeInUp 0.6s ease-out ${idx * 0.15}s both` },
        "data-ocid": `placements.training_month.${idx + 1}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "p-6 text-white",
              style: {
                background: `linear-gradient(135deg, ${m.color}, ${MIDNIGHT})`
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block",
                    style: { backgroundColor: GOLD, color: MIDNIGHT },
                    children: m.month
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    className: "text-xl font-bold mt-2 mb-2",
                    style: { fontFamily: "Playfair Display, serif", color: "#fff" },
                    children: m.phase
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/70 leading-relaxed", children: m.desc })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: m.topics.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "li",
            {
              className: "flex items-center gap-2.5 text-sm",
              style: { color: "#555" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0",
                    style: { backgroundColor: m.color },
                    children: "✓"
                  }
                ),
                t
              ]
            },
            t
          )) }) })
        ]
      },
      m.month
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:flex items-center justify-center gap-4 -mt-8", children: [0, 1].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex items-center gap-2 text-sm font-semibold",
        style: { color: COBALT },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-24 h-0.5",
              style: { backgroundColor: `${COBALT}40` }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
        ]
      },
      i
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "rounded-2xl p-8",
        style: { background: "#f8faff", border: `1px solid ${COBALT}18` },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              className: "text-2xl font-bold mb-6",
              style: { color: DEEP_BLUE, fontFamily: "Playfair Display, serif" },
              children: "Skills Coverage in Our Programme"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-5", children: SKILLS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": `placements.skill.${s.name}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: "font-semibold text-sm",
                  style: { color: DEEP_BLUE },
                  children: [
                    s.icon,
                    " ",
                    s.name
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-bold", style: { color: COBALT }, children: [
                s.level,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedBar, { pct: s.level, color: COBALT })
          ] }, s.name)) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h3",
        {
          className: "text-2xl font-bold mb-6",
          style: { color: DEEP_BLUE, fontFamily: "Playfair Display, serif" },
          children: "Upcoming Training Calendar"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: UPCOMING_WORKSHOPS.map((w, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
          style: {
            borderColor: "rgba(22,72,200,0.14)",
            background: "#fff"
          },
          "data-ocid": `placements.workshop.${idx + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "text-xs font-bold px-2.5 py-1 rounded-lg inline-block mb-3",
                style: {
                  backgroundColor: `${COBALT}14`,
                  color: COBALT,
                  fontFamily: "Source Sans 3, sans-serif"
                },
                children: w.date
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h4",
              {
                className: "font-bold text-base mb-1.5",
                style: {
                  color: DEEP_BLUE,
                  fontFamily: "Playfair Display, serif"
                },
                children: w.title
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "space-y-1 text-xs",
                style: {
                  color: "#777",
                  fontFamily: "Source Sans 3, sans-serif"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3 h-3", style: { color: COBALT } }),
                    w.time
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3 h-3", style: { color: COBALT } }),
                    w.venue
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-3 h-3", style: { color: COBALT } }),
                    w.seats,
                    " seats"
                  ] })
                ]
              }
            )
          ]
        },
        w.title
      )) })
    ] })
  ] });
}
const ALUMNI = [
  {
    name: "Priya Sharma",
    role: "Software Engineer",
    company: "Google",
    dept: "CSE",
    batch: "2019",
    quote: "COEP's rigorous curriculum and TPC's structured mock interviews gave me the confidence and skills to crack Google. The faculty mentorship was exceptional.",
    companyColor: "#1648C8",
    initials: "PS"
  },
  {
    name: "Rahul Kulkarni",
    role: "Product Manager",
    company: "Microsoft",
    dept: "E&TC",
    batch: "2018",
    quote: "The interdisciplinary exposure at COEP — from core engineering to business fundamentals — was the perfect foundation for a product management career at Microsoft.",
    companyColor: "#0F3499",
    initials: "RK"
  },
  {
    name: "Snehal Patil",
    role: "Investment Banking Analyst",
    company: "Goldman Sachs",
    dept: "MBA",
    batch: "2020",
    quote: "COEP's MBA programme with its focus on analytical thinking and the TPC's finance-sector preparation workshops directly helped me land my role at Goldman Sachs.",
    companyColor: "#081E5C",
    initials: "SP"
  },
  {
    name: "Amit Deshmukh",
    role: "Senior Systems Engineer",
    company: "L&T Technology Services",
    dept: "Mechanical",
    batch: "2017",
    quote: "The hands-on project experience and strong industry connections built through COEP set the foundation for an impactful career in engineering services.",
    companyColor: "#1a5e8a",
    initials: "AD"
  },
  {
    name: "Neha Joshi",
    role: "Data Scientist",
    company: "Amazon",
    dept: "CSE",
    batch: "2021",
    quote: "COEP's emphasis on algorithmic thinking and the competitive coding culture fostered here directly translated into a successful data science career at Amazon.",
    companyColor: "#c62828",
    initials: "NJ"
  }
];
function AlumniSection() {
  const [current, setCurrent] = reactExports.useState(0);
  const VISIBLE = 2;
  const total = ALUMNI.length;
  const prev = reactExports.useCallback(
    () => setCurrent((c) => (c - 1 + total) % total),
    [total]
  );
  const next = reactExports.useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const visibleAlumni = Array.from(
    { length: VISIBLE },
    (_, i) => ALUMNI[(current + i) % total]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-14", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "inline-block w-12 h-1 rounded-full mb-4",
          style: { backgroundColor: COBALT }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h2",
        {
          className: "text-4xl font-bold mb-3",
          style: { color: DEEP_BLUE, fontFamily: "Playfair Display, serif" },
          children: "Alumni in Top Companies"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg max-w-2xl mx-auto", style: { color: "#555" }, children: "COEP graduates shaping the future at the world's most admired organisations" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-6", children: visibleAlumni.map((a, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "rounded-2xl overflow-hidden shadow-xl transition-all duration-500",
          style: {
            background: `linear-gradient(135deg, ${a.companyColor} 0%, ${MIDNIGHT} 100%)`,
            animation: "fadeInUp 0.5s ease-out both"
          },
          "data-ocid": `placements.alumni.${idx + 1}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 text-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "w-8 h-8 mb-4 opacity-30" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-base leading-relaxed text-white/85 mb-7 italic", children: [
              '"',
              a.quote,
              '"'
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center gap-4 pt-4 border-t",
                style: { borderColor: "rgba(255,255,255,0.15)" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0",
                      style: { backgroundColor: GOLD, color: MIDNIGHT },
                      children: a.initials
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-bold text-lg text-white",
                        style: { fontFamily: "Playfair Display, serif" },
                        children: a.name
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-white/70", children: [
                      a.role,
                      " — ",
                      a.company
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-white/50 mt-0.5", children: [
                      a.dept,
                      " Department, Batch of ",
                      a.batch
                    ] })
                  ] })
                ]
              }
            )
          ] })
        },
        `${a.name}-${idx}`
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-4 mt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: prev,
            className: "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:opacity-90",
            style: { backgroundColor: COBALT, color: "#fff" },
            "aria-label": "Previous alumni",
            "data-ocid": "placements.alumni_prev",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-5 h-5" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: ALUMNI.map((alumnus, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setCurrent(idx),
            className: "rounded-full transition-all duration-300",
            style: {
              width: current === idx ? 24 : 8,
              height: 8,
              backgroundColor: current === idx ? COBALT : `${COBALT}40`
            },
            "aria-label": `Go to alumni ${idx + 1}`,
            "data-ocid": `placements.alumni_dot.${idx + 1}`
          },
          alumnus.name
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: next,
            className: "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:opacity-90",
            style: { backgroundColor: COBALT, color: "#fff" },
            "aria-label": "Next alumni",
            "data-ocid": "placements.alumni_next",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-5 h-5" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-2xl p-8 text-white text-center",
        style: {
          background: `linear-gradient(135deg, ${COBALT}, ${MIDNIGHT})`
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "w-10 h-10 mx-auto mb-4 opacity-60" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              className: "text-2xl font-bold mb-3",
              style: { fontFamily: "Playfair Display, serif", color: "#fff" },
              children: "Join the COEP Legacy"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/75 max-w-xl mx-auto text-base leading-relaxed", children: "Over 168 years of engineering excellence. Join thousands of COEP alumni making a mark at the world's most respected companies." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-4 mt-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90",
                style: {
                  backgroundColor: GOLD,
                  color: MIDNIGHT,
                  fontFamily: "Source Sans 3, sans-serif"
                },
                "data-ocid": "placements.alumni_network_button",
                children: "Connect with Alumni Network"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:bg-white/20",
                style: {
                  backgroundColor: "transparent",
                  color: "#fff",
                  border: "1.5px solid rgba(255,255,255,0.4)",
                  fontFamily: "Source Sans 3, sans-serif"
                },
                "data-ocid": "placements.share_story_button",
                children: "Share Your Success Story"
              }
            )
          ] })
        ]
      }
    )
  ] });
}
const HERO_STATS = [
  { value: "₹87 LPA", label: "Highest Package" },
  { value: "₹12 LPA", label: "Average Package" },
  { value: "90%+", label: "Placement Rate" },
  { value: "245+", label: "Recruiting Companies" }
];
function PlacementsPage() {
  const params = useParams({ strict: false });
  const navigate = useNavigate();
  const activeTab = params.sectionId ?? "overview";
  const handleTabChange = (tabId) => {
    navigate({ to: "/placements/$sectionId", params: { sectionId: tabId } });
  };
  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(OverviewSection, {});
      case "recruiters":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(RecruitersSection, {});
      case "statistics":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(StatisticsSection, {});
      case "career-services":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(CareerServicesSection, {});
      case "training":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(TrainingSection, {});
      case "alumni":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(AlumniSection, {});
      default:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(OverviewSection, {});
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative py-24 overflow-hidden",
        style: {
          background: `linear-gradient(135deg, ${MIDNIGHT} 0%, ${DEEP_BLUE} 45%, ${COBALT} 100%)`
        },
        "data-ocid": "placements.hero",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 pointer-events-none",
              style: {
                background: "radial-gradient(ellipse at 70% 50%, rgba(255,255,255,0.07) 0%, transparent 65%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute -top-20 -right-20 w-96 h-96 rounded-full pointer-events-none",
              style: {
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute -bottom-32 -left-20 w-80 h-80 rounded-full pointer-events-none",
              style: {
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-[1280px] mx-auto px-4 xl:px-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-xs font-bold uppercase tracking-widest mb-4",
                style: {
                  color: "rgba(255,255,255,0.75)"
                },
                children: "COEP Technological University • Est. 1854"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "h1",
              {
                className: "text-5xl md:text-7xl font-bold text-white mb-5 leading-none",
                style: {
                  fontFamily: "Playfair Display, serif",
                  animation: "fadeInUp 0.6s ease-out 0.1s both"
                },
                children: [
                  "Placements &",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "white" }, children: "Careers" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-xl text-white/75 max-w-2xl mb-12 leading-relaxed",
                style: {
                  fontFamily: "Source Sans 3, sans-serif",
                  animation: "fadeInUp 0.6s ease-out 0.2s both"
                },
                children: "Building Careers, Shaping Futures — COEP's Legacy of Excellence connecting exceptional talent with the world's leading organisations."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl",
                style: { animation: "fadeInUp 0.6s ease-out 0.3s both" },
                children: HERO_STATS.map((s, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  StatBadge,
                  {
                    value: s.value,
                    label: s.label,
                    delay: 0.35 + idx * 0.07
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
      SubTabRibbon,
      {
        tabs: TABS,
        activeTab,
        onTabChange: handleTabChange
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "main",
      {
        className: "flex-1 max-w-[1280px] mx-auto w-full px-4 xl:px-8 py-16",
        style: { animation: "fadeInUp 0.5s ease-out both" },
        "data-ocid": "placements.content_panel",
        children: renderContent()
      },
      activeTab
    )
  ] });
}
export {
  PlacementsPage as default
};
