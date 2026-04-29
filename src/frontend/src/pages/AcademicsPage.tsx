import { Layout } from "@/components/Layout";
import SubTabRibbon from "@/components/SubTabRibbon";
import { Link, useNavigate, useParams } from "@tanstack/react-router";
import {
  Award,
  BookOpen,
  Calendar,
  ChevronRight,
  GraduationCap,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

const COBALT = "#1A237E";
const DEEP_BLUE = "#0F3399";
const MIDNIGHT = "#081E5C";
const GOLD = "#E8C42A";
// COBALT_MUTED used for subtle accent text

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "schools", label: "Schools & Departments" },
  { id: "programs", label: "Programs" },
  { id: "curriculum", label: "Courses & Curriculum" },
  { id: "achievements", label: "Achievements" },
  { id: "calendar", label: "Academic Calendar" },
];

// ─── Data ──────────────────────────────────────────────────────────────────────

const STATS = [
  { value: 14, suffix: "", label: "Departments" },
  { value: 500, suffix: "+", label: "Research Publications" },
  { value: 5000, suffix: "+", label: "Students" },
  { value: 172, suffix: "", label: "Years of Excellence" },
];

const ENGINEERING_DEPTS = [
  "Civil Engineering",
  "Computer Science & Engineering",
  "Electrical Engineering",
  "Electronics & Telecommunication",
  "Instrumentation & Control",
  "Manufacturing & Industrial Engineering",
  "Mechanical Engineering",
  "Metallurgy & Materials Science",
  "Urban & Regional Planning",
  "Robotics & AI",
];

const SCIENCE_DEPTS = [
  "Applied Sciences",
  "Mathematics",
  "Physics",
  "Chemistry",
  "Humanities & Social Sciences",
  "Management Studies",
];

const PROGRAMS = [
  {
    icon: BookOpen,
    title: "B.Tech",
    tagline: "4-Year Undergraduate",
    detail: "10 disciplines",
    description:
      "A rigorous four-year programme grounding students in engineering fundamentals with hands-on labs, industrial projects, and interdisciplinary electives.",
    color: COBALT,
  },
  {
    icon: GraduationCap,
    title: "M.Tech",
    tagline: "2-Year Postgraduate",
    detail: "20+ specializations",
    description:
      "Advanced specialisation with research exposure, industry collaboration and access to COEP's world-class laboratories and research centres.",
    color: DEEP_BLUE,
  },
  {
    icon: TrendingUp,
    title: "MBA",
    tagline: "2-Year Management",
    detail: "General Mgmt + Business Analytics",
    description:
      "An intensive management programme blending analytical rigour with real-world business strategy, designed for future industry leaders.",
    color: COBALT,
  },
  {
    icon: Star,
    title: "PhD",
    tagline: "Doctoral Research",
    detail: "All departments",
    description:
      "World-class doctoral programme with access to funded research projects, faculty mentorship, and international collaboration opportunities.",
    color: DEEP_BLUE,
  },
];

const ACHIEVEMENTS = [
  {
    icon: Award,
    title: "NIRF 2023",
    highlight: "#90",
    subtitle: "Engineering Rank",
    detail:
      "Ranked 90th nationally in Engineering by the National Institutional Ranking Framework — a testament to academic quality and research output.",
    badge: "National Ranking",
    color: COBALT,
  },
  {
    icon: Star,
    title: "NBA Accreditation",
    highlight: "8",
    subtitle: "UG Programs",
    detail:
      "8 undergraduate programmes accredited by the National Board of Accreditation, validating curriculum quality and graduate outcomes.",
    badge: "Quality Assurance",
    color: DEEP_BLUE,
  },
  {
    icon: GraduationCap,
    title: "NAAC Grade",
    highlight: "A+",
    subtitle: "Institutional Grade",
    detail:
      "NAAC A+ accreditation reflecting excellence in teaching, research, infrastructure, governance, and stakeholder engagement.",
    badge: "Institutional Excellence",
    color: COBALT,
  },
  {
    icon: TrendingUp,
    title: "Legacy",
    highlight: "1854",
    subtitle: "Year Established",
    detail:
      "One of India's oldest and most prestigious engineering institutions with over 170 years of academic leadership and nation-building.",
    badge: "Heritage Institution",
    color: DEEP_BLUE,
  },
  {
    icon: Users,
    title: "Alumni Network",
    highlight: "50K+",
    subtitle: "Global Alumni",
    detail:
      "A vast alumni network spread across top corporations, governments, and research institutions worldwide, creating unmatched career opportunities.",
    badge: "Alumni Excellence",
    color: COBALT,
  },
  {
    icon: BookOpen,
    title: "Research Grants",
    highlight: "₹50Cr+",
    subtitle: "Funded Projects",
    detail:
      "Significant research funding from DST, DRDO, AICTE, and corporate partners enabling cutting-edge innovations and patent-worthy discoveries.",
    badge: "Research Strength",
    color: DEEP_BLUE,
  },
];

