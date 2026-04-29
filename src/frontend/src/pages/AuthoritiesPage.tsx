import { useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import SubTabRibbon from "../components/SubTabRibbon";
import type { SubTab } from "../components/SubTabRibbon";
import { AUTHORITIES_DATA } from "../data/aboutus";
import type { Committee } from "../data/aboutus";

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

function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
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
  return { ref, visible };
}

function CommitteeCard({
  committee,
  delay,
  parentVisible,
}: {
  committee: Committee;
  delay: number;
  parentVisible: boolean;
}) {
  return (
    <div
      data-ocid={`committee.item.${committee.srNo}`}
      className="relative bg-white rounded-2xl overflow-hidden shadow-premium group
        border border-gray-100 transition-premium
        hover:shadow-premium-hover hover:-translate-y-1"
      style={{
        opacity: parentVisible ? 1 : 0,
        transform: parentVisible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms, box-shadow 0.35s ease, translate 0.35s ease`,
      }}
    >
      <span
        className="absolute top-4 right-4 bg-cobalt text-white font-inter font-bold
          rounded-full w-6 h-6 flex items-center justify-center shadow-cobalt z-10 text-xs"
      >
        {committee.srNo}
      </span>
      <div className="p-7 pb-5 flex flex-col gap-3">
        <div className="text-4xl mb-1" role="img" aria-hidden="true">
          {committee.icon}
        </div>
        <h3
          className="typo-card-title leading-snug pr-6"
          style={{ fontSize: "1.15rem" }}
        >
          {committee.name}
        </h3>
        <p className="typo-body text-sm" style={{ color: "#4b5563" }}>
          {committee.description}
        </p>
      </div>
      <div
        className="h-1 w-full bg-cobalt group-hover:h-[5px] transition-all duration-300"
        aria-hidden="true"
      />
    </div>
  );
}

function CommitteeTable({ committees }: { committees: Committee[] }) {
  return (
    <div className="w-full overflow-x-auto rounded-2xl shadow-premium">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="bg-cobalt text-white">
            <th className="px-5 py-4 text-left font-inter font-bold w-16 rounded-tl-2xl">
              Sr. No.
            </th>
            <th className="px-5 py-4 text-left font-inter font-bold w-64">
              Committee Name
            </th>
            <th className="px-5 py-4 text-left font-inter font-bold rounded-tr-2xl">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {committees.map((c) => (
            <tr
              key={c.name}
              data-ocid={`committee.row.${c.srNo}`}
              className={`border-b border-gray-100 transition-colors duration-150 hover:bg-blue-50/50 ${
                c.srNo % 2 === 0 ? "bg-gray-50/60" : "bg-white"
              }`}
            >
              <td className="px-5 py-4 text-center font-inter font-bold text-cobalt">
                {c.srNo}
              </td>
              <td className="px-5 py-4 font-baskerville font-bold text-deep-blue text-sm leading-snug">
                <span className="mr-2">{c.icon}</span>
                {c.name}
              </td>
              <td
                className="px-5 py-4 typo-body text-sm"
                style={{ color: "#4b5563" }}
              >
                {c.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function AuthoritiesPage() {
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");
  const navigate = useNavigate();

  const introSection = useScrollReveal<HTMLDivElement>();
  const gridSection = useScrollReveal<HTMLDivElement>();
  const tableSection = useScrollReveal<HTMLDivElement>();
  const contactSection = useScrollReveal<HTMLDivElement>();

  function handleTabChange(tabId: string) {
    const route = TAB_ROUTES[tabId];
    if (route) navigate({ to: route });
  }

  return (
    <div className="min-h-screen bg-white font-source">
      {/* ── HERO ── */}
      <section
        data-ocid="authorities.hero"
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #081E5C 0%, #1A237E 100%)",
          minHeight: "340px",
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,.4) 39px,rgba(255,255,255,.4) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,.4) 39px,rgba(255,255,255,.4) 40px)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #E8C42A 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-12 -left-12 w-56 h-56 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #ffffff 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-6 py-20 flex flex-col items-start gap-5">
          <nav
            className="fade-in-down flex items-center gap-2 text-white/70 typo-support"
            aria-label="Breadcrumb"
          >
            <a href="/" className="hover:text-white transition-colors">
              Home
            </a>
            <span className="opacity-50">›</span>
            <a href="/about-us" className="hover:text-white transition-colors">
              About Us
            </a>
            <span className="opacity-50">›</span>
            <span className="text-white font-semibold">
              Authorities, Boards &amp; Committees
            </span>
          </nav>
          <h1
            className="typo-hero-heading text-white leading-tight fade-in-up"
            style={{ animationDelay: "100ms" }}
          >
            Authorities, Boards &amp; Committees
          </h1>
          <p
            className="typo-hero-desc text-white/80 max-w-xl fade-in-up"
            style={{ animationDelay: "220ms" }}
          >
            Governing Excellence in Technical Education
          </p>
          <div
            className="h-1 w-24 rounded-full fade-in-up"
            style={{ background: "#1A237E", animationDelay: "340ms" }}
            aria-hidden="true"
          />
        </div>
      </section>

      <SubTabRibbon
        tabs={ABOUT_US_TABS}
        activeTab="authorities-boards-committees"
        onTabChange={handleTabChange}
      />

      {/* ── INTRODUCTION ── */}
      <section
        data-ocid="authorities.intro"
        ref={introSection.ref}
        className="bg-white py-16"
      >
        <div
          className="max-w-4xl mx-auto px-6"
          style={{
            opacity: introSection.visible ? 1 : 0,
            transform: introSection.visible
              ? "translateY(0)"
              : "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="divider-cobalt" aria-hidden="true" />
            <span className="typo-section-label text-cobalt">
              Governance Structure
            </span>
          </div>
          <p className="typo-body-lg mb-5" style={{ color: "#374151" }}>
            {AUTHORITIES_DATA.intro}
          </p>
          <div
            className="bg-cobalt-subtle border-l-4 border-cobalt rounded-lg px-6 py-4 typo-body"
            style={{ color: "#374151" }}
          >
            <span className="font-inter font-bold text-cobalt">
              Legal Basis:{" "}
            </span>
            As per the{" "}
            <span className="font-inter font-semibold text-deep-blue">
              COEP Technological University Act
            </span>
            , Government of Maharashtra — these authorities ensure transparency,
            accountability, and sustained academic excellence across all facets
            of university functioning.
          </div>
        </div>
      </section>

      {/* ── COMMITTEES GRID ── */}
      <section
        data-ocid="authorities.committees"
        ref={gridSection.ref}
        className="bg-surface py-20"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div
            className="text-center mb-14"
            style={{
              opacity: gridSection.visible ? 1 : 0,
              transform: gridSection.visible
                ? "translateY(0)"
                : "translateY(24px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="divider-cobalt" aria-hidden="true" />
              <span className="typo-section-label text-cobalt">
                As per COEP Tech Act
              </span>
              <div className="divider-cobalt" aria-hidden="true" />
            </div>
            <h2 className="typo-section-heading text-deep-blue mb-3">
              University Authorities, Boards and Committees
            </h2>
            <p
              className="typo-body max-w-2xl mx-auto"
              style={{ color: "#4b5563" }}
            >
              Eleven statutory bodies govern every domain of university life —
              from academics and finance to student welfare and research
              excellence.
            </p>
          </div>

          <div className="flex justify-end mb-8 gap-2" ref={tableSection.ref}>
            <button
              type="button"
              data-ocid="authorities.grid_view.toggle"
              onClick={() => setViewMode("grid")}
              className={`px-4 py-2 rounded-lg typo-support font-semibold transition-smooth border ${
                viewMode === "grid"
                  ? "bg-cobalt text-white border-cobalt shadow-cobalt"
                  : "bg-white text-cobalt border-cobalt hover:bg-cobalt-subtle"
              }`}
            >
              ⊞ Grid View
            </button>
            <button
              type="button"
              data-ocid="authorities.table_view.toggle"
              onClick={() => setViewMode("table")}
              className={`px-4 py-2 rounded-lg typo-support font-semibold transition-smooth border ${
                viewMode === "table"
                  ? "bg-cobalt text-white border-cobalt shadow-cobalt"
                  : "bg-white text-cobalt border-cobalt hover:bg-cobalt-subtle"
              }`}
            >
              ☰ Table View
            </button>
          </div>

          {viewMode === "grid" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {AUTHORITIES_DATA.committees.map((committee) => (
                <CommitteeCard
                  key={committee.name}
                  committee={committee}
                  delay={committee.srNo * 50}
                  parentVisible={gridSection.visible}
                />
              ))}
            </div>
          )}

          {viewMode === "table" && (
            <div
              style={{
                opacity: tableSection.visible ? 1 : 0,
                transform: tableSection.visible
                  ? "translateY(0)"
                  : "translateY(24px)",
                transition: "opacity 0.55s ease, transform 0.55s ease",
              }}
            >
              <CommitteeTable committees={AUTHORITIES_DATA.committees} />
            </div>
          )}
        </div>
      </section>

      {/* ── CONTACT BANNER ── */}
      <section
        data-ocid="authorities.contact"
        ref={contactSection.ref}
        className="bg-midnight py-16 relative overflow-hidden"
      >
        <div
          className="absolute top-0 left-0 w-full h-1"
          style={{ background: "#1A237E" }}
          aria-hidden="true"
        />
        <div
          className="absolute -right-24 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full opacity-5"
          style={{
            background: "radial-gradient(circle, #1A237E 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div
          className="max-w-4xl mx-auto px-6 text-center"
          style={{
            opacity: contactSection.visible ? 1 : 0,
            transform: contactSection.visible
              ? "translateY(0)"
              : "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <div className="flex justify-center mb-4">
            <span className="text-4xl" role="img" aria-label="Office">
              🏛️
            </span>
          </div>
          <h2
            className="font-cinzel font-semibold text-white mb-4"
            style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}
          >
            Registrar's Office
          </h2>
          <p className="typo-body text-white/80 mb-3 max-w-2xl mx-auto">
            For official queries regarding governance and committees, contact
            the Registrar's Office at COEP Technological University.
          </p>
          <p className="typo-support text-white/70 mb-6">
            📍 Wellesley Rd, Shivajinagar, Pune – 411 005, Maharashtra, India
          </p>
          <a
            data-ocid="authorities.contact_us.button"
            href="mailto:info@coeptech.ac.in"
            className="inline-flex items-center gap-2 typo-btn bg-gold text-midnight
              px-7 py-3 rounded-xl shadow-gold transition-smooth
              hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-midnight"
          >
            ✉ Contact Us
          </a>
          <p className="typo-support text-white/50 mt-4">info@coeptech.ac.in</p>
        </div>
      </section>
    </div>
  );
}
