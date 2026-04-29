import { a as useParams, u as useNavigate, r as reactExports, j as jsxRuntimeExports, L as Link } from "./index-CUgpWnl1.js";
import { L as Layout } from "./Layout-RRfaE6HM.js";
import { S as SubTabRibbon } from "./SubTabRibbon-BKmFbHDc.js";
import { q as motion } from "./proxy-BmKQpc7D.js";
import { C as ChevronRight } from "./chevron-right-Bz1X5sn9.js";
import { A as AnimatePresence } from "./index-C4SNE_FS.js";
import { B as BookOpen } from "./book-open-7Ls64306.js";
import { S as Star } from "./star-fvhjevJi.js";
import { G as GraduationCap } from "./graduation-cap-DqyoPtVl.js";
import { C as Calendar } from "./calendar-T1iGav_9.js";
import { A as Award } from "./award-tMAAJqb_.js";
import { T as TrendingUp } from "./trending-up-BnUeNxj6.js";
import { U as Users } from "./users-BE_QLdnk.js";
import "./utils-B1sCwcN7.js";
import "./x-BlGPumW2.js";
import "./Header-2Ed_Aw9p.js";
import "./chevron-left-CYfXXX7B.js";
const COBALT = "#1A237E";
const DEEP_BLUE = "#0F3399";
const MIDNIGHT = "#081E5C";
const GOLD = "#E8C42A";
const TABS = [
  { id: "overview", label: "Overview" },
  { id: "schools", label: "Schools & Departments" },
  { id: "programs", label: "Programs" },
  { id: "curriculum", label: "Courses & Curriculum" },
  { id: "achievements", label: "Achievements" },
  { id: "calendar", label: "Academic Calendar" }
];
const STATS = [
  { value: 14, suffix: "", label: "Departments" },
  { value: 500, suffix: "+", label: "Research Publications" },
  { value: 5e3, suffix: "+", label: "Students" },
  { value: 172, suffix: "", label: "Years of Excellence" }
];
const ENGINEERING_DEPTS = [
  "Civil Engineering",
  "Computer Science & Engineering",
  "Electrical Engineering",
  "Electronics & Telecommunication",
  "Instrumentation & Control",
  "Manufacturing & Industrial Engineering",
  "Mechanical Engineering",
  "Metallurgy & Materials Science",
  "Urban & Regional Planning",
  "Robotics & AI"
];
const SCIENCE_DEPTS = [
  "Applied Sciences",
  "Mathematics",
  "Physics",
  "Chemistry",
  "Humanities & Social Sciences",
  "Management Studies"
];
const PROGRAMS = [
  {
    icon: BookOpen,
    title: "B.Tech",
    tagline: "4-Year Undergraduate",
    detail: "10 disciplines",
    description: "A rigorous four-year programme grounding students in engineering fundamentals with hands-on labs, industrial projects, and interdisciplinary electives.",
    color: COBALT
  },
  {
    icon: GraduationCap,
    title: "M.Tech",
    tagline: "2-Year Postgraduate",
    detail: "20+ specializations",
    description: "Advanced specialisation with research exposure, industry collaboration and access to COEP's world-class laboratories and research centres.",
    color: DEEP_BLUE
  },
  {
    icon: TrendingUp,
    title: "MBA",
    tagline: "2-Year Management",
    detail: "General Mgmt + Business Analytics",
    description: "An intensive management programme blending analytical rigour with real-world business strategy, designed for future industry leaders.",
    color: COBALT
  },
  {
    icon: Star,
    title: "PhD",
    tagline: "Doctoral Research",
    detail: "All departments",
    description: "World-class doctoral programme with access to funded research projects, faculty mentorship, and international collaboration opportunities.",
    color: DEEP_BLUE
  }
];
const ACHIEVEMENTS = [
  {
    icon: Award,
    title: "NIRF 2023",
    highlight: "#90",
    subtitle: "Engineering Rank",
    detail: "Ranked 90th nationally in Engineering by the National Institutional Ranking Framework — a testament to academic quality and research output.",
    badge: "National Ranking",
    color: COBALT
  },
  {
    icon: Star,
    title: "NBA Accreditation",
    highlight: "8",
    subtitle: "UG Programs",
    detail: "8 undergraduate programmes accredited by the National Board of Accreditation, validating curriculum quality and graduate outcomes.",
    badge: "Quality Assurance",
    color: DEEP_BLUE
  },
  {
    icon: GraduationCap,
    title: "NAAC Grade",
    highlight: "A+",
    subtitle: "Institutional Grade",
    detail: "NAAC A+ accreditation reflecting excellence in teaching, research, infrastructure, governance, and stakeholder engagement.",
    badge: "Institutional Excellence",
    color: COBALT
  },
  {
    icon: TrendingUp,
    title: "Legacy",
    highlight: "1854",
    subtitle: "Year Established",
    detail: "One of India's oldest and most prestigious engineering institutions with over 170 years of academic leadership and nation-building.",
    badge: "Heritage Institution",
    color: DEEP_BLUE
  },
  {
    icon: Users,
    title: "Alumni Network",
    highlight: "50K+",
    subtitle: "Global Alumni",
    detail: "A vast alumni network spread across top corporations, governments, and research institutions worldwide, creating unmatched career opportunities.",
    badge: "Alumni Excellence",
    color: COBALT
  },
  {
    icon: BookOpen,
    title: "Research Grants",
    highlight: "₹50Cr+",
    subtitle: "Funded Projects",
    detail: "Significant research funding from DST, DRDO, AICTE, and corporate partners enabling cutting-edge innovations and patent-worthy discoveries.",
    badge: "Research Strength",
    color: DEEP_BLUE
  }
];
const CALENDAR_EVENTS = [
  {
    date: "July 15, 2025",
    month: "JUL",
    day: "15",
    title: "Odd Semester Commencement",
    desc: "All undergraduate and postgraduate odd semester classes begin. New student orientation and hostel allotment.",
    type: "Semester"
  },
  {
    date: "October 20–30, 2025",
    month: "OCT",
    day: "20",
    title: "Mid-Semester Examinations",
    desc: "Mid-semester assessment for all B.Tech, M.Tech, MBA and PhD coursework. Timetables published on the university portal.",
    type: "Examination"
  },
  {
    date: "November 5, 2025",
    month: "NOV",
    day: "5",
    title: "Annual Technical Festival – Mindspark",
    desc: "COEP's flagship pan-India technical festival featuring competitions, workshops, expert talks and startup expo.",
    type: "Event"
  }
];
const CURRICULUM_HIGHLIGHTS = [
  {
    semester: "Semester 1–2",
    title: "Engineering Foundations",
    topics: [
      "Mathematics I & II",
      "Engineering Physics",
      "Engineering Chemistry",
      "Programming Fundamentals",
      "Engineering Drawing",
      "Environmental Science"
    ]
  },
  {
    semester: "Semester 3–4",
    title: "Core Engineering",
    topics: [
      "Data Structures & Algorithms",
      "Digital Electronics",
      "Thermodynamics",
      "Solid Mechanics",
      "Probability & Statistics",
      "Technical Communication"
    ]
  },
  {
    semester: "Semester 5–6",
    title: "Specialisation & Electives",
    topics: [
      "Department Core Subjects",
      "Open Electives",
      "Minor Projects",
      "Industrial Internship",
      "Research Methodology",
      "Professional Ethics"
    ]
  },
  {
    semester: "Semester 7–8",
    title: "Capstone & Placement",
    topics: [
      "Major Project",
      "Industrial Training",
      "Advanced Electives",
      "Entrepreneurship",
      "IPR & Patents",
      "Placement Training"
    ]
  }
];
function AnimatedCounter({
  value,
  suffix,
  label,
  index
}) {
  const [count, setCount] = reactExports.useState(0);
  const [hasStarted, setHasStarted] = reactExports.useState(false);
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [hasStarted]);
  reactExports.useEffect(() => {
    if (!hasStarted) return;
    const duration = 1800;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [hasStarted, value]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      ref,
      initial: { opacity: 0, y: 28 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.55, delay: index * 0.12 },
      className: "text-center p-6 rounded-2xl border",
      style: {
        backgroundColor: "rgba(255,255,255,0.06)",
        borderColor: "rgba(255,255,255,0.14)"
      },
      "data-ocid": `academics.stat_counter.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "typo-stat-number mb-2", style: { color: "white" }, children: [
          count.toLocaleString(),
          suffix
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "typo-stat-label font-semibold uppercase tracking-wider text-white/70", children: label })
      ]
    }
  );
}
function DeptCard({
  name,
  index
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 18 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.4, delay: index * 0.06 },
      whileHover: { scale: 1.03, transition: { duration: 0.2 } },
      className: "flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-shadow duration-300 hover:shadow-lg group",
      style: {
        backgroundColor: "#fff",
        borderLeft: `4px solid ${COBALT}`,
        boxShadow: "0 1px 4px rgba(26, 35, 126, 0.07)"
      },
      "data-ocid": `academics.dept_card.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ChevronRight,
          {
            className: "w-4 h-4 flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1",
            style: { color: COBALT }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "typo-card-desc font-semibold",
            style: { color: DEEP_BLUE },
            children: name
          }
        )
      ]
    }
  );
}
function ProgramCard({
  prog,
  index
}) {
  const Icon = prog.icon;
  const fromRight = index % 2 !== 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, x: fromRight ? 40 : -40 },
      whileInView: { opacity: 1, x: 0 },
      viewport: { once: true },
      transition: { duration: 0.55, delay: index * 0.1 },
      whileHover: { y: -6, transition: { duration: 0.2 } },
      className: "flex flex-col overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 group",
      style: { background: "#fff" },
      "data-ocid": `academics.program_card.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-full", style: { backgroundColor: prog.color } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-7 flex flex-col flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110",
              style: {
                backgroundColor: `${prog.color}12`,
                border: `2px solid ${prog.color}25`
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-7 h-7", style: { color: prog.color } })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "typo-section-heading mb-1", style: { color: DEEP_BLUE }, children: prog.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-section-label mb-1", style: { color: prog.color }, children: prog.tagline }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-body mb-4", style: { color: COBALT }, children: prog.detail }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-card-desc flex-1", style: { color: "#4b5563" }, children: prog.description }),
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
              "data-ocid": `academics.program_apply.${index + 1}`,
              children: [
                "Apply Now",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
              ]
            }
          )
        ] })
      ]
    }
  );
}
function AchievementBadge({
  item,
  index
}) {
  const Icon = item.icon;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.5, delay: index * 0.1 },
      whileHover: { y: -5, transition: { duration: 0.2 } },
      className: "flex flex-col items-center text-center p-6 rounded-2xl border hover:shadow-xl transition-all duration-300 group",
      style: {
        backgroundColor: "#fff",
        borderColor: `${item.color}22`
      },
      "data-ocid": `academics.achievement_badge.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-0.5 rounded-full mb-4",
            style: {
              backgroundColor: "rgba(26, 35, 126, 0.1)",
              color: DEEP_BLUE,
              fontFamily: "Source Sans 3, sans-serif"
            },
            children: item.badge
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110",
            style: {
              background: `linear-gradient(135deg, ${item.color}18, ${item.color}30)`,
              border: `2px solid ${item.color}30`
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-8 h-8", style: { color: item.color } })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "typo-stat-number mb-1", style: { color: item.color }, children: item.highlight }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "text-xs font-bold uppercase tracking-wider mb-3",
            style: { color: COBALT, fontFamily: "Source Sans 3, sans-serif" },
            children: item.subtitle
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "typo-card-title mb-2", style: { color: DEEP_BLUE }, children: item.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-card-desc", style: { color: "#6b7280" }, children: item.detail })
      ]
    }
  );
}
function SectionHeading({
  eyebrow,
  title,
  subtitle
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.span,
      {
        initial: { opacity: 0, y: 10 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.4 },
        className: "inline-block typo-section-label mb-3",
        style: { color: COBALT },
        children: eyebrow
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.h2,
      {
        initial: { opacity: 0, y: 14 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5, delay: 0.08 },
        className: "typo-section-heading mb-4",
        style: { color: DEEP_BLUE },
        children: title
      }
    ),
    subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.p,
      {
        initial: { opacity: 0, y: 10 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.45, delay: 0.16 },
        className: "typo-body max-w-2xl mx-auto",
        style: { color: "#6b7280" },
        children: subtitle
      }
    )
  ] });
}
function AcademicsPage() {
  const params = useParams({ strict: false });
  const navigate = useNavigate();
  const activeTab = params.sectionId ?? "overview";
  const overviewRef = reactExports.useRef(null);
  const handleTabChange = reactExports.useCallback(
    (tabId) => {
      navigate({ to: "/academics/$sectionId", params: { sectionId: tabId } });
    },
    [navigate]
  );
  const scrollToPrograms = () => {
    handleTabChange("programs");
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative overflow-hidden flex flex-col items-center justify-center text-center",
        style: {
          background: `linear-gradient(135deg, ${MIDNIGHT} 0%, ${DEEP_BLUE} 45%, ${COBALT} 100%)`,
          backgroundImage: `url('https://www.coeptech.ac.in/wp-content/uploads/2023/08/DSC_6471-scaled.jpg'), linear-gradient(135deg, ${MIDNIGHT} 0%, ${DEEP_BLUE} 45%, ${COBALT} 100%)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "320px",
          paddingTop: "64px",
          paddingBottom: "64px"
        },
        "data-ocid": "academics.hero_section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 pointer-events-none",
              style: { backgroundColor: "rgba(8, 30, 92, 0.62)", zIndex: 0 }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 pointer-events-none",
              style: {
                backgroundImage: `radial-gradient(circle at 20% 50%, ${COBALT}30 0%, transparent 50%), radial-gradient(circle at 80% 20%, ${GOLD}18 0%, transparent 40%)`,
                zIndex: 1
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-0 right-0 w-96 h-96 rounded-full -translate-y-1/2 translate-x-1/3 opacity-10",
              style: { backgroundColor: GOLD, zIndex: 1 }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute bottom-0 left-0 w-72 h-72 rounded-full translate-y-1/2 -translate-x-1/3 opacity-[0.07]",
              style: { backgroundColor: "#fff", zIndex: 1 }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 opacity-[0.06]",
              style: {
                backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
                zIndex: 1
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-3xl mx-auto px-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 16 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5, delay: 0.4 },
                className: "flex items-center justify-center gap-2 mb-4",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: "/",
                      className: "text-xs font-semibold uppercase tracking-wider opacity-60 hover:opacity-100 transition-opacity",
                      style: { color: "#fff", fontFamily: "Source Sans 3, sans-serif" },
                      children: "Home"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3 h-3 text-white/40" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "text-xs font-semibold uppercase tracking-wider",
                      style: {
                        color: "rgba(255,255,255,0.75)",
                        fontFamily: "Source Sans 3, sans-serif"
                      },
                      children: "Academics"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.h1,
              {
                initial: { opacity: 0, y: 24 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.65 },
                className: "typo-hero-heading text-white mb-4",
                children: "Academic Excellence"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.2 },
                className: "typo-hero-desc text-white/80 max-w-2xl mx-auto",
                children: "Shaping Engineers, Innovators & Leaders Since 1854"
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", "data-ocid": "academics.main_content", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { mode: "wait", children: [
      activeTab === "overview" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -12 },
          transition: { duration: 0.4 },
          "data-ocid": "academics.overview_section",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "section",
              {
                className: "py-16",
                style: {
                  background: `linear-gradient(135deg, ${MIDNIGHT} 0%, ${DEEP_BLUE} 60%, ${COBALT} 100%)`
                },
                ref: overviewRef,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-5", children: STATS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AnimatedCounter,
                  {
                    value: s.value,
                    suffix: s.suffix,
                    label: s.label,
                    index: i
                  },
                  s.label
                )) }) })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", style: { backgroundColor: "#fff" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.span,
                {
                  initial: { opacity: 0 },
                  whileInView: { opacity: 1 },
                  viewport: { once: true },
                  transition: { duration: 0.4 },
                  className: "inline-block typo-section-label mb-4",
                  style: { color: COBALT },
                  children: "COEP Technological University, Pune"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.h2,
                {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.55 },
                  className: "typo-section-heading mb-6",
                  style: { color: DEEP_BLUE },
                  children: "A Legacy of Academic Leadership"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.p,
                {
                  initial: { opacity: 0, y: 16 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.5, delay: 0.1 },
                  className: "typo-body-lg mb-4",
                  style: { color: "#374151" },
                  children: "COEP Technological University stands as one of India's most storied engineering institutions, offering a transformative academic experience that blends rigorous theory with cutting-edge practical application. Established in 1854, the university spans two broad schools — Engineering and Multidisciplinary Sciences, Humanities & Management Studies — comprising 10+ departments and delivering programmes at the undergraduate, postgraduate, and doctoral levels."
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.p,
                {
                  initial: { opacity: 0, y: 16 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.5, delay: 0.18 },
                  className: "typo-body mb-8",
                  style: { color: "#6b7280" },
                  children: "Our faculty are internationally accomplished researchers. Our laboratories are equipped with state-of-the-art instruments. Our alumni lead global corporations, government bodies, and research institutions. At COEP Tech, academic excellence is not a destination — it is a culture."
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.button,
                {
                  initial: { opacity: 0, scale: 0.95 },
                  whileInView: { opacity: 1, scale: 1 },
                  viewport: { once: true },
                  transition: { duration: 0.4, delay: 0.24 },
                  onClick: scrollToPrograms,
                  className: "inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-bold text-base uppercase tracking-wider transition-all duration-200 hover:brightness-110 hover:scale-105",
                  style: {
                    backgroundColor: COBALT,
                    color: "#fff",
                    fontFamily: "Source Sans 3, sans-serif"
                  },
                  "data-ocid": "academics.explore_programs_button",
                  children: [
                    "Explore Programs",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-5 h-5" })
                  ]
                }
              )
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", style: { backgroundColor: "#f5f7fc" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SectionHeading,
                {
                  eyebrow: "Academic Structure",
                  title: "Our Schools",
                  subtitle: "COEP Technological University is organised into two broad schools — each a centre of excellence offering undergraduate, postgraduate, and doctoral programmes."
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-7", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 32 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true },
                    transition: { duration: 0.55 },
                    whileHover: { y: -8, transition: { duration: 0.2 } },
                    className: "rounded-3xl overflow-hidden flex flex-col group",
                    style: {
                      background: "#fff",
                      border: `1.5px solid ${COBALT}22`,
                      boxShadow: "0 4px 24px rgba(26, 35, 126, 0.09)"
                    },
                    "data-ocid": "academics.school_card.1",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: "px-8 pt-8 pb-6",
                          style: {
                            background: `linear-gradient(135deg, ${MIDNIGHT} 0%, ${COBALT} 100%)`
                          },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "div",
                              {
                                className: "w-14 h-14 rounded-2xl flex items-center justify-center mb-5",
                                style: {
                                  background: "rgba(255,255,255,0.14)",
                                  border: "1px solid rgba(255,255,255,0.25)"
                                },
                                children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-7 h-7 text-white" })
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "typo-card-title text-white leading-tight", children: "School of Engineering" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mt-3", children: [
                              "9 Departments",
                              "2000+ Students",
                              "150+ Faculty"
                            ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "span",
                              {
                                className: "inline-block px-3 py-0.5 rounded-full text-xs font-semibold",
                                style: {
                                  background: "rgba(255,255,255,0.15)",
                                  color: "rgba(255,255,255,0.88)",
                                  fontFamily: "Source Sans 3, sans-serif"
                                },
                                children: s
                              },
                              s
                            )) })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-8 py-6 flex flex-col flex-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "text-sm leading-relaxed flex-1 mb-6",
                            style: {
                              color: "#4b5563",
                              fontFamily: "Source Sans 3, sans-serif"
                            },
                            children: "Home to 9 engineering disciplines spanning mechanical, computer science, civil, electrical, electronics & telecom, instrumentation, metallurgy, and more. Offering B.Tech, M.Tech, and PhD programs with world-class faculty and research."
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Link,
                          {
                            to: "/academics/schools/school-of-engineering",
                            className: "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-200 hover:brightness-110 hover:scale-105",
                            style: {
                              backgroundColor: COBALT,
                              color: "#fff",
                              fontFamily: "Source Sans 3, sans-serif"
                            },
                            "data-ocid": "academics.school_card.1.explore_button",
                            children: [
                              "Explore School",
                              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
                            ]
                          }
                        )
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 32 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true },
                    transition: { duration: 0.55, delay: 0.12 },
                    whileHover: { y: -8, transition: { duration: 0.2 } },
                    className: "rounded-3xl overflow-hidden flex flex-col group",
                    style: {
                      background: "#fff",
                      border: `1.5px solid ${DEEP_BLUE}22`,
                      boxShadow: "0 4px 24px rgba(26,35,126,0.09)"
                    },
                    "data-ocid": "academics.school_card.2",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: "px-8 pt-8 pb-6",
                          style: {
                            background: `linear-gradient(135deg, ${DEEP_BLUE} 0%, #283593 100%)`
                          },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "div",
                              {
                                className: "w-14 h-14 rounded-2xl flex items-center justify-center mb-5",
                                style: {
                                  background: "rgba(255,255,255,0.14)",
                                  border: "1px solid rgba(255,255,255,0.25)"
                                },
                                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-7 h-7 text-white" })
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "typo-card-title text-white leading-tight", children: "School of Multidisciplinary Sciences, Humanities & Management Studies" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mt-3", children: [
                              "3 Departments",
                              "500+ Students",
                              "30+ Faculty"
                            ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "span",
                              {
                                className: "inline-block px-3 py-0.5 rounded-full text-xs font-semibold",
                                style: {
                                  background: "rgba(255,255,255,0.15)",
                                  color: "rgba(255,255,255,0.88)",
                                  fontFamily: "Source Sans 3, sans-serif"
                                },
                                children: s
                              },
                              s
                            )) })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-8 py-6 flex flex-col flex-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "text-sm leading-relaxed flex-1 mb-6",
                            style: {
                              color: "#4b5563",
                              fontFamily: "Source Sans 3, sans-serif"
                            },
                            children: "Bridging disciplines with programs in management studies, humanities, and applied sciences. The Department of Management Studies offers a flagship MBA program preparing industry-ready leaders."
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Link,
                          {
                            to: "/academics/schools/school-of-multidisciplinary-sciences",
                            className: "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-200 hover:brightness-110 hover:scale-105",
                            style: {
                              backgroundColor: DEEP_BLUE,
                              color: "#fff",
                              fontFamily: "Source Sans 3, sans-serif"
                            },
                            "data-ocid": "academics.school_card.2.explore_button",
                            children: [
                              "Explore School",
                              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
                            ]
                          }
                        )
                      ] })
                    ]
                  }
                )
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16", style: { backgroundColor: "#fff" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SectionHeading,
                {
                  eyebrow: "Quick Navigation",
                  title: "Explore Academics",
                  subtitle: "Dive into the full depth of COEP's academic offerings."
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5", children: [
                {
                  tab: "schools",
                  icon: BookOpen,
                  label: "Schools & Departments",
                  desc: "7 schools, 10+ departments"
                },
                {
                  tab: "programs",
                  icon: GraduationCap,
                  label: "Academic Programs",
                  desc: "B.Tech, M.Tech, MBA, PhD"
                },
                {
                  tab: "curriculum",
                  icon: Calendar,
                  label: "Courses & Curriculum",
                  desc: "Semester-wise syllabus"
                },
                {
                  tab: "achievements",
                  icon: Award,
                  label: "Rankings & Awards",
                  desc: "NIRF, NBA, NAAC A+"
                },
                {
                  tab: "calendar",
                  icon: Calendar,
                  label: "Academic Calendar",
                  desc: "Events, exams & holidays"
                }
              ].map((item, i) => {
                const Icon = item.icon;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.button,
                  {
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true },
                    transition: { duration: 0.4, delay: i * 0.08 },
                    whileHover: { y: -4, transition: { duration: 0.2 } },
                    onClick: () => handleTabChange(item.tab),
                    className: "flex items-start gap-4 p-5 rounded-2xl text-left transition-shadow duration-300 hover:shadow-lg",
                    style: {
                      backgroundColor: "#fff",
                      border: `1px solid ${COBALT}18`
                    },
                    "data-ocid": `academics.quicknav.${item.tab}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0",
                          style: { backgroundColor: `${COBALT}12` },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Icon,
                            {
                              className: "w-5 h-5",
                              style: { color: COBALT }
                            }
                          )
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "typo-support font-bold mb-0.5",
                            style: { color: DEEP_BLUE },
                            children: item.label
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "typo-stat-label",
                            style: { color: "#9ca3af" },
                            children: item.desc
                          }
                        )
                      ] })
                    ]
                  },
                  item.tab
                );
              }) })
            ] }) })
          ]
        },
        "overview"
      ),
      activeTab === "schools" && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -12 },
          transition: { duration: 0.4 },
          className: "py-16",
          "data-ocid": "academics.schools_section",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1200px] mx-auto px-4 xl:px-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SectionHeading,
              {
                eyebrow: "Academic Structure",
                title: "Schools & Departments",
                subtitle: "COEP Technological University is organized into two broad schools encompassing 16 departments — each a centre of academic rigour and research excellence."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 24 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.55 },
                className: "mb-12 rounded-3xl overflow-hidden shadow-lg",
                style: { border: `1.5px solid ${COBALT}25` },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: "/academics/schools/school-of-engineering",
                      className: "block px-8 py-6 flex items-center gap-4 group transition-opacity hover:opacity-90",
                      style: {
                        background: `linear-gradient(120deg, ${MIDNIGHT}, ${COBALT})`
                      },
                      "data-ocid": "academics.schools.engineering_link",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0",
                            style: { backgroundColor: "rgba(255,255,255,0.12)" },
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-6 h-6 text-white" })
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "typo-card-title text-white", children: "School of Engineering" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-card-desc text-white/70", children: "10 Departments • B.Tech, M.Tech & PhD programmes" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-5 h-5 text-white/60 group-hover:translate-x-1 transition-transform flex-shrink-0" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8", style: { backgroundColor: "#fff" }, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "typo-body mb-6 max-w-3xl",
                        style: { color: "#4b5563" },
                        children: "The School of Engineering houses COEP's flagship undergraduate and postgraduate engineering programmes. Spanning 10 departments, it offers a rigorous curriculum that balances theoretical foundations with hands-on laboratory work, industrial internships, and research projects."
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3", children: ENGINEERING_DEPTS.map((dept, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(DeptCard, { name: dept, index: i }, dept)) })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 24 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.55, delay: 0.1 },
                className: "rounded-3xl overflow-hidden shadow-lg",
                style: { border: `1.5px solid ${DEEP_BLUE}25` },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: "/academics/schools/school-of-multidisciplinary-sciences",
                      className: "block px-8 py-6 flex items-center gap-4 group transition-opacity hover:opacity-90",
                      style: {
                        background: `linear-gradient(120deg, ${DEEP_BLUE}, #283593)`
                      },
                      "data-ocid": "academics.schools.multidisciplinary_link",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0",
                            style: { backgroundColor: "rgba(255,255,255,0.12)" },
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-6 h-6 text-white" })
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "typo-card-title text-white", children: "School of Multidisciplinary Sciences, Humanities & Management Studies" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-card-desc text-white/70", children: "6 Departments • MBA, M.Sc & PhD programmes" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-5 h-5 text-white/60 group-hover:translate-x-1 transition-transform flex-shrink-0" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8", style: { backgroundColor: "#fff" }, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-sm leading-relaxed mb-6 max-w-3xl",
                        style: {
                          color: "#4b5563",
                          fontFamily: "Source Sans 3, sans-serif"
                        },
                        children: "This interdisciplinary school bridges science, humanities, and management — providing well-rounded education that develops analytical thinking, communication skills, scientific inquiry, and business acumen in future engineers and managers."
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3", children: SCIENCE_DEPTS.map((dept, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(DeptCard, { name: dept, index: i }, dept)) })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { delay: 0.2, duration: 0.5 },
                className: "mt-12 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6",
                style: {
                  background: `linear-gradient(120deg, ${MIDNIGHT} 0%, ${COBALT} 100%)`
                },
                "data-ocid": "academics.schools_cta_section",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "typo-section-label mb-2 opacity-70",
                        style: { color: "rgba(255,255,255,0.75)" },
                        children: "Explore Further"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "typo-card-title text-white mb-1", children: "Visit COEP's Official Academic Portal" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-body text-white/70", children: "Detailed programme information, curriculum, and faculty listings." })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: "https://www.coeptech.ac.in/academics/",
                      target: "_blank",
                      rel: "noreferrer",
                      className: "flex-shrink-0 flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm uppercase tracking-wider transition-all duration-200 hover:brightness-110 hover:scale-105",
                      style: {
                        backgroundColor: GOLD,
                        color: MIDNIGHT
                      },
                      "data-ocid": "academics.schools_cta_button",
                      children: [
                        "Official Website",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
                      ]
                    }
                  )
                ]
              }
            )
          ] })
        },
        "schools"
      ),
      activeTab === "programs" && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -12 },
          transition: { duration: 0.4 },
          className: "py-16",
          "data-ocid": "academics.programs_section",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1200px] mx-auto px-4 xl:px-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SectionHeading,
              {
                eyebrow: "Degree Programmes",
                title: "Academic Programs",
                subtitle: "From undergraduate engineering to doctoral research — COEP offers transformative programmes across all academic levels."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: PROGRAMS.map((prog, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProgramCard, { prog, index: i }, prog.title)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.5, delay: 0.2 },
                className: "mt-14 rounded-2xl overflow-hidden shadow-md",
                style: { border: `1px solid ${COBALT}18` },
                "data-ocid": "academics.programs_table",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "px-6 py-4",
                      style: { backgroundColor: COBALT },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "h3",
                        {
                          className: "text-lg font-bold text-white",
                          style: { fontFamily: "var(--font-heading)" },
                          children: "Programme Comparison"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "overflow-x-auto",
                      style: { backgroundColor: "#fff" },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "tr",
                          {
                            style: {
                              backgroundColor: "#f5f7fc",
                              borderBottom: `1px solid ${COBALT}15`
                            },
                            children: [
                              "Programme",
                              "Duration",
                              "Eligibility",
                              "Intake",
                              "Disciplines"
                            ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "th",
                              {
                                className: "px-5 py-3 text-left text-xs font-bold uppercase tracking-wider",
                                style: {
                                  color: DEEP_BLUE,
                                  fontFamily: "Source Sans 3, sans-serif"
                                },
                                children: h
                              },
                              h
                            ))
                          }
                        ) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: [
                          [
                            "B.Tech",
                            "4 Years",
                            "10+2 PCM / JEE Main",
                            "~540 seats",
                            "10 branches"
                          ],
                          [
                            "M.Tech",
                            "2 Years",
                            "B.E/B.Tech + GATE",
                            "~300 seats",
                            "20+ specializations"
                          ],
                          [
                            "MBA",
                            "2 Years",
                            "Graduate + CAT/MAT/CMAT",
                            "~60 seats",
                            "General Mgmt, Business Analytics"
                          ],
                          [
                            "PhD",
                            "3–5 Years",
                            "M.Tech/M.Sc/MBA",
                            "Open",
                            "All departments"
                          ]
                        ].map((row, ri) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "tr",
                          {
                            className: "transition-colors duration-150",
                            style: {
                              borderBottom: `1px solid ${COBALT}10`,
                              backgroundColor: ri % 2 === 0 ? "#fff" : "#f9faff"
                            },
                            children: row.map((cell) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "td",
                              {
                                className: "px-5 py-3.5",
                                style: {
                                  color: cell === row[0] ? DEEP_BLUE : "#4b5563",
                                  fontFamily: "Source Sans 3, sans-serif",
                                  fontWeight: cell === row[0] ? 700 : 400
                                },
                                children: cell
                              },
                              cell
                            ))
                          },
                          row[0]
                        )) })
                      ] })
                    }
                  )
                ]
              }
            )
          ] })
        },
        "programs"
      ),
      activeTab === "curriculum" && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -12 },
          transition: { duration: 0.4 },
          className: "py-16",
          "data-ocid": "academics.curriculum_section",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1100px] mx-auto px-4 xl:px-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SectionHeading,
              {
                eyebrow: "B.Tech Curriculum Structure",
                title: "Courses & Curriculum",
                subtitle: "A semester-by-semester guide to the B.Tech curriculum at COEP Technological University — rigorous, modern, and industry-aligned."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-14", children: CURRICULUM_HIGHLIGHTS.map((block, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 24 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.5, delay: i * 0.1 },
                className: "rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300",
                style: { border: `1.5px solid ${COBALT}18` },
                "data-ocid": `academics.curriculum_block.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "px-6 py-4 flex items-center gap-3",
                      style: {
                        background: i % 2 === 0 ? `linear-gradient(120deg, ${MIDNIGHT}, ${COBALT})` : `linear-gradient(120deg, ${DEEP_BLUE}, #2a60e0)`
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold",
                            style: {
                              backgroundColor: "rgba(255,255,255,0.15)",
                              color: "#fff"
                            },
                            children: i + 1
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: "text-xs font-bold uppercase tracking-widest text-white/60",
                              style: { fontFamily: "Source Sans 3, sans-serif" },
                              children: block.semester
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: "text-base font-bold text-white",
                              style: { fontFamily: "var(--font-heading)" },
                              children: block.title
                            }
                          )
                        ] })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5", style: { backgroundColor: "#fff" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: block.topics.map((topic) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "li",
                    {
                      className: "flex items-center gap-3 text-sm",
                      style: {
                        color: "#374151",
                        fontFamily: "Source Sans 3, sans-serif"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "w-1.5 h-1.5 rounded-full flex-shrink-0",
                            style: { backgroundColor: COBALT }
                          }
                        ),
                        topic
                      ]
                    },
                    topic
                  )) }) })
                ]
              },
              block.semester
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.5, delay: 0.15 },
                className: "rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6",
                style: {
                  background: `linear-gradient(120deg, ${MIDNIGHT} 0%, ${DEEP_BLUE} 100%)`
                },
                "data-ocid": "academics.curriculum_cta",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-xs font-bold uppercase tracking-widest mb-2",
                        style: {
                          color: "rgba(255,255,255,0.75)",
                          fontFamily: "Source Sans 3, sans-serif"
                        },
                        children: "Detailed Syllabus"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "h3",
                      {
                        className: "text-xl font-bold text-white mb-1",
                        style: { fontFamily: "var(--font-heading)" },
                        children: "Download Full Curriculum PDF"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-sm text-white/70",
                        style: { fontFamily: "Source Sans 3, sans-serif" },
                        children: "Department-wise syllabi, elective lists, and lab manuals available on the university portal."
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: "https://www.coeptech.ac.in/academics/",
                      target: "_blank",
                      rel: "noreferrer",
                      className: "flex-shrink-0 flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm uppercase tracking-wider transition-all duration-200 hover:brightness-110 hover:scale-105",
                      style: {
                        backgroundColor: GOLD,
                        color: MIDNIGHT,
                        fontFamily: "Source Sans 3, sans-serif"
                      },
                      "data-ocid": "academics.curriculum_portal_button",
                      children: [
                        "View on Portal",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
                      ]
                    }
                  )
                ]
              }
            )
          ] })
        },
        "curriculum"
      ),
      activeTab === "achievements" && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -12 },
          transition: { duration: 0.4 },
          className: "py-16",
          "data-ocid": "academics.achievements_section",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1200px] mx-auto px-4 xl:px-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SectionHeading,
              {
                eyebrow: "Recognitions & Rankings",
                title: "Awards & Achievements",
                subtitle: "COEP Technological University's academic excellence is recognised by India's premier accreditation and ranking bodies."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14", children: ACHIEVEMENTS.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(AchievementBadge, { item, index: i }, item.title)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.5 },
                className: "rounded-3xl overflow-hidden shadow-xl",
                "data-ocid": "academics.achievements_banner",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "p-10 md:p-14 text-center",
                    style: {
                      background: `linear-gradient(135deg, ${MIDNIGHT} 0%, ${DEEP_BLUE} 50%, ${COBALT} 100%)`
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "text-xs font-bold uppercase tracking-[0.22em] mb-4",
                          style: {
                            color: "rgba(255,255,255,0.75)",
                            fontFamily: "Source Sans 3, sans-serif"
                          },
                          children: "170 Years of Excellence"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "h2",
                        {
                          className: "text-3xl md:text-4xl font-bold text-white mb-4",
                          style: { fontFamily: "var(--font-heading)" },
                          children: "One of India's Most Decorated Engineering Institutions"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "max-w-2xl mx-auto text-base text-white/75 mb-8",
                          style: { fontFamily: "Source Sans 3, sans-serif" },
                          children: "From producing Bharat Ratna recipients to contributing to national infrastructure, COEP's alumni and faculty have left an indelible mark on India's progress."
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center justify-center gap-4", children: [
                        "NIRF #90",
                        "NAAC A+",
                        "NBA Accredited",
                        "ISO 9001",
                        "ABET Partner"
                      ].map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "inline-block px-4 py-1.5 rounded-full text-sm font-bold border",
                          style: {
                            borderColor: "rgba(255,255,255,0.4)",
                            color: "rgba(255,255,255,0.9)",
                            fontFamily: "Source Sans 3, sans-serif",
                            backgroundColor: "rgba(255,255,255,0.1)"
                          },
                          children: tag
                        },
                        tag
                      )) })
                    ]
                  }
                )
              }
            )
          ] })
        },
        "achievements"
      ),
      activeTab === "calendar" && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -12 },
          transition: { duration: 0.4 },
          className: "py-16",
          "data-ocid": "academics.calendar_section",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[900px] mx-auto px-4 xl:px-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SectionHeading,
              {
                eyebrow: "Academic Year 2025–26",
                title: "Academic Calendar",
                subtitle: "Key academic milestones, examination schedules, and campus events for the current academic year."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-5 mb-12", children: CALENDAR_EVENTS.map((ev, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: -30 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { duration: 0.5, delay: i * 0.12 },
                whileHover: { x: 4, transition: { duration: 0.2 } },
                className: "flex gap-5 p-5 rounded-2xl hover:shadow-xl transition-all duration-300",
                style: {
                  backgroundColor: "#fff",
                  border: `1.5px solid ${COBALT}15`
                },
                "data-ocid": `academics.calendar_event.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "w-16 h-16 rounded-2xl flex flex-col items-center justify-center flex-shrink-0 text-white",
                      style: {
                        background: i % 2 === 0 ? `linear-gradient(135deg, ${MIDNIGHT}, ${COBALT})` : `linear-gradient(135deg, ${DEEP_BLUE}, #2a60e0)`
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "text-[10px] font-bold uppercase tracking-widest opacity-75",
                            style: { fontFamily: "Source Sans 3, sans-serif" },
                            children: ev.month
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "text-2xl font-bold leading-none",
                            style: { fontFamily: "var(--font-heading)" },
                            children: ev.day
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1 flex-wrap", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "h3",
                        {
                          className: "text-base font-bold",
                          style: {
                            fontFamily: "var(--font-heading)",
                            color: DEEP_BLUE
                          },
                          children: ev.title
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full",
                          style: {
                            backgroundColor: `${COBALT}12`,
                            color: COBALT,
                            fontFamily: "Source Sans 3, sans-serif"
                          },
                          children: ev.type
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-xs mb-1",
                        style: {
                          color: COBALT,
                          fontFamily: "Source Sans 3, sans-serif"
                        },
                        children: ev.date
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-sm leading-relaxed",
                        style: {
                          color: "#6b7280",
                          fontFamily: "Source Sans 3, sans-serif"
                        },
                        children: ev.desc
                      }
                    )
                  ] })
                ]
              },
              ev.title
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.5 },
                className: "rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6",
                style: {
                  background: `linear-gradient(120deg, ${MIDNIGHT} 0%, ${COBALT} 100%)`
                },
                "data-ocid": "academics.calendar_cta",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-xs font-bold uppercase tracking-widest mb-2 opacity-70",
                        style: {
                          color: "rgba(255,255,255,0.75)",
                          fontFamily: "Source Sans 3, sans-serif"
                        },
                        children: "Full Schedule"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "h3",
                      {
                        className: "text-xl font-bold text-white mb-1",
                        style: { fontFamily: "var(--font-heading)" },
                        children: "View Full Academic Calendar"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-sm text-white/70",
                        style: { fontFamily: "Source Sans 3, sans-serif" },
                        children: "Complete schedule including holidays, examination dates, and internal assessment windows."
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: "https://www.coeptech.ac.in/academic-calendar/",
                      target: "_blank",
                      rel: "noreferrer",
                      className: "flex-shrink-0 flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm uppercase tracking-wider transition-all duration-200 hover:brightness-110 hover:scale-105",
                      style: {
                        backgroundColor: GOLD,
                        color: MIDNIGHT,
                        fontFamily: "Source Sans 3, sans-serif"
                      },
                      "data-ocid": "academics.calendar_full_button",
                      children: [
                        "View Full Calendar",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
                      ]
                    }
                  )
                ]
              }
            )
          ] })
        },
        "calendar"
      )
    ] }) })
  ] });
}
export {
  AcademicsPage as default
};