const CALENDAR_EVENTS = [
  {
    date: "July 15, 2025",
    month: "JUL",
    day: "15",
    title: "Odd Semester Commencement",
    desc: "All undergraduate and postgraduate odd semester classes begin. New student orientation and hostel allotment.",
    type: "Semester",
  },
  {
    date: "October 20–30, 2025",
    month: "OCT",
    day: "20",
    title: "Mid-Semester Examinations",
    desc: "Mid-semester assessment for all B.Tech, M.Tech, MBA and PhD coursework. Timetables published on the university portal.",
    type: "Examination",
  },
  {
    date: "November 5, 2025",
    month: "NOV",
    day: "5",
    title: "Annual Technical Festival – Mindspark",
    desc: "COEP's flagship pan-India technical festival featuring competitions, workshops, expert talks and startup expo.",
    type: "Event",
  },
];

const CURRICULUM_HIGHLIGHTS = [
  {
    semester: "Semester 1–2",
    title: "Engineering Foundations",
    topics: [
      "Mathematics I & II",
      "Engineering Physics",
      "Engineering Chemistry",
      "Programming Fundamentals",
      "Engineering Drawing",
      "Environmental Science",
    ],
  },
  {
    semester: "Semester 3–4",
    title: "Core Engineering",
    topics: [
      "Data Structures & Algorithms",
      "Digital Electronics",
      "Thermodynamics",
      "Solid Mechanics",
      "Probability & Statistics",
      "Technical Communication",
    ],
  },
  {
    semester: "Semester 5–6",
    title: "Specialisation & Electives",
    topics: [
      "Department Core Subjects",
      "Open Electives",
      "Minor Projects",
      "Industrial Internship",
      "Research Methodology",
      "Professional Ethics",
    ],
  },
  {
    semester: "Semester 7–8",
    title: "Capstone & Placement",
    topics: [
      "Major Project",
      "Industrial Training",
      "Advanced Electives",
      "Entrepreneurship",
      "IPR & Patents",
      "Placement Training",
    ],
  },
];

// ─── Animated Counter ──────────────────────────────────────────────────────────

function AnimatedCounter({
  value,
  suffix,
  label,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  index: number;
}) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    const duration = 1800;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [hasStarted, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      className="text-center p-6 rounded-2xl border"
      style={{
        backgroundColor: "rgba(255,255,255,0.06)",
        borderColor: "rgba(255,255,255,0.14)",
      }}
      data-ocid={`academics.stat_counter.${index + 1}`}
    >
      <div className="typo-stat-number mb-2" style={{ color: "white" }}>
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="typo-stat-label font-semibold uppercase tracking-wider text-white/70">
        {label}
      </div>
    </motion.div>
  );
}

// ─── Department card ───────────────────────────────────────────────────────────

function DeptCard({
  name,
  index,
}: {
  name: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      className="flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-shadow duration-300 hover:shadow-lg group"
      style={{
        backgroundColor: "#fff",
        borderLeft: `4px solid ${COBALT}`,
        boxShadow: "0 1px 4px rgba(26, 35, 126, 0.07)",
      }}
      data-ocid={`academics.dept_card.${index + 1}`}
    >
      <ChevronRight
        className="w-4 h-4 flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1"
        style={{ color: COBALT }}
      />
      <span
        className="typo-card-desc font-semibold"
        style={{ color: DEEP_BLUE }}
      >
        {name}
      </span>
    </motion.div>
  );
}

// ─── Program card ──────────────────────────────────────────────────────────────

