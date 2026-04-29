import { r as reactExports, j as jsxRuntimeExports, L as Link } from "./index-pJv4La_B.js";
import { S as SubTabRibbon } from "./SubTabRibbon-BV78wOy3.js";
import { V as VICE_CHANCELLOR, R as REGISTRAR, D as DIRECTORS, a as DEANS, A as ASSOCIATE_DEANS } from "./administration-BzYAFRya.js";
import { M as Mail, P as Phone, X } from "./x-_atQWee8.js";
import { A as ArrowRight } from "./arrow-right-BkdeyjpA.js";
import "./utils-bVAKhGf7.js";
import "./chevron-left-BE8I_4bk.js";
import "./chevron-right-DJxfNPv9.js";
const COBALT = "#1A237E";
const DEEP_BLUE = "#0F3399";
const MIDNIGHT = "#081E5C";
const GOLD = "#E8C42A";
const ADMIN_TABS = [
  { id: "vice-chancellor", label: "Vice Chancellor" },
  { id: "registrar", label: "Registrar" },
  { id: "directors", label: "Directors" },
  { id: "deans", label: "Deans & Associate Deans" },
  { id: "finance", label: "Finance & Accounts Officer" },
  { id: "ombudsperson", label: "Ombudsperson for Students" }
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
function Divider() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "mx-auto",
      style: {
        height: "1px",
        background: "rgba(26, 35, 126, 0.12)",
        maxWidth: "1152px",
        margin: "0 24px"
      }
    }
  );
}
function DirectorModal({
  director,
  onClose
}) {
  reactExports.useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "fixed inset-0 z-50 flex items-center justify-center p-4",
      "data-ocid": "admin.director_dialog",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
            onClick: onClose,
            "aria-label": "Close modal"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative z-10 w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden",
            style: {
              animation: "modalIn 0.28s cubic-bezier(0.34,1.56,0.64,1) both"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "h-1.5 w-full",
                  style: {
                    background: `linear-gradient(90deg, ${COBALT}, ${DEEP_BLUE})`
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row gap-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "md:w-52 flex-shrink-0 flex items-center justify-center p-8 md:p-6",
                    style: { background: "rgba(26, 35, 126, 0.04)" },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-32 h-32 md:w-36 md:h-44 rounded-xl overflow-hidden shadow-lg",
                        style: { border: "3px solid rgba(26, 35, 126, 0.2)" },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "img",
                          {
                            src: director.photoUrl,
                            alt: director.name,
                            className: "w-full h-full object-cover"
                          }
                        )
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 p-7 relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: onClose,
                      "aria-label": "Close",
                      className: "absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                      style: { background: "rgba(0,0,0,0.06)", color: "#6b7280" },
                      "data-ocid": "admin.director_close_button",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-section-label mb-1", style: { color: COBALT }, children: "Director" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "typo-card-title mb-1", style: { color: DEEP_BLUE }, children: director.name }),
                  director.board && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-support mb-5", style: { color: "#4b5563" }, children: director.board }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "h-px mb-5",
                      style: { background: "rgba(26, 35, 126, 0.1)" }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-body mb-5", style: { color: "#374151" }, children: director.brief }),
                  director.specialization && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "typo-section-label mb-1",
                        style: { color: COBALT },
                        children: "Specialization"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-support", style: { color: "#4b5563" }, children: director.specialization })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "a",
                      {
                        href: `mailto:${director.email}`,
                        className: "flex items-center gap-2 typo-support transition-opacity hover:opacity-70",
                        style: { color: COBALT },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-3.5 h-3.5 flex-shrink-0" }),
                          director.email
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "a",
                      {
                        href: `tel:${director.phone}`,
                        className: "flex items-center gap-2 typo-support transition-opacity hover:opacity-70",
                        style: { color: COBALT },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-3.5 h-3.5 flex-shrink-0" }),
                          director.phone
                        ]
                      }
                    )
                  ] })
                ] })
              ] })
            ]
          }
        )
      ]
    }
  );
}
function DirectorCard({
  director,
  delay,
  onOpen
}) {
  const { ref, visible } = useScrollReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      style: {
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          className: "group w-full text-left bg-white rounded-2xl overflow-hidden cursor-pointer",
          style: {
            border: "1px solid #e5e7eb",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease"
          },
          onMouseEnter: (e) => {
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.boxShadow = "0 12px 32px rgba(26, 35, 126, 0.14)";
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)";
          },
          onClick: onOpen,
          "data-ocid": `admin.director_card.${director.slug}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "relative overflow-hidden",
                style: { aspectRatio: "3/4", background: "rgba(26, 35, 126, 0.06)" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: director.photoUrl,
                      alt: director.name,
                      className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute inset-0",
                      style: {
                        background: "linear-gradient(to top, rgba(8, 30, 92, 0.25) 0%, transparent 50%)"
                      }
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-section-label mb-1", style: { color: COBALT }, children: "Director" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h3",
                {
                  className: "typo-card-title mb-1 leading-snug",
                  style: { color: DEEP_BLUE },
                  children: director.name
                }
              ),
              director.board && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "typo-support mb-4 leading-snug",
                  style: { color: "#6b7280" },
                  children: director.board
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px mb-4", style: { background: "#e5e7eb" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: "inline-flex items-center gap-1.5 typo-btn transition-colors group-hover:gap-2.5",
                  style: { color: COBALT, transition: "gap 0.25s ease" },
                  children: [
                    "View Details",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5 transition-transform group-hover:translate-x-1" })
                  ]
                }
              )
            ] })
          ]
        }
      )
    }
  );
}
function LeadershipPersonCard({
  person,
  delay,
  label
}) {
  const { ref, visible } = useScrollReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      style: {
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "group bg-white rounded-xl overflow-hidden flex items-center gap-5 p-5",
          style: {
            border: "1px solid #e5e7eb",
            boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease"
          },
          onMouseEnter: (e) => {
            e.currentTarget.style.transform = "translateY(-3px)";
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(26, 35, 126, 0.1)";
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 1px 6px rgba(0,0,0,0.04)";
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-16 h-16 rounded-full overflow-hidden flex-shrink-0",
                style: { border: "2px solid rgba(26, 35, 126, 0.25)" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: person.photoUrl,
                    alt: person.name,
                    className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-section-label mb-0.5", style: { color: COBALT }, children: label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/administration/$adminId",
                  params: { adminId: person.slug },
                  className: "block typo-card-title text-base leading-snug hover:underline underline-offset-2",
                  style: { color: DEEP_BLUE },
                  "data-ocid": `admin.leadership_name_link.${person.slug}`,
                  children: person.name
                }
              ),
              person.department && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "typo-support mt-0.5 truncate",
                  style: { color: "#6b7280" },
                  children: person.department
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/administration/$adminId",
                params: { adminId: person.slug },
                className: "flex-shrink-0 flex items-center gap-1 typo-btn whitespace-nowrap",
                style: { color: COBALT },
                "data-ocid": `admin.leadership_view_button.${person.slug}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
              }
            )
          ]
        }
      )
    }
  );
}
function SectionHeading({
  label,
  title,
  subtitle
}) {
  const { ref, visible } = useScrollReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref,
      className: "mb-14",
      style: {
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.65s ease, transform 0.65s ease"
      },
      children: [
        label && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-section-label mb-2", style: { color: COBALT }, children: label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h2",
          {
            className: "typo-section-heading leading-tight",
            style: { color: DEEP_BLUE },
            children: title
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "mt-4 rounded-full",
            style: { width: "48px", height: "3px", background: COBALT }
          }
        ),
        subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-body mt-3", style: { color: "#6b7280" }, children: subtitle })
      ]
    }
  );
}
function DeanModal({
  dean,
  onClose
}) {
  reactExports.useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "fixed inset-0 z-50 flex items-center justify-center p-4",
      "data-ocid": "admin.dean_dialog",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
            onClick: onClose,
            "aria-label": "Close modal"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative z-10 w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden",
            style: {
              animation: "modalIn 0.28s cubic-bezier(0.34,1.56,0.64,1) both"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "h-1.5 w-full",
                  style: {
                    background: `linear-gradient(90deg, ${COBALT}, ${DEEP_BLUE})`
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row gap-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "md:w-52 flex-shrink-0 flex items-center justify-center p-8 md:p-6",
                    style: { background: "rgba(26,35,126,0.04)" },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-32 h-32 md:w-36 md:h-44 rounded-xl overflow-hidden shadow-lg",
                        style: { border: "3px solid rgba(26,35,126,0.2)" },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "img",
                          {
                            src: dean.photoUrl,
                            alt: dean.name,
                            className: "w-full h-full object-cover"
                          }
                        )
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 p-7 relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: onClose,
                      "aria-label": "Close",
                      className: "absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                      style: { background: "rgba(0,0,0,0.06)", color: "#6b7280" },
                      "data-ocid": "admin.dean_close_button",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-section-label mb-1", style: { color: COBALT }, children: "Dean" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "typo-card-title mb-1", style: { color: DEEP_BLUE }, children: dean.name }),
                  dean.department && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-support mb-5", style: { color: "#4b5563" }, children: dean.department }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "h-px mb-5",
                      style: { background: "rgba(26, 35, 126, 0.1)" }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-body mb-5", style: { color: "#374151" }, children: dean.brief }),
                  dean.specialization && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "typo-section-label mb-1",
                        style: { color: COBALT },
                        children: "Specialization"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-support", style: { color: "#4b5563" }, children: dean.specialization })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "a",
                      {
                        href: `mailto:${dean.email}`,
                        className: "flex items-center gap-2 typo-support transition-opacity hover:opacity-70",
                        style: { color: COBALT },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-3.5 h-3.5 flex-shrink-0" }),
                          dean.email
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "a",
                      {
                        href: `tel:${dean.phone}`,
                        className: "flex items-center gap-2 typo-support transition-opacity hover:opacity-70",
                        style: { color: COBALT },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-3.5 h-3.5 flex-shrink-0" }),
                          dean.phone
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: "/administration/$adminId",
                      params: { adminId: dean.slug },
                      className: "inline-flex items-center gap-1.5 typo-btn",
                      style: { color: COBALT },
                      onClick: onClose,
                      "data-ocid": `admin.dean_profile_link.${dean.slug}`,
                      children: [
                        "Full Profile",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5" })
                      ]
                    }
                  ) })
                ] })
              ] })
            ]
          }
        )
      ]
    }
  );
}
function DeanCard({
  dean,
  delay,
  onOpen
}) {
  const { ref, visible } = useScrollReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      style: {
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          className: "group w-full text-left bg-white rounded-2xl overflow-hidden cursor-pointer",
          style: {
            border: "1px solid #e5e7eb",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease"
          },
          onMouseEnter: (e) => {
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.boxShadow = "0 12px 32px rgba(26, 35, 126, 0.14)";
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)";
          },
          onClick: onOpen,
          "data-ocid": `admin.dean_card.${dean.slug}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "relative overflow-hidden",
                style: { aspectRatio: "3/4", background: "rgba(26, 35, 126, 0.06)" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: dean.photoUrl,
                      alt: dean.name,
                      className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute inset-0",
                      style: {
                        background: "linear-gradient(to top, rgba(8, 30, 92, 0.25) 0%, transparent 50%)"
                      }
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-section-label mb-1", style: { color: COBALT }, children: "Dean" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h3",
                {
                  className: "typo-card-title mb-1 leading-snug",
                  style: { color: DEEP_BLUE },
                  children: dean.name
                }
              ),
              dean.department && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "typo-support mb-4 leading-snug",
                  style: { color: "#6b7280" },
                  children: dean.department
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px mb-4", style: { background: "#e5e7eb" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: "inline-flex items-center gap-1.5 typo-btn transition-colors group-hover:gap-2.5",
                  style: { color: COBALT, transition: "gap 0.25s ease" },
                  children: [
                    "View Details",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5 transition-transform group-hover:translate-x-1" })
                  ]
                }
              )
            ] })
          ]
        }
      )
    }
  );
}
function AdministrationPage() {
  const [openDirector, setOpenDirector] = reactExports.useState(null);
  const [openDean, setOpenDean] = reactExports.useState(null);
  const [activeTab, setActiveTab] = reactExports.useState("vice-chancellor");
  const vcRef = useScrollReveal(0.05);
  const regRef = useScrollReveal(0.05);
  const sectionIds = [
    "vice-chancellor",
    "registrar",
    "directors",
    "deans",
    "finance",
    "ombudsperson"
  ];
  const observerRef = reactExports.useRef(null);
  const setupObserver = reactExports.useCallback(() => {
    if (observerRef.current) observerRef.current.disconnect();
    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    }
  }, []);
  reactExports.useEffect(() => {
    setupObserver();
    return () => {
      var _a;
      return (_a = observerRef.current) == null ? void 0 : _a.disconnect();
    };
  }, [setupObserver]);
  function handleTabChange(tabId) {
    const el = document.getElementById(tabId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "font-source", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "bg-white",
        style: { paddingTop: "72px", paddingBottom: "0" },
        "data-ocid": "administration.hero",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6 pb-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "nav",
              {
                className: "flex items-center gap-2 typo-support mb-10",
                style: { color: "#9ca3af" },
                "aria-label": "Breadcrumb",
                "data-ocid": "administration.breadcrumb",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Link,
                    {
                      to: "/",
                      className: "hover:underline transition-colors",
                      style: { color: COBALT },
                      children: "Home"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "›" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Administration" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-end justify-between gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-section-label mb-3", style: { color: COBALT }, children: "COEP Technological University" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h1",
                  {
                    className: "typo-hero-heading leading-none tracking-tight",
                    style: { color: DEEP_BLUE },
                    children: "Administration"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "typo-body max-w-md leading-relaxed pb-1",
                  style: { color: "#6b7280" },
                  children: "Leadership and governance of COEP Technological University, Pune — shaping excellence since 1854."
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { height: "3px", background: COBALT } })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SubTabRibbon,
      {
        tabs: ADMIN_TABS,
        activeTab,
        onTabChange: handleTabChange
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        id: "vice-chancellor",
        className: "bg-white",
        style: { paddingTop: "96px", paddingBottom: "96px" },
        "data-ocid": "administration.vc_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            ref: vcRef.ref,
            className: "grid md:grid-cols-2 gap-16 lg:gap-24 items-center",
            style: {
              opacity: vcRef.visible ? 1 : 0,
              transform: vcRef.visible ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 0.7s ease, transform 0.7s ease"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-section-label mb-4", style: { color: COBALT }, children: "Vice Chancellor" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h2",
                  {
                    className: "typo-hero-heading mb-3 leading-tight",
                    style: { color: DEEP_BLUE },
                    children: VICE_CHANCELLOR.name
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "typo-support mb-6 leading-relaxed",
                    style: { color: "#4b5563" },
                    children: VICE_CHANCELLOR.designation
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-body mb-8", style: { color: "#374151" }, children: VICE_CHANCELLOR.brief }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 mb-8", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: `mailto:${VICE_CHANCELLOR.email}`,
                      className: "flex items-center gap-2 typo-support transition-opacity hover:opacity-70",
                      style: { color: COBALT },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-4 h-4" }),
                        VICE_CHANCELLOR.email
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: `tel:${VICE_CHANCELLOR.phone}`,
                      className: "flex items-center gap-2 typo-support transition-opacity hover:opacity-70",
                      style: { color: COBALT },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4" }),
                        VICE_CHANCELLOR.phone
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: "/administration/vice-chancellor",
                    className: "inline-flex items-center gap-2 typo-btn group",
                    style: { color: COBALT },
                    "data-ocid": "administration.vc_profile_button",
                    children: [
                      "View Profile & Message",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 transition-transform group-hover:translate-x-1.5" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "relative",
                  style: {
                    opacity: vcRef.visible ? 1 : 0,
                    transform: vcRef.visible ? "scale(1)" : "scale(1.04)",
                    transition: "opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "overflow-hidden rounded-2xl shadow-2xl",
                        style: {
                          width: "320px",
                          aspectRatio: "4/5",
                          border: "2px solid rgba(26, 35, 126, 0.18)"
                        },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "img",
                          {
                            src: VICE_CHANCELLOR.photoUrl,
                            alt: VICE_CHANCELLOR.name,
                            className: "w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "absolute -bottom-4 -right-4 w-24 h-24 rounded-full",
                        style: {
                          background: "rgba(26, 35, 126, 0.08)",
                          border: "1px solid rgba(26, 35, 126, 0.12)"
                        }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "absolute -top-4 -left-4 w-16 h-16 rounded-full",
                        style: { background: "rgba(232, 196, 42, 0.15)" }
                      }
                    )
                  ]
                }
              ) })
            ]
          }
        ) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        id: "registrar",
        style: {
          background: "#fafbff",
          paddingTop: "96px",
          paddingBottom: "96px"
        },
        "data-ocid": "administration.registrar_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            ref: regRef.ref,
            className: "grid md:grid-cols-2 gap-16 lg:gap-24 items-center",
            style: {
              opacity: regRef.visible ? 1 : 0,
              transform: regRef.visible ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 0.7s ease, transform 0.7s ease"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-start order-2 md:order-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "relative",
                  style: {
                    opacity: regRef.visible ? 1 : 0,
                    transform: regRef.visible ? "scale(1)" : "scale(1.04)",
                    transition: "opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "overflow-hidden rounded-2xl shadow-2xl",
                        style: {
                          width: "300px",
                          aspectRatio: "4/5",
                          border: "2px solid rgba(15, 51, 153, 0.18)"
                        },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "img",
                          {
                            src: REGISTRAR.photoUrl,
                            alt: REGISTRAR.name,
                            className: "w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "absolute -bottom-4 -left-4 w-20 h-20 rounded-full",
                        style: {
                          background: "rgba(15, 51, 153, 0.06)",
                          border: "1px solid rgba(15, 51, 153, 0.1)"
                        }
                      }
                    )
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "order-1 md:order-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "typo-section-label mb-4",
                    style: { color: DEEP_BLUE },
                    children: "Registrar"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h2",
                  {
                    className: "typo-hero-heading mb-3 leading-tight",
                    style: { color: DEEP_BLUE },
                    children: REGISTRAR.name
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "typo-support mb-6 leading-relaxed",
                    style: { color: "#4b5563" },
                    children: REGISTRAR.designation
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-body mb-8", style: { color: "#374151" }, children: REGISTRAR.brief }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 mb-8", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: `mailto:${REGISTRAR.email}`,
                      className: "flex items-center gap-2 typo-support transition-opacity hover:opacity-70",
                      style: { color: DEEP_BLUE },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-4 h-4" }),
                        REGISTRAR.email
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: `tel:${REGISTRAR.phone}`,
                      className: "flex items-center gap-2 typo-support transition-opacity hover:opacity-70",
                      style: { color: DEEP_BLUE },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4" }),
                        REGISTRAR.phone
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: "/administration/registrar",
                    className: "inline-flex items-center gap-2 typo-btn group",
                    style: { color: DEEP_BLUE },
                    "data-ocid": "administration.registrar_profile_button",
                    children: [
                      "View Profile",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 transition-transform group-hover:translate-x-1.5" })
                    ]
                  }
                )
              ] })
            ]
          }
        ) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        id: "directors",
        className: "bg-white",
        style: { paddingTop: "96px", paddingBottom: "96px" },
        "data-ocid": "administration.directors_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              label: "University Administration",
              title: "Directors",
              subtitle: "Overseeing specialized boards and administrative functions of COEP Tech"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: DIRECTORS.map((director, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            DirectorCard,
            {
              director,
              delay: idx * 0.1,
              onOpen: () => setOpenDirector(director)
            },
            director.email
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        id: "deans",
        style: {
          background: "#fafbff",
          paddingTop: "96px",
          paddingBottom: "96px"
        },
        "data-ocid": "administration.leadership_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              label: "Academic Leadership",
              title: "University Leadership",
              subtitle: "Academic deans guiding COEP Tech's schools and departments"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-16", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "h3",
              {
                className: "font-cinzel font-semibold text-xl mb-8 flex items-center gap-3",
                style: { color: DEEP_BLUE },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "inline-block rounded-full",
                      style: { width: "4px", height: "20px", background: COBALT }
                    }
                  ),
                  "Deans"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-2xl", children: DEANS.map((dean, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              DeanCard,
              {
                dean,
                delay: idx * 0.1,
                onOpen: () => setOpenDean(dean)
              },
              dean.email
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "associate-deans", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "h3",
              {
                className: "font-cinzel font-semibold text-xl mb-8 flex items-center gap-3",
                style: { color: DEEP_BLUE },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "inline-block rounded-full",
                      style: { width: "4px", height: "20px", background: COBALT }
                    }
                  ),
                  "Associate Deans"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-4", children: ASSOCIATE_DEANS.map((ad, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              LeadershipPersonCard,
              {
                person: ad,
                delay: idx * 0.1,
                label: "Associate Dean"
              },
              ad.email
            )) })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        id: "finance",
        className: "bg-white",
        style: { paddingTop: "80px", paddingBottom: "80px" },
        "data-ocid": "administration.finance_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-12 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-section-label mb-3", style: { color: COBALT }, children: "Financial Administration" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                className: "typo-section-heading mb-5 leading-tight",
                style: { color: DEEP_BLUE },
                children: "Finance & Accounts Officer"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-body mb-8", style: { color: "#374151" }, children: "The Finance & Accounts Office oversees all financial operations of COEP Technological University — ensuring transparent resource allocation, budget management, and compliance with government norms." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "mailto:finance@coeptech.ac.in",
                className: "inline-flex items-center gap-2 typo-btn group",
                style: { color: COBALT },
                "data-ocid": "administration.finance_contact_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-4 h-4" }),
                  "finance@coeptech.ac.in",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 transition-transform group-hover:translate-x-1" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "rounded-2xl p-8",
              style: {
                background: "rgba(26, 35, 126, 0.04)",
                border: "1px solid rgba(26, 35, 126, 0.1)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-section-label mb-3", style: { color: COBALT }, children: "Responsibilities" }),
                [
                  "University budget planning and allocation",
                  "Fee management and student accounts",
                  "Audit and regulatory compliance",
                  "Vendor payments and procurement",
                  "Financial reporting to governing bodies"
                ].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-start gap-3 mb-3 last:mb-0",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center font-inter font-bold text-xs text-white mt-0.5",
                          style: { background: COBALT },
                          children: i + 1
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-body", style: { color: "#374151" }, children: item })
                    ]
                  },
                  item
                ))
              ]
            }
          )
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        id: "ombudsperson",
        style: {
          background: "#fafbff",
          paddingTop: "80px",
          paddingBottom: "80px"
        },
        "data-ocid": "administration.ombudsperson_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-12 items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-section-label mb-3", style: { color: COBALT }, children: "Student Grievance Redressal" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                className: "typo-section-heading mb-5 leading-tight",
                style: { color: DEEP_BLUE },
                children: "Ombudsperson for Students"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-body mb-6", style: { color: "#374151" }, children: "The Ombudsperson for Students is an independent authority appointed under UGC guidelines to address grievances related to admissions, examinations, fee refunds, and student welfare. The office ensures fair, transparent, and timely resolution." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "mailto:ombudsperson@coeptech.ac.in",
                className: "inline-flex items-center gap-2 typo-btn group",
                style: { color: COBALT },
                "data-ocid": "administration.ombudsperson_contact_link",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-4 h-4" }),
                  "ombudsperson@coeptech.ac.in",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 transition-transform group-hover:translate-x-1" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-section-label mb-4", style: { color: COBALT }, children: "How to File a Grievance" }),
            [
              {
                step: "01",
                text: "Submit a written complaint to the Registrar's Office"
              },
              {
                step: "02",
                text: "The Ombudsperson reviews within 10 working days"
              },
              {
                step: "03",
                text: "Resolution communicated in writing to the student"
              }
            ].map(({ step, text }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-start gap-5 mb-6 last:mb-0",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "font-cinzel font-bold text-3xl flex-shrink-0 leading-none",
                      style: { color: "rgba(26, 35, 126, 0.15)" },
                      children: step
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-body pt-1", style: { color: "#374151" }, children: text })
                ]
              },
              step
            ))
          ] })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16 text-white",
        style: {
          background: `linear-gradient(135deg, ${MIDNIGHT} 0%, ${DEEP_BLUE} 50%, ${COBALT} 100%)`
        },
        "data-ocid": "administration.cta",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-section-label mb-2 opacity-70", children: "COEP Technological University" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "typo-section-heading text-white", children: "Get in Touch" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "typo-body text-white/70 mt-2", children: "Reach out to our administration team for inquiries, collaborations, or partnerships." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "mailto:info@coeptech.ac.in",
              className: "inline-flex items-center gap-2 px-8 py-4 rounded-xl typo-btn transition-all hover:scale-105 whitespace-nowrap",
              style: {
                background: GOLD,
                color: MIDNIGHT,
                boxShadow: "0 4px 16px rgba(232, 196, 42, 0.3)"
              },
              "data-ocid": "administration.cta_contact_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-4 h-4" }),
                "Contact Administration",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 transition-transform group-hover:translate-x-1" })
              ]
            }
          )
        ] })
      }
    ),
    openDirector && /* @__PURE__ */ jsxRuntimeExports.jsx(
      DirectorModal,
      {
        director: openDirector,
        onClose: () => setOpenDirector(null)
      }
    ),
    openDean && /* @__PURE__ */ jsxRuntimeExports.jsx(DeanModal, { dean: openDean, onClose: () => setOpenDean(null) })
  ] });
}
export {
  AdministrationPage as default
};
