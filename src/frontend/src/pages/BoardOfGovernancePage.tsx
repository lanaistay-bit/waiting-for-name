import { useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import SubTabRibbon from "../components/SubTabRibbon";
import type { SubTab } from "../components/SubTabRibbon";
import { BOARD_OF_GOVERNANCE } from "../data/aboutus";
import type { BoardMember } from "../data/aboutus";

const ABOUT_US_TABS: SubTab[] = [
  { id: "about-university", label: "About University" },
  {
    id: "authorities-boards-committees",
    label: "Authorities, Boards & Committees",
  },
  { id: "board-of-governance", label: "Board of Governance" },
];

const TAB_ROUTES: Record<string, string> = {
  "about-university": "/about-us/about-university",
  "authorities-boards-committees": "/about-us/authorities-boards-committees",
  "board-of-governance": "/about-us/board-of-governance",
};

// ── Scroll-reveal hook ────────────────────────────────────────────
function useReveal<T extends HTMLElement>(): [
  React.RefObject<T | null>,
  boolean,
] {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

// ── Hero ──────────────────────────────────────────────────────────
function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      style={{
        background:
          "linear-gradient(135deg, #081E5C 0%, #0F3499 45%, #1648C8 100%)",
      }}
      className="relative overflow-hidden pt-28 pb-20 px-6"
      data-ocid="board-hero.section"
    >
      {/* decorative arcs */}
      <span
        aria-hidden
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, #E8C42A 0%, transparent 70%)",
        }}
      />
      <span
        aria-hidden
        className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full opacity-[0.07]"
        style={{
          background: "radial-gradient(circle, #ffffff 0%, transparent 70%)",
        }}
      />

      <div
        className="max-w-5xl mx-auto text-center relative z-10"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        {/* breadcrumb */}
        <nav
          className="flex items-center justify-center gap-2 text-sm mb-6"
          style={{
            fontFamily: "var(--font-body)",
            color: "rgba(255,255,255,0.65)",
          }}
          aria-label="Breadcrumb"
        >
          <a href="/" className="hover:text-white transition-colors">
            Home
          </a>
          <span aria-hidden>/</span>
          <a href="/about-us" className="hover:text-white transition-colors">
            About Us
          </a>
          <span aria-hidden>/</span>
          <span style={{ color: "rgba(255,255,255,0.85)" }}>
            Board of Governance
          </span>
        </nav>

        <h1
          className="text-5xl md:text-6xl font-bold text-white mb-5 leading-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Board of Governance
        </h1>
        <p
          className="text-xl md:text-2xl"
          style={{
            fontFamily: "var(--font-body)",
            color: "rgba(255,255,255,0.80)",
          }}
        >
          Shaping the Future of Technical Education in Maharashtra
        </p>

        {/* gold rule */}
        <div
          className="mx-auto mt-8 h-1 w-20 rounded-full"
          style={{ background: "#1648C8" }}
          aria-hidden
        />
      </div>
    </section>
  );
}

// ── Chairman Spotlight ────────────────────────────────────────────
function ChairmanSection() {
  const [ref, visible] = useReveal<HTMLElement>();
  const { chairman } = BOARD_OF_GOVERNANCE;

  return (
    <section
      ref={ref}
      className="py-16 px-6"
      style={{ background: "#EEF3FF" }}
      data-ocid="board-chairman.section"
    >
      <div className="max-w-5xl mx-auto">
        <div
          className="bg-white rounded-2xl shadow-lg overflow-hidden grid md:grid-cols-[300px_1fr]"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
            border: "1.5px solid #DDEAFF",
          }}
        >
          {/* LEFT: photo + badge */}
          <div
            className="flex flex-col items-center justify-center gap-5 p-10"
            style={{
              background: "linear-gradient(160deg, #EEF3FF 0%, #D8E5FF 100%)",
            }}
          >
            <div
              className="rounded-full overflow-hidden flex-shrink-0"
              style={{
                width: 148,
                height: 148,
                border: "4px solid #1648C8",
                boxShadow: "0 0 0 6px rgba(22,72,200,0.15)",
              }}
            >
              <img
                src={chairman.imageUrl}
                alt={chairman.name}
                width={148}
                height={148}
                className="w-full h-full object-cover"
              />
            </div>

            <span
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold"
              style={{
                background: "#1648C8",
                color: "#fff",
                fontFamily: "var(--font-body)",
              }}
            >
              ⭐ Chairman, Board of Governance
            </span>
          </div>

          {/* RIGHT: details */}
          <div className="p-10 flex flex-col justify-center gap-3">
            <h2
              className="text-3xl font-bold leading-tight"
              style={{ fontFamily: "var(--font-display)", color: "#0F3499" }}
            >
              {chairman.name}
            </h2>
            <p
              className="text-base font-semibold"
              style={{ fontFamily: "var(--font-body)", color: "#1648C8" }}
            >
              {chairman.designation}
            </p>
            <p
              className="text-sm uppercase tracking-widest"
              style={{ fontFamily: "var(--font-body)", color: "#6B7280" }}
            >
              {chairman.organization}
            </p>
            <div
              className="h-px my-1"
              style={{
                background: "linear-gradient(to right, #1648C8, transparent)",
              }}
              aria-hidden
            />
            <p
              className="text-[17px] leading-relaxed"
              style={{ fontFamily: "var(--font-body)", color: "#374151" }}
            >
              {chairman.bio}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Governance Introduction ───────────────────────────────────────
