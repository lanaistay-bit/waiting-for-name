import { useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import SubTabRibbon from "../components/SubTabRibbon";
import type { SubTab } from "../components/SubTabRibbon";
import { BOARD_OF_GOVERNANCE } from "../data/aboutus";
import type { BoardMember } from "../data/aboutus";

const COBALT = "#1A237E";
const DEEP_BLUE = "#0F3399";
const MIDNIGHT = "#081E5C";
const GOLD = "#E8C42A";

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
          "linear-gradient(135deg, #081E5C 0%, #0F3399 45%, #1A237E 100%)",
      }}
      className="relative overflow-hidden pt-28 pb-20 px-6"
      data-ocid="board-hero.section"
    >
      <span
        aria-hidden
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-10"
        style={{
          background: `radial-gradient(circle, ${GOLD} 0%, transparent 70%)`,
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
        <nav
          className="flex items-center justify-center gap-2 typo-support text-sm mb-6"
          style={{ color: "rgba(255,255,255,0.65)" }}
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
        <h1 className="typo-hero-heading text-white mb-5 leading-tight">
          Board of Governance
        </h1>
        <p className="typo-body-lg" style={{ color: "rgba(255,255,255,0.80)" }}>
          Shaping the Future of Technical Education in Maharashtra
        </p>
        <div
          className="mx-auto mt-8 h-1 w-20 rounded-full"
          style={{ background: GOLD }}
          aria-hidden
        />
      </div>
    </section>
  );
}

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
                border: "4px solid #1A237E",
                boxShadow: "0 0 0 6px rgba(26, 35, 126, 0.15)",
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
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full typo-support font-semibold"
              style={{ background: COBALT, color: "#fff" }}
            >
              ⭐ Chairman, Board of Governance
            </span>
          </div>
          <div className="p-10 flex flex-col justify-center gap-3">
            <h2
              className="typo-card-title text-3xl leading-tight"
              style={{ color: DEEP_BLUE }}
            >
              {chairman.name}
            </h2>
            <p className="typo-support font-semibold" style={{ color: COBALT }}>
              {chairman.designation}
            </p>
            <p className="typo-section-label" style={{ color: "#6B7280" }}>
              {chairman.organization}
            </p>
            <div
              className="h-px my-1"
              style={{
                background: `linear-gradient(to right, ${COBALT}, transparent)`,
              }}
              aria-hidden
            />
            <p className="typo-body" style={{ color: "#374151" }}>
              {chairman.bio}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

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
        <h2 className="typo-section-heading mb-6" style={{ color: DEEP_BLUE }}>
          About the Board
        </h2>
        <p className="typo-body-lg mb-6" style={{ color: "#374151" }}>
          {intro}
        </p>
        <div
          className="inline-flex items-center gap-3 px-6 py-3 rounded-lg typo-support font-medium"
          style={{
            background: "#EEF3FF",
            border: "1px solid #BFCFFF",
            color: DEEP_BLUE,
          }}
        >
          <span>🏛️</span>
          <span>{legalBasis}</span>
        </div>
      </div>
    </section>
  );
}

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
            className="typo-section-heading mb-3"
            style={{ color: DEEP_BLUE }}
          >
            Board Members
          </h2>
          <p className="typo-body" style={{ color: "#6B7280" }}>
            Distinguished leaders from academia, industry, and government
          </p>
        </div>
        <div
          className="hidden md:block rounded-2xl overflow-hidden"
          style={{
            border: "1.5px solid #BFCFFF",
            boxShadow: "0 4px 24px rgba(26, 35, 126, 0.08)",
          }}
        >
          <table className="w-full text-sm font-inter">
            <thead>
              <tr style={{ background: COBALT }}>
                {[
                  "Sr. No.",
                  "Role / Category",
                  "Member Name",
                  "Designation",
                ].map((h) => (
                  <th
                    key={h}
                    className="py-4 px-5 text-left font-cinzel font-semibold text-white"
                    style={{ fontSize: "0.85rem", letterSpacing: "0.05em" }}
                  >
                    {h}
                  </th>
                ))}
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
                    className="py-4 px-5 font-inter font-bold"
                    style={{ color: COBALT, width: 80 }}
                  >
                    {String(m.srNo).padStart(2, "0")}
                  </td>
                  <td
                    className="py-4 px-5 typo-body"
                    style={{ color: "#374151" }}
                  >
                    {m.member}
                  </td>
                  <td
                    className="py-4 px-5 font-baskerville font-bold"
                    style={{ color: DEEP_BLUE }}
                  >
                    {m.name}
                  </td>
                  <td
                    className="py-4 px-5 typo-support"
                    style={{ color: "#6B7280" }}
                  >
                    {m.role}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="md:hidden flex flex-col gap-4">
          {members.map((m: BoardMember) => (
            <div
              key={`member-card-${m.srNo}-${m.name}`}
              className="rounded-xl p-5 bg-white"
              style={{
                border: "1.5px solid #BFCFFF",
                boxShadow: "0 2px 12px rgba(26, 35, 126, 0.07)",
              }}
              data-ocid={`board-members.item.${m.srNo}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center font-inter font-bold text-sm text-white flex-shrink-0"
                  style={{ background: COBALT }}
                >
                  {m.srNo}
                </span>
                <span
                  className="typo-section-label px-2 py-0.5 rounded"
                  style={{
                    background: "rgba(26, 35, 126, 0.1)",
                    color: COBALT,
                  }}
                >
                  {m.member}
                </span>
              </div>
              <p
                className="typo-card-title text-base mb-1"
                style={{ color: DEEP_BLUE }}
              >
                {m.name}
              </p>
              <p className="typo-body text-sm" style={{ color: "#6B7280" }}>
                {m.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
            className="typo-section-heading mb-3"
            style={{ color: DEEP_BLUE }}
          >
            Governance Framework
          </h2>
          <p
            className="typo-body max-w-xl mx-auto"
            style={{ color: "#6B7280" }}
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
                border: "1px solid #DDEAFF",
                borderLeftWidth: 4,
                borderLeftColor: COBALT,
                boxShadow: "0 2px 20px rgba(26, 35, 126, 0.07)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.6s ease ${idx * 0.15}s, transform 0.6s ease ${idx * 0.15}s`,
              }}
            >
              <div className="text-4xl">{card.icon}</div>
              <h3
                className="font-cinzel font-semibold text-xl"
                style={{ color: DEEP_BLUE }}
              >
                {card.title}
              </h3>
              <p className="typo-body" style={{ color: "#374151" }}>
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section
      className="py-12 px-6"
      style={{
        background: `linear-gradient(90deg, ${MIDNIGHT} 0%, ${COBALT} 100%)`,
      }}
      data-ocid="board-cta.section"
    >
      <div className="max-w-3xl mx-auto text-center">
        <p className="typo-body text-white text-lg mb-2">
          Learn more about our governance structure
        </p>
        <h3 className="font-cinzel font-semibold text-2xl text-white mb-6">
          Authorities, Boards &amp; Committees
        </h3>
        <a
          href="/about-us/authorities-boards-committees"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full typo-btn transition-transform hover:scale-105"
          style={{ background: GOLD, color: "#1a1200" }}
          data-ocid="board-cta.link"
        >
          View All Committees →
        </a>
      </div>
    </section>
  );
}

export default function BoardOfGovernancePage() {
  const navigate = useNavigate();
  function handleTabChange(tabId: string) {
    const route = TAB_ROUTES[tabId];
    if (route) navigate({ to: route });
  }
  return (
    <main className="min-h-screen font-source">
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
