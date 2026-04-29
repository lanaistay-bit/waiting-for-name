import { Badge } from "@/components/ui/badge";
import {
  Award,
  BarChart2,
  BookOpen,
  Brain,
  Briefcase,
  Cpu,
  Database,
  Layers,
  LineChart,
  Rocket,
  Users,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { type ElementType, useState } from "react";

interface SemesterNode {
  num: number;
  period: string;
  title: string;
  courses: string[];
  icon: ElementType;
  phase: "Foundation" | "Core" | "Advanced" | "Dissertation";
  credits?: string;
}

const GM_SEMESTERS: SemesterNode[] = [
  {
    num: 1,
    period: "Semester I",
    title: "Foundation",
    icon: BookOpen,
    phase: "Foundation",
    credits: "20 Credits",
    courses: [
      "Managerial Economics",
      "Financial Accounting & Analysis",
      "Organizational Behavior",
      "Business Statistics & Research Methods",
      "Marketing Management",
      "Business Communication",
    ],
  },
  {
    num: 2,
    period: "Semester II",
    title: "Functional Core",
    icon: Layers,
    phase: "Core",
    credits: "22 Credits",
    courses: [
      "Operations Management",
      "Strategic Management",
      "Corporate Law & Business Ethics",
      "Financial Management",
      "Human Resource Management",
      "Entrepreneurship & Innovation",
    ],
  },
  {
    num: 3,
    period: "Semester III",
    title: "Electives & Specialisation",
    icon: Rocket,
    phase: "Advanced",
    credits: "20 Credits",
    courses: [
      "Finance / Marketing Elective I",
      "Finance / Marketing Elective II",
      "Operations / HR Elective I",
      "Cross-functional Elective",
      "Industry Mentorship Programme",
      "Live Corporate Project",
    ],
  },
  {
    num: 4,
    period: "Semester IV",
    title: "Dissertation",
    icon: Award,
    phase: "Dissertation",
    credits: "18 Credits",
    courses: [
      "Summer Industry Internship (Evaluated)",
      "Dissertation Research Project",
      "Viva Voce & Defence",
      "Industry Seminar Series",
      "Placement Preparation Workshop",
    ],
  },
];

const BA_SEMESTERS: SemesterNode[] = [
  {
    num: 1,
    period: "Semester I",
    title: "Analytics Foundation",
    icon: Database,
    phase: "Foundation",
    credits: "20 Credits",
    courses: [
      "Business Analytics Fundamentals",
      "Statistical Methods for Business",
      "Database Management Systems",
      "Python for Data Analytics",
      "Managerial Economics",
      "Data-Driven Decision Making",
    ],
  },
  {
    num: 2,
    period: "Semester II",
    title: "Core Analytics",
    icon: Cpu,
    phase: "Core",
    credits: "22 Credits",
    courses: [
      "Machine Learning for Business",
      "Data Visualisation & Storytelling",
      "Operations Analytics",
      "Financial Analytics",
      "Marketing Analytics",
      "Supply Chain Analytics",
    ],
  },
  {
    num: 3,
    period: "Semester III",
    title: "Advanced Analytics",
    icon: Brain,
    phase: "Advanced",
    credits: "20 Credits",
    courses: [
      "Predictive & Prescriptive Modeling",
      "Big Data Technologies (Hadoop/Spark)",
      "Natural Language Processing for Business",
      "AI & Deep Learning in Business",
      "Social Media & Sentiment Analytics",
      "Analytics Consulting Practicum",
    ],
  },
  {
    num: 4,
    period: "Semester IV",
    title: "Dissertation",
    icon: LineChart,
    phase: "Dissertation",
    credits: "18 Credits",
    courses: [
      "Industry Analytics Project",
      "Dissertation (Analytics Focus)",
      "Tableau / Power BI Capstone",
      "Analytics Strategy for Enterprises",
      "Placement Preparation & Portfolio",
    ],
  },
];

const PHASE_STYLES: Record<
  SemesterNode["phase"],
  {
    bg: string;
    border: string;
    nodeGrad: string;
    text: string;
    glowColor: string;
    label: string;
  }
> = {
  Foundation: {
    bg: "rgba(26, 35, 126, 0.06)",
    border: "#1A237E",
    nodeGrad: "linear-gradient(135deg, #1A237E 0%, #283593 100%)",
    text: "#1A237E",
    glowColor: "rgba(26, 35, 126, 0.4)",
    label: "Year 1 · Semester 1",
  },
  Core: {
    bg: "rgba(15, 51, 153, 0.06)",
    border: "#0F3399",
    nodeGrad: "linear-gradient(135deg, #0F3399 0%, #1A237E 100%)",
    text: "#0F3399",
    glowColor: "rgba(15, 51, 153, 0.4)",
    label: "Year 1 · Semester 2",
  },
  Advanced: {
    bg: "rgba(8, 30, 92, 0.06)",
    border: "#081E5C",
    nodeGrad: "linear-gradient(135deg, #081E5C 0%, #0F3399 100%)",
    text: "#081E5C",
    glowColor: "rgba(8, 30, 92, 0.35)",
    label: "Year 2 · Semester 3",
  },
  Dissertation: {
    bg: "rgba(232, 196, 42, 0.1)",
    border: "#E8C42A",
    nodeGrad: "linear-gradient(135deg, #E8C42A 0%, #b89a18 100%)",
    text: "#7a5f00",
    glowColor: "rgba(232, 196, 42, 0.5)",
    label: "Year 2 · Semester 4",
  },
};

function SemesterCard({
  node,
  isActive,
  onClick,
  index,
  track,
}: {
  node: SemesterNode;
  isActive: boolean;
  onClick: () => void;
  index: number;
  track: "gm" | "ba";
}) {
  const Icon = node.icon;
  const ps = PHASE_STYLES[node.phase];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="flex flex-col items-center"
      data-ocid={`dms.roadmap.${track}.semester.${node.num}`}
    >
      {/* Animated connector line */}
      {index > 0 && (
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          whileInView={{ scaleY: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.15 + 0.1 }}
          className="origin-top"
          style={{
            width: "3px",
            height: "36px",
            background: `linear-gradient(to bottom, ${ps.border}90, ${ps.border}20)`,
            borderRadius: "2px",
          }}
        />
      )}

      {/* Node button */}
      <motion.button
        type="button"
        onClick={onClick}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-expanded={isActive}
        aria-label={`Semester ${node.num}: ${node.title}`}
        className="relative focus:outline-none"
      >
        {/* Outer glow ring when active */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              key="glow-ring"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                boxShadow: `0 0 0 6px ${ps.glowColor}, 0 0 28px ${ps.glowColor}`,
                borderRadius: "50%",
              }}
            />
          )}
        </AnimatePresence>

        {/* Main node circle — w-24 h-24 = 96px */}
        <motion.div
          animate={{
            background: isActive ? ps.nodeGrad : "white",
            boxShadow: isActive
              ? `0 12px 36px ${ps.glowColor}, 0 4px 12px rgba(0,0,0,0.12)`
              : "0 4px 14px rgba(0,0,0,0.1)",
          }}
          transition={{ type: "spring", stiffness: 280, damping: 22 }}
          className="w-24 h-24 rounded-full flex flex-col items-center justify-center border-2"
          style={{ borderColor: ps.border }}
        >
          <Icon
            className="w-7 h-7 mb-0.5 transition-colors duration-300"
            style={{ color: isActive ? "white" : ps.text }}
          />
          <span
            className="text-xs font-bold font-inter transition-colors duration-300"
            style={{ color: isActive ? "rgba(255,255,255,0.85)" : ps.text }}
          >
            Sem {node.num}
          </span>
        </motion.div>

        {/* Phase badge */}
        <motion.span
          animate={{
            background: isActive ? ps.nodeGrad : `${ps.border}15`,
          }}
          className="absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full text-[9px] font-bold whitespace-nowrap font-manrope shadow-sm"
          style={{
            color: isActive
              ? node.phase === "Dissertation"
                ? "#081E5C"
                : "white"
              : ps.text,
            border: `1px solid ${ps.border}40`,
          }}
        >
          {node.phase}
        </motion.span>
      </motion.button>

      {/* Label below node */}
      <div className="mt-3 text-center px-1">
        <p
          className="text-sm font-bold font-inter leading-tight"
          style={{ color: ps.text }}
        >
          {node.period}
        </p>
        <p className="text-xs font-source text-muted-foreground mt-0.5 leading-tight">
          {node.title}
        </p>
        {node.credits && (
          <p
            className="text-[10px] font-manrope mt-0.5"
            style={{ color: ps.border, opacity: 0.7 }}
          >
            {node.credits}
          </p>
        )}
      </div>
    </motion.div>
  );
}

