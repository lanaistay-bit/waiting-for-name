import { Layout } from "@/components/Layout";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Briefcase,
  GraduationCap,
  Mail,
  Phone,
} from "lucide-react";
import { useEffect, useRef } from "react";
import { VICE_CHANCELLOR } from "../data/administration";

const COBALT = "#1A237E";
const DEEP_BLUE = "#0F3399";
const MIDNIGHT = "#081E5C";
const GOLD = "#E8C42A";

function AnimatedSection({
  children,
  delay = 0,
  className = "",
}: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(28px)";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transition = `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`;
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.unobserve(el);
        }
      },
      { threshold: 0.08 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

function ContentCard({
  icon: Icon,
  title,
  children,
  accent = false,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
  accent?: boolean;
}) {
  return (
    <div
      className="bg-white rounded-2xl p-7"
      style={{
        border: "1px solid #e5e7eb",
        boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
      }}
    >
      <div className="flex items-center gap-3 mb-5">
        <div
          className="rounded-full"
          style={{
            width: "4px",
            height: "20px",
            background: accent ? GOLD : COBALT,
          }}
        />
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{
            background: accent
              ? "rgba(232,196,42,0.12)"
              : "rgba(26, 35, 126, 0.08)",
          }}
        >
          <Icon className="w-5 h-5" style={{ color: accent ? GOLD : COBALT }} />
        </div>
        <h2
          className="font-cinzel font-semibold text-xl"
          style={{ color: DEEP_BLUE }}
        >
          {title}
        </h2>
      </div>
      {children}
    </div>
  );
}

