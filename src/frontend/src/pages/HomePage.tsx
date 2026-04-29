import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  getCampusImageFallback,
  getCampusImageUrl,
  getEventImageFallback,
  getEventImageUrl,
  getResearchImageFallback,
  getResearchImageUrl,
} from "@/utils/generatedImages";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

/* ─── Scroll-reveal hook ─────────────────────────────────────────────────── */
function useScrollReveal<T extends HTMLElement>(threshold = 0.12) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ─── Data ───────────────────────────────────────────────────────────────── */

const ANNOUNCEMENTS = [
  "Admissions 2024-25 Open for B.Tech, M.Tech, MBA and PhD Programs — Apply Now!",
  "COEP Tech ranked in NIRF Top 100 Engineering Colleges across India",
  "Research Innovation Hub: New Incubation Center inaugurated at Bhau Institute",
  "International Collaborations: MOUs signed with 15+ global universities",
  "Placements 2024: 95%+ placement rate with ₹87 LPA highest package",
  "ZEST 2024 — Annual Technical Festival Registration Now Open",
  "Dr. Sunil Bhirud appointed Vice Chancellor of COEP Technological University",
  "M.Tech in Automotive Systems for Working Professionals — 3rd batch commencing August 2026",
  "98th Edition of Regatta: Live Streaming available — March 22, 2026",
  "Two-Day Workshop: Fundamentals of Statistics & Machine Learning for Researchers",
];

interface EventItem {
  title: string;
  date: string;
  description: string;
  category: string;
  gradient: string;
}

const EVENTS: EventItem[] = [
  {
    title: "ZEST '26 — Annual Technical Festival",
    date: "Jan 23–25, 2026",
    description:
      "COEP Tech's flagship technical extravaganza featuring robotics, hackathons, and innovation challenges drawing participants from 200+ colleges.",
    category: "Festival",
    gradient: "linear-gradient(135deg, #1A237E 0%, #0F3399 100%)",
  },
  {
    title: "98th Regatta Rowing Championships",
    date: "March 22, 2026",
    description:
      "Witness the spectacular 98th edition of COEP's legendary Regatta on the Mula river — Asia's oldest collegiate rowing event.",
    category: "Sports",
    gradient: "linear-gradient(135deg, #0F3399 0%, #081E5C 100%)",
  },
  {
    title: "Impressions — Cultural Fest",
    date: "February 14–16, 2026",
    description:
      "Annual cultural festival celebrating music, dance, drama and fine arts with performances by renowned national artists.",
    category: "Culture",
    gradient: "linear-gradient(135deg, #C9A84C 0%, #E8C42A 100%)",
  },
  {
    title: "Industry Connect Summit 2026",
    date: "April 10, 2026",
    description:
      "Annual conclave bringing industry leaders and COEP faculty together for panel discussions on emerging technology trends.",
    category: "Academic",
    gradient: "linear-gradient(135deg, #1A237E 0%, #0F3399 100%)",
  },
  {
    title: "Research Paper Presentation Day",
    date: "March 28, 2026",
    description:
      "Showcase your research to faculty, industry experts, and peers. Best papers win publication support and cash awards.",
    category: "Research",
    gradient: "linear-gradient(135deg, #0F3399 0%, #1A237E 100%)",
  },
  {
    title: "VIVEKMALA '26",
    date: "April 5–6, 2026",
    description:
      "From Vision to Victory — inter-college management and entrepreneurship conclave with case competitions and guest speakers.",
    category: "Management",
    gradient: "linear-gradient(135deg, #081E5C 0%, #0F3399 100%)",
  },
];

interface NoticeItem {
  title: string;
  date: string;
  description: string;
  tag: string;
  gradient: string;
}

const NOTICES: NoticeItem[] = [
  {
    title: "Examination Schedule 2024–25",
    date: "Issued: Dec 10, 2025",
    description:
      "End semester examinations for all UG and PG programs. Download hall tickets and report to exam halls 30 minutes early.",
    tag: "Examination",
    gradient: "linear-gradient(135deg, #1A237E 0%, #0F3399 100%)",
  },
  {
    title: "Scholarship Application Deadline",
    date: "Last date: Jan 15, 2026",
    description:
      "Applications open for Government of Maharashtra merit and means-based scholarships. Submit required documents to the scholarship office.",
    tag: "Scholarship",
    gradient: "linear-gradient(135deg, #C9A84C 0%, #E8C42A 100%)",
  },
  {
    title: "Fee Payment — Last Date Notice",
    date: "Due: Jan 31, 2026",
    description:
      "Semester fee payment deadline for all enrolled students. Late submissions attract a penalty of ₹500 per day. Pay via SBI portal.",
    tag: "Finance",
    gradient: "linear-gradient(135deg, #0F3399 0%, #081E5C 100%)",
  },
  {
    title: "Academic Calendar 2025–26 Released",
    date: "Published: Nov 1, 2025",
    description:
      "The official academic calendar for AY 2025–26 is now available. Review semester dates, holiday list, and examination windows.",
    tag: "Academic",
    gradient: "linear-gradient(135deg, #1A237E 0%, #0F3399 100%)",
  },
  {
    title: "Holiday List 2024–25",
    date: "Updated: Jan 2025",
    description:
      "List of public holidays and university holidays for the academic year 2024–25 as approved by the Board of Governance.",
    tag: "General",
    gradient: "linear-gradient(135deg, #0F3399 0%, #1A237E 100%)",
  },
  {
    title: "PhD Viva-Voce Schedule",
    date: "February 2026",
    description:
      "Open defense schedule for all registered PhD scholars for the February 2026 cycle. Candidates should contact their guides.",
    tag: "PhD",
    gradient: "linear-gradient(135deg, #081E5C 0%, #0F3399 100%)",
  },
];

interface NewsItem {
  num: number;
  title: string;
  date: string;
  excerpt: string;
}

