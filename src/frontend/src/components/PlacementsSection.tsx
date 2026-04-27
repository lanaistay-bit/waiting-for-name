import { Badge } from "@/components/ui/badge";
import { motion, useInView, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";

const COBALT = "#1648C8";
const DEEP_BLUE = "#0F3499";
const MIDNIGHT = "#081E5C";
const GOLD = "#E8C42A";

const PLACEMENT_STATS = [
  { value: 12.5, suffix: " LPA", label: "Average Package", prefix: "₹" },
  { value: 24, suffix: " LPA", label: "Highest Package", prefix: "₹" },
  { value: 100, suffix: "+", label: "Companies Visited", prefix: "" },
  { value: 95, suffix: "%", label: "Placement Rate", prefix: "" },
];

const COMPANIES = [
  { name: "TCS", color: "#1648C8" },
  { name: "Infosys", color: "#007CC3" },
  { name: "Wipro", color: "#341C75" },
  { name: "Cognizant", color: "#0033A0" },
  { name: "KPMG", color: "#00338D" },
  { name: "Deloitte", color: "#86BC25" },
  { name: "EY", color: "#C4A000" },
  { name: "PwC", color: "#E0301E" },
  { name: "HDFC Bank", color: "#004C8F" },
  { name: "ICICI Bank", color: "#F26822" },
  { name: "Axis Bank", color: "#800000" },
  { name: "Bajaj Finance", color: "#0000A0" },
  { name: "Reliance", color: "#1F4E97" },
  { name: "Mahindra", color: "#CC0000" },
  { name: "L&T", color: "#00539C" },
  { name: "Bosch", color: "#EA0016" },
  { name: "Emerson", color: "#1B5FAC" },
  { name: "Forbes Marshall", color: "#003B75" },
  { name: "Thermax", color: "#005BAB" },
  { name: "Cummins", color: "#C04020" },
  { name: "IBM", color: "#006699" },
  { name: "Accenture", color: "#A100FF" },
  { name: "Capgemini", color: "#0070AD" },
  { name: "HCL", color: "#0066B3" },
  { name: "Godrej", color: "#005F3C" },
];

// Split companies into two rows for opposite-direction scrolling
const ROW_1 = COMPANIES.slice(0, 13);
const ROW_2 = COMPANIES.slice(13);

function AnimatedStat({
  stat,
  index,
}: {
  stat: (typeof PLACEMENT_STATS)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1800, bounce: 0 });
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const displayRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (isInView) motionValue.set(stat.value);
  }, [isInView, stat.value, motionValue]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (displayRef.current) {
        displayRef.current.textContent = `${stat.prefix}${v.toFixed(stat.value % 1 !== 0 ? 1 : 0)}${stat.suffix}`;
      }
    });
  }, [spring, stat]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      whileHover={{ y: -4, transition: { duration: 0.18 } }}
      className="rounded-2xl p-6 text-center"
      style={{
        background: "rgba(255,255,255,0.08)",
        border: "1.5px solid rgba(255,255,255,0.15)",
      }}
      data-ocid={`dms.placements.stat.${index + 1}`}
    >
      <p className="text-3xl md:text-4xl font-bold text-white mb-1 font-display">
        <span ref={displayRef}>
          {stat.prefix}0{stat.suffix}
        </span>
      </p>
      <p className="text-sm font-semibold uppercase tracking-wider text-white/65 font-body">
        {stat.label}
      </p>
    </motion.div>
  );
}

interface CompanyCardProps {
  name: string;
  color: string;
  playState: "running" | "paused";
}

function CompanyCard({ name, color, playState: _ }: CompanyCardProps) {
  return (
    <div
      className="flex-shrink-0 flex items-center justify-center rounded-2xl px-6 py-4 mx-2 cursor-default"
      style={{
        width: "160px",
        height: "80px",
        background: "white",
        border: `1.5px solid ${color}28`,
        boxShadow: `0 2px 12px ${color}15`,
      }}
    >
      <span
        className="font-body font-bold text-center leading-tight"
        style={{ color, fontSize: "0.85rem" }}
      >
        {name}
      </span>
    </div>
  );
}

function RecruiterRow({
  companies,
  direction,
  speed,
  playState,
}: {
  companies: typeof COMPANIES;
  direction: "left" | "right";
  speed: number;
  playState: "running" | "paused";
}) {
  // Duplicate 3× for seamless infinite loop
  const items = [...companies, ...companies, ...companies];
  const animStyle =
    direction === "left"
      ? { animation: `recruiterScrollLeft ${speed}s linear infinite` }
      : { animation: `recruiterScrollRight ${speed}s linear infinite` };

  return (
    <div
      className="overflow-hidden py-2"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div
        className="flex"
        style={{
          ...animStyle,
          animationPlayState: playState,
          width: "max-content",
        }}
      >
        {items.map((c, i) => (
          <CompanyCard
            key={`${c.name}-${i}`}
            name={c.name}
            color={c.color}
            playState={playState}
          />
        ))}
      </div>
    </div>
  );
}

