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
import { REGISTRAR } from "../data/administration";

const COBALT = "#1648C8";
const DEEP_BLUE = "#0F3499";
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

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-xs font-bold uppercase tracking-widest mb-3"
      style={{ color: DEEP_BLUE, fontFamily: "Source Sans 3, sans-serif" }}
    >
      {children}
    </p>
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
            background: accent ? GOLD : DEEP_BLUE,
          }}
        />
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{
            background: accent
              ? "rgba(232,196,42,0.12)"
              : "rgba(15,52,153,0.08)",
          }}
        >
          <Icon
            className="w-5 h-5"
            style={{ color: accent ? GOLD : DEEP_BLUE }}
          />
        </div>
        <h2
          className="text-xl font-bold"
          style={{ fontFamily: "Playfair Display, serif", color: DEEP_BLUE }}
        >
          {title}
        </h2>
      </div>
      {children}
    </div>
  );
}

export default function RegistrarPage() {
  const reg = REGISTRAR;

  return (
    <Layout>
      {/* ── EDITORIAL HERO ── */}
      <section
        className="bg-white"
        style={{ paddingTop: "64px", paddingBottom: "0" }}
        data-ocid="registrar.hero"
      >
        <div className="max-w-6xl mx-auto px-6 pb-0">
          {/* Breadcrumb */}
          <nav
            className="flex flex-wrap items-center gap-2 text-xs mb-10"
            style={{
              color: "#9ca3af",
              fontFamily: "Source Sans 3, sans-serif",
            }}
            aria-label="Breadcrumb"
            data-ocid="registrar.breadcrumb"
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
            <span>Registrar</span>
          </nav>

          <Link
            to="/administration"
            className="inline-flex items-center gap-2 text-sm mb-10 group"
            style={{ color: COBALT, fontFamily: "Source Sans 3, sans-serif" }}
            data-ocid="registrar.back_button"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Administration
          </Link>

          {/* Two-column hero: photo RIGHT, info LEFT (alternating from VC) */}
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center pb-16">
            {/* Info LEFT */}
            <div className="order-1">
              <SectionLabel>Registrar</SectionLabel>
              <h1
                className="text-4xl md:text-6xl font-bold leading-tight mb-3"
                style={{
                  fontFamily: "Playfair Display, serif",
                  color: DEEP_BLUE,
                }}
              >
                {reg.name}
              </h1>
              <p
                className="text-base mb-6 leading-relaxed"
                style={{
                  color: "#4b5563",
                  fontFamily: "Source Sans 3, sans-serif",
                }}
              >
                {reg.designation}
              </p>
              <p
                className="text-base leading-relaxed mb-8"
                style={{
                  color: "#374151",
                  fontFamily: "Source Sans 3, sans-serif",
                }}
              >
                {reg.brief}
              </p>
              <div className="flex flex-col gap-2 mb-8">
                <a
                  href={`mailto:${reg.email}`}
                  className="flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
                  style={{
                    color: DEEP_BLUE,
                    fontFamily: "Source Sans 3, sans-serif",
                  }}
                >
                  <Mail className="w-4 h-4" />
                  {reg.email}
                </a>
                <a
                  href={`tel:${reg.phone}`}
                  className="flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
                  style={{
                    color: DEEP_BLUE,
                    fontFamily: "Source Sans 3, sans-serif",
                  }}
                >
                  <Phone className="w-4 h-4" />
                  {reg.phone}
                </a>
              </div>
            </div>

            {/* Photo RIGHT */}
            <div className="order-2 flex justify-end">
              <div className="relative">
                <div
                  className="overflow-hidden rounded-2xl shadow-2xl"
                  style={{
                    width: "320px",
                    aspectRatio: "4/5",
                    border: "2px solid rgba(15,52,153,0.18)",
                    animation:
                      "revealScale 0.9s cubic-bezier(0.22,1,0.36,1) both",
                  }}
                >
                  {/* revealScale defined in index.css */}
                  <img
                    src={reg.photoUrl}
                    alt={reg.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className="absolute -bottom-5 -right-5 w-24 h-24 rounded-full"
                  style={{ background: "rgba(15,52,153,0.07)", zIndex: -1 }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Deep blue rule */}
        <div style={{ height: "3px", background: DEEP_BLUE }} />
      </section>

      {/* ── OVERVIEW ── */}
      <section
        className="bg-white"
        style={{ paddingTop: "80px", paddingBottom: "80px" }}
        data-ocid="registrar.overview_section"
      >
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection delay={0.1}>
            <div
              className="rounded-2xl p-8 md:p-12"
              style={{
                background: "rgba(15,52,153,0.03)",
                borderLeft: `4px solid ${DEEP_BLUE}`,
                border: "1px solid rgba(15,52,153,0.1)",
                borderLeftWidth: "4px",
              }}
            >
              <h3
                className="text-2xl font-bold mb-4"
                style={{
                  fontFamily: "Playfair Display, serif",
                  color: DEEP_BLUE,
                }}
              >
                Overview
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{
                  color: "#374151",
                  fontFamily: "Source Sans 3, sans-serif",
                }}
              >
                {reg.brief}
              </p>
              <p
                className="text-base leading-relaxed mt-4"
                style={{
                  color: "#4b5563",
                  fontFamily: "Source Sans 3, sans-serif",
                }}
              >
                The Registrar's Office is responsible for maintaining the
                official academic records of all students, managing
                examinations, overseeing regulatory compliance, and serving as
                the Secretary to the Academic Council and the Board of
                Management. As a key liaison between the administration and the
                university community, the Registrar ensures smooth academic
                operations across all departments.
              </p>
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
        data-ocid="registrar.profile_section"
      >
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection delay={0.05}>
            <SectionLabel>Profile</SectionLabel>
            <h2
              className="text-3xl font-bold mb-10"
              style={{
                fontFamily: "Playfair Display, serif",
                color: DEEP_BLUE,
              }}
            >
              Academic &amp; Professional Profile
            </h2>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="space-y-6">
              {reg.research.length > 0 && (
                <AnimatedSection delay={0.1}>
                  <ContentCard icon={Award} title="Research Areas">
                    <div className="flex flex-wrap gap-2">
                      {reg.research.map((area) => (
                        <span
                          key={area}
                          className="px-3 py-1 rounded-full text-xs font-semibold"
                          style={{
                            background: "rgba(15,52,153,0.08)",
                            color: DEEP_BLUE,
                            fontFamily: "Source Sans 3, sans-serif",
                          }}
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </ContentCard>
                </AnimatedSection>
              )}

              {reg.education.length > 0 && (
                <AnimatedSection delay={0.2}>
                  <ContentCard icon={GraduationCap} title="Education">
                    <ul className="space-y-3">
                      {reg.education.map((edu) => (
                        <li key={edu} className="flex items-start gap-3">
                          <div
                            className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                            style={{ background: DEEP_BLUE }}
                          />
                          <p
                            className="text-sm leading-snug"
                            style={{
                              color: "#374151",
                              fontFamily: "Source Sans 3, sans-serif",
                            }}
                          >
                            {edu}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </ContentCard>
                </AnimatedSection>
              )}
            </div>

            {/* Main */}
            <div className="lg:col-span-2 space-y-6">
              {reg.experience.length > 0 && (
                <AnimatedSection delay={0.1}>
                  <ContentCard icon={Briefcase} title="Professional Experience">
                    <div
                      className="relative pl-6 border-l-2"
                      style={{ borderColor: "rgba(15,52,153,0.15)" }}
                    >
                      {reg.experience.map((exp) => (
                        <div
                          key={exp.slice(0, 40)}
                          className="relative mb-5 last:mb-0"
                        >
                          <div
                            className="absolute -left-[25px] top-2 w-3 h-3 rounded-full border-2"
                            style={{
                              background: "#fff",
                              borderColor: DEEP_BLUE,
                            }}
                          />
                          <div
                            className="rounded-xl p-4"
                            style={{ border: "1px solid rgba(15,52,153,0.08)" }}
                          >
                            <p
                              className="text-sm leading-relaxed"
                              style={{
                                color: "#374151",
                                fontFamily: "Source Sans 3, sans-serif",
                              }}
                            >
                              {exp}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ContentCard>
                </AnimatedSection>
              )}

              {reg.achievements.length > 0 && (
                <AnimatedSection delay={0.2}>
                  <ContentCard icon={Award} title="Key Achievements" accent>
                    <div className="space-y-3">
                      {reg.achievements.map((achievement) => (
                        <div
                          key={achievement.slice(0, 40)}
                          className="flex items-start gap-3 rounded-xl p-4"
                          style={{
                            border: "1px solid rgba(232,196,42,0.18)",
                            background: "rgba(232,196,42,0.03)",
                          }}
                        >
                          <div
                            className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                            style={{ background: "rgba(232,196,42,0.2)" }}
                          >
                            <span
                              className="text-xs font-bold"
                              style={{ color: "#b5960a" }}
                            >
                              ✓
                            </span>
                          </div>
                          <p
                            className="text-sm leading-relaxed"
                            style={{
                              color: "#374151",
                              fontFamily: "Source Sans 3, sans-serif",
                            }}
                          >
                            {achievement}
                          </p>
                        </div>
                      ))}
                    </div>
                  </ContentCard>
                </AnimatedSection>
              )}
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
        data-ocid="registrar.cta"
      >
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2
              className="text-2xl font-bold text-white"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Explore Administration
            </h2>
            <p
              className="text-sm text-white/70 mt-1"
              style={{ fontFamily: "Source Sans 3, sans-serif" }}
            >
              Learn about COEP Tech's leadership team and governance structure
            </p>
          </div>
          <Link
            to="/administration"
            className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl text-sm whitespace-nowrap transition-all hover:scale-105"
            style={{
              background: GOLD,
              color: MIDNIGHT,
              fontFamily: "Source Sans 3, sans-serif",
              boxShadow: "0 4px 16px rgba(232,196,42,0.25)",
            }}
            data-ocid="registrar.admin_page_button"
          >
            Back to Administration
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
