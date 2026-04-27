import { a as useParams, j as jsxRuntimeExports, L as Link, r as reactExports } from "./index-CWBSPPg1.js";
import { L as Layout } from "./Layout-BqPaQAtX.js";
import { F as FACULTY_DATA } from "./faculty-BRq__Wq8.js";
import { A as ArrowLeft } from "./arrow-left-BXwIpJnC.js";
import { M as Mail, P as Phone } from "./x-Bs45HD9q.js";
import { B as BookOpen } from "./book-open-tD07fUNd.js";
import { A as Award } from "./award-C_G_2_Vu.js";
import { G as GraduationCap } from "./graduation-cap-CUFFOVXQ.js";
import { B as Briefcase } from "./briefcase-CpOFx9xO.js";
import { A as ArrowRight } from "./arrow-right-FTYWMndl.js";
import "./utils-CwJNFt5C.js";
import "./Header-D5iK_n6Q.js";
const NAVY = "#332C6F";
const DARK_NAVY = "#1F1B47";
const LIGHT_NAVY = "#4A3FA0";
const GOLD = "#F5A623";
const DMS_ROUTE = "/academics/schools/school-of-multidisciplinary-sciences/department-of-management-studies";
const FACULTY_ROUTE = `${DMS_ROUTE}/faculty`;
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
              className: "rounded-full flex-shrink-0",
              style: {
                width: "4px",
                height: "20px",
                background: accent ? GOLD : NAVY
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0",
              style: {
                background: accent ? "rgba(245,166,35,0.12)" : "rgba(51,44,111,0.08)"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5", style: { color: accent ? GOLD : NAVY } })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h2",
            {
              className: "text-xl font-bold",
              style: { fontFamily: "Playfair Display, serif", color: DARK_NAVY },
              children: title
            }
          )
        ] }),
        children
      ]
    }
  );
}
function FacultyProfilePage() {
  const { facultyId } = useParams({ from: "/faculty/$facultyId" });
  const faculty = FACULTY_DATA.find((f) => f.id === facultyId);
  if (!faculty) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "min-h-[60vh] flex flex-col items-center justify-center gap-5 text-center px-4",
        "data-ocid": "faculty_profile.not_found",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-20 h-20 rounded-full flex items-center justify-center mb-2",
              style: { background: "rgba(51,44,111,0.08)" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: "🔍" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h1",
            {
              className: "text-3xl font-bold",
              style: { fontFamily: "Playfair Display, serif", color: DARK_NAVY },
              children: "Profile Not Found"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-base max-w-sm",
              style: {
                color: "#6b7280",
                fontFamily: "Source Sans 3, sans-serif"
              },
              children: "The requested faculty profile could not be found."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: FACULTY_ROUTE,
              className: "inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm",
              style: {
                background: GOLD,
                color: DARK_NAVY,
                fontFamily: "Source Sans 3, sans-serif"
              },
              "data-ocid": "faculty_profile.back_link",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
                "Back to Faculty"
              ]
            }
          )
        ]
      }
    ) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "bg-white",
        style: { paddingTop: "64px", paddingBottom: "0" },
        "data-ocid": "faculty_profile.hero",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6 pb-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "nav",
              {
                className: "flex flex-wrap items-center gap-2 text-xs mb-10",
                style: {
                  color: "#9ca3af",
                  fontFamily: "Source Sans 3, sans-serif"
                },
                "aria-label": "Breadcrumb",
                "data-ocid": "faculty_profile.breadcrumb",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:underline", style: { color: NAVY }, children: "Home" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "›" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Link,
                    {
                      to: "/academics",
                      className: "hover:underline",
                      style: { color: NAVY },
                      children: "Academics"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "›" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Link,
                    {
                      to: DMS_ROUTE,
                      className: "hover:underline",
                      style: { color: NAVY },
                      children: "DMS"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "›" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Link,
                    {
                      to: FACULTY_ROUTE,
                      className: "hover:underline",
                      style: { color: NAVY },
                      children: "Faculty"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "›" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: faculty.name })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: FACULTY_ROUTE,
                className: "inline-flex items-center gap-2 text-sm mb-10 group",
                style: { color: NAVY, fontFamily: "Source Sans 3, sans-serif" },
                "data-ocid": "faculty_profile.back_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4 transition-transform group-hover:-translate-x-1" }),
                  "Back to Faculty"
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
                      border: "2px solid rgba(51,44,111,0.15)",
                      animation: "revealScale 0.9s cubic-bezier(0.22,1,0.36,1) both"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: faculty.photoUrl,
                        alt: faculty.name,
                        className: "w-full h-full object-cover object-top",
                        onError: (e) => {
                          e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(faculty.name)}&size=400&background=332C6F&color=fff&bold=true`;
                        }
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute -bottom-4 -left-4 w-20 h-20 rounded-full",
                    style: { background: "rgba(245,166,35,0.10)", zIndex: -1 }
                  }
                ),
                faculty.isSpecial && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute -top-3 -right-3 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-md",
                    style: {
                      background: GOLD,
                      color: DARK_NAVY,
                      fontFamily: "Source Sans 3, sans-serif"
                    },
                    children: "Featured"
                  }
                )
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-xs font-bold uppercase tracking-widest mb-3",
                    style: {
                      color: LIGHT_NAVY,
                      fontFamily: "Source Sans 3, sans-serif"
                    },
                    children: faculty.title
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h1",
                  {
                    className: "text-4xl md:text-5xl font-bold leading-tight mb-3",
                    style: {
                      fontFamily: "Playfair Display, serif",
                      color: DARK_NAVY
                    },
                    children: faculty.name
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-base mb-2 leading-relaxed",
                    style: {
                      color: "#4b5563",
                      fontFamily: "Source Sans 3, sans-serif"
                    },
                    children: faculty.designation
                  }
                ),
                faculty.qualification && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-sm mb-6",
                    style: {
                      color: "#9ca3af",
                      fontFamily: "Source Sans 3, sans-serif"
                    },
                    children: faculty.qualification
                  }
                ),
                !faculty.qualification && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6" }),
                faculty.bio && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-base leading-relaxed mb-8",
                    style: {
                      color: "#374151",
                      fontFamily: "Source Sans 3, sans-serif"
                    },
                    children: faculty.bio
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
                  faculty.email && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: `mailto:${faculty.email}`,
                      className: "flex items-center gap-2 text-sm transition-opacity hover:opacity-70",
                      style: {
                        color: NAVY,
                        fontFamily: "Source Sans 3, sans-serif"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-4 h-4" }),
                        faculty.email
                      ]
                    }
                  ),
                  faculty.phone && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: `tel:${faculty.phone}`,
                      className: "flex items-center gap-2 text-sm transition-opacity hover:opacity-70",
                      style: {
                        color: NAVY,
                        fontFamily: "Source Sans 3, sans-serif"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4" }),
                        faculty.phone
                      ]
                    }
                  )
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { height: "3px", background: NAVY } })
        ]
      }
    ),
    (faculty.education || faculty.experience || faculty.researchInterests || faculty.achievements) && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        style: {
          background: "#fafbff",
          paddingTop: "72px",
          paddingBottom: "72px"
        },
        "data-ocid": "faculty_profile.details_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { delay: 0.05, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-xs font-bold uppercase tracking-widest mb-3",
                style: { color: NAVY, fontFamily: "Source Sans 3, sans-serif" },
                children: "Profile"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                className: "text-3xl font-bold mb-10",
                style: {
                  fontFamily: "Playfair Display, serif",
                  color: DARK_NAVY
                },
                children: "Academic & Professional Profile"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
              faculty.researchInterests && faculty.researchInterests.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContentCard, { icon: BookOpen, title: "Research Interests", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: faculty.researchInterests.map((area) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "px-3 py-1 rounded-full text-xs font-semibold",
                  style: {
                    background: "rgba(51,44,111,0.08)",
                    color: NAVY,
                    fontFamily: "Source Sans 3, sans-serif"
                  },
                  children: area
                },
                area
              )) }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { delay: 0.15, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContentCard, { icon: Award, title: "Areas of Expertise", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: faculty.expertise.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "px-3 py-1 rounded-full text-xs font-semibold",
                  style: {
                    background: "rgba(74,63,160,0.08)",
                    color: LIGHT_NAVY,
                    fontFamily: "Source Sans 3, sans-serif"
                  },
                  children: tag
                },
                tag
              )) }) }) }),
              faculty.education && faculty.education.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { delay: 0.2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContentCard, { icon: GraduationCap, title: "Education", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: faculty.education.map((edu) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "li",
                {
                  className: "flex items-start gap-3",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-2 h-2 rounded-full mt-2 flex-shrink-0",
                        style: { background: NAVY }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "text-sm leading-snug",
                          style: {
                            color: "#374151",
                            fontFamily: "Source Sans 3, sans-serif"
                          },
                          children: edu.degree
                        }
                      ),
                      edu.institution && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "text-xs mt-0.5",
                          style: { color: "#9ca3af" },
                          children: edu.institution
                        }
                      )
                    ] })
                  ]
                },
                edu.degree
              )) }) }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-6", children: [
              faculty.experience && faculty.experience.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                ContentCard,
                {
                  icon: Briefcase,
                  title: "Professional Experience",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "relative pl-6 border-l-2",
                      style: { borderColor: "rgba(51,44,111,0.15)" },
                      children: faculty.experience.map((exp) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: "relative mb-5 last:mb-0",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "div",
                              {
                                className: "absolute -left-[25px] top-2 w-3 h-3 rounded-full border-2",
                                style: { background: "#fff", borderColor: NAVY }
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "div",
                              {
                                className: "rounded-xl p-4",
                                style: {
                                  border: "1px solid rgba(51,44,111,0.08)"
                                },
                                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "p",
                                  {
                                    className: "text-sm leading-relaxed",
                                    style: {
                                      color: "#374151",
                                      fontFamily: "Source Sans 3, sans-serif"
                                    },
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
              faculty.achievements && faculty.achievements.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { delay: 0.2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                ContentCard,
                {
                  icon: Award,
                  title: "Achievements & Awards",
                  accent: true,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: faculty.achievements.map((achievement) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex items-start gap-3 rounded-xl p-4",
                      style: {
                        border: "1px solid rgba(245,166,35,0.18)",
                        background: "rgba(245,166,35,0.03)"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                            style: { background: "rgba(245,166,35,0.2)" },
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "span",
                              {
                                className: "text-xs font-bold",
                                style: { color: "#b5960a" },
                                children: "✓"
                              }
                            )
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "text-sm leading-relaxed",
                            style: {
                              color: "#374151",
                              fontFamily: "Source Sans 3, sans-serif"
                            },
                            children: achievement
                          }
                        )
                      ]
                    },
                    achievement.slice(0, 40)
                  )) })
                }
              ) }),
              !faculty.experience && !faculty.achievements && /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { delay: 0.2, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "rounded-2xl p-8",
                  style: {
                    background: "rgba(51,44,111,0.03)",
                    border: "1px solid rgba(51,44,111,0.1)",
                    borderLeft: `4px solid ${NAVY}`,
                    borderLeftWidth: "4px"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "h3",
                      {
                        className: "text-xl font-bold mb-3",
                        style: {
                          fontFamily: "Playfair Display, serif",
                          color: DARK_NAVY
                        },
                        children: "About"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-base leading-relaxed",
                        style: {
                          color: "#374151",
                          fontFamily: "Source Sans 3, sans-serif"
                        },
                        children: faculty.bio || "Detailed profile information for this faculty member is being updated. Please contact the department for more information."
                      }
                    ),
                    faculty.email && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "a",
                      {
                        href: `mailto:${faculty.email}`,
                        className: "inline-flex items-center gap-2 mt-5 font-semibold text-sm px-5 py-2.5 rounded-lg",
                        style: {
                          background: GOLD,
                          color: DARK_NAVY,
                          fontFamily: "Source Sans 3, sans-serif"
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-4 h-4" }),
                          "Contact ",
                          faculty.name.split(" ")[0]
                        ]
                      }
                    )
                  ]
                }
              ) })
            ] })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-14",
        style: { background: `linear-gradient(135deg, ${DARK_NAVY}, ${NAVY})` },
        "data-ocid": "faculty_profile.cta",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                className: "text-2xl font-bold text-white",
                style: { fontFamily: "Playfair Display, serif" },
                children: "Explore More Faculty"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-sm text-white/70 mt-1",
                style: { fontFamily: "Source Sans 3, sans-serif" },
                children: "Meet all the distinguished faculty members at DMS, COEP"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: FACULTY_ROUTE,
              className: "inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl text-sm whitespace-nowrap transition-all hover:scale-105",
              style: {
                background: GOLD,
                color: DARK_NAVY,
                fontFamily: "Source Sans 3, sans-serif",
                boxShadow: "0 4px 16px rgba(245,166,35,0.25)"
              },
              "data-ocid": "faculty_profile.all_faculty_button",
              children: [
                "View All Faculty",
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
  FacultyProfilePage
};
