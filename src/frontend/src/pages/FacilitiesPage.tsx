import { Layout } from "@/components/Layout";
import SubTabRibbon from "@/components/SubTabRibbon";
import { useNavigate, useParams } from "@tanstack/react-router";
import {
  BookOpen,
  Building2,
  CheckCircle2,
  ChevronRight,
  Dumbbell,
  FlaskConical,
  Globe,
  Home,
  Layers,
  Mail,
  MapPin,
  Monitor,
  Phone,
  Radio,
  Shield,
  Star,
  Trophy,
  Tv2,
  Users,
  Waves,
  Wifi,
  Wrench,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

// ─── Brand Tokens ─────────────────────────────────────────────────────────────
const COBALT = "#1A237E";
const DEEP_BLUE = "#0F3399";
const MIDNIGHT = "#081E5C";
const GOLD = "#E8C42A";

// ─── Sub-tabs ─────────────────────────────────────────────────────────────────
const TABS = [
  { id: "overview", label: "Overview" },
  { id: "library", label: "Library" },
  { id: "laboratories", label: "Laboratories" },
  { id: "sports", label: "Sports & Recreation" },
  { id: "hostels", label: "Hostels" },
  { id: "it", label: "IT Infrastructure" },
  { id: "auditoriums", label: "Auditoriums" },
];

// ─── Shared Components ────────────────────────────────────────────────────────
function SectionHeader({
  title,
  subtitle,
  centered = false,
}: { title: string; subtitle?: string; centered?: boolean }) {
  return (
    <div className={`mb-10 fade-in-up ${centered ? "text-center" : ""}`}>
      <div className={`divider-cobalt mb-4 ${centered ? "mx-auto" : ""}`} />
      <h2
        className={`typo-section-heading font-bold mb-3 ${centered ? "text-center" : ""}`}
        style={{ color: DEEP_BLUE }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`typo-body-lg max-w-3xl ${centered ? "mx-auto" : ""}`}
          style={{ color: "#555" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

// ─── Animated Counter ─────────────────────────────────────────────────────────
function AnimatedCounter({
  target,
  suffix = "",
  duration = 2000,
}: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = Date.now();
          const tick = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - (1 - progress) ** 3;
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
const HERO_STATS = [
  { label: "36.81 Acres Campus", icon: MapPin },
  { label: "50+ Labs", icon: FlaskConical },
  { label: "10 Hostels", icon: Home },
  { label: "120K+ Library Books", icon: BookOpen },
];

function HeroSection() {
  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${MIDNIGHT} 0%, ${DEEP_BLUE} 60%, ${COBALT} 100%)`,
      }}
      data-ocid="facilities.hero.section"
    >
      {/* Decorative grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: COBALT, transform: "translate(40%, -40%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 blur-3xl"
        style={{ background: COBALT, transform: "translate(-30%, 30%)" }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-10 fade-in-up">
          <p
            className="typo-section-label mb-4"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            COEP Technological University
          </p>
          <h1 className="typo-hero-heading text-white mb-5">
            World-Class <span style={{ color: "white" }}>Facilities</span>
          </h1>
          <p
            className="typo-hero-desc"
            style={{ color: "rgba(255,255,255,0.82)" }}
          >
            Infrastructure Built for Learning, Innovation &amp; Excellence
          </p>
        </div>

        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          data-ocid="facilities.hero.stats_row"
        >
          {HERO_STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="flex items-center gap-3 rounded-xl px-4 py-3 fade-in-up"
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.18)",
                animationDelay: `${i * 100}ms`,
              }}
              data-ocid={`facilities.hero.stat.${i + 1}`}
            >
              <stat.icon
                className="w-5 h-5 flex-shrink-0"
                style={{ color: "rgba(255,255,255,0.85)" }}
              />
              <span className="typo-support font-semibold text-white">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── OVERVIEW TAB ─────────────────────────────────────────────────────────────
const CAMPUS_HIGHLIGHTS = [
  { icon: MapPin, text: "Main Campus: 36.81 acres in Shivajinagar, Pune" },
  { icon: Globe, text: "Extension Campus: 40 acres at Chikhali" },
  { icon: Building2, text: "170+ Years of Heritage Buildings" },
  { icon: Layers, text: "Green Campus with tree-lined avenues" },
  { icon: Star, text: "Historic Bandstand and Open Amphitheater" },
];

// CAMPUS_COUNTER_STATS removed per requirement

function OverviewTab() {
  return (
    <div>
      <SectionHeader
        title="Our Campus"
        subtitle="A self-sufficient academic ecosystem blending 170 years of heritage with cutting-edge modern infrastructure."
      />

      {/* Campus highlights — full-width two-column list */}
      <div className="grid md:grid-cols-2 gap-8 mb-14 fade-in-up">
        {/* Left column */}
        <div>
          <h3
            className="typo-section-heading font-bold mb-5"
            style={{ color: DEEP_BLUE }}
          >
            Campus Highlights
          </h3>
          <ul className="space-y-4">
            {CAMPUS_HIGHLIGHTS.map((item) => (
              <li key={item.text} className="flex items-start gap-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: "rgba(26, 35, 126, 0.09)" }}
                >
                  <item.icon className="w-4 h-4" style={{ color: COBALT }} />
                </div>
                <span className="typo-body" style={{ color: "#444" }}>
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right column: campus description + CTA */}
        <div
          className="rounded-2xl p-8 flex flex-col justify-between"
          style={{
            background: `linear-gradient(135deg, ${MIDNIGHT} 0%, ${DEEP_BLUE} 100%)`,
          }}
        >
          <div>
            <p
              className="typo-section-label mb-4"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              A Legacy Since 1854
            </p>
            <h4 className="typo-section-heading font-bold text-white mb-4">
              Where Heritage Meets Innovation
            </h4>
            <p
              className="typo-body mb-6"
              style={{ color: "rgba(255,255,255,0.80)" }}
            >
              Spread across 36.81 acres in the heart of Pune, COEP Technological
              University's main campus is a blend of colonial-era sandstone
              buildings and state-of-the-art research facilities. The extension
              campus at Chikhali adds 40 more acres dedicated to emerging
              technology labs and innovation hubs.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "National Heritage buildings over 170 years old",
                "Green tree-lined avenues and open amphitheater",
                "Accessible, inclusive, and sustainable campus design",
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2 typo-body text-sm"
                  style={{ color: "rgba(255,255,255,0.75)" }}
                >
                  <ChevronRight
                    className="w-4 h-4 flex-shrink-0 mt-0.5"
                    style={{ color: GOLD }}
                  />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <a
              href="https://coeptech.ac.in"
              target="_blank"
              rel="noreferrer"
              className="typo-btn inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-smooth hover:-translate-y-0.5"
              style={{ backgroundColor: GOLD, color: MIDNIGHT }}
              data-ocid="facilities.overview.virtual_tour_button"
            >
              Virtual Campus Tour <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Facilities overview cards */}
      <div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10"
        data-ocid="facilities.overview.cards_grid"
      >
        {[
          {
            icon: BookOpen,
            name: "Central Library (KRC)",
            desc: "120,000+ books, 30+ e-journal subscriptions, and 24/7 digital access for all students and faculty.",
          },
          {
            icon: FlaskConical,
            name: "Research Laboratories",
            desc: "50+ specialized labs spanning CS, Electronics, Mechanical, Civil, Chemical, and emerging technology domains.",
          },
          {
            icon: Dumbbell,
            name: "Sports Complex",
            desc: "Multi-sport facilities including cricket, football, hockey, tennis, basketball, gymnasium, and more.",
          },
          {
            icon: Home,
            name: "Hostels & Residences",
            desc: "10 hostel blocks accommodating 2000+ students with modern amenities, Wi-Fi, mess, and 24/7 security.",
          },
          {
            icon: Monitor,
            name: "IT Infrastructure",
            desc: "Campus-wide gigabit Wi-Fi, 400+ workstations, and 24/7 access to digital resources and e-labs.",
          },
          {
            icon: Tv2,
            name: "Auditoriums & Halls",
            desc: "1000-seat main auditorium, 10+ seminar halls, and modern conference rooms for every academic need.",
          },
        ].map((card, i) => (
          <div
            key={card.name}
            className="rounded-xl p-6 transition-smooth hover:shadow-premium-hover hover:-translate-y-0.5 cursor-default fade-in-up"
            style={{
              border: "1px solid rgba(26, 35, 126, 0.14)",
              background: "#fff",
              animationDelay: `${i * 80}ms`,
            }}
            data-ocid={`facilities.overview.card.${i + 1}`}
          >
            <div
              className="w-11 h-11 rounded-lg flex items-center justify-center mb-4"
              style={{ backgroundColor: "rgba(26,35,126,0.09)" }}
            >
              <card.icon className="w-5 h-5" style={{ color: COBALT }} />
            </div>
            <h4 className="typo-card-title mb-2" style={{ color: DEEP_BLUE }}>
              {card.name}
            </h4>
            <p className="typo-card-desc" style={{ color: "#666" }}>
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── LIBRARY TAB ──────────────────────────────────────────────────────────────
const LIBRARY_HIGHLIGHTS = [
  "120,000+ Books and Reference Volumes",
  "Access to IEEE, ASME, Springer, Elsevier digital journals",
  "24/7 Digital Library Reading Hall",
  "500+ Seat Reading Capacity",
  "E-book collection and digital thesis repository",
  "Inter-library loan via DELNET network",
  "OPAC (Online Public Access Catalogue)",
  "Institutional research repository",
];

const LIBRARY_COUNTER_CARDS = [
  { target: 120000, suffix: "+", label: "Books" },
  { target: 30, suffix: "+", label: "E-Journal Subscriptions" },
  { target: 500, suffix: "+", label: "Seat Capacity" },
  { target: 24, suffix: "/7", label: "Digital Access" },
];

// Library timings removed per requirement

const KRC_DATABASES = [
  "IEEE Xplore",
  "ScienceDirect",
  "SpringerLink",
  "JSTOR",
  "ASME Digital Library",
  "ASTM Digital Library",
  "DELNET",
  "J-GATE",
  "NPTEL",
  "MathSciNet",
  "Web of Science",
  "CMIE Prowess",
];

function LibraryTab() {
  return (
    <div>
      <SectionHeader
        title="Central Library"
        subtitle="The Knowledge Resource Centre (KRC) — one of the oldest and most comprehensive technical libraries in Maharashtra, established alongside the institution in 1854."
      />

      {/* Stat counter cards */}
      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        data-ocid="facilities.library.stats_grid"
      >
        {LIBRARY_COUNTER_CARDS.map((card, i) => (
          <div
            key={card.label}
            className="rounded-xl p-6 text-center fade-in-up"
            style={{
              background: `linear-gradient(135deg, ${COBALT}, ${DEEP_BLUE})`,
              animationDelay: `${i * 80}ms`,
            }}
            data-ocid={`facilities.library.stat.${i + 1}`}
          >
            <div className="typo-stat-number text-white mb-1">
              <AnimatedCounter target={card.target} suffix={card.suffix} />
            </div>
            <div
              className="typo-stat-label"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              {card.label}
            </div>
          </div>
        ))}
      </div>

      <div className="mb-12">
        {/* Main description — full width */}
        <div className="fade-in-up">
          <h3
            className="typo-section-heading font-bold mb-4"
            style={{ color: DEEP_BLUE }}
          >
            About the Library
          </h3>
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <p className="typo-body" style={{ color: "#555" }}>
              The Knowledge Resource Centre at COEP Technological University is
              the intellectual heart of the campus. With over 1.2 lakh volumes
              spanning engineering, sciences, management, and humanities, it
              serves thousands of students and faculty daily.
            </p>
            <p className="typo-body" style={{ color: "#555" }}>
              As a member of DELNET, the library offers access to a vast
              inter-library loan network. Subscriptions to IEEE, Elsevier,
              Springer, and ASME ensure students have access to the latest
              global research at their fingertips, both on-campus and via remote
              VPN access.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4
                className="typo-card-title font-bold mb-3"
                style={{ color: DEEP_BLUE }}
              >
                Library Highlights
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {LIBRARY_HIGHLIGHTS.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 typo-body text-sm"
                    style={{ color: "#555" }}
                  >
                    <CheckCircle2
                      className="w-4 h-4 mt-0.5 flex-shrink-0"
                      style={{ color: COBALT }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4
                className="typo-card-title font-bold mb-3"
                style={{ color: DEEP_BLUE }}
              >
                E-Resource Subscriptions
              </h4>
              <div className="flex flex-wrap gap-2">
                {KRC_DATABASES.map((db) => (
                  <span
                    key={db}
                    className="typo-support px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: "rgba(26, 35, 126, 0.08)",
                      color: COBALT,
                    }}
                  >
                    {db}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── LABORATORIES TAB ─────────────────────────────────────────────────────────
const LAB_CATEGORIES = [
  {
    icon: Monitor,
    category: "Computer Science Labs",
    color: COBALT,
    labs: [
      "Programming Lab",
      "Networks Lab",
      "AI / ML Lab",
      "Cybersecurity Lab",
    ],
    equipment: "200+ workstations",
  },
  {
    icon: Radio,
    category: "Electronics Labs",
    color: DEEP_BLUE,
    labs: [
      "Circuit Design Lab",
      "Signal Processing Lab",
      "VLSI Lab",
      "Communication Lab",
    ],
    equipment: "Advanced oscilloscopes, spectrum analyzers",
  },
  {
    icon: Wrench,
    category: "Mechanical Labs",
    color: "#1A237E",
    labs: [
      "CAD/CAM Lab",
      "Manufacturing Lab",
      "Fluid Mechanics Lab",
      "Thermodynamics Lab",
    ],
    equipment: "CNC machines, 3D printers",
  },
  {
    icon: Zap,
    category: "Electrical Labs",
    color: MIDNIGHT,
    labs: ["Power Systems Lab", "Electric Drives Lab", "High Voltage Lab"],
    equipment: "High voltage test equipment",
  },
  {
    icon: Layers,
    category: "Civil Labs",
    color: DEEP_BLUE,
    labs: [
      "Structural Engineering Lab",
      "Geotechnical Lab",
      "Environmental Lab",
      "Surveying Lab",
    ],
    equipment: "UTM, triaxial test equipment",
  },
  {
    icon: FlaskConical,
    category: "Specialized Labs",
    color: COBALT,
    labs: [
      "AR/VR Lab",
      "Robotics Lab",
      "Smart Manufacturing Lab",
      "Design-to-Make Lab",
    ],
    equipment: "VR headsets, robotic arms, CNC routers",
  },
];

function LaboratoriesTab() {
  return (
    <div>
      <SectionHeader
        title="Research & Teaching Laboratories"
        subtitle="50+ state-of-the-art laboratories spread across all departments, equipped with industry-standard instruments and software for advanced research and practical learning."
      />

      <div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
        data-ocid="facilities.labs.grid"
      >
        {LAB_CATEGORIES.map((cat, i) => (
          <div
            key={cat.category}
            className="rounded-xl overflow-hidden transition-smooth hover:shadow-premium-hover hover:-translate-y-1 cursor-default fade-in-up"
            style={{
              border: "1px solid rgba(26, 35, 126, 0.14)",
              background: "#fff",
              animationDelay: `${i * 80}ms`,
            }}
            data-ocid={`facilities.labs.category.${i + 1}`}
          >
            {/* Header stripe */}
            <div
              className="px-5 py-4"
              style={{
                background: `linear-gradient(135deg, ${cat.color}, ${MIDNIGHT})`,
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.15)" }}
                >
                  <cat.icon className="w-4 h-4 text-white" />
                </div>
                <h4 className="typo-card-title font-bold text-white text-sm">
                  {cat.category}
                </h4>
              </div>
            </div>
            <div className="p-5">
              <ul className="space-y-1.5 mb-4">
                {cat.labs.map((lab) => (
                  <li
                    key={lab}
                    className="flex items-center gap-2 typo-body text-sm"
                    style={{ color: "#555" }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: COBALT }}
                    />
                    {lab}
                  </li>
                ))}
              </ul>
              <div
                className="pt-3 border-t"
                style={{ borderColor: "rgba(26, 35, 126, 0.1)" }}
              >
                <span
                  className="typo-support font-semibold"
                  style={{ color: COBALT }}
                >
                  Equipment:{" "}
                </span>
                <span className="typo-support" style={{ color: "#777" }}>
                  {cat.equipment}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Total stats bar */}
      <div
        className="rounded-2xl p-6 md:p-8"
        style={{
          background: `linear-gradient(135deg, ${MIDNIGHT}, ${COBALT})`,
        }}
        data-ocid="facilities.labs.stats_bar"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { target: 50, suffix: "+", label: "Total Labs" },
            { target: 1200, suffix: "+", label: "Instruments" },
            { target: 400, suffix: "+", label: "Workstations" },
            { target: 6, suffix: "", label: "Departments" },
          ].map((s) => (
            <div key={s.label}>
              <div className="typo-stat-number text-white">
                <AnimatedCounter target={s.target} suffix={s.suffix} />
              </div>
              <div
                className="typo-stat-label mt-1"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── SPORTS TAB ───────────────────────────────────────────────────────────────
const SPORTS_FACILITIES = [
  {
    icon: Trophy,
    name: "Cricket Ground",
    desc: "Full-size turf ground with practice nets",
  },
  {
    icon: Dumbbell,
    name: "Hockey Ground",
    desc: "Synthetic turf — tournament-grade",
  },
  { icon: Globe, name: "Football Ground", desc: "FIFA-standard grass pitch" },
  { icon: Star, name: "Lawn Tennis", desc: "2 courts, hard surface" },
  { icon: Users, name: "Basketball Court", desc: "Outdoor concrete court" },
  {
    icon: Layers,
    name: "Volleyball Court",
    desc: "Sand & hard surface courts",
  },
  {
    icon: Shield,
    name: "Badminton (Indoor)",
    desc: "4 indoor courts with lighting",
  },
  {
    icon: Zap,
    name: "Table Tennis",
    desc: "Multiple TT tables in Student Centre",
  },
  {
    icon: Wrench,
    name: "Gymnasium",
    desc: "Fully equipped with modern machines",
  },
  {
    icon: Waves,
    name: "Swimming Pool",
    desc: "Olympic-length pool with changing rooms",
  },
];

function SportsTab() {
  return (
    <div>
      <SectionHeader
        title="Sports & Recreation"
        subtitle="COEP has a proud sporting tradition. Our multi-sport complex encourages physical excellence alongside academic achievement, with dedicated coaching and annual inter-collegiate competitions."
      />

      <div
        className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12"
        data-ocid="facilities.sports.facilities_grid"
      >
        {SPORTS_FACILITIES.map((sport, i) => (
          <div
            key={sport.name}
            className="rounded-xl p-5 text-center transition-smooth hover:shadow-premium-hover hover:-translate-y-1 fade-in-up"
            style={{
              border: "1px solid rgba(26, 35, 126, 0.14)",
              background: "#fff",
              animationDelay: `${i * 60}ms`,
            }}
            data-ocid={`facilities.sports.item.${i + 1}`}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
              style={{ backgroundColor: "rgba(26,35,126,0.08)" }}
            >
              <sport.icon className="w-5 h-5" style={{ color: COBALT }} />
            </div>
            <h4
              className="typo-card-title font-bold text-sm mb-1"
              style={{ color: DEEP_BLUE }}
            >
              {sport.name}
            </h4>
            <p className="typo-support" style={{ color: "#888" }}>
              {sport.desc}
            </p>
          </div>
        ))}
      </div>

      {/* ZEST Feature highlight */}
      <div
        className="rounded-2xl overflow-hidden mb-10"
        style={{
          background: `linear-gradient(135deg, ${MIDNIGHT}, ${COBALT})`,
        }}
        data-ocid="facilities.sports.zest_highlight"
      >
        <div className="grid md:grid-cols-2">
          <div className="p-8 md:p-10">
            <p
              className="typo-section-label mb-3"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              Annual Sports Fest
            </p>
            <h3 className="typo-section-heading font-bold text-white mb-4">
              ZEST — The Grand Sports Celebration
            </h3>
            <p
              className="typo-body mb-4"
              style={{ color: "rgba(255,255,255,0.82)" }}
            >
              ZEST is COEP's marquee annual sports festival, drawing hundreds of
              participants from colleges across Maharashtra and beyond. It
              features competitions in 20+ sports, cultural events, and
              championship trophies.
            </p>
            <ul className="space-y-2">
              {[
                "20+ Sports Disciplines",
                "Intercollegiate & Open Competitions",
                "Cash Prizes & Trophies",
                "Professional Coaching Clinics",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 typo-body text-sm"
                  style={{ color: "rgba(255,255,255,0.8)" }}
                >
                  <ChevronRight
                    className="w-4 h-4 flex-shrink-0"
                    style={{ color: COBALT }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
              {[
                { target: 20, suffix: "+", label: "Sports" },
                { target: 500, suffix: "+", label: "Participants" },
                { target: 15, suffix: "+", label: "Colleges" },
                { target: 3, suffix: " days", label: "Event Duration" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl p-4 text-center"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  <div className="typo-stat-number text-white">
                    <AnimatedCounter target={s.target} suffix={s.suffix} />
                  </div>
                  <div
                    className="typo-stat-label mt-1"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div
        className="grid md:grid-cols-3 gap-5"
        data-ocid="facilities.sports.achievements_grid"
      >
        {[
          {
            title: "National Champions",
            desc: "COEP athletes have represented Maharashtra at national-level competitions across multiple disciplines.",
          },
          {
            title: "Sports Scholarships",
            desc: "Meritorious sports students receive fee waivers and scholarships under the institute's sports policy.",
          },
          {
            title: "Professional Coaching",
            desc: "Certified coaches for cricket, swimming, football, and athletics available to all enrolled students.",
          },
        ].map((card, i) => (
          <div
            key={card.title}
            className="rounded-xl p-6 fade-in-up"
            style={{
              border: "1px solid rgba(26, 35, 126, 0.14)",
              background: "#f5f8ff",
              animationDelay: `${i * 100}ms`,
            }}
            data-ocid={`facilities.sports.achievement.${i + 1}`}
          >
            <h4 className="typo-card-title mb-2" style={{ color: DEEP_BLUE }}>
              {card.title}
            </h4>
            <p className="typo-card-desc" style={{ color: "#666" }}>
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── HOSTELS TAB ──────────────────────────────────────────────────────────────
const BOYS_HOSTELS = [
  { name: "Purandar", capacity: "~200 students" },
  { name: "Shivneri", capacity: "~180 students" },
  { name: "Singhagad", capacity: "~200 students" },
  { name: "Raigad", capacity: "~190 students" },
  { name: "Rajgad", capacity: "~180 students" },
  { name: "Kondhana", capacity: "~150 students" },
];
// Girls hostel data inlined in the redesigned cards below

const HOSTEL_AMENITIES = [
  {
    icon: Wifi,
    label: "High-Speed Wi-Fi",
    desc: "Gigabit connectivity across all rooms and common areas",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=120&h=80&fit=crop",
  },
  {
    icon: Shield,
    label: "24/7 Security",
    desc: "CCTV surveillance and round-the-clock security personnel",
    img: "https://images.unsplash.com/photo-1587145820098-2f9c3a7e85e3?w=120&h=80&fit=crop",
  },
  {
    icon: Layers,
    label: "Mess / Cafeteria",
    desc: "Hygienic, nutritious meals served thrice daily",
    img: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=120&h=80&fit=crop",
  },
  {
    icon: Wrench,
    label: "Laundry Service",
    desc: "In-house laundry facility with modern washing machines",
    img: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=120&h=80&fit=crop",
  },
  {
    icon: Dumbbell,
    label: "Indoor Gym",
    desc: "Fully equipped gymnasium for strength and cardio training",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=120&h=80&fit=crop",
  },
  {
    icon: Phone,
    label: "Medical Support",
    desc: "On-campus dispensary and emergency medical assistance",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=120&h=80&fit=crop",
  },
];

const FEE_TABLE = [
  { type: "Triple Sharing", fee: "₹45,000 – ₹55,000 / year" },
  { type: "Double Sharing", fee: "₹60,000 – ₹70,000 / year" },
  { type: "Single Occupancy", fee: "₹90,000 – ₹1,10,000 / year" },
];

function HostelsTab() {
  return (
    <div>
      <SectionHeader
        title="On-Campus Residences"
        subtitle="Safe, comfortable, and affordable hostels for 2000+ students on the main campus, fostering a vibrant residential community."
      />

      {/* Capacity banner */}
      <div
        className="rounded-2xl p-6 md:p-8 mb-12 text-center"
        style={{
          background: `linear-gradient(135deg, ${MIDNIGHT}, ${DEEP_BLUE})`,
        }}
        data-ocid="facilities.hostels.capacity_banner"
      >
        <p
          className="typo-section-label mb-3"
          style={{ color: "rgba(255,255,255,0.75)" }}
        >
          Hostel Overview
        </p>
        <h3 className="typo-section-heading font-bold text-white mb-2">
          10+ Hostel Blocks
        </h3>
        <p className="typo-body-lg" style={{ color: "rgba(255,255,255,0.8)" }}>
          ~2000 Students Accommodated on Main Campus
        </p>
        <div className="flex justify-center gap-6 mt-6">
          {[
            { target: 10, suffix: "+", label: "Hostel Blocks" },
            { target: 2000, suffix: "+", label: "Capacity" },
            { target: 8, suffix: "", label: "Named Hostels" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="typo-stat-number text-white">
                <AnimatedCounter target={s.target} suffix={s.suffix} />
              </div>
              <div
                className="typo-stat-label mt-1"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Boys' Hostels: hero feature card ── */}
      <div className="mb-10 fade-in-up">
        <div className="flex items-center gap-3 mb-6">
          <span
            className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
            style={{ backgroundColor: COBALT }}
          >
            B
          </span>
          <h3
            className="typo-section-heading font-bold"
            style={{ color: DEEP_BLUE }}
          >
            Boys' Hostels
          </h3>
        </div>

        {/* Large hero card for boys' hostels */}
        <div
          className="rounded-2xl overflow-hidden shadow-premium mb-5"
          style={{ border: "1px solid rgba(26,35,126,0.14)" }}
          data-ocid="facilities.hostels.boys_hero"
        >
          <div className="grid md:grid-cols-5">
            {/* Image */}
            <div className="md:col-span-2 relative">
              <img
                src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&h=400&fit=crop"
                alt="Boys' hostel dormitory"
                className="w-full h-56 md:h-full object-cover"
              />
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  background: `linear-gradient(135deg, ${MIDNIGHT}, transparent)`,
                }}
              />
              <div className="absolute bottom-4 left-4">
                <span
                  className="px-3 py-1 rounded-full text-xs font-bold text-white"
                  style={{ backgroundColor: COBALT }}
                >
                  6 Blocks
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-3 p-7">
              <p className="typo-section-label mb-2" style={{ color: COBALT }}>
                Boys' Residential Blocks
              </p>
              <h4 className="typo-card-title mb-4" style={{ color: DEEP_BLUE }}>
                Named After Maharashtra's Majestic Forts
              </h4>
              <p className="typo-body mb-5" style={{ color: "#666" }}>
                Six hostel blocks provide comfortable accommodation for over
                1,100 male students. Each block is named after a historic
                Maratha fort, reflecting the university's pride in Maharashtra's
                heritage.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {BOYS_HOSTELS.map((h, i) => (
                  <div
                    key={h.name}
                    className="rounded-xl p-3 text-center transition-smooth hover:shadow-premium fade-in-up"
                    style={{
                      border: "1px solid rgba(26, 35, 126, 0.14)",
                      background: "rgba(26,35,126,0.03)",
                      animationDelay: `${i * 60}ms`,
                    }}
                    data-ocid={`facilities.hostels.boys.${i + 1}`}
                  >
                    <div
                      className="typo-card-title font-bold text-sm mb-0.5"
                      style={{ color: DEEP_BLUE }}
                    >
                      {h.name}
                    </div>
                    <div className="typo-stat-label" style={{ color: "#888" }}>
                      {h.capacity}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Girls' Hostels: alternating image-text layout ── */}
      <div className="mb-12 fade-in-up">
        <div className="flex items-center gap-3 mb-6">
          <span
            className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
            style={{ backgroundColor: "#9C27B0" }}
          >
            G
          </span>
          <h3
            className="typo-section-heading font-bold"
            style={{ color: DEEP_BLUE }}
          >
            Girls' Hostels
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Jijau Hostel — large feature card */}
          <div
            className="rounded-2xl overflow-hidden shadow-premium transition-smooth hover:shadow-premium-hover hover:-translate-y-1"
            style={{ border: "1px solid rgba(232,196,42,0.25)" }}
            data-ocid="facilities.hostels.girls.1"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=280&fit=crop"
                alt="Jijau girls hostel"
                className="w-full h-52 object-cover"
              />
              <div
                className="absolute inset-0 opacity-50"
                style={{
                  background: `linear-gradient(to top, ${MIDNIGHT} 0%, transparent 60%)`,
                }}
              />
              <div className="absolute bottom-4 left-5">
                <h4 className="typo-card-title text-white">Jijau Hostel</h4>
                <span
                  className="typo-support font-semibold px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: GOLD, color: MIDNIGHT }}
                >
                  Girls' Hostel · ~300 students
                </span>
              </div>
            </div>
            <div
              className="p-5"
              style={{ background: "rgba(232,196,42,0.04)" }}
            >
              <p className="typo-body text-sm" style={{ color: "#666" }}>
                The largest girls' residential block on campus, Jijau Hostel
                provides a safe and nurturing environment with 24/7 security,
                CCTV surveillance, and dedicated wardens. Named in honour of
                Rajmata Jijau, it symbolises strength and academic excellence.
              </p>
            </div>
          </div>

          {/* Lohagad Hostel + Fee Table */}
          <div className="flex flex-col gap-5">
            <div
              className="rounded-2xl overflow-hidden shadow-premium transition-smooth hover:shadow-premium-hover hover:-translate-y-1"
              style={{ border: "1px solid rgba(26,35,126,0.14)" }}
              data-ocid="facilities.hostels.girls.2"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&h=200&fit=crop&q=80"
                  alt="Lohagad girls hostel"
                  className="w-full h-40 object-cover"
                />
                <div
                  className="absolute inset-0 opacity-50"
                  style={{
                    background: `linear-gradient(to top, ${MIDNIGHT} 0%, transparent 60%)`,
                  }}
                />
                <div className="absolute bottom-4 left-5">
                  <h4 className="typo-card-title text-white">Lohagad Hostel</h4>
                  <span
                    className="typo-support"
                    style={{ color: "rgba(255,255,255,0.8)" }}
                  >
                    Girls' Hostel · ~200 students
                  </span>
                </div>
              </div>
              <div className="p-4">
                <p className="typo-body text-sm" style={{ color: "#666" }}>
                  Modern block with in-suite study spaces, Wi-Fi throughout, and
                  a welcoming common room for relaxation and peer learning.
                </p>
              </div>
            </div>

            {/* Fee structure */}
            <div
              className="rounded-xl overflow-hidden flex-1"
              style={{ border: "1px solid rgba(26, 35, 126, 0.14)" }}
              data-ocid="facilities.hostels.fee_table"
            >
              <div
                className="px-4 py-3"
                style={{
                  background: `linear-gradient(135deg, ${COBALT}, ${DEEP_BLUE})`,
                }}
              >
                <h4 className="typo-card-title font-bold text-white text-sm">
                  Fee Structure (Approx.)
                </h4>
              </div>
              {FEE_TABLE.map((row) => (
                <div
                  key={row.type}
                  className="flex justify-between px-4 py-3 border-b last:border-0"
                  style={{ borderColor: "rgba(26, 35, 126, 0.08)" }}
                >
                  <span
                    className="typo-support font-medium"
                    style={{ color: DEEP_BLUE }}
                  >
                    {row.type}
                  </span>
                  <span
                    className="typo-support font-semibold"
                    style={{ color: COBALT }}
                  >
                    {row.fee}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Hostel Amenities with images ── */}
      <div className="mb-2">
        <h3
          className="typo-section-heading font-bold mb-6"
          style={{ color: DEEP_BLUE }}
        >
          Hostel Amenities
        </h3>
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          data-ocid="facilities.hostels.amenities_grid"
        >
          {HOSTEL_AMENITIES.map((a, i) => (
            <div
              key={a.label}
              className="rounded-2xl overflow-hidden transition-smooth hover:shadow-premium-hover hover:-translate-y-1 fade-in-up"
              style={{
                border: "1px solid rgba(26, 35, 126, 0.12)",
                background: "#fff",
                animationDelay: `${i * 70}ms`,
              }}
              data-ocid={`facilities.hostels.amenity.${i + 1}`}
            >
              {/* Amenity image */}
              <div
                className="relative overflow-hidden"
                style={{ height: "110px" }}
              >
                <img
                  src={a.img}
                  alt={a.label}
                  className="w-full h-full object-cover transition-smooth hover:scale-105"
                />
                <div
                  className="absolute inset-0 opacity-50"
                  style={{
                    background: `linear-gradient(to top, ${MIDNIGHT}, transparent)`,
                  }}
                />
                {/* Icon badge */}
                <div
                  className="absolute top-3 left-3 w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{
                    background: "rgba(255,255,255,0.9)",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  <a.icon className="w-4 h-4" style={{ color: COBALT }} />
                </div>
              </div>
              <div className="p-4">
                <h4
                  className="typo-card-title font-bold text-sm mb-1"
                  style={{ color: DEEP_BLUE }}
                >
                  {a.label}
                </h4>
                <p className="typo-support" style={{ color: "#777" }}>
                  {a.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── IT INFRASTRUCTURE TAB ────────────────────────────────────────────────────
const IT_FEATURES = [
  {
    icon: Wifi,
    title: "Campus-Wide Wi-Fi",
    desc: "Gigabit fiber backbone with 500 Mbps+ internet bandwidth. Full wireless coverage across all academic buildings, hostels, and open spaces through 200+ access points.",
    detail: "500 Mbps+ Bandwidth",
    side: "left" as const,
  },
  {
    icon: Monitor,
    title: "Computer Labs",
    desc: "400+ workstations across dedicated labs equipped with licensed software suites — MATLAB, AutoCAD, Ansys, MS Office 365, Adobe Creative Suite, and more.",
    detail: "400+ Workstations",
    side: "right" as const,
  },
  {
    icon: BookOpen,
    title: "Digital Library",
    desc: "24/7 access to e-journals, online databases, NPTEL courses, and a digital thesis repository through the campus intranet and VPN-enabled remote access.",
    detail: "24/7 Digital Access",
    side: "left" as const,
  },
  {
    icon: Wrench,
    title: "IT Helpdesk",
    desc: "Monday to Friday, 9 AM – 6 PM on-site support with an online ticketing system for hardware, software, network, and email-related issues.",
    detail: "Online Ticketing",
    side: "right" as const,
  },
];

function ITInfraTab() {
  return (
    <div>
      <SectionHeader
        title="Digital & IT Infrastructure"
        subtitle="A modern, high-speed digital backbone ensures every student and faculty member has seamless access to the resources they need, on or off campus."
      />

      <div className="space-y-6 mb-12" data-ocid="facilities.it.features_list">
        {IT_FEATURES.map((feature, i) => (
          <div
            key={feature.title}
            className={`flex items-start gap-5 rounded-2xl p-6 md:p-8 transition-smooth hover:shadow-premium-hover ${feature.side === "left" ? "fade-in-left" : "fade-in-right"}`}
            style={{
              border: "1px solid rgba(26, 35, 126, 0.14)",
              background: i % 2 === 0 ? "#fff" : "#f5f8ff",
              animationDelay: `${i * 100}ms`,
            }}
            data-ocid={`facilities.it.feature.${i + 1}`}
          >
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background: `linear-gradient(135deg, ${COBALT}, ${DEEP_BLUE})`,
              }}
            >
              <feature.icon className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-4 mb-2 flex-wrap">
                <h4
                  className="typo-card-title text-lg font-bold"
                  style={{ color: DEEP_BLUE }}
                >
                  {feature.title}
                </h4>
                <span
                  className="typo-section-label px-3 py-1 rounded-full flex-shrink-0"
                  style={{
                    backgroundColor: "rgba(26, 35, 126, 0.1)",
                    color: COBALT,
                  }}
                >
                  {feature.detail}
                </span>
              </div>
              <p className="typo-body text-sm" style={{ color: "#555" }}>
                {feature.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick stats row */}
      <div
        className="rounded-2xl p-6 md:p-8"
        style={{
          background: `linear-gradient(135deg, ${MIDNIGHT}, ${COBALT})`,
        }}
        data-ocid="facilities.it.stats_bar"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { target: 200, suffix: "+", label: "Wi-Fi Access Points" },
            { target: 500, suffix: " Mbps", label: "Internet Bandwidth" },
            { target: 400, suffix: "+", label: "Workstations" },
            { target: 12, suffix: "", label: "E-Database Subscriptions" },
          ].map((s) => (
            <div key={s.label}>
              <div className="typo-stat-number text-white">
                <AnimatedCounter target={s.target} suffix={s.suffix} />
              </div>
              <div
                className="typo-stat-label mt-1"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── AUDITORIUMS TAB ──────────────────────────────────────────────────────────
const VENUES = [
  {
    icon: Building2,
    name: "Main Auditorium",
    capacity: "1,000",
    features: [
      "Air-conditioned",
      "Professional Stage",
      "HD Projection System",
      "Professional Sound System",
      "Green Room",
      "Live Streaming Ready",
    ],
    highlight:
      "Premier venue for convocations, major seminars, and cultural events.",
    gradient: `linear-gradient(135deg, ${MIDNIGHT}, ${COBALT})`,
  },
  {
    icon: Tv2,
    name: "Seminar Halls (10+)",
    capacity: "60–100 each",
    features: [
      "Projectors & Screen",
      "Air-conditioned",
      "Interactive Whiteboards",
      "Video Conferencing",
      "Flexible Seating",
      "Recording Facility",
    ],
    highlight: "Ideal for department seminars, workshops, and guest lectures.",
    gradient: `linear-gradient(135deg, ${COBALT}, ${DEEP_BLUE})`,
  },
  {
    icon: Users,
    name: "Conference Rooms",
    capacity: "15–30",
    features: [
      "Boardroom-style Layout",
      "Video Conferencing",
      "Smart Whiteboard",
      "Presentation System",
      "Breakout Space",
      "Catering Available",
    ],
    highlight:
      "Premium rooms for faculty meetings, collaborations, and MoU signings.",
    gradient: `linear-gradient(135deg, ${DEEP_BLUE}, ${MIDNIGHT})`,
  },
];

function AuditoriumsTab() {
  return (
    <div>
      <SectionHeader
        title="Auditoriums & Meeting Rooms"
        subtitle="World-class venues for academic events, cultural celebrations, and official gatherings — equipped with modern AV technology and professional-grade facilities."
      />

      <div
        className="grid md:grid-cols-3 gap-6 mb-12"
        data-ocid="facilities.auditoriums.venues_grid"
      >
        {VENUES.map((venue, i) => (
          <div
            key={venue.name}
            className="rounded-2xl overflow-hidden transition-smooth hover:shadow-premium-hover hover:-translate-y-1 fade-in-up"
            style={{
              border: "1px solid rgba(26, 35, 126, 0.14)",
              animationDelay: `${i * 120}ms`,
            }}
            data-ocid={`facilities.auditoriums.venue.${i + 1}`}
          >
            {/* Card header */}
            <div className="p-6" style={{ background: venue.gradient }}>
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "rgba(255,255,255,0.15)" }}
              >
                <venue.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="typo-card-title text-white mb-1">{venue.name}</h4>
              <div className="flex items-center gap-2">
                <span
                  className="typo-support font-semibold px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: GOLD, color: MIDNIGHT }}
                >
                  Capacity: {venue.capacity}
                </span>
              </div>
            </div>

            {/* Features */}
            <div className="p-6 bg-white">
              <p
                className="typo-body text-sm mb-4 italic"
                style={{ color: "#666" }}
              >
                {venue.highlight}
              </p>
              <ul className="space-y-1.5 mb-5">
                {venue.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 typo-body text-sm"
                    style={{ color: "#555" }}
                  >
                    <CheckCircle2
                      className="w-4 h-4 flex-shrink-0"
                      style={{ color: COBALT }}
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className="typo-btn w-full py-2.5 rounded-lg transition-smooth hover:shadow-cobalt hover:-translate-y-0.5"
                style={{ backgroundColor: COBALT, color: "#fff" }}
                data-ocid={`facilities.auditoriums.book_button.${i + 1}`}
              >
                Book This Venue
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Booking info banner */}
      <div
        className="rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6"
        style={{
          background: "#f5f8ff",
          border: "1px solid rgba(26,35,126,0.14)",
        }}
        data-ocid="facilities.auditoriums.booking_info"
      >
        <div className="flex-1">
          <h4
            className="typo-card-title font-bold mb-2"
            style={{ color: DEEP_BLUE }}
          >
            Venue Booking Enquiries
          </h4>
          <p className="typo-body text-sm mb-3" style={{ color: "#555" }}>
            To book any auditorium, seminar hall, or conference room for
            academic or official events, contact the Facilities Office at least
            7 working days in advance.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <a
              href="mailto:facilities@coeptech.ac.in"
              className="typo-support flex items-center gap-2"
              style={{ color: COBALT }}
            >
              <Mail className="w-4 h-4" /> facilities@coeptech.ac.in
            </a>
            <a
              href="tel:+912025507200"
              className="typo-support flex items-center gap-2"
              style={{ color: COBALT }}
            >
              <Phone className="w-4 h-4" /> +91-20-2550 7200
            </a>
          </div>
        </div>
        <div className="flex-shrink-0">
          <div className="grid grid-cols-3 gap-3 text-center">
            {[
              { target: 1000, suffix: "", label: "Seat Auditorium" },
              { target: 10, suffix: "+", label: "Seminar Halls" },
              { target: 5, suffix: "+", label: "Conf. Rooms" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-xl p-4"
                style={{
                  backgroundColor: "rgba(26, 35, 126, 0.06)",
                  border: "1px solid rgba(26, 35, 126, 0.12)",
                }}
              >
                <div className="typo-stat-number" style={{ color: COBALT }}>
                  <AnimatedCounter target={s.target} suffix={s.suffix} />
                </div>
                <div className="typo-stat-label mt-1" style={{ color: "#888" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function FacilitiesPage() {
  const params = useParams({ strict: false }) as { sectionId?: string };
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<string>(
    params.sectionId ?? "overview",
  );

  useEffect(() => {
    if (params.sectionId && params.sectionId !== activeTab) {
      setActiveTab(params.sectionId);
    }
  }, [params.sectionId, activeTab]);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    navigate({ to: "/facilities/$sectionId", params: { sectionId: tabId } });
  };

  const renderTab = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewTab />;
      case "library":
        return <LibraryTab />;
      case "laboratories":
        return <LaboratoriesTab />;
      case "sports":
        return <SportsTab />;
      case "hostels":
        return <HostelsTab />;
      case "it":
        return <ITInfraTab />;
      case "auditoriums":
        return <AuditoriumsTab />;
      default:
        return <OverviewTab />;
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <HeroSection />

      {/* Sub-tab ribbon */}
      <SubTabRibbon
        tabs={TABS}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />

      {/* Tab content */}
      <div
        className="max-w-6xl mx-auto px-6 py-14"
        data-ocid="facilities.content_area"
      >
        {renderTab()}
      </div>
    </Layout>
  );
}
