import { Layout } from "@/components/Layout";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  BookOpen,
  ChevronRight,
  GraduationCap,
  Microscope,
  Star,
} from "lucide-react";
import { motion } from "motion/react";

const COBALT = "#1648C8";
const DEEP_BLUE = "#0F3499";
const MIDNIGHT = "#081E5C";
const GOLD = "#E8C42A";

const DEPARTMENTS = [
  {
    badge: "ME",
    name: "Mechanical Engineering",
    description:
      "Covers thermodynamics, fluid mechanics, manufacturing processes, robotics, and design. Home to cutting-edge labs in CAD/CAM, rapid prototyping, and advanced manufacturing.",
    color: COBALT,
  },
  {
    badge: "CSE",
    name: "Computer Science & Engineering",
    description:
      "Algorithms, AI/ML, software systems, networks, and data science. Equipped with high-performance computing labs, AI research centre, and strong industry partnerships.",
    color: DEEP_BLUE,
  },
  {
    badge: "CE",
    name: "Civil Engineering",
    description:
      "Structural engineering, urban infrastructure, geotechnics, transportation, and environmental engineering. Features structural testing and geotechnical investigation labs.",
    color: COBALT,
  },
  {
    badge: "EE",
    name: "Electrical Engineering",
    description:
      "Power systems, electrical drives, renewable energy, smart grid, and power electronics. Features fully equipped power systems and drives laboratories.",
    color: DEEP_BLUE,
  },
  {
    badge: "E&TC",
    name: "Electronics & Telecommunication",
    description:
      "Communication systems, VLSI design, signal processing, embedded systems, and microwave engineering. State-of-the-art VLSI and communication labs.",
    color: COBALT,
  },
  {
    badge: "ICE",
    name: "Instrumentation & Control",
    description:
      "Automation, process control, industrial instrumentation, sensors and actuators. Features advanced process control simulation labs and IoT research setups.",
    color: DEEP_BLUE,
  },
  {
    badge: "META",
    name: "Metallurgy & Materials Science",
    description:
      "Materials characterization, composites, surface engineering, corrosion, and nano-materials. Equipped with SEM, XRD, and advanced materials testing facilities.",
    color: COBALT,
  },
  {
    badge: "IT",
    name: "Information Technology",
    description:
      "Web technologies, database systems, computer networks, cloud computing, and cybersecurity. Fully equipped networking labs and cloud computing infrastructure.",
    color: DEEP_BLUE,
  },
  {
    badge: "ASH",
    name: "Applied Sciences & Humanities",
    description:
      "Mathematics, physics, chemistry, humanities, and English. Provides the analytical and communication foundation underlying all engineering disciplines at COEP.",
    color: COBALT,
  },
];

const PROGRAMS = [
  {
    title: "B.Tech",
    duration: "4 Years",
    description:
      "Undergraduate engineering programme across 8 disciplines. Admission via JEE Main / MHT-CET, with ~540 seats across all branches.",
    eligibility: "10+2 PCM | JEE Main / MHT-CET",
    departments: "8 core engineering branches",
    icon: BookOpen,
  },
  {
    title: "M.Tech",
    duration: "2 Years",
    description:
      "Postgraduate research-oriented programme with 20+ specializations. Offered in partnership with leading research centres and industry collaborators.",
    eligibility: "B.E. / B.Tech + GATE Score",
    departments: "20+ specializations",
    icon: GraduationCap,
  },
  {
    title: "PhD",
    duration: "3+ Years",
    description:
      "Doctoral programme with world-class research facilities, DST/DRDO funded projects, and international collaboration opportunities.",
    eligibility: "M.Tech / M.Sc + Interview",
    departments: "All engineering departments",
    icon: Microscope,
  },
];

