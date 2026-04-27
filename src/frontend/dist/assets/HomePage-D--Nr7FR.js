import { j as jsxRuntimeExports, r as reactExports, L as Link } from "./index-CWBSPPg1.js";
import { L as Layout } from "./Layout-BqPaQAtX.js";
import { B as Button } from "./button-kyND1Gfc.js";
import { g as getCampusImageFallback, a as getCampusImageUrl, b as getResearchImageFallback, c as getResearchImageUrl, d as getEventImageUrl, e as getEventImageFallback } from "./generatedImages-CQJnp3HI.js";
import { C as ChevronDown } from "./Header-D5iK_n6Q.js";
import { C as ChevronRight } from "./chevron-right-CGGygREL.js";
import { C as ChevronLeft } from "./chevron-left-DHJqGKal.js";
import { E as ExternalLink } from "./external-link-Bvj2D62G.js";
import "./utils-CwJNFt5C.js";
import "./x-Bs45HD9q.js";
function useScrollReveal(threshold = 0.12) {
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
const ANNOUNCEMENTS = [
  "Admissions 2024-25 Open for B.Tech, M.Tech, MBA and PhD Programs — Apply Now!",
  "COEP Tech ranked in NIRF Top 100 Engineering Colleges across India",
  "Research Innovation Hub: New Incubation Center inaugurated at Bhau Institute",
  "International Collaborations: MOUs signed with 15+ global universities",
  "Placements 2024: 95%+ placement rate with ₹87 LPA highest package",
  "ZEST 2024 — Annual Technical Festival Registration Now Open",
  "Dr. Sunil Bhirud appointed Vice Chancellor of COEP Technological University",
  "M.Tech in Automotive Systems for Working Professionals — 3rd batch commencing August 2026",
  "98th Edition of Regatta: Live Streaming available — March 22, 2026",
  "Two-Day Workshop: Fundamentals of Statistics & Machine Learning for Researchers"
];
const EVENTS = [
  {
    title: "ZEST '26 — Annual Technical Festival",
    date: "Jan 23–25, 2026",
    description: "COEP Tech's flagship technical extravaganza featuring robotics, hackathons, and innovation challenges drawing participants from 200+ colleges.",
    category: "Festival",
    gradient: "linear-gradient(135deg, #1648C8 0%, #0F3499 100%)"
  },
  {
    title: "98th Regatta Rowing Championships",
    date: "March 22, 2026",
    description: "Witness the spectacular 98th edition of COEP's legendary Regatta on the Mula river — Asia's oldest collegiate rowing event.",
    category: "Sports",
    gradient: "linear-gradient(135deg, #0F3499 0%, #081E5C 100%)"
  },
  {
    title: "Impressions — Cultural Fest",
    date: "February 14–16, 2026",
    description: "Annual cultural festival celebrating music, dance, drama and fine arts with performances by renowned national artists.",
    category: "Culture",
    gradient: "linear-gradient(135deg, #C9A84C 0%, #E8C42A 100%)"
  },
  {
    title: "Industry Connect Summit 2026",
    date: "April 10, 2026",
    description: "Annual conclave bringing industry leaders and COEP faculty together for panel discussions on emerging technology trends.",
    category: "Academic",
    gradient: "linear-gradient(135deg, #1648C8 0%, #0F3499 100%)"
  },
  {
    title: "Research Paper Presentation Day",
    date: "March 28, 2026",
    description: "Showcase your research to faculty, industry experts, and peers. Best papers win publication support and cash awards.",
    category: "Research",
    gradient: "linear-gradient(135deg, #0F3499 0%, #1648C8 100%)"
  },
  {
    title: "VIVEKMALA '26",
    date: "April 5–6, 2026",
    description: "From Vision to Victory — inter-college management and entrepreneurship conclave with case competitions and guest speakers.",
    category: "Management",
    gradient: "linear-gradient(135deg, #081E5C 0%, #0F3499 100%)"
  }
];
const NOTICES = [
  {
    title: "Examination Schedule 2024–25",
    date: "Issued: Dec 10, 2025",
    description: "End semester examinations for all UG and PG programs. Download hall tickets and report to exam halls 30 minutes early.",
    tag: "Examination",
    gradient: "linear-gradient(135deg, #1648C8 0%, #0F3499 100%)"
  },
  {
    title: "Scholarship Application Deadline",
    date: "Last date: Jan 15, 2026",
    description: "Applications open for Government of Maharashtra merit and means-based scholarships. Submit required documents to the scholarship office.",
    tag: "Scholarship",
    gradient: "linear-gradient(135deg, #C9A84C 0%, #E8C42A 100%)"
  },
  {
    title: "Fee Payment — Last Date Notice",
    date: "Due: Jan 31, 2026",
    description: "Semester fee payment deadline for all enrolled students. Late submissions attract a penalty of ₹500 per day. Pay via SBI portal.",
    tag: "Finance",
    gradient: "linear-gradient(135deg, #0F3499 0%, #081E5C 100%)"
  },
  {
    title: "Academic Calendar 2025–26 Released",
    date: "Published: Nov 1, 2025",
    description: "The official academic calendar for AY 2025–26 is now available. Review semester dates, holiday list, and examination windows.",
    tag: "Academic",
    gradient: "linear-gradient(135deg, #1648C8 0%, #0F3499 100%)"
  },
  {
    title: "Holiday List 2024–25",
    date: "Updated: Jan 2025",
    description: "List of public holidays and university holidays for the academic year 2024–25 as approved by the Board of Governance.",
    tag: "General",
    gradient: "linear-gradient(135deg, #0F3499 0%, #1648C8 100%)"
  },
  {
    title: "PhD Viva-Voce Schedule",
    date: "February 2026",
    description: "Open defense schedule for all registered PhD scholars for the February 2026 cycle. Candidates should contact their guides.",
    tag: "PhD",
    gradient: "linear-gradient(135deg, #081E5C 0%, #0F3499 100%)"
  }
];
const NEWS_ALL = [
  {
    num: 1,
    title: "98th Edition of Regatta — Live Streaming",
    date: "March 22, 2026",
    excerpt: "Watch the iconic rowing championship live. COEP's Regatta is one of the oldest and largest inter-collegiate rowing events in Asia."
  },
  {
    num: 2,
    title: "VIVEKMALA '26: From Vision to Victory",
    date: "April 5, 2026",
    excerpt: "COEP Tech's annual fest brings together the best minds from across the country for two days of competition, creativity, and celebration."
  },
  {
    num: 3,
    title: "CAS Applications — Deadline March 23",
    date: "March 23, 2026",
    excerpt: "Students are reminded to submit their CAS applications before the deadline. Contact the Academic Section for assistance."
  },
  {
    num: 4,
    title: "Alumnus Bharat Gite Represents COEP at WEF 2026",
    date: "February 2026",
    excerpt: "COEP Tech alumnus and Founder of Taural India Pvt Ltd, Bharat Gite, represented COEP at the World Economic Forum 2026 in Davos."
  },
  {
    num: 5,
    title: "COEP BoG Chairman Honoured with CEPM Fellowship",
    date: "January 2026",
    excerpt: "Mr. Vinayak Pai, Chairman of the Board of Governance, was honoured with an Honorary CEPM Fellowship."
  },
  {
    num: 6,
    title: "ZEST '26 — Annual Sports Festival",
    date: "January 23–25, 2026",
    excerpt: "COEP Tech proudly presents ZEST '26, celebrating competitive spirit, teamwork, and excellence across multiple sports disciplines."
  },
  {
    num: 7,
    title: "Catalyst for Change: IUPAC Global Women's Breakfast",
    date: "February 10, 2026",
    excerpt: "COEP Tech hosted the IUPAC Global Women's Breakfast event, celebrating women in science and engineering."
  },
  {
    num: 8,
    title: "Expert Talk: AI in the Real World",
    date: "February 2026",
    excerpt: "Leading industry experts shared insights on practical AI applications in manufacturing, healthcare, and smart infrastructure."
  }
];
const STAT_DEFS = [
  {
    target: 1854,
    startNear: true,
    label: "Year Established",
    description: "One of Asia's oldest engineering institutions, founded in 1854"
  },
  {
    suffix: "+",
    target: 15e3,
    label: "Students Enrolled",
    description: "Vibrant academic community across UG, PG, and doctoral programs"
  },
  {
    suffix: "%+",
    target: 95,
    label: "Placement Rate",
    description: "Consistent placement excellence with top global and Indian companies"
  },
  {
    suffix: "+",
    target: 500,
    label: "Research Publications",
    description: "Annual research output across engineering, technology, and management"
  },
  {
    suffix: "+",
    target: 5e4,
    label: "Alumni Network",
    description: "Global alumni shaping industries across 40+ countries worldwide"
  },
  {
    prefix: "₹",
    suffix: "Cr+",
    target: 200,
    label: "Research Grants",
    description: "Government and industry-funded research projects driving innovation"
  },
  {
    suffix: "+",
    target: 312,
    label: "PhD Scholars",
    description: "Active doctoral researchers pursuing cutting-edge academic research"
  }
];
const RESEARCH_PAPERS = [
  {
    title: "Smart Manufacturing using IoT and Machine Learning",
    authors: "Dr. M. Nandgaonkar et al.",
    journal: "IEEE Transactions on Industrial Informatics",
    year: 2023,
    abstract: "A comprehensive framework integrating IoT sensors with ML models for real-time defect detection and predictive maintenance in precision manufacturing.",
    url: "https://ieeexplore.ieee.org/"
  },
  {
    title: "Augmented Reality in Engineering Education",
    authors: "Dr. Y. Haribhakta",
    journal: "Springer Education Sciences",
    year: 2023,
    abstract: "Novel AR-based pedagogy for structural engineering courses demonstrating 40% improvement in spatial understanding and concept retention.",
    url: "https://link.springer.com/"
  },
  {
    title: "Sustainable Urban Planning with AI",
    authors: "Prof. R. Joshi",
    journal: "Elsevier Cities Journal",
    year: 2022,
    abstract: "Multi-objective optimization algorithm for urban land-use planning balancing density, green space, and infrastructure costs in Indian metros.",
    url: "https://www.sciencedirect.com/"
  },
  {
    title: "Blockchain for Supply Chain Transparency",
    authors: "Dr. A. Kulkarni",
    journal: "ACM Computing Surveys",
    year: 2023,
    abstract: "Decentralized ledger architecture enabling end-to-end traceability in pharmaceutical supply chains, reducing counterfeit risk by 85%.",
    url: "https://dl.acm.org/"
  },
  {
    title: "Deep Learning for Medical Image Analysis",
    authors: "Dr. S. Meshram",
    journal: "Nature Machine Intelligence",
    year: 2022,
    abstract: "U-Net variant achieving 97.3% accuracy in early-stage tumor detection across multi-modal MRI datasets from tertiary care hospitals.",
    url: "https://www.nature.com/"
  },
  {
    title: "Renewable Energy Optimization",
    authors: "Dr. P. Kadu",
    journal: "IEEE Energy Conversion",
    year: 2023,
    abstract: "Hybrid solar-wind-storage microgrid control strategy reducing energy cost by 32% while maintaining 99.2% power reliability in rural deployments.",
    url: "https://ieeexplore.ieee.org/"
  }
];
const TIMELINE_PREVIEW = [
  {
    year: "1854",
    title: "Foundation — Poona Civil Engineering College",
    description: "Founded by the British under Col. Francis Oliphant as Poona Civil Engineering College, one of the first engineering institutions in Asia.",
    color: "#1648C8"
  },
  {
    year: "1911",
    title: "Renamed — College of Engineering, Pune",
    description: "Re-designated as the College of Engineering, Pune (COEP), marking a new era of expanded programs and modernized infrastructure.",
    color: "#0F3499"
  },
  {
    year: "1947",
    title: "Post-Independence Expansion",
    description: "Following Indian independence, COEP expanded rapidly under the Maharashtra Government, becoming a premier institution for the nation's engineering workforce.",
    color: "#1648C8"
  },
  {
    year: "2022",
    title: "Elevated to Autonomous University Status",
    description: "Elevated to COEP Technological University — a Unitary Public University of the Government of Maharashtra, with full academic and administrative autonomy.",
    color: "#1648C8"
  }
];
const LIFE_IMAGES = [
  {
    label: "Historic Campus",
    gradient: "linear-gradient(135deg, #1648C8 20%, #0F3499 100%)",
    size: "large"
  },
  {
    label: "Sports & Athletics",
    gradient: "linear-gradient(135deg, #0F3499 0%, #081E5C 100%)",
    size: "small"
  },
  {
    label: "Cultural Fests",
    gradient: "linear-gradient(135deg, #C9A84C 0%, #E8C42A 100%)",
    size: "small"
  },
  {
    label: "Research Labs",
    gradient: "linear-gradient(135deg, #081E5C 0%, #1648C8 100%)",
    size: "small"
  },
  {
    label: "Library",
    gradient: "linear-gradient(135deg, #0F3499 0%, #1648C8 100%)",
    size: "small"
  }
];
function useCountUp(target, active, startNear) {
  const [count, setCount] = reactExports.useState(startNear ? target - 14 : 0);
  const frameRef = reactExports.useRef(null);
  const startedRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    if (!active || startedRef.current) return;
    startedRef.current = true;
    const start = startNear ? Math.max(target - 14, 0) : 0;
    const duration = 1800;
    const startTime = performance.now();
    function easeOutQuart(t) {
      return 1 - (1 - t) ** 4;
    }
    function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuart(progress);
      setCount(Math.round(start + (target - start) * eased));
      if (progress < 1) frameRef.current = requestAnimationFrame(tick);
    }
    frameRef.current = requestAnimationFrame(tick);
    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, [active, target, startNear]);
  return count;
}
function VideoHero() {
  const scrollToContent = () => {
    const el = document.getElementById("announcements");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "top",
      className: "relative w-full overflow-hidden",
      style: { height: "100vh", minHeight: 520 },
      "data-ocid": "hero.section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0",
            style: {
              background: "linear-gradient(135deg, #1648C8 0%, #0F3499 45%, #081E5C 100%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 pointer-events-none",
            style: {
              background: "radial-gradient(ellipse 70% 60% at 15% 20%, rgba(232,196,42,0.12) 0%, transparent 70%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 pointer-events-none opacity-[0.06]",
            style: {
              backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,1) 39px, rgba(255,255,255,1) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,1) 39px, rgba(255,255,255,1) 40px)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 pointer-events-none",
            style: {
              background: "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.04) 50%, transparent 70%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "inline-flex items-center gap-2 border px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-[0.2em] fade-in-up",
              style: {
                borderColor: "rgba(255,255,255,0.35)",
                color: "rgba(255,255,255,0.9)",
                background: "rgba(255,255,255,0.1)",
                animationDelay: "0.05s"
              },
              children: "Est. 1854 · Pune, Maharashtra"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h1",
            {
              className: "font-display font-bold text-white leading-tight fade-in-up",
              style: {
                fontSize: "clamp(2.2rem, 6vw, 5rem)",
                animationDelay: "0.15s",
                maxWidth: "900px"
              },
              children: "COEP Technological University"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "mt-4 text-white/80 font-body fade-in-up",
              style: {
                fontSize: "clamp(0.95rem, 2.2vw, 1.25rem)",
                animationDelay: "0.28s",
                maxWidth: "600px"
              },
              children: "A Unitary Public University of Government of Maharashtra"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "mt-3 font-semibold uppercase tracking-[0.25em] text-sm fade-in-up",
              style: { color: "#E8C42A", animationDelay: "0.38s" },
              children: "Engineering Excellence · Innovation · Leadership"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex flex-wrap gap-4 mt-10 justify-center fade-in-up",
              style: { animationDelay: "0.5s" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    className: "font-semibold px-8 py-3 rounded-none text-sm uppercase tracking-wider",
                    style: { background: "#E8C42A", color: "#111", border: "none" },
                    "data-ocid": "hero.explore_button",
                    children: "Explore Programs"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "outline",
                    className: "font-semibold px-8 py-3 rounded-none text-sm uppercase tracking-wider border-white/70 text-white transition-smooth",
                    style: { background: "transparent" },
                    "data-ocid": "hero.campus_tour_button",
                    children: "Virtual Campus Tour"
                  }
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: scrollToContent,
            className: "absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/60 hover:text-white transition-smooth",
            "aria-label": "Scroll to content",
            "data-ocid": "hero.scroll_indicator",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest font-medium", children: "Scroll" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                ChevronDown,
                {
                  className: "w-5 h-5 animate-bounce",
                  style: { animationDuration: "1.6s" }
                }
              )
            ]
          }
        )
      ]
    }
  );
}
function NewsTicker() {
  const items = [...ANNOUNCEMENTS, ...ANNOUNCEMENTS];
  const tickerRef = reactExports.useRef(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      id: "announcements",
      className: "w-full flex items-stretch overflow-hidden",
      style: { background: "#081E5C", height: 48 },
      "data-ocid": "announcements.section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex-shrink-0 flex items-center gap-2 px-5",
            style: {
              background: "#1648C8",
              borderRight: "2px solid rgba(255,255,255,0.4)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-accent-gold animate-pulse-cobalt" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-xs font-bold uppercase tracking-[0.22em] text-white whitespace-nowrap",
                  style: {
                    fontFamily: "Source Sans 3, sans-serif",
                    letterSpacing: "0.2em"
                  },
                  children: "ANNOUNCEMENTS"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex-1 overflow-hidden relative flex items-center",
            onMouseEnter: () => {
              if (tickerRef.current)
                tickerRef.current.style.animationPlayState = "paused";
            },
            onMouseLeave: () => {
              if (tickerRef.current)
                tickerRef.current.style.animationPlayState = "running";
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute left-0 top-0 bottom-0 w-8 z-10 pointer-events-none",
                  style: {
                    background: "linear-gradient(to right, #081E5C, transparent)"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute right-0 top-0 bottom-0 w-8 z-10 pointer-events-none",
                  style: {
                    background: "linear-gradient(to left, #081E5C, transparent)"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  ref: tickerRef,
                  className: "flex items-center whitespace-nowrap",
                  style: {
                    animation: "tickerScroll 55s linear infinite",
                    animationPlayState: "running"
                  },
                  children: items.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: "flex items-center gap-0 text-white/90",
                      style: {
                        fontSize: 13.5,
                        fontFamily: "Source Sans 3, sans-serif"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "mx-5",
                            style: { color: "rgba(255,255,255,0.5)", opacity: 0.8 },
                            children: "◆"
                          }
                        ),
                        item
                      ]
                    },
                    `ticker-${i}-${item.slice(0, 12)}`
                  ))
                }
              )
            ]
          }
        )
      ]
    }
  );
}
function PortraitCard({
  title,
  date,
  description,
  tag,
  gradient,
  index
}) {
  const { ref, visible } = useScrollReveal();
  const [hovered, setHovered] = reactExports.useState(false);
  const imgSrc = getEventImageUrl(tag);
  const imgFallback = getEventImageFallback(tag);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref,
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      className: "flex flex-col bg-card border border-border overflow-hidden cursor-pointer",
      style: {
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.55s ease ${index * 0.1}s, transform 0.55s ease ${index * 0.1}s`,
        boxShadow: hovered ? "0 16px 40px rgba(22,72,200,0.18)" : "0 2px 12px rgba(0,0,0,0.06)",
        transitionProperty: "opacity, transform, box-shadow",
        minHeight: 420
      },
      "data-ocid": `card.item.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex-shrink-0 relative overflow-hidden",
            style: { height: 200 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: imgSrc,
                  alt: title,
                  className: "w-full h-full object-cover",
                  style: {
                    transform: hovered ? "scale(1.04)" : "scale(1)",
                    transition: "transform 0.55s cubic-bezier(0.4,0,0.2,1)"
                  },
                  onError: (e) => {
                    const el = e.currentTarget;
                    if (el.src !== imgFallback) {
                      el.src = imgFallback;
                    } else {
                      el.style.display = "none";
                      const parent = el.parentElement;
                      if (parent) parent.style.background = gradient;
                    }
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute top-3 left-3 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-white",
                  style: {
                    background: "rgba(0,0,0,0.45)",
                    backdropFilter: "blur(4px)"
                  },
                  children: tag
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col flex-1 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              className: "font-bold text-base leading-snug mb-2",
              style: { fontFamily: "Playfair Display, serif", color: "#0F3499" },
              children: title
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed flex-1 mb-4", children: description }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1.5 mt-auto pt-3 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "text-xs font-medium px-2.5 py-1",
              style: { background: "rgba(22,72,200,0.08)", color: "#1648C8" },
              children: date
            }
          ) })
        ] })
      ]
    }
  );
}
function PortraitCarousel({
  items,
  sectionId
}) {
  const [startIdx, setStartIdx] = reactExports.useState(0);
  const total = items.length;
  const timerRef = reactExports.useRef(null);
  const [cardsVisible, setCardsVisible] = reactExports.useState(3);
  reactExports.useEffect(() => {
    function update() {
      if (window.innerWidth < 640) setCardsVisible(1);
      else if (window.innerWidth < 1024) setCardsVisible(2);
      else setCardsVisible(3);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  const prev = reactExports.useCallback(() => {
    setStartIdx((s) => (s - 1 + total) % total);
    if (timerRef.current) clearInterval(timerRef.current);
  }, [total]);
  const next = reactExports.useCallback(() => {
    setStartIdx((s) => (s + 1) % total);
    if (timerRef.current) clearInterval(timerRef.current);
  }, [total]);
  reactExports.useEffect(() => {
    timerRef.current = setInterval(
      () => setStartIdx((s) => (s + 1) % total),
      5e3
    );
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [total]);
  const visibleIndices = Array.from(
    { length: cardsVisible },
    (_, i) => (startIdx + i) % total
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "relative flex items-stretch gap-6",
      "data-ocid": `${sectionId}.carousel`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: prev,
            className: "flex-shrink-0 self-center w-11 h-11 rounded-full border border-border flex items-center justify-center transition-smooth hover:border-accent-gold hover:text-accent-gold hover:shadow-gold z-10",
            "aria-label": "Previous",
            "data-ocid": `${sectionId}.pagination_prev`,
            style: { background: "#fff" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-5 h-5" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "flex-1 grid gap-6",
            style: { gridTemplateColumns: `repeat(${cardsVisible}, 1fr)` },
            children: visibleIndices.map((idx, i) => {
              const item = items[idx];
              const isEvent = "category" in item;
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                PortraitCard,
                {
                  title: item.title,
                  date: item.date,
                  description: item.description,
                  tag: isEvent ? item.category : item.tag,
                  gradient: item.gradient,
                  index: i
                },
                `${sectionId}-${idx}`
              );
            })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: next,
            className: "flex-shrink-0 self-center w-11 h-11 rounded-full border border-border flex items-center justify-center transition-smooth hover:border-accent-gold hover:text-accent-gold hover:shadow-gold z-10",
            "aria-label": "Next",
            "data-ocid": `${sectionId}.pagination_next`,
            style: { background: "#fff" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-5 h-5" })
          }
        )
      ]
    }
  );
}
function EventsSection() {
  const { ref, visible } = useScrollReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-background", "data-ocid": "events.section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container px-4 md:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        ref,
        className: "mb-12",
        style: {
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease, transform 0.6s ease"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2", children: "What's On" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h2",
            {
              className: "text-2xl md:text-3xl font-bold",
              style: { fontFamily: "Playfair Display, serif", color: "#0F3499" },
              children: "Upcoming Events"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-gold mt-3" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PortraitCarousel, { items: EVENTS, sectionId: "events" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 justify-center mt-8", children: EVENTS.map((ev) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "rounded-full transition-all duration-300",
        style: {
          width: 8,
          height: 8,
          background: "rgba(22,72,200,0.25)"
        }
      },
      ev.title
    )) })
  ] }) });
}
function NoticesSection() {
  const { ref, visible } = useScrollReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      className: "py-20",
      style: { background: "oklch(0.97 0 0)" },
      "data-ocid": "notices.section",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container px-4 md:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            ref,
            className: "mb-12",
            style: {
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s ease, transform 0.6s ease"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2", children: "Official Communications" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h2",
                {
                  className: "text-2xl md:text-3xl font-bold",
                  style: { fontFamily: "Playfair Display, serif", color: "#0F3499" },
                  children: "Notices & Circulars"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-gold mt-3" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PortraitCarousel, { items: NOTICES, sectionId: "notices" })
      ] })
    }
  );
}
function LatestNews() {
  const [expanded, setExpanded] = reactExports.useState(false);
  const visibleNews = expanded ? NEWS_ALL : NEWS_ALL.slice(0, 3);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      className: "py-16 bg-background",
      style: {},
      "data-ocid": "news.section",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container px-4 md:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2", children: "Stay Informed" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h2",
            {
              className: "text-2xl md:text-3xl font-bold",
              style: { fontFamily: "Playfair Display, serif", color: "#0F3499" },
              children: "Latest News"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-gold mt-3" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: visibleNews.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "group relative flex gap-5 py-7 px-2 cursor-pointer",
            "data-ocid": `news.item.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "flex-shrink-0 font-black leading-none select-none",
                  style: {
                    fontSize: "clamp(2.8rem, 5vw, 4.2rem)",
                    color: "rgba(22,72,200,0.18)",
                    minWidth: "4rem",
                    fontVariantNumeric: "tabular-nums",
                    lineHeight: 1,
                    fontFamily: "Playfair Display, serif"
                  },
                  children: String(item.num).padStart(2, "0")
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 flex flex-col justify-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3 mb-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-xs font-semibold px-2 py-0.5",
                    style: {
                      background: "rgba(22,72,200,0.08)",
                      color: "#1648C8"
                    },
                    children: item.date
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    className: "font-bold text-base md:text-lg leading-snug mb-1.5 group-hover:text-accent-gold transition-smooth",
                    style: {
                      fontFamily: "Playfair Display, serif",
                      color: "#0F3499"
                    },
                    children: item.title
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground line-clamp-2", children: item.excerpt })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 self-center opacity-0 group-hover:opacity-100 transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-5 h-5 text-accent-gold" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500",
                  style: { background: "rgba(22,72,200,0.4)" }
                }
              )
            ]
          },
          item.num
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setExpanded((v) => !v),
            className: "px-10 py-3 border font-semibold text-sm uppercase tracking-wider transition-smooth rounded-none hover:text-accent-gold",
            style: {
              borderColor: "#1648C8",
              fontFamily: "Source Sans 3, sans-serif"
            },
            "data-ocid": "news.view_more_button",
            children: expanded ? "View Less" : "View More"
          }
        ) })
      ] })
    }
  );
}
function HistorySection() {
  const { ref: headRef, visible: headVisible } = useScrollReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      className: "py-20",
      style: { background: "oklch(0.97 0 0)" },
      "data-ocid": "history.section",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container px-4 md:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            ref: headRef,
            className: "text-center mb-14",
            style: {
              opacity: headVisible ? 1 : 0,
              transform: headVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s ease, transform 0.6s ease"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2", children: "Since 1854" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h2",
                {
                  className: "font-bold",
                  style: {
                    fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                    fontFamily: "Playfair Display, serif",
                    color: "#0F3499"
                  },
                  children: "History & Legacy"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "mt-3 text-muted-foreground max-w-xl mx-auto",
                  style: { fontFamily: "Source Sans 3, sans-serif" },
                  children: "Over 170 years of excellence, innovation, and nation-building from the heart of Pune"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-gold mt-5 mx-auto" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-4xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block",
              style: { background: "rgba(22,72,200,0.2)" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6 md:space-y-0", children: TIMELINE_PREVIEW.map((entry, index) => {
            const isEven = index % 2 === 0;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineEntry, { entry, index, isEven }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineEntryMobile, { entry, index })
            ] }, entry.year);
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mt-14", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/about-us/about-university",
            "data-ocid": "history.view_more_button",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                className: "px-10 py-3 rounded-none text-sm font-semibold uppercase tracking-wider text-white transition-smooth",
                style: { background: "#1648C8", border: "none" },
                children: "View Full History"
              }
            )
          }
        ) })
      ] })
    }
  );
}
function TimelineEntry({
  entry,
  index,
  isEven
}) {
  const { ref, visible } = useScrollReveal();
  const isLast = index === TIMELINE_PREVIEW.length - 1;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref,
      className: "relative hidden md:flex items-start gap-0 mb-8",
      style: {
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.65s ease ${index * 0.12}s, transform 0.65s ease ${index * 0.12}s`
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex justify-end pr-6 pt-1", children: isEven ? /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineCard, { entry, align: "right" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative flex-shrink-0 flex flex-col items-center",
            style: { width: 40 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-10 h-10 rounded-full flex items-center justify-center text-white shadow-cobalt z-10 relative flex-shrink-0",
                  style: {
                    background: entry.color,
                    fontSize: 10,
                    fontFamily: "Source Sans 3, sans-serif",
                    fontWeight: 700
                  },
                  children: entry.year.slice(0, 4)
                }
              ),
              !isLast && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-0.5 opacity-25 flex-1",
                  style: { background: "#1648C8", minHeight: 64 }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex justify-start pl-6 pt-1", children: !isEven ? /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineCard, { entry, align: "left" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}) })
      ]
    }
  );
}
function TimelineEntryMobile({
  entry,
  index
}) {
  const { ref, visible } = useScrollReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref,
      className: "flex items-start gap-4 md:hidden",
      style: {
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0 mt-1",
            style: {
              background: entry.color,
              fontSize: 10,
              fontFamily: "Source Sans 3, sans-serif",
              fontWeight: 700
            },
            children: entry.year.slice(0, 4)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineCard, { entry, align: "left" }) })
      ]
    }
  );
}
function TimelineCard({
  entry,
  align
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "bg-card border border-border p-6 shadow-premium inline-block max-w-sm w-full",
      style: { textAlign: align === "right" ? "right" : "left" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "text-2xl font-bold",
            style: { fontFamily: "Playfair Display, serif", color: entry.color },
            children: entry.year
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h4",
          {
            className: "font-bold text-base mt-1 mb-2",
            style: { fontFamily: "Playfair Display, serif", color: "#0F3499" },
            children: entry.title
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "text-sm text-muted-foreground leading-relaxed",
            style: { fontFamily: "Source Sans 3, sans-serif" },
            children: entry.description
          }
        )
      ]
    }
  );
}
function StatCountCard({ stat, index }) {
  const [hovered, setHovered] = reactExports.useState(false);
  const cardRef = reactExports.useRef(null);
  const [active, setActive] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  const count = useCountUp(stat.target, active, stat.startNear);
  const formatNum = (n) => stat.target >= 1e3 && !stat.startNear ? n.toLocaleString("en-IN") : n.toString();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref: cardRef,
      className: "relative bg-card border border-border p-8 md:p-10 cursor-default overflow-hidden h-full",
      style: {
        boxShadow: hovered ? "0 8px 32px rgba(0,0,0,0.12)" : "0 2px 8px rgba(0,0,0,0.04)",
        transition: "box-shadow 0.3s ease, opacity 0.5s ease, transform 0.5s ease",
        opacity: active ? 1 : 0,
        transform: active ? "translateY(0)" : "translateY(24px)",
        transitionDelay: `${index * 0.08}s`
      },
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      "data-ocid": `stats.item.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-0 left-0 h-[3px] transition-all duration-500",
            style: { width: hovered ? "100%" : "0%", background: "#E8C42A" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "font-bold leading-none mb-2",
            style: {
              fontSize: "clamp(2.75rem, 5.5vw, 4.25rem)",
              letterSpacing: "-0.02em",
              fontFamily: "Playfair Display, serif",
              color: "#0F3499"
            },
            children: [
              stat.prefix,
              formatNum(count),
              stat.suffix
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "text-sm md:text-base font-bold mb-2",
            style: { fontFamily: "Playfair Display, serif", color: "#0F3499" },
            children: stat.label
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs md:text-sm text-muted-foreground leading-relaxed", children: stat.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute bottom-4 right-4 w-2 h-2 rounded-full transition-all duration-300",
            style: { background: hovered ? "#E8C42A" : "oklch(0.88 0 0)" }
          }
        )
      ]
    }
  );
}
function WhyCoepTech() {
  const { ref, visible } = useScrollReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      className: "py-20",
      style: { background: "#FFFFFF" },
      "data-ocid": "stats.section",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container px-4 md:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            ref,
            className: "text-center mb-14",
            style: {
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s ease, transform 0.6s ease"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-xs font-semibold uppercase tracking-widest mb-3",
                  style: { color: "#0F3499" },
                  children: "Our Legacy"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h2",
                {
                  className: "font-bold leading-tight",
                  style: {
                    fontSize: "clamp(2rem, 5vw, 3.2rem)",
                    fontFamily: "Playfair Display, serif",
                    color: "#0F3499"
                  },
                  children: "Why COEP Technological University"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground text-base md:text-lg", children: "Shaping engineers and leaders since 1854" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "mt-5 mx-auto",
                  style: {
                    height: 3,
                    width: 64,
                    background: "#1648C8",
                    borderRadius: 2
                  }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 border border-border overflow-hidden shadow-premium", children: STAT_DEFS.map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: i === STAT_DEFS.length - 1 && STAT_DEFS.length % 3 !== 0 ? "sm:col-span-2 md:col-span-1 md:col-start-2" : "",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatCountCard, { stat, index: i })
          },
          stat.label
        )) })
      ] })
    }
  );
}
function LifeAtCoep() {
  const { ref: headRef, visible: headVisible } = useScrollReveal();
  const collageRef = reactExports.useRef(null);
  const [collageVisible, setCollageVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = collageRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCollageVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      className: "py-20",
      style: { background: "#f7f8fa" },
      "data-ocid": "life.section",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container px-4 md:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            ref: headRef,
            className: "text-center mb-12",
            style: {
              opacity: headVisible ? 1 : 0,
              transform: headVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s ease, transform 0.6s ease"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2", children: "Campus Experience" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h2",
                {
                  className: "font-bold",
                  style: {
                    fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                    fontFamily: "Playfair Display, serif",
                    color: "#0F3499"
                  },
                  children: "Life at COEP"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-gold mt-4 mx-auto" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            ref: collageRef,
            className: "grid gap-3",
            style: {
              gridTemplateColumns: "2fr 1fr 1fr",
              gridTemplateRows: "220px 220px"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "row-span-2 relative overflow-hidden rounded-sm",
                  style: {
                    opacity: collageVisible ? 1 : 0,
                    transform: collageVisible ? "scale(1)" : "scale(1.04)",
                    transition: "opacity 0.7s ease 0s, transform 0.7s ease 0s"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: "https://www.coeptech.ac.in/wp-content/uploads/2022/09/COEP-Main-Building-scaled.jpg",
                        alt: "Life at COEP",
                        className: "w-full h-full object-cover",
                        onError: (e) => {
                          const el = e.currentTarget;
                          if (!el.src.includes("unsplash")) {
                            el.src = "https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80";
                          }
                        }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "absolute inset-0 flex items-center justify-center",
                        style: { background: "rgba(8,30,92,0.52)" },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "text-white font-bold text-lg leading-snug",
                            style: { fontFamily: "Playfair Display, serif" },
                            children: "170 years of excellence, innovation, and vibrant campus life"
                          }
                        ) })
                      }
                    )
                  ]
                }
              ),
              LIFE_IMAGES.slice(1).map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "relative overflow-hidden rounded-sm",
                  style: {
                    opacity: collageVisible ? 1 : 0,
                    transform: collageVisible ? "scale(1)" : "scale(1.04)",
                    transition: `opacity 0.65s ease ${(i + 1) * 0.1 + 0.1}s, transform 0.65s ease ${(i + 1) * 0.1 + 0.1}s`
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: getCampusImageUrl(img.label),
                        alt: img.label,
                        className: "w-full h-full object-cover",
                        onError: (e) => {
                          const el = e.currentTarget;
                          const fallback = getCampusImageFallback(img.label);
                          if (el.src !== fallback) {
                            el.src = fallback;
                          } else {
                            el.style.display = "none";
                            const parent = el.parentElement;
                            if (parent) parent.style.background = img.gradient;
                          }
                        }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "absolute inset-0 flex items-end p-3",
                        style: {
                          background: "linear-gradient(to top, rgba(8,30,92,0.7) 0%, transparent 60%)"
                        },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "text-white font-bold text-xs uppercase tracking-widest",
                            style: { fontFamily: "Playfair Display, serif" },
                            children: img.label
                          }
                        )
                      }
                    )
                  ]
                },
                img.label
              ))
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/student-life", "data-ocid": "life.view_more_button", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            className: "px-10 py-3 rounded-none text-sm font-semibold uppercase tracking-wider text-white transition-smooth",
            style: { background: "#1648C8", border: "none" },
            children: "Explore Campus Life"
          }
        ) }) })
      ] })
    }
  );
}
function ResearchCard({
  paper,
  index
}) {
  const { ref, visible } = useScrollReveal();
  const [hovered, setHovered] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      style: {
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.55s ease ${index * 0.1}s, transform 0.55s ease ${index * 0.1}s`
      },
      "data-ocid": `research.item.${index + 1}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: paper.url,
          target: "_blank",
          rel: "noopener noreferrer",
          onMouseEnter: () => setHovered(true),
          onMouseLeave: () => setHovered(false),
          className: "block bg-card border border-border overflow-hidden no-underline group",
          style: {
            transition: "border-color 0.25s ease, box-shadow 0.25s ease",
            boxShadow: hovered ? "0 8px 28px rgba(22,72,200,0.15)" : "0 2px 8px rgba(0,0,0,0.04)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden", style: { height: 160 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: getResearchImageUrl(paper.title),
                  alt: paper.title,
                  className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
                  onError: (e) => {
                    const el = e.currentTarget;
                    const fallback = getResearchImageFallback(paper.title);
                    if (el.src !== fallback) {
                      el.src = fallback;
                    } else {
                      const parent = el.parentElement;
                      if (parent) {
                        el.style.display = "none";
                        parent.style.background = "linear-gradient(135deg, #0F3499 0%, #1648C8 100%)";
                      }
                    }
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute inset-0",
                  style: {
                    background: "linear-gradient(to top, rgba(8,30,92,0.5) 0%, transparent 50%)"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute top-0 left-0 h-[3px] w-full",
                  style: { background: hovered ? "#E8C42A" : "#1648C8" }
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    className: "font-bold text-base leading-snug flex-1",
                    style: {
                      fontFamily: "Playfair Display, serif",
                      color: "#0F3499"
                    },
                    children: paper.title
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-4 h-4 flex-shrink-0 mt-0.5 text-muted-foreground" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-xs font-semibold px-2.5 py-1",
                    style: { background: "rgba(22,72,200,0.08)", color: "#1648C8" },
                    children: paper.journal
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-xs font-semibold px-2.5 py-1",
                    style: { background: "rgba(22,72,200,0.1)", color: "#1648C8" },
                    children: paper.year
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-xs text-muted-foreground font-semibold mb-2",
                  style: { fontFamily: "Source Sans 3, sans-serif" },
                  children: paper.authors
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed line-clamp-2", children: paper.abstract })
            ] })
          ]
        }
      )
    }
  );
}
function ResearchSection() {
  const { ref, visible } = useScrollReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-background", "data-ocid": "research.section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container px-4 md:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        ref,
        className: "mb-12",
        style: {
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease, transform 0.6s ease"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2", children: "Knowledge Creation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h2",
            {
              className: "text-2xl md:text-3xl font-bold",
              style: { fontFamily: "Playfair Display, serif", color: "#0F3499" },
              children: "Research & Innovation"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "mt-2 text-muted-foreground",
              style: { fontFamily: "Source Sans 3, sans-serif" },
              children: "Pioneering discoveries at COEP Technological University"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-gold mt-3" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: RESEARCH_PAPERS.map((paper, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ResearchCard, { paper, index: i }, paper.title)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/research", "data-ocid": "research.view_more_button", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        className: "px-10 py-3 rounded-none text-sm font-semibold uppercase tracking-wider text-white transition-smooth",
        style: { background: "#1648C8", border: "none" },
        children: "View More Research"
      }
    ) }) })
  ] }) });
}
function HomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(VideoHero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(NewsTicker, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EventsSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(NoticesSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LatestNews, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HistorySection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhyCoepTech, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LifeAtCoep, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ResearchSection, {})
  ] });
}
export {
  HomePage
};
