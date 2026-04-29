import { j as jsxRuntimeExports, r as reactExports, L as Link, u as useNavigate } from "./index-ewouZ8Z-.js";
import { L as Layout } from "./Layout-CAMhUMkU.js";
import { a as cn } from "./utils-pycC2CyQ.js";
import { F as FACULTY_DATA } from "./faculty-B9Vlr8jg.js";
import { q as motion } from "./proxy-ehzkyOpD.js";
import { A as ArrowLeft } from "./arrow-left-CX18PC87.js";
import { U as Users } from "./users-Dj3xKwFP.js";
import { S as Star } from "./star-Coh6yp_X.js";
import { B as BookOpen } from "./book-open-BFIF1F8q.js";
import { S as Search } from "./Header-Y41v9IHA.js";
import { A as AnimatePresence } from "./index-i2gvgp5U.js";
import { A as ArrowRight } from "./arrow-right-k8mkDzof.js";
import "./x-BbDbzOVy.js";
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}
const DMS_ROUTE = "/academics/schools/school-of-multidisciplinary-sciences/department-of-management-studies";
const STATS = [
  { value: `${FACULTY_DATA.length}`, label: "Faculty Members", icon: Users },
  { value: "40+", label: "Years Max Experience", icon: Star },
  { value: "7+", label: "Ph.D. Holders", icon: BookOpen },
  { value: "5", label: "Specialisations", icon: BookOpen }
];
const SPECIALISATION_FILTERS = [
  "All",
  "Finance",
  "Marketing",
  "Operations",
  "HR",
  "Analytics"
];
function filterFaculty(data, query, spec) {
  return data.filter((f) => {
    const q = query.toLowerCase();
    const matchesSearch = !q || f.name.toLowerCase().includes(q) || f.designation.toLowerCase().includes(q) || f.expertise.some((e) => e.toLowerCase().includes(q));
    const matchesSpec = spec === "All" || f.expertise.some((e) => e.toLowerCase().includes(spec.toLowerCase()));
    return matchesSearch && matchesSpec;
  });
}
function FacultyPage() {
  const [search, setSearch] = reactExports.useState("");
  const [activeSpec, setActiveSpec] = reactExports.useState("All");
  const filtered = reactExports.useMemo(
    () => filterFaculty(FACULTY_DATA, search, activeSpec),
    [search, activeSpec]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative overflow-hidden",
        style: {
          background: "linear-gradient(135deg, #0F3399 0%, #1A237E 55%, #283593 100%)",
          minHeight: "340px"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 pointer-events-none overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                className: "absolute -top-24 -right-24 w-96 h-96 rounded-full",
                style: { background: "rgba(232,196,42,0.07)" },
                animate: { scale: [1, 1.12, 1], rotate: [0, 15, 0] },
                transition: {
                  duration: 10,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                className: "absolute -bottom-16 -left-16 w-72 h-72 rounded-full",
                style: { background: "rgba(255,255,255,0.05)" },
                animate: { scale: [1, 1.08, 1] },
                transition: {
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1
                }
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative container px-4 md:px-8 pt-10 pb-14", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.nav,
              {
                className: "flex flex-wrap items-center gap-1.5 text-xs text-white/50 mb-5",
                "aria-label": "Breadcrumb",
                initial: { opacity: 0, y: -10 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.4 },
                children: [
                  { label: "Home", href: "/" },
                  { label: "Academics", href: "/academics" },
                  { label: "DMS", href: DMS_ROUTE },
                  { label: "Faculty", href: null }
                ].map((crumb, i, arr) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                  i > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/25", children: "›" }),
                  crumb.href && i < arr.length - 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Link,
                    {
                      to: crumb.href,
                      className: "hover:text-white transition-colors",
                      children: crumb.label
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: i === arr.length - 1 ? "text-white/80" : "", children: crumb.label })
                ] }, crumb.label))
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, x: -16 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.4, delay: 0.1 },
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: DMS_ROUTE,
                    className: "inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors group",
                    "data-ocid": "faculty.back_button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4 transition-transform group-hover:-translate-x-1" }),
                      "Back to Department"
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, scale: 0.8 },
                  animate: { opacity: 1, scale: 1 },
                  transition: { duration: 0.5, delay: 0.15 },
                  className: "w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/20",
                  style: { background: "rgba(232,196,42,0.18)" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-8 h-8", style: { color: "#E8C42A" } })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.p,
                  {
                    className: "typo-section-label text-white/50 mb-2",
                    initial: { opacity: 0, y: 12 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.5, delay: 0.2 },
                    children: "DMS · COEP Technological University"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.h1,
                  {
                    className: "typo-hero-heading text-white leading-tight",
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.6, delay: 0.25 },
                    children: [
                      "Our ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#E8C42A" }, children: "Faculty" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.p,
                  {
                    className: "typo-hero-desc text-white/65 mt-2 max-w-xl",
                    initial: { opacity: 0, y: 16 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.5, delay: 0.35 },
                    children: "Meet the minds shaping future business leaders"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                className: "flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/10",
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5, delay: 0.45 },
                children: STATS.map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-8 h-8 rounded-lg flex items-center justify-center",
                      style: { background: "rgba(255,255,255,0.1)" },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(stat.icon, { className: "w-4 h-4 text-white/70" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-stat-number", style: { color: "#E8C42A" }, children: stat.value }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-stat-label text-white/50 leading-tight", children: stat.label })
                  ] })
                ] }, stat.label))
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 overflow-hidden leading-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "svg",
            {
              viewBox: "0 0 1440 36",
              preserveAspectRatio: "none",
              className: "w-full h-8 md:h-9",
              style: { display: "block" },
              "aria-hidden": "true",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "path",
                {
                  d: "M0,36 C360,0 1080,0 1440,36 L1440,36 L0,36 Z",
                  fill: "white"
                }
              )
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b shadow-sm",
        style: { borderColor: "#e2e8f0" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container px-4 md:px-8 py-3 flex flex-col sm:flex-row items-start sm:items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 max-w-sm w-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Search,
              {
                className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none",
                style: { color: "#1A237E" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "text",
                placeholder: "Search by name or specialization…",
                value: search,
                onChange: (e) => setSearch(e.target.value),
                className: "pl-9 h-9 font-body text-sm border-2 focus-visible:ring-0",
                style: {
                  borderColor: search ? "#1A237E" : "#e2e8f0",
                  transition: "border-color 0.2s ease"
                },
                "data-ocid": "faculty.search_input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 flex-wrap", children: SPECIALISATION_FILTERS.map((spec) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.button,
            {
              type: "button",
              onClick: () => setActiveSpec(spec),
              className: "font-body text-xs font-semibold px-3 py-1.5 rounded-full border transition-all",
              style: {
                background: activeSpec === spec ? "#1A237E" : "transparent",
                color: activeSpec === spec ? "#fff" : "#1A237E",
                borderColor: "#1A237E"
              },
              whileTap: { scale: 0.95 },
              "data-ocid": `faculty.filter.${spec.toLowerCase()}`,
              children: spec
            },
            spec
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "p",
            {
              className: "font-body text-xs hidden sm:block ml-auto",
              style: { color: "#6b7280" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#1A237E", fontWeight: 700 }, children: filtered.length }),
                " ",
                "of ",
                FACULTY_DATA.length,
                " faculty"
              ]
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-14 md:py-20", style: { background: "#f8f9ff" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container px-4 md:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: filtered.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.3 },
        children: filtered.map((faculty, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 40 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-60px" },
            transition: {
              duration: 0.55,
              delay: i * 0.08,
              ease: "easeOut"
            },
            "data-ocid": `faculty.item.${i + 1}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(FacultyGridCard, { faculty, index: i })
          },
          faculty.id
        ))
      },
      "grid"
    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        className: "flex flex-col items-center justify-center py-28 text-center",
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.3 },
        "data-ocid": "faculty.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-20 h-20 rounded-full flex items-center justify-center mb-5",
              style: { background: "rgba(26,35,126,0.08)" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-9 h-9", style: { color: "#1A237E" } })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              className: "typo-card-title font-semibold mb-2",
              style: { color: "#0F3399" },
              children: "No faculty found"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-body mb-5", style: { color: "#6b7280" }, children: "Try adjusting your search or filter to find what you're looking for." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "typo-btn hover:underline",
              style: { color: "#1A237E" },
              onClick: () => {
                setSearch("");
                setActiveSpec("All");
              },
              children: "Clear all filters"
            }
          )
        ]
      },
      "empty"
    ) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.section,
      {
        className: "py-12 md:py-16",
        style: {
          background: "linear-gradient(135deg, #0F3399 0%, #1A237E 100%)"
        },
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "typo-section-heading text-white mb-2", children: "Interested in our MBA Programme?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-body text-white/60", children: "Learn about admissions, curriculum, and placements at COEP DMS." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: DMS_ROUTE,
              className: "inline-flex items-center gap-2 px-7 py-3 rounded-xl font-body font-bold text-sm transition-all hover:scale-105 hover:brightness-110 shrink-0",
              style: { background: "#E8C42A", color: "#0F3399" },
              children: [
                "Explore DMS",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
              ]
            }
          )
        ] })
      }
    )
  ] });
}
function FacultyGridCard({ faculty, index }) {
  const [hovered, setHovered] = reactExports.useState(false);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate({ to: "/faculty/$facultyId", params: { facultyId: faculty.id } });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      className: "relative bg-white rounded-2xl overflow-hidden flex flex-col cursor-pointer",
      style: {
        boxShadow: hovered ? "0 20px 48px rgba(26,35,126,0.18), 0 4px 12px rgba(0,0,0,0.08)" : "0 4px 20px rgba(0,0,0,0.07)",
        transition: "box-shadow 0.35s ease"
      },
      onHoverStart: () => setHovered(true),
      onHoverEnd: () => setHovered(false),
      whileHover: { y: -6 },
      transition: { type: "spring", stiffness: 300, damping: 22 },
      onClick: handleNavigate,
      "data-ocid": `faculty.card.${index + 1}`,
      tabIndex: 0,
      onKeyDown: (e) => {
        if (e.key === "Enter" || e.key === " ") handleNavigate();
      },
      "aria-label": `View ${faculty.name}'s profile`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "absolute top-0 left-0 right-0 h-[3px] z-10",
            style: { background: "linear-gradient(to right, #E8C42A, #f5d94d)" },
            initial: { scaleX: 0, originX: 0 },
            animate: { scaleX: hovered ? 1 : 0 },
            transition: { duration: 0.3 }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden", style: { height: "260px" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.img,
            {
              src: faculty.photoUrl,
              alt: faculty.name,
              className: "w-full h-full object-cover object-top",
              loading: "lazy",
              animate: { scale: hovered ? 1.05 : 1 },
              transition: { duration: 0.5, ease: "easeOut" },
              onError: (e) => {
                const target = e.currentTarget;
                target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(faculty.name)}&background=1A237E&color=fff&size=300&bold=true`;
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0",
              style: {
                background: "linear-gradient(to top, rgba(15,51,153,0.7) 0%, rgba(15,51,153,0.1) 50%, transparent 100%)"
              }
            }
          ),
          faculty.isSpecial && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-body font-bold uppercase tracking-wider",
              style: { background: "#E8C42A", color: "#0F3399" },
              children: "Featured"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: hovered && /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-body font-semibold",
              style: { background: "rgba(255,255,255,0.92)", color: "#1A237E" },
              initial: { opacity: 0, scale: 0.85 },
              animate: { opacity: 1, scale: 1 },
              exit: { opacity: 0, scale: 0.85 },
              transition: { duration: 0.2 },
              children: "View Full Profile →"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex flex-col gap-3 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h3",
              {
                className: "typo-card-title leading-snug line-clamp-2",
                style: { color: "#0F3399" },
                children: faculty.name
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "typo-support mt-1 leading-snug line-clamp-2",
                style: { color: "#1A237E" },
                children: faculty.designation
              }
            ),
            faculty.qualification && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "typo-stat-label mt-0.5 line-clamp-1",
                style: { color: "#6b7280" },
                children: faculty.qualification
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1.5", children: [
            faculty.expertise.slice(0, 3).map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "font-body text-[10px] font-semibold px-2.5 py-0.5 rounded-full",
                style: { background: "rgba(26,35,126,0.08)", color: "#1A237E" },
                children: tag
              },
              tag
            )),
            faculty.expertise.length > 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: "font-body text-[10px] px-2.5 py-0.5 rounded-full",
                style: { background: "#f1f5f9", color: "#6b7280" },
                children: [
                  "+",
                  faculty.expertise.length - 3
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/faculty/$facultyId",
              params: { facultyId: faculty.id },
              onClick: (e) => e.stopPropagation(),
              className: "flex items-center justify-between px-4 py-2.5 rounded-xl font-body font-semibold text-sm mt-1 transition-all duration-300",
              style: {
                background: hovered ? "#1A237E" : "#f0f4ff",
                color: hovered ? "#fff" : "#1A237E"
              },
              "data-ocid": `faculty.view_profile.${index + 1}`,
              "aria-label": `View profile of ${faculty.name}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "View Profile" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
              ]
            }
          )
        ] })
      ]
    }
  );
}
export {
  FacultyPage
};
