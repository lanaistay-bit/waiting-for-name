import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const COBALT = "#1A237E";
const GOLD = "#E8C42A";
const MIDNIGHT = "#081E5C";

export interface SubTab {
  id: string;
  label: string;
}

export interface SubTabRibbonProps {
  tabs: SubTab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

/**
 * SubTabRibbon — single inline ribbon, no fixed/sticky overlay.
 *
 * Design decision:
 *   The ribbon lives entirely in document flow. It scrolls away naturally as
 *   the user scrolls down, and reappears when they scroll back to the top.
 *   A separate "floating" copy is intentionally removed because it was the
 *   root cause of content overlap issues.
 */
export default function SubTabRibbon({
  tabs,
  activeTab,
  onTabChange,
}: SubTabRibbonProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
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

  // Scroll active tab into view whenever activeTab changes
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const activeEl = el.querySelector<HTMLButtonElement>(
      `[data-tabid="${CSS.escape(activeTab)}"]`,
    );
    if (activeEl) {
      const left =
        activeEl.offsetLeft - el.clientWidth / 2 + activeEl.offsetWidth / 2;
      el.scrollTo({ left, behavior: "smooth" });
    }
  }, [activeTab]);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -220 : 220, behavior: "smooth" });
  };

  return (
    <>
      <style>{".subtab-scroll::-webkit-scrollbar { display: none; }"}</style>
      {/* Inline ribbon — always in document flow, never overlays content */}
      <div
        className="w-full"
        style={{ backgroundColor: COBALT }}
        data-ocid="subtab_ribbon.bar"
      >
        <div className="relative flex items-center">
          {/* Left arrow */}
          <button
            type="button"
            aria-label="Scroll tabs left"
            onClick={() => scroll("left")}
            className={cn(
              "absolute left-0 z-10 flex items-center justify-center w-8 h-12 transition-all duration-200 flex-shrink-0",
              canScrollLeft
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none",
            )}
            style={{ backgroundColor: COBALT }}
            data-ocid="subtab_ribbon.scroll_left"
          >
            <ChevronLeft className="w-4 h-4 text-white" />
          </button>

          {/* Scrollable tab track */}
          <div
            ref={scrollRef}
            className="subtab-scroll flex items-center overflow-x-auto w-full"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              paddingLeft: canScrollLeft ? "2rem" : "1rem",
              paddingRight: canScrollRight ? "2rem" : "1rem",
            }}
            onScroll={checkScroll}
            data-ocid="subtab_ribbon.track"
          >
            <ul
              className="flex items-center gap-1 py-1.5 min-w-max"
              role="tablist"
            >
              {tabs.map((tab) => {
                const isActive = tab.id === activeTab;
                return (
                  <li key={tab.id} role="presentation">
                    <button
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      data-tabid={tab.id}
                      onClick={() => onTabChange(tab.id)}
                      className={cn(
                        "typo-nav font-inter font-medium relative inline-flex items-center px-4 py-1.5 rounded-full text-[0.78rem] font-semibold uppercase tracking-widest transition-all duration-200 whitespace-nowrap select-none outline-none focus-visible:ring-2 focus-visible:ring-white/60",
                        isActive ? "shadow-md" : "hover:bg-white/15",
                      )}
                      style={{
                        letterSpacing: "0.07em",
                        backgroundColor: isActive ? GOLD : "transparent",
                        color: isActive ? MIDNIGHT : "rgba(255,255,255,0.88)",
                        border: isActive
                          ? "none"
                          : "1px solid rgba(255,255,255,0.18)",
                      }}
                      data-ocid={`subtab_ribbon.tab.${tab.id}`}
                    >
                      {tab.label}
                      {isActive && (
                        <span
                          className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: GOLD }}
                        />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right arrow */}
          <button
            type="button"
            aria-label="Scroll tabs right"
            onClick={() => scroll("right")}
            className={cn(
              "absolute right-0 z-10 flex items-center justify-center w-8 h-12 transition-all duration-200 flex-shrink-0",
              canScrollRight
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none",
            )}
            style={{ backgroundColor: COBALT }}
            data-ocid="subtab_ribbon.scroll_right"
          >
            <ChevronRight className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </>
  );
}
