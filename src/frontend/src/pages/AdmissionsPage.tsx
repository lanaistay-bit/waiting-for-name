import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import SubTabRibbon from "@/components/SubTabRibbon";
import {
  ADMISSION_STATS,
  BTECH_PROCESS,
  BTECH_PROGRAMS,
  FEE_NOTES,
  FEE_STRUCTURE,
  MBA_PROCESS,
  MBA_SPECS,
  MTECH_ELIGIBILITY,
  MTECH_PROCESS,
  MTECH_PROGRAMS,
  PG_DIPLOMA_PROCESS,
  PG_DIPLOMA_PROGRAMS,
  PHD_AREAS,
  PHD_PROCESS,
  type ProcessStep,
  SCHOLARSHIPS,
} from "@/data/admissions";
import { useNavigate, useParams } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

const COBALT = "#1648C8";
const DEEP_BLUE = "#0F3499";
const MIDNIGHT = "#081E5C";
const GOLD = "#E8C42A";

const TABS = [
  { id: "undergraduate", label: "Undergraduate (B.Tech)" },
  { id: "postgraduate", label: "Post Graduate (M.Tech)" },
  { id: "phd", label: "Ph.D." },
  { id: "mba", label: "MBA" },
  { id: "pg-diploma", label: "PG Diploma" },
  { id: "fee-structure", label: "Fee Structure" },
];

// ─── Scroll reveal hook ──────────────────────────────────────────────────────
function useScrollReveal<T extends HTMLElement>(threshold = 0.08) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

// ─── ProcessStepItem ─────────────────────────────────────────────────────────
function ProcessStepItem({ n, title, desc }: ProcessStep) {
  return (
    <div className="flex gap-4 items-start">
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-lg flex-shrink-0 relative z-10"
          style={{
            background: `linear-gradient(135deg, ${COBALT}, ${DEEP_BLUE})`,
          }}
        >
          {n}
        </div>
        {n < 5 && (
          <div
            className="w-0.5 flex-1 mt-1"
            style={{
              background: `linear-gradient(to bottom, ${COBALT}40, transparent)`,
              minHeight: "2.5rem",
            }}
          />
        )}
      </div>
      <div className="pb-7 min-w-0 flex-1">
        <h4
          className="font-bold text-base mb-1.5 leading-snug"
          style={{ color: DEEP_BLUE, fontFamily: "Playfair Display, serif" }}
        >
          {title}
        </h4>
        <p
          className="text-sm leading-relaxed"
          style={{ color: "#5a6272", fontFamily: "Source Sans 3, sans-serif" }}
        >
          {desc}
        </p>
      </div>
    </div>
  );
}

// ─── SectionTag ──────────────────────────────────────────────────────────────
function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest mb-3"
      style={{ color: COBALT, fontFamily: "Source Sans 3, sans-serif" }}
    >
      <span className="w-5 h-px" style={{ backgroundColor: COBALT }} />
      {children}
    </span>
  );
}

// ─── SectionHero ─────────────────────────────────────────────────────────────
function SectionHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="mb-12 transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
      }}
    >
      <SectionTag>{eyebrow}</SectionTag>
      <h2
        className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
        style={{ color: DEEP_BLUE, fontFamily: "Playfair Display, serif" }}
      >
        {title}
      </h2>
      <span
        className="block h-px w-12 mb-4"
        style={{ backgroundColor: COBALT }}
      />
      <p
        className="text-lg max-w-2xl leading-relaxed"
        style={{ color: "#5a6272", fontFamily: "Source Sans 3, sans-serif" }}
      >
        {subtitle}
      </p>
    </div>
  );
}

// ─── StatCard ────────────────────────────────────────────────────────────────
function StatCard({
  icon,
  label,
  value,
  delay = 0,
}: {
  icon: string;
  label: string;
  value: string;
  delay?: number;
}) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>(0.1);
  return (
    <div
      ref={ref}
      className="rounded-2xl p-5 flex flex-col gap-2 transition-all duration-500 hover:shadow-lg cursor-default"
      style={{
        border: `1.5px solid ${COBALT}18`,
        background: "linear-gradient(135deg, #f5f8ff, #fff)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <span className="text-3xl">{icon}</span>
      <p
        className="text-[0.68rem] uppercase tracking-widest font-bold"
        style={{ color: COBALT, fontFamily: "Source Sans 3, sans-serif" }}
      >
        {label}
      </p>
      <p
        className="text-2xl font-bold leading-none"
        style={{ color: DEEP_BLUE, fontFamily: "Playfair Display, serif" }}
      >
        {value}
      </p>
    </div>
  );
}

// ─── ApplyButton ─────────────────────────────────────────────────────────────
function ApplyButton({
  href = "https://admissions.coeptech.ac.in",
  label = "Apply Now",
}: {
  href?: string;
  label?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-bold text-base transition-all duration-200 hover:scale-105 hover:shadow-lg"
      style={{
        backgroundColor: GOLD,
        color: "#1a1a1a",
        fontFamily: "Source Sans 3, sans-serif",
        boxShadow: "0 4px 18px rgba(232,196,42,0.3)",
      }}
      data-ocid="admissions.apply_button"
    >
      {label}
      <span className="text-lg">→</span>
    </a>
  );
}

// ─── InfoCard ────────────────────────────────────────────────────────────────
function InfoCard({
  children,
  accent = false,
}: {
  children: React.ReactNode;
  accent?: boolean;
}) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>(0.05);
  return (
    <div
      ref={ref}
      className="rounded-2xl p-7 h-full transition-all duration-700"
      style={{
        border: `1.5px solid ${accent ? `${COBALT}35` : `${COBALT}18`}`,
        background: accent
          ? `linear-gradient(135deg, ${COBALT}07, ${COBALT}14)`
          : "#fff",
        boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
      }}
    >
      {children}
    </div>
  );
}

