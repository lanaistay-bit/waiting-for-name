import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BarChart2,
  Briefcase,
  Building2,
  CheckCircle2,
  GraduationCap,
  Megaphone,
  Settings,
  TrendingUp,
  Users,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { type ElementType, useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface DomainCard {
  title: string;
  subtitle: string;
  icon: string;
}

interface Specialization {
  id: string;
  label: string;
  icon: ElementType;
  accentColor: string;
  cards: DomainCard[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const SPECIALIZATIONS: Specialization[] = [
  {
    id: "finance",
    label: "Finance",
    icon: TrendingUp,
    accentColor: "#332C6F",
    cards: [
      {
        title: "Investment Banking",
        subtitle: "Career in capital markets, M&A, financial advisory",
        icon: "💰",
      },
      {
        title: "Portfolio Management",
        subtitle: "Asset allocation, equity/debt analysis, fund management",
        icon: "📈",
      },
      {
        title: "Corporate Finance",
        subtitle: "Budgeting, financial planning, treasury operations",
        icon: "🏢",
      },
      {
        title: "Risk Management",
        subtitle: "Credit risk, market risk, Basel compliance",
        icon: "🛡️",
      },
      {
        title: "Financial Analysis",
        subtitle: "DCF modeling, company valuation, industry research",
        icon: "🔍",
      },
      {
        title: "FinTech",
        subtitle: "Digital payments, blockchain finance, regulatory tech",
        icon: "⚡",
      },
    ],
  },
  {
    id: "operations",
    label: "Operations",
    icon: Settings,
    accentColor: "#0F3399",
    cards: [
      {
        title: "Supply Chain Management",
        subtitle: "Logistics, procurement, inventory optimization",
        icon: "🔗",
      },
      {
        title: "Operations Strategy",
        subtitle: "Process redesign, lean management, six sigma",
        icon: "⚙️",
      },
      {
        title: "Project Management",
        subtitle: "PMO setup, agile delivery, stakeholder coordination",
        icon: "📋",
      },
      {
        title: "Manufacturing Management",
        subtitle: "Plant operations, quality control, lean manufacturing",
        icon: "🏭",
      },
      {
        title: "Consulting",
        subtitle: "Business process improvement, operational due diligence",
        icon: "💼",
      },
      {
        title: "Logistics & Distribution",
        subtitle: "Fleet management, last-mile delivery, warehousing",
        icon: "🚚",
      },
    ],
  },
  {
    id: "marketing",
    label: "Marketing",
    icon: Megaphone,
    accentColor: "#0F3399",
    cards: [
      {
        title: "Brand Management",
        subtitle: "Brand equity, positioning, campaign strategy",
        icon: "🎯",
      },
      {
        title: "Digital Marketing",
        subtitle: "SEO/SEM, social media, performance analytics",
        icon: "📱",
      },
      {
        title: "Consumer Insights",
        subtitle: "Market research, consumer behavior, segmentation",
        icon: "🔎",
      },
      {
        title: "Sales & Distribution",
        subtitle: "Channel strategy, key account management, trade marketing",
        icon: "🤝",
      },
      {
        title: "Product Management",
        subtitle: "Go-to-market, roadmap planning, customer discovery",
        icon: "🚀",
      },
      {
        title: "Media & Advertising",
        subtitle: "Media planning, creative strategy, agency management",
        icon: "📺",
      },
    ],
  },
  {
    id: "hr",
    label: "Human Resources",
    icon: Users,
    accentColor: "#4A3FA0",
    cards: [
      {
        title: "Talent Acquisition",
        subtitle: "Campus hiring, executive search, employer branding",
        icon: "🎓",
      },
      {
        title: "Learning & Development",
        subtitle: "Training design, LMS platforms, leadership programs",
        icon: "📚",
      },
      {
        title: "HR Business Partner",
        subtitle: "Strategic HR, workforce planning, change management",
        icon: "🤝",
      },
      {
        title: "Compensation & Benefits",
        subtitle: "Pay structuring, benchmarking, ESOPs",
        icon: "💎",
      },
      {
        title: "Organizational Development",
        subtitle: "Culture building, OKRs, employee engagement",
        icon: "🌱",
      },
      {
        title: "HR Analytics",
        subtitle: "People data, attrition modeling, workforce insights",
        icon: "📊",
      },
    ],
  },
  {
    id: "analytics",
    label: "Business Analytics",
    icon: BarChart2,
    accentColor: "#1A237E",
    cards: [
      {
        title: "Data Science",
        subtitle: "Machine learning, predictive modeling, Python/R",
        icon: "🧠",
      },
      {
        title: "Business Intelligence",
        subtitle: "Dashboards, KPI tracking, data visualization",
        icon: "📊",
      },
      {
        title: "Analytics Consulting",
        subtitle: "Problem framing, insight delivery, data storytelling",
        icon: "💡",
      },
      {
        title: "Operations Research",
        subtitle: "Optimization models, simulation, supply chain analytics",
        icon: "🔬",
      },
      {
        title: "Product Analytics",
        subtitle: "A/B testing, funnel analysis, growth metrics",
        icon: "📈",
      },
      {
        title: "AI & Automation",
        subtitle: "Process automation, NLP, AI-driven decision support",
        icon: "🤖",
      },
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
    gradient: "linear-gradient(135deg, #1A237E 0%, #0F3399 60%, #081E5C 100%)",
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
    gradient: "linear-gradient(135deg, #0F3399 0%, #1A237E 50%, #283593 100%)",
  },
];

// ─── Domain Card Component ────────────────────────────────────────────────────

function DomainCurveCard({
  card,
  index,
  accentColor,
}: {
  card: DomainCard;
  index: number;
  accentColor: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        scale: 1.03,
        boxShadow: `0 16px 40px ${accentColor}28, 0 2px 8px rgba(0,0,0,0.08)`,
        borderColor: "#F5A623",
      }}
      className="flex flex-col p-6 rounded-2xl cursor-default"
      style={{
        background: "#F8F7FF",
        border: "1.5px solid rgba(51,44,111,0.14)",
        boxShadow: "0 2px 12px rgba(51,44,111,0.07)",
        transition: "border-color 0.25s ease, box-shadow 0.25s ease",
      }}
      data-ocid={`dms.programs.domain_card.${index + 1}`}
    >
      {/* Icon */}
      <div className="text-3xl mb-3 leading-none">{card.icon}</div>

      {/* Title */}
      <h5
        className="font-baskerville font-semibold text-base mb-1.5 leading-snug"
        style={{ color: accentColor }}
      >
        {card.title}
      </h5>

      {/* Subtitle */}
      <p
        className="typo-body font-source text-sm leading-relaxed"
        style={{ color: "#4B5563" }}
      >
        {card.subtitle}
      </p>
    </motion.div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────

export function ProgramTabs() {
  const [activeSpec, setActiveSpec] = useState("finance");

  const activeData = SPECIALIZATIONS.find((s) => s.id === activeSpec);

  return (
    <section
      id="programs"
      className="py-28"
      style={{
        background: "linear-gradient(180deg, #f7f8fc 0%, #eef1f8 100%)",
      }}
      data-ocid="dms.programs_section"
    >
      <div className="container px-4 md:px-8">
        {/* ── Section Header ───────────────────────────────────────────── */}
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
              borderColor: "rgba(51,44,111,0.35)",
              color: "#332C6F",
              background: "rgba(51,44,111,0.05)",
            }}
          >
            Our Programs
          </Badge>
          <h2
            className="typo-section-heading font-cinzel font-bold text-3xl md:text-5xl"
            style={{ color: "#332C6F" }}
          >
            World-Class MBA Programs
          </h2>
          <p className="typo-body font-source text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Two flagship programs engineered for the demands of modern business
            — with the analytical depth that only COEP can offer.
          </p>
        </motion.div>

        {/* ── Main Program Cards ────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {MAIN_PROGRAMS.map((program, i) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{
                y: -8,
                boxShadow: "0 24px 56px rgba(51,44,111,0.22)",
              }}
              className="rounded-2xl overflow-hidden flex flex-col cursor-pointer"
              style={{ boxShadow: "0 8px 32px rgba(51,44,111,0.12)" }}
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
                <h3 className="typo-card-title font-baskerville font-bold text-2xl md:text-3xl text-white leading-tight mb-2">
                  {program.name}
                </h3>
                <p
                  className="font-source text-base font-semibold"
                  style={{ color: "rgba(255,255,255,0.85)" }}
                >
                  {program.tagline}
                </p>
                <div className="flex gap-3 mt-4">
                  {["2 Years", "60 Seats"].map((badge) => (
                    <span
                      key={badge}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold font-inter"
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
                <p className="typo-body font-source text-muted-foreground text-[17px] leading-relaxed mb-6">
                  {program.description}
                </p>
                <ul className="space-y-2.5 mb-6">
                  {program.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5">
                      <CheckCircle2
                        className="w-4 h-4 flex-shrink-0 mt-0.5"
                        style={{ color: "#332C6F" }}
                      />
                      <span className="typo-body font-source text-sm text-foreground">
                        {h}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Button
                    className="w-full typo-btn font-inter font-semibold text-sm rounded-xl"
                    style={{
                      background: "#E87722",
                      color: "white",
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

        {/* ── Specialisations Section ───────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h3
            className="typo-section-heading font-cinzel font-bold text-3xl md:text-4xl mb-4"
            style={{ color: "#332C6F" }}
          >
            Choose Your Specialisation
          </h3>
          <p className="typo-body font-source text-muted-foreground text-lg max-w-xl mx-auto">
            Select a specialisation below to explore career paths and domain
            knowledge
          </p>
        </motion.div>

        {/* ── Tab Row ───────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-14"
          data-ocid="dms.programs.spec_tabs"
        >
          {SPECIALIZATIONS.map((spec, i) => {
            const isActive = activeSpec === spec.id;
            const Icon = spec.icon;
            return (
              <motion.button
                key={spec.id}
                type="button"
                onClick={() => setActiveSpec(spec.id)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="relative flex items-center gap-2.5 px-7 py-3 rounded-full font-semibold text-sm font-inter transition-colors duration-200 overflow-hidden"
                style={{
                  background: isActive ? "#332C6F" : "white",
                  color: isActive ? "white" : "#332C6F",
                  border: isActive ? "2px solid #332C6F" : "2px solid #332C6F",
                  boxShadow: isActive
                    ? "0 8px 24px rgba(51,44,111,0.28)"
                    : "0 2px 8px rgba(51,44,111,0.08)",
                }}
                data-ocid={`dms.programs.spec_tab.${i + 1}`}
                aria-pressed={isActive}
              >
                <Icon className="w-4 h-4 flex-shrink-0" />
                {spec.label}

                {/* Gold active accent dot */}
                {isActive && (
                  <motion.span
                    layoutId="spec-active-dot"
                    className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
                    style={{ background: "#F5A623" }}
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* ── Content Area (Curve Box Cards) ───────────────────────────── */}
        <AnimatePresence mode="wait" initial={false}>
          {activeData && (
            <motion.div
              key={activeSpec}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              data-ocid="dms.programs.spec_content"
            >
              {/* Active specialisation label */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.05 }}
                className="flex items-center gap-3 mb-8"
              >
                <span
                  className="w-1 h-8 rounded-full flex-shrink-0"
                  style={{ background: "#F5A623" }}
                />
                <h4
                  className="font-cinzel font-bold text-xl"
                  style={{ color: activeData.accentColor }}
                >
                  {activeData.label} — Domain Fields of Work
                </h4>
              </motion.div>

              {/* Cards grid */}
              <div
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-4"
                data-ocid="dms.programs.domain_grid"
              >
                {activeData.cards.map((card, i) => (
                  <DomainCurveCard
                    key={card.title}
                    card={card}
                    index={i}
                    accentColor={activeData.accentColor}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