function ProgramCard({
  prog,
  index,
}: {
  prog: (typeof PROGRAMS)[0];
  index: number;
}) {
  const Icon = prog.icon;
  const fromRight = index % 2 !== 0;
  return (
    <motion.div
      initial={{ opacity: 0, x: fromRight ? 40 : -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="flex flex-col overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 group"
      style={{ background: "#fff" }}
      data-ocid={`academics.program_card.${index + 1}`}
    >
      {/* Top accent */}
      <div className="h-1.5 w-full" style={{ backgroundColor: prog.color }} />
      <div className="p-7 flex flex-col flex-1">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
          style={{
            backgroundColor: `${prog.color}12`,
            border: `2px solid ${prog.color}25`,
          }}
        >
          <Icon className="w-7 h-7" style={{ color: prog.color }} />
        </div>
        <h3 className="typo-section-heading mb-1" style={{ color: DEEP_BLUE }}>
          {prog.title}
        </h3>
        <p className="typo-section-label mb-1" style={{ color: prog.color }}>
          {prog.tagline}
        </p>
        <p className="typo-body mb-4" style={{ color: COBALT }}>
          {prog.detail}
        </p>
        <p className="typo-card-desc flex-1" style={{ color: "#4b5563" }}>
          {prog.description}
        </p>
        <a
          href="/admissions"
          className="mt-6 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-bold text-sm uppercase tracking-wider transition-all duration-200 hover:brightness-110 hover:scale-105"
          style={{
            backgroundColor: GOLD,
            color: MIDNIGHT,
            fontFamily: "Source Sans 3, sans-serif",
          }}
          data-ocid={`academics.program_apply.${index + 1}`}
        >
          Apply Now
          <ChevronRight className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
}

// ─── Achievement badge ─────────────────────────────────────────────────────────

function AchievementBadge({
  item,
  index,
}: {
  item: (typeof ACHIEVEMENTS)[0];
  index: number;
}) {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="flex flex-col items-center text-center p-6 rounded-2xl border hover:shadow-xl transition-all duration-300 group"
      style={{
        backgroundColor: "#fff",
        borderColor: `${item.color}22`,
      }}
      data-ocid={`academics.achievement_badge.${index + 1}`}
    >
      {/* Badge ribbon */}
      <span
        className="inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-0.5 rounded-full mb-4"
        style={{
          backgroundColor: "rgba(26, 35, 126, 0.1)",
          color: DEEP_BLUE,
          fontFamily: "Source Sans 3, sans-serif",
        }}
      >
        {item.badge}
      </span>

      {/* Icon circle */}
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
        style={{
          background: `linear-gradient(135deg, ${item.color}18, ${item.color}30)`,
          border: `2px solid ${item.color}30`,
        }}
      >
        <Icon className="w-8 h-8" style={{ color: item.color }} />
      </div>

      {/* Big number */}
      <div className="typo-stat-number mb-1" style={{ color: item.color }}>
        {item.highlight}
      </div>
      <div
        className="text-xs font-bold uppercase tracking-wider mb-3"
        style={{ color: COBALT, fontFamily: "Source Sans 3, sans-serif" }}
      >
        {item.subtitle}
      </div>
      <h3 className="typo-card-title mb-2" style={{ color: DEEP_BLUE }}>
        {item.title}
      </h3>
      <p className="typo-card-desc" style={{ color: "#6b7280" }}>
        {item.detail}
      </p>
    </motion.div>
  );
}

// ─── Section heading ───────────────────────────────────────────────────────────

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-12 text-center">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="inline-block typo-section-label mb-3"
        style={{ color: COBALT }}
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.08 }}
        className="typo-section-heading mb-4"
        style={{ color: DEEP_BLUE }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.16 }}
          className="typo-body max-w-2xl mx-auto"
          style={{ color: "#6b7280" }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function AcademicsPage() {
  const params = useParams({ strict: false }) as { sectionId?: string };
  const navigate = useNavigate();
  const activeTab = params.sectionId ?? "overview";
  const overviewRef = useRef<HTMLDivElement>(null);

  const handleTabChange = useCallback(
    (tabId: string) => {
      navigate({ to: "/academics/$sectionId", params: { sectionId: tabId } });
    },
    [navigate],
  );

  const scrollToPrograms = () => {
    handleTabChange("programs");
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
  };

  return (
    <Layout>
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden flex flex-col items-center justify-center text-center"
        style={{
          background: `linear-gradient(135deg, ${MIDNIGHT} 0%, ${DEEP_BLUE} 45%, ${COBALT} 100%)`,
          backgroundImage: `url('https://www.coeptech.ac.in/wp-content/uploads/2023/08/DSC_6471-scaled.jpg'), linear-gradient(135deg, ${MIDNIGHT} 0%, ${DEEP_BLUE} 45%, ${COBALT} 100%)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "320px",
          paddingTop: "64px",
          paddingBottom: "64px",
        }}
        data-ocid="academics.hero_section"
      >
        {/* Dark overlay for readability */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundColor: "rgba(8, 30, 92, 0.62)", zIndex: 0 }}
        />
        {/* Geometric pattern overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, ${COBALT}30 0%, transparent 50%), radial-gradient(circle at 80% 20%, ${GOLD}18 0%, transparent 40%)`,
            zIndex: 1,
          }}
        />
        {/* Floating circles */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full -translate-y-1/2 translate-x-1/3 opacity-10"
          style={{ backgroundColor: GOLD, zIndex: 1 }}
        />
        <div
          className="absolute bottom-0 left-0 w-72 h-72 rounded-full translate-y-1/2 -translate-x-1/3 opacity-[0.07]"
          style={{ backgroundColor: "#fff", zIndex: 1 }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            zIndex: 1,
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-4">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <a
              href="/"
              className="text-xs font-semibold uppercase tracking-wider opacity-60 hover:opacity-100 transition-opacity"
              style={{ color: "#fff", fontFamily: "Source Sans 3, sans-serif" }}
            >
              Home
            </a>
            <ChevronRight className="w-3 h-3 text-white/40" />
            <span
              className="text-xs font-semibold uppercase tracking-wider"
              style={{
                color: "rgba(255,255,255,0.75)",
                fontFamily: "Source Sans 3, sans-serif",
              }}
            >
              Academics
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="typo-hero-heading text-white mb-4"
          >
            Academic Excellence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="typo-hero-desc text-white/80 max-w-2xl mx-auto"
          >
            Shaping Engineers, Innovators &amp; Leaders Since 1854
          </motion.p>
        </div>
      </section>

      {/* ── Sub-tab ribbon ── */}
      <SubTabRibbon
        tabs={TABS}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />

      {/* ── Content ── */}
      <main className="flex-1" data-ocid="academics.main_content">
        <AnimatePresence mode="wait">
          {/* ══ OVERVIEW ══ */}
          {activeTab === "overview" && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              data-ocid="academics.overview_section"
            >
              {/* Stats counter band */}
              <section
                className="py-16"
                style={{
                  background: `linear-gradient(135deg, ${MIDNIGHT} 0%, ${DEEP_BLUE} 60%, ${COBALT} 100%)`,
                }}
                ref={overviewRef}
              >
                <div className="max-w-5xl mx-auto px-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                    {STATS.map((s, i) => (
                      <AnimatedCounter
                        key={s.label}
                        value={s.value}
                        suffix={s.suffix}
                        label={s.label}
                        index={i}
                      />
                    ))}
                  </div>
                </div>
              </section>

              {/* Intro + CTA */}
              <section className="py-20" style={{ backgroundColor: "#fff" }}>
                <div className="max-w-4xl mx-auto px-4 text-center">
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="inline-block typo-section-label mb-4"
                    style={{ color: COBALT }}
                  >
                    COEP Technological University, Pune
                  </motion.span>
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="typo-section-heading mb-6"
                    style={{ color: DEEP_BLUE }}
                  >
                    A Legacy of Academic Leadership
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="typo-body-lg mb-4"
                    style={{ color: "#374151" }}
                  >
                    COEP Technological University stands as one of India's most
                    storied engineering institutions, offering a transformative
                    academic experience that blends rigorous theory with
                    cutting-edge practical application. Established in 1854, the
                    university spans two broad schools — Engineering and
                    Multidisciplinary Sciences, Humanities & Management Studies
                    — comprising 10+ departments and delivering programmes at
                    the undergraduate, postgraduate, and doctoral levels.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.18 }}
                    className="typo-body mb-8"
                    style={{ color: "#6b7280" }}
                  >
                    Our faculty are internationally accomplished researchers.
                    Our laboratories are equipped with state-of-the-art
                    instruments. Our alumni lead global corporations, government
                    bodies, and research institutions. At COEP Tech, academic
                    excellence is not a destination — it is a culture.
                  </motion.p>
                  <motion.button
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.24 }}
                    onClick={scrollToPrograms}
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-bold text-base uppercase tracking-wider transition-all duration-200 hover:brightness-110 hover:scale-105"
                    style={{
                      backgroundColor: COBALT,
                      color: "#fff",
                      fontFamily: "Source Sans 3, sans-serif",
                    }}
                    data-ocid="academics.explore_programs_button"
                  >
                    Explore Programs
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </section>

              {/* ── Our Schools ── */}
              <section className="py-20" style={{ backgroundColor: "#f5f7fc" }}>
                <div className="max-w-5xl mx-auto px-4">
                  <SectionHeading
                    eyebrow="Academic Structure"
                    title="Our Schools"
                    subtitle="COEP Technological University is organised into two broad schools — each a centre of excellence offering undergraduate, postgraduate, and doctoral programmes."
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                    {/* Card 1: School of Engineering */}
                    <motion.div
                      initial={{ opacity: 0, y: 32 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.55 }}
                      whileHover={{ y: -8, transition: { duration: 0.2 } }}
                      className="rounded-3xl overflow-hidden flex flex-col group"
                      style={{
                        background: "#fff",
                        border: `1.5px solid ${COBALT}22`,
                        boxShadow: "0 4px 24px rgba(26, 35, 126, 0.09)",
                      }}
                      data-ocid="academics.school_card.1"
                    >
                      {/* Gradient header */}
                      <div
                        className="px-8 pt-8 pb-6"
                        style={{
                          background: `linear-gradient(135deg, ${MIDNIGHT} 0%, ${COBALT} 100%)`,
                        }}
                      >
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                          style={{
                            background: "rgba(255,255,255,0.14)",
                            border: "1px solid rgba(255,255,255,0.25)",
                          }}
                        >
                          <BookOpen className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="typo-card-title text-white leading-tight">
                          School of Engineering
                        </h3>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {[
                            "9 Departments",
                            "2000+ Students",
                            "150+ Faculty",
                          ].map((s) => (
                            <span
                              key={s}
                              className="inline-block px-3 py-0.5 rounded-full text-xs font-semibold"
                              style={{
                                background: "rgba(255,255,255,0.15)",
                                color: "rgba(255,255,255,0.88)",
                                fontFamily: "Source Sans 3, sans-serif",
                              }}
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                      {/* Body */}
                      <div className="px-8 py-6 flex flex-col flex-1">
                        <p
                          className="text-sm leading-relaxed flex-1 mb-6"
                          style={{
                            color: "#4b5563",
                            fontFamily: "Source Sans 3, sans-serif",
                          }}
                        >
                          Home to 9 engineering disciplines spanning mechanical,
                          computer science, civil, electrical, electronics &amp;
                          telecom, instrumentation, metallurgy, and more.
                          Offering B.Tech, M.Tech, and PhD programs with
                          world-class faculty and research.
                        </p>
                        <Link
                          to="/academics/schools/school-of-engineering"
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-200 hover:brightness-110 hover:scale-105"
                          style={{
                            backgroundColor: COBALT,
                            color: "#fff",
                            fontFamily: "Source Sans 3, sans-serif",
                          }}
                          data-ocid="academics.school_card.1.explore_button"
                        >
                          Explore School
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </motion.div>

                    {/* Card 2: School of Multidisciplinary Sciences */}
                    <motion.div
                      initial={{ opacity: 0, y: 32 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.55, delay: 0.12 }}
                      whileHover={{ y: -8, transition: { duration: 0.2 } }}
                      className="rounded-3xl overflow-hidden flex flex-col group"
                      style={{
                        background: "#fff",
                        border: `1.5px solid ${DEEP_BLUE}22`,
                        boxShadow: "0 4px 24px rgba(26,35,126,0.09)",
                      }}
                      data-ocid="academics.school_card.2"
                    >
                      {/* Gradient header */}
                      <div
                        className="px-8 pt-8 pb-6"
                        style={{
                          background: `linear-gradient(135deg, ${DEEP_BLUE} 0%, #283593 100%)`,
                        }}
                      >
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                          style={{
                            background: "rgba(255,255,255,0.14)",
                            border: "1px solid rgba(255,255,255,0.25)",
                          }}
                        >
                          <Star className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="typo-card-title text-white leading-tight">
                          School of Multidisciplinary Sciences, Humanities &amp;
                          Management Studies
                        </h3>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {[
                            "3 Departments",
                            "500+ Students",
                            "30+ Faculty",
                          ].map((s) => (
                            <span
                              key={s}
                              className="inline-block px-3 py-0.5 rounded-full text-xs font-semibold"
                              style={{
                                background: "rgba(255,255,255,0.15)",
                                color: "rgba(255,255,255,0.88)",
                                fontFamily: "Source Sans 3, sans-serif",
                              }}
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                      {/* Body */}
                      <div className="px-8 py-6 flex flex-col flex-1">
                        <p
                          className="text-sm leading-relaxed flex-1 mb-6"
                          style={{
                            color: "#4b5563",
                            fontFamily: "Source Sans 3, sans-serif",
                          }}
                        >
                          Bridging disciplines with programs in management
                          studies, humanities, and applied sciences. The
                          Department of Management Studies offers a flagship MBA
                          program preparing industry-ready leaders.
                        </p>
                        <Link
                          to="/academics/schools/school-of-multidisciplinary-sciences"
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-200 hover:brightness-110 hover:scale-105"
                          style={{
                            backgroundColor: DEEP_BLUE,
                            color: "#fff",
                            fontFamily: "Source Sans 3, sans-serif",
                          }}
                          data-ocid="academics.school_card.2.explore_button"
                        >
                          Explore School
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </section>

              {/* Quick nav cards */}
              <section className="py-16" style={{ backgroundColor: "#fff" }}>
                <div className="max-w-5xl mx-auto px-4">
                  <SectionHeading
                    eyebrow="Quick Navigation"
                    title="Explore Academics"
                    subtitle="Dive into the full depth of COEP's academic offerings."
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {[
                      {
                        tab: "schools",
                        icon: BookOpen,
                        label: "Schools & Departments",
                        desc: "7 schools, 10+ departments",
                      },
                      {
                        tab: "programs",
                        icon: GraduationCap,
                        label: "Academic Programs",
                        desc: "B.Tech, M.Tech, MBA, PhD",
                      },
                      {
                        tab: "curriculum",
                        icon: Calendar,
                        label: "Courses & Curriculum",
                        desc: "Semester-wise syllabus",
                      },
                      {
                        tab: "achievements",
                        icon: Award,
                        label: "Rankings & Awards",
                        desc: "NIRF, NBA, NAAC A+",
                      },
                      {
                        tab: "calendar",
                        icon: Calendar,
                        label: "Academic Calendar",
                        desc: "Events, exams & holidays",
                      },
                    ].map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <motion.button
                          key={item.tab}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: i * 0.08 }}
                          whileHover={{ y: -4, transition: { duration: 0.2 } }}
                          onClick={() => handleTabChange(item.tab)}
                          className="flex items-start gap-4 p-5 rounded-2xl text-left transition-shadow duration-300 hover:shadow-lg"
                          style={{
                            backgroundColor: "#fff",
                            border: `1px solid ${COBALT}18`,
                          }}
                          data-ocid={`academics.quicknav.${item.tab}`}
                        >
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: `${COBALT}12` }}
                          >
                            <Icon
                              className="w-5 h-5"
                              style={{ color: COBALT }}
                            />
                          </div>
                          <div>
                            <div
                              className="typo-support font-bold mb-0.5"
                              style={{ color: DEEP_BLUE }}
                            >
                              {item.label}
                            </div>
                            <div
                              className="typo-stat-label"
                              style={{ color: "#9ca3af" }}
                            >
                              {item.desc}
                            </div>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {/* ══ SCHOOLS & DEPARTMENTS ══ */}
          {activeTab === "schools" && (
            <motion.div
              key="schools"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="py-16"
              data-ocid="academics.schools_section"
            >
              <div className="max-w-[1200px] mx-auto px-4 xl:px-8">
                <SectionHeading
                  eyebrow="Academic Structure"
                  title="Schools & Departments"
                  subtitle="COEP Technological University is organized into two broad schools encompassing 16 departments — each a centre of academic rigour and research excellence."
                />

                {/* School of Engineering */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55 }}
                  className="mb-12 rounded-3xl overflow-hidden shadow-lg"
                  style={{ border: `1.5px solid ${COBALT}25` }}
                >
                  <Link
                    to="/academics/schools/school-of-engineering"
                    className="block px-8 py-6 flex items-center gap-4 group transition-opacity hover:opacity-90"
                    style={{
                      background: `linear-gradient(120deg, ${MIDNIGHT}, ${COBALT})`,
                    }}
                    data-ocid="academics.schools.engineering_link"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
                    >
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h2 className="typo-card-title text-white">
                        School of Engineering
                      </h2>
                      <p className="typo-card-desc text-white/70">
                        10 Departments &bull; B.Tech, M.Tech & PhD programmes
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-white/60 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                  </Link>
                  <div className="p-8" style={{ backgroundColor: "#fff" }}>
                    <p
                      className="typo-body mb-6 max-w-3xl"
                      style={{ color: "#4b5563" }}
                    >
                      The School of Engineering houses COEP's flagship
                      undergraduate and postgraduate engineering programmes.
                      Spanning 10 departments, it offers a rigorous curriculum
                      that balances theoretical foundations with hands-on
                      laboratory work, industrial internships, and research
                      projects.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {ENGINEERING_DEPTS.map((dept, i) => (
                        <DeptCard key={dept} name={dept} index={i} />
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* School of Multidisciplinary Sciences */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.1 }}
                  className="rounded-3xl overflow-hidden shadow-lg"
                  style={{ border: `1.5px solid ${DEEP_BLUE}25` }}
                >
                  <Link
                    to="/academics/schools/school-of-multidisciplinary-sciences"
                    className="block px-8 py-6 flex items-center gap-4 group transition-opacity hover:opacity-90"
                    style={{
                      background: `linear-gradient(120deg, ${DEEP_BLUE}, #283593)`,
                    }}
                    data-ocid="academics.schools.multidisciplinary_link"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
                    >
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h2 className="typo-card-title text-white">
                        School of Multidisciplinary Sciences, Humanities &amp;
                        Management Studies
                      </h2>
                      <p className="typo-card-desc text-white/70">
                        6 Departments &bull; MBA, M.Sc & PhD programmes
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-white/60 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                  </Link>
                  <div className="p-8" style={{ backgroundColor: "#fff" }}>
                    <p
                      className="text-sm leading-relaxed mb-6 max-w-3xl"
                      style={{
                        color: "#4b5563",
                        fontFamily: "Source Sans 3, sans-serif",
                      }}
                    >
                      This interdisciplinary school bridges science, humanities,
                      and management — providing well-rounded education that
                      develops analytical thinking, communication skills,
                      scientific inquiry, and business acumen in future
                      engineers and managers.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {SCIENCE_DEPTS.map((dept, i) => (
                        <DeptCard key={dept} name={dept} index={i} />
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="mt-12 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
                  style={{
                    background: `linear-gradient(120deg, ${MIDNIGHT} 0%, ${COBALT} 100%)`,
                  }}
                  data-ocid="academics.schools_cta_section"
                >
                  <div>
                    <p
                      className="typo-section-label mb-2 opacity-70"
                      style={{ color: "rgba(255,255,255,0.75)" }}
                    >
                      Explore Further
                    </p>
                    <h3 className="typo-card-title text-white mb-1">
                      Visit COEP's Official Academic Portal
                    </h3>
                    <p className="typo-body text-white/70">
                      Detailed programme information, curriculum, and faculty
                      listings.
                    </p>
                  </div>
                  <a
                    href="https://www.coeptech.ac.in/academics/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-shrink-0 flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm uppercase tracking-wider transition-all duration-200 hover:brightness-110 hover:scale-105"
                    style={{
                      backgroundColor: GOLD,
                      color: MIDNIGHT,
                    }}
                    data-ocid="academics.schools_cta_button"
                  >
                    Official Website
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* ══ PROGRAMS ══ */}
          {activeTab === "programs" && (
            <motion.div
              key="programs"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="py-16"
              data-ocid="academics.programs_section"
            >
              <div className="max-w-[1200px] mx-auto px-4 xl:px-8">
                <SectionHeading
                  eyebrow="Degree Programmes"
                  title="Academic Programs"
                  subtitle="From undergraduate engineering to doctoral research — COEP offers transformative programmes across all academic levels."
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {PROGRAMS.map((prog, i) => (
                    <ProgramCard key={prog.title} prog={prog} index={i} />
                  ))}
                </div>

                {/* Program comparison table */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mt-14 rounded-2xl overflow-hidden shadow-md"
                  style={{ border: `1px solid ${COBALT}18` }}
                  data-ocid="academics.programs_table"
                >
                  <div
                    className="px-6 py-4"
                    style={{ backgroundColor: COBALT }}
                  >
                    <h3
                      className="text-lg font-bold text-white"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      Programme Comparison
                    </h3>
                  </div>
                  <div
                    className="overflow-x-auto"
                    style={{ backgroundColor: "#fff" }}
                  >
                    <table className="w-full text-sm">
                      <thead>
                        <tr
                          style={{
                            backgroundColor: "#f5f7fc",
                            borderBottom: `1px solid ${COBALT}15`,
                          }}
                        >
                          {[
                            "Programme",
                            "Duration",
                            "Eligibility",
                            "Intake",
                            "Disciplines",
                          ].map((h) => (
                            <th
                              key={h}
                              className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wider"
                              style={{
                                color: DEEP_BLUE,
                                fontFamily: "Source Sans 3, sans-serif",
                              }}
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          [
                            "B.Tech",
                            "4 Years",
                            "10+2 PCM / JEE Main",
                            "~540 seats",
                            "10 branches",
                          ],
                          [
                            "M.Tech",
                            "2 Years",
                            "B.E/B.Tech + GATE",
                            "~300 seats",
                            "20+ specializations",
                          ],
                          [
                            "MBA",
                            "2 Years",
                            "Graduate + CAT/MAT/CMAT",
                            "~60 seats",
                            "General Mgmt, Business Analytics",
                          ],
                          [
                            "PhD",
                            "3–5 Years",
                            "M.Tech/M.Sc/MBA",
                            "Open",
                            "All departments",
                          ],
                        ].map((row, ri) => (
                          <tr
                            key={row[0]}
                            className="transition-colors duration-150"
                            style={{
                              borderBottom: `1px solid ${COBALT}10`,
                              backgroundColor:
                                ri % 2 === 0 ? "#fff" : "#f9faff",
                            }}
                          >
                            {row.map((cell) => (
                              <td
                                key={cell}
                                className="px-5 py-3.5"
                                style={{
                                  color:
                                    cell === row[0] ? DEEP_BLUE : "#4b5563",
                                  fontFamily: "Source Sans 3, sans-serif",
                                  fontWeight: cell === row[0] ? 700 : 400,
                                }}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* ══ CURRICULUM ══ */}
          {activeTab === "curriculum" && (
            <motion.div
              key="curriculum"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="py-16"
              data-ocid="academics.curriculum_section"
            >
              <div className="max-w-[1100px] mx-auto px-4 xl:px-8">
                <SectionHeading
                  eyebrow="B.Tech Curriculum Structure"
                  title="Courses & Curriculum"
                  subtitle="A semester-by-semester guide to the B.Tech curriculum at COEP Technological University — rigorous, modern, and industry-aligned."
                />

                {/* Semester roadmap */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
                  {CURRICULUM_HIGHLIGHTS.map((block, i) => (
                    <motion.div
                      key={block.semester}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                      style={{ border: `1.5px solid ${COBALT}18` }}
                      data-ocid={`academics.curriculum_block.${i + 1}`}
                    >
                      <div
                        className="px-6 py-4 flex items-center gap-3"
                        style={{
                          background:
                            i % 2 === 0
                              ? `linear-gradient(120deg, ${MIDNIGHT}, ${COBALT})`
                              : `linear-gradient(120deg, ${DEEP_BLUE}, #2a60e0)`,
                        }}
                      >
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
                          style={{
                            backgroundColor: "rgba(255,255,255,0.15)",
                            color: "#fff",
                          }}
                        >
                          {i + 1}
                        </div>
                        <div>
                          <div
                            className="text-xs font-bold uppercase tracking-widest text-white/60"
                            style={{ fontFamily: "Source Sans 3, sans-serif" }}
                          >
                            {block.semester}
                          </div>
                          <div
                            className="text-base font-bold text-white"
                            style={{ fontFamily: "var(--font-heading)" }}
                          >
                            {block.title}
                          </div>
                        </div>
                      </div>
                      <div className="p-5" style={{ backgroundColor: "#fff" }}>
                        <ul className="space-y-2">
                          {block.topics.map((topic) => (
                            <li
                              key={topic}
                              className="flex items-center gap-3 text-sm"
                              style={{
                                color: "#374151",
                                fontFamily: "Source Sans 3, sans-serif",
                              }}
                            >
                              <span
                                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                style={{ backgroundColor: COBALT }}
                              />
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Download / COEP link */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
                  style={{
                    background: `linear-gradient(120deg, ${MIDNIGHT} 0%, ${DEEP_BLUE} 100%)`,
                  }}
                  data-ocid="academics.curriculum_cta"
                >
                  <div>
                    <p
                      className="text-xs font-bold uppercase tracking-widest mb-2"
                      style={{
                        color: "rgba(255,255,255,0.75)",
                        fontFamily: "Source Sans 3, sans-serif",
                      }}
                    >
                      Detailed Syllabus
                    </p>
                    <h3
                      className="text-xl font-bold text-white mb-1"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      Download Full Curriculum PDF
                    </h3>
                    <p
                      className="text-sm text-white/70"
                      style={{ fontFamily: "Source Sans 3, sans-serif" }}
                    >
                      Department-wise syllabi, elective lists, and lab manuals
                      available on the university portal.
                    </p>
                  </div>
                  <a
                    href="https://www.coeptech.ac.in/academics/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-shrink-0 flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm uppercase tracking-wider transition-all duration-200 hover:brightness-110 hover:scale-105"
                    style={{
                      backgroundColor: GOLD,
                      color: MIDNIGHT,
                      fontFamily: "Source Sans 3, sans-serif",
                    }}
                    data-ocid="academics.curriculum_portal_button"
                  >
                    View on Portal
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* ══ ACHIEVEMENTS ══ */}
          {activeTab === "achievements" && (
            <motion.div
              key="achievements"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="py-16"
              data-ocid="academics.achievements_section"
            >
              <div className="max-w-[1200px] mx-auto px-4 xl:px-8">
                <SectionHeading
                  eyebrow="Recognitions & Rankings"
                  title="Awards & Achievements"
                  subtitle="COEP Technological University's academic excellence is recognised by India's premier accreditation and ranking bodies."
                />

                {/* Achievement badges grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
                  {ACHIEVEMENTS.map((item, i) => (
                    <AchievementBadge key={item.title} item={item} index={i} />
                  ))}
                </div>

                {/* Highlight banner */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="rounded-3xl overflow-hidden shadow-xl"
                  data-ocid="academics.achievements_banner"
                >
                  <div
                    className="p-10 md:p-14 text-center"
                    style={{
                      background: `linear-gradient(135deg, ${MIDNIGHT} 0%, ${DEEP_BLUE} 50%, ${COBALT} 100%)`,
                    }}
                  >
                    <p
                      className="text-xs font-bold uppercase tracking-[0.22em] mb-4"
                      style={{
                        color: "rgba(255,255,255,0.75)",
                        fontFamily: "Source Sans 3, sans-serif",
                      }}
                    >
                      170 Years of Excellence
                    </p>
                    <h2
                      className="text-3xl md:text-4xl font-bold text-white mb-4"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      One of India's Most Decorated Engineering Institutions
                    </h2>
                    <p
                      className="max-w-2xl mx-auto text-base text-white/75 mb-8"
                      style={{ fontFamily: "Source Sans 3, sans-serif" }}
                    >
                      From producing Bharat Ratna recipients to contributing to
                      national infrastructure, COEP's alumni and faculty have
                      left an indelible mark on India's progress.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                      {[
                        "NIRF #90",
                        "NAAC A+",
                        "NBA Accredited",
                        "ISO 9001",
                        "ABET Partner",
                      ].map((tag) => (
                        <span
                          key={tag}
                          className="inline-block px-4 py-1.5 rounded-full text-sm font-bold border"
                          style={{
                            borderColor: "rgba(255,255,255,0.4)",
                            color: "rgba(255,255,255,0.9)",
                            fontFamily: "Source Sans 3, sans-serif",
                            backgroundColor: "rgba(255,255,255,0.1)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* ══ CALENDAR ══ */}
          {activeTab === "calendar" && (
            <motion.div
              key="calendar"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="py-16"
              data-ocid="academics.calendar_section"
            >
              <div className="max-w-[900px] mx-auto px-4 xl:px-8">
                <SectionHeading
                  eyebrow="Academic Year 2025–26"
                  title="Academic Calendar"
                  subtitle="Key academic milestones, examination schedules, and campus events for the current academic year."
                />

                {/* Event cards */}
                <div className="space-y-5 mb-12">
                  {CALENDAR_EVENTS.map((ev, i) => (
                    <motion.div
                      key={ev.title}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.12 }}
                      whileHover={{ x: 4, transition: { duration: 0.2 } }}
                      className="flex gap-5 p-5 rounded-2xl hover:shadow-xl transition-all duration-300"
                      style={{
                        backgroundColor: "#fff",
                        border: `1.5px solid ${COBALT}15`,
                      }}
                      data-ocid={`academics.calendar_event.${i + 1}`}
                    >
                      {/* Date block */}
                      <div
                        className="w-16 h-16 rounded-2xl flex flex-col items-center justify-center flex-shrink-0 text-white"
                        style={{
                          background:
                            i % 2 === 0
                              ? `linear-gradient(135deg, ${MIDNIGHT}, ${COBALT})`
                              : `linear-gradient(135deg, ${DEEP_BLUE}, #2a60e0)`,
                        }}
                      >
                        <span
                          className="text-[10px] font-bold uppercase tracking-widest opacity-75"
                          style={{ fontFamily: "Source Sans 3, sans-serif" }}
                        >
                          {ev.month}
                        </span>
                        <span
                          className="text-2xl font-bold leading-none"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          {ev.day}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <h3
                            className="text-base font-bold"
                            style={{
                              fontFamily: "var(--font-heading)",
                              color: DEEP_BLUE,
                            }}
                          >
                            {ev.title}
                          </h3>
                          <span
                            className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
                            style={{
                              backgroundColor: `${COBALT}12`,
                              color: COBALT,
                              fontFamily: "Source Sans 3, sans-serif",
                            }}
                          >
                            {ev.type}
                          </span>
                        </div>
                        <p
                          className="text-xs mb-1"
                          style={{
                            color: COBALT,
                            fontFamily: "Source Sans 3, sans-serif",
                          }}
                        >
                          {ev.date}
                        </p>
                        <p
                          className="text-sm leading-relaxed"
                          style={{
                            color: "#6b7280",
                            fontFamily: "Source Sans 3, sans-serif",
                          }}
                        >
                          {ev.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Full calendar CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
                  style={{
                    background: `linear-gradient(120deg, ${MIDNIGHT} 0%, ${COBALT} 100%)`,
                  }}
                  data-ocid="academics.calendar_cta"
                >
                  <div>
                    <p
                      className="text-xs font-bold uppercase tracking-widest mb-2 opacity-70"
                      style={{
                        color: "rgba(255,255,255,0.75)",
                        fontFamily: "Source Sans 3, sans-serif",
                      }}
                    >
                      Full Schedule
                    </p>
                    <h3
                      className="text-xl font-bold text-white mb-1"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      View Full Academic Calendar
                    </h3>
                    <p
                      className="text-sm text-white/70"
                      style={{ fontFamily: "Source Sans 3, sans-serif" }}
                    >
                      Complete schedule including holidays, examination dates,
                      and internal assessment windows.
                    </p>
                  </div>
                  <a
                    href="https://www.coeptech.ac.in/academic-calendar/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-shrink-0 flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm uppercase tracking-wider transition-all duration-200 hover:brightness-110 hover:scale-105"
                    style={{
                      backgroundColor: GOLD,
                      color: MIDNIGHT,
                      fontFamily: "Source Sans 3, sans-serif",
                    }}
                    data-ocid="academics.calendar_full_button"
                  >
                    View Full Calendar
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </Layout>
  );
}
