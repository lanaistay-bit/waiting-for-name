import { Layout } from "@/components/Layout";
import SubTabRibbon from "@/components/SubTabRibbon";
import { useNavigate, useParams } from "@tanstack/react-router";
import {
  Award,
  BookOpen,
  Briefcase,
  Building2,
  Calendar,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Quote,
  Star,
  TrendingUp,
  Trophy,
  Users,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const COBALT = "#1A237E";
const DEEP_BLUE = "#0F3399";
const MIDNIGHT = "#081E5C";
const GOLD = "#E8C42A";

// ─── Sub-tabs ─────────────────────────────────────────────────────────────────
const TABS = [
  { id: "overview", label: "Overview" },
  { id: "recruiters", label: "Recruiters" },
  { id: "statistics", label: "Placement Statistics" },
  { id: "career-services", label: "Career Services" },
  { id: "training", label: "Training & Development" },
  { id: "alumni", label: "Alumni Success" },
];

// ─── CountUp hook ─────────────────────────────────────────────────────────────
function useCountUp(target: number, duration = 1800) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const pct = Math.min((now - start) / duration, 1);
            const ease = 1 - (1 - pct) ** 3;
            setValue(Math.round(target * ease));
            if (pct < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return { value, ref };
}

// ─── AnimatedBar ─────────────────────────────────────────────────────────────
function AnimatedBar({ pct, color }: { pct: number; color: string }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(pct), 100);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [pct]);
  return (
    <div
      ref={ref}
      className="h-2.5 rounded-full overflow-hidden"
      style={{ backgroundColor: `${color}22` }}
    >
      <div
        className="h-full rounded-full"
        style={{
          width: `${width}%`,
          backgroundColor: color,
          transition: "width 1.2s cubic-bezier(0.4,0,0.2,1)",
        }}
      />
    </div>
  );
}

// ─── StatBadge ────────────────────────────────────────────────────────────────
function StatBadge({
  value,
  label,
  delay,
}: {
  value: string;
  label: string;
  delay: number;
}) {
  return (
    <div
      className="flex flex-col items-center text-center px-6 py-5 rounded-2xl"
      style={{
        background: "rgba(255,255,255,0.12)",
        border: "1px solid rgba(255,255,255,0.25)",
        backdropFilter: "blur(8px)",
        animation: `fadeInUp 0.7s ease-out ${delay}s both`,
      }}
      data-ocid="placements.hero_stat"
    >
      <span
        className="typo-stat-number leading-none"
        style={{ color: "white" }}
      >
        {value}
      </span>
      <span className="typo-stat-label mt-2 text-white/75">{label}</span>
    </div>
  );
}

// ─── OVERVIEW SECTION ─────────────────────────────────────────────────────────
const OVERVIEW_STATS = [
  {
    label: "Total Offers (2024)",
    numericTarget: 1940,
    display: "1,940+",
    suffix: "+",
  },
  {
    label: "Companies Visited",
    numericTarget: 245,
    display: "245+",
    suffix: "+",
  },
  { label: "Highest CTC", numericTarget: 87, display: "₹87 LPA", suffix: "" },
  { label: "Average CTC", numericTarget: 12, display: "₹12 LPA", suffix: "" },
  { label: "Internships", numericTarget: 365, display: "365+", suffix: "+" },
  { label: "Placement Rate", numericTarget: 90, display: "90%+", suffix: "%" },
];

