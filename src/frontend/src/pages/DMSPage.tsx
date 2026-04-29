import { AboutSection } from "@/components/AboutSection";
import { AcademicRoadmap } from "@/components/AcademicRoadmap";
import { FacultyCarousel } from "@/components/FacultyCarousel";
import { Layout } from "@/components/Layout";
import { PlacementsSection } from "@/components/PlacementsSection";
import { ProgramTabs } from "@/components/ProgramTabs";
import { Link } from "@tanstack/react-router";
import { ChevronRight, GraduationCap } from "lucide-react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

const DMS_BREADCRUMBS = [
  { label: "Home", to: "/" },
  { label: "Academics", to: null },
  { label: "Schools", to: null },
  { label: "Multidisciplinary Sciences", to: null },
  { label: "Management Studies", to: null },
];

const QUICK_NAV = [
  { label: "About Us", anchor: "about" },
  { label: "Program Structure", anchor: "program-structure" },
  { label: "Faculty", anchor: "faculty" },
  { label: "Our Programs", anchor: "programs" },
  { label: "Placements", anchor: "placements" },
];

// Section divider
function WaveDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div
      className="w-full overflow-hidden"
      style={{
        height: "60px",
        transform: flip ? "scaleY(-1)" : "none",
        background: "transparent",
      }}
    >
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"
          fill="rgba(26, 35, 126, 0.06)"
        />
      </svg>
    </div>
  );
}

// Sticky mini-nav (scroll-aware)
function DmsMiniNav() {
  const [visible, setVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("about");
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setVisible(currentY < lastScrollY.current || currentY < 100);
      lastScrollY.current = currentY;

      // Update active section
      for (const item of [...QUICK_NAV].reverse()) {
        const el = document.getElementById(item.anchor);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= 120) {
            setActiveSection(item.anchor);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="sticky top-0 z-30 w-full shadow-sm"
          style={{
            background: "rgba(255,255,255,0.96)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid rgba(26, 35, 126, 0.12)",
          }}
          data-ocid="dms.mini_nav"
        >
          <div className="container px-4 md:px-8">
            <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide">
              {QUICK_NAV.map((item) => {
                const isActive = activeSection === item.anchor;
                return (
                  <button
                    key={item.anchor}
                    type="button"
                    onClick={() => {
                      document.getElementById(item.anchor)?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }}
                    className="px-4 py-1.5 rounded-full text-sm font-semibold font-inter whitespace-nowrap transition-all duration-200 flex-shrink-0"
                    style={{
                      background: isActive
                        ? "linear-gradient(135deg, #1A237E 0%, #0F3399 100%)"
                        : "transparent",
                      color: isActive ? "white" : "#1A237E",
                      border: isActive
                        ? "none"
                        : "1px solid rgba(26, 35, 126, 0.2)",
                    }}
                    data-ocid={`dms.mini_nav.${item.anchor}`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function DMSPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <Layout>
      {/* Hero Section — parallax */}
      <section
        ref={heroRef}
        className="relative overflow-hidden"
        style={{ minHeight: "520px" }}
        data-ocid="dms.hero_section"
      >
        {/* Parallax background */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('/assets/generated/dms-hero-bg.dim_1600x900.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            y: bgY,
            scale: 1.1,
          }}
        />

        {/* Dark overlay — subtle, no blue tint */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.40) 60%, rgba(8,30,92,0.55) 100%)",
          }}
        />

        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Gold shimmer accent */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 opacity-20 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #E8C42A 0%, transparent 65%)",
            filter: "blur(40px)",
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Content */}
        <motion.div
          className="container px-4 md:px-8 py-20 md:py-28 relative z-10 flex flex-col justify-center min-h-[520px]"
          style={{ y: textY, opacity }}
        >
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1 text-xs mb-6 text-white/60"
            data-ocid="dms.hero.breadcrumb"
          >
            {DMS_BREADCRUMBS.map((crumb, i) => (
              <span key={crumb.label} className="flex items-center gap-1">
                {i > 0 && <ChevronRight className="w-3 h-3 flex-shrink-0" />}
                {crumb.to ? (
                  <Link
                    to={crumb.to}
                    className="hover:text-white transition-all duration-200"
                    data-ocid={`dms.breadcrumb.${crumb.label.toLowerCase().replace(/\s+/g, "_")}`}
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span
                    className={
                      i === DMS_BREADCRUMBS.length - 1 ? "text-white/90" : ""
                    }
                  >
                    {crumb.label}
                  </span>
                )}
              </span>
            ))}
          </motion.nav>

          {/* Icon + school label */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-14 h-14 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <p className="typo-section-label text-white/75">
              School of Multidisciplinary Sciences, Humanities &amp; Management
            </p>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.3 }}
            className="typo-hero-heading text-white max-w-3xl"
          >
            Department of{" "}
            <motion.span
              className="italic font-cinzel"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Management Studies
            </motion.span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="typo-hero-desc mt-5 text-white/80 max-w-xl"
          >
            Shaping business leaders at the intersection of management
            excellence and engineering innovation — since 1854.
          </motion.p>

          {/* CTA + Quick nav pills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap gap-3 mt-8"
            data-ocid="dms.hero.quick_nav"
          >
            <button
              type="button"
              onClick={() => {
                document
                  .getElementById("programs")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="typo-btn px-6 py-2.5 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg"
              style={{ background: "#E8C42A", color: "#081E5C" }}
              data-ocid="dms.hero.cta_button"
            >
              Explore Programs
            </button>
            {QUICK_NAV.slice(0, 4).map((item) => (
              <button
                key={item.anchor}
                type="button"
                onClick={() => {
                  document
                    .getElementById(item.anchor)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-4 py-2 rounded-full border typo-nav text-white/85 hover:bg-white/15 hover:text-white hover:border-white/50 transition-all duration-200 backdrop-blur-sm"
                style={{ borderColor: "rgba(255,255,255,0.3)" }}
                data-ocid={`dms.hero.nav.${item.anchor}`}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Sticky mini-nav */}
      <DmsMiniNav />

      {/* Wave divider */}
      <WaveDivider />

      {/* About Us */}
      <AboutSection />

      {/* Wave divider */}
      <WaveDivider flip />

      {/* Academic Roadmap */}
      <AcademicRoadmap />

      {/* Wave divider */}
      <WaveDivider />

      {/* Faculty Carousel */}
      <FacultyCarousel />

      {/* Wave divider */}
      <WaveDivider flip />

      {/* Placements & Internships */}
      <PlacementsSection />

      {/* Wave divider */}
      <WaveDivider />

      {/* Our Programs */}
      <ProgramTabs />
    </Layout>
  );
}
