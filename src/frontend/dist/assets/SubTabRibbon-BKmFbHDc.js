import { r as reactExports, j as jsxRuntimeExports } from "./index-CUgpWnl1.js";
import { a as cn } from "./utils-B1sCwcN7.js";
import { C as ChevronLeft } from "./chevron-left-CYfXXX7B.js";
import { C as ChevronRight } from "./chevron-right-Bz1X5sn9.js";
const COBALT = "#1A237E";
const GOLD = "#E8C42A";
const MIDNIGHT = "#081E5C";
function SubTabRibbon({
  tabs,
  activeTab,
  onTabChange
}) {
  const scrollRef = reactExports.useRef(null);
  const [canScrollLeft, setCanScrollLeft] = reactExports.useState(false);
  const [canScrollRight, setCanScrollRight] = reactExports.useState(false);
  const checkScroll = reactExports.useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);
  reactExports.useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    const ro = new ResizeObserver(checkScroll);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      ro.disconnect();
    };
  }, [checkScroll]);
  reactExports.useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const activeEl = el.querySelector(
      `[data-tabid="${CSS.escape(activeTab)}"]`
    );
    if (activeEl) {
      const left = activeEl.offsetLeft - el.clientWidth / 2 + activeEl.offsetWidth / 2;
      el.scrollTo({ left, behavior: "smooth" });
    }
  }, [activeTab]);
  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -220 : 220, behavior: "smooth" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: ".subtab-scroll::-webkit-scrollbar { display: none; }" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "w-full",
        style: { backgroundColor: COBALT },
        "data-ocid": "subtab_ribbon.bar",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "aria-label": "Scroll tabs left",
              onClick: () => scroll("left"),
              className: cn(
                "absolute left-0 z-10 flex items-center justify-center w-8 h-12 transition-all duration-200 flex-shrink-0",
                canScrollLeft ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              ),
              style: { backgroundColor: COBALT },
              "data-ocid": "subtab_ribbon.scroll_left",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-4 h-4 text-white" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              ref: scrollRef,
              className: "subtab-scroll flex items-center overflow-x-auto w-full",
              style: {
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                paddingLeft: canScrollLeft ? "2rem" : "1rem",
                paddingRight: canScrollRight ? "2rem" : "1rem"
              },
              onScroll: checkScroll,
              "data-ocid": "subtab_ribbon.track",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "ul",
                {
                  className: "flex items-center gap-1 py-1.5 min-w-max",
                  role: "tablist",
                  children: tabs.map((tab) => {
                    const isActive = tab.id === activeTab;
                    return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { role: "presentation", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        type: "button",
                        role: "tab",
                        "aria-selected": isActive,
                        "data-tabid": tab.id,
                        onClick: () => onTabChange(tab.id),
                        className: cn(
                          "typo-nav font-inter font-medium relative inline-flex items-center px-4 py-1.5 rounded-full text-[0.78rem] font-semibold uppercase tracking-widest transition-all duration-200 whitespace-nowrap select-none outline-none focus-visible:ring-2 focus-visible:ring-white/60",
                          isActive ? "shadow-md" : "hover:bg-white/15"
                        ),
                        style: {
                          letterSpacing: "0.07em",
                          backgroundColor: isActive ? GOLD : "transparent",
                          color: isActive ? MIDNIGHT : "rgba(255,255,255,0.88)",
                          border: isActive ? "none" : "1px solid rgba(255,255,255,0.18)"
                        },
                        "data-ocid": `subtab_ribbon.tab.${tab.id}`,
                        children: [
                          tab.label,
                          isActive && /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: "absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full",
                              style: { backgroundColor: GOLD }
                            }
                          )
                        ]
                      }
                    ) }, tab.id);
                  })
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "aria-label": "Scroll tabs right",
              onClick: () => scroll("right"),
              className: cn(
                "absolute right-0 z-10 flex items-center justify-center w-8 h-12 transition-all duration-200 flex-shrink-0",
                canScrollRight ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              ),
              style: { backgroundColor: COBALT },
              "data-ocid": "subtab_ribbon.scroll_right",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4 text-white" })
            }
          )
        ] })
      }
    )
  ] });
}
export {
  SubTabRibbon as S
};