const NEWS_ALL: NewsItem[] = [
  {
    num: 1,
    title: "98th Edition of Regatta — Live Streaming",
    date: "March 22, 2026",
    excerpt:
      "Watch the iconic rowing championship live. COEP's Regatta is one of the oldest and largest inter-collegiate rowing events in Asia.",
  },
  {
    num: 2,
    title: "VIVEKMALA '26: From Vision to Victory",
    date: "April 5, 2026",
    excerpt:
      "COEP Tech's annual fest brings together the best minds from across the country for two days of competition, creativity, and celebration.",
  },
  {
    num: 3,
    title: "CAS Applications — Deadline March 23",
    date: "March 23, 2026",
    excerpt:
      "Students are reminded to submit their CAS applications before the deadline. Contact the Academic Section for assistance.",
  },
  {
    num: 4,
    title: "Alumnus Bharat Gite Represents COEP at WEF 2026",
    date: "February 2026",
    excerpt:
      "COEP Tech alumnus and Founder of Taural India Pvt Ltd, Bharat Gite, represented COEP at the World Economic Forum 2026 in Davos.",
  },
  {
    num: 5,
    title: "COEP BoG Chairman Honoured with CEPM Fellowship",
    date: "January 2026",
    excerpt:
      "Mr. Vinayak Pai, Chairman of the Board of Governance, was honoured with an Honorary CEPM Fellowship.",
  },
  {
    num: 6,
    title: "ZEST '26 — Annual Sports Festival",
    date: "January 23–25, 2026",
    excerpt:
      "COEP Tech proudly presents ZEST '26, celebrating competitive spirit, teamwork, and excellence across multiple sports disciplines.",
  },
  {
    num: 7,
    title: "Catalyst for Change: IUPAC Global Women's Breakfast",
    date: "February 10, 2026",
    excerpt:
      "COEP Tech hosted the IUPAC Global Women's Breakfast event, celebrating women in science and engineering.",
  },
  {
    num: 8,
    title: "Expert Talk: AI in the Real World",
    date: "February 2026",
    excerpt:
      "Leading industry experts shared insights on practical AI applications in manufacturing, healthcare, and smart infrastructure.",
  },
];

interface StatDef {
  prefix?: string;
  suffix?: string;
  target: number;
  startNear?: boolean;
  label: string;
  description: string;
}

const STAT_DEFS: StatDef[] = [
  {
    target: 1854,
    startNear: true,
    label: "Year Established",
    description:
      "One of Asia's oldest engineering institutions, founded in 1854",
  },
  {
    suffix: "+",
    target: 15000,
    label: "Students Enrolled",
    description:
      "Vibrant academic community across UG, PG, and doctoral programs",
  },
  {
    suffix: "%+",
    target: 95,
    label: "Placement Rate",
    description:
      "Consistent placement excellence with top global and Indian companies",
  },
  {
    suffix: "+",
    target: 500,
    label: "Research Publications",
    description:
      "Annual research output across engineering, technology, and management",
  },
  {
    suffix: "+",
    target: 50000,
    label: "Alumni Network",
    description:
      "Global alumni shaping industries across 40+ countries worldwide",
  },
  {
    prefix: "₹",
    suffix: "Cr+",
    target: 200,
    label: "Research Grants",
    description:
      "Government and industry-funded research projects driving innovation",
  },
  {
    suffix: "+",
    target: 312,
    label: "PhD Scholars",
    description:
      "Active doctoral researchers pursuing cutting-edge academic research",
  },
  {
    suffix: "+",
    target: 100,
    label: "Industry Partners",
    description:
      "MoUs with leading corporations driving industry-academia collaboration",
  },
];

interface ResearchPaper {
  title: string;
  authors: string;
  journal: string;
  year: number;
  abstract: string;
  url: string;
}

const RESEARCH_PAPERS: ResearchPaper[] = [
  {
    title: "Smart Manufacturing using IoT and Machine Learning",
    authors: "Dr. M. Nandgaonkar et al.",
    journal: "IEEE Transactions on Industrial Informatics",
    year: 2023,
    abstract:
      "A comprehensive framework integrating IoT sensors with ML models for real-time defect detection and predictive maintenance in precision manufacturing.",
    url: "https://ieeexplore.ieee.org/",
  },
  {
    title: "Augmented Reality in Engineering Education",
    authors: "Dr. Y. Haribhakta",
    journal: "Springer Education Sciences",
    year: 2023,
    abstract:
      "Novel AR-based pedagogy for structural engineering courses demonstrating 40% improvement in spatial understanding and concept retention.",
    url: "https://link.springer.com/",
  },
  {
    title: "Sustainable Urban Planning with AI",
    authors: "Prof. R. Joshi",
    journal: "Elsevier Cities Journal",
    year: 2022,
    abstract:
      "Multi-objective optimization algorithm for urban land-use planning balancing density, green space, and infrastructure costs in Indian metros.",
    url: "https://www.sciencedirect.com/",
  },
  {
    title: "Blockchain for Supply Chain Transparency",
    authors: "Dr. A. Kulkarni",
    journal: "ACM Computing Surveys",
    year: 2023,
    abstract:
      "Decentralized ledger architecture enabling end-to-end traceability in pharmaceutical supply chains, reducing counterfeit risk by 85%.",
    url: "https://dl.acm.org/",
  },
  {
    title: "Deep Learning for Medical Image Analysis",
    authors: "Dr. S. Meshram",
    journal: "Nature Machine Intelligence",
    year: 2022,
    abstract:
      "U-Net variant achieving 97.3% accuracy in early-stage tumor detection across multi-modal MRI datasets from tertiary care hospitals.",
    url: "https://www.nature.com/",
  },
  {
    title: "Renewable Energy Optimization",
    authors: "Dr. P. Kadu",
    journal: "IEEE Energy Conversion",
    year: 2023,
    abstract:
      "Hybrid solar-wind-storage microgrid control strategy reducing energy cost by 32% while maintaining 99.2% power reliability in rural deployments.",
    url: "https://ieeexplore.ieee.org/",
  },
];

const TIMELINE_PREVIEW = [
  {
    year: "1854",
    title: "Foundation — Poona Civil Engineering College",
    description:
      "Founded by the British under Col. Francis Oliphant as Poona Civil Engineering College, one of the first engineering institutions in Asia.",
    color: "#1A237E",
    imageUrl: "/assets/generated/timeline-1854-foundation.dim_800x500.jpg",
  },
  {
    year: "1911",
    title: "Renamed — College of Engineering, Pune",
    description:
      "Re-designated as the College of Engineering, Pune (COEP), marking a new era of expanded programs and modernized infrastructure.",
    color: "#0F3399",
    imageUrl: "/assets/generated/timeline-1911-rename.dim_800x500.jpg",
  },
  {
    year: "1947",
    title: "Post-Independence Expansion",
    description:
      "Following Indian independence, COEP expanded rapidly under the Maharashtra Government, becoming a premier institution for the nation's engineering workforce.",
    color: "#1A237E",
    imageUrl: "/assets/generated/timeline-1947-independence.dim_800x500.jpg",
  },
  {
    year: "2022",
    title: "Elevated to Autonomous University Status",
    description:
      "Elevated to COEP Technological University — a Unitary Public University of the Government of Maharashtra, with full academic and administrative autonomy.",
    color: "#1A237E",
    imageUrl: "/assets/generated/timeline-2022-university.dim_800x500.jpg",
  },
];

