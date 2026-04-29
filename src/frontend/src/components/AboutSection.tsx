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
    value: 40,
    suffix: "+",
    label: "Faculty",
    sublabel: "Visiting Faculty, Industry Experts & Permanent Faculty",
  },
  {
    value: 100,
    suffix: "+",
    label: "Industry MoUs",
    sublabel: "Live Corporate Partnerships & Collaborations",
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
    text: "Empowering Visionaries, Transforming Leaders: Shaping the Future of Business Excellence at COEP Technological University.",
  },
  {
    icon: Star,
    title: "Mission",
    text: "To foster a culture of academic excellence, providing a cutting-edge curriculum that integrates theory and practical insights. To cultivate visionary and ethical leaders by instilling a strong foundation of leadership skills, critical thinking, and strategic decision-making through experiential learning, industry exposure, and mentorship. To make a positive impact on the corporate community and society at large.",
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
            className="px-4 py-1 mb-4 typo-section-label"
            style={{
              borderColor: "rgba(26,35,126,0.4)",
              color: "#1A237E",
              background: "rgba(26,35,126,0.05)",
            }}
          >
            About Us
          </Badge>
          <h2
            className="typo-section-heading font-cinzel font-bold"
            style={{ color: "#0F3399" }}
          >
            Shaping Future Business Leaders
          </h2>
          <p className="typo-body font-source text-muted-foreground mt-4 max-w-xl mx-auto">
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
              className="typo-section-heading font-cinzel font-bold leading-snug"
              style={{ color: "#0F3399", fontSize: "1.6rem" }}
            >
              Department of Management Studies,{" "}
              <span style={{ color: "#1A237E" }}>COEP Tech</span>
            </h3>
            <p className="typo-body font-source text-muted-foreground leading-relaxed">
              Established in academic year 2020-21, The department has grown by
              leaps and bounds and is poised to make a mark in management
              education. One of its key strengths lies in its exceptional
              faculty, comprising of experienced industry professionals and
              research scholars. Our faculty, staff, and students work together
              in harmony to create a vibrant and supportive environment for
              personal as well as professional growth. The department places a
              strong emphasis on producing business leaders for tomorrow's
              generation. Therefore, we foster student driven environment under
              the supervision of leadership of COEP Technological University.
            </p>
            <p className="typo-body font-source text-muted-foreground leading-relaxed">
              Our belief of adding values to corporate world and society at
              large drives us to take initiatives like Knowledge Resource Centre
              for HR professionals across industries, preparing value papers for
              corporate challenges, fostering knowledge sharing through Self
              Help Groups (finance). Seeing the trajectory so far, we take pride
              to mention that both the previously passed batches are doing well
              with their recruiters. We love to be generous and therefore we add
              values to our alumni by constantly engaging with them under the
              initiative of Alumni Engagement Centre.
            </p>
            <p className="typo-body font-source text-muted-foreground leading-relaxed">
              We are proud to be a part of COEP Technological University and
              position ourselves before corporate community as their reliable
              partner in addressing the business challenges and as a key driver
              for innovations to uphold the society.
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
                    style={{ backgroundColor: "rgba(26,35,126,0.1)" }}
                  >
                    <item.icon
                      className="w-4 h-4"
                      style={{ color: "#1A237E" }}
                    />
                  </div>
                  <span className="typo-body font-source text-sm text-muted-foreground">
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
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full typo-support text-sm font-semibold"
                  style={{
                    background: "rgba(26,35,126,0.08)",
                    border: "1px solid rgba(26,35,126,0.25)",
                    color: "#0F3399",
                  }}
                >
                  <badge.icon
                    className="w-3.5 h-3.5"
                    style={{ color: "#1A237E" }}
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
                boxShadow: "0 12px 32px rgba(26,35,126,0.18)",
              }}
              className="rounded-2xl p-6 text-center transition-all duration-300"
              style={{
                background: "white",
                border: "1.5px solid rgba(26,35,126,0.12)",
                boxShadow: "0 4px 14px rgba(26,35,126,0.07)",
              }}
              data-ocid={`dms.about.stat.${i + 1}`}
            >
              <p className="typo-stat-number" style={{ color: "#1A237E" }}>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p
                className="typo-stat-label font-inter font-semibold mt-1"
                style={{ color: "#0F3399" }}
              >
                {stat.label}
              </p>
              <p className="typo-stat-label font-source text-muted-foreground mt-1">
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
                    ? "linear-gradient(135deg, rgba(26,35,126,0.07) 0%, rgba(15,51,153,0.04) 100%)"
                    : "linear-gradient(135deg, rgba(232,196,42,0.08) 0%, rgba(26,35,126,0.04) 100%)",
                border: `1.5px solid ${i === 0 ? "rgba(26,35,126,0.18)" : "rgba(232,196,42,0.35)"}`,
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mt-1"
                style={{
                  background:
                    i === 0
                      ? "linear-gradient(135deg, #1A237E 0%, #0F3399 100%)"
                      : "linear-gradient(135deg, #E8C42A 0%, #b89a18 100%)",
                }}
              >
                <item.icon
                  className="w-6 h-6"
                  style={{ color: i === 1 ? "#081E5C" : "white" }}
                />
              </div>
              <div>
                <h4
                  className="typo-section-heading font-cinzel font-bold text-lg mb-2"
                  style={{ color: "#0F3399", fontSize: "1.1rem" }}
                >
                  {item.title}
                </h4>
                <p className="typo-body font-source text-muted-foreground typo-body text-sm leading-relaxed">
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
