import { j as jsxRuntimeExports, L as Link, r as reactExports } from "./index-ewouZ8Z-.js";
import { L as Layout } from "./Layout-CAMhUMkU.js";
import { V as VICE_CHANCELLOR } from "./administration-BXOeH_XH.js";
import { A as ArrowLeft } from "./arrow-left-CX18PC87.js";
import { M as Mail, P as Phone } from "./x-BbDbzOVy.js";
import { A as Award } from "./award-BelRz_jD.js";
import { G as GraduationCap } from "./graduation-cap-DnYMxYBr.js";
import { B as Briefcase } from "./briefcase-BNnohYtX.js";
import { A as ArrowRight } from "./arrow-right-k8mkDzof.js";
import "./utils-pycC2CyQ.js";
import "./Header-Y41v9IHA.js";
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
  accent = false
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
                background: accent ? GOLD : COBALT
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
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5", style: { color: accent ? GOLD : COBALT } })
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
function ViceChancellorPage() {
  const vc = VICE_CHANCELLOR;
  const messageParas = vc.message ? vc.message.split("\n\n") : [];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "bg-white",
        style: { paddingTop: "64px", paddingBottom: "0" },
        "data-ocid": "vc.hero",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6 pb-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "nav",
              {
                className: "flex flex-wrap items-center gap-2 typo-support mb-10",
                style: { color: "#9ca3af" },
                "aria-label": "Breadcrumb",
                "data-ocid": "vc.breadcrumb",
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
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Vice Chancellor" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/administration",
                className: "inline-flex items-center gap-2 typo-support mb-10 group",
                style: { color: COBALT },
                "data-ocid": "vc.back_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4 transition-transform group-hover:-translate-x-1" }),
                  "Back to Administration"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-16 lg:gap-24 items-center pb-16", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex justify-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "overflow-hidden rounded-2xl shadow-2xl",
                    style: {
                      width: "340px",
                      aspectRatio: "4/5",
                      border: "2px solid rgba(26, 35, 126, 0.15)",
                      animation: "revealScale 0.9s cubic-bezier(0.22,1,0.36,1) both"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: vc.photoUrl,
                        alt: vc.name,
                        className: "w-full h-full object-cover"
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute -bottom-5 -left-5 w-24 h-24 rounded-full",
                    style: { background: "rgba(232, 196, 42, 0.12)", zIndex: -1 }
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-section-label mb-3", style: { color: COBALT }, children: "Vice Chancellor" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h1",
                  {
                    className: "typo-card-title text-4xl md:text-6xl mb-3 leading-tight",
                    style: { color: DEEP_BLUE },
                    children: vc.name
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "typo-support mb-6 leading-relaxed",
                    style: { color: "#4b5563" },
                    children: vc.designation
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-body mb-8", style: { color: "#374151" }, children: vc.brief }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 mb-8", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: `mailto:${vc.email}`,
                      className: "flex items-center gap-2 typo-support transition-opacity hover:opacity-70",
                      style: { color: COBALT },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-4 h-4" }),
                        vc.email
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: `tel:${vc.phone}`,
                      className: "flex items-center gap-2 typo-support transition-opacity hover:opacity-70",
                      style: { color: COBALT },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4" }),
                        vc.phone
                      ]
                    }
                  )
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { height: "3px", background: COBALT } })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-white",
        style: { paddingTop: "80px", paddingBottom: "80px" },
        "data-ocid": "vc.message_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { delay: 0.1, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-section-label mb-3", style: { color: COBALT }, children: "Message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h2",
            {
              className: "typo-section-heading mb-8",
              style: { color: DEEP_BLUE },
              children: "Message from the Vice Chancellor"
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
                borderLeftColor: COBALT
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute top-6 left-8 leading-none select-none font-cinzel",
                    style: {
                      fontSize: "120px",
                      color: COBALT,
                      opacity: 0.06,
                      lineHeight: 1
                    },
                    children: '"'
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10", children: messageParas.map((para) => /* @__PURE__ */ jsxRuntimeExports.jsx(
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
                          src: vc.photoUrl,
                          alt: vc.name,
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
                            children: vc.name
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-support", style: { color: "#6b7280" }, children: "Vice-Chancellor, COEP Technological University" })
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
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        style: {
          background: "#fafbff",
          paddingTop: "80px",
          paddingBottom: "80px"
        },
        "data-ocid": "vc.profile_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { delay: 0.05, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-section-label mb-3", style: { color: COBALT }, children: "Profile" }),
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
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContentCard, { icon: Award, title: "Research Areas", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: vc.research.map((area) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "px-3 py-1 rounded-full typo-support text-xs",
                  style: {
                    background: "rgba(26, 35, 126, 0.08)",
                    color: COBALT
                  },
                  children: area
                },
                area
              )) }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { delay: 0.2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContentCard, { icon: GraduationCap, title: "Education", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: vc.education.map((edu) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-2 h-2 rounded-full mt-2 flex-shrink-0",
                    style: { background: COBALT }
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
              ] }, edu)) }) }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContentCard, { icon: Briefcase, title: "Professional Experience", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "relative pl-6 border-l-2",
                  style: { borderColor: "rgba(26, 35, 126, 0.15)" },
                  children: vc.experience.map((exp, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "relative mb-5 last:mb-0",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "absolute -left-[25px] top-2 w-3 h-3 rounded-full border-2",
                            style: { background: "#fff", borderColor: COBALT }
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "rounded-xl p-4",
                            style: {
                              border: "1px solid rgba(26, 35, 126, 0.08)",
                              background: i === 0 ? "rgba(26, 35, 126, 0.02)" : "transparent"
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
              ) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { delay: 0.2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContentCard, { icon: Award, title: "Selected Achievements", accent: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: vc.achievements.map((achievement) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
        "data-ocid": "vc.cta",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-cinzel font-semibold text-2xl text-white", children: "Explore Administration" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-body text-sm text-white/70 mt-1", children: "Learn about COEP Tech's full leadership team and governance structure" })
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
              "data-ocid": "vc.admin_page_button",
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
  ViceChancellorPage as default
};