function TrackColumn({
  label,
  icon: TrackIcon,
  semesters,
  track,
  color,
}: {
  label: string;
  icon: ElementType;
  semesters: SemesterNode[];
  track: "gm" | "ba";
  color: string;
}) {
  const [activeSem, setActiveSem] = useState(0);
  const active = semesters[activeSem];
  const ActiveIcon = active.icon;
  const ps = PHASE_STYLES[active.phase];

  return (
    <div className="flex flex-col">
      {/* Track header */}
      <motion.div
        initial={{ opacity: 0, y: -24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl p-6 mb-10 text-white flex items-center gap-4 shadow-lg"
        style={{
          background: `linear-gradient(135deg, ${color} 0%, #0F3399 100%)`,
          boxShadow: `0 8px 32px ${color}50`,
        }}
      >
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
          style={{
            background: "rgba(255,255,255,0.18)",
            border: "1px solid rgba(255,255,255,0.3)",
          }}
        >
          <TrackIcon className="w-7 h-7 text-white" />
        </div>
        <div>
          <p className="text-white/60 text-xs uppercase tracking-[0.15em] font-manrope font-semibold">
            MBA Programme — 2 Years
          </p>
          <h3 className="font-cinzel font-bold text-xl text-white leading-tight mt-0.5">
            {label}
          </h3>
        </div>
      </motion.div>

      {/* Instruction hint */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center text-xs font-source text-muted-foreground mb-6"
      >
        Click any semester to explore courses
      </motion.p>

      {/* Vertical timeline nodes */}
      <div className="flex flex-col items-center mb-8">
        {semesters.map((node, i) => (
          <SemesterCard
            key={node.num}
            node={node}
            isActive={activeSem === i}
            onClick={() => setActiveSem(i)}
            index={i}
            track={track}
          />
        ))}
      </div>

      {/* Active semester detail panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${track}-${activeSem}`}
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -16, scale: 0.97 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="rounded-2xl overflow-hidden"
          style={{
            border: `2px solid ${ps.border}`,
            boxShadow: `0 12px 40px ${ps.glowColor}`,
          }}
          data-ocid={`dms.roadmap.${track}.detail.${active.num}`}
        >
          {/* Colored header bar */}
          <div
            className="px-6 py-4 flex items-center gap-4"
            style={{ background: ps.nodeGrad }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(255,255,255,0.2)" }}
            >
              <ActiveIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <p
                className="text-[10px] font-bold uppercase tracking-widest font-manrope"
                style={{
                  color:
                    active.phase === "Dissertation"
                      ? "rgba(8,30,92,0.8)"
                      : "rgba(255,255,255,0.7)",
                }}
              >
                {ps.label}
              </p>
              <h4
                className="font-cinzel font-bold text-lg leading-tight"
                style={{
                  color: active.phase === "Dissertation" ? "#081E5C" : "white",
                }}
              >
                Semester {active.num}: {active.title}
              </h4>
              {active.credits && (
                <p
                  className="text-xs font-source mt-0.5"
                  style={{
                    color:
                      active.phase === "Dissertation"
                        ? "rgba(8,30,92,0.65)"
                        : "rgba(255,255,255,0.6)",
                  }}
                >
                  {active.credits}
                </p>
              )}
            </div>
          </div>

          {/* Course list */}
          <div className="p-5 bg-card space-y-2.5">
            <p
              className="text-[11px] font-bold uppercase tracking-widest font-manrope mb-3"
              style={{ color: ps.text }}
            >
              Core Courses
            </p>
            {active.courses.map((course, ci) => (
              <motion.div
                key={course}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: ci * 0.06 }}
                className="flex items-center gap-3 px-4 py-3 rounded-xl"
                style={{
                  background: ps.bg,
                  border: `1px solid ${ps.border}20`,
                }}
              >
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: ps.border }}
                />
                <span className="text-sm font-source text-foreground leading-snug">
                  {course}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export function AcademicRoadmap() {
  const [mobileTrack, setMobileTrack] = useState<"gm" | "ba">("gm");

  return (
    <section
      id="program-structure"
      className="py-28"
      style={{
        background:
          "linear-gradient(180deg, #eef1fb 0%, #e4eaf7 50%, #dde4f5 100%)",
      }}
      data-ocid="dms.roadmap_section"
    >
      <div className="container px-4 md:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 44 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="text-center mb-16"
        >
          <Badge
            variant="outline"
            className="px-5 py-1.5 mb-5 text-sm"
            style={{
              borderColor: "rgba(26, 35, 126, 0.35)",
              color: "#1A237E",
              background: "rgba(26, 35, 126, 0.05)",
            }}
          >
            Program Structure
          </Badge>
          <h2
            className="typo-section-heading font-cinzel font-bold mb-5 text-4xl md:text-6xl"
            style={{ color: "#0F3399" }}
          >
            Academic Roadmap
            <br />
            <span style={{ color: "#1A237E" }}>— 2 Years, 4 Semesters</span>
          </h2>
          <p className="typo-body font-source text-muted-foreground max-w-2xl mx-auto text-xl leading-relaxed">
            Dual-track MBA: Choose between{" "}
            <strong style={{ color: "#1A237E" }}>General Management</strong> and{" "}
            <strong style={{ color: "#0F3399" }}>Business Analytics</strong> —
            both designed for transformative, industry-ready leadership.
          </p>
        </motion.div>

        {/* Phase legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {(
            [
              "Foundation",
              "Core",
              "Advanced",
              "Dissertation",
            ] as SemesterNode["phase"][]
          ).map((phase) => {
            const ps = PHASE_STYLES[phase];
            return (
              <div
                key={phase}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-inter font-semibold"
                style={{
                  background: ps.bg,
                  border: `1.5px solid ${ps.border}40`,
                  color: ps.text,
                }}
              >
                <div
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ background: ps.nodeGrad }}
                />
                {phase}
              </div>
            );
          })}
        </motion.div>

        {/* Mobile track switcher */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-12 md:hidden"
        >
          <div
            className="inline-flex rounded-full p-1 gap-1"
            style={{
              background: "rgba(26, 35, 126, 0.08)",
              border: "1px solid rgba(26, 35, 126, 0.15)",
            }}
            role="tablist"
            aria-label="Track selector"
          >
            {(["gm", "ba"] as const).map((t) => (
              <button
                key={t}
                type="button"
                role="tab"
                aria-selected={mobileTrack === t}
                onClick={() => setMobileTrack(t)}
                data-ocid={`dms.roadmap.track.${t}`}
                className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 font-inter"
                style={{
                  background:
                    mobileTrack === t
                      ? "linear-gradient(135deg, #1A237E 0%, #0F3399 100%)"
                      : "transparent",
                  color: mobileTrack === t ? "white" : "#1A237E",
                  boxShadow:
                    mobileTrack === t
                      ? "0 4px 14px rgba(26, 35, 126, 0.3)"
                      : "none",
                }}
              >
                {t === "gm" ? "General Management" : "Business Analytics"}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Desktop: two-column grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-16">
          <TrackColumn
            label="General Management"
            icon={Users}
            semesters={GM_SEMESTERS}
            track="gm"
            color="#1A237E"
          />
          <TrackColumn
            label="Business Analytics"
            icon={BarChart2}
            semesters={BA_SEMESTERS}
            track="ba"
            color="#0F3399"
          />
        </div>

        {/* Mobile: single track */}
        <div className="md:hidden">
          {mobileTrack === "gm" ? (
            <TrackColumn
              label="General Management"
              icon={Users}
              semesters={GM_SEMESTERS}
              track="gm"
              color="#1A237E"
            />
          ) : (
            <TrackColumn
              label="Business Analytics"
              icon={BarChart2}
              semesters={BA_SEMESTERS}
              track="ba"
              color="#0F3399"
            />
          )}
        </div>

        {/* Internship callout */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 flex justify-center"
        >
          <div
            className="inline-flex items-center gap-5 px-10 py-5 rounded-2xl"
            style={{
              border: "2px solid #E8C42A",
              background: "rgba(232, 196, 42, 0.08)",
              boxShadow: "0 8px 32px rgba(232, 196, 42, 0.15)",
            }}
          >
            <Briefcase
              className="w-8 h-8 flex-shrink-0"
              style={{ color: "#c9a800" }}
            />
            <div>
              <p
                className="text-base font-bold font-inter"
                style={{ color: "#0F3399" }}
              >
                Summer Industry Internship — Between Semester 2 &amp; 3
              </p>
              <p
                className="text-sm font-source mt-0.5"
                style={{ color: "#6b7280" }}
              >
                8–10 weeks · Evaluated &amp; Graded · Leading corporates across
                India
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