function DeptCard({
  dept,
  index,
}: {
  dept: (typeof DEPARTMENTS)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.2 } }}
      className="rounded-2xl overflow-hidden flex flex-col group"
      style={{
        background: "#fff",
        border: `1.5px solid ${dept.color}20`,
        boxShadow: "0 2px 12px rgba(22,72,200,0.07)",
      }}
      data-ocid={`engineering.dept_card.${index + 1}`}
    >
      {/* Cobalt top accent */}
      <div className="h-1.5 w-full" style={{ backgroundColor: dept.color }} />
      <div className="p-5 flex flex-col flex-1">
        {/* Badge */}
        <div className="flex items-start justify-between mb-3">
          <span
            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase"
            style={{
              backgroundColor: `${dept.color}12`,
              color: dept.color,
              border: `1px solid ${dept.color}25`,
              fontFamily: "Source Sans 3, sans-serif",
            }}
          >
            {dept.badge}
          </span>
        </div>
        {/* Name */}
        <h3
          className="text-base font-bold mb-2 leading-snug"
          style={{ fontFamily: "Playfair Display, serif", color: DEEP_BLUE }}
        >
          {dept.name}
        </h3>
        {/* Description */}
        <p
          className="text-xs leading-relaxed flex-1 mb-4"
          style={{ color: "#6b7280", fontFamily: "Source Sans 3, sans-serif" }}
        >
          {dept.description}
        </p>
        {/* Link */}
        <div className="flex items-center gap-1.5 text-xs font-semibold transition-all duration-200 group-hover:gap-2.5">
          <span
            style={{
              color: dept.color,
              fontFamily: "Source Sans 3, sans-serif",
            }}
          >
            View Details
          </span>
          <ChevronRight
            className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
            style={{ color: dept.color }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function SchoolOfEngineeringPage() {
  return (
    <Layout>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: "400px" }}
        data-ocid="engineering.hero_section"
      >
        {/* Background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('/assets/generated/school-of-engineering-hero.dim_1600x600.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(8,30,92,0.88) 0%, rgba(22,72,200,0.70) 60%, rgba(8,30,92,0.85) 100%)",
          }}
        />
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 xl:px-8 py-16 md:py-24">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-1.5 text-xs text-white/60 mb-6"
            data-ocid="engineering.breadcrumb"
          >
            <Link
              to="/"
              className="hover:text-white transition-colors"
              data-ocid="engineering.breadcrumb.home_link"
            >
              Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <Link
              to="/academics"
              className="hover:text-white transition-colors"
              data-ocid="engineering.breadcrumb.academics_link"
            >
              Academics
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/90">School of Engineering</span>
          </motion.nav>

          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6"
          >
            <Link
              to="/academics"
              className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
              data-ocid="engineering.back_link"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Academics
            </Link>
          </motion.div>

          {/* Icon + label */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-5"
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{
                background: "rgba(255,255,255,0.14)",
                border: "1px solid rgba(255,255,255,0.25)",
              }}
            >
              <Star className="w-7 h-7 text-white" />
            </div>
            <span
              className="text-white/75 text-sm font-semibold uppercase tracking-wider"
              style={{ fontFamily: "Source Sans 3, sans-serif" }}
            >
              COEP Technological University
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            School of Engineering
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.45 }}
            className="text-lg md:text-xl text-white/80 mb-8"
            style={{ fontFamily: "Source Sans 3, sans-serif" }}
          >
            9 Departments &nbsp;|&nbsp; 2000+ Students &nbsp;|&nbsp; 150+
            Faculty
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.55 }}
            className="flex flex-wrap gap-4"
          >
            {[
              { val: "9", label: "Departments" },
              { val: "2000+", label: "Students" },
              { val: "150+", label: "Faculty" },
              { val: "#90", label: "NIRF Rank" },
            ].map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                <span
                  className="font-bold text-white text-base"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {s.val}
                </span>
                <span
                  className="text-white/70 text-xs uppercase tracking-wider"
                  style={{ fontFamily: "Source Sans 3, sans-serif" }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Departments Grid */}
      <section
        className="py-20"
        style={{ backgroundColor: "#f5f7fc" }}
        data-ocid="engineering.departments_section"
      >
        <div className="max-w-[1280px] mx-auto px-4 xl:px-8">
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-center mb-14"
          >
            <span
              className="inline-block text-xs font-bold uppercase tracking-[0.22em] mb-3"
              style={{ color: COBALT, fontFamily: "Source Sans 3, sans-serif" }}
            >
              Academic Disciplines
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{
                fontFamily: "Playfair Display, serif",
                color: DEEP_BLUE,
              }}
            >
              Our Departments
            </h2>
            <p
              className="max-w-2xl mx-auto text-base"
              style={{
                color: "#6b7280",
                fontFamily: "Source Sans 3, sans-serif",
              }}
            >
              Nine departments spanning the breadth of engineering and applied
              sciences, each a centre of academic rigour and research excellence
              at COEP.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {DEPARTMENTS.map((dept, i) => (
              <DeptCard key={dept.badge} dept={dept} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Programs Offered */}
      <section
        className="py-20"
        style={{ backgroundColor: "#fff" }}
        data-ocid="engineering.programs_section"
      >
        <div className="max-w-[1280px] mx-auto px-4 xl:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-center mb-14"
          >
            <span
              className="inline-block text-xs font-bold uppercase tracking-[0.22em] mb-3"
              style={{ color: COBALT, fontFamily: "Source Sans 3, sans-serif" }}
            >
              Degree Programmes
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{
                fontFamily: "Playfair Display, serif",
                color: DEEP_BLUE,
              }}
            >
              Programs Offered
            </h2>
            <p
              className="max-w-2xl mx-auto text-base"
              style={{
                color: "#6b7280",
                fontFamily: "Source Sans 3, sans-serif",
              }}
            >
              From undergraduate engineering to doctoral research — COEP School
              of Engineering offers transformative programmes at every level.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROGRAMS.map((prog, i) => {
              const Icon = prog.icon;
              return (
                <motion.div
                  key={prog.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.12 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="rounded-2xl overflow-hidden flex flex-col group"
                  style={{
                    background: `linear-gradient(135deg, ${MIDNIGHT} 0%, ${COBALT} 100%)`,
                    boxShadow: "0 6px 28px rgba(22,72,200,0.22)",
                  }}
                  data-ocid={`engineering.program_card.${i + 1}`}
                >
                  <div className="p-7 flex flex-col flex-1">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                      style={{
                        background: "rgba(255,255,255,0.14)",
                        border: "1px solid rgba(255,255,255,0.25)",
                      }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex items-end gap-3 mb-2">
                      <h3
                        className="text-3xl font-bold text-white"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        {prog.title}
                      </h3>
                      <span
                        className="text-sm text-white/70 pb-0.5"
                        style={{ fontFamily: "Source Sans 3, sans-serif" }}
                      >
                        {prog.duration}
                      </span>
                    </div>
                    <p
                      className="text-white/75 text-sm leading-relaxed mb-5 flex-1"
                      style={{ fontFamily: "Source Sans 3, sans-serif" }}
                    >
                      {prog.description}
                    </p>
                    {/* Details */}
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <span className="text-white/50 text-xs uppercase tracking-wider w-24 flex-shrink-0 pt-0.5">
                          Eligibility
                        </span>
                        <span
                          className="text-white/85"
                          style={{ fontFamily: "Source Sans 3, sans-serif" }}
                        >
                          {prog.eligibility}
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-white/50 text-xs uppercase tracking-wider w-24 flex-shrink-0 pt-0.5">
                          Departments
                        </span>
                        <span
                          className="text-white/85"
                          style={{ fontFamily: "Source Sans 3, sans-serif" }}
                        >
                          {prog.departments}
                        </span>
                      </div>
                    </div>
                    <a
                      href="/admissions"
                      className="mt-6 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-bold text-sm uppercase tracking-wider transition-all duration-200 hover:brightness-110 hover:scale-105"
                      style={{
                        backgroundColor: GOLD,
                        color: MIDNIGHT,
                        fontFamily: "Source Sans 3, sans-serif",
                      }}
                      data-ocid={`engineering.program_apply.${i + 1}`}
                    >
                      Apply Now
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16"
        style={{
          background: `linear-gradient(135deg, ${MIDNIGHT} 0%, ${COBALT} 100%)`,
        }}
        data-ocid="engineering.cta_section"
      >
        <div className="max-w-[1280px] mx-auto px-4 xl:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p
              className="text-xs font-bold uppercase tracking-widest text-white/60 mb-2"
              style={{ fontFamily: "Source Sans 3, sans-serif" }}
            >
              Ready to Apply?
            </p>
            <h3
              className="text-2xl font-bold text-white"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Join the School of Engineering
            </h3>
            <p
              className="text-sm text-white/70 mt-1"
              style={{ fontFamily: "Source Sans 3, sans-serif" }}
            >
              170+ years of engineering excellence in Pune.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="flex gap-3 flex-shrink-0"
          >
            <a
              href="/admissions"
              className="flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm uppercase tracking-wider transition-all duration-200 hover:brightness-110 hover:scale-105"
              style={{
                backgroundColor: GOLD,
                color: MIDNIGHT,
                fontFamily: "Source Sans 3, sans-serif",
              }}
              data-ocid="engineering.cta_apply_button"
            >
              Apply Now
              <ChevronRight className="w-4 h-4" />
            </a>
            <Link
              to="/academics"
              className="flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm uppercase tracking-wider transition-all duration-200 hover:bg-white/15"
              style={{
                border: "2px solid rgba(255,255,255,0.4)",
                color: "white",
                fontFamily: "Source Sans 3, sans-serif",
              }}
              data-ocid="engineering.cta_back_button"
            >
              All Schools
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