function StatCard({
  stat,
  idx,
}: { stat: (typeof OVERVIEW_STATS)[0]; idx: number }) {
  const { value, ref } = useCountUp(stat.numericTarget, 1800);
  const icons = [Trophy, Building2, Award, TrendingUp, BookOpen, Star];
  const Icon = icons[idx % icons.length];
  return (
    <div
      className="rounded-2xl p-7 text-white text-center relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
      style={{
        background: `linear-gradient(135deg, ${COBALT} 0%, ${DEEP_BLUE} 60%, ${MIDNIGHT} 100%)`,
        animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`,
      }}
      data-ocid={`placements.overview_stat.${idx + 1}`}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(circle at center, #fff, transparent 70%)",
        }}
      />
      <Icon className="w-7 h-7 mx-auto mb-3 opacity-60" />
      <span ref={ref} className="sr-only">
        {value}
      </span>
      <p
        className="typo-stat-number leading-none mb-2"
        style={{ color: "white" }}
      >
        {stat.display}
      </p>
      <p className="typo-stat-label text-white/70">{stat.label}</p>
    </div>
  );
}

function OverviewSection() {
  return (
    <div className="space-y-16">
      {/* Stats grid */}
      <section>
        <div className="text-center mb-10">
          <div
            className="inline-block w-12 h-1 rounded-full mb-4"
            style={{ backgroundColor: COBALT }}
          />
          <h2
            className="typo-section-heading font-bold mb-3"
            style={{ color: DEEP_BLUE }}
          >
            Key Placement Highlights
          </h2>
          <p
            className="typo-body-lg max-w-2xl mx-auto"
            style={{ color: "#555" }}
          >
            A legacy of excellence — COEP graduates power the world's top
            organisations
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {OVERVIEW_STATS.map((s, idx) => (
            <StatCard key={s.label} stat={s} idx={idx} />
          ))}
        </div>
      </section>

      {/* About TPC */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div style={{ animation: "fadeInUp 0.7s ease-out 0.1s both" }}>
          <div
            className="w-12 h-1 rounded-full mb-5"
            style={{ backgroundColor: COBALT }}
          />
          <h2
            className="typo-section-heading font-bold mb-5"
            style={{ color: DEEP_BLUE }}
          >
            Training &amp; Placement Cell
          </h2>
          <p className="typo-body-lg mb-4" style={{ color: "#444" }}>
            The Training &amp; Placement Cell (TPC) at COEP Technological
            University is the primary bridge between academia and industry. With
            over 168 years of legacy, COEP has built deep relationships with
            India's top employers across every sector.
          </p>
          <p className="typo-body-lg mb-6" style={{ color: "#444" }}>
            Under dedicated Training &amp; Placement Officers, TPC manages the
            complete placement cycle — from pre-placement training and company
            coordination to final offer issuance — ensuring transparent,
            merit-based placement for all students.
          </p>
          <div
            className="typo-support inline-flex items-center gap-2 px-5 py-3 rounded-xl"
            style={{
              backgroundColor: `${COBALT}12`,
              color: COBALT,
              border: `1px solid ${COBALT}30`,
            }}
          >
            <Mail className="w-4 h-4" />
            Contact TPC: tpc@coeptech.ac.in &nbsp;|&nbsp; +91-20-25507000 Ext.
            200
          </div>
        </div>

        {/* Contact card */}
        <div
          className="rounded-2xl overflow-hidden shadow-2xl"
          style={{
            background: `linear-gradient(135deg, ${COBALT} 0%, ${MIDNIGHT} 100%)`,
            animation: "fadeInUp 0.7s ease-out 0.2s both",
          }}
        >
          <div className="p-8 text-white">
            <h3
              className="typo-section-heading font-bold mb-6"
              style={{ color: "#fff" }}
            >
              Reach Our TPC
            </h3>
            {[
              {
                Icon: Users,
                title: "Prof. Amol Deshmukh",
                sub: "Training & Placement Officer",
              },
              {
                Icon: Mail,
                title: "tpc@coeptech.ac.in",
                sub: "Official TPC Email",
              },
              {
                Icon: Phone,
                title: "+91-20-25507000 Ext. 200",
                sub: "Mon–Sat, 9AM–5PM IST",
              },
              {
                Icon: MapPin,
                title: "TPC Office, Main Building",
                sub: "COEP Tech University, Pune – 411005",
              },
            ].map(({ Icon, title, sub }) => (
              <div key={sub} className="flex items-start gap-4 mb-5 last:mb-0">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                >
                  <Icon className="w-4 h-4" style={{ color: "white" }} />
                </div>
                <div>
                  <p className="font-semibold text-white/90">{title}</p>
                  <p className="text-sm text-white/55">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement process */}
      <section
        className="rounded-3xl py-12 px-8"
        style={{
          background: "linear-gradient(135deg, #f0f4ff 0%, #e8eeff 100%)",
          border: `1px solid ${COBALT}20`,
        }}
      >
        <h3
          className="typo-section-heading font-bold text-center mb-2"
          style={{ color: DEEP_BLUE }}
        >
          Our Placement Process
        </h3>
        <p className="typo-body text-center mb-10" style={{ color: "#666" }}>
          A structured, transparent journey from registration to offer letter
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            {
              n: "01",
              t: "Registration",
              d: "Students register with TPC before placement season",
            },
            {
              n: "02",
              t: "PPT",
              d: "Pre-placement talks from visiting companies",
            },
            {
              n: "03",
              t: "Aptitude Test",
              d: "Online/written quantitative & verbal test",
            },
            {
              n: "04",
              t: "Technical Round",
              d: "Domain-specific interview with subject experts",
            },
            {
              n: "05",
              t: "HR Interview",
              d: "Culture fit, soft skills & salary discussion",
            },
            {
              n: "06",
              t: "Offer Letter",
              d: "Final selection and formal offer issuance",
            },
          ].map((step, idx) => (
            <div
              key={step.n}
              className="flex flex-col items-center text-center"
              data-ocid={`placements.process.${idx + 1}`}
            >
              <div
                className="w-14 h-14 rounded-full flex flex-col items-center justify-center mb-3 shadow-lg"
                style={{ backgroundColor: COBALT, color: "#fff" }}
              >
                <span className="text-xs font-bold opacity-60">{step.n}</span>
              </div>
              <h4
                className="typo-support font-bold text-sm mb-1"
                style={{ color: DEEP_BLUE }}
              >
                {step.t}
              </h4>
              <p className="typo-stat-label" style={{ color: "#777" }}>
                {step.d}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// ─── RECRUITERS SECTION ───────────────────────────────────────────────────────
const RECRUITER_ROWS = [
  {
    tier: "Tier 1 — Premier Recruiters",
    companies: [
      { name: "Google", sector: "Technology" },
      { name: "Microsoft", sector: "Technology" },
      { name: "Amazon", sector: "Technology" },
      { name: "Goldman Sachs", sector: "Finance" },
      { name: "Deutsche Bank", sector: "Finance" },
    ],
    large: true,
  },
  {
    tier: "IT & Consulting Giants",
    companies: [
      { name: "Capgemini", sector: "IT Consulting" },
      { name: "TCS", sector: "IT Services" },
      { name: "Infosys", sector: "IT Services" },
      { name: "Wipro", sector: "IT Services" },
      { name: "Accenture", sector: "Consulting" },
      { name: "HCL Technologies", sector: "IT Services" },
    ],
    large: false,
  },
  {
    tier: "Core Engineering Leaders",
    companies: [
      { name: "L&T Technology Services", sector: "Engineering" },
      { name: "Tata Technologies", sector: "Engineering" },
      { name: "Forbes Marshall", sector: "Manufacturing" },
      { name: "Thermax", sector: "Energy" },
      { name: "Cummins India", sector: "Manufacturing" },
    ],
    large: false,
  },
  {
    tier: "Automotive & Manufacturing",
    companies: [
      { name: "Persistent Systems", sector: "IT Services" },
      { name: "Cyient", sector: "Engineering" },
      { name: "KPIT Technologies", sector: "Automotive IT" },
      { name: "Bajaj Auto", sector: "Automotive" },
      { name: "Mahindra & Mahindra", sector: "Automotive" },
    ],
    large: false,
  },
  {
    tier: "Finance & Professional Services",
    companies: [
      { name: "Deloitte", sector: "Consulting" },
      { name: "EY", sector: "Consulting" },
      { name: "KPMG", sector: "Consulting" },
      { name: "PwC", sector: "Consulting" },
      { name: "Syntel (Atos)", sector: "IT Services" },
      { name: "Hexaware Technologies", sector: "IT Services" },
    ],
    large: false,
  },
  {
    tier: "Global Industrial",
    companies: [
      { name: "Siemens", sector: "Industrial" },
      { name: "ABB", sector: "Industrial" },
      { name: "Honeywell", sector: "Industrial" },
      { name: "Bosch", sector: "Industrial" },
      { name: "Atlas Copco", sector: "Industrial" },
      { name: "Renishaw", sector: "Precision Eng." },
    ],
    large: false,
  },
  {
    tier: "Startups & New-Age Tech",
    companies: [
      { name: "Flipkart", sector: "E-Commerce" },
      { name: "Ola", sector: "Mobility" },
      { name: "Zomato", sector: "Food Tech" },
      { name: "Housing.com", sector: "PropTech" },
      { name: "BYJU'S", sector: "EdTech" },
      { name: "upGrad", sector: "EdTech" },
    ],
    large: false,
  },
];

const SECTOR_COLORS: Record<string, string> = {
  Technology: "#1A237E",
  Finance: "#0F3399",
  "IT Consulting": "#1a5e8a",
  "IT Services": "#2563eb",
  Consulting: "#1e40af",
  Engineering: "#0e7490",
  Manufacturing: "#065f46",
  Energy: "#0F3399",
  "Automotive IT": "#1A237E",
  Automotive: "#059669",
  Industrial: "#b45309",
  "Precision Eng.": "#9f1239",
  "E-Commerce": "#c2410c",
  Mobility: "#0369a1",
  "Food Tech": "#b91c1c",
  PropTech: "#0e7490",
  EdTech: "#0f766e",
  "IT Outsourcing": "#1d4ed8",
};

function RecruiterTile({
  name,
  sector,
  large,
  idx,
}: {
  name: string;
  sector: string;
  large: boolean;
  idx: number;
}) {
  const [hovered, setHovered] = useState(false);
  const initials = name
    .split(/[\s&]+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
  const color = SECTOR_COLORS[sector] ?? COBALT;

  return (
    <div
      className="rounded-xl border cursor-pointer overflow-hidden transition-all duration-300"
      style={{
        borderColor: hovered ? COBALT : "rgba(26, 35, 126, 0.18)",
        background: hovered ? COBALT : "#f8faff",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? "0 12px 32px rgba(26, 35, 126, 0.25)" : "none",
        animation: `fadeInUp 0.5s ease-out ${(idx % 6) * 0.07}s both`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-ocid={`placements.recruiter.${idx + 1}`}
    >
      <div
        className={`flex flex-col items-center gap-2.5 p-4 ${large ? "py-6" : ""}`}
      >
        <div
          className="flex items-center justify-center rounded-lg font-bold text-white"
          style={{
            width: large ? 56 : 44,
            height: large ? 56 : 44,
            fontSize: large ? "1.1rem" : "0.85rem",
            backgroundColor: hovered ? "rgba(255,255,255,0.2)" : color,
            transition: "background-color 0.3s",
          }}
        >
          {initials}
        </div>
        <div className="text-center">
          <p
            className="typo-btn font-bold leading-tight"
            style={{
              fontSize: large ? "0.95rem" : "0.82rem",
              color: hovered ? "#fff" : DEEP_BLUE,
              transition: "color 0.3s",
            }}
          >
            {name}
          </p>
          <p
            className="typo-stat-label mt-0.5"
            style={{
              color: hovered ? "rgba(255,255,255,0.7)" : "#888",
              transition: "color 0.3s",
            }}
          >
            {sector}
          </p>
        </div>
      </div>
    </div>
  );
}

function RecruitersSection() {
  return (
    <div className="space-y-14">
      <div className="text-center">
        <div
          className="inline-block w-12 h-1 rounded-full mb-4"
          style={{ backgroundColor: COBALT }}
        />
        <h2
          className="typo-section-heading font-bold mb-3"
          style={{ color: DEEP_BLUE }}
        >
          Our Top Recruiters
        </h2>
        <p className="typo-body-lg max-w-2xl mx-auto" style={{ color: "#555" }}>
          Over 245 companies across sectors trust COEP talent — from global tech
          giants to industrial leaders and fast-growing startups.
        </p>
      </div>

      {RECRUITER_ROWS.map((row) => (
        <section key={row.tier}>
          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-1 h-7 rounded-full"
              style={{ backgroundColor: COBALT }}
            />
            <h3
              className="typo-card-title font-bold"
              style={{ color: DEEP_BLUE }}
            >
              {row.tier}
            </h3>
          </div>
          <div
            className={`grid gap-4 ${
              row.large
                ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-5"
                : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
            }`}
          >
            {row.companies.map((c, idx) => (
              <RecruiterTile
                key={c.name}
                name={c.name}
                sector={c.sector}
                large={row.large}
                idx={idx}
              />
            ))}
          </div>
        </section>
      ))}

      <div className="text-center pt-4">
        <button
          type="button"
          className="typo-btn inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 shadow-lg"
          style={{ backgroundColor: COBALT, color: "#fff" }}
          data-ocid="placements.view_all_recruiters_button"
        >
          <Building2 className="w-5 h-5" />
          View All Recruiters
        </button>
      </div>
    </div>
  );
}

// ─── STATISTICS SECTION ───────────────────────────────────────────────────────
const YEAR_DATA: Record<
  string,
  {
    eligible: number;
    offers: number;
    pct: number;
    highest: string;
    avg: string;
    median: string;
  }
> = {
  "2024-25": {
    eligible: 2150,
    offers: 1940,
    pct: 90,
    highest: "₹87 LPA",
    avg: "₹12 LPA",
    median: "₹8.5 LPA",
  },
  "2023-24": {
    eligible: 2000,
    offers: 1790,
    pct: 89,
    highest: "₹65 LPA",
    avg: "₹10.8 LPA",
    median: "₹7.9 LPA",
  },
  "2022-23": {
    eligible: 1850,
    offers: 1620,
    pct: 88,
    highest: "₹52 LPA",
    avg: "₹9.6 LPA",
    median: "₹7.2 LPA",
  },
};

const DEPT_STATS = [
  {
    dept: "Computer Science & Engg.",
    eligible: 240,
    placed: 235,
    pct: 98,
    highest: "₹87 LPA",
    avg: "₹18.2 LPA",
  },
  {
    dept: "Electronics & Telecomm.",
    eligible: 180,
    placed: 172,
    pct: 96,
    highest: "₹45 LPA",
    avg: "₹12.4 LPA",
  },
  {
    dept: "Electrical Engineering",
    eligible: 150,
    placed: 141,
    pct: 94,
    highest: "₹38 LPA",
    avg: "₹10.6 LPA",
  },
  {
    dept: "Mechanical Engineering",
    eligible: 180,
    placed: 165,
    pct: 92,
    highest: "₹28 LPA",
    avg: "₹9.2 LPA",
  },
  {
    dept: "I&C Engineering",
    eligible: 120,
    placed: 112,
    pct: 93,
    highest: "₹35 LPA",
    avg: "₹11.1 LPA",
  },
  {
    dept: "Manufacturing Engg.",
    eligible: 120,
    placed: 108,
    pct: 90,
    highest: "₹22 LPA",
    avg: "₹8.4 LPA",
  },
  {
    dept: "Civil Engineering",
    eligible: 140,
    placed: 120,
    pct: 86,
    highest: "₹18 LPA",
    avg: "₹7.8 LPA",
  },
  {
    dept: "Metallurgy & Materials",
    eligible: 90,
    placed: 81,
    pct: 90,
    highest: "₹20 LPA",
    avg: "₹8.0 LPA",
  },
  {
    dept: "MBA (Management Studies)",
    eligible: 90,
    placed: 87,
    pct: 97,
    highest: "₹28 LPA",
    avg: "₹14.2 LPA",
  },
];

const SECTOR_BREAKDOWN = [
  { label: "Software & IT", pct: 40, color: COBALT },
  { label: "Manufacturing & Engineering", pct: 25, color: DEEP_BLUE },
  { label: "Finance & Consulting", pct: 15, color: "#1a5e8a" },
  { label: "Core Engineering", pct: 12, color: MIDNIGHT },
  { label: "Others", pct: 8, color: "#4B7FAD" },
];

function StatisticsSection() {
  const [activeYear, setActiveYear] = useState("2024-25");
  const yearData = YEAR_DATA[activeYear];

  return (
    <div className="space-y-14">
      <div className="text-center">
        <div
          className="inline-block w-12 h-1 rounded-full mb-4"
          style={{ backgroundColor: COBALT }}
        />
        <h2
          className="typo-section-heading font-bold mb-3"
          style={{ color: DEEP_BLUE }}
        >
          Placement Statistics
        </h2>
        <p className="typo-body-lg max-w-2xl mx-auto" style={{ color: "#555" }}>
          Transparent, year-on-year data reflecting consistent growth in our
          placement outcomes
        </p>
      </div>

      {/* Year selector */}
      <div className="flex justify-center gap-3 flex-wrap">
        {Object.keys(YEAR_DATA).map((yr) => (
          <button
            key={yr}
            type="button"
            onClick={() => setActiveYear(yr)}
            className="typo-btn px-6 py-2.5 rounded-full text-sm transition-all duration-200"
            style={{
              backgroundColor: activeYear === yr ? COBALT : "transparent",
              color: activeYear === yr ? "#fff" : COBALT,
              border: `1.5px solid ${COBALT}`,
            }}
            data-ocid={`placements.year_tab.${yr}`}
          >
            {yr}
          </button>
        ))}
      </div>

      {/* Year stats grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {[
          {
            label: "Students Eligible",
            value: yearData.eligible.toLocaleString(),
          },
          { label: "Total Offers", value: yearData.offers.toLocaleString() },
          { label: "Placement %", value: `${yearData.pct}%` },
          { label: "Highest CTC", value: yearData.highest },
          { label: "Average CTC", value: yearData.avg },
          { label: "Median CTC", value: yearData.median },
        ].map((item, idx) => (
          <div
            key={item.label}
            className="rounded-xl text-center p-5 border"
            style={{
              borderColor: "rgba(26, 35, 126, 0.15)",
              background: idx % 2 === 0 ? "#f8faff" : "#fff",
            }}
            data-ocid={`placements.year_stat.${idx + 1}`}
          >
            <p className="typo-stat-number mb-1" style={{ color: COBALT }}>
              {item.value}
            </p>
            <p
              className="typo-stat-label text-center"
              style={{ color: "#666" }}
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>

      {/* Sector breakdown */}
      <section
        className="rounded-2xl p-8"
        style={{ background: "#f8faff", border: `1px solid ${COBALT}18` }}
      >
        <h3
          className="typo-section-heading font-bold mb-6"
          style={{ color: DEEP_BLUE }}
        >
          Sector-wise Breakdown ({activeYear})
        </h3>
        <div className="space-y-5">
          {SECTOR_BREAKDOWN.map((s) => (
            <div key={s.label} data-ocid={`placements.sector.${s.label}`}>
              <div className="flex justify-between items-center mb-1.5">
                <span
                  className="typo-support font-semibold"
                  style={{ color: DEEP_BLUE }}
                >
                  {s.label}
                </span>
                <span className="text-sm font-bold" style={{ color: s.color }}>
                  {s.pct}%
                </span>
              </div>
              <AnimatedBar pct={s.pct} color={s.color} />
            </div>
          ))}
        </div>
      </section>

      {/* Department table */}
      <section>
        <h3
          className="typo-section-heading font-bold mb-6"
          style={{ color: DEEP_BLUE }}
        >
          Department-wise Statistics (2024–25)
        </h3>
        <div
          className="overflow-x-auto rounded-xl shadow-lg border"
          style={{ borderColor: "rgba(26, 35, 126, 0.12)" }}
        >
          <table className="w-full text-sm" data-ocid="placements.dept_table">
            <thead>
              <tr style={{ backgroundColor: COBALT, color: "#fff" }}>
                {[
                  "Department",
                  "Eligible",
                  "Placed",
                  "% Placed",
                  "Highest CTC",
                  "Avg CTC",
                ].map((h) => (
                  <th
                    key={h}
                    className="px-5 py-4 text-left typo-support font-semibold whitespace-nowrap"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {DEPT_STATS.map((row, idx) => (
                <tr
                  key={row.dept}
                  className="border-b transition-colors hover:bg-blue-50/30"
                  style={{ borderColor: "rgba(26, 35, 126, 0.08)" }}
                  data-ocid={`placements.dept_row.${idx + 1}`}
                >
                  <td
                    className="px-5 py-4 font-semibold"
                    style={{ color: DEEP_BLUE }}
                  >
                    {row.dept}
                  </td>
                  <td
                    className="px-5 py-4 text-right"
                    style={{ color: "#444" }}
                  >
                    {row.eligible}
                  </td>
                  <td
                    className="px-5 py-4 text-right"
                    style={{ color: "#444" }}
                  >
                    {row.placed}
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <span className="font-bold w-9" style={{ color: COBALT }}>
                        {row.pct}%
                      </span>
                      <div className="flex-1 min-w-16">
                        <AnimatedBar pct={row.pct} color={COBALT} />
                      </div>
                    </div>
                  </td>
                  <td
                    className="px-5 py-4 font-semibold"
                    style={{ color: "#16a34a" }}
                  >
                    {row.highest}
                  </td>
                  <td
                    className="px-5 py-4 font-semibold"
                    style={{ color: "#555" }}
                  >
                    {row.avg}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

// ─── CAREER SERVICES SECTION ──────────────────────────────────────────────────
const SERVICES = [
  {
    Icon: BookOpen,
    title: "Resume Building Workshops",
    desc: "Monthly workshops and a curated template library to craft ATS-friendly, industry-standard résumés that stand out.",
    tag: "Monthly",
  },
  {
    Icon: MessageSquare,
    title: "Mock Interview Sessions",
    desc: "Simulated panel interviews with senior industry professionals and alumni, with detailed feedback reports.",
    tag: "Bi-weekly",
  },
  {
    Icon: TrendingUp,
    title: "Aptitude Training",
    desc: "Structured preparation for quantitative reasoning, logical ability, and verbal communication tests used by top recruiters.",
    tag: "Ongoing",
  },
  {
    Icon: Users,
    title: "Communication Skills",
    desc: "Group discussion sessions, public speaking workshops, and presentation skills training by communication experts.",
    tag: "Weekly",
  },
  {
    Icon: Building2,
    title: "Company Interaction Sessions",
    desc: "Pre-placement talks, campus visits, and direct Q&A with HR teams from visiting companies throughout the year.",
    tag: "As Scheduled",
  },
  {
    Icon: GraduationCap,
    title: "GATE & Higher Education Prep",
    desc: "Study groups, coaching information, and alumni guidance for students pursuing GATE, CAT, GRE, or foreign universities.",
    tag: "Ongoing",
  },
];

function CareerServicesSection() {
  return (
    <div className="space-y-14">
      <div className="text-center">
        <div
          className="inline-block w-12 h-1 rounded-full mb-4"
          style={{ backgroundColor: COBALT }}
        />
        <h2
          className="typo-section-heading font-bold mb-3"
          style={{ color: DEEP_BLUE }}
        >
          Career Services
        </h2>
        <p className="typo-body-lg max-w-2xl mx-auto" style={{ color: "#555" }}>
          Comprehensive, year-round support ensuring every COEP student is
          placement-ready
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((s, idx) => (
          <div
            key={s.title}
            className="group rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            style={{
              borderColor: "rgba(26, 35, 126, 0.14)",
              background: "#fff",
              animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`,
            }}
            data-ocid={`placements.service.${idx + 1}`}
          >
            <div className="flex items-start justify-between mb-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: `${COBALT}14`,
                  transition: "all 0.3s",
                }}
              >
                <s.Icon className="w-6 h-6" style={{ color: COBALT }} />
              </div>
              <span
                className="typo-section-label font-bold px-3 py-1 rounded-full"
                style={{
                  backgroundColor: "rgba(26, 35, 126, 0.1)",
                  color: "#0F3399",
                }}
              >
                {s.tag}
              </span>
            </div>
            <h3 className="typo-card-title mb-3" style={{ color: DEEP_BLUE }}>
              {s.title}
            </h3>
            <p className="typo-card-desc" style={{ color: "#666" }}>
              {s.desc}
            </p>
          </div>
        ))}
      </div>

      {/* TPC Contact card */}
      <div
        className="rounded-2xl p-8"
        style={{
          background: `linear-gradient(135deg, ${COBALT}10, ${DEEP_BLUE}10)`,
          border: `1px solid ${COBALT}25`,
        }}
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3
              className="typo-section-heading font-bold mb-3"
              style={{ color: DEEP_BLUE }}
            >
              TPC Office — Contact &amp; Timings
            </h3>
            <div
              className="typo-body space-y-3 text-sm"
              style={{ color: "#444" }}
            >
              <div className="flex items-center gap-2">
                <MapPin
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: COBALT }}
                />
                <span>
                  Room 105, Main Building, COEP Technological University, Pune –
                  411005
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: COBALT }}
                />
                <span>
                  +91-20-25507000 Ext. 200 &nbsp;|&nbsp; +91-20-25507052
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: COBALT }}
                />
                <span>tpc@coeptech.ac.in</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: COBALT }}
                />
                <span>Monday to Saturday, 9:00 AM – 5:00 PM (IST)</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:tpc@coeptech.ac.in"
              className="typo-btn flex-1 flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: COBALT, color: "#fff" }}
              data-ocid="placements.contact_email"
            >
              <Mail className="w-4 h-4" />
              Email TPC
            </a>
            <a
              href="tel:+912025507052"
              className="typo-btn flex-1 flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl transition-all duration-200 hover:opacity-90"
              style={{
                backgroundColor: "transparent",
                color: COBALT,
                border: `2px solid ${COBALT}`,
              }}
              data-ocid="placements.contact_phone"
            >
              <Phone className="w-4 h-4" />
              Call TPC
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── TRAINING & DEVELOPMENT SECTION ──────────────────────────────────────────
const TRAINING_MONTHS = [
  {
    month: "Month 1",
    phase: "Aptitude & Reasoning",
    color: COBALT,
    topics: [
      "Quantitative Aptitude",
      "Logical Reasoning",
      "Verbal Ability",
      "Data Interpretation",
    ],
    desc: "Foundation-building with rigorous practice sessions covering all quantitative and verbal topics tested by top recruiters.",
  },
  {
    month: "Month 2",
    phase: "Technical Skills & Projects",
    color: DEEP_BLUE,
    topics: [
      "Data Structures & Algorithms",
      "System Design",
      "Core Domain Skills",
      "Project Showcase Prep",
    ],
    desc: "Deep dives into technical domains — coding challenges, system design cases, and hands-on domain-specific workshops.",
  },
  {
    month: "Month 3",
    phase: "Interviews & Placements",
    color: MIDNIGHT,
    topics: [
      "Mock Technical Interviews",
      "HR Rounds",
      "Group Discussions",
      "Offer Negotiation",
    ],
    desc: "Full simulation of the recruitment process with real interviewers, followed by live placement drives with visiting companies.",
  },
];