// ─── Undergraduate Section ────────────────────────────────────────────────────
function UndergraduateContent() {
  const eligibilityItems = [
    "Passed HSC (10+2) with Physics, Chemistry & Mathematics",
    "Minimum 45% aggregate (40% for reserved categories)",
    "Valid MHT-CET score for State quota seats",
    "Valid JEE Main score for All India quota seats",
  ];
  const importantDates = [
    { phase: "MHT-CET Exam", period: "April–May 2025" },
    { phase: "CAP Round Registration", period: "June–July 2025" },
    { phase: "Reporting to Institute", period: "August 2025" },
  ];

  return (
    <div data-ocid="admissions.undergraduate.section">
      <SectionHero
        eyebrow="B.Tech Admissions"
        title="Undergraduate Engineering"
        subtitle="COEP Technological University offers 8 B.Tech programmes across engineering disciplines with over 540 seats annually. NAAC A++ accredited and ranked among India's top 30 engineering institutions."
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
        <StatCard icon="🏛️" label="Established" value="1854" delay={0} />
        <StatCard icon="🏆" label="Accreditation" value="NAAC A++" delay={80} />
        <StatCard icon="📚" label="B.Tech Programmes" value="8" delay={160} />
        <StatCard icon="🎓" label="Annual Intake" value="540+" delay={240} />
      </div>

      <div className="grid lg:grid-cols-2 gap-10 mb-12">
        <InfoCard>
          <h3
            className="text-2xl font-bold mb-6"
            style={{ color: DEEP_BLUE, fontFamily: "Playfair Display, serif" }}
          >
            Programmes Offered
          </h3>
          <div className="space-y-0">
            {BTECH_PROGRAMS.map((p, idx) => (
              <div
                key={p.id}
                className="flex items-center justify-between py-3 px-4 rounded-xl transition-colors hover:bg-blue-50"
                style={{
                  borderBottom:
                    idx < BTECH_PROGRAMS.length - 1
                      ? `1px solid ${COBALT}10`
                      : "none",
                }}
                data-ocid={`admissions.btech.program.${idx + 1}`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: COBALT }}
                  />
                  <span
                    className="text-sm font-semibold leading-snug"
                    style={{
                      color: "#2d3748",
                      fontFamily: "Source Sans 3, sans-serif",
                    }}
                  >
                    {p.name}
                  </span>
                </div>
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-bold flex-shrink-0 ml-2"
                  style={{ background: `${COBALT}14`, color: COBALT }}
                >
                  {p.intake} seats
                </span>
              </div>
            ))}
          </div>
        </InfoCard>

        <InfoCard accent>
          <h3
            className="text-2xl font-bold mb-6"
            style={{ color: DEEP_BLUE, fontFamily: "Playfair Display, serif" }}
          >
            Admission Process
          </h3>
          {BTECH_PROCESS.map((step) => (
            <ProcessStepItem key={step.n} {...step} />
          ))}
        </InfoCard>
      </div>

      {/* Eligibility callout */}
      <div
        className="rounded-2xl p-7 mb-10"
        style={{
          background: `linear-gradient(135deg, ${MIDNIGHT}f5, ${DEEP_BLUE}f0)`,
          boxShadow: "0 8px 32px rgba(8,30,92,0.2)",
        }}
        data-ocid="admissions.btech.eligibility"
      >
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
          <div className="flex-1">
            <p
              className="text-[0.65rem] font-bold uppercase tracking-widest mb-2 opacity-70 text-white"
              style={{ fontFamily: "Source Sans 3, sans-serif" }}
            >
              Eligibility Criteria
            </p>
            <h4
              className="text-xl font-bold text-white mb-3"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Who Can Apply for B.Tech?
            </h4>
            <ul className="space-y-1.5">
              {eligibilityItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-white/80"
                  style={{ fontFamily: "Source Sans 3, sans-serif" }}
                >
                  <span
                    className="mt-0.5 flex-shrink-0"
                    style={{ color: COBALT }}
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <ApplyButton
            href="https://cetcell.mahacet.org/"
            label="Apply via CET Cell"
          />
        </div>
      </div>

      {/* Key dates */}
      <div
        className="rounded-2xl p-7"
        style={{
          border: "1.5px solid rgba(22,72,200,0.2)",
          background: "rgba(22,72,200,0.03)",
        }}
      >
        <h4
          className="font-bold text-lg mb-4"
          style={{ color: DEEP_BLUE, fontFamily: "Playfair Display, serif" }}
        >
          Important Dates (Indicative 2025–26)
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {importantDates.map((d) => (
            <div key={d.phase} className="flex flex-col gap-0.5">
              <span
                className="text-xs font-bold uppercase tracking-wide"
                style={{
                  color: COBALT,
                  fontFamily: "Source Sans 3, sans-serif",
                }}
              >
                {d.phase}
              </span>
              <span
                className="text-base font-semibold"
                style={{
                  color: DEEP_BLUE,
                  fontFamily: "Playfair Display, serif",
                }}
              >
                {d.period}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Postgraduate Section ─────────────────────────────────────────────────────
function PostgraduateContent() {
  return (
    <div data-ocid="admissions.postgraduate.section">
      <SectionHero
        eyebrow="M.Tech Admissions"
        title="Post Graduate Engineering"
        subtitle="Two-year research-oriented postgraduate programmes across all engineering departments at COEP. Admissions based on GATE score. GATE scholars receive a monthly stipend of ₹12,400."
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
        <StatCard icon="📐" label="Duration" value="2 Years" delay={0} />
        <StatCard icon="🔬" label="Departments" value="9 Depts" delay={80} />
        <StatCard
          icon="🎯"
          label="Admission Via"
          value="GATE Score"
          delay={160}
        />
        <StatCard
          icon="💡"
          label="GATE Stipend"
          value="₹12,400/mo"
          delay={240}
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-10 mb-12">
        <InfoCard>
          <h3
            className="text-2xl font-bold mb-6"
            style={{ color: DEEP_BLUE, fontFamily: "Playfair Display, serif" }}
          >
            M.Tech Specialisations
          </h3>
          <div className="space-y-0">
            {MTECH_PROGRAMS.map((p, idx) => (
              <div
                key={p.id}
                className="py-3 px-4 rounded-xl hover:bg-blue-50 transition-colors"
                style={{
                  borderBottom:
                    idx < MTECH_PROGRAMS.length - 1
                      ? `1px solid ${COBALT}10`
                      : "none",
                }}
                data-ocid={`admissions.mtech.program.${idx + 1}`}
              >
                <span
                  className="block text-sm font-bold"
                  style={{
                    color: DEEP_BLUE,
                    fontFamily: "Source Sans 3, sans-serif",
                  }}
                >
                  {p.spec}
                </span>
                <span className="text-xs" style={{ color: "#7a8899" }}>
                  {p.dept} · {p.intake} seats
                </span>
              </div>
            ))}
          </div>
        </InfoCard>

        <InfoCard accent>
          <h3
            className="text-2xl font-bold mb-6"
            style={{ color: DEEP_BLUE, fontFamily: "Playfair Display, serif" }}
          >
            Admission Process
          </h3>
          {MTECH_PROCESS.map((step) => (
            <ProcessStepItem key={step.n} {...step} />
          ))}
          <div
            className="mt-2 rounded-xl p-5"
            style={{
              background: `${COBALT}10`,
              border: `1.5px solid ${COBALT}25`,
            }}
          >
            <h5
              className="font-bold mb-3 text-sm uppercase tracking-wide"
              style={{
                color: DEEP_BLUE,
                fontFamily: "Source Sans 3, sans-serif",
              }}
            >
              Eligibility Checklist
            </h5>
            <ul className="space-y-1.5">
              {MTECH_ELIGIBILITY.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm"
                  style={{
                    color: "#5a6272",
                    fontFamily: "Source Sans 3, sans-serif",
                  }}
                >
                  <span
                    className="mt-0.5 flex-shrink-0"
                    style={{ color: COBALT }}
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </InfoCard>
      </div>

      <div
        className="rounded-2xl p-7 flex flex-col md:flex-row items-start md:items-center gap-6"
        style={{
          background: `linear-gradient(135deg, ${MIDNIGHT}f5, ${DEEP_BLUE}f0)`,
          boxShadow: "0 8px 32px rgba(8,30,92,0.2)",
        }}
      >
        <div className="flex-1">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-1 text-white/60"
            style={{ fontFamily: "Source Sans 3, sans-serif" }}
          >
            Apply Now
          </p>
          <h4
            className="text-xl font-bold text-white mb-1"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            M.Tech Admissions 2025–26
          </h4>
          <p
            className="text-sm text-white/70"
            style={{ fontFamily: "Source Sans 3, sans-serif" }}
          >
            Applications open via DTE Maharashtra portal. GATE score is
            mandatory.
          </p>
        </div>
        <ApplyButton
          href="https://dtemaharashtra.gov.in/"
          label="Apply via DTE Maharashtra"
        />
      </div>
    </div>
  );
}

// ─── PhD Section ──────────────────────────────────────────────────────────────
function PhDContent() {
  const phdEligibility = [
    "M.Tech / M.E. / M.S. or equivalent with 55% marks (50% for reserved categories)",
    "M.Sc. / M.A. in relevant discipline for interdisciplinary research",
    "GATE / UGC NET / CSIR NET qualified candidates preferred",
    "Industry professionals with 5+ years experience may apply under sponsored category",
  ];
  const windows = [
    {
      season: "July Intake",
      period: "Applications: March–May",
      intake: "Full-time & Part-time",
    },
    {
      season: "January Intake",
      period: "Applications: September–November",
      intake: "Full-time only",
    },
  ];

  return (
    <div data-ocid="admissions.phd.section">
      <SectionHero
        eyebrow="Doctoral Research"
        title="Ph.D. Admissions"
        subtitle="Pursue cutting-edge doctoral research at India's oldest technology institution. With 9 departments offering research positions, COEP is home to internationally recognised faculty and state-of-the-art facilities."
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
        <StatCard icon="🔭" label="Duration" value="3–5 Years" delay={0} />
        <StatCard icon="🏛️" label="Research Depts" value="9" delay={80} />
        <StatCard icon="💰" label="Fellowship" value="CSIR / UGC" delay={160} />
        <StatCard
          icon="📄"
          label="Publications / Yr"
          value="500+"
          delay={240}
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-10 mb-12">
        <InfoCard>
          <h3
            className="text-2xl font-bold mb-6"
            style={{ color: DEEP_BLUE, fontFamily: "Playfair Display, serif" }}
          >
            Research Departments
          </h3>
          <div className="space-y-2">
            {PHD_AREAS.map((area, idx) => (
              <div
                key={area.id}
                className="rounded-xl p-4 hover:shadow-sm transition-all"
                style={{
                  background: idx % 2 === 0 ? `${COBALT}06` : "#fff",
                  border: `1px solid ${COBALT}12`,
                }}
                data-ocid={`admissions.phd.area.${idx + 1}`}
              >
                <span
                  className="block text-sm font-bold mb-0.5"
                  style={{
                    color: DEEP_BLUE,
                    fontFamily: "Playfair Display, serif",
                  }}
                >
                  {area.dept}
                </span>
                <span
                  className="text-xs leading-relaxed"
                  style={{
                    color: "#7a8899",
                    fontFamily: "Source Sans 3, sans-serif",
                  }}
                >
                  {area.description}
                </span>
              </div>
            ))}
          </div>
        </InfoCard>

        <InfoCard accent>
          <h3
            className="text-2xl font-bold mb-6"
            style={{ color: DEEP_BLUE, fontFamily: "Playfair Display, serif" }}
          >
            Admission Process
          </h3>
          {PHD_PROCESS.map((step) => (
            <ProcessStepItem key={step.n} {...step} />
          ))}
        </InfoCard>
      </div>

      <div
        className="rounded-2xl p-7 mb-8 grid md:grid-cols-2 gap-8"
        style={{ background: "#f7f9ff", border: `1.5px solid ${COBALT}18` }}
      >
        <div>
          <h4
            className="text-lg font-bold mb-4"
            style={{ color: DEEP_BLUE, fontFamily: "Playfair Display, serif" }}
          >
            Eligibility Criteria
          </h4>
          <ul className="space-y-2">
            {phdEligibility.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm"
                style={{
                  color: "#5a6272",
                  fontFamily: "Source Sans 3, sans-serif",
                }}
              >
                <span
                  className="mt-0.5 flex-shrink-0"
                  style={{ color: COBALT }}
                >
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4
            className="text-lg font-bold mb-4"
            style={{ color: DEEP_BLUE, fontFamily: "Playfair Display, serif" }}
          >
            Admission Windows
          </h4>
          <div className="space-y-3">
            {windows.map((w) => (
              <div
                key={w.season}
                className="rounded-xl p-4"
                style={{
                  background: `${COBALT}10`,
                  border: `1px solid ${COBALT}20`,
                }}
              >
                <p
                  className="text-sm font-bold"
                  style={{
                    color: DEEP_BLUE,
                    fontFamily: "Playfair Display, serif",
                  }}
                >
                  {w.season}
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{
                    color: "#5a6272",
                    fontFamily: "Source Sans 3, sans-serif",
                  }}
                >
                  {w.period}
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{
                    color: COBALT,
                    fontFamily: "Source Sans 3, sans-serif",
                  }}
                >
                  {w.intake}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ApplyButton
        href="https://www.coeptech.ac.in/admissions/phd"
        label="Apply for Ph.D."
      />
    </div>
  );
}

// ─── MBA Spec Card (standalone component to avoid hook-in-render) ─────────────
function MBASpecCard({
  spec,
  idx,
}: { spec: (typeof MBA_SPECS)[number]; idx: number }) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>(0.05);
  return (
    <div
      ref={ref}
      className="rounded-2xl p-8 transition-all duration-700 hover:shadow-xl"
      style={{
        background:
          idx === 0
            ? `linear-gradient(135deg, ${MIDNIGHT}f8, ${DEEP_BLUE}f0)`
            : `linear-gradient(135deg, ${COBALT}f5, ${MIDNIGHT}f0)`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transitionDelay: `${idx * 120}ms`,
      }}
      data-ocid={`admissions.mba.spec.${idx + 1}`}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <span
            className="text-[0.62rem] font-bold uppercase tracking-widest text-white/50 block mb-1"
            style={{ fontFamily: "Source Sans 3, sans-serif" }}
          >
            MBA Specialisation
          </span>
          <h3
            className="text-2xl font-bold text-white"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {spec.name}
          </h3>
        </div>
        <span
          className="px-3 py-1 rounded-full text-xs font-bold flex-shrink-0 ml-3"
          style={{
            background: GOLD,
            color: MIDNIGHT,
            fontFamily: "Source Sans 3, sans-serif",
          }}
        >
          30 seats
        </span>
      </div>
      <p
        className="text-sm text-white/75 mb-5 leading-relaxed"
        style={{ fontFamily: "Source Sans 3, sans-serif" }}
      >
        {spec.desc}
      </p>
      <ul className="space-y-1.5">
        {spec.highlights.map((h) => (
          <li
            key={h}
            className="flex items-center gap-2 text-xs text-white/70"
            style={{ fontFamily: "Source Sans 3, sans-serif" }}
          >
            <span style={{ color: "rgba(255,255,255,0.6)" }}>◆</span>
            {h}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── MBA Section ──────────────────────────────────────────────────────────────
function MBAContent() {
  const eligibilityItems = [
    "Any Bachelor's degree with minimum 50% aggregate marks",
    "Valid CAT / MAT / CMAT / XAT / MH-MBA CET score",
    "Work experience is an advantage, not mandatory",
  ];
  const programHighlights = [
    { label: "Duration", val: "2 Years (4 Semesters)" },
    { label: "Total Seats", val: "60 (AICTE Approved)" },
    { label: "Affiliation", val: "COEP Technological University" },
    { label: "Placement", val: "100% Placement Assistance" },
  ];

  return (
    <div data-ocid="admissions.mba.section">
      <SectionHero
        eyebrow="Management Studies"
        title="MBA Admissions"
        subtitle="The Department of Management Studies at COEP Technological University offers a flagship 2-year full-time MBA programme combining rigorous academics with industry immersion and strong placement outcomes."
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
        <StatCard icon="📊" label="Duration" value="2 Years" delay={0} />
        <StatCard
          icon="🧩"
          label="Specialisations"
          value="2 Streams"
          delay={80}
        />
        <StatCard icon="🎓" label="Intake" value="60 Seats" delay={160} />
        <StatCard icon="💼" label="Avg Package" value="₹12 LPA" delay={240} />
      </div>

      {/* Specializations */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {MBA_SPECS.map((s, idx) => (
          <MBASpecCard key={s.id} spec={s} idx={idx} />
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-10 mb-10">
        <InfoCard accent>
          <h3
            className="text-2xl font-bold mb-6"
            style={{ color: DEEP_BLUE, fontFamily: "Playfair Display, serif" }}
          >
            Admission Process
          </h3>
          {MBA_PROCESS.map((step) => (
            <ProcessStepItem key={step.n} {...step} />
          ))}
        </InfoCard>

        <InfoCard>
          <h3
            className="text-2xl font-bold mb-5"
            style={{ color: DEEP_BLUE, fontFamily: "Playfair Display, serif" }}
          >
            Eligibility & Key Info
          </h3>
          <div className="space-y-4">
            <div
              className="rounded-xl p-4"
              style={{
                background: `${COBALT}08`,
                border: `1px solid ${COBALT}20`,
              }}
            >
              <p
                className="text-xs font-bold uppercase tracking-wide mb-2"
                style={{
                  color: COBALT,
                  fontFamily: "Source Sans 3, sans-serif",
                }}
              >
                Eligibility
              </p>
              <ul className="space-y-1.5">
                {eligibilityItems.map((item) => (
                  <li
                    key={item}
                    className="text-sm flex items-start gap-2"
                    style={{
                      color: "#5a6272",
                      fontFamily: "Source Sans 3, sans-serif",
                    }}
                  >
                    <span style={{ color: COBALT }}>✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="rounded-xl p-4"
              style={{
                background: "rgba(22,72,200,0.06)",
                border: "1px solid rgba(22,72,200,0.2)",
              }}
            >
              <p
                className="text-xs font-bold uppercase tracking-wide mb-2"
                style={{
                  color: COBALT,
                  fontFamily: "Source Sans 3, sans-serif",
                }}
              >
                Programme Highlights
              </p>
              {programHighlights.map((row, i) => (
                <div
                  key={row.label}
                  className="flex justify-between text-sm py-1.5"
                  style={{
                    borderBottom:
                      i < programHighlights.length - 1
                        ? "1px solid rgba(22,72,200,0.1)"
                        : "none",
                  }}
                >
                  <span
                    style={{
                      color: "#6b7280",
                      fontFamily: "Source Sans 3, sans-serif",
                    }}
                  >
                    {row.label}
                  </span>
                  <span
                    className="font-semibold"
                    style={{
                      color: DEEP_BLUE,
                      fontFamily: "Source Sans 3, sans-serif",
                    }}
                  >
                    {row.val}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </InfoCard>
      </div>

      <ApplyButton
        href="https://www.coeptech.ac.in/academics/schools/school-of-multidisciplinary-sciences-humanities-and-management-studies/department-of-management-studies/"
        label="Apply for MBA"
      />
    </div>
  );
}

// ─── PG Diploma Card ──────────────────────────────────────────────────────────
function PGDiplomaCard({
  program,
  idx,
}: {
  program: (typeof PG_DIPLOMA_PROGRAMS)[number];
  idx: number;
}) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>(0.05);
  return (
    <div
      ref={ref}
      className="rounded-2xl p-6 transition-all duration-600 hover:shadow-lg hover:-translate-y-1"
      style={{
        border: `1.5px solid ${COBALT}18`,
        background: "#fff",
        boxShadow: "0 3px 16px rgba(0,0,0,0.05)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transitionDelay: `${idx * 80}ms`,
      }}
      data-ocid={`admissions.pgdiploma.program.${idx + 1}`}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-white font-bold text-sm"
        style={{
          background: `linear-gradient(135deg, ${COBALT}, ${DEEP_BLUE})`,
        }}
      >
        {idx + 1}
      </div>
      <h4
        className="font-bold text-base mb-1.5 leading-snug"
        style={{ color: DEEP_BLUE, fontFamily: "Playfair Display, serif" }}
      >
        {program.name}
      </h4>
      <p
        className="text-xs mb-2"
        style={{ color: COBALT, fontFamily: "Source Sans 3, sans-serif" }}
      >
        {program.dept}
      </p>
      <span
        className="text-xs px-2.5 py-0.5 rounded-full font-semibold"
        style={{ background: "rgba(22,72,200,0.08)", color: COBALT }}
      >
        {program.duration}
      </span>
    </div>
  );
}

// ─── PG Diploma Section ───────────────────────────────────────────────────────
function PGDiplomaContent() {
  const whyItems = [
    {
      icon: "🏫",
      title: "Industry-Aligned Curriculum",
      desc: "Curriculum co-designed with industry partners to ensure immediate job relevance and practical skills.",
    },
    {
      icon: "👨‍🏫",
      title: "Expert Faculty",
      desc: "Taught by experienced COEP faculty alongside visiting industry experts and practitioners.",
    },
    {
      icon: "🎓",
      title: "Lateral Entry to M.Tech",
      desc: "Eligible candidates can seek lateral entry into M.Tech programmes based on academic performance.",
    },
    {
      icon: "💼",
      title: "Placement Support",
      desc: "Access to COEP's robust placement cell and alumni network for career opportunities.",
    },
  ];

  return (
    <div data-ocid="admissions.pg-diploma.section">
      <SectionHero
        eyebrow="PG Diploma Programmes"
        title="Post Graduate Diplomas"
        subtitle="Short-duration postgraduate diploma programmes designed for working professionals and fresh graduates seeking specialised technical skills with industry relevance."
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-14">
        <StatCard icon="📜" label="Duration" value="1 Year" delay={0} />
        <StatCard icon="🔧" label="Mode" value="Full / Part-Time" delay={80} />
        <StatCard icon="🎯" label="Focus" value="Industry Skills" delay={160} />
      </div>

      <div className="mb-12">
        <h3
          className="text-2xl font-bold mb-6"
          style={{ color: DEEP_BLUE, fontFamily: "Playfair Display, serif" }}
        >
          Available Programmes
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PG_DIPLOMA_PROGRAMS.map((p, idx) => (
            <PGDiplomaCard key={p.id} program={p} idx={idx} />
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 mb-10">
        <InfoCard accent>
          <h3
            className="text-2xl font-bold mb-6"
            style={{ color: DEEP_BLUE, fontFamily: "Playfair Display, serif" }}
          >
            Admission Process
          </h3>
          {PG_DIPLOMA_PROCESS.map((step) => (
            <ProcessStepItem key={step.n} {...step} />
          ))}
        </InfoCard>

        <InfoCard>
          <h3
            className="text-2xl font-bold mb-5"
            style={{ color: DEEP_BLUE, fontFamily: "Playfair Display, serif" }}
          >
            Why PG Diploma at COEP?
          </h3>
          <div className="space-y-4">
            {whyItems.map((item) => (
              <div key={item.title} className="flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <p
                    className="text-sm font-bold mb-0.5"
                    style={{
                      color: DEEP_BLUE,
                      fontFamily: "Playfair Display, serif",
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="text-xs leading-relaxed"
                    style={{
                      color: "#7a8899",
                      fontFamily: "Source Sans 3, sans-serif",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </InfoCard>
      </div>

      <ApplyButton label="Apply for PG Diploma" />
    </div>
  );
}

// ─── Fee Structure Section ────────────────────────────────────────────────────
function FeeStructureContent() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>(0.05);
  const feeHeaders = [
    "Programme",
    "Category",
    "Tuition Fee",
    "Other Fees",
    "Total / Year",
  ];

  return (
    <div data-ocid="admissions.fee-structure.section">
      <SectionHero
        eyebrow="Fee Structure 2024–25"
        title="Transparent Fee Information"
        subtitle="Fees at COEP Technological University are approved by the State Government and are highly competitive for the quality of education delivered. Multiple scholarships and government concessions are available."
      />

      <div
        ref={ref}
        className="rounded-2xl overflow-hidden mb-10 transition-all duration-700"
        style={{
          boxShadow: "0 6px 32px rgba(0,0,0,0.1)",
          border: `1.5px solid ${COBALT}18`,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
        }}
      >
        <div
          className="px-7 py-5"
          style={{
            background: `linear-gradient(135deg, ${MIDNIGHT}, ${DEEP_BLUE})`,
          }}
        >
          <h3
            className="text-xl font-bold text-white"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Annual Fee Structure 2024–25
          </h3>
          <p
            className="text-white/60 text-sm mt-1"
            style={{ fontFamily: "Source Sans 3, sans-serif" }}
          >
            All amounts in Indian Rupees (₹) per academic year
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: `${COBALT}10` }}>
                {feeHeaders.map((h) => (
                  <th
                    key={h}
                    className="text-left py-3 px-5 font-bold"
                    style={{
                      color: DEEP_BLUE,
                      fontFamily: "Source Sans 3, sans-serif",
                      borderBottom: `2px solid ${COBALT}20`,
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {FEE_STRUCTURE.map((f, idx) => (
                <tr
                  key={f.id}
                  className="hover:bg-blue-50 transition-colors"
                  style={{ background: idx % 2 === 0 ? "#fafbff" : "#fff" }}
                  data-ocid={`admissions.fee.row.${idx + 1}`}
                >
                  <td
                    className="py-3.5 px-5 font-semibold"
                    style={{
                      color: DEEP_BLUE,
                      fontFamily: "Source Sans 3, sans-serif",
                    }}
                  >
                    {f.program}
                  </td>
                  <td
                    className="py-3.5 px-5"
                    style={{
                      color: "#6b7280",
                      fontFamily: "Source Sans 3, sans-serif",
                    }}
                  >
                    {f.category}
                  </td>
                  <td
                    className="py-3.5 px-5 tabular-nums"
                    style={{ color: "#374151" }}
                  >
                    {f.tuitionFee}
                  </td>
                  <td
                    className="py-3.5 px-5 tabular-nums"
                    style={{ color: "#374151" }}
                  >
                    {f.otherFees}
                  </td>
                  <td
                    className="py-3.5 px-5 tabular-nums font-bold"
                    style={{ color: COBALT }}
                  >
                    {f.totalAnnual}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-10">
        <InfoCard>
          <h3
            className="text-2xl font-bold mb-5"
            style={{ color: DEEP_BLUE, fontFamily: "Playfair Display, serif" }}
          >
            Scholarships Available
          </h3>
          <div className="space-y-4">
            {SCHOLARSHIPS.map((s, idx) => (
              <div
                key={s.id}
                className="rounded-xl p-4 hover:shadow-sm transition-all"
                style={{
                  border: "1px solid rgba(22,72,200,0.2)",
                  background: "rgba(22,72,200,0.04)",
                }}
                data-ocid={`admissions.scholarship.${idx + 1}`}
              >
                <div className="flex items-start gap-3">
                  <span
                    className="text-xl flex-shrink-0"
                    style={{ color: COBALT }}
                  >
                    ★
                  </span>
                  <div>
                    <p
                      className="font-bold text-sm mb-0.5"
                      style={{
                        color: DEEP_BLUE,
                        fontFamily: "Playfair Display, serif",
                      }}
                    >
                      {s.name}
                    </p>
                    <p
                      className="text-xs mb-1"
                      style={{
                        color: "#6b7280",
                        fontFamily: "Source Sans 3, sans-serif",
                      }}
                    >
                      <span className="font-semibold">Eligibility:</span>{" "}
                      {s.eligibility}
                    </p>
                    <p
                      className="text-xs"
                      style={{
                        color: COBALT,
                        fontFamily: "Source Sans 3, sans-serif",
                      }}
                    >
                      <span className="font-semibold">Benefit:</span>{" "}
                      {s.benefit}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </InfoCard>

        <InfoCard accent>
          <h3
            className="text-2xl font-bold mb-5"
            style={{ color: DEEP_BLUE, fontFamily: "Playfair Display, serif" }}
          >
            Important Notes
          </h3>
          <ul className="space-y-3">
            {FEE_NOTES.map((note, i) => (
              <li
                key={note}
                className="flex items-start gap-3 text-sm leading-relaxed"
                style={{
                  color: "#5a6272",
                  fontFamily: "Source Sans 3, sans-serif",
                }}
              >
                <span
                  className="mt-0.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold"
                  style={{ background: COBALT, minWidth: "1.25rem" }}
                >
                  {i + 1}
                </span>
                {note}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <a
              href="https://www.coeptech.ac.in/admissions/fee-structure"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm transition-all duration-200 hover:scale-105"
              style={{
                background: GOLD,
                color: "#1a1a1a",
                fontFamily: "Source Sans 3, sans-serif",
                boxShadow: "0 4px 18px rgba(232,196,42,0.3)",
              }}
              data-ocid="admissions.fee_structure_download"
            >
              Download Fee Structure PDF ↓
            </a>
          </div>
        </InfoCard>
      </div>
    </div>
  );
}

// ─── Content map ──────────────────────────────────────────────────────────────
const CONTENT_MAP: Record<string, React.ReactNode> = {
  undergraduate: <UndergraduateContent />,
  postgraduate: <PostgraduateContent />,
  phd: <PhDContent />,
  mba: <MBAContent />,
  "pg-diploma": <PGDiplomaContent />,
  "fee-structure": <FeeStructureContent />,
};

// ─── Why COEP Sidebar ─────────────────────────────────────────────────────────
function WhyCOEP() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>(0.05);
  const quickLinks = [
    {
      label: "Official Admissions Portal",
      href: "https://admissions.coeptech.ac.in",
    },
    { label: "MHT-CET Cell Maharashtra", href: "https://cetcell.mahacet.org/" },
    { label: "DTE Maharashtra", href: "https://dtemaharashtra.gov.in/" },
    { label: "NIRF Rankings", href: "https://www.nirfindia.org/" },
    {
      label: "Download Prospectus",
      href: "https://www.coeptech.ac.in/admissions/",
    },
  ];

  return (
    <div
      ref={ref}
      className="transition-all duration-700 space-y-6"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
      }}
    >
      {/* Why COEP stats */}
      <div
        className="rounded-2xl overflow-hidden"
        style={{
          border: `1.5px solid ${COBALT}18`,
          boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
        }}
      >
        <div
          className="px-6 py-5"
          style={{
            background: `linear-gradient(135deg, ${MIDNIGHT}, ${COBALT})`,
          }}
        >
          <p
            className="text-xs font-bold uppercase tracking-widest text-white/60 mb-1"
            style={{ fontFamily: "Source Sans 3, sans-serif" }}
          >
            Why Choose
          </p>
          <h3
            className="text-xl font-bold text-white"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            COEP Technological University
          </h3>
        </div>
        <div className="p-5 bg-white">
          {ADMISSION_STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="flex items-center gap-4 py-3"
              style={{
                borderBottom:
                  i < ADMISSION_STATS.length - 1
                    ? `1px solid ${COBALT}10`
                    : "none",
              }}
            >
              <span className="text-2xl flex-shrink-0">{stat.icon}</span>
              <div className="min-w-0">
                <p
                  className="text-sm font-bold leading-tight"
                  style={{
                    color: DEEP_BLUE,
                    fontFamily: "Playfair Display, serif",
                  }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-xs"
                  style={{
                    color: "#9ca3af",
                    fontFamily: "Source Sans 3, sans-serif",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick links */}
      <div
        className="rounded-2xl p-5"
        style={{
          border: `1.5px solid ${COBALT}18`,
          background: "#fff",
          boxShadow: "0 3px 16px rgba(0,0,0,0.05)",
        }}
      >
        <h4
          className="text-base font-bold mb-4"
          style={{ color: DEEP_BLUE, fontFamily: "Playfair Display, serif" }}
        >
          Quick Links
        </h4>
        <ul className="space-y-0">
          {quickLinks.map((link, i) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 py-2 text-sm transition-all hover:pl-2"
                style={{
                  color: "#5a6272",
                  fontFamily: "Source Sans 3, sans-serif",
                  borderBottom:
                    i < quickLinks.length - 1
                      ? `1px solid ${COBALT}08`
                      : "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = COBALT;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#5a6272";
                }}
                data-ocid={`admissions.quick_link.${i + 1}`}
              >
                <span style={{ color: COBALT }}>›</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Helpdesk */}
      <div
        className="rounded-2xl p-5"
        style={{
          background: `linear-gradient(135deg, ${COBALT}0c, ${DEEP_BLUE}0a)`,
          border: `1.5px solid ${COBALT}20`,
        }}
      >
        <h4
          className="text-base font-bold mb-1"
          style={{ color: DEEP_BLUE, fontFamily: "Playfair Display, serif" }}
        >
          Admissions Helpdesk
        </h4>
        <p
          className="text-xs mb-4 leading-relaxed"
          style={{ color: "#7a8899", fontFamily: "Source Sans 3, sans-serif" }}
        >
          For queries, contact the office between 9:30 AM – 5:30 PM on working
          days.
        </p>
        <div className="space-y-2">
          <a
            href="tel:+912025507000"
            className="flex items-center gap-2 text-sm font-semibold hover:underline"
            style={{ color: COBALT, fontFamily: "Source Sans 3, sans-serif" }}
            data-ocid="admissions.helpdesk_phone"
          >
            📞 +91-20-2550-7000
          </a>
          <a
            href="mailto:admissions@coeptech.ac.in"
            className="flex items-center gap-2 text-sm font-semibold hover:underline"
            style={{ color: COBALT, fontFamily: "Source Sans 3, sans-serif" }}
            data-ocid="admissions.helpdesk_email"
          >
            ✉ admissions@coeptech.ac.in
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function AdmissionsPage() {
  const params = useParams({ strict: false }) as { sectionId?: string };
  const navigate = useNavigate();
  const activeTab = params.sectionId ?? "undergraduate";
  const [contentKey, setContentKey] = useState(activeTab);
  const prevTab = useRef(activeTab);

  useEffect(() => {
    if (activeTab !== prevTab.current) {
      prevTab.current = activeTab;
      setContentKey(activeTab);
    }
  }, [activeTab]);

  function handleTabChange(tabId: string) {
    navigate({ to: "/admissions/$sectionId", params: { sectionId: tabId } });
    setContentKey(tabId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const activeTabLabel =
    TABS.find((t) => t.id === activeTab)?.label ?? "Admissions";

  const heroStats = [
    { label: "Est.", value: "1854" },
    { label: "Accreditation", value: "NAAC A++" },
    { label: "NIRF Rank", value: "Top 30" },
    { label: "Placement", value: "95%+" },
  ];

  return (
    <div
      className="min-h-screen bg-background flex flex-col"
      style={{ fontFamily: "Source Sans 3, sans-serif" }}
    >
      <Header />

      {/* ── Cinematic Hero ── */}
      <div
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${MIDNIGHT} 0%, ${DEEP_BLUE} 50%, ${COBALT} 100%)`,
          minHeight: "260px",
        }}
        data-ocid="admissions.hero"
      >
        {/* Decorative circles */}
        <div
          className="absolute right-0 top-0 w-96 h-96 rounded-full opacity-[0.07] pointer-events-none"
          style={{ background: GOLD, transform: "translate(35%, -40%)" }}
        />
        <div
          className="absolute left-0 bottom-0 w-64 h-64 rounded-full opacity-[0.06] pointer-events-none"
          style={{ background: "#fff", transform: "translate(-30%, 40%)" }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-[1280px] mx-auto px-4 xl:px-8 pt-14 pb-12">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <nav
              className="flex items-center gap-2 text-xs mb-5 opacity-60 text-white"
              aria-label="Breadcrumb"
            >
              <a href="/" className="hover:opacity-100 transition-opacity">
                Home
              </a>
              <span>›</span>
              <span>Admissions</span>
              {activeTab !== "undergraduate" && (
                <>
                  <span>›</span>
                  <span>{activeTabLabel}</span>
                </>
              )}
            </nav>

            <p
              className="text-[0.68rem] font-bold uppercase tracking-[0.2em] mb-4 opacity-60 text-white"
              style={{ fontFamily: "Source Sans 3, sans-serif" }}
            >
              COEP Technological University · Pune
            </p>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-5 fade-in-down"
              style={{
                fontFamily: "Playfair Display, serif",
                lineHeight: 1.05,
              }}
            >
              Admissions
            </h1>
            <p
              className="text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed fade-in-up"
              style={{ fontFamily: "Source Sans 3, sans-serif" }}
            >
              Your journey to academic excellence begins here. Over 170 years of
              engineering tradition, NAAC A++ accreditation, and world-class
              research opportunities await you.
            </p>

            {/* Stats strip */}
            <div className="flex flex-wrap gap-8 mt-8">
              {heroStats.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col"
                  data-ocid={`admissions.hero_stat.${s.label}`}
                >
                  <span
                    className="text-2xl font-bold text-white leading-none"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {s.value}
                  </span>
                  <span
                    className="text-[0.65rem] uppercase tracking-widest text-white/50 mt-0.5"
                    style={{ fontFamily: "Source Sans 3, sans-serif" }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Sub-tab Ribbon ── */}
      <SubTabRibbon
        tabs={TABS}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />

      {/* ── Main content + sidebar ── */}
      <main
        className="flex-1 max-w-[1280px] mx-auto w-full px-4 xl:px-8 py-14"
        data-ocid="admissions.content_panel"
      >
        <div className="flex flex-col xl:flex-row gap-12">
          {/* Primary content */}
          <div className="flex-1 min-w-0" key={contentKey}>
            {CONTENT_MAP[activeTab] ?? CONTENT_MAP.undergraduate}
          </div>

          {/* Sidebar */}
          <aside
            className="xl:w-[300px] flex-shrink-0"
            data-ocid="admissions.sidebar"
          >
            <WhyCOEP />
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