const LIFE_IMAGES = [
  {
    label: "Historic Campus",
    gradient: "linear-gradient(135deg, #1A237E 20%, #0F3399 100%)",
    size: "large",
  },
  {
    label: "Sports & Athletics",
    gradient: "linear-gradient(135deg, #0F3399 0%, #081E5C 100%)",
    size: "small",
  },
  {
    label: "Cultural Fests",
    gradient: "linear-gradient(135deg, #C9A84C 0%, #E8C42A 100%)",
    size: "small",
  },
  {
    label: "Research Labs",
    gradient: "linear-gradient(135deg, #081E5C 0%, #1A237E 100%)",
    size: "small",
  },
  {
    label: "Library",
    gradient: "linear-gradient(135deg, #0F3399 0%, #1A237E 100%)",
    size: "small",
  },
];

/* ─── Animated counter hook ────────────────────────────────────────────── */
function useCountUp(target: number, active: boolean, startNear?: boolean) {
  const [count, setCount] = useState(startNear ? target - 14 : 0);
  const frameRef = useRef<number | null>(null);
  const startedRef = useRef(false);
  useEffect(() => {
    if (!active || startedRef.current) return;
    startedRef.current = true;
    const start = startNear ? Math.max(target - 14, 0) : 0;
    const duration = 1800;
    const startTime = performance.now();
    function easeOutQuart(t: number) {
      return 1 - (1 - t) ** 4;
    }
    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuart(progress);
      setCount(Math.round(start + (target - start) * eased));
      if (progress < 1) frameRef.current = requestAnimationFrame(tick);
    }
    frameRef.current = requestAnimationFrame(tick);
    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, [active, target, startNear]);
  return count;
}

