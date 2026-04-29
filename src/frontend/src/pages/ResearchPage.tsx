import { Layout } from "@/components/Layout";
import SubTabRibbon from "@/components/SubTabRibbon";
import { useNavigate, useParams } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BookOpen,
  ChevronRight,
  ExternalLink,
  FileText,
  FlaskConical,
  Globe,
  Handshake,
  Lightbulb,
  Microscope,
  Rocket,
  ShieldCheck,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

// ─── Brand colours ───────────────────────────────────────────────────────────
const COBALT = "#1A237E";
const DEEP_BLUE = "#0F3399";
const MIDNIGHT = "#081E5C";
const GOLD = "#E8C42A";

// ─── Sub-tab definitions ─────────────────────────────────────────────────────
const TABS = [
  { id: "overview", label: "Overview" },
  { id: "research-centers", label: "Research Centers" },
  { id: "innovation", label: "Innovation & Incubation" },
  { id: "publications", label: "Publications" },
  { id: "patents", label: "Patents & IPR" },
  { id: "collaborations", label: "Collaborations" },
];

// ─── Animated counter hook ────────────────────────────────────────────────────
function useCountUp(target: number, duration = 1800, started = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setValue(target);
    };
    requestAnimationFrame(step);
  }, [target, duration, started]);
  return value;
}

// ─── Scroll-triggered visibility hook ────────────────────────────────────────
function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

// ─── Section wrapper ──────────────────────────────────────────────────────────
function Section({
  children,
  alt = false,
  id,
}: { children: React.ReactNode; alt?: boolean; id?: string }) {
  return (
    <section
      id={id}
      className="py-16 px-4 xl:px-8"
      style={{ background: alt ? "#f4f7fe" : "#ffffff" }}
    >
      <div className="max-w-[1280px] mx-auto">{children}</div>
    </section>
  );
}

function SectionHeading({
  label,
  title,
  subtitle,
}: { label: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-12">
      <span
        className="typo-section-label inline-block mb-3 px-3 py-1 rounded-full"
        style={{ background: `${COBALT}18`, color: COBALT }}
      >
        {label}
      </span>
      <h2
        className="typo-section-heading font-bold mb-4"
        style={{ color: DEEP_BLUE }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="typo-body-lg max-w-2xl" style={{ color: "#555" }}>
          {subtitle}
        </p>
      )}
      <div
        className="mt-5 h-[3px] w-16 rounded"
        style={{ background: COBALT }}
      />
    </div>
  );
}

// ─── HERO SECTION ─────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <div
      className="relative w-full flex flex-col items-center justify-center text-center overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${DEEP_BLUE} 0%, ${COBALT} 45%, ${MIDNIGHT} 100%)`,
        minHeight: 420,
        paddingTop: "80px",
        paddingBottom: "80px",
      }}
      data-ocid="research.hero"
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(26, 35, 126, 0.18) 0%, transparent 70%)",
        }}
      />
      <div className="relative z-10 px-4 max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav
          className="flex items-center justify-center gap-2 mb-6 text-sm fade-in-down"
          style={{ fontFamily: "Source Sans 3, sans-serif" }}
        >
          <a
            href="/"
            style={{ color: "rgba(255,255,255,0.6)" }}
            className="hover:text-white transition-colors"
          >
            Home
          </a>
          <ChevronRight size={14} style={{ color: "rgba(255,255,255,0.4)" }} />
          <span style={{ color: "rgba(255,255,255,0.75)" }}>Research</span>
        </nav>
        {/* Badge */}
        <span
          className="typo-section-label inline-block mb-5 px-4 py-1.5 rounded-full fade-in-up"
          style={{
            background: "rgba(255,255,255,0.15)",
            color: "rgba(255,255,255,0.9)",
            border: "1px solid rgba(255,255,255,0.25)",
            animationDelay: "0.1s",
          }}
        >
          COEP Technological University
        </span>
        {/* H1 */}
        <h1
          className="typo-hero-heading text-white mb-5 fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Research &amp; Innovation
        </h1>
        <p
          className="typo-hero-desc text-white/80 max-w-2xl mx-auto mb-8 fade-in-up"
          style={{ animationDelay: "0.35s" }}
        >
          Advancing Knowledge, Shaping the Future — through rigorous research,
          entrepreneurial spirit, and global collaboration since 1854.
        </p>
        {/* Quick stats */}
        <div
          className="flex flex-wrap justify-center gap-4 md:gap-8 fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          {[
            { icon: <FileText size={16} />, label: "500+ Publications" },
            {
              icon: <FlaskConical size={16} />,
              label: "1000+ Research Projects",
            },
            { icon: <ShieldCheck size={16} />, label: "300+ PhD Scholars" },
            { icon: <Handshake size={16} />, label: "50+ Industry Partners" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 text-white/90 text-sm font-semibold px-3 py-2 rounded-full typo-support"
              style={{
                background: "rgba(255,255,255,0.09)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <span style={{ color: "white" }}>{item.icon}</span>
              {item.label}
            </div>
          ))}
        </div>
      </div>
      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(8, 30, 92, 0.3))",
        }}
      />
    </div>
  );
}

