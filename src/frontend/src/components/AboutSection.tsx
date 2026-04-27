import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Calendar,
  MapPin,
  Shield,
  Star,
  Target,
  Users,
} from "lucide-react";
import { motion, useInView, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";

const STATS = [
  {
    value: 120,
    suffix: "",
    label: "Students / Year",
    sublabel: "60 MBA + 60 MBA-BA",
  },
  {
    value: 2,
    suffix: "",
    label: "Programs Offered",
    sublabel: "MBA & MBA (Business Analytics)",
  },
  {
    value: 9,
    suffix: "+",
    label: "Faculty Members",
    sublabel: "Industry & Academic Experts",
  },
  {
    value: 25,
    suffix: "+",
    label: "Years of Excellence",
    sublabel: "Management Education",
  },
];

const INFO_ITEMS = [
  { icon: MapPin, text: "Wellesley Rd, Shivajinagar, Pune – 411005" },
  { icon: Calendar, text: "Established: 1854 (University status: 2023)" },
  { icon: Users, text: "NAAC A++ Accredited | NBA Affiliated" },
  { icon: BookOpen, text: "AICTE Approved MBA Programs" },
];

const BADGES = [
  { icon: Shield, label: "AICTE Approved" },
  { icon: Star, label: "NBA Accredited" },
  { icon: Target, label: "NIRF Ranked" },
  { icon: Users, label: "Industry Ready" },
];

const VISION_MISSION = [
  {
    icon: Target,
    title: "Vision",
    text: "To be a nationally recognized centre of management excellence, producing future-ready leaders who drive business innovation and societal impact.",
  },
  {
    icon: Star,
    title: "Mission",
    text: "To deliver world-class management education through a blend of rigorous academics, industry integration, research, and holistic development of students.",
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1800, bounce: 0 });
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent = `${Math.round(v)}${suffix}`;
      }
    });
  }, [spring, suffix]);

  return (
    <span ref={ref} className="tabular-nums">
      0{suffix}
    </span>
  );
}

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 bg-background"
      data-ocid="dms.about_section"
    >
      <div className="container px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <Badge
            variant="outline"
            className="px-4 py-1 mb-4 text-sm"
            style={{
              borderColor: "rgba(22,72,200,0.4)",
              color: "#1648C8",
              background: "rgba(22,72,200,0.05)",
            }}
          >
            About Us
          </Badge>
          <h2
            className="text-3xl md:text-5xl font-display font-bold"
            style={{ color: "#0F3499" }}
          >
            Shaping Future Business Leaders
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto font-body text-lg">
            Rooted in one of India's oldest engineering institutions, DMS
            bridges analytical rigour with managerial wisdom.
          </p>
        </motion.div>

        {/* Split layout: text left, image right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h3
              className="text-2xl md:text-3xl font-display font-bold leading-snug"
              style={{ color: "#0F3499" }}
            >
              Department of Management Studies,{" "}
              <span style={{ color: "#1648C8" }}>COEP Tech</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed font-body text-lg">
              The Department of Management Studies at COEP Technological
              University offers a two-year full-time MBA program recognized by
              AICTE. Established over two decades ago, DMS is known for its
              rigorous curriculum, industry-focused pedagogy, and strong
              placement record. The department nurtures future business leaders
              through a blend of analytical thinking, leadership development,
              and real-world exposure.
            </p>
            <p className="text-muted-foreground leading-relaxed font-body text-lg">
              DMS offers two specialised programs: the flagship{" "}
              <strong className="text-foreground">
                MBA in General Management
              </strong>{" "}
              (60 seats) and the industry-forward{" "}
              <strong className="text-foreground">
                MBA in Business Analytics
              </strong>{" "}
              (60 seats). Graduates step into leadership roles at Fortune 500
              companies, global consultancies, and innovative startups.
            </p>

            {/* Info chips */}
            <div className="space-y-3 pt-2">
              {INFO_ITEMS.map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(22,72,200,0.1)" }}
                  >
                    <item.icon
                      className="w-4 h-4"
                      style={{ color: "#1648C8" }}
                    />
                  </div>
                  <span className="text-sm text-muted-foreground font-body">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Highlight badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {BADGES.map((badge, i) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.3 + i * 0.08,
                    type: "spring",
                    stiffness: 280,
                  }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold font-body"
                  style={{
                    background: "rgba(22,72,200,0.08)",
                    border: "1px solid rgba(22,72,200,0.25)",
                    color: "#0F3499",
                  }}
                >
                  <badge.icon
                    className="w-3.5 h-3.5"
                    style={{ color: "#1648C8" }}
                  />
                  {badge.label}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div
              className="rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center"
              style={{ background: "#f0f3fb" }}
            >
              <motion.img
                src="/assets/dms-faculty-group.jpeg"
                alt="DMS Faculty Group"
                className="w-full"
                style={{
                  maxHeight: "520px",
                  objectFit: "contain",
                  display: "block",
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            {/* Founded badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 260 }}
              className="absolute -bottom-5 -left-5 w-28 h-28 rounded-xl border shadow-xl hidden md:flex flex-col items-center justify-center"
              style={{ backgroundColor: "white", borderColor: "#1648C8" }}
            >
              <p className="text-2xl font-bold" style={{ color: "#0F3499" }}>
                1854
              </p>
              <p className="text-[10px] text-muted-foreground text-center leading-tight px-2">
                Founded in Pune
              </p>
            </motion.div>
            {/* Gold accent corner */}
            <div
              className="absolute -top-3 -right-3 w-16 h-16 rounded-full opacity-30 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, #E8C42A 0%, transparent 70%)",
              }}
            />
          </motion.div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{
                y: -4,
                boxShadow: "0 12px 32px rgba(22,72,200,0.18)",
              }}
              className="rounded-2xl p-6 text-center transition-all duration-300"
              style={{
                background: "white",
                border: "1.5px solid rgba(22,72,200,0.12)",
                boxShadow: "0 4px 14px rgba(22,72,200,0.07)",
              }}
              data-ocid={`dms.about.stat.${i + 1}`}
            >
              <p
                className="text-3xl md:text-4xl font-display font-bold"
                style={{ color: "#1648C8" }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p
                className="font-semibold mt-1 text-sm font-body"
                style={{ color: "#0F3499" }}
              >
                {stat.label}
              </p>
              <p className="text-xs text-muted-foreground mt-1 font-body">
                {stat.sublabel}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {VISION_MISSION.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="rounded-2xl p-7 flex gap-5"
              style={{
                background:
                  i === 0
                    ? "linear-gradient(135deg, rgba(22,72,200,0.07) 0%, rgba(15,52,153,0.04) 100%)"
                    : "linear-gradient(135deg, rgba(232,196,42,0.08) 0%, rgba(22,72,200,0.04) 100%)",
                border: `1.5px solid ${i === 0 ? "rgba(22,72,200,0.18)" : "rgba(232,196,42,0.35)"}`,
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mt-1"
                style={{
                  background:
                    i === 0
                      ? "linear-gradient(135deg, #1648C8 0%, #0F3499 100%)"
                      : "linear-gradient(135deg, #E8C42A 0%, #c9a800 100%)",
                }}
              >
                <item.icon
                  className="w-6 h-6"
                  style={{ color: i === 1 ? "#081E5C" : "white" }}
                />
              </div>
              <div>
                <h4
                  className="font-display font-bold text-lg mb-2"
                  style={{ color: "#0F3499" }}
                >
                  {item.title}
                </h4>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
