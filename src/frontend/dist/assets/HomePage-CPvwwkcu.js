import { j as jsxRuntimeExports, r as reactExports, L as Link } from "./index-ewouZ8Z-.js";
import { L as Layout } from "./Layout-CAMhUMkU.js";
import { B as Button } from "./button-nmsemd6J.js";
import { g as getCampusImageFallback, a as getCampusImageUrl, b as getResearchImageFallback, c as getResearchImageUrl, d as getEventImageUrl, e as getEventImageFallback } from "./generatedImages-CQJnp3HI.js";
import { C as ChevronRight } from "./chevron-right-CxS9AhYT.js";
import { C as ChevronLeft } from "./chevron-left-JqSNS1qi.js";
import { E as ExternalLink } from "./external-link-CWDp71fA.js";
import "./utils-pycC2CyQ.js";
import "./x-BbDbzOVy.js";
import "./Header-Y41v9IHA.js";
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
    gradient: "linear-gradient(135deg, #1A237E 0%, #0F3399 100%)"
  },
  {
    title: "98th Regatta Rowing Championships",
    date: "March 22, 2026",
    description: "Witness the spectacular 98th edition of COEP's legendary Regatta on the Mula river — Asia's oldest collegiate rowing event.",
    category: "Sports",
    gradient: "linear-gradient(135deg, #0F3399 0%, #081E5C 100%)"
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
    gradient: "linear-gradient(135deg, #1A237E 0%, #0F3399 100%)"
  },
  {
    title: "Research Paper Presentation Day",
    date: "March 28, 2026",
    description: "Showcase your research to faculty, industry experts, and peers. Best papers win publication support and cash awards.",
    category: "Research",
    gradient: "linear-gradient(135deg, #0F3399 0%, #1A237E 100%)"
  },
  {
    title: "VIVEKMALA '26",
    date: "April 5–6, 2026",
    description: "From Vision to Victory — inter-college management and entrepreneurship conclave with case competitions and guest speakers.",
    category: "Management",
    gradient: "linear-gradient(135deg, #081E5C 0%, #0F3399 100%)"
  }
];
const NOTICES = [
  {
    title: "Examination Schedule 2024–25",
    date: "Issued: Dec 10, 2025",
    description: "End semester examinations for all UG and PG programs. Download hall tickets and report to exam halls 30 minutes early.",
    tag: "Examination",
    gradient: "linear-gradient(135deg, #1A237E 0%, #0F3399 100%)"
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
    gradient: "linear-gradient(135deg, #0F3399 0%, #081E5C 100%)"
  },
  {
    title: "Academic Calendar 2025–26 Released",
    date: "Published: Nov 1, 2025",
    description: "The official academic calendar for AY 2025–26 is now available. Review semester dates, holiday list, and examination windows.",
    tag: "Academic",
    gradient: "linear-gradient(135deg, #1A237E 0%, #0F3399 100%)"
  },
  {
    title: "Holiday List 2024–25",
    date: "Updated: Jan 2025",
    description: "List of public holidays and university holidays for the academic year 2024–25 as approved by the Board of Governance.",
    tag: "General",
    gradient: "linear-gradient(135deg, #0F3399 0%, #1A237E 100%)"
  },
  {
    title: "PhD Viva-Voce Schedule",
    date: "February 2026",
    description: "Open defense schedule for all registered PhD scholars for the February 2026 cycle. Candidates should contact their guides.",
    tag: "PhD",
    gradient: "linear-gradient(135deg, #081E5C 0%, #0F3399 100%)"
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
  },
  {
    suffix: "+",
    target: 100,
    label: "Industry Partners",
    description: "MoUs with leading corporations driving industry-academia collaboration"
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
    color: "#1A237E",
    imageUrl: "https://www.coeptech.ac.in/wp-content/uploads/2022/09/COEP-Technological-University-Pune-Image.jpg"
  },
  {
    year: "1911",
    title: "Renamed — College of Engineering, Pune",
    description: "Re-designated as the College of Engineering, Pune (COEP), marking a new era of expanded programs and modernized infrastructure.",
    color: "#0F3399",
    imageUrl: "https://www.coeptech.ac.in/wp-content/uploads/2022/09/college-of-engineering-pune-heritage-building.jpg"
  },
  {
    year: "1947",
    title: "Post-Independence Expansion",
    description: "Following Indian independence, COEP expanded rapidly under the Maharashtra Government, becoming a premier institution for the nation's engineering workforce.",
    color: "#1A237E",
    imageUrl: "https://www.coeptech.ac.in/wp-content/uploads/2022/10/COEP-Tech-Campus.jpg"
  },
  {
    year: "2022",
    title: "Elevated to Autonomous University Status",
    description: "Elevated to COEP Technological University — a Unitary Public University of the Government of Maharashtra, with full academic and administrative autonomy.",
    color: "#1A237E",
    imageUrl: "https://www.coeptech.ac.in/wp-content/uploads/2023/01/coep-technological-university-pune.jpg"
  }
];
const LIFE_IMAGES = [
  {
    label: "Historic Campus",
    gradient: "linear-gradient(135deg, #1A237E 20%, #0F3399 100%)",
    size: "large"
  },
  {
    label: "Sports & Athletics",
    gradient: "linear-gradient(135deg, #0F3399 0%, #081E5C 100%)",
    size: "small"
  },
  {
    label: "Cultural Fests",
    gradient: "linear-gradient(135deg, #C9A84C 0%, #E8C42A 100%)",
    size: "small"
  },
  {
    label: "Research Labs",
    gradient: "linear-gradient(135deg, #081E5C 0%, #1A237E 100%)",
    size: "small"
  },
  {
    label: "Library",
    gradient: "linear-gradient(135deg, #0F3399 0%, #1A237E 100%)",
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "top",
      className: "relative w-full overflow-hidden",
      style: { height: "100vh", minHeight: 520 },
      "data-ocid": "hero.section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "iframe",
          {
            src: "https://www.youtube.com/embed/dHMneVzPHkk?autoplay=1&mute=1&loop=1&playlist=dHMneVzPHkk&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1",
            title: "COEP Campus Video",
            allow: "autoplay; fullscreen",
            className: "absolute",
            style: {
              top: "50%",
              left: "50%",
              width: "177.78vh",
              minWidth: "100%",
              height: "56.25vw",
              minHeight: "100%",
              transform: "translate(-50%, -50%)",
              border: "none",
              pointerEvents: "none",
              zIndex: 0
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0",
            style: { background: "rgba(0,0,0,0.45)", zIndex: 1 }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 flex items-center justify-center",
            style: { zIndex: 10 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h1",
              {
                className: "typo-hero-heading text-white text-center fade-in-up",
                style: {
                  maxWidth: "900px",
                  padding: "0 1.5rem",
                  textShadow: "0 2px 24px rgba(0,0,0,0.65), 0 1px 4px rgba(0,0,0,0.5)",
                  animationDelay: "0.1s"
                },
                children: "COEP Technological University"
              }
            )
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
              background: "#1A237E",
              borderRight: "2px solid rgba(255,255,255,0.4)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-accent-gold animate-pulse-cobalt" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "typo-section-label text-white whitespace-nowrap", children: "ANNOUNCEMENTS" })
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
                      className: "flex items-center gap-0 text-white/90 typo-nav",
                      style: { fontSize: 13.5 },
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
        boxShadow: hovered ? "0 16px 40px rgba(26, 35, 126, 0.18)" : "0 2px 12px rgba(0,0,0,0.06)",
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
              className: "typo-card-title leading-snug mb-2",
              style: { color: "#0F3399" },
              children: title
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-card-desc text-muted-foreground leading-relaxed flex-1 mb-4", children: description }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1.5 mt-auto pt-3 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "text-xs font-medium px-2.5 py-1",
              style: { background: "rgba(26, 35, 126, 0.08)", color: "#1A237E" },
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-section-label text-muted-foreground mb-2", children: "What's On" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "typo-section-heading", style: { color: "#0F3399" }, children: "Upcoming Events" }),
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
          background: "rgba(26, 35, 126, 0.25)"
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-section-label text-muted-foreground mb-2", children: "Official Communications" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "typo-section-heading", style: { color: "#0F3399" }, children: "Notices & Circulars" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-gold mt-3" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PortraitCarousel, { items: NOTICES, sectionId: "notices" })
      ] })
    }
  );
}
const COLLAB_PARTNERS = [
  // Industry
  { name: "Tata Group", type: "industry" },
  { name: "Bosch", type: "industry" },
  { name: "DRDO", type: "industry" },
  { name: "ISRO", type: "industry" },
  { name: "Siemens", type: "industry" },
  { name: "Thermax", type: "industry" },
  { name: "Cummins India", type: "industry" },
  { name: "Forbes Marshall", type: "industry" },
  { name: "Bajaj Auto", type: "industry" },
  { name: "Wipro", type: "industry" },
  // International
  { name: "TU Delft", type: "international", country: "Netherlands" },
  { name: "MIT", type: "international", country: "USA" },
  { name: "KIT Karlsruhe", type: "international", country: "Germany" },
  { name: "NUS Singapore", type: "international", country: "Singapore" },
  { name: "Politecnico di Milano", type: "international", country: "Italy" },
  { name: "TU Munich", type: "international", country: "Germany" },
  { name: "Monash University", type: "international", country: "Australia" },
  { name: "Waseda University", type: "international", country: "Japan" }
];
const INDUSTRY_PARTNERS = COLLAB_PARTNERS.filter((p) => p.type === "industry");
const INTL_PARTNERS = COLLAB_PARTNERS.filter((p) => p.type === "international");
function CollabLogoTicker({
  partners,
  reverse
}) {
  const items = [...partners, ...partners];
  const tickerRef = reactExports.useRef(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "relative overflow-hidden",
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
            className: "absolute left-0 top-0 bottom-0 w-12 z-10 pointer-events-none",
            style: {
              background: "linear-gradient(to right, #f7f9ff, transparent)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute right-0 top-0 bottom-0 w-12 z-10 pointer-events-none",
            style: { background: "linear-gradient(to left, #f7f9ff, transparent)" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            ref: tickerRef,
            className: "flex items-center gap-3 whitespace-nowrap",
            style: {
              animation: `tickerScroll ${reverse ? "20s" : "22s"} linear infinite ${reverse ? "reverse" : ""}`,
              animationPlayState: "running"
            },
            children: items.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex-shrink-0 flex items-center justify-center px-4 py-2 border font-semibold text-xs uppercase tracking-wider",
                style: {
                  background: "#fff",
                  borderColor: "rgba(26, 35, 126, 0.14)",
                  color: "#1A237E",
                  minWidth: 120,
                  fontFamily: "Source Sans 3, sans-serif",
                  letterSpacing: "0.08em"
                },
                children: [
                  p.name,
                  p.country && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "ml-1.5 opacity-60 text-[10px] normal-case tracking-normal font-normal",
                      style: { color: "#4A3FA0" },
                      children: p.country
                    }
                  )
                ]
              },
              `collab-${p.type}-${i}-${p.name.slice(0, 6)}`
            ))
          }
        )
      ]
    }
  );
}
function CollaborationsSection() {
  const { ref: headRef, visible: headVisible } = useScrollReveal();
  const { ref: leftRef, visible: leftVisible } = useScrollReveal(0.1);
  const { ref: rightRef, visible: rightVisible } = useScrollReveal(0.1);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      className: "py-20 relative overflow-hidden",
      style: { background: "#f7f9ff" },
      "data-ocid": "collaborations.section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 pointer-events-none",
            style: {
              background: "radial-gradient(ellipse 80% 60% at 90% 50%, rgba(26,35,126,0.05) 0%, transparent 70%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container px-4 md:px-8 relative", children: [
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
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-section-label text-muted-foreground mb-2", children: "Global Footprint" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "typo-section-heading", style: { color: "#0F3399" }, children: "Collaborations & MoUs" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-body mt-3 max-w-xl mx-auto text-muted-foreground", children: "Bridging academia and industry through 100+ active partnerships with leading corporations and global universities" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-gold mt-5 mx-auto" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-14", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                ref: leftRef,
                className: "relative overflow-hidden border border-border",
                style: {
                  opacity: leftVisible ? 1 : 0,
                  transform: leftVisible ? "translateX(0)" : "translateX(-28px)",
                  transition: "opacity 0.65s ease 0.1s, transform 0.65s ease 0.1s",
                  background: "#fff"
                },
                "data-ocid": "collaborations.industry_panel",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "h-1 w-full",
                      style: {
                        background: "linear-gradient(90deg, #1A237E 0%, #0F3399 50%, #E8C42A 100%)"
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-7", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "w-9 h-9 flex items-center justify-center rounded-full",
                          style: { background: "rgba(26,35,126,0.1)" },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "svg",
                            {
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "#1A237E",
                              strokeWidth: 2,
                              className: "w-5 h-5",
                              "aria-hidden": "true",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: 2, y: 7, width: 20, height: 14, rx: 1 }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" })
                              ]
                            }
                          )
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "h3",
                          {
                            className: "typo-card-title leading-none",
                            style: { color: "#0F3399" },
                            children: "Industry Partners"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-support text-muted-foreground mt-0.5", children: "MoUs with leading Indian & global corporations" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: INDUSTRY_PARTNERS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "px-3 py-1.5 text-xs font-semibold uppercase tracking-wider border",
                        style: {
                          borderColor: "rgba(26,35,126,0.18)",
                          color: "#1A237E",
                          fontFamily: "Source Sans 3, sans-serif",
                          background: "rgba(26,35,126,0.04)"
                        },
                        children: p.name
                      },
                      p.name
                    )) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "mt-5 text-xs font-bold uppercase tracking-widest",
                        style: { color: "#E8C42A" },
                        children: "60+ Active Industry MoUs"
                      }
                    )
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                ref: rightRef,
                className: "relative overflow-hidden border border-border",
                style: {
                  opacity: rightVisible ? 1 : 0,
                  transform: rightVisible ? "translateX(0)" : "translateX(28px)",
                  transition: "opacity 0.65s ease 0.2s, transform 0.65s ease 0.2s",
                  background: "#fff"
                },
                "data-ocid": "collaborations.international_panel",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "h-1 w-full",
                      style: {
                        background: "linear-gradient(90deg, #E8C42A 0%, #0F3399 50%, #1A237E 100%)"
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-7", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "w-9 h-9 flex items-center justify-center rounded-full",
                          style: { background: "rgba(26,35,126,0.1)" },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "svg",
                            {
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "#1A237E",
                              strokeWidth: 2,
                              className: "w-5 h-5",
                              "aria-hidden": "true",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: 12, cy: 12, r: 10 }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" })
                              ]
                            }
                          )
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "h3",
                          {
                            className: "typo-card-title leading-none",
                            style: { color: "#0F3399" },
                            children: "International Universities"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-support text-muted-foreground mt-0.5", children: "Academic exchange & joint research with global institutions" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: INTL_PARTNERS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        className: "px-3 py-1.5 text-xs font-semibold border",
                        style: {
                          borderColor: "rgba(26,35,126,0.18)",
                          color: "#1A237E",
                          fontFamily: "Source Sans 3, sans-serif",
                          background: "rgba(26,35,126,0.04)"
                        },
                        children: [
                          p.name,
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: "ml-1.5 opacity-55 text-[10px] font-normal",
                              style: { color: "#4A3FA0" },
                              children: p.country
                            }
                          )
                        ]
                      },
                      p.name
                    )) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "mt-5 text-xs font-bold uppercase tracking-widest",
                        style: { color: "#E8C42A" },
                        children: "40+ International University MoUs"
                      }
                    )
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 mb-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CollabLogoTicker, { partners: INDUSTRY_PARTNERS }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CollabLogoTicker, { partners: INTL_PARTNERS, reverse: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/research", "data-ocid": "collaborations.view_all_button", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              className: "typo-btn px-10 py-3 rounded-none uppercase tracking-wider text-white transition-smooth",
              style: { background: "#1A237E", border: "none" },
              children: "View All Collaborations →"
            }
          ) }) })
        ] })
      ]
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-section-label text-muted-foreground mb-2", children: "Stay Informed" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "typo-section-heading", style: { color: "#0F3399" }, children: "Latest News" }),
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
                  className: "flex-shrink-0 font-black leading-none select-none typo-stat-number",
                  style: {
                    fontSize: "clamp(2.8rem, 5vw, 4.2rem)",
                    color: "rgba(26, 35, 126, 0.18)",
                    minWidth: "4rem",
                    fontVariantNumeric: "tabular-nums",
                    lineHeight: 1,
                    fontFamily: "var(--font-nav)"
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
                      background: "rgba(26, 35, 126, 0.08)",
                      color: "#1A237E"
                    },
                    children: item.date
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    className: "typo-card-title leading-snug mb-1.5 group-hover:text-accent-gold transition-smooth",
                    style: { color: "#0F3399" },
                    children: item.title
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "typo-body-lg text-muted-foreground line-clamp-2",
                    style: { fontSize: "0.875rem" },
                    children: item.excerpt
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 self-center opacity-0 group-hover:opacity-100 transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-5 h-5 text-accent-gold" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500",
                  style: { background: "rgba(26, 35, 126, 0.4)" }
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
            className: "typo-btn px-10 py-3 border uppercase tracking-wider transition-smooth rounded-none hover:text-accent-gold",
            style: { borderColor: "#1A237E" },
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-section-label text-muted-foreground mb-2", children: "Since 1854" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "typo-section-heading", style: { color: "#0F3399" }, children: "History & Legacy" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-body mt-3 text-muted-foreground max-w-xl mx-auto", children: "Over 170 years of excellence, innovation, and nation-building from the heart of Pune" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-gold mt-5 mx-auto" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-4xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block",
              style: { background: "rgba(26, 35, 126, 0.2)" }
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
                style: { background: "#1A237E", border: "none" },
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
                  style: { background: "#1A237E", minHeight: 64 }
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
  const [imgError, setImgError] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border shadow-premium inline-block max-w-sm w-full group overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "relative overflow-hidden flex-shrink-0",
        style: { height: 180 },
        children: [
          !imgError ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: entry.imageUrl,
              alt: entry.title,
              className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",
              loading: "lazy",
              onError: () => setImgError(true)
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-full h-full",
              style: {
                background: `linear-gradient(135deg, ${entry.color} 0%, #081E5C 100%)`
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-3 left-3 px-3 py-1 text-white text-xs font-bold tracking-widest font-inter",
              style: { background: entry.color, opacity: 0.95 },
              children: entry.year
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "p-6",
        style: { textAlign: align === "right" ? "right" : "left" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "typo-card-title mt-0 mb-2", style: { color: "#0F3399" }, children: entry.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "typo-body text-muted-foreground",
              style: { fontSize: "0.875rem" },
              children: entry.description
            }
          )
        ]
      }
    )
  ] });
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
            className: "typo-stat-number leading-none mb-2",
            style: { color: "#0F3399" },
            children: [
              stat.prefix,
              formatNum(count),
              stat.suffix
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "typo-support mb-2", style: { color: "#0F3399" }, children: stat.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-stat-label text-muted-foreground leading-relaxed", children: stat.description }),
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-section-label mb-3", style: { color: "#0F3399" }, children: "Our Legacy" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h2",
                {
                  className: "typo-section-heading leading-tight",
                  style: { color: "#0F3399" },
                  children: "Why COEP Technological University"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-body mt-3 text-muted-foreground", children: "Shaping engineers and leaders since 1854" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "mt-5 mx-auto",
                  style: {
                    height: 3,
                    width: 64,
                    background: "#1A237E",
                    borderRadius: 2
                  }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-border overflow-hidden shadow-premium", children: STAT_DEFS.map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatCountCard, { stat, index: i }) }, stat.label)) })
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-section-label text-muted-foreground mb-2", children: "Campus Experience" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "typo-section-heading", style: { color: "#0F3399" }, children: "Life at COEP" }),
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
                        style: { background: "rgba(8, 30, 92, 0.52)" },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "text-white font-bold text-lg leading-snug",
                            style: { fontFamily: "var(--font-heading)" },
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
                          background: "linear-gradient(to top, rgba(8, 30, 92, 0.7) 0%, transparent 60%)"
                        },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "text-white font-bold text-xs uppercase tracking-widest",
                            style: { fontFamily: "var(--font-heading)" },
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
            style: { background: "#1A237E", border: "none" },
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
            boxShadow: hovered ? "0 8px 28px rgba(26, 35, 126, 0.15)" : "0 2px 8px rgba(0,0,0,0.04)"
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
                        parent.style.background = "linear-gradient(135deg, #0F3399 0%, #1A237E 100%)";
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
                    background: "linear-gradient(to top, rgba(8, 30, 92, 0.5) 0%, transparent 50%)"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute top-0 left-0 h-[3px] w-full",
                  style: { background: hovered ? "#E8C42A" : "#1A237E" }
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    className: "typo-card-title leading-snug flex-1",
                    style: { color: "#0F3399" },
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
                    style: {
                      background: "rgba(26, 35, 126, 0.08)",
                      color: "#1A237E"
                    },
                    children: paper.journal
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-xs font-semibold px-2.5 py-1",
                    style: { background: "rgba(26, 35, 126, 0.1)", color: "#1A237E" },
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-section-label text-muted-foreground mb-2", children: "Knowledge Creation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "typo-section-heading", style: { color: "#0F3399" }, children: "Research & Innovation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-body mt-2 text-muted-foreground", children: "Pioneering discoveries at COEP Technological University" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-gold mt-3" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: RESEARCH_PAPERS.map((paper, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ResearchCard, { paper, index: i }, paper.title)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/research", "data-ocid": "research.view_more_button", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        className: "px-10 py-3 rounded-none text-sm font-semibold uppercase tracking-wider text-white transition-smooth",
        style: { background: "#1A237E", border: "none" },
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
    /* @__PURE__ */ jsxRuntimeExports.jsx(CollaborationsSection, {}),
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