const SKILLS = [
  { name: "Data Structures & Algorithms", icon: "💻", level: 90 },
  { name: "System Design", icon: "🏗️", level: 75 },
  { name: "Core Domain Skills", icon: "⚙️", level: 85 },
  { name: "Soft Skills & Communication", icon: "🗣️", level: 88 },
  { name: "Aptitude & Reasoning", icon: "🧠", level: 92 },
];

const UPCOMING_WORKSHOPS = [
  {
    date: "May 10, 2025",
    title: "Resume & LinkedIn Masterclass",
    time: "10:00 AM – 1:00 PM",
    venue: "Seminar Hall A",
    seats: 120,
  },
  {
    date: "May 17, 2025",
    title: "Advanced DSA Workshop",
    time: "2:00 PM – 6:00 PM",
    venue: "Computer Lab 3",
    seats: 60,
  },
  {
    date: "May 24, 2025",
    title: "Group Discussion Training",
    time: "10:00 AM – 12:00 PM",
    venue: "Mini Auditorium",
    seats: 80,
  },
  {
    date: "June 5, 2025",
    title: "Mock Placement Drive",
    time: "9:00 AM – 5:00 PM",
    venue: "Main Auditorium",
    seats: 200,
  },
];

function TrainingSection() {
  return (
    <div className="space-y-14">
      <div className="text-center">
        <div
          className="inline-block w-12 h-1 rounded-full mb-4"
          style={{ backgroundColor: COBALT }}
        />
        <h2
          className="typo-section-heading font-bold mb-3"
          style={{ color: DEEP_BLUE }}
        >
          Training &amp; Skill Development
        </h2>
        <p className="typo-body-lg max-w-2xl mx-auto" style={{ color: "#555" }}>
          A structured 3-month pre-placement training programme designed to
          build interview-ready graduates
        </p>
      </div>

      {/* 3-month timeline */}
      <div className="grid md:grid-cols-3 gap-6">
        {TRAINING_MONTHS.map((m, idx) => (
          <div
            key={m.month}
            className="rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            style={{ animation: `fadeInUp 0.6s ease-out ${idx * 0.15}s both` }}
            data-ocid={`placements.training_month.${idx + 1}`}
          >
            <div
              className="p-6 text-white"
              style={{
                background: `linear-gradient(135deg, ${m.color}, ${MIDNIGHT})`,
              }}
            >
              <span
                className="text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block"
                style={{ backgroundColor: GOLD, color: MIDNIGHT }}
              >
                {m.month}
              </span>
              <h3
                className="typo-card-title mt-2 mb-2"
                style={{ color: "#fff" }}
              >
                {m.phase}
              </h3>
              <p className="typo-body text-sm text-white/70">{m.desc}</p>
            </div>
            <div className="p-6 bg-white">
              <ul className="space-y-2">
                {m.topics.map((t) => (
                  <li
                    key={t}
                    className="flex items-center gap-2.5 typo-body text-sm"
                    style={{ color: "#555" }}
                  >
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                      style={{ backgroundColor: m.color }}
                    >
                      ✓
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Arrow connector */}
      <div className="hidden md:flex items-center justify-center gap-4 -mt-8">
        {[0, 1].map((i) => (
          <div
            key={i}
            className="flex items-center gap-2 text-sm font-semibold"
            style={{ color: COBALT }}
          >
            <div
              className="w-24 h-0.5"
              style={{ backgroundColor: `${COBALT}40` }}
            />
            <ChevronRight className="w-4 h-4" />
          </div>
        ))}
      </div>

      {/* Skills coverage */}
      <section
        className="rounded-2xl p-8"
        style={{ background: "#f8faff", border: `1px solid ${COBALT}18` }}
      >
        <h3
          className="typo-section-heading font-bold mb-6"
          style={{ color: DEEP_BLUE }}
        >
          Skills Coverage in Our Programme
        </h3>
        <div className="space-y-5">
          {SKILLS.map((s) => (
            <div key={s.name} data-ocid={`placements.skill.${s.name}`}>
              <div className="flex items-center justify-between mb-2">
                <span
                  className="typo-support font-semibold"
                  style={{ color: DEEP_BLUE }}
                >
                  {s.icon} {s.name}
                </span>
                <span className="text-sm font-bold" style={{ color: COBALT }}>
                  {s.level}%
                </span>
              </div>
              <AnimatedBar pct={s.level} color={COBALT} />
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming workshops */}
      <section>
        <h3
          className="typo-section-heading font-bold mb-6"
          style={{ color: DEEP_BLUE }}
        >
          Upcoming Training Calendar
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {UPCOMING_WORKSHOPS.map((w, idx) => (
            <div
              key={w.title}
              className="rounded-xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{
                borderColor: "rgba(26, 35, 126, 0.14)",
                background: "#fff",
              }}
              data-ocid={`placements.workshop.${idx + 1}`}
            >
              <div
                className="typo-section-label font-bold px-2.5 py-1 rounded-lg inline-block mb-3"
                style={{ backgroundColor: `${COBALT}14`, color: COBALT }}
              >
                {w.date}
              </div>
              <h4
                className="typo-card-title font-bold text-base mb-1.5"
                style={{ color: DEEP_BLUE }}
              >
                {w.title}
              </h4>
              <div className="typo-support space-y-1" style={{ color: "#777" }}>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3 h-3" style={{ color: COBALT }} />
                  {w.time}
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3" style={{ color: COBALT }} />
                  {w.venue}
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-3 h-3" style={{ color: COBALT }} />
                  {w.seats} seats
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// ─── ALUMNI SUCCESS SECTION ───────────────────────────────────────────────────
const ALUMNI = [
  {
    name: "Priya Sharma",
    role: "Software Engineer",
    company: "Google",
    dept: "CSE",
    batch: "2019",
    quote:
      "COEP's rigorous curriculum and TPC's structured mock interviews gave me the confidence and skills to crack Google. The faculty mentorship was exceptional.",
    companyColor: "#1A237E",
    initials: "PS",
  },
  {
    name: "Rahul Kulkarni",
    role: "Product Manager",
    company: "Microsoft",
    dept: "E&TC",
    batch: "2018",
    quote:
      "The interdisciplinary exposure at COEP — from core engineering to business fundamentals — was the perfect foundation for a product management career at Microsoft.",
    companyColor: "#0F3399",
    initials: "RK",
  },
  {
    name: "Snehal Patil",
    role: "Investment Banking Analyst",
    company: "Goldman Sachs",
    dept: "MBA",
    batch: "2020",
    quote:
      "COEP's MBA programme with its focus on analytical thinking and the TPC's finance-sector preparation workshops directly helped me land my role at Goldman Sachs.",
    companyColor: "#081E5C",
    initials: "SP",
  },
  {
    name: "Amit Deshmukh",
    role: "Senior Systems Engineer",
    company: "L&T Technology Services",
    dept: "Mechanical",
    batch: "2017",
    quote:
      "The hands-on project experience and strong industry connections built through COEP set the foundation for an impactful career in engineering services.",
    companyColor: "#1a5e8a",
    initials: "AD",
  },
  {
    name: "Neha Joshi",
    role: "Data Scientist",
    company: "Amazon",
    dept: "CSE",
    batch: "2021",
    quote:
      "COEP's emphasis on algorithmic thinking and the competitive coding culture fostered here directly translated into a successful data science career at Amazon.",
    companyColor: "#c62828",
    initials: "NJ",
  },
];

function AlumniSection() {
  const [current, setCurrent] = useState(0);
  const VISIBLE = 2;
  const total = ALUMNI.length;

  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + total) % total),
    [total],
  );
  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);

  const visibleAlumni = Array.from(
    { length: VISIBLE },
    (_, i) => ALUMNI[(current + i) % total],
  );

  return (
    <div className="space-y-14">
      <div className="text-center">
        <div
          className="inline-block w-12 h-1 rounded-full mb-4"
          style={{ backgroundColor: COBALT }}
        />
        <h2
          className="typo-section-heading font-bold mb-3"
          style={{ color: DEEP_BLUE }}
        >
          Alumni in Top Companies
        </h2>
        <p className="typo-body-lg max-w-2xl mx-auto" style={{ color: "#555" }}>
          COEP graduates shaping the future at the world's most admired
          organisations
        </p>
      </div>

      {/* Carousel */}
      <div className="relative">
        <div className="grid md:grid-cols-2 gap-6">
          {visibleAlumni.map((a, idx) => (
            <div
              key={`${a.name}-${idx}`}
              className="rounded-2xl overflow-hidden shadow-xl transition-all duration-500"
              style={{
                background: `linear-gradient(135deg, ${a.companyColor} 0%, ${MIDNIGHT} 100%)`,
                animation: "fadeInUp 0.5s ease-out both",
              }}
              data-ocid={`placements.alumni.${idx + 1}`}
            >
              <div className="p-8 text-white">
                <Quote className="w-8 h-8 mb-4 opacity-30" />
                <p className="typo-body-lg text-base text-white/85 mb-7 italic">
                  "{a.quote}"
                </p>
                <div
                  className="flex items-center gap-4 pt-4 border-t"
                  style={{ borderColor: "rgba(255,255,255,0.15)" }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0"
                    style={{ backgroundColor: GOLD, color: MIDNIGHT }}
                  >
                    {a.initials}
                  </div>
                  <div>
                    <p className="typo-card-title font-bold text-lg text-white">
                      {a.name}
                    </p>
                    <p className="typo-body text-sm text-white/70">
                      {a.role} — {a.company}
                    </p>
                    <p className="typo-stat-label text-white/50 mt-0.5">
                      {a.dept} Department, Batch of {a.batch}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            type="button"
            onClick={prev}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: COBALT, color: "#fff" }}
            aria-label="Previous alumni"
            data-ocid="placements.alumni_prev"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {ALUMNI.map((alumnus, idx) => (
              <button
                key={alumnus.name}
                type="button"
                onClick={() => setCurrent(idx)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: current === idx ? 24 : 8,
                  height: 8,
                  backgroundColor: current === idx ? COBALT : `${COBALT}40`,
                }}
                aria-label={`Go to alumni ${idx + 1}`}
                data-ocid={`placements.alumni_dot.${idx + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: COBALT, color: "#fff" }}
            aria-label="Next alumni"
            data-ocid="placements.alumni_next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Accolades banner */}
      <div
        className="rounded-2xl p-8 text-white text-center"
        style={{
          background: `linear-gradient(135deg, ${COBALT}, ${MIDNIGHT})`,
        }}
      >
        <Briefcase className="w-10 h-10 mx-auto mb-4 opacity-60" />
        <h3
          className="typo-section-heading font-bold mb-3"
          style={{ color: "#fff" }}
        >
          Join the COEP Legacy
        </h3>
        <p className="typo-body text-white/75 max-w-xl mx-auto">
          Over 168 years of engineering excellence. Join thousands of COEP
          alumni making a mark at the world's most respected companies.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <button
            type="button"
            className="typo-btn px-6 py-3 rounded-xl text-sm transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: GOLD, color: MIDNIGHT }}
            data-ocid="placements.alumni_network_button"
          >
            Connect with Alumni Network
          </button>
          <button
            type="button"
            className="typo-btn px-6 py-3 rounded-xl text-sm transition-all duration-200 hover:bg-white/20"
            style={{
              backgroundColor: "transparent",
              color: "#fff",
              border: "1.5px solid rgba(255,255,255,0.4)",
            }}
            data-ocid="placements.share_story_button"
          >
            Share Your Success Story
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── HERO STAT BADGES ─────────────────────────────────────────────────────────
const HERO_STATS = [
  { value: "₹87 LPA", label: "Highest Package" },
  { value: "₹12 LPA", label: "Average Package" },
  { value: "90%+", label: "Placement Rate" },
  { value: "245+", label: "Recruiting Companies" },
];

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────
export default function PlacementsPage() {
  const params = useParams({ strict: false }) as { sectionId?: string };
  const navigate = useNavigate();
  const activeTab = params.sectionId ?? "overview";

  const handleTabChange = (tabId: string) => {
    navigate({ to: "/placements/$sectionId", params: { sectionId: tabId } });
  };

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewSection />;
      case "recruiters":
        return <RecruitersSection />;
      case "statistics":
        return <StatisticsSection />;
      case "career-services":
        return <CareerServicesSection />;
      case "training":
        return <TrainingSection />;
      case "alumni":
        return <AlumniSection />;
      default:
        return <OverviewSection />;
    }
  };

  return (
    <Layout>
      {/* ── HERO ── */}
      <section
        className="relative py-24 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${MIDNIGHT} 0%, ${DEEP_BLUE} 45%, ${COBALT} 100%)`,
        }}
        data-ocid="placements.hero"
      >
        {/* Decorative radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 70% 50%, rgba(255,255,255,0.07) 0%, transparent 65%)",
          }}
        />
        {/* Decorative circles */}
        <div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        />
        <div
          className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full pointer-events-none"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        />

        <div className="relative max-w-[1280px] mx-auto px-4 xl:px-8">
          <p
            className="typo-section-label mb-4"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            COEP Technological University • Est. 1854
          </p>
          <h1
            className="typo-hero-heading text-white mb-5"
            style={{ animation: "fadeInUp 0.6s ease-out 0.1s both" }}
          >
            Placements &amp;
            <br />
            <span style={{ color: "white" }}>Careers</span>
          </h1>
          <p
            className="typo-hero-desc text-white/75 max-w-2xl mb-12"
            style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}
          >
            Building Careers, Shaping Futures — COEP's Legacy of Excellence
            connecting exceptional talent with the world's leading
            organisations.
          </p>

          {/* Stat badges */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl"
            style={{ animation: "fadeInUp 0.6s ease-out 0.3s both" }}
          >
            {HERO_STATS.map((s, idx) => (
              <StatBadge
                key={s.label}
                value={s.value}
                label={s.label}
                delay={0.35 + idx * 0.07}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── SUB-TAB RIBBON ── */}
      <SubTabRibbon
        tabs={TABS}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />

      {/* ── MAIN CONTENT ── */}
      <main
        key={activeTab}
        className="flex-1 max-w-[1280px] mx-auto w-full px-4 xl:px-8 py-16"
        style={{ animation: "fadeInUp 0.5s ease-out both" }}
        data-ocid="placements.content_panel"
      >
        {renderContent()}
      </main>
    </Layout>
  );
}