// ─── OVERVIEW TAB ─────────────────────────────────────────────────────────────
function StatCounter({
  value,
  suffix,
  label,
  started,
  delay = 0,
}: {
  value: number;
  suffix: string;
  label: string;
  started: boolean;
  delay?: number;
}) {
  const count = useCountUp(value, 1800, started);
  return (
    <div
      className="text-center p-6 rounded-2xl border-2 transition-smooth hover:shadow-premium hover:-translate-y-1"
      style={{
        borderColor: `${COBALT}25`,
        background: "#fff",
        animationDelay: `${delay}ms`,
      }}
    >
      <div className="typo-stat-number mb-1" style={{ color: COBALT }}>
        {count}
        {suffix}
      </div>
      <div
        className="typo-stat-label uppercase tracking-widest mt-1"
        style={{ color: "#666" }}
      >
        {label}
      </div>
    </div>
  );
}

function OverviewTab() {
  const { ref, visible } = useInView(0.2);

  const highlights = [
    {
      icon: <Microscope size={24} />,
      title: "World-Class Research",
      desc: "COEP's research ecosystem spans 20+ departments with cutting-edge laboratories, funded by DST, SERB, DRDO, ISRO and leading industries.",
    },
    {
      icon: <Rocket size={24} />,
      title: "Innovation Culture",
      desc: "Bhau Institute incubates 50+ startups and has facilitated ₹15 Cr+ in startup funding, nurturing entrepreneurs from idea to scale.",
    },
    {
      icon: <Globe size={24} />,
      title: "Global Collaborations",
      desc: "Active research partnerships with TU Darmstadt, University of Sheffield, Drexel University, NTNU, and 15+ international universities.",
    },
    {
      icon: <Award size={24} />,
      title: "Doctoral Excellence",
      desc: "Over 300 active PhD scholars mentored by 70+ research supervisors across all engineering and management disciplines.",
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Industry-Funded Projects",
      desc: "₹100+ Crore in funded research projects from government bodies and industry, driving applied research with real-world impact.",
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "IP & Patents",
      desc: "58+ patents filed and 32+ granted, backed by a robust IP policy and RIIL cell for commercialization support.",
    },
  ];

  return (
    <>
      <Section id="overview">
        <SectionHeading
          label="Research at COEP"
          title="Pioneering Research Excellence"
          subtitle="For over 170 years, COEP Technological University has been at the forefront of engineering education and research — advancing human knowledge and driving societal impact."
        />
        {/* Animated Stats */}
        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-16"
        >
          {[
            { value: 500, suffix: "+", label: "Research Projects", delay: 0 },
            { value: 1000, suffix: "+", label: "Publications", delay: 120 },
            { value: 300, suffix: "+", label: "PhD Scholars", delay: 240 },
            { value: 50, suffix: "+", label: "Industry Partners", delay: 360 },
            {
              value: 100,
              suffix: "+",
              label: "₹Cr Funded Projects",
              delay: 480,
            },
          ].map((s) => (
            <StatCounter key={s.label} {...s} started={visible} />
          ))}
        </div>

        {/* Research Culture paragraph */}
        <div
          className="mb-16 rounded-2xl p-8 md:p-12"
          style={{
            background: `linear-gradient(135deg, ${DEEP_BLUE}08, ${COBALT}10)`,
            border: `1px solid ${COBALT}18`,
          }}
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3
                className="typo-section-heading font-bold mb-4"
                style={{ color: DEEP_BLUE }}
              >
                A Legacy of Scientific Excellence
              </h3>
              <p className="typo-body mb-4" style={{ color: "#555" }}>
                COEP Technological University, established in 1854, is among
                India's oldest and most prestigious engineering institutions.
                Our research culture thrives on interdisciplinary collaboration,
                industry engagement, and a relentless pursuit of innovation.
                From fundamental sciences to cutting-edge engineering, our
                researchers address the most pressing challenges of our time.
              </p>
              <p className="typo-body" style={{ color: "#555" }}>
                Guided by our vision of "Technology for Societal
                Transformation," COEP researchers work in close partnership with
                government agencies, global universities, and leading industries
                to produce research that matters — research that shapes policy,
                drives industry, and improves lives.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "NAAC Grade", value: "A++" },
                { label: "NIRF Rank", value: "Top 50" },
                { label: "Active Labs", value: "80+" },
                { label: "Funded Since", value: "1854" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl p-5 text-center"
                  style={{
                    background: "#fff",
                    border: `1px solid ${COBALT}20`,
                  }}
                >
                  <div
                    className="typo-stat-number mb-1"
                    style={{ color: COBALT }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="typo-stat-label uppercase tracking-wider"
                    style={{ color: "#888" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights grid */}
        <h3
          className="typo-section-heading font-bold mb-8"
          style={{ color: DEEP_BLUE }}
        >
          Research Highlights
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((h, i) => (
            <div
              key={h.title}
              className="rounded-2xl border p-7 transition-smooth hover:shadow-premium hover:-translate-y-1 group"
              style={{
                borderColor: `${COBALT}20`,
                background: "#fff",
                animationDelay: `${i * 80}ms`,
              }}
              data-ocid={`research.overview.highlight.${i + 1}`}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-smooth group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${COBALT}20, ${COBALT}10)`,
                  color: COBALT,
                }}
              >
                {h.icon}
              </div>
              <h4 className="typo-card-title mb-3" style={{ color: DEEP_BLUE }}>
                {h.title}
              </h4>
              <p className="typo-card-desc" style={{ color: "#666" }}>
                {h.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Research Funding Banner */}
      <section
        className="py-14 px-4"
        style={{
          background: `linear-gradient(135deg, ${DEEP_BLUE}, ${MIDNIGHT})`,
        }}
      >
        <div className="max-w-[1280px] mx-auto text-center">
          <p className="typo-section-label text-white/70 mb-2">
            Major Funding Partners
          </p>
          <h3 className="typo-section-heading font-bold text-white mb-8">
            Supported by India's Premier Research Bodies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "DST",
              "SERB",
              "DRDO",
              "ISRO",
              "CSIR",
              "DBT",
              "MNRE",
              "MeitY",
              "BIRAC",
              "BARC",
              "AICTE",
              "NRF",
            ].map((agency) => (
              <span
                key={agency}
                className="px-5 py-2 rounded-full text-sm typo-support font-bold"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  color: "rgba(255,255,255,0.9)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                {agency}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// ─── RESEARCH CENTERS TAB ─────────────────────────────────────────────────────
const CENTERS = [
  {
    icon: <Zap size={22} />,
    name: "AR-VR Center of Excellence",
    desc: "Immersive technology research in augmented and virtual reality for education, healthcare, and industrial training applications.",
    tag: "Emerging Tech",
  },
  {
    icon: <FlaskConical size={22} />,
    name: "Design-To-Make Center",
    desc: "Bridging design and manufacturing — from concept to prototype to product using advanced fabrication and rapid prototyping tools.",
    tag: "Manufacturing",
  },
  {
    icon: <TrendingUp size={22} />,
    name: "Smart Manufacturing CoE",
    desc: "Industry 4.0, automation, digital twins, and AI-driven smart factory solutions in collaboration with Siemens and L&T.",
    tag: "Industry 4.0",
  },
  {
    icon: <Zap size={22} />,
    name: "Power Electronics & Drives",
    desc: "Energy systems, motor drives, power converters, and renewable energy integration research funded by MNRE and ISRO.",
    tag: "Energy",
  },
  {
    icon: <Award size={22} />,
    name: "Structural Engineering Center",
    desc: "Earthquake-resistant design, structural health monitoring, and advanced concrete research for India's infrastructure needs.",
    tag: "Civil",
  },
  {
    icon: <Rocket size={22} />,
    name: "Computational Fluid Dynamics Lab",
    desc: "Aerospace and fluid research using CFD simulation for turbomachinery, aerodynamics, and HVAC system optimization.",
    tag: "Aerospace",
  },
  {
    icon: <ShieldCheck size={22} />,
    name: "Cyber Security & IoT Lab",
    desc: "Network security, embedded systems security, blockchain applications, and IoT protocol research for critical infrastructure.",
    tag: "Security",
  },
  {
    icon: <Globe size={22} />,
    name: "Renewable Energy Lab",
    desc: "Solar, wind, hydrogen fuel cells, and energy storage technologies — advancing India's clean energy transition goals.",
    tag: "Clean Energy",
  },
];

function ResearchCentersTab() {
  const { ref, visible } = useInView(0.1);

  return (
    <Section id="research-centers" alt>
      <SectionHeading
        label="Centers of Excellence"
        title="Research Centers & Labs"
        subtitle="COEP houses 8 specialized centers of excellence that drive cutting-edge research across engineering, technology, and management disciplines."
      />
      <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CENTERS.map((center, i) => (
          <div
            key={center.name}
            className="rounded-2xl overflow-hidden border transition-smooth hover:shadow-premium hover:-translate-y-2 group"
            style={{
              borderColor: `${COBALT}20`,
              background: "#fff",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(32px)",
              transition: `opacity 0.6s ease ${i * 100}ms, transform 0.6s ease ${i * 100}ms, box-shadow 0.3s ease`,
            }}
            data-ocid={`research.center.card.${i + 1}`}
          >
            {/* Top accent bar */}
            <div
              className="h-1.5"
              style={{
                background: `linear-gradient(90deg, ${COBALT}, ${DEEP_BLUE})`,
              }}
            />
            <div className="p-7">
              <div className="flex items-start justify-between mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-smooth group-hover:scale-110"
                  style={{ background: `${COBALT}15`, color: COBALT }}
                >
                  {center.icon}
                </div>
                <span
                  className="typo-section-label px-2 py-1 rounded-full"
                  style={{ background: `${COBALT}10`, color: COBALT }}
                >
                  {center.tag}
                </span>
              </div>
              <h4 className="typo-card-title mb-3" style={{ color: DEEP_BLUE }}>
                {center.name}
              </h4>
              <p className="typo-card-desc mb-5" style={{ color: "#666" }}>
                {center.desc}
              </p>
              <button
                type="button"
                className="typo-btn inline-flex items-center gap-1.5 text-sm transition-smooth group-hover:gap-3"
                style={{ color: COBALT }}
                data-ocid={`research.center.learn_more.${i + 1}`}
              >
                Learn More <ArrowRight size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Strip */}
      <div
        className="mt-14 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        style={{ background: `${COBALT}08`, border: `1px solid ${COBALT}20` }}
      >
        <div>
          <h4 className="typo-card-title mb-2" style={{ color: DEEP_BLUE }}>
            Collaborate with Our Research Centers
          </h4>
          <p className="typo-body" style={{ color: "#666" }}>
            Industry partners, government bodies, and international universities
            are welcome to collaborate.
          </p>
        </div>
        <a
          href="https://www.coeptech.ac.in/research"
          target="_blank"
          rel="noreferrer"
          className="typo-btn flex-shrink-0 inline-flex items-center gap-2 px-8 py-3 rounded-lg uppercase tracking-wider transition-smooth hover:shadow-cobalt hover:-translate-y-0.5"
          style={{ background: GOLD, color: MIDNIGHT }}
          data-ocid="research.centers.collaborate_button"
        >
          Get in Touch <ArrowRight size={16} />
        </a>
      </div>
    </Section>
  );
}

// ─── INNOVATION & INCUBATION TAB ──────────────────────────────────────────────
function InnovationTab() {
  const { ref: leftRef, visible: leftVisible } = useInView(0.3);
  const { ref: rightRef, visible: rightVisible } = useInView(0.3);

  const bhauHighlights = [
    {
      icon: <Rocket size={20} />,
      title: "50+ Startups",
      sub: "Incubated & Supported",
    },
    {
      icon: <TrendingUp size={20} />,
      title: "₹15 Cr+",
      sub: "Funding Raised by Startups",
    },
    {
      icon: <Users size={20} />,
      title: "Innovation Labs",
      sub: "& Co-Working Space",
    },
  ];

  const services = [
    {
      icon: <Lightbulb size={20} />,
      title: "Idea Validation",
      desc: "Expert-guided sessions to validate your business idea with market research and feasibility analysis.",
    },
    {
      icon: <FlaskConical size={20} />,
      title: "Prototyping Labs",
      desc: "Access to 3D printers, CNC machines, electronics labs, and fabrication facilities.",
    },
    {
      icon: <Users size={20} />,
      title: "Mentorship Network",
      desc: "40+ industry mentors, investors, and serial entrepreneurs guiding startups from ideation to market.",
    },
    {
      icon: <TrendingUp size={20} />,
      title: "Seed Funding",
      desc: "Up to ₹5 Lakhs seed support for selected startups in the incubation programme.",
    },
    {
      icon: <Globe size={20} />,
      title: "Global Connections",
      desc: "Linkages with global accelerators, IITs, US universities, and Silicon Valley networks.",
    },
    {
      icon: <Award size={20} />,
      title: "Legal & IP Support",
      desc: "Patent filing assistance, company incorporation, and legal advisory services.",
    },
  ];

  return (
    <>
      <Section id="innovation">
        {/* Bhau Institute Feature Banner */}
        <div
          className="rounded-3xl overflow-hidden mb-16"
          style={{
            background: `linear-gradient(135deg, ${DEEP_BLUE} 0%, ${COBALT} 60%, ${MIDNIGHT} 100%)`,
          }}
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left: text */}
            <div
              ref={leftRef}
              className="p-10 md:p-14 flex flex-col justify-center"
              style={{
                opacity: leftVisible ? 1 : 0,
                transform: leftVisible ? "translateX(0)" : "translateX(-32px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
              }}
            >
              <span
                className="typo-section-label inline-block mb-4 px-3 py-1 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  color: "rgba(255,255,255,0.9)",
                  border: "1px solid rgba(255,255,255,0.25)",
                }}
              >
                Flagship Innovation Cell
              </span>
              <h2 className="typo-section-heading font-bold text-white mb-5">
                Bhau Institute of Innovation, Entrepreneurship &amp; Leadership
              </h2>
              <p className="typo-body text-white/80 mb-8">
                Bhau Institute is COEP's flagship centre for innovation and
                entrepreneurship. Named after Bhalchandra R. Bhave (Bhau), it
                has been nurturing the entrepreneurial spirit of COEP students
                and faculty since 2010, transforming bold ideas into successful
                ventures.
              </p>
              <a
                href="https://www.bhauvip.com/"
                target="_blank"
                rel="noreferrer"
                className="typo-btn inline-flex items-center gap-2 px-8 py-3 rounded-lg uppercase tracking-wider transition-smooth hover:shadow-gold self-start"
                style={{ background: GOLD, color: MIDNIGHT }}
                data-ocid="research.bhau.explore_button"
              >
                Explore Bhau Institute <ExternalLink size={14} />
              </a>
            </div>
            {/* Right: highlight cards */}
            <div
              ref={rightRef}
              className="p-10 md:p-14 flex flex-col justify-center gap-5"
              style={{
                opacity: rightVisible ? 1 : 0,
                transform: rightVisible ? "translateX(0)" : "translateX(32px)",
                transition:
                  "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
              }}
            >
              {bhauHighlights.map((h, i) => (
                <div
                  key={h.title}
                  className="flex items-center gap-5 rounded-2xl p-5"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    animationDelay: `${i * 120}ms`,
                  }}
                  data-ocid={`research.bhau.highlight.${i + 1}`}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: COBALT, color: "white" }}
                  >
                    {h.icon}
                  </div>
                  <div>
                    <div className="typo-stat-number text-white">{h.title}</div>
                    <div className="typo-stat-label text-white/70">{h.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <SectionHeading
          label="Innovation Services"
          title="What We Offer"
          subtitle="Bhau Institute provides end-to-end support for student and faculty entrepreneurs — from ideation to market launch."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="rounded-2xl border p-6 transition-smooth hover:shadow-premium hover:-translate-y-1 group"
              style={{ borderColor: `${COBALT}20`, background: "#fff" }}
              data-ocid={`research.innovation.service.${i + 1}`}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-smooth group-hover:scale-110"
                style={{ background: `${COBALT}15`, color: COBALT }}
              >
                {s.icon}
              </div>
              <h4 className="typo-card-title mb-2" style={{ color: DEEP_BLUE }}>
                {s.title}
              </h4>
              <p className="typo-card-desc" style={{ color: "#666" }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Programme CTA */}
        <div
          className="rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ background: `${COBALT}08`, border: `1px solid ${COBALT}20` }}
          data-ocid="research.incubation.cta"
        >
          <div>
            <h4 className="typo-card-title mb-2" style={{ color: DEEP_BLUE }}>
              Apply for the 2025–26 Incubation Cohort
            </h4>
            <p className="typo-body" style={{ color: "#666" }}>
              Applications are open for the next batch of startups. Join 50+
              ventures already incubated at COEP.
            </p>
          </div>
          <a
            href="https://www.bhauvip.com/"
            target="_blank"
            rel="noreferrer"
            className="typo-btn flex-shrink-0 inline-flex items-center gap-2 px-8 py-3 rounded-lg uppercase tracking-wider transition-smooth hover:shadow-cobalt hover:-translate-y-0.5"
            style={{ background: COBALT, color: "#fff" }}
            data-ocid="research.incubation.apply_button"
          >
            Apply Now <ArrowRight size={16} />
          </a>
        </div>
      </Section>
    </>
  );
}

// ─── PUBLICATIONS TAB ─────────────────────────────────────────────────────────
const PUBS = [
  {
    title:
      "Deep Learning Approaches for Structural Health Monitoring in Civil Infrastructure",
    authors: "P. K. Sharma, A. R. Joshi, S. M. Patil",
    journal: "Journal of Structural Engineering (ASCE)",
    year: 2024,
    doi: "10.1061/JSENDH.STENG-1234",
    dept: "Civil Engineering",
    impactFactor: 3.8,
  },
  {
    title:
      "Energy-Efficient VLSI Design for IoT Edge Devices using FinFET Technology",
    authors: "R. D. Kulkarni, P. N. Deshpande",
    journal: "IEEE Transactions on VLSI Systems",
    year: 2024,
    doi: "10.1109/TVLSI.2024.8821",
    dept: "Electronics",
    impactFactor: 4.1,
  },
  {
    title:
      "Machine Learning Techniques for Predictive Maintenance in Smart Manufacturing",
    authors: "S. A. Meshram, V. P. More, R. K. Singh",
    journal: "International Journal of Production Economics",
    year: 2024,
    doi: "10.1016/j.ijpe.2024.109134",
    dept: "Management",
    impactFactor: 9.8,
  },
  {
    title:
      "Nanocomposite Coatings for Enhanced Tribological Properties of High-Strength Steel",
    authors: "A. B. Nair, S. T. Phadke",
    journal: "Wear: An International Journal on the Science & Technology",
    year: 2023,
    doi: "10.1016/j.wear.2023.204567",
    dept: "Mechanical",
    impactFactor: 5.3,
  },
  {
    title:
      "Autonomous Vehicle Path Planning Using Reinforcement Learning in Urban Environments",
    authors: "N. V. Kulkarni, P. R. Sawant, M. A. Jogi",
    journal: "IEEE Transactions on Intelligent Transportation Systems",
    year: 2024,
    doi: "10.1109/TITS.2024.1234567",
    dept: "Computer Science",
    impactFactor: 8.5,
  },
  {
    title:
      "Hydrogen Production via Photo-Catalytic Water Splitting using Bismuth Vanadate Composites",
    authors: "S. M. Patil, A. R. Kulkarni",
    journal: "Applied Catalysis B: Environmental",
    year: 2023,
    doi: "10.1016/j.apcatb.2023.122345",
    dept: "Chemical Engineering",
    impactFactor: 22.1,
  },
];

const DEPT_FILTERS = [
  "All",
  "Civil Engineering",
  "Electronics",
  "Management",
  "Mechanical",
  "Computer Science",
  "Chemical Engineering",
];

function PublicationsTab() {
  const [activeDept, setActiveDept] = useState("All");
  const filtered =
    activeDept === "All" ? PUBS : PUBS.filter((p) => p.dept === activeDept);

  return (
    <Section id="publications">
      <SectionHeading
        label="Research Output"
        title="Recent Publications"
        subtitle="COEP researchers publish in top-tier international journals and conferences, contributing to global scientific advancement across all disciplines."
      />

      {/* Pub stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-12">
        {[
          { value: "1,000+", label: "Journal Publications" },
          { value: "400+", label: "Conference Papers" },
          { value: "6.4", label: "Avg. Impact Factor" },
          { value: "8,500+", label: "Total Citations" },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-2xl p-5 text-center border-2 transition-smooth hover:shadow-premium hover:-translate-y-0.5"
            style={{ borderColor: `${COBALT}25`, background: "#fff" }}
          >
            <div className="typo-stat-number mb-1" style={{ color: COBALT }}>
              {s.value}
            </div>
            <div
              className="typo-stat-label uppercase tracking-wider mt-1"
              style={{ color: "#777" }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Dept filter */}
      <div
        className="flex flex-wrap gap-2 mb-8"
        data-ocid="research.publications.filter_row"
      >
        {DEPT_FILTERS.map((d) => (
          <button
            type="button"
            key={d}
            onClick={() => setActiveDept(d)}
            className="typo-btn px-4 py-1.5 rounded-full text-sm transition-all duration-200"
            style={{
              background: activeDept === d ? COBALT : `${COBALT}10`,
              color: activeDept === d ? "#fff" : COBALT,
              border: `1px solid ${activeDept === d ? COBALT : `${COBALT}25`}`,
            }}
            data-ocid={`research.publications.dept_filter.${d.toLowerCase().replace(/[\s&]+/g, "-")}`}
          >
            {d}
          </button>
        ))}
      </div>

      {/* Publication cards */}
      <div className="flex flex-col gap-5 mb-10">
        {filtered.map((pub, i) => (
          <div
            key={pub.doi}
            className="rounded-2xl border p-7 transition-smooth hover:shadow-premium hover:-translate-y-0.5 group"
            style={{
              borderLeft: `4px solid ${COBALT}`,
              borderTop: `1px solid ${COBALT}18`,
              borderRight: `1px solid ${COBALT}18`,
              borderBottom: `1px solid ${COBALT}18`,
              background: "#fff",
            }}
            data-ocid={`research.publication.item.${i + 1}`}
          >
            <div className="flex items-start justify-between gap-5">
              <div className="flex-1 min-w-0">
                <span
                  className="typo-section-label inline-block px-2 py-0.5 rounded-full mb-3"
                  style={{ background: `${COBALT}12`, color: COBALT }}
                >
                  {pub.dept}
                </span>
                <h3
                  className="typo-card-title mb-2 group-hover:text-cobalt transition-colors"
                  style={{ color: DEEP_BLUE }}
                >
                  {pub.title}
                </h3>
                <p className="typo-support mb-1.5" style={{ color: "#777" }}>
                  {pub.authors}
                </p>
                <p
                  className="typo-support font-semibold italic"
                  style={{ color: COBALT }}
                >
                  {pub.journal} · {pub.year}
                </p>
              </div>
              <div className="flex flex-col items-end gap-3 flex-shrink-0">
                <span
                  className="typo-support font-bold px-2.5 py-1 rounded-lg"
                  style={{ background: "#e8f0fe", color: DEEP_BLUE }}
                >
                  IF {pub.impactFactor}
                </span>
                <a
                  href={`https://doi.org/${pub.doi}`}
                  target="_blank"
                  rel="noreferrer"
                  className="typo-support inline-flex items-center gap-1.5 transition-smooth hover:underline"
                  style={{ color: COBALT }}
                  data-ocid={`research.publication.doi.${i + 1}`}
                >
                  Read Paper <ExternalLink size={11} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <a
          href="https://www.coeptech.ac.in/research/publications"
          target="_blank"
          rel="noreferrer"
          className="typo-btn inline-flex items-center gap-2 px-10 py-4 rounded-lg uppercase tracking-wider transition-smooth hover:shadow-cobalt hover:-translate-y-0.5"
          style={{ background: GOLD, color: MIDNIGHT }}
          data-ocid="research.publications.view_all_button"
        >
          View All Publications <ChevronRight size={16} />
        </a>
      </div>
    </Section>
  );
}

// ─── PATENTS & IPR TAB ────────────────────────────────────────────────────────
const PATENTS = [
  {
    title: "Self-Healing Concrete using Bacterial Bio-Mineralization Process",
    inventors: "Dr. P. K. Sharma, Dr. A. R. Joshi",
    number: "IN202341012345",
    year: "2023",
    status: "Granted",
  },
  {
    title:
      "IoT-Based Smart Water Metering System for Urban Distribution Networks",
    inventors: "Prof. R. D. Kulkarni, Dr. N. V. Kulkarni",
    number: "IN202241098765",
    year: "2022",
    status: "Published",
  },
  {
    title: "Nano-Structured Photocatalytic Membrane for Wastewater Treatment",
    inventors: "Dr. A. B. Nair, Dr. S. T. Phadke",
    number: "IN202341034567",
    year: "2023",
    status: "Granted",
  },
  {
    title: "AI-Powered Predictive Maintenance System for CNC Machine Tools",
    inventors: "Prof. S. A. Meshram, V. P. More",
    number: "IN202441056789",
    year: "2024",
    status: "Filed",
  },
  {
    title:
      "Energy Harvesting System using Piezoelectric Nanogenerators for Wearables",
    inventors: "Dr. P. K. Bapat, A. R. Kulkarni",
    number: "IN202141087654",
    year: "2021",
    status: "Granted",
  },
  {
    title: "Autonomous Drone Navigation using Monocular Depth Estimation",
    inventors: "Dr. N. V. Kulkarni, P. R. Sawant",
    number: "IN202341091234",
    year: "2023",
    status: "Filed",
  },
];

const STATUS_STYLES: Record<string, { bg: string; color: string }> = {
  Granted: { bg: "#e8f5e9", color: "#2e7d32" },
  Published: { bg: "#e8f0fe", color: COBALT },
  Filed: { bg: "#fff3e0", color: "#e65100" },
  Pending: { bg: "#f3e5f5", color: "#7b1fa2" },
};

function PatentsTab() {
  return (
    <Section id="patents" alt>
      <SectionHeading
        label="Intellectual Property"
        title="Patents &amp; Intellectual Property"
        subtitle="COEP Tech actively protects its research innovations through a robust IP policy and dedicated RIIL cell for patent filing and commercialization."
      />

      {/* IPR Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-14">
        {[
          { value: "58+", label: "Patents Filed" },
          { value: "32+", label: "Patents Granted" },
          { value: "18", label: "Published" },
          { value: "8", label: "Filed in 2024" },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-2xl p-6 text-center border-2 transition-smooth hover:shadow-premium"
            style={{ borderColor: `${COBALT}25`, background: "#fff" }}
          >
            <div className="typo-stat-number mb-1" style={{ color: COBALT }}>
              {s.value}
            </div>
            <div
              className="typo-stat-label uppercase tracking-wider mt-1"
              style={{ color: "#777" }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Patents grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
        {PATENTS.map((p, i) => (
          <div
            key={p.number}
            className="rounded-2xl border bg-white p-6 transition-smooth hover:shadow-premium hover:-translate-y-1"
            style={{ borderColor: `${COBALT}20` }}
            data-ocid={`research.patent.card.${i + 1}`}
          >
            <div className="flex items-start justify-between mb-4">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${COBALT}15`, color: COBALT }}
              >
                <ShieldCheck size={20} />
              </div>
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full"
                style={STATUS_STYLES[p.status] ?? { bg: "#eee", color: "#555" }}
              >
                {p.status}
              </span>
            </div>
            <h4 className="typo-card-title mb-2" style={{ color: DEEP_BLUE }}>
              {p.title}
            </h4>
            <p className="typo-support mb-3" style={{ color: "#777" }}>
              {p.inventors}
            </p>
            <div
              className="flex flex-wrap gap-x-4 gap-y-1 text-xs"
              style={{ fontFamily: "Source Sans 3, sans-serif" }}
            >
              <span style={{ color: "#999" }}>
                No: <strong style={{ color: COBALT }}>{p.number}</strong>
              </span>
              <span style={{ color: "#999" }}>Filed: {p.year}</span>
            </div>
          </div>
        ))}
      </div>

      {/* IP Policy */}
      <div
        className="rounded-2xl p-8 md:p-10"
        style={{
          background: `linear-gradient(135deg, ${DEEP_BLUE}08, ${COBALT}10)`,
          border: `1px solid ${COBALT}18`,
        }}
      >
        <h3
          className="typo-section-heading font-bold mb-4"
          style={{ color: DEEP_BLUE }}
        >
          Institutional IP Policy
        </h3>
        <p className="typo-body mb-6" style={{ color: "#555" }}>
          COEP Tech's IP Policy encourages innovation by providing clear
          guidelines on ownership, revenue sharing, and commercialization of
          intellectual property created at the institution.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {[
            "IP from sponsored projects — ownership per agreement with sponsor.",
            "IP from institutional resources — shared 40% inventor, 20% dept, 40% institution.",
            "Students retain rights to IP generated from thesis work.",
            "RIIL cell assists in patent filing, maintenance, and licensing.",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 p-4 rounded-xl"
              style={{ background: "#fff", border: `1px solid ${COBALT}15` }}
            >
              <ChevronRight
                size={16}
                style={{ color: COBALT, flexShrink: 0, marginTop: 3 }}
              />
              <span className="typo-body text-sm" style={{ color: "#555" }}>
                {item}
              </span>
            </div>
          ))}
        </div>
        <a
          href="https://www.coeptech.ac.in/research/ipr"
          target="_blank"
          rel="noreferrer"
          className="typo-btn inline-flex items-center gap-2 px-7 py-3 rounded-lg uppercase tracking-wider transition-smooth hover:shadow-cobalt"
          style={{ background: COBALT, color: "#fff" }}
          data-ocid="research.patents.ip_policy_button"
        >
          File a Patent <ShieldCheck size={15} />
        </a>
      </div>
    </Section>
  );
}

// ─── COLLABORATIONS TAB ───────────────────────────────────────────────────────
const COLLAB_LOGOS = [
  "IIT Bombay",
  "IIT Pune",
  "DRDO",
  "ISRO",
  "BARC",
  "Tata Technologies",
  "L&T",
  "Cummins",
  "Siemens",
  "Forbes Marshall",
  "Thermax",
  "Kirloskar Group",
  "IUCAA",
  "NCL",
  "NIO",
  "HAL",
  "CSIR",
  "DST India",
  "SERB",
  "AICTE",
];

const INDUSTRY_COLLABS = [
  {
    name: "L&T Technology Services",
    country: "India",
    area: "IoT & Embedded Systems",
    type: "Industry",
  },
  {
    name: "Tata Technologies",
    country: "India",
    area: "CAD/CAM & PLM",
    type: "Industry",
  },
  {
    name: "Kirloskar Electric",
    country: "India",
    area: "Power Electronics",
    type: "Industry",
  },
  {
    name: "Forbes Marshall",
    country: "India",
    area: "Process Instrumentation",
    type: "Industry",
  },
  {
    name: "Cummins India",
    country: "India",
    area: "Engine Technology",
    type: "Industry",
  },
  {
    name: "Siemens Ltd.",
    country: "India",
    area: "Industry 4.0 & Automation",
    type: "Industry",
  },
];

const INTL_COLLABS = [
  { name: "TU Darmstadt", country: "Germany", area: "Mechanical Engineering" },
  { name: "University of Sheffield", country: "UK", area: "Materials Science" },
  { name: "Drexel University", country: "USA", area: "Engineering Education" },
  { name: "Waseda University", country: "Japan", area: "Robotics & AI" },
  { name: "KU Leuven", country: "Belgium", area: "Chemical Engineering" },
  { name: "NTNU", country: "Norway", area: "Ocean Engineering" },
];

function CollaborationsTab() {
  const { ref: logoRef, visible: logosVisible } = useInView(0.1);

  return (
    <>
      <Section id="collaborations">
        <SectionHeading
          label="Research Partnerships"
          title="Research Collaborations"
          subtitle="COEP Tech maintains strong national and international partnerships that enrich research, provide global exposure, and drive industry-relevant outcomes."
        />

        {/* Partner Logos Grid */}
        <div
          ref={logoRef}
          className="mb-16 rounded-2xl p-8"
          style={{ background: "#f4f7fe", border: `1px solid ${COBALT}18` }}
          data-ocid="research.collabs.logos_grid"
        >
          <h4
            className="typo-section-label text-center mb-8"
            style={{ color: COBALT }}
          >
            Our Research Partners
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {COLLAB_LOGOS.map((name, i) => (
              <div
                key={name}
                className="typo-card-title px-5 py-3 rounded-xl border-2 transition-smooth hover:shadow-cobalt hover:border-cobalt hover:-translate-y-0.5 cursor-default text-sm"
                style={{
                  background: "#fff",
                  borderColor: `${COBALT}20`,
                  color: DEEP_BLUE,
                  opacity: logosVisible ? 1 : 0,
                  transition: `opacity 0.5s ease ${i * 50}ms, transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease`,
                }}
                data-ocid={`research.collab.logo.${i + 1}`}
              >
                {name}
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <a
              href="https://www.coeptech.ac.in/research/collaborations"
              target="_blank"
              rel="noreferrer"
              className="typo-btn inline-flex items-center gap-1.5 text-sm transition-smooth hover:underline"
              style={{ color: COBALT }}
              data-ocid="research.collabs.view_all_link"
            >
              View All Partners <ExternalLink size={13} />
            </a>
          </div>
        </div>

        {/* Industry collaborations */}
        <h3
          className="text-3xl font-bold mb-7 flex items-center gap-3"
          style={{ fontFamily: "var(--font-heading)", color: DEEP_BLUE }}
        >
          <span
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: `${COBALT}15`, color: COBALT }}
          >
            <Handshake size={20} />
          </span>
          Industry Collaborations
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {INDUSTRY_COLLABS.map((c, i) => (
            <div
              key={c.name}
              className="rounded-2xl border p-6 transition-smooth hover:shadow-premium hover:-translate-y-1 group"
              style={{ borderColor: `${COBALT}20`, background: "#fff" }}
              data-ocid={`research.collab.industry.${i + 1}`}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-smooth group-hover:scale-110"
                style={{ background: `${COBALT}15`, color: COBALT }}
              >
                <Handshake size={20} />
              </div>
              <h4 className="typo-card-title mb-1" style={{ color: DEEP_BLUE }}>
                {c.name}
              </h4>
              <p className="typo-card-desc mb-3" style={{ color: "#666" }}>
                {c.area}
              </p>
              <span
                className="typo-section-label px-2.5 py-1 rounded-full"
                style={{ background: "#e8f0fe", color: COBALT }}
              >
                {c.type} · {c.country}
              </span>
            </div>
          ))}
        </div>

        {/* International partners */}
        <h3
          className="text-3xl font-bold mb-7 flex items-center gap-3"
          style={{ fontFamily: "var(--font-heading)", color: DEEP_BLUE }}
        >
          <span
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: `${COBALT}15`, color: COBALT }}
          >
            <Globe size={20} />
          </span>
          International University Partners
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {INTL_COLLABS.map((c, i) => (
            <div
              key={c.name}
              className="rounded-2xl border p-6 transition-smooth hover:shadow-premium hover:-translate-y-1 group"
              style={{ borderColor: `${COBALT}20`, background: "#fff" }}
              data-ocid={`research.collab.intl.${i + 1}`}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-smooth group-hover:scale-110"
                style={{ background: `${COBALT}15`, color: COBALT }}
              >
                <Globe size={20} />
              </div>
              <h4 className="typo-card-title mb-1" style={{ color: DEEP_BLUE }}>
                {c.name}
              </h4>
              <p className="typo-card-desc mb-3" style={{ color: "#666" }}>
                {c.area}
              </p>
              <span
                className="typo-section-label px-2.5 py-1 rounded-full"
                style={{ background: "#e8f5e9", color: "#2e7d32" }}
              >
                🌍 {c.country}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* Collaborate CTA */}
      <section
        className="py-16 px-4"
        style={{
          background: `linear-gradient(135deg, ${DEEP_BLUE}, ${MIDNIGHT})`,
        }}
      >
        <div className="max-w-[800px] mx-auto text-center">
          <h3 className="typo-section-heading font-bold text-white mb-4">
            Partner With COEP Research
          </h3>
          <p className="typo-body-lg text-white/80 mb-8">
            We welcome collaborations from industry, government agencies, and
            international institutions. Let's create research that transforms
            society.
          </p>
          <a
            href="mailto:research@coeptech.ac.in"
            className="typo-btn inline-flex items-center gap-2 px-10 py-4 rounded-lg uppercase tracking-wider transition-smooth hover:shadow-gold hover:-translate-y-0.5"
            style={{ background: GOLD, color: MIDNIGHT }}
            data-ocid="research.collabs.contact_button"
          >
            Collaborate With Us <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </>
  );
}

// ─── Tab content router ───────────────────────────────────────────────────────
function TabContent({ tab }: { tab: string }) {
  switch (tab) {
    case "overview":
      return <OverviewTab />;
    case "research-centers":
      return <ResearchCentersTab />;
    case "innovation":
      return <InnovationTab />;
    case "publications":
      return <PublicationsTab />;
    case "patents":
      return <PatentsTab />;
    case "collaborations":
      return <CollaborationsTab />;
    default:
      return <OverviewTab />;
  }
}

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function ResearchPage() {
  const params = useParams({ strict: false }) as { sectionId?: string };
  const navigate = useNavigate();
  const activeTab = params.sectionId ?? "overview";

  const handleTabChange = (tabId: string) => {
    navigate({ to: "/research/$sectionId", params: { sectionId: tabId } });
  };

  return (
    <Layout>
      <HeroSection />

      <SubTabRibbon
        tabs={TABS}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />

      <div className="flex-1" data-ocid="research.content_panel">
        <TabContent tab={activeTab} />
      </div>
    </Layout>
  );
}