export function PlacementsSection() {
  const [playState, setPlayState] = useState<"running" | "paused">("running");

  return (
    <section
      id="placements"
      className="py-24"
      style={{
        background: "linear-gradient(180deg, #f7f8fc 0%, #edf0fb 100%)",
      }}
      data-ocid="dms.placements_section"
    >
      <div className="container px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <Badge
            variant="outline"
            className="px-4 py-1 mb-4 text-sm"
            style={{
              borderColor: "rgba(22,72,200,0.35)",
              color: COBALT,
              background: "rgba(22,72,200,0.05)",
            }}
          >
            Career Success
          </Badge>
          <h2
            className="text-3xl md:text-5xl font-bold mb-4 font-display"
            style={{ color: DEEP_BLUE }}
          >
            Placements &amp; Internships
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto font-body"
            style={{ color: "#6b7280" }}
          >
            Robust industry connections built over 25+ years — connecting DMS
            graduates with India&apos;s leading corporations and global firms.
          </p>
        </motion.div>

        {/* Stats band */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl p-8 mb-14"
          style={{
            background: `linear-gradient(135deg, ${MIDNIGHT} 0%, ${DEEP_BLUE} 50%, ${COBALT} 100%)`,
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {PLACEMENT_STATS.map((stat, i) => (
              <AnimatedStat key={stat.label} stat={stat} index={i} />
            ))}
          </div>
        </motion.div>

        {/* Recruiters carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-3xl overflow-hidden"
          style={{
            border: `1.5px solid ${COBALT}18`,
            background: "#fff",
            boxShadow: "0 4px 24px rgba(22,72,200,0.07)",
          }}
          data-ocid="dms.placements.recruiters_section"
        >
          {/* Recruiters header */}
          <div
            className="px-8 py-5 flex items-center justify-between"
            style={{
              background: `linear-gradient(120deg, ${MIDNIGHT} 0%, ${DEEP_BLUE} 100%)`,
            }}
          >
            <div>
              <h3 className="text-lg font-bold text-white font-display">
                Our Recruiters
              </h3>
              <p className="text-sm text-white/65 font-body">
                100+ companies | Finance, Consulting, Analytics, Operations
              </p>
            </div>
            <span
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold font-body"
              style={{
                background: "rgba(232,196,42,0.2)",
                color: GOLD,
                border: "1px solid rgba(232,196,42,0.4)",
              }}
            >
              Top Recruiters
            </span>
          </div>

          {/* Scrolling carousel — two rows */}
          <div
            className="py-6"
            onMouseEnter={() => setPlayState("paused")}
            onMouseLeave={() => setPlayState("running")}
            data-ocid="dms.placements.carousel"
          >
            <RecruiterRow
              companies={ROW_1}
              direction="left"
              speed={30}
              playState={playState}
            />
            <div className="mt-3">
              <RecruiterRow
                companies={ROW_2}
                direction="right"
                speed={25}
                playState={playState}
              />
            </div>

            {/* Hover hint */}
            <p
              className="text-center text-xs font-body mt-4"
              style={{ color: "#9ca3af" }}
            >
              Hover to pause · {COMPANIES.length} companies
            </p>
          </div>
        </motion.div>

        {/* Internship note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10 rounded-2xl p-7 flex flex-col md:flex-row items-center gap-6"
          style={{
            background: "rgba(232,196,42,0.08)",
            border: `2px solid ${GOLD}50`,
          }}
          data-ocid="dms.placements.internship_note"
        >
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{
              background: `linear-gradient(135deg, ${GOLD} 0%, #c9a800 100%)`,
            }}
          >
            <span className="text-2xl">🏢</span>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h4
              className="text-base font-bold mb-1 font-display"
              style={{ color: DEEP_BLUE }}
            >
              Summer Internship Program
            </h4>
            <p className="text-sm font-body" style={{ color: "#6b7280" }}>
              8–10 week mandatory summer internship between Semester 2 &amp; 3,
              with stipend at leading corporates across India — Finance,
              Consulting, Analytics, Operations, and Marketing.
            </p>
          </div>
          <a
            href="/admissions/mba"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-200 hover:brightness-110 hover:scale-105 font-body"
            style={{
              backgroundColor: MIDNIGHT,
              color: GOLD,
            }}
            data-ocid="dms.placements.apply_button"
          >
            Apply for MBA
          </a>
        </motion.div>
      </div>
    </section>
  );
}