function IntroSection() {
  const [ref, visible] = useReveal<HTMLElement>();
  const { intro, legalBasis } = BOARD_OF_GOVERNANCE;

  return (
    <section
      ref={ref}
      className="py-16 px-6 bg-white"
      data-ocid="board-intro.section"
    >
      <div
        className="max-w-3xl mx-auto text-center"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.65s ease, transform 0.65s ease",
        }}
      >
        <h2
          className="text-3xl md:text-4xl font-bold mb-6"
          style={{ fontFamily: "var(--font-display)", color: "#0F3499" }}
        >
          About the Board
        </h2>
        <p
          className="text-lg leading-relaxed mb-6"
          style={{ fontFamily: "var(--font-body)", color: "#374151" }}
        >
          {intro}
        </p>
        <div
          className="inline-flex items-center gap-3 px-6 py-3 rounded-lg text-sm font-medium"
          style={{
            background: "#EEF3FF",
            border: "1px solid #BFCFFF",
            color: "#0F3499",
            fontFamily: "var(--font-body)",
          }}
        >
          <span>🏛️</span>
          <span>{legalBasis}</span>
        </div>
      </div>
    </section>
  );
}

// ── Board Members Table ───────────────────────────────────────────
function MembersSection() {
  const [ref, visible] = useReveal<HTMLElement>();
  const { members } = BOARD_OF_GOVERNANCE;

  return (
    <section
      ref={ref}
      className="py-16 px-6"
      style={{ background: "#F7F9FF" }}
      data-ocid="board-members.section"
    >
      <div
        className="max-w-5xl mx-auto"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <div className="text-center mb-10">
          <h2
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ fontFamily: "var(--font-display)", color: "#0F3499" }}
          >
            Board Members
          </h2>
          <p
            className="text-base"
            style={{ fontFamily: "var(--font-body)", color: "#6B7280" }}
          >
            Distinguished leaders from academia, industry, and government
          </p>
        </div>

        {/* Desktop table */}
        <div
          className="hidden md:block rounded-2xl overflow-hidden"
          style={{
            border: "1.5px solid #BFCFFF",
            boxShadow: "0 4px 24px rgba(22,72,200,0.08)",
          }}
        >
          <table
            className="w-full text-sm"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <thead>
              <tr style={{ background: "#1648C8" }}>
                <th
                  className="py-4 px-5 text-left text-white font-semibold"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.85rem",
                    letterSpacing: "0.05em",
                  }}
                >
                  Sr. No.
                </th>
                <th
                  className="py-4 px-5 text-left text-white font-semibold"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.85rem",
                    letterSpacing: "0.05em",
                  }}
                >
                  Role / Category
                </th>
                <th
                  className="py-4 px-5 text-left text-white font-semibold"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.85rem",
                    letterSpacing: "0.05em",
                  }}
                >
                  Member Name
                </th>
                <th
                  className="py-4 px-5 text-left text-white font-semibold"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.85rem",
                    letterSpacing: "0.05em",
                  }}
                >
                  Designation
                </th>
              </tr>
            </thead>
            <tbody>
              {members.map((m: BoardMember, idx: number) => (
                <tr
                  key={`member-${m.srNo}-${m.name}`}
                  style={{
                    background: idx % 2 === 0 ? "#ffffff" : "#F0F4FF",
                    transition: "background 0.2s ease",
                  }}
                  className="hover:!bg-[#D8E5FF] cursor-default"
                  data-ocid={`board-members.item.${m.srNo}`}
                >
                  <td
                    className="py-4 px-5 font-bold"
                    style={{ color: "#1648C8", width: 80 }}
                  >
                    {String(m.srNo).padStart(2, "0")}
                  </td>
                  <td
                    className="py-4 px-5 font-medium"
                    style={{ color: "#374151" }}
                  >
                    {m.member}
                  </td>
                  <td
                    className="py-4 px-5 font-semibold"
                    style={{ color: "#0F3499" }}
                  >
                    {m.name}
                  </td>
                  <td className="py-4 px-5" style={{ color: "#6B7280" }}>
                    {m.role}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden flex flex-col gap-4">
          {members.map((m: BoardMember) => (
            <div
              key={`member-card-${m.srNo}-${m.name}`}
              className="rounded-xl p-5 bg-white"
              style={{
                border: "1.5px solid #BFCFFF",
                boxShadow: "0 2px 12px rgba(22,72,200,0.07)",
              }}
              data-ocid={`board-members.item.${m.srNo}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                  style={{ background: "#1648C8" }}
                >
                  {m.srNo}
                </span>
                <span
                  className="text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded"
                  style={{ background: "#EEF3FF", color: "#1648C8" }}
                >
                  {m.member}
                </span>
              </div>
              <p
                className="text-base font-bold mb-1"
                style={{ color: "#0F3499", fontFamily: "var(--font-display)" }}
              >
                {m.name}
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#6B7280", fontFamily: "var(--font-body)" }}
              >
                {m.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Governance Framework ──────────────────────────────────────────
const FRAMEWORK_CARDS = [
  {
    icon: "⚖️",
    title: "Strategic Oversight",
    body: "The Board sets the strategic direction and ensures alignment with national education policy, Maharashtra's vision for technical excellence, and global best practices in higher education governance.",
  },
  {
    icon: "🎓",
    title: "Academic Excellence",
    body: "Champions academic standards, research output, and innovation across all programmes. The Board ensures COEP Tech remains at the forefront of engineering, technology, and interdisciplinary education.",
  },
  {
    icon: "🏛️",
    title: "Financial Stewardship",
    body: "Responsible for sound financial management, resource allocation, and institutional sustainability. The Board upholds fiscal discipline and maximises value from public and self-generated funds.",
  },
];

function FrameworkSection() {
  const [ref, visible] = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className="py-16 px-6 bg-white"
      data-ocid="board-framework.section"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ fontFamily: "var(--font-display)", color: "#0F3499" }}
          >
            Governance Framework
          </h2>
          <p
            className="text-base max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-body)", color: "#6B7280" }}
          >
            Three pillars that define how COEP Technological University is led
            and governed
          </p>
        </div>

        <div
          className="grid md:grid-cols-3 gap-6"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          {FRAMEWORK_CARDS.map((card, idx) => (
            <div
              key={`framework-${card.title}`}
              className="rounded-xl p-7 flex flex-col gap-4 bg-white"
              style={{
                borderLeft: "4px solid #1648C8",
                boxShadow: "0 2px 20px rgba(22,72,200,0.07)",
                border: "1px solid #DDEAFF",
                borderLeftWidth: 4,
                borderLeftColor: "#1648C8",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.6s ease ${idx * 0.15}s, transform 0.6s ease ${idx * 0.15}s`,
              }}
            >
              <div className="text-4xl">{card.icon}</div>
              <h3
                className="text-xl font-bold"
                style={{ fontFamily: "var(--font-display)", color: "#0F3499" }}
              >
                {card.title}
              </h3>
              <p
                className="text-[16px] leading-relaxed"
                style={{ fontFamily: "var(--font-body)", color: "#374151" }}
              >
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Footer CTA Banner ─────────────────────────────────────────────
function CtaBanner() {
  return (
    <section
      className="py-12 px-6"
      style={{
        background: "linear-gradient(90deg, #081E5C 0%, #1648C8 100%)",
      }}
      data-ocid="board-cta.section"
    >
      <div className="max-w-3xl mx-auto text-center">
        <p
          className="text-white text-lg mb-2"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Learn more about our governance structure
        </p>
        <h3
          className="text-white text-2xl font-bold mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Authorities, Boards &amp; Committees
        </h3>
        <a
          href="/about-us/authorities-boards-committees"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm transition-transform hover:scale-105"
          style={{
            background: "#E8C42A",
            color: "#1a1200",
            fontFamily: "var(--font-body)",
          }}
          data-ocid="board-cta.link"
        >
          View All Committees →
        </a>
      </div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────
export default function BoardOfGovernancePage() {
  const navigate = useNavigate();

  function handleTabChange(tabId: string) {
    const route = TAB_ROUTES[tabId];
    if (route) navigate({ to: route });
  }

  return (
    <main className="min-h-screen" style={{ fontFamily: "var(--font-body)" }}>
      <HeroSection />
      <SubTabRibbon
        tabs={ABOUT_US_TABS}
        activeTab="board-of-governance"
        onTabChange={handleTabChange}
      />
      <ChairmanSection />
      <IntroSection />
      <MembersSection />
      <FrameworkSection />
      <CtaBanner />
    </main>
  );
}
