import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BarChart2,
  CheckCircle2,
  GraduationCap,
  Megaphone,
  Settings,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { type ElementType, useState } from "react";

interface SpecializationCard {
  id: string;
  label: string;
  icon: ElementType;
  accentColor: string;
  textColor: string;
  description: string;
  keyCourses: string[];
}

const SPECIALIZATIONS: SpecializationCard[] = [
  {
    id: "finance",
    label: "Finance",
    icon: TrendingUp,
    accentColor: "#1648C8",
    textColor: "#0F3499",
    description:
      "Equips students with skills in financial analysis, investment banking, corporate finance, and risk management. Develops analytical and quantitative competencies for the financial sector.",
    keyCourses: [
      "Financial Markets",
      "Investment Analysis",
      "Risk Management",
      "Corporate Finance",
    ],
  },
  {
    id: "operations",
    label: "Operations",
    icon: Settings,
    accentColor: "#0F3499",
    textColor: "#081E5C",
    description:
      "Covers supply chain management, operations research, project management, and process optimization. Prepares students for operational excellence in manufacturing and services.",
    keyCourses: [
      "Supply Chain Mgmt",
      "Operations Research",
      "Project Management",
      "Lean Six Sigma",
    ],
  },
  {
    id: "marketing",
    label: "Marketing",
    icon: Megaphone,
    accentColor: "#0EA5E9",
    textColor: "#0369a1",
    description:
      "Builds expertise in brand management, digital marketing, consumer behavior, and marketing research. Shapes strategic thinkers who can drive brand growth in competitive markets.",
    keyCourses: [
      "Brand Management",
      "Digital Marketing",
      "Consumer Behavior",
      "Market Research",
    ],
  },
  {
    id: "hr",
    label: "Human Resources",
    icon: Users,
    accentColor: "#7C3AED",
    textColor: "#5b21b6",
    description:
      "Focuses on talent acquisition, organizational development, employee engagement, and labor relations. Develops HR professionals who align people strategy with business goals.",
    keyCourses: [
      "Talent Acquisition",
      "Org Development",
      "Employee Engagement",
      "Labor Relations",
    ],
  },
  {
    id: "analytics",
    label: "Business Analytics",
    icon: BarChart2,
    accentColor: "#E8C42A",
    textColor: "#8a6e00",
    description:
      "Develops data-driven decision making skills using analytics, AI, and business intelligence tools. Prepares students to leverage data for strategic business insights.",
    keyCourses: [
      "Python for Analytics",
      "Machine Learning",
      "Data Visualization",
      "Business Intelligence",
    ],
  },
];

const MAIN_PROGRAMS = [
  {
    id: "mba-gm",
    name: "MBA — General Management",
    tagline: "Leadership. Strategy. Impact.",
    description:
      "A comprehensive two-year MBA program blending strategic thinking, functional core expertise, and engineering rigour. Graduates emerge as well-rounded business leaders ready for corporate boardrooms and entrepreneurial ventures.",
    highlights: [
      "60 seats | AICTE approved",
      "Industry live projects & summer internship",
      "100% placement assistance",
      "Specializations in Finance, Marketing, Operations, HR",
    ],
    gradient: "linear-gradient(135deg, #1648C8 0%, #0F3499 60%, #081E5C 100%)",
  },
  {
    id: "mba-ba",
    name: "MBA — Business Analytics",
    tagline: "Data. Decisions. Disruption.",
    description:
      "India's premier management-analytics convergence program. Combines deep business acumen with advanced data science — Python, ML, BI tools — producing analytics leaders who drive strategy with data.",
    highlights: [
      "60 seats | AICTE approved",
      "Analytics lab with industry datasets",
      "Tableau, Power BI & Python certifications",
      "Top analytics & consulting placements",
    ],
    gradient: "linear-gradient(135deg, #0F3499 0%, #1648C8 50%, #1a5fcf 100%)",
  },
];