/* ─── Video Hero ─────────────────────────────────────────────────────────── */
function VideoHero() {
  return (
    <section
      id="top"
      className="relative w-full overflow-hidden"
      style={{ height: "100vh", minHeight: 520 }}
      data-ocid="hero.section"
    >
      {/* Fullscreen YouTube background video */}
      <iframe
        src="https://www.youtube.com/embed/dHMneVzPHkk?autoplay=1&mute=1&loop=1&playlist=dHMneVzPHkk&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1"
        title="COEP Campus Video"
        allow="autoplay; fullscreen"
        className="absolute"
        style={{
          top: "50%",
          left: "50%",
          width: "177.78vh",
          minWidth: "100%",
          height: "56.25vw",
          minHeight: "100%",
          transform: "translate(-50%, -50%)",
          border: "none",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Dark overlay for text readability */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(0,0,0,0.45)", zIndex: 1 }}
      />

      {/* Centered title — only content */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ zIndex: 10 }}
      >
        <h1
          className="typo-hero-heading text-white text-center fade-in-up"
          style={{
            maxWidth: "900px",
            padding: "0 1.5rem",
            textShadow:
              "0 2px 24px rgba(0,0,0,0.65), 0 1px 4px rgba(0,0,0,0.5)",
            animationDelay: "0.1s",
          }}
        >
          COEP Technological University
        </h1>
      </div>
    </section>
  );
}

/* ─── News Ticker ─────────────────────────────────────────────────────────── */
function NewsTicker() {
  const items = [...ANNOUNCEMENTS, ...ANNOUNCEMENTS];
  const tickerRef = useRef<HTMLDivElement>(null);
  return (
    <div
      id="announcements"
      className="w-full flex items-stretch overflow-hidden"
      style={{ background: "#081E5C", height: 48 }}
      data-ocid="announcements.section"
    >
      {/* Gold label */}
      <div
        className="flex-shrink-0 flex items-center gap-2 px-5"
        style={{
          background: "#1A237E",
          borderRight: "2px solid rgba(255,255,255,0.4)",
        }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-accent-gold animate-pulse-cobalt" />
        <span className="typo-section-label text-white whitespace-nowrap">
          ANNOUNCEMENTS
        </span>
      </div>
      {/* Scrolling band */}
      <div
        className="flex-1 overflow-hidden relative flex items-center"
        onMouseEnter={() => {
          if (tickerRef.current)
            tickerRef.current.style.animationPlayState = "paused";
        }}
        onMouseLeave={() => {
          if (tickerRef.current)
            tickerRef.current.style.animationPlayState = "running";
        }}
      >
        {/* Fade masks */}
        <div
          className="absolute left-0 top-0 bottom-0 w-8 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to right, #081E5C, transparent)",
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-8 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to left, #081E5C, transparent)",
          }}
        />
        <div
          ref={tickerRef}
          className="flex items-center whitespace-nowrap"
          style={{
            animation: "tickerScroll 55s linear infinite",
            animationPlayState: "running",
          }}
        >
          {items.map((item, i) => (
            <span
              key={`ticker-${i}-${item.slice(0, 12)}`}
              className="flex items-center gap-0 text-white/90 typo-nav"
              style={{ fontSize: 13.5 }}
            >
              <span
                className="mx-5"
                style={{ color: "rgba(255,255,255,0.5)", opacity: 0.8 }}
              >
                ◆
              </span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Portrait Card ───────────────────────────────────────────────────────── */
function PortraitCard({
  title,
  date,
  description,
  tag,
  gradient,
  index,
}: {
  title: string;
  date: string;
  description: string;
  tag: string;
  gradient: string;
  index: number;
}) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const [hovered, setHovered] = useState(false);
  const imgSrc = getEventImageUrl(tag);
  const imgFallback = getEventImageFallback(tag);
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col bg-card border border-border overflow-hidden cursor-pointer"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.55s ease ${index * 0.1}s, transform 0.55s ease ${index * 0.1}s`,
        boxShadow: hovered
          ? "0 16px 40px rgba(26, 35, 126, 0.18)"
          : "0 2px 12px rgba(0,0,0,0.06)",
        transitionProperty: "opacity, transform, box-shadow",
        minHeight: 420,
      }}
      data-ocid={`card.item.${index + 1}`}
    >
      {/* Image area */}
      <div
        className="flex-shrink-0 relative overflow-hidden"
        style={{ height: 200 }}
      >
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover"
          style={{
            transform: hovered ? "scale(1.04)" : "scale(1)",
            transition: "transform 0.55s cubic-bezier(0.4,0,0.2,1)",
          }}
          onError={(e) => {
            const el = e.currentTarget as HTMLImageElement;
            if (el.src !== imgFallback) {
              el.src = imgFallback;
            } else {
              el.style.display = "none";
              const parent = el.parentElement;
              if (parent) parent.style.background = gradient;
            }
          }}
        />
        {/* Tag pill */}
        <div
          className="absolute top-3 left-3 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-white"
          style={{
            background: "rgba(0,0,0,0.45)",
            backdropFilter: "blur(4px)",
          }}
        >
          {tag}
        </div>
      </div>
      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3
          className="typo-card-title leading-snug mb-2"
          style={{ color: "#0F3399" }}
        >
          {title}
        </h3>
        <p className="typo-card-desc text-muted-foreground leading-relaxed flex-1 mb-4">
          {description}
        </p>
        {/* Date pill */}
        <div className="flex items-center gap-1.5 mt-auto pt-3 border-t border-border">
          <span
            className="text-xs font-medium px-2.5 py-1"
            style={{ background: "rgba(26, 35, 126, 0.08)", color: "#1A237E" }}
          >
            {date}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─── Generic Portrait Carousel ──────────────────────────────────────────── */
function PortraitCarousel({
  items,
  sectionId,
}: {
  items: (EventItem | NoticeItem)[];
  sectionId: string;
}) {
  const [startIdx, setStartIdx] = useState(0);
  const total = items.length;
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [cardsVisible, setCardsVisible] = useState(3);

  useEffect(() => {
    function update() {
      if (window.innerWidth < 640) setCardsVisible(1);
      else if (window.innerWidth < 1024) setCardsVisible(2);
      else setCardsVisible(3);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const prev = useCallback(() => {
    setStartIdx((s) => (s - 1 + total) % total);
    if (timerRef.current) clearInterval(timerRef.current);
  }, [total]);
  const next = useCallback(() => {
    setStartIdx((s) => (s + 1) % total);
    if (timerRef.current) clearInterval(timerRef.current);
  }, [total]);

  useEffect(() => {
    timerRef.current = setInterval(
      () => setStartIdx((s) => (s + 1) % total),
      5000,
    );
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [total]);

  const visibleIndices = Array.from(
    { length: cardsVisible },
    (_, i) => (startIdx + i) % total,
  );

  return (
    <div
      className="relative flex items-stretch gap-6"
      data-ocid={`${sectionId}.carousel`}
    >
      <button
        type="button"
        onClick={prev}
        className="flex-shrink-0 self-center w-11 h-11 rounded-full border border-border flex items-center justify-center transition-smooth hover:border-accent-gold hover:text-accent-gold hover:shadow-gold z-10"
        aria-label="Previous"
        data-ocid={`${sectionId}.pagination_prev`}
        style={{ background: "#fff" }}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <div
        className="flex-1 grid gap-6"
        style={{ gridTemplateColumns: `repeat(${cardsVisible}, 1fr)` }}
      >
        {visibleIndices.map((idx, i) => {
          const item = items[idx];
          const isEvent = "category" in item;
          return (
            <PortraitCard
              key={`${sectionId}-${idx}`}
              title={item.title}
              date={item.date}
              description={item.description}
              tag={
                isEvent
                  ? (item as EventItem).category
                  : (item as NoticeItem).tag
              }
              gradient={item.gradient}
              index={i}
            />
          );
        })}
      </div>
      <button
        type="button"
        onClick={next}
        className="flex-shrink-0 self-center w-11 h-11 rounded-full border border-border flex items-center justify-center transition-smooth hover:border-accent-gold hover:text-accent-gold hover:shadow-gold z-10"
        aria-label="Next"
        data-ocid={`${sectionId}.pagination_next`}
        style={{ background: "#fff" }}
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}

/* ─── Events Section ─────────────────────────────────────────────────────── */
function EventsSection() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  return (
    <section className="py-20 bg-background" data-ocid="events.section">
      <div className="container px-4 md:px-8">
        <div
          ref={ref}
          className="mb-12"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <p className="typo-section-label text-muted-foreground mb-2">
            What's On
          </p>
          <h2 className="typo-section-heading" style={{ color: "#0F3399" }}>
            Upcoming Events
          </h2>
          <div className="divider-gold mt-3" />
        </div>
        <PortraitCarousel items={EVENTS} sectionId="events" />
        {/* Dots */}
        <div className="flex gap-2 justify-center mt-8">
          {EVENTS.map((ev) => (
            <div
              key={ev.title}
              className="rounded-full transition-all duration-300"
              style={{
                width: 8,
                height: 8,
                background: "rgba(26, 35, 126, 0.25)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Notices Section ────────────────────────────────────────────────────── */
function NoticesSection() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  return (
    <section
      className="py-20"
      style={{ background: "oklch(0.97 0 0)" }}
      data-ocid="notices.section"
    >
      <div className="container px-4 md:px-8">
        <div
          ref={ref}
          className="mb-12"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <p className="typo-section-label text-muted-foreground mb-2">
            Official Communications
          </p>
          <h2 className="typo-section-heading" style={{ color: "#0F3399" }}>
            Notices & Circulars
          </h2>
          <div className="divider-gold mt-3" />
        </div>
        <PortraitCarousel items={NOTICES} sectionId="notices" />
      </div>
    </section>
  );
}

/* ─── Collaborations & MoU Section ──────────────────────────────────────── */

interface CollabPartner {
  name: string;
  type: "industry" | "international";
  logo?: string;
  country?: string;
}

const COLLAB_PARTNERS: CollabPartner[] = [
  // Industry
  { name: "Tata Group", type: "industry" },
  { name: "Bosch", type: "industry" },
  { name: "DRDO", type: "industry" },
  { name: "ISRO", type: "industry" },
  { name: "Siemens", type: "industry" },
  { name: "Thermax", type: "industry" },
  { name: "Cummins India", type: "industry" },
  { name: "Forbes Marshall", type: "industry" },
  { name: "Bajaj Auto", type: "industry" },
  { name: "Wipro", type: "industry" },
  // International
  { name: "TU Delft", type: "international", country: "Netherlands" },
  { name: "MIT", type: "international", country: "USA" },
  { name: "KIT Karlsruhe", type: "international", country: "Germany" },
  { name: "NUS Singapore", type: "international", country: "Singapore" },
  { name: "Politecnico di Milano", type: "international", country: "Italy" },
  { name: "TU Munich", type: "international", country: "Germany" },
  { name: "Monash University", type: "international", country: "Australia" },
  { name: "Waseda University", type: "international", country: "Japan" },
];

const INDUSTRY_PARTNERS = COLLAB_PARTNERS.filter((p) => p.type === "industry");
const INTL_PARTNERS = COLLAB_PARTNERS.filter((p) => p.type === "international");

function CollabLogoTicker({
  partners,
  reverse,
}: { partners: CollabPartner[]; reverse?: boolean }) {
  const items = [...partners, ...partners];
  const tickerRef = useRef<HTMLDivElement>(null);
  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => {
        if (tickerRef.current)
          tickerRef.current.style.animationPlayState = "paused";
      }}
      onMouseLeave={() => {
        if (tickerRef.current)
          tickerRef.current.style.animationPlayState = "running";
      }}
    >
      <div
        className="absolute left-0 top-0 bottom-0 w-12 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to right, #f7f9ff, transparent)",
        }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-12 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #f7f9ff, transparent)" }}
      />
      <div
        ref={tickerRef}
        className="flex items-center gap-3 whitespace-nowrap"
        style={{
          animation: `tickerScroll ${reverse ? "20s" : "22s"} linear infinite ${reverse ? "reverse" : ""}`,
          animationPlayState: "running",
        }}
      >
        {items.map((p, i) => (
          <div
            key={`collab-${p.type}-${i}-${p.name.slice(0, 6)}`}
            className="flex-shrink-0 flex items-center justify-center px-4 py-2 border font-semibold text-xs uppercase tracking-wider"
            style={{
              background: "#fff",
              borderColor: "rgba(26, 35, 126, 0.14)",
              color: "#1A237E",
              minWidth: 120,
              fontFamily: "Source Sans 3, sans-serif",
              letterSpacing: "0.08em",
            }}
          >
            {p.name}
            {p.country && (
              <span
                className="ml-1.5 opacity-60 text-[10px] normal-case tracking-normal font-normal"
                style={{ color: "#4A3FA0" }}
              >
                {p.country}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function CollaborationsSection() {
  const { ref: headRef, visible: headVisible } =
    useScrollReveal<HTMLDivElement>();
  const { ref: leftRef, visible: leftVisible } =
    useScrollReveal<HTMLDivElement>(0.1);
  const { ref: rightRef, visible: rightVisible } =
    useScrollReveal<HTMLDivElement>(0.1);

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: "#f7f9ff" }}
      data-ocid="collaborations.section"
    >
      {/* Subtle diagonal accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 90% 50%, rgba(26,35,126,0.05) 0%, transparent 70%)",
        }}
      />
      <div className="container px-4 md:px-8 relative">
        {/* Heading */}
        <div
          ref={headRef}
          className="text-center mb-14"
          style={{
            opacity: headVisible ? 1 : 0,
            transform: headVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <p className="typo-section-label text-muted-foreground mb-2">
            Global Footprint
          </p>
          <h2 className="typo-section-heading" style={{ color: "#0F3399" }}>
            Collaborations & MoUs
          </h2>
          <p className="typo-body mt-3 max-w-xl mx-auto text-muted-foreground">
            Bridging academia and industry through 100+ active partnerships with
            leading corporations and global universities
          </p>
          <div className="divider-gold mt-5 mx-auto" />
        </div>

        {/* Two-column split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {/* Industry Partners column */}
          <div
            ref={leftRef}
            className="relative overflow-hidden border border-border"
            style={{
              opacity: leftVisible ? 1 : 0,
              transform: leftVisible ? "translateX(0)" : "translateX(-28px)",
              transition: "opacity 0.65s ease 0.1s, transform 0.65s ease 0.1s",
              background: "#fff",
            }}
            data-ocid="collaborations.industry_panel"
          >
            {/* Colour stripe on top */}
            <div
              className="h-1 w-full"
              style={{
                background:
                  "linear-gradient(90deg, #1A237E 0%, #0F3399 50%, #E8C42A 100%)",
              }}
            />
            <div className="p-7">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-9 h-9 flex items-center justify-center rounded-full"
                  style={{ background: "rgba(26,35,126,0.1)" }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1A237E"
                    strokeWidth={2}
                    className="w-5 h-5"
                    aria-hidden="true"
                  >
                    <rect x={2} y={7} width={20} height={14} rx={1} />
                    <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                  </svg>
                </div>
                <div>
                  <h3
                    className="typo-card-title leading-none"
                    style={{ color: "#0F3399" }}
                  >
                    Industry Partners
                  </h3>
                  <p className="typo-support text-muted-foreground mt-0.5">
                    MoUs with leading Indian & global corporations
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {INDUSTRY_PARTNERS.map((p) => (
                  <span
                    key={p.name}
                    className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider border"
                    style={{
                      borderColor: "rgba(26,35,126,0.18)",
                      color: "#1A237E",
                      fontFamily: "Source Sans 3, sans-serif",
                      background: "rgba(26,35,126,0.04)",
                    }}
                  >
                    {p.name}
                  </span>
                ))}
              </div>
              <p
                className="mt-5 text-xs font-bold uppercase tracking-widest"
                style={{ color: "#E8C42A" }}
              >
                60+ Active Industry MoUs
              </p>
            </div>
          </div>

          {/* International Partners column */}
          <div
            ref={rightRef}
            className="relative overflow-hidden border border-border"
            style={{
              opacity: rightVisible ? 1 : 0,
              transform: rightVisible ? "translateX(0)" : "translateX(28px)",
              transition: "opacity 0.65s ease 0.2s, transform 0.65s ease 0.2s",
              background: "#fff",
            }}
            data-ocid="collaborations.international_panel"
          >
            <div
              className="h-1 w-full"
              style={{
                background:
                  "linear-gradient(90deg, #E8C42A 0%, #0F3399 50%, #1A237E 100%)",
              }}
            />
            <div className="p-7">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-9 h-9 flex items-center justify-center rounded-full"
                  style={{ background: "rgba(26,35,126,0.1)" }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1A237E"
                    strokeWidth={2}
                    className="w-5 h-5"
                    aria-hidden="true"
                  >
                    <circle cx={12} cy={12} r={10} />
                    <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
                  </svg>
                </div>
                <div>
                  <h3
                    className="typo-card-title leading-none"
                    style={{ color: "#0F3399" }}
                  >
                    International Universities
                  </h3>
                  <p className="typo-support text-muted-foreground mt-0.5">
                    Academic exchange & joint research with global institutions
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {INTL_PARTNERS.map((p) => (
                  <span
                    key={p.name}
                    className="px-3 py-1.5 text-xs font-semibold border"
                    style={{
                      borderColor: "rgba(26,35,126,0.18)",
                      color: "#1A237E",
                      fontFamily: "Source Sans 3, sans-serif",
                      background: "rgba(26,35,126,0.04)",
                    }}
                  >
                    {p.name}
                    <span
                      className="ml-1.5 opacity-55 text-[10px] font-normal"
                      style={{ color: "#4A3FA0" }}
                    >
                      {p.country}
                    </span>
                  </span>
                ))}
              </div>
              <p
                className="mt-5 text-xs font-bold uppercase tracking-widest"
                style={{ color: "#E8C42A" }}
              >
                40+ International University MoUs
              </p>
            </div>
          </div>
        </div>

        {/* Scrolling logo tickers */}
        <div className="space-y-3 mb-12">
          <CollabLogoTicker partners={INDUSTRY_PARTNERS} />
          <CollabLogoTicker partners={INTL_PARTNERS} reverse />
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Link to="/research" data-ocid="collaborations.view_all_button">
            <Button
              className="typo-btn px-10 py-3 rounded-none uppercase tracking-wider text-white transition-smooth"
              style={{ background: "#1A237E", border: "none" }}
            >
              View All Collaborations →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Latest News ─────────────────────────────────────────────────────────── */
function LatestNews() {
  const [expanded, setExpanded] = useState(false);
  const visibleNews = expanded ? NEWS_ALL : NEWS_ALL.slice(0, 3);
  return (
    <section
      className="py-16 bg-background"
      style={{}}
      data-ocid="news.section"
    >
      <div className="container px-4 md:px-8">
        <div className="mb-10">
          <p className="typo-section-label text-muted-foreground mb-2">
            Stay Informed
          </p>
          <h2 className="typo-section-heading" style={{ color: "#0F3399" }}>
            Latest News
          </h2>
          <div className="divider-gold mt-3" />
        </div>
        <div className="divide-y divide-border">
          {visibleNews.map((item, i) => (
            <div
              key={item.num}
              className="group relative flex gap-5 py-7 px-2 cursor-pointer"
              data-ocid={`news.item.${i + 1}`}
            >
              <div
                className="flex-shrink-0 font-black leading-none select-none typo-stat-number"
                style={{
                  fontSize: "clamp(2.8rem, 5vw, 4.2rem)",
                  color: "rgba(26, 35, 126, 0.18)",
                  minWidth: "4rem",
                  fontVariantNumeric: "tabular-nums",
                  lineHeight: 1,
                  fontFamily: "var(--font-nav)",
                }}
              >
                {String(item.num).padStart(2, "0")}
              </div>
              <div className="flex-1 min-w-0 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-1.5">
                  <span
                    className="text-xs font-semibold px-2 py-0.5"
                    style={{
                      background: "rgba(26, 35, 126, 0.08)",
                      color: "#1A237E",
                    }}
                  >
                    {item.date}
                  </span>
                </div>
                <h3
                  className="typo-card-title leading-snug mb-1.5 group-hover:text-accent-gold transition-smooth"
                  style={{ color: "#0F3399" }}
                >
                  {item.title}
                </h3>
                <p
                  className="typo-body-lg text-muted-foreground line-clamp-2"
                  style={{ fontSize: "0.875rem" }}
                >
                  {item.excerpt}
                </p>
              </div>
              <div className="flex-shrink-0 self-center opacity-0 group-hover:opacity-100 transition-smooth">
                <ChevronRight className="w-5 h-5 text-accent-gold" />
              </div>
              <div
                className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
                style={{ background: "rgba(26, 35, 126, 0.4)" }}
              />
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="typo-btn px-10 py-3 border uppercase tracking-wider transition-smooth rounded-none hover:text-accent-gold"
            style={{ borderColor: "#1A237E" }}
            data-ocid="news.view_more_button"
          >
            {expanded ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </section>
  );
}

/* ─── History & Legacy ───────────────────────────────────────────────────── */
function HistorySection() {
  const { ref: headRef, visible: headVisible } =
    useScrollReveal<HTMLDivElement>();
  return (
    <section
      className="py-20"
      style={{ background: "oklch(0.97 0 0)" }}
      data-ocid="history.section"
    >
      <div className="container px-4 md:px-8">
        <div
          ref={headRef}
          className="text-center mb-14"
          style={{
            opacity: headVisible ? 1 : 0,
            transform: headVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <p className="typo-section-label text-muted-foreground mb-2">
            Since 1854
          </p>
          <h2 className="typo-section-heading" style={{ color: "#0F3399" }}>
            History & Legacy
          </h2>
          <p className="typo-body mt-3 text-muted-foreground max-w-xl mx-auto">
            Over 170 years of excellence, innovation, and nation-building from
            the heart of Pune
          </p>
          <div className="divider-gold mt-5 mx-auto" />
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block"
            style={{ background: "rgba(26, 35, 126, 0.2)" }}
          />
          <div className="space-y-6 md:space-y-0">
            {TIMELINE_PREVIEW.map((entry, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={entry.year}>
                  <TimelineEntry entry={entry} index={index} isEven={isEven} />
                  <TimelineEntryMobile entry={entry} index={index} />
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center mt-14">
          <Link
            to="/about-us/about-university"
            data-ocid="history.view_more_button"
          >
            <Button
              className="px-10 py-3 rounded-none text-sm font-semibold uppercase tracking-wider text-white transition-smooth"
              style={{ background: "#1A237E", border: "none" }}
            >
              View Full History
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function TimelineEntry({
  entry,
  index,
  isEven,
}: { entry: (typeof TIMELINE_PREVIEW)[0]; index: number; isEven: boolean }) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const isLast = index === TIMELINE_PREVIEW.length - 1;
  return (
    <div
      ref={ref}
      className="relative hidden md:flex items-start gap-0 mb-8"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.65s ease ${index * 0.12}s, transform 0.65s ease ${index * 0.12}s`,
      }}
    >
      {/* Left panel — shows card on even entries, empty on odd */}
      <div className="flex-1 flex justify-end pr-6 pt-1">
        {isEven ? <TimelineCard entry={entry} align="right" /> : <div />}
      </div>

      {/* Center dot + line */}
      <div
        className="relative flex-shrink-0 flex flex-col items-center"
        style={{ width: 40 }}
      >
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white shadow-cobalt z-10 relative flex-shrink-0"
          style={{
            background: entry.color,
            fontSize: 10,
            fontFamily: "Source Sans 3, sans-serif",
            fontWeight: 700,
          }}
        >
          {entry.year.slice(0, 4)}
        </div>
        {!isLast && (
          <div
            className="w-0.5 opacity-25 flex-1"
            style={{ background: "#1A237E", minHeight: 64 }}
          />
        )}
      </div>

      {/* Right panel — shows card on odd entries, empty on even */}
      <div className="flex-1 flex justify-start pl-6 pt-1">
        {!isEven ? <TimelineCard entry={entry} align="left" /> : <div />}
      </div>
    </div>
  );
}

/* Mobile-only single-column timeline entry */
function TimelineEntryMobile({
  entry,
  index,
}: { entry: (typeof TIMELINE_PREVIEW)[0]; index: number }) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="flex items-start gap-4 md:hidden"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`,
      }}
    >
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0 mt-1"
        style={{
          background: entry.color,
          fontSize: 10,
          fontFamily: "Source Sans 3, sans-serif",
          fontWeight: 700,
        }}
      >
        {entry.year.slice(0, 4)}
      </div>
      <div className="flex-1">
        <TimelineCard entry={entry} align="left" />
      </div>
    </div>
  );
}

function TimelineCard({
  entry,
  align,
}: { entry: (typeof TIMELINE_PREVIEW)[0]; align: "left" | "right" }) {
  const [imgError, setImgError] = useState(false);
  return (
    <div className="bg-card border border-border shadow-premium inline-block max-w-sm w-full group overflow-hidden">
      {/* Image slot — prominent at top with hover zoom */}
      <div
        className="relative overflow-hidden flex-shrink-0"
        style={{ height: 180 }}
      >
        {!imgError ? (
          <img
            src={entry.imageUrl}
            alt={entry.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            className="w-full h-full"
            style={{
              background: `linear-gradient(135deg, ${entry.color} 0%, #081E5C 100%)`,
            }}
          />
        )}
        {/* Year badge overlay */}
        <div
          className="absolute top-3 left-3 px-3 py-1 text-white text-xs font-bold tracking-widest font-inter"
          style={{ background: entry.color, opacity: 0.95 }}
        >
          {entry.year}
        </div>
      </div>
      {/* Text content */}
      <div
        className="p-6"
        style={{ textAlign: align === "right" ? "right" : "left" }}
      >
        <h4 className="typo-card-title mt-0 mb-2" style={{ color: "#0F3399" }}>
          {entry.title}
        </h4>
        <p
          className="typo-body text-muted-foreground"
          style={{ fontSize: "0.875rem" }}
        >
          {entry.description}
        </p>
      </div>
    </div>
  );
}

/* ─── Why COEP Tech ──────────────────────────────────────────────────────── */
function StatCountCard({ stat, index }: { stat: StatDef; index: number }) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  const count = useCountUp(stat.target, active, stat.startNear);
  const formatNum = (n: number) =>
    stat.target >= 1000 && !stat.startNear
      ? n.toLocaleString("en-IN")
      : n.toString();
  return (
    <div
      ref={cardRef}
      className="relative bg-card border border-border p-8 md:p-10 cursor-default overflow-hidden h-full"
      style={{
        boxShadow: hovered
          ? "0 8px 32px rgba(0,0,0,0.12)"
          : "0 2px 8px rgba(0,0,0,0.04)",
        transition:
          "box-shadow 0.3s ease, opacity 0.5s ease, transform 0.5s ease",
        opacity: active ? 1 : 0,
        transform: active ? "translateY(0)" : "translateY(24px)",
        transitionDelay: `${index * 0.08}s`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-ocid={`stats.item.${index + 1}`}
    >
      <div
        className="absolute top-0 left-0 h-[3px] transition-all duration-500"
        style={{ width: hovered ? "100%" : "0%", background: "#E8C42A" }}
      />
      <div
        className="typo-stat-number leading-none mb-2"
        style={{ color: "#0F3399" }}
      >
        {stat.prefix}
        {formatNum(count)}
        {stat.suffix}
      </div>
      <div className="typo-support mb-2" style={{ color: "#0F3399" }}>
        {stat.label}
      </div>
      <p className="typo-stat-label text-muted-foreground leading-relaxed">
        {stat.description}
      </p>
      <div
        className="absolute bottom-4 right-4 w-2 h-2 rounded-full transition-all duration-300"
        style={{ background: hovered ? "#E8C42A" : "oklch(0.88 0 0)" }}
      />
    </div>
  );
}

function WhyCoepTech() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  return (
    <section
      className="py-20"
      style={{ background: "#FFFFFF" }}
      data-ocid="stats.section"
    >
      <div className="container px-4 md:px-8">
        <div
          ref={ref}
          className="text-center mb-14"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <p className="typo-section-label mb-3" style={{ color: "#0F3399" }}>
            Our Legacy
          </p>
          <h2
            className="typo-section-heading leading-tight"
            style={{ color: "#0F3399" }}
          >
            Why COEP Technological University
          </h2>
          <p className="typo-body mt-3 text-muted-foreground">
            Shaping engineers and leaders since 1854
          </p>
          <div
            className="mt-5 mx-auto"
            style={{
              height: 3,
              width: 64,
              background: "#1A237E",
              borderRadius: 2,
            }}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-border overflow-hidden shadow-premium">
          {STAT_DEFS.map((stat, i) => (
            <div key={stat.label}>
              <StatCountCard stat={stat} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Life at COEP ───────────────────────────────────────────────────────── */
function LifeAtCoep() {
  const { ref: headRef, visible: headVisible } =
    useScrollReveal<HTMLDivElement>();
  const collageRef = useRef<HTMLDivElement>(null);
  const [collageVisible, setCollageVisible] = useState(false);
  useEffect(() => {
    const el = collageRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCollageVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      className="py-20"
      style={{ background: "#f7f8fa" }}
      data-ocid="life.section"
    >
      <div className="container px-4 md:px-8">
        <div
          ref={headRef}
          className="text-center mb-12"
          style={{
            opacity: headVisible ? 1 : 0,
            transform: headVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <p className="typo-section-label text-muted-foreground mb-2">
            Campus Experience
          </p>
          <h2 className="typo-section-heading" style={{ color: "#0F3399" }}>
            Life at COEP
          </h2>
          <div className="divider-gold mt-4 mx-auto" />
        </div>

        {/* Collage */}
        <div
          ref={collageRef}
          className="grid gap-3"
          style={{
            gridTemplateColumns: "2fr 1fr 1fr",
            gridTemplateRows: "220px 220px",
          }}
        >
          {/* Large featured image - spans 2 rows */}
          <div
            className="row-span-2 relative overflow-hidden rounded-sm"
            style={{
              opacity: collageVisible ? 1 : 0,
              transform: collageVisible ? "scale(1)" : "scale(1.04)",
              transition: "opacity 0.7s ease 0s, transform 0.7s ease 0s",
            }}
          >
            <img
              src="https://www.coeptech.ac.in/wp-content/uploads/2022/09/COEP-Main-Building-scaled.jpg"
              alt="Life at COEP"
              className="w-full h-full object-cover"
              onError={(e) => {
                const el = e.currentTarget as HTMLImageElement;
                if (!el.src.includes("unsplash")) {
                  el.src =
                    "https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80";
                }
              }}
            />
            {/* Center overlay */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ background: "rgba(8, 30, 92, 0.52)" }}
            >
              <div className="text-center px-6">
                <p
                  className="text-white font-bold text-lg leading-snug"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  170 years of excellence, innovation, and vibrant campus life
                </p>
              </div>
            </div>
          </div>

          {/* 4 smaller images */}
          {LIFE_IMAGES.slice(1).map((img, i) => (
            <div
              key={img.label}
              className="relative overflow-hidden rounded-sm"
              style={{
                opacity: collageVisible ? 1 : 0,
                transform: collageVisible ? "scale(1)" : "scale(1.04)",
                transition: `opacity 0.65s ease ${(i + 1) * 0.1 + 0.1}s, transform 0.65s ease ${(i + 1) * 0.1 + 0.1}s`,
              }}
            >
              <img
                src={getCampusImageUrl(img.label)}
                alt={img.label}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const el = e.currentTarget as HTMLImageElement;
                  const fallback = getCampusImageFallback(img.label);
                  if (el.src !== fallback) {
                    el.src = fallback;
                  } else {
                    el.style.display = "none";
                    const parent = el.parentElement;
                    if (parent) parent.style.background = img.gradient;
                  }
                }}
              />
              <div
                className="absolute inset-0 flex items-end p-3"
                style={{
                  background:
                    "linear-gradient(to top, rgba(8, 30, 92, 0.7) 0%, transparent 60%)",
                }}
              >
                <span
                  className="text-white font-bold text-xs uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link to="/student-life" data-ocid="life.view_more_button">
            <Button
              className="px-10 py-3 rounded-none text-sm font-semibold uppercase tracking-wider text-white transition-smooth"
              style={{ background: "#1A237E", border: "none" }}
            >
              Explore Campus Life
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Research Section ───────────────────────────────────────────────────── */
function ResearchCard({
  paper,
  index,
}: { paper: ResearchPaper; index: number }) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const [hovered, setHovered] = useState(false);
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.55s ease ${index * 0.1}s, transform 0.55s ease ${index * 0.1}s`,
      }}
      data-ocid={`research.item.${index + 1}`}
    >
      <a
        href={paper.url}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="block bg-card border border-border overflow-hidden no-underline group"
        style={{
          transition: "border-color 0.25s ease, box-shadow 0.25s ease",
          boxShadow: hovered
            ? "0 8px 28px rgba(26, 35, 126, 0.15)"
            : "0 2px 8px rgba(0,0,0,0.04)",
        }}
      >
        {/* Thumbnail */}
        <div className="relative overflow-hidden" style={{ height: 160 }}>
          <img
            src={getResearchImageUrl(paper.title)}
            alt={paper.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              const el = e.currentTarget as HTMLImageElement;
              const fallback = getResearchImageFallback(paper.title);
              if (el.src !== fallback) {
                el.src = fallback;
              } else {
                const parent = el.parentElement;
                if (parent) {
                  el.style.display = "none";
                  parent.style.background =
                    "linear-gradient(135deg, #0F3399 0%, #1A237E 100%)";
                }
              }
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(8, 30, 92, 0.5) 0%, transparent 50%)",
            }}
          />
          <div
            className="absolute top-0 left-0 h-[3px] w-full"
            style={{ background: hovered ? "#E8C42A" : "#1A237E" }}
          />
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between gap-3 mb-3">
            <h3
              className="typo-card-title leading-snug flex-1"
              style={{ color: "#0F3399" }}
            >
              {paper.title}
            </h3>
            <ExternalLink className="w-4 h-4 flex-shrink-0 mt-0.5 text-muted-foreground" />
          </div>
          <div className="flex flex-wrap gap-2 mb-3">
            <span
              className="text-xs font-semibold px-2.5 py-1"
              style={{
                background: "rgba(26, 35, 126, 0.08)",
                color: "#1A237E",
              }}
            >
              {paper.journal}
            </span>
            <span
              className="text-xs font-semibold px-2.5 py-1"
              style={{ background: "rgba(26, 35, 126, 0.1)", color: "#1A237E" }}
            >
              {paper.year}
            </span>
          </div>
          <p
            className="text-xs text-muted-foreground font-semibold mb-2"
            style={{ fontFamily: "Source Sans 3, sans-serif" }}
          >
            {paper.authors}
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {paper.abstract}
          </p>
        </div>
      </a>
    </div>
  );
}

function ResearchSection() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  return (
    <section className="py-20 bg-background" data-ocid="research.section">
      <div className="container px-4 md:px-8">
        <div
          ref={ref}
          className="mb-12"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <p className="typo-section-label text-muted-foreground mb-2">
            Knowledge Creation
          </p>
          <h2 className="typo-section-heading" style={{ color: "#0F3399" }}>
            Research & Innovation
          </h2>
          <p className="typo-body mt-2 text-muted-foreground">
            Pioneering discoveries at COEP Technological University
          </p>
          <div className="divider-gold mt-3" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESEARCH_PAPERS.map((paper, i) => (
            <ResearchCard key={paper.title} paper={paper} index={i} />
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link to="/research" data-ocid="research.view_more_button">
            <Button
              className="px-10 py-3 rounded-none text-sm font-semibold uppercase tracking-wider text-white transition-smooth"
              style={{ background: "#1A237E", border: "none" }}
            >
              View More Research
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────── */
export function HomePage() {
  return (
    <Layout>
      <VideoHero />
      <NewsTicker />
      <EventsSection />
      <NoticesSection />
      <CollaborationsSection />
      <LatestNews />
      <HistorySection />
      <WhyCoepTech />
      <LifeAtCoep />
      <ResearchSection />
    </Layout>
  );
}
