import { a as useParams, u as useNavigate, r as reactExports, j as jsxRuntimeExports } from "./index-ewouZ8Z-.js";
import { H as Header, F as Footer } from "./Header-Y41v9IHA.js";
import { S as SubTabRibbon } from "./SubTabRibbon-CLfFyl5U.js";
import "./utils-pycC2CyQ.js";
import "./x-BbDbzOVy.js";
import "./chevron-left-JqSNS1qi.js";
import "./chevron-right-CxS9AhYT.js";
const BTECH_PROGRAMS = [
  { id: "ce", name: "Computer Engineering", intake: 120 },
  { id: "it", name: "Information Technology", intake: 60 },
  { id: "me", name: "Mechanical Engineering", intake: 120 },
  { id: "civil", name: "Civil Engineering", intake: 60 },
  { id: "ee", name: "Electrical Engineering", intake: 60 },
  { id: "etc", name: "Electronics & Telecom Engineering", intake: 60 },
  { id: "ic", name: "Instrumentation & Control Engineering", intake: 30 },
  { id: "met", name: "Metallurgy & Material Technology", intake: 30 }
];
const BTECH_PROCESS = [
  {
    n: 1,
    title: "Appear for MHT-CET / JEE Main",
    desc: "Qualify the Maharashtra state CET or JEE Main with a valid score. Scores are used for merit-based shortlisting in the centralized admission process."
  },
  {
    n: 2,
    title: "Register on CAP Portal",
    desc: "Register on the State Common Admission Process portal managed by State CET Cell, Maharashtra at cetcell.mahacet.org."
  },
  {
    n: 3,
    title: "Document Verification",
    desc: "Submit academic documents, domicile certificate, and caste/category certificates at the designated Facilitation Centre."
  },
  {
    n: 4,
    title: "CAP Rounds Allotment",
    desc: "Participate in centralized allotment rounds (CAP Round I, II, III). Confirm seat and pay acceptance fees within the deadline."
  },
  {
    n: 5,
    title: "Reporting to Institute",
    desc: "Report to COEP Technological University with all original documents and complete the admission formalities to secure your seat."
  }
];
const MTECH_PROGRAMS = [
  {
    id: "mce",
    dept: "Computer Engineering",
    spec: "Computer Engineering (AI/ML)",
    intake: 18
  },
  {
    id: "mcs",
    dept: "Computer Engineering",
    spec: "Computer Networks & Security",
    intake: 18
  },
  {
    id: "mcam",
    dept: "Mechanical Engineering",
    spec: "CAD/CAM & Robotics",
    intake: 18
  },
  {
    id: "mth",
    dept: "Mechanical Engineering",
    spec: "Thermal Engineering",
    intake: 18
  },
  {
    id: "mmfg",
    dept: "Mechanical Engineering",
    spec: "Manufacturing Engineering",
    intake: 18
  },
  {
    id: "mse",
    dept: "Civil Engineering",
    spec: "Structural Engineering",
    intake: 18
  },
  {
    id: "mgeo",
    dept: "Civil Engineering",
    spec: "Geotechnical Engineering",
    intake: 18
  },
  {
    id: "mwr",
    dept: "Civil Engineering",
    spec: "Water Resources Engineering",
    intake: 18
  },
  {
    id: "mps",
    dept: "Electrical Engineering",
    spec: "Power Systems",
    intake: 18
  },
  {
    id: "mvlsi",
    dept: "Electronics & Telecom",
    spec: "VLSI Design",
    intake: 18
  },
  {
    id: "mmet",
    dept: "Metallurgy",
    spec: "Metallurgy & Material Science",
    intake: 18
  }
];
const MTECH_ELIGIBILITY = [
  "B.E. / B.Tech in relevant engineering discipline with minimum 55% aggregate marks",
  "Valid GATE score in the corresponding paper is mandatory",
  "Maharashtra domicile certificate for State Quota seats",
  "All India candidates eligible for Institute / Management quota seats"
];
const MTECH_PROCESS = [
  {
    n: 1,
    title: "Secure Valid GATE Score",
    desc: "Obtain a valid GATE score in the relevant engineering discipline. The GATE score remains valid for 3 years from the year of examination."
  },
  {
    n: 2,
    title: "Online Application on DTE Portal",
    desc: "Fill the online application form on the DTE Maharashtra portal during the designated admission window, typically May–June each year."
  },
  {
    n: 3,
    title: "Merit List & Centralised Counselling",
    desc: "Candidates are shortlisted based on GATE score. Attend centralised counselling for seat allotment across participating institutes."
  },
  {
    n: 4,
    title: "Reporting to Institute",
    desc: "Report to COEP with all original documents, pay admission fees, and complete institute-level admission formalities."
  }
];
const PHD_AREAS = [
  {
    id: "cs",
    dept: "Computer Engineering",
    description: "AI/ML, Computer Vision, Cybersecurity, Distributed Systems"
  },
  {
    id: "me",
    dept: "Mechanical Engineering",
    description: "Advanced Manufacturing, Robotics, Thermal & Fluid Sciences"
  },
  {
    id: "civil",
    dept: "Civil Engineering",
    description: "Structural Engineering, Geotechnics, Environmental & Water Resources"
  },
  {
    id: "ee",
    dept: "Electrical Engineering",
    description: "Power Electronics, Smart Grids, Electric Vehicles"
  },
  {
    id: "etc",
    dept: "Electronics & Telecom",
    description: "VLSI Design, Embedded Systems, Signal Processing"
  },
  {
    id: "ic",
    dept: "Instrumentation & Control",
    description: "Industrial Automation, IoT, Sensor Systems"
  },
  {
    id: "met",
    dept: "Metallurgy & Material Technology",
    description: "Nano Technology, Material Characterization, Alloy Design"
  },
  {
    id: "chem",
    dept: "Chemical Engineering",
    description: "Process Engineering, Green Chemistry, Reaction Engineering"
  },
  {
    id: "mgmt",
    dept: "Management Studies",
    description: "Business Analytics, Operations Research, Organizational Behavior"
  }
];
const PHD_PROCESS = [
  {
    n: 1,
    title: "Online Application",
    desc: "Apply through the COEP official portal during the designated admission window — typically January and July of each year. Fill in complete academic details."
  },
  {
    n: 2,
    title: "Written Entrance Test",
    desc: "Appear for the PhD entrance examination covering research aptitude and domain knowledge in your chosen area. GATE-qualified candidates may be exempt."
  },
  {
    n: 3,
    title: "Interview & Research Proposal",
    desc: "Shortlisted candidates are called for a research proposal presentation and an interview with the Doctoral Committee of the concerned department."
  },
  {
    n: 4,
    title: "Supervisor Allotment",
    desc: "Matched with a faculty supervisor based on your research interest, the supervisor's availability, and open positions in the department."
  },
  {
    n: 5,
    title: "Course Work & Registration",
    desc: "Complete mandatory course work in the first year, clear qualifying exams, and register as a doctoral scholar. Research officially begins post-registration."
  }
];
const MBA_SPECS = [
  {
    id: "gm",
    name: "General Management",
    desc: "A holistic business management curriculum covering Finance, Marketing, HR, Operations, and Strategy. Prepares graduates for corporate leadership and consulting.",
    highlights: [
      "Finance & Investment Management",
      "Strategic Marketing",
      "Human Resource Management",
      "Operations & Supply Chain",
      "Business Strategy & Entrepreneurship"
    ]
  },
  {
    id: "ba",
    name: "Business Analytics",
    desc: "Data-driven decision making, predictive modelling, and analytics tools for modern enterprises. Blends management education with advanced data science.",
    highlights: [
      "Data Analytics & Visualization",
      "Predictive Modelling & ML",
      "Business Intelligence Tools",
      "Decision Sciences",
      "Digital Transformation"
    ]
  }
];
const MBA_PROCESS = [
  {
    n: 1,
    title: "National Entrance Score",
    desc: "Obtain a valid score in CAT / MAT / CMAT / XAT / MH-MBA CET. Scores from the current or immediately preceding year are accepted."
  },
  {
    n: 2,
    title: "Online Application",
    desc: "Fill the DMS MBA application form with academic details, work experience (if any), and test scores. Upload all required documents."
  },
  {
    n: 3,
    title: "Group Discussion",
    desc: "Participate in a structured group discussion to assess communication skills, leadership potential, and business awareness."
  },
  {
    n: 4,
    title: "Personal Interview",
    desc: "Face a panel interview with DMS faculty evaluating motivation, analytical aptitude, communication, and long-term career goals."
  },
  {
    n: 5,
    title: "Merit List & Enrollment",
    desc: "Final selection based on a composite score: 50% entrance test + 25% GD performance + 25% PI score. Offer letters issued online."
  }
];
const PG_DIPLOMA_PROGRAMS = [
  {
    id: "pgac",
    name: "PG Diploma in Advanced Computing",
    dept: "Computer Engineering",
    duration: "1 Year"
  },
  {
    id: "pges",
    name: "PG Diploma in Embedded Systems",
    dept: "Electronics & Telecom",
    duration: "1 Year"
  },
  {
    id: "pgsd",
    name: "PG Diploma in Structural Design",
    dept: "Civil Engineering",
    duration: "1 Year"
  },
  {
    id: "pgia",
    name: "PG Diploma in Industrial Automation",
    dept: "Instrumentation & Control",
    duration: "1 Year"
  },
  {
    id: "pgba",
    name: "PG Diploma in Business Analytics",
    dept: "Management Studies",
    duration: "1 Year"
  },
  {
    id: "pgme",
    name: "PG Diploma in Manufacturing Excellence",
    dept: "Mechanical Engineering",
    duration: "1 Year"
  }
];
const PG_DIPLOMA_PROCESS = [
  {
    n: 1,
    title: "Educational Qualification Check",
    desc: "B.E. / B.Tech in a relevant engineering discipline or equivalent degree with a minimum of 50% aggregate marks."
  },
  {
    n: 2,
    title: "Application Submission",
    desc: "Apply through the institute portal or the respective department during the announced application window (typically September–October)."
  },
  {
    n: 3,
    title: "Merit-Based Selection",
    desc: "Shortlisting based on academic performance and/or a written test or interview conducted by the department."
  },
  {
    n: 4,
    title: "Confirmation & Fee Payment",
    desc: "Confirm your admission by paying the programme fees within the stipulated deadline. Classes begin in November."
  }
];
const FEE_STRUCTURE = [
  {
    id: "btech-open",
    program: "B.Tech",
    category: "Open / General",
    tuitionFee: "₹1,37,500",
    otherFees: "₹15,000",
    totalAnnual: "₹1,52,500"
  },
  {
    id: "btech-obc",
    program: "B.Tech",
    category: "OBC / EWS",
    tuitionFee: "₹68,750",
    otherFees: "₹15,000",
    totalAnnual: "₹83,750"
  },
  {
    id: "btech-sc",
    program: "B.Tech",
    category: "SC / ST / VJNT",
    tuitionFee: "Nil",
    otherFees: "₹15,000",
    totalAnnual: "₹15,000"
  },
  {
    id: "mtech",
    program: "M.Tech",
    category: "All Categories",
    tuitionFee: "₹70,000",
    otherFees: "₹12,000",
    totalAnnual: "₹82,000"
  },
  {
    id: "mba-open",
    program: "MBA",
    category: "Open / General",
    tuitionFee: "₹1,25,000",
    otherFees: "₹15,000",
    totalAnnual: "₹1,40,000"
  },
  {
    id: "mba-obc",
    program: "MBA",
    category: "OBC / EWS",
    tuitionFee: "₹62,500",
    otherFees: "₹15,000",
    totalAnnual: "₹77,500"
  },
  {
    id: "phd",
    program: "Ph.D. (Full Time)",
    category: "All Categories",
    tuitionFee: "₹30,000",
    otherFees: "₹10,000",
    totalAnnual: "₹40,000"
  },
  {
    id: "pgdip",
    program: "PG Diploma",
    category: "All Categories",
    tuitionFee: "₹45,000",
    otherFees: "₹8,000",
    totalAnnual: "₹53,000"
  }
];
const SCHOLARSHIPS = [
  {
    id: "s1",
    name: "EBC Scholarship",
    eligibility: "Family income below ₹8 lakh per annum",
    benefit: "50% tuition fee waiver for eligible candidates"
  },
  {
    id: "s2",
    name: "Govt. of Maharashtra Merit Scholarship",
    eligibility: "Top 10% students based on academic merit",
    benefit: "Full tuition fee waiver for the academic year"
  },
  {
    id: "s3",
    name: "SC / ST Concession",
    eligibility: "SC, ST, VJNT, SBC category students",
    benefit: "Full tuition fee exemption as per GoM norms"
  },
  {
    id: "s4",
    name: "Institute Merit Scholarship",
    eligibility: "Top performers in each programme per year",
    benefit: "Cash award + recognition at convocation"
  }
];
const FEE_NOTES = [
  "Fees are subject to revision by the Shikshon Shulka Samiti each academic year",
  "A one-time Development Fee of ₹10,000 is applicable at the time of first admission",
  "Hostel and mess fees are charged separately and vary by accommodation type",
  "Refund policy is governed by UGC guidelines; refer to the official refund schedule",
  "Government scholarship disbursement may vary; students are required to pay fees and claim reimbursement"
];
const ADMISSION_STATS = [
  { label: "Established", value: "1854", icon: "🏛️" },
  { label: "Accreditation", value: "NAAC A++", icon: "🏆" },
  { label: "B.Tech Programs", value: "8", icon: "📚" },
  { label: "Total Intake", value: "540+", icon: "🎓" },
  { label: "PhD Departments", value: "9", icon: "🔬" },
  { label: "Placement Rate", value: "95%+", icon: "💼" }
];
const COBALT = "#1A237E";
const DEEP_BLUE = "#0F3399";
const MIDNIGHT = "#081E5C";
const GOLD = "#E8C42A";
const TABS = [
  { id: "undergraduate", label: "Undergraduate (B.Tech)" },
  { id: "postgraduate", label: "Post Graduate (M.Tech)" },
  { id: "phd", label: "Ph.D." },
  { id: "mba", label: "MBA" },
  { id: "pg-diploma", label: "PG Diploma" },
  { id: "fee-structure", label: "Fee Structure" }
];
function useScrollReveal(threshold = 0.08) {
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
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}
function ProcessStepItem({ n, title, desc }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 items-start", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center flex-shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "w-11 h-11 rounded-full flex items-center justify-center font-inter font-bold text-sm text-white shadow-lg flex-shrink-0 relative z-10",
          style: {
            background: `linear-gradient(135deg, ${COBALT}, ${DEEP_BLUE})`
          },
          children: n
        }
      ),
      n < 5 && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "w-0.5 flex-1 mt-1",
          style: {
            background: `linear-gradient(to bottom, ${COBALT}40, transparent)`,
            minHeight: "2.5rem"
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-7 min-w-0 flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h4",
        {
          className: "font-baskerville font-bold text-base mb-1.5 leading-snug",
          style: { color: DEEP_BLUE },
          children: title
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-body text-sm", style: { color: "#5a6272" }, children: desc })
    ] })
  ] });
}
function SectionTag({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: "inline-flex items-center gap-1.5 typo-section-label mb-3",
      style: { color: COBALT },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-5 h-px", style: { backgroundColor: COBALT } }),
        children
      ]
    }
  );
}
function SectionHero({
  eyebrow,
  title,
  subtitle
}) {
  const { ref, visible } = useScrollReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref,
      className: "mb-12 transition-all duration-700",
      style: {
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTag, { children: eyebrow }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h2",
          {
            className: "typo-section-heading mb-4 leading-tight",
            style: { color: DEEP_BLUE },
            children: title
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "block h-px w-12 mb-4",
            style: { backgroundColor: COBALT }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-body-lg max-w-2xl", style: { color: "#5a6272" }, children: subtitle })
      ]
    }
  );
}
function StatCard({
  icon,
  label,
  value,
  delay = 0
}) {
  const { ref, visible } = useScrollReveal(0.1);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref,
      className: "rounded-2xl p-5 flex flex-col gap-2 transition-all duration-500 hover:shadow-lg cursor-default",
      style: {
        border: `1.5px solid ${COBALT}18`,
        background: "linear-gradient(135deg, #f5f8ff, #fff)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transitionDelay: `${delay}ms`
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-section-label", style: { color: COBALT }, children: label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-stat-number", style: { color: DEEP_BLUE }, children: value })
      ]
    }
  );
}
function ApplyButton({
  href = "https://admissions.coeptech.ac.in",
  label = "Apply Now"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "a",
    {
      href,
      target: "_blank",
      rel: "noreferrer",
      className: "inline-flex items-center gap-2 px-8 py-3.5 rounded-lg typo-btn transition-all duration-200 hover:scale-105 hover:shadow-lg",
      style: {
        backgroundColor: GOLD,
        color: "#1a1a1a",
        boxShadow: "0 4px 18px rgba(232, 196, 42, 0.3)"
      },
      "data-ocid": "admissions.apply_button",
      children: [
        label,
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg", children: "→" })
      ]
    }
  );
}
function InfoCard({
  children,
  accent = false
}) {
  const { ref, visible } = useScrollReveal(0.05);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      className: "rounded-2xl p-7 h-full transition-all duration-700",
      style: {
        border: `1.5px solid ${accent ? `${COBALT}35` : `${COBALT}18`}`,
        background: accent ? `linear-gradient(135deg, ${COBALT}07, ${COBALT}14)` : "#fff",
        boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)"
      },
      children
    }
  );
}
function UndergraduateContent() {
  const eligibilityItems = [
    "Passed HSC (10+2) with Physics, Chemistry & Mathematics",
    "Minimum 45% aggregate (40% for reserved categories)",
    "Valid MHT-CET score for State quota seats",
    "Valid JEE Main score for All India quota seats"
  ];
  const importantDates = [
    { phase: "MHT-CET Exam", period: "April–May 2025" },
    { phase: "CAP Round Registration", period: "June–July 2025" },
    { phase: "Reporting to Institute", period: "August 2025" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "admissions.undergraduate.section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHero,
      {
        eyebrow: "B.Tech Admissions",
        title: "Undergraduate Engineering",
        subtitle: "COEP Technological University offers 8 B.Tech programmes across engineering disciplines with over 540 seats annually. NAAC A++ accredited and ranked among India's top 30 engineering institutions."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: "🏛️", label: "Established", value: "1854", delay: 0 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: "🏆", label: "Accreditation", value: "NAAC A++", delay: 80 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: "📚", label: "B.Tech Programmes", value: "8", delay: 160 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: "🎓", label: "Annual Intake", value: "540+", delay: 240 })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-10 mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(InfoCard, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h3",
          {
            className: "typo-card-title text-2xl mb-6",
            style: { color: DEEP_BLUE },
            children: "Programmes Offered"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-0", children: BTECH_PROGRAMS.map((p, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center justify-between py-3 px-4 rounded-xl transition-colors hover:bg-blue-50",
            style: {
              borderBottom: idx < BTECH_PROGRAMS.length - 1 ? `1px solid ${COBALT}10` : "none"
            },
            "data-ocid": `admissions.btech.program.${idx + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "w-2 h-2 rounded-full flex-shrink-0",
                    style: { backgroundColor: COBALT }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-sm font-semibold leading-snug",
                    style: {
                      color: "#2d3748",
                      fontFamily: "Source Sans 3, sans-serif"
                    },
                    children: p.name
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: "text-xs px-2.5 py-1 rounded-full font-bold flex-shrink-0 ml-2",
                  style: { background: `${COBALT}14`, color: COBALT },
                  children: [
                    p.intake,
                    " seats"
                  ]
                }
              )
            ]
          },
          p.id
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(InfoCard, { accent: true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h3",
          {
            className: "typo-card-title text-2xl mb-6",
            style: { color: DEEP_BLUE },
            children: "Admission Process"
          }
        ),
        BTECH_PROCESS.map((step) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProcessStepItem, { ...step }, step.n))
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "rounded-2xl p-7 mb-10",
        style: {
          background: `linear-gradient(135deg, ${MIDNIGHT}f5, ${DEEP_BLUE}f0)`,
          boxShadow: "0 8px 32px rgba(8, 30, 92, 0.2)"
        },
        "data-ocid": "admissions.btech.eligibility",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row gap-6 items-start md:items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-[0.65rem] font-bold uppercase tracking-widest mb-2 opacity-70 text-white",
                style: { fontFamily: "Source Sans 3, sans-serif" },
                children: "Eligibility Criteria"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h4",
              {
                className: "text-xl font-bold text-white mb-3",
                style: { fontFamily: "var(--font-heading)" },
                children: "Who Can Apply for B.Tech?"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5", children: eligibilityItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "li",
              {
                className: "flex items-start gap-2 text-sm text-white/80",
                style: { fontFamily: "Source Sans 3, sans-serif" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "mt-0.5 flex-shrink-0",
                      style: { color: COBALT },
                      children: "✓"
                    }
                  ),
                  item
                ]
              },
              item
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ApplyButton,
            {
              href: "https://cetcell.mahacet.org/",
              label: "Apply via CET Cell"
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-2xl p-7",
        style: {
          border: "1.5px solid rgba(26, 35, 126, 0.2)",
          background: "rgba(26, 35, 126, 0.03)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-4", style: { color: DEEP_BLUE }, children: "Important Dates (Indicative 2025–26)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: importantDates.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "text-xs font-bold uppercase tracking-wide",
                style: {
                  color: COBALT,
                  fontFamily: "Source Sans 3, sans-serif"
                },
                children: d.phase
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "text-base font-semibold",
                style: {
                  color: DEEP_BLUE,
                  fontFamily: "var(--font-heading)"
                },
                children: d.period
              }
            )
          ] }, d.phase)) })
        ]
      }
    )
  ] });
}
function PostgraduateContent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "admissions.postgraduate.section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHero,
      {
        eyebrow: "M.Tech Admissions",
        title: "Post Graduate Engineering",
        subtitle: "Two-year research-oriented postgraduate programmes across all engineering departments at COEP. Admissions based on GATE score. GATE scholars receive a monthly stipend of ₹12,400."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: "📐", label: "Duration", value: "2 Years", delay: 0 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: "🔬", label: "Departments", value: "9 Depts", delay: 80 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          icon: "🎯",
          label: "Admission Via",
          value: "GATE Score",
          delay: 160
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          icon: "💡",
          label: "GATE Stipend",
          value: "₹12,400/mo",
          delay: 240
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-10 mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(InfoCard, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-6", style: { color: DEEP_BLUE }, children: "M.Tech Specialisations" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-0", children: MTECH_PROGRAMS.map((p, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "py-3 px-4 rounded-xl hover:bg-blue-50 transition-colors",
            style: {
              borderBottom: idx < MTECH_PROGRAMS.length - 1 ? `1px solid ${COBALT}10` : "none"
            },
            "data-ocid": `admissions.mtech.program.${idx + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "block text-sm font-bold",
                  style: {
                    color: DEEP_BLUE,
                    fontFamily: "Source Sans 3, sans-serif"
                  },
                  children: p.spec
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs", style: { color: "#7a8899" }, children: [
                p.dept,
                " · ",
                p.intake,
                " seats"
              ] })
            ]
          },
          p.id
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(InfoCard, { accent: true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-6", style: { color: DEEP_BLUE }, children: "Admission Process" }),
        MTECH_PROCESS.map((step) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProcessStepItem, { ...step }, step.n)),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "mt-2 rounded-xl p-5",
            style: {
              background: `${COBALT}10`,
              border: `1.5px solid ${COBALT}25`
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h5",
                {
                  className: "font-bold mb-3 text-sm uppercase tracking-wide",
                  style: {
                    color: DEEP_BLUE,
                    fontFamily: "Source Sans 3, sans-serif"
                  },
                  children: "Eligibility Checklist"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5", children: MTECH_ELIGIBILITY.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "li",
                {
                  className: "flex items-start gap-2 text-sm",
                  style: {
                    color: "#5a6272",
                    fontFamily: "Source Sans 3, sans-serif"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "mt-0.5 flex-shrink-0",
                        style: { color: COBALT },
                        children: "✓"
                      }
                    ),
                    item
                  ]
                },
                item
              )) })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-2xl p-7 flex flex-col md:flex-row items-start md:items-center gap-6",
        style: {
          background: `linear-gradient(135deg, ${MIDNIGHT}f5, ${DEEP_BLUE}f0)`,
          boxShadow: "0 8px 32px rgba(8, 30, 92, 0.2)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-xs font-bold uppercase tracking-widest mb-1 text-white/60",
                style: { fontFamily: "Source Sans 3, sans-serif" },
                children: "Apply Now"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h4",
              {
                className: "text-xl font-bold text-white mb-1",
                style: { fontFamily: "var(--font-heading)" },
                children: "M.Tech Admissions 2025–26"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-sm text-white/70",
                style: { fontFamily: "Source Sans 3, sans-serif" },
                children: "Applications open via DTE Maharashtra portal. GATE score is mandatory."
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ApplyButton,
            {
              href: "https://dtemaharashtra.gov.in/",
              label: "Apply via DTE Maharashtra"
            }
          )
        ]
      }
    )
  ] });
}
function PhDContent() {
  const phdEligibility = [
    "M.Tech / M.E. / M.S. or equivalent with 55% marks (50% for reserved categories)",
    "M.Sc. / M.A. in relevant discipline for interdisciplinary research",
    "GATE / UGC NET / CSIR NET qualified candidates preferred",
    "Industry professionals with 5+ years experience may apply under sponsored category"
  ];
  const windows = [
    {
      season: "July Intake",
      period: "Applications: March–May",
      intake: "Full-time & Part-time"
    },
    {
      season: "January Intake",
      period: "Applications: September–November",
      intake: "Full-time only"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "admissions.phd.section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHero,
      {
        eyebrow: "Doctoral Research",
        title: "Ph.D. Admissions",
        subtitle: "Pursue cutting-edge doctoral research at India's oldest technology institution. With 9 departments offering research positions, COEP is home to internationally recognised faculty and state-of-the-art facilities."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: "🔭", label: "Duration", value: "3–5 Years", delay: 0 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: "🏛️", label: "Research Depts", value: "9", delay: 80 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: "💰", label: "Fellowship", value: "CSIR / UGC", delay: 160 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          icon: "📄",
          label: "Publications / Yr",
          value: "500+",
          delay: 240
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-10 mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(InfoCard, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-6", style: { color: DEEP_BLUE }, children: "Research Departments" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: PHD_AREAS.map((area, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-xl p-4 hover:shadow-sm transition-all",
            style: {
              background: idx % 2 === 0 ? `${COBALT}06` : "#fff",
              border: `1px solid ${COBALT}12`
            },
            "data-ocid": `admissions.phd.area.${idx + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "block text-sm font-bold mb-0.5",
                  style: {
                    color: DEEP_BLUE,
                    fontFamily: "var(--font-heading)"
                  },
                  children: area.dept
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-xs leading-relaxed",
                  style: {
                    color: "#7a8899",
                    fontFamily: "Source Sans 3, sans-serif"
                  },
                  children: area.description
                }
              )
            ]
          },
          area.id
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(InfoCard, { accent: true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-6", style: { color: DEEP_BLUE }, children: "Admission Process" }),
        PHD_PROCESS.map((step) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProcessStepItem, { ...step }, step.n))
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-2xl p-7 mb-8 grid md:grid-cols-2 gap-8",
        style: { background: "#f7f9ff", border: `1.5px solid ${COBALT}18` },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold mb-4", style: { color: DEEP_BLUE }, children: "Eligibility Criteria" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: phdEligibility.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "li",
              {
                className: "flex items-start gap-2.5 text-sm",
                style: {
                  color: "#5a6272",
                  fontFamily: "Source Sans 3, sans-serif"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "mt-0.5 flex-shrink-0",
                      style: { color: COBALT },
                      children: "✓"
                    }
                  ),
                  item
                ]
              },
              item
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold mb-4", style: { color: DEEP_BLUE }, children: "Admission Windows" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: windows.map((w) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "rounded-xl p-4",
                style: {
                  background: `${COBALT}10`,
                  border: `1px solid ${COBALT}20`
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-sm font-bold",
                      style: {
                        color: DEEP_BLUE,
                        fontFamily: "var(--font-heading)"
                      },
                      children: w.season
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-xs mt-0.5",
                      style: {
                        color: "#5a6272",
                        fontFamily: "Source Sans 3, sans-serif"
                      },
                      children: w.period
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-xs mt-0.5",
                      style: {
                        color: COBALT,
                        fontFamily: "Source Sans 3, sans-serif"
                      },
                      children: w.intake
                    }
                  )
                ]
              },
              w.season
            )) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ApplyButton,
      {
        href: "https://www.coeptech.ac.in/admissions/phd",
        label: "Apply for Ph.D."
      }
    )
  ] });
}
function MBASpecCard({
  spec,
  idx
}) {
  const { ref, visible } = useScrollReveal(0.05);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref,
      className: "rounded-2xl p-8 transition-all duration-700 hover:shadow-xl",
      style: {
        background: idx === 0 ? `linear-gradient(135deg, ${MIDNIGHT}f8, ${DEEP_BLUE}f0)` : `linear-gradient(135deg, ${COBALT}f5, ${MIDNIGHT}f0)`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transitionDelay: `${idx * 120}ms`
      },
      "data-ocid": `admissions.mba.spec.${idx + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "text-[0.62rem] font-bold uppercase tracking-widest text-white/50 block mb-1",
                style: { fontFamily: "Source Sans 3, sans-serif" },
                children: "MBA Specialisation"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h3",
              {
                className: "text-2xl font-bold text-white",
                style: { fontFamily: "var(--font-heading)" },
                children: spec.name
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "px-3 py-1 rounded-full text-xs font-bold flex-shrink-0 ml-3",
              style: {
                background: GOLD,
                color: MIDNIGHT,
                fontFamily: "Source Sans 3, sans-serif"
              },
              children: "30 seats"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "text-sm text-white/75 mb-5 leading-relaxed",
            style: { fontFamily: "Source Sans 3, sans-serif" },
            children: spec.desc
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5", children: spec.highlights.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "li",
          {
            className: "flex items-center gap-2 text-xs text-white/70",
            style: { fontFamily: "Source Sans 3, sans-serif" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "rgba(255,255,255,0.6)" }, children: "◆" }),
              h
            ]
          },
          h
        )) })
      ]
    }
  );
}
function MBAContent() {
  const eligibilityItems = [
    "Any Bachelor's degree with minimum 50% aggregate marks",
    "Valid CAT / MAT / CMAT / XAT / MH-MBA CET score",
    "Work experience is an advantage, not mandatory"
  ];
  const programHighlights = [
    { label: "Duration", val: "2 Years (4 Semesters)" },
    { label: "Total Seats", val: "60 (AICTE Approved)" },
    { label: "Affiliation", val: "COEP Technological University" },
    { label: "Placement", val: "100% Placement Assistance" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "admissions.mba.section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHero,
      {
        eyebrow: "Management Studies",
        title: "MBA Admissions",
        subtitle: "The Department of Management Studies at COEP Technological University offers a flagship 2-year full-time MBA programme combining rigorous academics with industry immersion and strong placement outcomes."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: "📊", label: "Duration", value: "2 Years", delay: 0 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          icon: "🧩",
          label: "Specialisations",
          value: "2 Streams",
          delay: 80
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: "🎓", label: "Intake", value: "60 Seats", delay: 160 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: "💼", label: "Avg Package", value: "₹12 LPA", delay: 240 })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-6 mb-12", children: MBA_SPECS.map((s, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(MBASpecCard, { spec: s, idx }, s.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-10 mb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(InfoCard, { accent: true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-6", style: { color: DEEP_BLUE }, children: "Admission Process" }),
        MBA_PROCESS.map((step) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProcessStepItem, { ...step }, step.n))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(InfoCard, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-5", style: { color: DEEP_BLUE }, children: "Eligibility & Key Info" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "rounded-xl p-4",
              style: {
                background: `${COBALT}08`,
                border: `1px solid ${COBALT}20`
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-xs font-bold uppercase tracking-wide mb-2",
                    style: {
                      color: COBALT,
                      fontFamily: "Source Sans 3, sans-serif"
                    },
                    children: "Eligibility"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5", children: eligibilityItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "li",
                  {
                    className: "text-sm flex items-start gap-2",
                    style: {
                      color: "#5a6272",
                      fontFamily: "Source Sans 3, sans-serif"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: COBALT }, children: "✓" }),
                      " ",
                      item
                    ]
                  },
                  item
                )) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "rounded-xl p-4",
              style: {
                background: "rgba(26, 35, 126, 0.06)",
                border: "1px solid rgba(26, 35, 126, 0.2)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-xs font-bold uppercase tracking-wide mb-2",
                    style: {
                      color: COBALT,
                      fontFamily: "Source Sans 3, sans-serif"
                    },
                    children: "Programme Highlights"
                  }
                ),
                programHighlights.map((row, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex justify-between text-sm py-1.5",
                    style: {
                      borderBottom: i < programHighlights.length - 1 ? "1px solid rgba(26, 35, 126, 0.1)" : "none"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          style: {
                            color: "#6b7280",
                            fontFamily: "Source Sans 3, sans-serif"
                          },
                          children: row.label
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "font-semibold",
                          style: {
                            color: DEEP_BLUE,
                            fontFamily: "Source Sans 3, sans-serif"
                          },
                          children: row.val
                        }
                      )
                    ]
                  },
                  row.label
                ))
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ApplyButton,
      {
        href: "https://www.coeptech.ac.in/academics/schools/school-of-multidisciplinary-sciences-humanities-and-management-studies/department-of-management-studies/",
        label: "Apply for MBA"
      }
    )
  ] });
}
function PGDiplomaCard({
  program,
  idx
}) {
  const { ref, visible } = useScrollReveal(0.05);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref,
      className: "rounded-2xl p-6 transition-all duration-600 hover:shadow-lg hover:-translate-y-1",
      style: {
        border: `1.5px solid ${COBALT}18`,
        background: "#fff",
        boxShadow: "0 3px 16px rgba(0,0,0,0.05)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transitionDelay: `${idx * 80}ms`
      },
      "data-ocid": `admissions.pgdiploma.program.${idx + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-white font-bold text-sm",
            style: {
              background: `linear-gradient(135deg, ${COBALT}, ${DEEP_BLUE})`
            },
            children: idx + 1
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h4",
          {
            className: "font-bold text-base mb-1.5 leading-snug",
            style: { color: DEEP_BLUE },
            children: program.name
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "text-xs mb-2",
            style: { color: COBALT, fontFamily: "Source Sans 3, sans-serif" },
            children: program.dept
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "text-xs px-2.5 py-0.5 rounded-full font-semibold",
            style: { background: "rgba(26, 35, 126, 0.08)", color: COBALT },
            children: program.duration
          }
        )
      ]
    }
  );
}
function PGDiplomaContent() {
  const whyItems = [
    {
      icon: "🏫",
      title: "Industry-Aligned Curriculum",
      desc: "Curriculum co-designed with industry partners to ensure immediate job relevance and practical skills."
    },
    {
      icon: "👨‍🏫",
      title: "Expert Faculty",
      desc: "Taught by experienced COEP faculty alongside visiting industry experts and practitioners."
    },
    {
      icon: "🎓",
      title: "Lateral Entry to M.Tech",
      desc: "Eligible candidates can seek lateral entry into M.Tech programmes based on academic performance."
    },
    {
      icon: "💼",
      title: "Placement Support",
      desc: "Access to COEP's robust placement cell and alumni network for career opportunities."
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "admissions.pg-diploma.section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHero,
      {
        eyebrow: "PG Diploma Programmes",
        title: "Post Graduate Diplomas",
        subtitle: "Short-duration postgraduate diploma programmes designed for working professionals and fresh graduates seeking specialised technical skills with industry relevance."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-4 mb-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: "📜", label: "Duration", value: "1 Year", delay: 0 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: "🔧", label: "Mode", value: "Full / Part-Time", delay: 80 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: "🎯", label: "Focus", value: "Industry Skills", delay: 160 })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-6", style: { color: DEEP_BLUE }, children: "Available Programmes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5", children: PG_DIPLOMA_PROGRAMS.map((p, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(PGDiplomaCard, { program: p, idx }, p.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-10 mb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(InfoCard, { accent: true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-6", style: { color: DEEP_BLUE }, children: "Admission Process" }),
        PG_DIPLOMA_PROCESS.map((step) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProcessStepItem, { ...step }, step.n))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(InfoCard, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-5", style: { color: DEEP_BLUE }, children: "Why PG Diploma at COEP?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: whyItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl flex-shrink-0", children: item.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-sm font-bold mb-0.5",
                style: {
                  color: DEEP_BLUE,
                  fontFamily: "var(--font-heading)"
                },
                children: item.title
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-xs leading-relaxed",
                style: {
                  color: "#7a8899",
                  fontFamily: "Source Sans 3, sans-serif"
                },
                children: item.desc
              }
            )
          ] })
        ] }, item.title)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ApplyButton, { label: "Apply for PG Diploma" })
  ] });
}
function FeeStructureContent() {
  const { ref, visible } = useScrollReveal(0.05);
  const feeHeaders = [
    "Programme",
    "Category",
    "Tuition Fee",
    "Other Fees",
    "Total / Year"
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "admissions.fee-structure.section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHero,
      {
        eyebrow: "Fee Structure 2024–25",
        title: "Transparent Fee Information",
        subtitle: "Fees at COEP Technological University are approved by the State Government and are highly competitive for the quality of education delivered. Multiple scholarships and government concessions are available."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        ref,
        className: "rounded-2xl overflow-hidden mb-10 transition-all duration-700",
        style: {
          boxShadow: "0 6px 32px rgba(0,0,0,0.1)",
          border: `1.5px solid ${COBALT}18`,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "px-7 py-5",
              style: {
                background: `linear-gradient(135deg, ${MIDNIGHT}, ${DEEP_BLUE})`
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    className: "text-xl font-bold text-white",
                    style: { fontFamily: "var(--font-heading)" },
                    children: "Annual Fee Structure 2024–25"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-white/60 text-sm mt-1",
                    style: { fontFamily: "Source Sans 3, sans-serif" },
                    children: "All amounts in Indian Rupees (₹) per academic year"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { style: { background: `${COBALT}10` }, children: feeHeaders.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "th",
              {
                className: "text-left py-3 px-5 font-bold",
                style: {
                  color: DEEP_BLUE,
                  fontFamily: "Source Sans 3, sans-serif",
                  borderBottom: `2px solid ${COBALT}20`
                },
                children: h
              },
              h
            )) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: FEE_STRUCTURE.map((f, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "tr",
              {
                className: "hover:bg-blue-50 transition-colors",
                style: { background: idx % 2 === 0 ? "#fafbff" : "#fff" },
                "data-ocid": `admissions.fee.row.${idx + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "td",
                    {
                      className: "py-3.5 px-5 font-semibold",
                      style: {
                        color: DEEP_BLUE,
                        fontFamily: "Source Sans 3, sans-serif"
                      },
                      children: f.program
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "td",
                    {
                      className: "py-3.5 px-5",
                      style: {
                        color: "#6b7280",
                        fontFamily: "Source Sans 3, sans-serif"
                      },
                      children: f.category
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "td",
                    {
                      className: "py-3.5 px-5 tabular-nums",
                      style: { color: "#374151" },
                      children: f.tuitionFee
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "td",
                    {
                      className: "py-3.5 px-5 tabular-nums",
                      style: { color: "#374151" },
                      children: f.otherFees
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "td",
                    {
                      className: "py-3.5 px-5 tabular-nums font-bold",
                      style: { color: COBALT },
                      children: f.totalAnnual
                    }
                  )
                ]
              },
              f.id
            )) })
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-8 mb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(InfoCard, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-5", style: { color: DEEP_BLUE }, children: "Scholarships Available" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: SCHOLARSHIPS.map((s, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "rounded-xl p-4 hover:shadow-sm transition-all",
            style: {
              border: "1px solid rgba(26, 35, 126, 0.2)",
              background: "rgba(26, 35, 126, 0.04)"
            },
            "data-ocid": `admissions.scholarship.${idx + 1}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-xl flex-shrink-0",
                  style: { color: COBALT },
                  children: "★"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-bold text-sm mb-0.5",
                    style: {
                      color: DEEP_BLUE,
                      fontFamily: "var(--font-heading)"
                    },
                    children: s.name
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: "text-xs mb-1",
                    style: {
                      color: "#6b7280",
                      fontFamily: "Source Sans 3, sans-serif"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Eligibility:" }),
                      " ",
                      s.eligibility
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: "text-xs",
                    style: {
                      color: COBALT,
                      fontFamily: "Source Sans 3, sans-serif"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Benefit:" }),
                      " ",
                      s.benefit
                    ]
                  }
                )
              ] })
            ] })
          },
          s.id
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(InfoCard, { accent: true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-5", style: { color: DEEP_BLUE }, children: "Important Notes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: FEE_NOTES.map((note, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "li",
          {
            className: "flex items-start gap-3 text-sm leading-relaxed",
            style: {
              color: "#5a6272",
              fontFamily: "Source Sans 3, sans-serif"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "mt-0.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold",
                  style: { background: COBALT, minWidth: "1.25rem" },
                  children: i + 1
                }
              ),
              note
            ]
          },
          note
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "https://www.coeptech.ac.in/admissions/fee-structure",
            target: "_blank",
            rel: "noreferrer",
            className: "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm transition-all duration-200 hover:scale-105",
            style: {
              background: GOLD,
              color: "#1a1a1a",
              fontFamily: "Source Sans 3, sans-serif",
              boxShadow: "0 4px 18px rgba(232, 196, 42, 0.3)"
            },
            "data-ocid": "admissions.fee_structure_download",
            children: "Download Fee Structure PDF ↓"
          }
        ) })
      ] })
    ] })
  ] });
}
const CONTENT_MAP = {
  undergraduate: /* @__PURE__ */ jsxRuntimeExports.jsx(UndergraduateContent, {}),
  postgraduate: /* @__PURE__ */ jsxRuntimeExports.jsx(PostgraduateContent, {}),
  phd: /* @__PURE__ */ jsxRuntimeExports.jsx(PhDContent, {}),
  mba: /* @__PURE__ */ jsxRuntimeExports.jsx(MBAContent, {}),
  "pg-diploma": /* @__PURE__ */ jsxRuntimeExports.jsx(PGDiplomaContent, {}),
  "fee-structure": /* @__PURE__ */ jsxRuntimeExports.jsx(FeeStructureContent, {})
};
function WhyCOEP() {
  const { ref, visible } = useScrollReveal(0.05);
  const quickLinks = [
    {
      label: "Official Admissions Portal",
      href: "https://admissions.coeptech.ac.in"
    },
    { label: "MHT-CET Cell Maharashtra", href: "https://cetcell.mahacet.org/" },
    { label: "DTE Maharashtra", href: "https://dtemaharashtra.gov.in/" },
    { label: "NIRF Rankings", href: "https://www.nirfindia.org/" },
    {
      label: "Download Prospectus",
      href: "https://www.coeptech.ac.in/admissions/"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref,
      className: "transition-all duration-700 space-y-6",
      style: {
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-2xl overflow-hidden",
            style: {
              border: `1.5px solid ${COBALT}18`,
              boxShadow: "0 4px 24px rgba(0,0,0,0.07)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "px-6 py-5",
                  style: {
                    background: `linear-gradient(135deg, ${MIDNIGHT}, ${COBALT})`
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-section-label text-white/60 mb-1", children: "Why Choose" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-baskerville font-bold text-xl text-white", children: "COEP Technological University" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5 bg-white", children: ADMISSION_STATS.map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-center gap-4 py-3",
                  style: {
                    borderBottom: i < ADMISSION_STATS.length - 1 ? `1px solid ${COBALT}10` : "none"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl flex-shrink-0", children: stat.icon }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-baskerville font-bold text-sm leading-tight",
                          style: { color: DEEP_BLUE },
                          children: stat.value
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-stat-label", style: { color: "#9ca3af" }, children: stat.label })
                    ] })
                  ]
                },
                stat.label
              )) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-2xl p-5",
            style: {
              border: `1.5px solid ${COBALT}18`,
              background: "#fff",
              boxShadow: "0 3px 16px rgba(0,0,0,0.05)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h4",
                {
                  className: "font-baskerville font-bold text-base mb-4",
                  style: { color: DEEP_BLUE },
                  children: "Quick Links"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-0", children: quickLinks.map((link, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: link.href,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "flex items-center gap-2 py-2 text-sm transition-all hover:pl-2",
                  style: {
                    color: "#5a6272",
                    fontFamily: "Source Sans 3, sans-serif",
                    borderBottom: i < quickLinks.length - 1 ? `1px solid ${COBALT}08` : "none"
                  },
                  onMouseEnter: (e) => {
                    e.currentTarget.style.color = COBALT;
                  },
                  onMouseLeave: (e) => {
                    e.currentTarget.style.color = "#5a6272";
                  },
                  "data-ocid": `admissions.quick_link.${i + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: COBALT }, children: "›" }),
                    link.label
                  ]
                }
              ) }, link.label)) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-2xl p-5",
            style: {
              background: `linear-gradient(135deg, ${COBALT}0c, ${DEEP_BLUE}0a)`,
              border: `1.5px solid ${COBALT}20`
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h4",
                {
                  className: "font-baskerville font-bold text-base mb-1",
                  style: { color: DEEP_BLUE },
                  children: "Admissions Helpdesk"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-body text-xs mb-4", style: { color: "#7a8899" }, children: "For queries, contact the office between 9:30 AM – 5:30 PM on working days." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "tel:+912025507000",
                    className: "flex items-center gap-2 text-sm font-semibold hover:underline",
                    style: { color: COBALT, fontFamily: "Source Sans 3, sans-serif" },
                    "data-ocid": "admissions.helpdesk_phone",
                    children: "📞 +91-20-2550-7000"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "mailto:admissions@coeptech.ac.in",
                    className: "flex items-center gap-2 text-sm font-semibold hover:underline",
                    style: { color: COBALT, fontFamily: "Source Sans 3, sans-serif" },
                    "data-ocid": "admissions.helpdesk_email",
                    children: "✉ admissions@coeptech.ac.in"
                  }
                )
              ] })
            ]
          }
        )
      ]
    }
  );
}
function AdmissionsPage() {
  var _a;
  const params = useParams({ strict: false });
  const navigate = useNavigate();
  const activeTab = params.sectionId ?? "undergraduate";
  const [contentKey, setContentKey] = reactExports.useState(activeTab);
  const prevTab = reactExports.useRef(activeTab);
  reactExports.useEffect(() => {
    if (activeTab !== prevTab.current) {
      prevTab.current = activeTab;
      setContentKey(activeTab);
    }
  }, [activeTab]);
  function handleTabChange(tabId) {
    navigate({ to: "/admissions/$sectionId", params: { sectionId: tabId } });
    setContentKey(tabId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  const activeTabLabel = ((_a = TABS.find((t) => t.id === activeTab)) == null ? void 0 : _a.label) ?? "Admissions";
  const heroStats = [
    { label: "Est.", value: "1854" },
    { label: "Accreditation", value: "NAAC A++" },
    { label: "NIRF Rank", value: "Top 30" },
    { label: "Placement", value: "95%+" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background flex flex-col font-source", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "relative overflow-hidden",
        style: {
          background: `linear-gradient(135deg, ${MIDNIGHT} 0%, ${DEEP_BLUE} 50%, ${COBALT} 100%)`,
          minHeight: "260px"
        },
        "data-ocid": "admissions.hero",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute right-0 top-0 w-96 h-96 rounded-full opacity-[0.07] pointer-events-none",
              style: { background: GOLD, transform: "translate(35%, -40%)" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute left-0 bottom-0 w-64 h-64 rounded-full opacity-[0.06] pointer-events-none",
              style: { background: "#fff", transform: "translate(-30%, 40%)" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 pointer-events-none",
              style: {
                backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
                backgroundSize: "40px 40px"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative max-w-[1280px] mx-auto px-4 xl:px-8 pt-14 pb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "nav",
              {
                className: "flex items-center gap-2 text-xs mb-5 opacity-60 text-white",
                "aria-label": "Breadcrumb",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "hover:opacity-100 transition-opacity", children: "Home" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "›" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Admissions" }),
                  activeTab !== "undergraduate" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "›" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: activeTabLabel })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-section-label mb-4 opacity-60 text-white", children: "COEP Technological University · Pune" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h1",
              {
                className: "typo-hero-heading text-white mb-5 fade-in-down",
                style: { lineHeight: 1.05 },
                children: "Admissions"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-body-lg text-white/75 max-w-2xl fade-in-up", children: "Your journey to academic excellence begins here. Over 170 years of engineering tradition, NAAC A++ accreditation, and world-class research opportunities await you." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-8 mt-8", children: heroStats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex flex-col",
                "data-ocid": `admissions.hero_stat.${s.label}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "typo-stat-number text-white leading-none", children: s.value }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "typo-section-label text-white/50 mt-0.5", children: s.label })
                ]
              },
              s.label
            )) })
          ] }) })
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
        className: "flex-1 max-w-[1280px] mx-auto w-full px-4 xl:px-8 py-14",
        "data-ocid": "admissions.content_panel",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col xl:flex-row gap-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-w-0", children: CONTENT_MAP[activeTab] ?? CONTENT_MAP.undergraduate }, contentKey),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "aside",
            {
              className: "xl:w-[300px] flex-shrink-0",
              "data-ocid": "admissions.sidebar",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(WhyCOEP, {})
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  AdmissionsPage as default
};
