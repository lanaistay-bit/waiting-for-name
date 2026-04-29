import { a as useParams, j as jsxRuntimeExports, L as Link, r as reactExports } from "./index-CUgpWnl1.js";
import { L as Layout } from "./Layout-RRfaE6HM.js";
import { g as getAdminBySlug } from "./administration-DsOHO0fz.js";
import { A as ArrowLeft } from "./arrow-left-CFmATgsR.js";
import { M as Mail, P as Phone } from "./x-BlGPumW2.js";
import { A as Award } from "./award-tMAAJqb_.js";
import { G as GraduationCap } from "./graduation-cap-DqyoPtVl.js";
import { B as Briefcase } from "./briefcase-CH4UhZr2.js";
import { A as ArrowRight } from "./arrow-right-C87YzZ1A.js";
import "./utils-B1sCwcN7.js";
import "./Header-2Ed_Aw9p.js";
const COBALT = "#1A237E";
const DEEP_BLUE = "#0F3399";
const MIDNIGHT = "#081E5C";
const GOLD = "#E8C42A";
function AnimatedSection({
  children,
  delay = 0,
  className = ""
}) {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(28px)";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transition = `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`;
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.unobserve(el);
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className, children });
}
function ContentCard({
  icon: Icon,
  title,
  children,
  accent = false,
  accentColor = COBALT
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "bg-white rounded-2xl p-7",
      style: {
        border: "1px solid #e5e7eb",
        boxShadow: "0 2px 12px rgba(0,0,0,0.05)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "rounded-full",
              style: {
                width: "4px",
                height: "20px",
                background: accent ? GOLD : accentColor
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0",
              style: {
                background: accent ? "rgba(232,196,42,0.12)" : "rgba(26, 35, 126, 0.08)"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Icon,
                {
                  className: "w-5 h-5",
                  style: { color: accent ? GOLD : accentColor }
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h2",
            {
              className: "font-cinzel font-semibold text-xl",
              style: { color: DEEP_BLUE },
              children: title
            }
          )
        ] }),
        children
      ]
    }
  );
}
function roleLabel(role, slug) {
  if (slug === "chancellor") return "Chancellor, COEP Technological University";
  if (slug === "chairman") return "Chairman, Board of Governance";
  if (role === "dean") return "Dean";
  if (role === "associate-dean") return "Associate Dean";
  if (role === "director") return "Director";
  if (role === "registrar") return "Registrar";
  if (role === "vc") return "Vice Chancellor";
  return "Administration";
}
function AdminProfilePage() {
  const { adminId } = useParams({ from: "/administration/$adminId" });
  const profile = getAdminBySlug(adminId);
  if (!profile) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "min-h-[60vh] flex flex-col items-center justify-center gap-5 text-center px-4",
        "data-ocid": "admin_profile.not_found",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-20 h-20 rounded-full flex items-center justify-center mb-2",
              style: { background: "rgba(26, 35, 126, 0.08)" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: "🔍" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h1",
            {
              className: "font-cinzel font-bold text-3xl",
              style: { color: DEEP_BLUE },
              children: "Profile Not Found"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-body max-w-sm", style: { color: "#6b7280" }, children: "The requested administration profile could not be found." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/administration",
              className: "inline-flex items-center gap-2 px-6 py-3 rounded-xl typo-btn",
              style: { background: GOLD, color: MIDNIGHT },
              "data-ocid": "admin_profile.back_link",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
                "Back to Administration"
              ]
            }
          )
        ]
      }
    ) });
  }
  const label = roleLabel(profile.role, profile.slug);
  const accentColor = profile.role === "registrar" ? DEEP_BLUE : COBALT;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "bg-white",
        style: { paddingTop: "64px", paddingBottom: "0" },
        "data-ocid": "admin_profile.hero",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6 pb-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "nav",
              {
                className: "flex flex-wrap items-center gap-2 typo-support mb-10",
                style: { color: "#9ca3af" },
                "aria-label": "Breadcrumb",
                "data-ocid": "admin_profile.breadcrumb",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:underline", style: { color: COBALT }, children: "Home" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "›" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Link,
                    {
                      to: "/administration",
                      className: "hover:underline",
                      style: { color: COBALT },
                      children: "Administration"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "›" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: profile.name })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/administration",
                className: "inline-flex items-center gap-2 typo-support mb-10 group",
                style: { color: COBALT },
                "data-ocid": "admin_profile.back_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4 transition-transform group-hover:-translate-x-1" }),
                  "Back to Administration"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-16 lg:gap-24 items-center pb-16", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-start", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "overflow-hidden rounded-2xl shadow-2xl",
                    style: {
                      width: "300px",
                      aspectRatio: "4/5",
                      border: "2px solid rgba(26, 35, 126, 0.15)",
                      animation: "revealScale 0.9s cubic-bezier(0.22,1,0.36,1) both"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: profile.photoUrl,
                        alt: profile.name,
                        className: "w-full h-full object-cover"
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute -bottom-4 -left-4 w-20 h-20 rounded-full",
                    style: { background: "rgba(232, 196, 42, 0.1)", zIndex: -1 }
                  }
                )
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "typo-section-label mb-3",
                    style: { color: accentColor },
                    children: label
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h1",
                  {
                    className: "typo-card-title text-4xl md:text-5xl mb-3 leading-tight",
                    style: { color: DEEP_BLUE },
                    children: profile.name
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "typo-support mb-2 leading-relaxed",
                    style: { color: "#4b5563" },
                    children: profile.designation
                  }
                ),
                profile.department && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-support mb-6", style: { color: "#9ca3af" }, children: profile.department }),
                !profile.department && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-body mb-8", style: { color: "#374151" }, children: profile.brief }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: `mailto:${profile.email}`,
                      className: "flex items-center gap-2 typo-support transition-opacity hover:opacity-70",
                      style: { color: accentColor },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-4 h-4" }),
                        profile.email
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: `tel:${profile.phone}`,
                      className: "flex items-center gap-2 typo-support transition-opacity hover:opacity-70",
                      style: { color: accentColor },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4" }),
                        profile.phone
                      ]
                    }
                  )
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { height: "3px", background: accentColor } })
        ]
      }
    ),
    profile.brief && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-white",
        style: { paddingTop: "72px", paddingBottom: "72px" },
        "data-ocid": "admin_profile.overview_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-2xl p-8 md:p-10",
            style: {
              background: "rgba(26, 35, 126, 0.03)",
              border: "1px solid rgba(26, 35, 126, 0.1)",
              borderLeftWidth: "4px",
              borderLeftColor: accentColor
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h3",
                {
                  className: "font-cinzel font-semibold text-2xl mb-4",
                  style: { color: DEEP_BLUE },
                  children: "Overview"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-body", style: { color: "#374151" }, children: profile.brief }),
              profile.specialization && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "mt-6 pt-5",
                  style: { borderTop: "1px solid rgba(26, 35, 126, 0.1)" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "typo-section-label mb-2",
                        style: { color: accentColor },
                        children: "Specialization"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-support", style: { color: "#4b5563" }, children: profile.specialization })
                  ]
                }
              )
            ]
          }
        ) }) })
      }
    ),
    profile.message && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        style: {
          background: "#fafbff",
          paddingTop: "72px",
          paddingBottom: "72px"
        },
        "data-ocid": "admin_profile.message_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { delay: 0.1, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "typo-section-label mb-3",
              style: { color: accentColor },
              children: "Message"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "h2",
            {
              className: "typo-section-heading mb-8",
              style: { color: DEEP_BLUE },
              children: [
                "Message from the ",
                label
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "relative rounded-2xl p-8 md:p-12",
              style: {
                background: "rgba(26, 35, 126, 0.03)",
                border: "1px solid rgba(26, 35, 126, 0.1)",
                borderLeftWidth: "4px",
                borderLeftColor: accentColor
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute top-6 left-8 leading-none select-none font-cinzel",
                    style: {
                      fontSize: "120px",
                      color: accentColor,
                      opacity: 0.06,
                      lineHeight: 1
                    },
                    children: '"'
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10", children: profile.message.split("\n\n").map((para) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "typo-body-lg italic mb-5 last:mb-0",
                    style: { color: "#374151", fontStyle: "italic" },
                    children: para
                  },
                  para.slice(0, 40)
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-4 mt-8 pt-6",
                    style: { borderTop: "1px solid rgba(26, 35, 126, 0.1)" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "img",
                        {
                          src: profile.photoUrl,
                          alt: profile.name,
                          className: "w-12 h-12 rounded-full object-cover flex-shrink-0",
                          style: { border: "2px solid rgba(26, 35, 126, 0.2)" }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "font-baskerville font-bold text-base",
                            style: { color: DEEP_BLUE },
                            children: profile.name
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "typo-support", style: { color: "#6b7280" }, children: [
                          label,
                          ", COEP Technological University"
                        ] })
                      ] })
                    ]
                  }
                )
              ]
            }
          )
        ] }) })
      }
    ),
    (profile.education.length > 0 || profile.experience.length > 0 || profile.research.length > 0 || profile.achievements.length > 0) && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        style: {
          background: "#fafbff",
          paddingTop: "72px",
          paddingBottom: "72px"
        },
        "data-ocid": "admin_profile.details_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { delay: 0.05, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "typo-section-label mb-3",
                style: { color: accentColor },
                children: "Profile"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                className: "typo-section-heading mb-10",
                style: { color: DEEP_BLUE },
                children: "Academic & Professional Profile"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
              profile.research.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                ContentCard,
                {
                  icon: Award,
                  title: "Research Areas",
                  accentColor,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: profile.research.map((area) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "px-3 py-1 rounded-full typo-support text-xs",
                      style: {
                        background: "rgba(26, 35, 126, 0.08)",
                        color: accentColor
                      },
                      children: area
                    },
                    area
                  )) })
                }
              ) }),
              profile.education.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { delay: 0.2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                ContentCard,
                {
                  icon: GraduationCap,
                  title: "Education",
                  accentColor,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: profile.education.map((edu) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-2 h-2 rounded-full mt-2 flex-shrink-0",
                        style: { background: accentColor }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "typo-body text-sm leading-snug",
                        style: { color: "#374151" },
                        children: edu
                      }
                    )
                  ] }, edu)) })
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-6", children: [
              profile.experience.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                ContentCard,
                {
                  icon: Briefcase,
                  title: "Professional Experience",
                  accentColor,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "relative pl-6 border-l-2",
                      style: { borderColor: "rgba(26, 35, 126, 0.15)" },
                      children: profile.experience.map((exp) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: "relative mb-5 last:mb-0",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "div",
                              {
                                className: "absolute -left-[25px] top-2 w-3 h-3 rounded-full border-2",
                                style: {
                                  background: "#fff",
                                  borderColor: accentColor
                                }
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "div",
                              {
                                className: "rounded-xl p-4",
                                style: {
                                  border: "1px solid rgba(26, 35, 126, 0.08)"
                                },
                                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "p",
                                  {
                                    className: "typo-body text-sm",
                                    style: { color: "#374151" },
                                    children: exp
                                  }
                                )
                              }
                            )
                          ]
                        },
                        exp.slice(0, 40)
                      ))
                    }
                  )
                }
              ) }),
              profile.achievements.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { delay: 0.2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContentCard, { icon: Award, title: "Achievements", accent: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: profile.achievements.map((achievement) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-start gap-3 rounded-xl p-4",
                  style: {
                    border: "1px solid rgba(232, 196, 42, 0.18)",
                    background: "rgba(232, 196, 42, 0.03)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                        style: { background: "rgba(232, 196, 42, 0.2)" },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "font-inter font-bold text-xs",
                            style: { color: "#b5960a" },
                            children: "✓"
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "typo-body text-sm",
                        style: { color: "#374151" },
                        children: achievement
                      }
                    )
                  ]
                },
                achievement.slice(0, 40)
              )) }) }) })
            ] })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-14",
        style: {
          background: `linear-gradient(135deg, ${MIDNIGHT}, ${DEEP_BLUE})`
        },
        "data-ocid": "admin_profile.cta",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-cinzel font-semibold text-2xl text-white", children: "Explore Administration" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-body text-sm text-white/70 mt-1", children: "Meet the complete leadership team of COEP Technological University" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/administration",
              className: "inline-flex items-center gap-2 typo-btn px-7 py-3.5 rounded-xl text-sm whitespace-nowrap transition-all hover:scale-105",
              style: {
                background: GOLD,
                color: MIDNIGHT,
                boxShadow: "0 4px 16px rgba(232, 196, 42, 0.25)"
              },
              "data-ocid": "admin_profile.admin_page_button",
              children: [
                "Back to Administration",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
              ]
            }
          )
        ] })
      }
    )
  ] });
}
export {
  AdminProfilePage as default
};