export default function ViceChancellorPage() {
  const vc = VICE_CHANCELLOR;
  const messageParas = vc.message ? vc.message.split("\n\n") : [];

  return (
    <Layout>
      {/* ── EDITORIAL HERO ── */}
      <section
        className="bg-white"
        style={{ paddingTop: "64px", paddingBottom: "0" }}
        data-ocid="vc.hero"
      >
        <div className="max-w-6xl mx-auto px-6 pb-0">
          <nav
            className="flex flex-wrap items-center gap-2 typo-support mb-10"
            style={{ color: "#9ca3af" }}
            aria-label="Breadcrumb"
            data-ocid="vc.breadcrumb"
          >
            <Link to="/" className="hover:underline" style={{ color: COBALT }}>
              Home
            </Link>
            <span>›</span>
            <Link
              to="/administration"
              className="hover:underline"
              style={{ color: COBALT }}
            >
              Administration
            </Link>
            <span>›</span>
            <span>Vice Chancellor</span>
          </nav>

          <Link
            to="/administration"
            className="inline-flex items-center gap-2 typo-support mb-10 group"
            style={{ color: COBALT }}
            data-ocid="vc.back_button"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Administration
          </Link>

          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center pb-16">
            {/* Photo */}
            <div className="relative flex justify-start">
              <div
                className="overflow-hidden rounded-2xl shadow-2xl"
                style={{
                  width: "340px",
                  aspectRatio: "4/5",
                  border: "2px solid rgba(26, 35, 126, 0.15)",
                  animation:
                    "revealScale 0.9s cubic-bezier(0.22,1,0.36,1) both",
                }}
              >
                <img
                  src={vc.photoUrl}
                  alt={vc.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="absolute -bottom-5 -left-5 w-24 h-24 rounded-full"
                style={{ background: "rgba(232, 196, 42, 0.12)", zIndex: -1 }}
              />
            </div>

            {/* Info */}
            <div>
              <p className="typo-section-label mb-3" style={{ color: COBALT }}>
                Vice Chancellor
              </p>
              <h1
                className="typo-card-title text-4xl md:text-6xl mb-3 leading-tight"
                style={{ color: DEEP_BLUE }}
              >
                {vc.name}
              </h1>
              <p
                className="typo-support mb-6 leading-relaxed"
                style={{ color: "#4b5563" }}
              >
                {vc.designation}
              </p>
              <p className="typo-body mb-8" style={{ color: "#374151" }}>
                {vc.brief}
              </p>
              <div className="flex flex-col gap-2 mb-8">
                <a
                  href={`mailto:${vc.email}`}
                  className="flex items-center gap-2 typo-support transition-opacity hover:opacity-70"
                  style={{ color: COBALT }}
                >
                  <Mail className="w-4 h-4" />
                  {vc.email}
                </a>
                <a
                  href={`tel:${vc.phone}`}
                  className="flex items-center gap-2 typo-support transition-opacity hover:opacity-70"
                  style={{ color: COBALT }}
                >
                  <Phone className="w-4 h-4" />
                  {vc.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div style={{ height: "3px", background: COBALT }} />
      </section>

      {/* ── MESSAGE ── */}
      <section
        className="bg-white"
        style={{ paddingTop: "80px", paddingBottom: "80px" }}
        data-ocid="vc.message_section"
      >
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection delay={0.1}>
            <p className="typo-section-label mb-3" style={{ color: COBALT }}>
              Message
            </p>
            <h2
              className="typo-section-heading mb-8"
              style={{ color: DEEP_BLUE }}
            >
              Message from the Vice Chancellor
            </h2>
            <div
              className="relative rounded-2xl p-8 md:p-12"
              style={{
                background: "rgba(26, 35, 126, 0.03)",
                border: "1px solid rgba(26, 35, 126, 0.1)",
                borderLeftWidth: "4px",
                borderLeftColor: COBALT,
              }}
            >
              <div
                className="absolute top-6 left-8 leading-none select-none font-cinzel"
                style={{
                  fontSize: "120px",
                  color: COBALT,
                  opacity: 0.06,
                  lineHeight: 1,
                }}
              >
                "
              </div>
              <div className="relative z-10">
                {messageParas.map((para) => (
                  <p
                    key={para.slice(0, 40)}
                    className="typo-body-lg italic mb-5 last:mb-0"
                    style={{ color: "#374151", fontStyle: "italic" }}
                  >
                    {para}
                  </p>
                ))}
              </div>
              <div
                className="flex items-center gap-4 mt-8 pt-6"
                style={{ borderTop: "1px solid rgba(26, 35, 126, 0.1)" }}
              >
                <img
                  src={vc.photoUrl}
                  alt={vc.name}
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  style={{ border: "2px solid rgba(26, 35, 126, 0.2)" }}
                />
                <div>
                  <p
                    className="font-baskerville font-bold text-base"
                    style={{ color: DEEP_BLUE }}
                  >
                    {vc.name}
                  </p>
                  <p className="typo-support" style={{ color: "#6b7280" }}>
                    Vice-Chancellor, COEP Technological University
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── PROFILE DETAILS ── */}
      <section
        style={{
          background: "#fafbff",
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
        data-ocid="vc.profile_section"
      >
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection delay={0.05}>
            <p className="typo-section-label mb-3" style={{ color: COBALT }}>
              Profile
            </p>
            <h2
              className="typo-section-heading mb-10"
              style={{ color: DEEP_BLUE }}
            >
              Academic &amp; Professional Profile
            </h2>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="space-y-6">
              <AnimatedSection delay={0.1}>
                <ContentCard icon={Award} title="Research Areas">
                  <div className="flex flex-wrap gap-2">
                    {vc.research.map((area) => (
                      <span
                        key={area}
                        className="px-3 py-1 rounded-full typo-support text-xs"
                        style={{
                          background: "rgba(26, 35, 126, 0.08)",
                          color: COBALT,
                        }}
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </ContentCard>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <ContentCard icon={GraduationCap} title="Education">
                  <ul className="space-y-3">
                    {vc.education.map((edu) => (
                      <li key={edu} className="flex items-start gap-3">
                        <div
                          className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                          style={{ background: COBALT }}
                        />
                        <p
                          className="typo-body text-sm leading-snug"
                          style={{ color: "#374151" }}
                        >
                          {edu}
                        </p>
                      </li>
                    ))}
                  </ul>
                </ContentCard>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <AnimatedSection delay={0.1}>
                <ContentCard icon={Briefcase} title="Professional Experience">
                  <div
                    className="relative pl-6 border-l-2"
                    style={{ borderColor: "rgba(26, 35, 126, 0.15)" }}
                  >
                    {vc.experience.map((exp, i) => (
                      <div
                        key={exp.slice(0, 40)}
                        className="relative mb-5 last:mb-0"
                      >
                        <div
                          className="absolute -left-[25px] top-2 w-3 h-3 rounded-full border-2"
                          style={{ background: "#fff", borderColor: COBALT }}
                        />
                        <div
                          className="rounded-xl p-4"
                          style={{
                            border: "1px solid rgba(26, 35, 126, 0.08)",
                            background:
                              i === 0
                                ? "rgba(26, 35, 126, 0.02)"
                                : "transparent",
                          }}
                        >
                          <p
                            className="typo-body text-sm"
                            style={{ color: "#374151" }}
                          >
                            {exp}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ContentCard>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <ContentCard icon={Award} title="Selected Achievements" accent>
                  <div className="space-y-3">
                    {vc.achievements.map((achievement) => (
                      <div
                        key={achievement.slice(0, 40)}
                        className="flex items-start gap-3 rounded-xl p-4"
                        style={{
                          border: "1px solid rgba(232, 196, 42, 0.18)",
                          background: "rgba(232, 196, 42, 0.03)",
                        }}
                      >
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ background: "rgba(232, 196, 42, 0.2)" }}
                        >
                          <span
                            className="font-inter font-bold text-xs"
                            style={{ color: "#b5960a" }}
                          >
                            ✓
                          </span>
                        </div>
                        <p
                          className="typo-body text-sm"
                          style={{ color: "#374151" }}
                        >
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>
                </ContentCard>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-14"
        style={{
          background: `linear-gradient(135deg, ${MIDNIGHT}, ${DEEP_BLUE})`,
        }}
        data-ocid="vc.cta"
      >
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-cinzel font-semibold text-2xl text-white">
              Explore Administration
            </h2>
            <p className="typo-body text-sm text-white/70 mt-1">
              Learn about COEP Tech's full leadership team and governance
              structure
            </p>
          </div>
          <Link
            to="/administration"
            className="inline-flex items-center gap-2 typo-btn px-7 py-3.5 rounded-xl text-sm whitespace-nowrap transition-all hover:scale-105"
            style={{
              background: GOLD,
              color: MIDNIGHT,
              boxShadow: "0 4px 16px rgba(232, 196, 42, 0.25)",
            }}
            data-ocid="vc.admin_page_button"
          >
            Back to Administration
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