export function ProgramTabs() {
  const [activeSpec, setActiveSpec] = useState<string | null>(null);

  return (
    <section
      id="programs"
      className="py-24"
      style={{
        background: "linear-gradient(180deg, #f7f8fc 0%, #eef1f8 100%)",
      }}
      data-ocid="dms.programs_section"
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
              borderColor: "rgba(22,72,200,0.35)",
              color: "#1648C8",
              background: "rgba(22,72,200,0.05)",
            }}
          >
            Our Programs
          </Badge>
          <h2
            className="text-3xl md:text-5xl font-display font-bold"
            style={{ color: "#0F3499" }}
          >
            World-Class MBA Programs
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto font-body text-lg">
            Two flagship programs engineered for the demands of modern business
            — with the analytical depth that only COEP can offer.
          </p>
        </motion.div>

        {/* Main program cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {MAIN_PROGRAMS.map((program, i) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{
                y: -8,
                boxShadow: "0 24px 56px rgba(22,72,200,0.25)",
              }}
              className="rounded-2xl overflow-hidden flex flex-col cursor-pointer group"
              style={{
                boxShadow: "0 8px 32px rgba(22,72,200,0.14)",
                border: "2px solid transparent",
                transition: "border-color 0.3s ease",
              }}
              onHoverStart={(e) => {
                (e.target as HTMLElement)
                  .closest?.(".rounded-2xl")
                  ?.setAttribute(
                    "style",
                    "border: 2px solid #E8C42A; box-shadow: 0 24px 56px rgba(22,72,200,0.25); border-radius: 1rem;",
                  );
              }}
              data-ocid={`dms.programs.main_card.${i + 1}`}
            >
              {/* Gradient header */}
              <div
                className="p-8 pb-6 flex-shrink-0"
                style={{ background: program.gradient }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    border: "1px solid rgba(255,255,255,0.25)",
                  }}
                >
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white leading-tight mb-2">
                  {program.name}
                </h3>
                <p
                  className="font-body text-base font-semibold"
                  style={{ color: "rgba(255,255,255,0.85)" }}
                >
                  {program.tagline}
                </p>
                <div className="flex gap-3 mt-4">
                  {["2 Years", "60 Seats"].map((badge) => (
                    <span
                      key={badge}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold font-body"
                      style={{
                        background: "rgba(255,255,255,0.18)",
                        color: "white",
                      }}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* White body */}
              <div className="p-8 bg-card flex-1 flex flex-col">
                <p className="text-muted-foreground font-body text-[17px] leading-relaxed mb-6">
                  {program.description}
                </p>
                <ul className="space-y-2.5 mb-6">
                  {program.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5">
                      <CheckCircle2
                        className="w-4 h-4 flex-shrink-0 mt-0.5"
                        style={{ color: "#1648C8" }}
                      />
                      <span className="text-sm font-body text-foreground">
                        {h}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Button
                    className="w-full font-body font-semibold text-sm rounded-xl"
                    style={{
                      background: "#E8C42A",
                      color: "#081E5C",
                      border: "none",
                    }}
                    data-ocid={`dms.programs.cta_button.${i + 1}`}
                  >
                    Explore Program
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Specializations header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h3
            className="text-2xl md:text-3xl font-display font-bold"
            style={{ color: "#0F3499" }}
          >
            Choose Your Specialization
          </h3>
          <p className="text-muted-foreground mt-2 font-body text-lg">
            Five industry-aligned domains to sharpen your competitive edge
          </p>
        </motion.div>

        {/* 5 Specialization Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {SPECIALIZATIONS.map((spec, i) => {
            const Icon = spec.icon;
            const isActive = activeSpec === spec.id;
            return (
              <motion.div
                key={spec.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                whileHover={{
                  y: -8,
                  boxShadow: `0 16px 40px ${spec.accentColor}25`,
                }}
                onClick={() => setActiveSpec(isActive ? null : spec.id)}
                className="rounded-2xl p-6 flex flex-col cursor-pointer transition-all duration-300"
                style={{
                  background: isActive
                    ? `linear-gradient(135deg, ${spec.accentColor}12 0%, ${spec.accentColor}05 100%)`
                    : "white",
                  border: isActive
                    ? `2px solid ${spec.accentColor}`
                    : "1.5px solid rgba(22,72,200,0.10)",
                  boxShadow: isActive
                    ? `0 12px 36px ${spec.accentColor}22`
                    : "0 2px 12px rgba(22,72,200,0.06)",
                }}
                data-ocid={`dms.programs.spec_card.${i + 1}`}
              >
                {/* Icon */}
                <motion.div
                  animate={{ scale: isActive ? 1.1 : 1 }}
                  transition={{ type: "spring", stiffness: 280 }}
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                  style={{
                    background: isActive
                      ? `linear-gradient(135deg, ${spec.accentColor} 0%, ${spec.textColor} 100%)`
                      : `${spec.accentColor}14`,
                  }}
                >
                  <Icon
                    className="w-7 h-7"
                    style={{ color: isActive ? "white" : spec.accentColor }}
                  />
                </motion.div>

                <h4
                  className="font-display font-bold text-base mb-2"
                  style={{ color: isActive ? spec.textColor : "#0F3499" }}
                >
                  {spec.label}
                </h4>

                <p
                  className="text-xs font-body leading-relaxed mb-3"
                  style={{ color: isActive ? "#374151" : "#6b7280" }}
                >
                  {isActive
                    ? spec.description
                    : `${spec.description.slice(0, 80)}…`}
                </p>

                {/* Key courses */}
                <div className="space-y-1.5 mt-auto">
                  {spec.keyCourses.slice(0, isActive ? 4 : 2).map((course) => (
                    <div
                      key={course}
                      className="flex items-center gap-1.5 text-[11px] font-body"
                      style={{ color: isActive ? spec.textColor : "#6b7280" }}
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: spec.accentColor }}
                      />
                      {course}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
