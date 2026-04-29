import { a as useParams, u as useNavigate, r as reactExports, j as jsxRuntimeExports } from "./index-pJv4La_B.js";
import { L as Layout } from "./Layout-BxZ-EAyt.js";
import { S as SubTabRibbon } from "./SubTabRibbon-BV78wOy3.js";
import { U as Users } from "./users-D6wJB7q2.js";
import { Z as Zap } from "./zap-DadRIX4V.js";
import { D as Dumbbell, W as Wifi } from "./wifi-1ZGHhDP2.js";
import { M as MapPin } from "./Header-CcG4v8lu.js";
import { B as BookOpen } from "./book-open-Dy4rU5Gt.js";
import { A as Award } from "./award-BUj2a9Aj.js";
import { c as createLucideIcon } from "./utils-bVAKhGf7.js";
import { S as Shield } from "./shield-BxfzmClj.js";
import "./x-_atQWee8.js";
import "./chevron-left-BE8I_4bk.js";
import "./chevron-right-DJxfNPv9.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ]
];
const Heart = createLucideIcon("heart", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2", key: "cjf0a3" }],
  ["path", { d: "M7 2v20", key: "1473qp" }],
  ["path", { d: "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7", key: "j28e5" }]
];
const Utensils = createLucideIcon("utensils", __iconNode);
const COBALT = "#1A237E";
const DEEP_BLUE = "#0F3399";
const MIDNIGHT = "#081E5C";
const GOLD = "#E8C42A";
const TABS = [
  { id: "overview", label: "Overview" },
  { id: "clubs", label: "Clubs & Societies" },
  { id: "fests", label: "Fests & Events" },
  { id: "sports", label: "Sports" },
  { id: "hostel", label: "Hostel Life" },
  { id: "services", label: "Student Services" }
];
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
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}
function useCountUp(target, duration = 1800) {
  const [count, setCount] = reactExports.useState(0);
  const [started, setStarted] = reactExports.useState(false);
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  reactExports.useEffect(() => {
    if (!started) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);
  return { count, ref };
}
function SectionHeading({
  title,
  subtitle
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "w-14 h-1.5 rounded mb-4",
        style: {
          background: `linear-gradient(90deg, ${COBALT}, ${DEEP_BLUE})`
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "h2",
      {
        className: "typo-section-heading font-bold mb-3",
        style: { color: DEEP_BLUE },
        children: title
      }
    ),
    subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-body-lg max-w-2xl", style: { color: "#556" }, children: subtitle })
  ] });
}
function HeroSection() {
  const stats = [
    {
      label: "Clubs & Societies",
      value: "100+",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-5 h-5" })
    },
    { label: "Annual Fests", value: "3", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-5 h-5" }) },
    {
      label: "Sports Facilities",
      value: "10+",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Dumbbell, { className: "w-5 h-5" })
    },
    {
      label: "Hostel Capacity",
      value: "2000+",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-5 h-5" })
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "relative overflow-hidden",
      style: {
        background: `linear-gradient(135deg, ${MIDNIGHT} 0%, ${DEEP_BLUE} 40%, ${COBALT} 100%)`,
        minHeight: "480px"
      },
      "data-ocid": "campus_life.hero",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute -top-16 -right-16 w-80 h-80 rounded-full opacity-10",
            style: { background: GOLD }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute -bottom-12 -left-12 w-56 h-56 rounded-full opacity-8",
            style: { background: COBALT, filter: "blur(40px)" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-5",
            style: {
              background: `radial-gradient(circle, ${GOLD}, transparent 70%)`
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-[1280px] mx-auto px-4 xl:px-8 py-20 flex flex-col items-center text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "typo-section-label inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6 fade-in-down",
              style: {
                backgroundColor: "rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.9)",
                border: "1px solid rgba(255,255,255,0.25)"
              },
              "data-ocid": "campus_life.hero_badge",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "w-2 h-2 rounded-full animate-pulse-cobalt",
                    style: { backgroundColor: "rgba(255,255,255,0.9)" }
                  }
                ),
                "COEP Technological University"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "h1",
            {
              className: "typo-hero-heading text-white mb-5 fade-in-up",
              style: { animationDelay: "0.1s" },
              "data-ocid": "campus_life.hero_title",
              children: [
                "Campus Life",
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "block text-4xl md:text-5xl mt-2 font-normal",
                    style: { color: "rgba(255,255,255,0.8)" },
                    children: "at COEP"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "typo-hero-desc text-white/80 max-w-2xl mb-10 fade-in-up",
              style: { animationDelay: "0.22s" },
              children: "Where Education Meets Experience — A Vibrant Campus Life that nurtures engineers, creators, and leaders of tomorrow."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-3xl fade-in-up",
              style: { animationDelay: "0.36s" },
              "data-ocid": "campus_life.hero_stats",
              children: stats.map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex flex-col items-center gap-2 py-5 px-3 rounded-2xl",
                  style: {
                    background: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.18)",
                    backdropFilter: "blur(8px)"
                  },
                  "data-ocid": `campus_life.stat.${i + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-10 h-10 rounded-full flex items-center justify-center",
                        style: {
                          backgroundColor: "rgba(255,255,255,0.15)",
                          color: "rgba(255,255,255,0.9)"
                        },
                        children: stat.icon
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "typo-stat-number", style: { color: "white" }, children: stat.value }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "typo-stat-label uppercase tracking-wider text-white/70", children: stat.label })
                  ]
                },
                stat.label
              ))
            }
          )
        ] })
      ]
    }
  );
}
const CAMPUS_PHOTOS = [
  {
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80",
    label: "Engineering Block",
    span: "row-span-2"
  },
  {
    src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80",
    label: "Campus Grounds",
    span: ""
  },
  {
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80",
    label: "Cultural Fest",
    span: ""
  },
  {
    src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&q=80",
    label: "Sports Arena",
    span: "row-span-2"
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    label: "Student Community",
    span: ""
  },
  {
    src: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=600&q=80",
    label: "Boat Club — Heritage Since 1869",
    span: "col-span-2"
  },
  {
    src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80",
    label: "Central Library",
    span: ""
  },
  {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80",
    label: "Research Labs",
    span: ""
  },
  {
    src: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80",
    label: "ZEST Sports Fest",
    span: ""
  },
  {
    src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80",
    label: "Hostel Campus Life",
    span: ""
  }
];
function OverviewSection() {
  const { ref: ref1, visible: v1 } = useReveal();
  const { ref: ref2, visible: v2 } = useReveal();
  const { ref: ref3, visible: v3 } = useReveal();
  const highlights = [
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-7 h-7" }),
      title: "100+ Student Clubs",
      desc: "From robotics to drama — a club for every passion, skill, and ambition on campus."
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-7 h-7" }),
      title: "3 Mega Annual Fests",
      desc: "IMPRESSIONS (cultural), ZEST (sports), and AAROHAN (technical) draw thousands across Pune."
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Dumbbell, { className: "w-7 h-7" }),
      title: "World-Class Sports",
      desc: "Cricket, football, swimming, tennis, basketball, hockey — 10+ facilities for athletes."
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-7 h-7" }),
      title: "Residential Campus",
      desc: "8 boys' and 2 girls' hostels with 2000+ capacity, mess, Wi-Fi, gym, and 24/7 security."
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-7 h-7" }),
      title: "Student Support",
      desc: "Counseling, medical center, grievance cell, and disability support services for every student."
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-7 h-7" }),
      title: "Gold Medals & Honours",
      desc: "Annual convocation celebrating academic excellence, research, and contribution to college life."
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeading,
      {
        title: "Life Beyond the Classroom",
        subtitle: "COEP's campus is a living, breathing ecosystem where academic rigor meets a vibrant extracurricular culture — shaping students into well-rounded professionals."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref: ref1,
        className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16",
        style: {
          opacity: v1 ? 1 : 0,
          transform: v1 ? "none" : "translateY(24px)",
          transition: "all 0.7s ease-out"
        },
        children: highlights.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "group rounded-2xl p-6 border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-premium",
            style: {
              borderColor: `${COBALT}22`,
              animationDelay: `${i * 80}ms`
            },
            "data-ocid": `overview.highlight.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110",
                  style: { backgroundColor: `${COBALT}12`, color: COBALT },
                  children: item.icon
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "typo-card-title mb-2", style: { color: DEEP_BLUE }, children: item.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-card-desc", style: { color: "#556" }, children: item.desc })
            ]
          },
          item.title
        ))
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        ref: ref2,
        className: "rounded-3xl px-10 py-12 mb-16 text-center relative overflow-hidden",
        style: {
          background: `linear-gradient(135deg, ${MIDNIGHT} 0%, ${DEEP_BLUE} 55%, ${COBALT} 100%)`,
          opacity: v2 ? 1 : 0,
          transform: v2 ? "none" : "scale(0.97)",
          transition: "all 0.7s ease-out"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute -top-8 -right-8 w-48 h-48 rounded-full opacity-10",
              style: { background: GOLD }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "text-6xl font-serif leading-none",
                style: { color: "rgba(255,255,255,0.7)" },
                children: '"'
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "typo-body-lg text-2xl text-white font-light max-w-3xl mx-auto -mt-4",
                style: { lineHeight: 1.5 },
                children: "At COEP, we believe that education is not just about degrees — it is about character, community, and the courage to innovate."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-section-label mt-4 text-white/60", children: "— COEP Technological University, Est. 1854" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        ref: ref3,
        style: {
          opacity: v3 ? 1 : 0,
          transform: v3 ? "none" : "translateY(28px)",
          transition: "all 0.8s ease-out"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              className: "typo-section-heading font-bold mb-2",
              style: { color: DEEP_BLUE },
              children: "Campus Highlights"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-body mb-8 max-w-2xl", style: { color: "#556" }, children: "A glimpse into the vibrant world of COEP — where every corner of campus has a story to tell." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[160px]", children: CAMPUS_PHOTOS.map((photo, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `relative rounded-2xl overflow-hidden group cursor-pointer ${photo.span ?? ""}`,
              style: {
                transitionDelay: `${i * 60}ms`
              },
              "data-ocid": `overview.campus_photo.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: photo.src,
                    alt: photo.label,
                    className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",
                    loading: "lazy"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4",
                    style: {
                      background: `linear-gradient(to top, ${MIDNIGHT}e0 0%, transparent 60%)`
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "typo-support text-white font-semibold", children: photo.label })
                  }
                )
              ]
            },
            photo.label
          )) })
        ]
      }
    )
  ] });
}
const ALL_CLUBS = [
  // Technical
  {
    name: "COEP ACM Student Chapter",
    category: "Technical",
    desc: "Association for Computing Machinery chapter focused on algorithms, AI research, and competitive programming.",
    contact: "acm@coeptech.ac.in"
  },
  {
    name: "CSI-COEP",
    category: "Technical",
    desc: "Computer Society of India student unit organizing workshops, paper presentations and tech talks.",
    contact: "csi@coeptech.ac.in"
  },
  {
    name: "IEEE COEP",
    category: "Technical",
    desc: "IEEE-affiliated student branch hosting seminars, project expos, and national paper competitions.",
    contact: "ieee@coeptech.ac.in"
  },
  {
    name: "Robotics Club",
    category: "Technical",
    desc: "Build and compete with autonomous robots at national and international robotics competitions.",
    contact: "robotics@coeptech.ac.in"
  },
  {
    name: "Coding Club (COEP Coder)",
    category: "Technical",
    desc: "Competitive programming, open-source contributions, hackathons and development sprints.",
    contact: "coding@coeptech.ac.in"
  },
  {
    name: "E-Cell COEP",
    category: "Technical",
    desc: "Entrepreneurship cell fostering startups, investor meets, bootcamps, and innovation ideathons.",
    contact: "ecell@coeptech.ac.in"
  },
  // Cultural
  {
    name: "Fine Arts Club",
    category: "Cultural",
    desc: "Painting, sculpting, graphic design, and visual arts exhibitions celebrating student creativity.",
    contact: "arts@coeptech.ac.in"
  },
  {
    name: "Music Club — Taal",
    category: "Cultural",
    desc: "Classical and contemporary music, band performances, and inter-college music competitions.",
    contact: "music@coeptech.ac.in"
  },
  {
    name: "Drama Club",
    category: "Cultural",
    desc: "Street plays, one-act performances, inter-college competitions, and theatre workshops.",
    contact: "drama@coeptech.ac.in"
  },
  {
    name: "Photography Club",
    category: "Cultural",
    desc: "Photo walks, workshops, contests, and exhibitions capturing the essence of campus life.",
    contact: "photography@coeptech.ac.in"
  },
  {
    name: "Literary Club",
    category: "Cultural",
    desc: "Creative writing, poetry, debates, quizzes, and the annual COEP literary magazine.",
    contact: "literary@coeptech.ac.in"
  },
  // Social/Service
  {
    name: "NSS Unit COEP",
    category: "Social",
    desc: "National Service Scheme driving community development, health camps, and environmental drives.",
    contact: "nss@coeptech.ac.in"
  },
  {
    name: "NCC Unit",
    category: "Social",
    desc: "National Cadet Corps instilling discipline, patriotism, and leadership in young cadets.",
    contact: "ncc@coeptech.ac.in"
  },
  {
    name: "Rotaract Club",
    category: "Social",
    desc: "Rotary-affiliated service club organizing blood donation, clean-up drives, and awareness campaigns.",
    contact: "rotaract@coeptech.ac.in"
  },
  {
    name: "Green Earth COEP",
    category: "Social",
    desc: "Sustainability, tree plantation, energy audits, and eco-awareness campaigns on campus.",
    contact: "green@coeptech.ac.in"
  },
  // Professional/Career
  {
    name: "Finance Club",
    category: "Professional",
    desc: "Finance fundamentals, market simulations, case competitions, and industry expert sessions.",
    contact: "finance@coeptech.ac.in"
  },
  {
    name: "Marketing Club",
    category: "Professional",
    desc: "Brand strategy, marketing competitions, guest lectures, and industry immersion programs.",
    contact: "marketing@coeptech.ac.in"
  },
  {
    name: "Debate Society",
    category: "Professional",
    desc: "Public speaking, Model United Nations, parliamentary debates, and elocution contests.",
    contact: "debate@coeptech.ac.in"
  },
  // Adventure/Sports
  {
    name: "Trekking Club",
    category: "Adventure",
    desc: "Weekend treks, Himalayan expeditions, rappelling, and adventure sport workshops.",
    contact: "trekking@coeptech.ac.in"
  },
  {
    name: "Cycling Club",
    category: "Adventure",
    desc: "City rides, cyclothons, endurance training, and cycling rallies across Maharashtra.",
    contact: "cycling@coeptech.ac.in"
  },
  {
    name: "COEP Boat Club",
    category: "Adventure",
    desc: "Historic since 1869 — rowing, kayaking, and water sports on the Mula river, Pune.",
    contact: "boatclub@coeptech.ac.in"
  }
];
const CAT_CONFIG = {
  Technical: {
    bg: "#e8f0fe",
    text: COBALT,
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-3.5 h-3.5" })
  },
  Cultural: {
    bg: "#e8f0fe",
    text: "#1A237E",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-3.5 h-3.5" })
  },
  Social: {
    bg: "#f0fdf4",
    text: "#16a34a",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-3.5 h-3.5" })
  },
  Professional: {
    bg: "#fff7ed",
    text: "#ea580c",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-3.5 h-3.5" })
  },
  Adventure: {
    bg: "#fef9ec",
    text: "#b45309",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3.5 h-3.5" })
  }
};
function ClubsSection() {
  const [filter, setFilter] = reactExports.useState("All");
  const categories = [
    "All",
    "Technical",
    "Cultural",
    "Social",
    "Professional",
    "Adventure"
  ];
  const filtered = filter === "All" ? ALL_CLUBS : ALL_CLUBS.filter((c) => c.category === filter);
  const { ref, visible } = useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeading,
      {
        title: "Clubs & Societies",
        subtitle: "Over 100 student-run clubs spanning technical, cultural, social, professional, and adventure domains — find your tribe at COEP."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-8", "data-ocid": "clubs.filter_bar", children: categories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => setFilter(cat),
        className: "typo-btn px-4 py-2 rounded-full text-sm transition-all duration-200 hover:shadow-cobalt",
        style: {
          backgroundColor: filter === cat ? COBALT : "#f0f4ff",
          color: filter === cat ? "#fff" : COBALT,
          border: `1px solid ${COBALT}30`
        },
        "data-ocid": `clubs.filter.${cat.toLowerCase()}`,
        children: cat === "All" ? `All (${ALL_CLUBS.length})` : cat
      },
      cat
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref,
        className: "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5",
        style: {
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(20px)",
          transition: "all 0.6s ease-out"
        },
        children: filtered.map((club, i) => {
          const style = CAT_CONFIG[club.category];
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "group rounded-2xl p-5 border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-premium hover:border-cobalt-subtle",
              style: {
                borderColor: `${COBALT}18`,
                animationDelay: `${i * 80}ms`
              },
              "data-ocid": `clubs.item.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold",
                      style: { backgroundColor: style.bg, color: style.text },
                      children: [
                        style.icon,
                        club.category
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110",
                      style: { backgroundColor: `${COBALT}12`, color: COBALT },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4" })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "typo-card-title mb-2", style: { color: DEEP_BLUE }, children: club.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-card-desc", style: { color: "#556" }, children: club.desc })
              ]
            },
            club.name
          );
        })
      }
    )
  ] });
}
const FESTS = [
  {
    name: "IMPRESSIONS",
    tag: "Annual Cultural Fest",
    period: "October / November",
    color: `linear-gradient(135deg, ${MIDNIGHT} 0%, #3b1f8c 100%)`,
    accentColor: "#a855f7",
    highlights: [
      "Largest cultural fest in Pune — 30+ competitive events",
      "5,000+ participants from colleges across Maharashtra",
      "Dance, drama, music, art, photography & fashion events",
      "Celebrity performances and celebrity DJ nights",
      "5-day extravaganza with pro-nights and exhibitions"
    ],
    cta: "Register for Impressions",
    icon: "🎭"
  },
  {
    name: "ZEST",
    tag: "Annual Sports Fest",
    period: "January / February",
    color: "linear-gradient(135deg, #0a5c2f 0%, #16a34a 100%)",
    accentColor: "#4ade80",
    highlights: [
      "Inter-college sports meet with 20+ competitive sports",
      "Cyclothon and Marathon open to all Pune residents",
      "Track & field, team sports, and aquatics",
      "1,000+ athletes from colleges across Pune",
      "Trophies, certificates, and prize money for winners"
    ],
    cta: "Register for ZEST",
    icon: "🏆"
  },
  {
    name: "AAROHAN",
    tag: "Annual Technical Fest",
    period: "March",
    color: `linear-gradient(135deg, ${MIDNIGHT} 0%, ${DEEP_BLUE} 60%, ${COBALT} 100%)`,
    accentColor: COBALT,
    highlights: [
      "Hackathons, robotics battles, and design challenges",
      "Industry talks from top tech companies and startups",
      "Paper presentations, project expos, and coding contests",
      "3,000+ registrations from engineering colleges pan-India",
      "Internship and PPO opportunities from participating companies"
    ],
    cta: "Register for AAROHAN",
    icon: "⚙️"
  }
];
function FestsSection() {
  const { ref: r1, visible: v1 } = useReveal();
  const { ref: r2, visible: v2 } = useReveal();
  const { ref: r3, visible: v3 } = useReveal();
  const refs = [r1, r2, r3];
  const visibles = [v1, v2, v3];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeading,
      {
        title: "Annual Fests & Signature Events",
        subtitle: "Three legendary festivals that define the COEP student experience and bring Pune to a standstill every year."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8", children: FESTS.map((fest, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref: refs[i],
        className: "rounded-3xl overflow-hidden shadow-premium transition-all duration-300 hover:shadow-premium-hover hover:-translate-y-1",
        style: {
          opacity: visibles[i] ? 1 : 0,
          transform: visibles[i] ? "none" : i % 2 === 0 ? "translateX(-28px)" : "translateX(28px)",
          transition: `all 0.7s ease-out ${i * 0.15}s`
        },
        "data-ocid": `fests.card.${i + 1}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", style: { background: fest.color }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-10",
                style: { background: fest.accentColor }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute -bottom-10 -left-10 w-48 h-48 rounded-full opacity-8",
                style: { background: fest.accentColor, filter: "blur(30px)" }
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 grid md:grid-cols-5 gap-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2 p-10 flex flex-col justify-between border-r border-white/10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-6xl mb-4 block", children: fest.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "typo-hero-heading text-white mb-2", children: fest.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "typo-section-label inline-block px-3 py-1 rounded-full mb-3",
                    style: {
                      backgroundColor: `${fest.accentColor}30`,
                      color: fest.accentColor,
                      border: `1px solid ${fest.accentColor}50`
                    },
                    children: fest.tag
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "typo-support text-white/60 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "w-2 h-2 rounded-full inline-block",
                      style: { backgroundColor: fest.accentColor }
                    }
                  ),
                  fest.period
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  className: "typo-btn mt-8 px-6 py-3 rounded-xl transition-all duration-200 hover:opacity-90 hover:scale-105",
                  style: {
                    backgroundColor: GOLD,
                    color: MIDNIGHT
                  },
                  "data-ocid": `fests.register_button.${i + 1}`,
                  children: [
                    fest.cta,
                    " →"
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-3 p-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h4",
                {
                  className: "typo-section-label mb-6",
                  style: { color: fest.accentColor },
                  children: "Event Highlights"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4", children: fest.highlights.map((hl) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "mt-1.5 w-2 h-2 rounded-full flex-shrink-0",
                    style: { backgroundColor: fest.accentColor }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "typo-body text-white/85", children: hl })
              ] }, hl)) })
            ] })
          ] })
        ] })
      },
      fest.name
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "mt-10 rounded-2xl p-8 border",
        style: { borderColor: `${COBALT}22`, background: "#f7f9ff" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              className: "typo-section-heading font-bold mb-4",
              style: { color: DEEP_BLUE },
              children: "Other Signature Events"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-3 gap-4", children: [
            {
              name: "Mindspark",
              desc: "Bi-annual inter-college technical symposium with 40+ events and 5,000+ participants."
            },
            {
              name: "Alumni Meet",
              desc: "Annual gathering of COEP alumni — networking, mentoring sessions, and panel discussions."
            },
            {
              name: "Cyclothon",
              desc: "City-wide cycling event promoting fitness and green commuting through Pune streets."
            }
          ].map((event, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "rounded-xl p-4 bg-white border",
              style: { borderColor: `${COBALT}18` },
              "data-ocid": `fests.other.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "typo-card-title mb-1", style: { color: DEEP_BLUE }, children: event.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-card-desc", style: { color: "#556" }, children: event.desc })
              ]
            },
            event.name
          )) })
        ]
      }
    )
  ] });
}
const SPORTS_FACILITIES = [
  {
    icon: "🏏",
    name: "Cricket Ground",
    desc: "Full-size turf ground with net practice and floodlights."
  },
  {
    icon: "🏑",
    name: "Hockey Ground",
    desc: "Regulation synthetic astro-turf hockey field."
  },
  {
    icon: "⚽",
    name: "Football Ground",
    desc: "FIFA-standard football pitch for inter-college matches."
  },
  {
    icon: "🎾",
    name: "Lawn Tennis Courts",
    desc: "2 hard-court tennis courts open to all students."
  },
  {
    icon: "🏀",
    name: "Basketball Court",
    desc: "Full-size regulation basketball court with flood lighting."
  },
  {
    icon: "🏐",
    name: "Volleyball Court",
    desc: "Outdoor volleyball court and sand pit."
  },
  {
    icon: "🏸",
    name: "Badminton Hall",
    desc: "4 indoor synthetic courts — open year-round."
  },
  {
    icon: "🏓",
    name: "Table Tennis",
    desc: "6 TT tables in a dedicated indoor facility."
  },
  {
    icon: "💪",
    name: "Gymnasium",
    desc: "Modern gym with cardio machines, free weights, and a yoga space."
  },
  {
    icon: "🏊",
    name: "Swimming Pool",
    desc: "Olympic-size pool with lanes for competitive training."
  }
];
const SPORTS_ACHIEVEMENTS = [
  "Inter-University Cricket Champions — Savitribai Phule Pune University (3× consecutive years)",
  "All-India Inter-University Rowing Championship — Gold (COEP Boat Club)",
  "Maharashtra State Athletics Meet — Multiple track & field medals",
  "Inter-University Football Tournament — Runners-Up, 2023",
  "Khelo India University Games Participants — 12 athletes selected, 2024",
  "Cycling — Maharashtra State Road Race Champion, 2023",
  "National Level Shooting Championship — 2 Bronze Medals",
  "Chess — All-India Inter-University Bronze Medallist"
];
function SportsSection() {
  const { ref: refL, visible: visL } = useReveal();
  const { ref: refR, visible: visR } = useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeading,
      {
        title: "Sports Facilities & Achievements",
        subtitle: "COEP's sporting culture is legendary — with world-class facilities and a proud tradition of inter-university champions."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          ref: refL,
          style: {
            opacity: visL ? 1 : 0,
            transform: visL ? "none" : "translateX(-24px)",
            transition: "all 0.7s ease-out"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h3",
              {
                className: "typo-section-heading font-bold mb-6",
                style: { color: DEEP_BLUE },
                children: "Sports Facilities"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: SPORTS_FACILITIES.map((facility, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-start gap-4 rounded-xl p-4 border bg-white transition-all duration-200 hover:shadow-premium hover:-translate-y-0.5",
                style: { borderColor: `${COBALT}18` },
                "data-ocid": `sports.facility.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "text-2xl flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl",
                      style: { backgroundColor: `${COBALT}10` },
                      children: facility.icon
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "h4",
                      {
                        className: "typo-card-title mb-0.5",
                        style: { color: DEEP_BLUE },
                        children: facility.name
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-card-desc", style: { color: "#556" }, children: facility.desc })
                  ] })
                ]
              },
              facility.name
            )) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          ref: refR,
          style: {
            opacity: visR ? 1 : 0,
            transform: visR ? "none" : "translateX(24px)",
            transition: "all 0.7s ease-out"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h3",
              {
                className: "typo-section-heading font-bold mb-6",
                style: { color: DEEP_BLUE },
                children: "Championship Achievements"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 mb-8", children: SPORTS_ACHIEVEMENTS.map((ach, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-start gap-4 rounded-xl p-4 border bg-white",
                style: { borderColor: "rgba(26, 35, 126, 0.25)" },
                "data-ocid": `sports.achievement.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-xs",
                      style: {
                        background: `linear-gradient(135deg, ${COBALT}, ${DEEP_BLUE})`,
                        color: "white",
                        fontFamily: "var(--font-heading)"
                      },
                      children: i + 1
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-body", style: { color: "#444" }, children: ach })
                ]
              },
              ach
            )) })
          ]
        }
      )
    ] })
  ] });
}
const HOSTELS = [
  { name: "Purandar", gender: "Boys", capacity: 350, block: "A" },
  { name: "Shivneri", gender: "Boys", capacity: 280, block: "B" },
  { name: "Singhagad", gender: "Boys", capacity: 300, block: "C" },
  { name: "Raigad", gender: "Boys", capacity: 320, block: "D" },
  { name: "Kondhana", gender: "Boys", capacity: 200, block: "E" },
  { name: "Rajgad", gender: "Boys", capacity: 180, block: "F" },
  { name: "Jijau", gender: "Girls", capacity: 220, block: "G" },
  { name: "Lohagad", gender: "Girls", capacity: 180, block: "H" }
];
const AMENITIES = [
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Wifi, { className: "w-6 h-6" }),
    title: "24/7 High-Speed WiFi",
    desc: "Gigabit internet throughout all hostel buildings."
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Utensils, { className: "w-6 h-6" }),
    title: "Nutritious Mess Food",
    desc: "4 meals/day — breakfast, lunch, snacks & dinner."
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-6 h-6" }),
    title: "24/7 Security",
    desc: "CCTV surveillance, biometric entry, and wardens."
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-6 h-6" }),
    title: "On-Campus Medical Center",
    desc: "Doctor on call, dispensary, and emergency care."
  }
];
function HostelSection() {
  const { ref: refH, visible: visH } = useReveal();
  const { ref: refA, visible: visA } = useReveal();
  const boysHostels = HOSTELS.filter((h) => h.gender === "Boys");
  const girlsHostels = HOSTELS.filter((h) => h.gender === "Girls");
  function HostelCard({
    hostel,
    index
  }) {
    const { count, ref } = useCountUp(hostel.capacity, 1400);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        ref,
        className: "rounded-2xl p-5 border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-premium",
        style: {
          borderColor: hostel.gender === "Boys" ? `${COBALT}22` : "rgba(26, 35, 126, 0.22)"
        },
        "data-ocid": `hostel.card.${index + 1}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "typo-card-title mb-3", style: { color: DEEP_BLUE }, children: hostel.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "text-xs font-bold px-2 py-1 rounded-full",
                style: {
                  backgroundColor: hostel.gender === "Boys" ? `${COBALT}15` : "rgba(26, 35, 126, 0.1)",
                  color: hostel.gender === "Boys" ? COBALT : DEEP_BLUE
                },
                children: hostel.gender
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "typo-stat-number mb-1", style: { color: COBALT }, children: [
            count,
            "+"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "typo-stat-label uppercase tracking-wide",
              style: { color: "#888" },
              children: "Resident Capacity"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "typo-support mt-3", style: { color: "#666" }, children: [
            "Block ",
            hostel.block,
            " · 24/7 Warden · Wi-Fi"
          ] })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeading,
      {
        title: "On-Campus Residences",
        subtitle: "COEP's residential campus offers a home away from home — with 8 hostels, modern amenities, and a vibrant community of 2,000+ residents."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        ref: refA,
        className: "rounded-3xl p-8 mb-12",
        style: {
          background: `linear-gradient(135deg, ${MIDNIGHT} 0%, ${DEEP_BLUE} 55%, ${COBALT} 100%)`,
          opacity: visA ? 1 : 0,
          transform: visA ? "none" : "scale(0.97)",
          transition: "all 0.7s ease-out"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "typo-section-heading font-bold text-white mb-6 text-center", children: "Hostel Amenities" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: AMENITIES.map((amenity, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex flex-col items-center text-center p-5 rounded-2xl",
              style: {
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.15)"
              },
              "data-ocid": `hostel.amenity.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-12 h-12 rounded-full flex items-center justify-center mb-3",
                    style: {
                      backgroundColor: "rgba(255,255,255,0.15)",
                      color: "rgba(255,255,255,0.9)"
                    },
                    children: amenity.icon
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "typo-support font-semibold text-white text-sm mb-1", children: amenity.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-stat-label text-white/60", children: amenity.desc })
              ]
            },
            amenity.title
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap gap-6 justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "typo-stat-number text-white block", children: "₹35,000–₹55,000" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "typo-stat-label text-white/60", children: "Annual Hostel Fee (approx.)" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "typo-stat-number text-white block", children: "₹28,000" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "typo-stat-label text-white/60", children: "Mess Fee (annual approx.)" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "typo-stat-number text-white block", children: "2,000+" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "typo-stat-label text-white/60", children: "Total Residents" })
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        ref: refH,
        style: {
          opacity: visH ? 1 : 0,
          transform: visH ? "none" : "translateY(24px)",
          transition: "all 0.7s ease-out"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              className: "typo-section-heading font-bold mb-5",
              style: { color: DEEP_BLUE },
              children: "Boys' Hostels"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10", children: boysHostels.map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(HostelCard, { hostel: h, index: i }, h.name)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              className: "typo-section-heading font-bold mb-5",
              style: { color: DEEP_BLUE },
              children: "Girls' Hostels"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: girlsHostels.map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            HostelCard,
            {
              hostel: h,
              index: boysHostels.length + i
            },
            h.name
          )) })
        ]
      }
    )
  ] });
}
const STUDENT_SERVICES = [
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-7 h-7" }),
    title: "Student Counseling Center",
    desc: "Professional mental health support with qualified counselors. Individual sessions, group workshops, stress management programs, and peer support groups. Strictly confidential.",
    contact: "counseling@coeptech.ac.in",
    phone: "020-2550-7023",
    cta: "Book Appointment",
    color: "#e8f0fe"
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-7 h-7" }),
    title: "On-Campus Medical Center",
    desc: "Full-service health facility with qualified doctors, nurses, and pharmacy. Emergency assistance, routine check-ups, and referrals to Sassoon Hospital for specialist care.",
    contact: "medical@coeptech.ac.in",
    phone: "020-2550-7025",
    cta: "Emergency: 020-2550-7025",
    color: "#f0fdf4"
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-7 h-7" }),
    title: "Grievance Redressal Cell",
    desc: "Transparent, impartial grievance mechanism for academic, administrative, and hostel complaints. Registered complaints receive a response within 7 working days.",
    contact: "grievance@coeptech.ac.in",
    phone: "020-2550-7010",
    cta: "File Grievance",
    color: "#fff7ed"
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-7 h-7" }),
    title: "Disability Support Services",
    desc: "Comprehensive accessibility provisions: ramps, accessible washrooms, scribes for examinations, extended time allowances, and special seating. Inclusive and supportive environment.",
    contact: "disability@coeptech.ac.in",
    phone: "020-2550-7012",
    cta: "Request Support",
    color: "#fdf4ff"
  }
];
function ServicesSection() {
  const { ref, visible } = useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeading,
      {
        title: "Student Support Services",
        subtitle: "COEP provides a comprehensive network of support services ensuring every student can thrive — academically, physically, and emotionally."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref,
        className: "grid sm:grid-cols-2 gap-6",
        style: {
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(24px)",
          transition: "all 0.7s ease-out"
        },
        children: STUDENT_SERVICES.map((service, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "group rounded-2xl p-7 border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-premium",
            style: { borderColor: `${COBALT}18` },
            "data-ocid": `services.card.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110",
                    style: { backgroundColor: service.color, color: COBALT },
                    children: service.icon
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    className: "typo-card-title leading-tight",
                    style: { color: DEEP_BLUE },
                    children: service.title
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-body mb-5", style: { color: "#556" }, children: service.desc }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 mb-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-2 text-xs",
                    style: {
                      color: "#777",
                      fontFamily: "Source Sans 3, sans-serif"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Email:" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "a",
                        {
                          href: `mailto:${service.contact}`,
                          className: "hover:underline",
                          style: { color: COBALT },
                          children: service.contact
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-2 text-xs",
                    style: {
                      color: "#777",
                      fontFamily: "Source Sans 3, sans-serif"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Phone:" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "a",
                        {
                          href: `tel:${service.phone}`,
                          className: "hover:underline",
                          style: { color: COBALT },
                          children: service.phone
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
                  className: "typo-btn w-full py-2.5 rounded-xl transition-all duration-200 hover:opacity-90",
                  style: {
                    backgroundColor: COBALT,
                    color: "#fff"
                  },
                  "data-ocid": `services.cta_button.${i + 1}`,
                  children: [
                    service.cta,
                    " →"
                  ]
                }
              )
            ]
          },
          service.title
        ))
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "mt-10 rounded-2xl p-8 border",
        style: { borderColor: `${COBALT}22`, background: "#f7f9ff" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              className: "typo-section-heading font-bold mb-5",
              style: { color: DEEP_BLUE },
              children: "Additional Resources"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-3 gap-4", children: [
            {
              name: "Dean Student Welfare",
              contact: "dean.sw@coeptech.ac.in",
              desc: "All student welfare matters, appeals, and special requests."
            },
            {
              name: "Central Library",
              contact: "library@coeptech.ac.in",
              desc: "1 lakh+ books, IEEE Xplore, JSTOR access. Open till 10 PM."
            },
            {
              name: "Career Development Cell",
              contact: "cdc@coeptech.ac.in",
              desc: "Internship, placement support, career counseling, and resume workshops."
            }
          ].map((res, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "rounded-xl p-4 bg-white border",
              style: { borderColor: `${COBALT}18` },
              "data-ocid": `services.resource.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "typo-card-title mb-1", style: { color: DEEP_BLUE }, children: res.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-body text-sm mb-2", style: { color: "#556" }, children: res.desc }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: `mailto:${res.contact}`,
                    className: "typo-support hover:underline",
                    style: { color: COBALT },
                    children: res.contact
                  }
                )
              ]
            },
            res.name
          )) })
        ]
      }
    )
  ] });
}
function StudentLifePage() {
  const params = useParams({ strict: false });
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = reactExports.useState(params.sectionId ?? "overview");
  reactExports.useEffect(() => {
    if (params.sectionId && params.sectionId !== activeTab) {
      setActiveTab(params.sectionId);
    }
  }, [params.sectionId, activeTab]);
  function handleTabChange(tabId) {
    setActiveTab(tabId);
    navigate({ to: "/student-life/$sectionId", params: { sectionId: tabId } });
  }
  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(OverviewSection, {});
      case "clubs":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(ClubsSection, {});
      case "fests":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(FestsSection, {});
      case "sports":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(SportsSection, {});
      case "hostel":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(HostelSection, {});
      case "services":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(ServicesSection, {});
      default:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(OverviewSection, {});
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSection, {}),
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
        className: "max-w-[1280px] mx-auto w-full px-4 xl:px-8 py-14",
        "data-ocid": "campus_life.content",
        children: renderContent()
      }
    )
  ] });
}
export {
  StudentLifePage as default
};
