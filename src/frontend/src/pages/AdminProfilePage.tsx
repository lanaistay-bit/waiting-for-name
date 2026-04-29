import { Layout } from "@/components/Layout";
import { Link, useParams } from "@tanstack/react-router";
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
import { getAdminBySlug } from "../data/administration";

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
  accentColor = COBALT,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
  accent?: boolean;
  accentColor?: string;
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
            background: accent ? GOLD : accentColor,
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
          <Icon
            className="w-5 h-5"
            style={{ color: accent ? GOLD : accentColor }}
          />
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

function roleLabel(role: string, slug?: string) {
  if (slug === "chancellor") return "Chancellor, COEP Technological University";
  if (slug === "chairman") return "Chairman, Board of Governance";
  if (role === "dean") return "Dean";
  if (role === "associate-dean") return "Associate Dean";
  if (role === "director") return "Director";
  if (role === "registrar") return "Registrar";
  if (role === "vc") return "Vice Chancellor";
  return "Administration";
}

export default function AdminProfilePage() {
  const { adminId } = useParams({ from: "/administration/$adminId" });
  const profile = getAdminBySlug(adminId);

  if (!profile) {
    return (
      <Layout>
        <div
          className="min-h-[60vh] flex flex-col items-center justify-center gap-5 text-center px-4"
          data-ocid="admin_profile.not_found"
        >
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mb-2"
            style={{ background: "rgba(26, 35, 126, 0.08)" }}
          >
            <span className="text-3xl">🔍</span>
          </div>
          <h1
            className="font-cinzel font-bold text-3xl"
            style={{ color: DEEP_BLUE }}
          >
            Profile Not Found
          </h1>
          <p className="typo-body max-w-sm" style={{ color: "#6b7280" }}>
            The requested administration profile could not be found.
          </p>
          <Link
            to="/administration"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl typo-btn"
            style={{ background: GOLD, color: MIDNIGHT }}
            data-ocid="admin_profile.back_link"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Administration
          </Link>
        </div>
      </Layout>
    );
  }

  const label = roleLabel(profile.role, profile.slug);
  const accentColor = profile.role === "registrar" ? DEEP_BLUE : COBALT;

  return (
    <Layout>
      {/* ── EDITORIAL HERO ── */}
      <section
        className="bg-white"
        style={{ paddingTop: "64px", paddingBottom: "0" }}
        data-ocid="admin_profile.hero"
      >
        <div className="max-w-6xl mx-auto px-6 pb-0">
          <nav
            className="flex flex-wrap items-center gap-2 typo-support mb-10"
            style={{ color: "#9ca3af" }}
            aria-label="Breadcrumb"
            data-ocid="admin_profile.breadcrumb"
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
            <span>{profile.name}</span>
          </nav>

          <Link
            to="/administration"
            className="inline-flex items-center gap-2 typo-support mb-10 group"
            style={{ color: COBALT }}
            data-ocid="admin_profile.back_button"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Administration
          </Link>

          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center pb-16">
            <div className="flex justify-start">
              <div className="relative">
                <div
                  className="overflow-hidden rounded-2xl shadow-2xl"
                  style={{
                    width: "300px",
                    aspectRatio: "4/5",
                    border: "2px solid rgba(26, 35, 126, 0.15)",
                    animation:
                      "revealScale 0.9s cubic-bezier(0.22,1,0.36,1) both",
                  }}
                >
                  <img
                    src={profile.photoUrl}
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full"
                  style={{ background: "rgba(232, 196, 42, 0.1)", zIndex: -1 }}
                />
              </div>
            </div>

            <div>
              <p
                className="typo-section-label mb-3"
                style={{ color: accentColor }}
              >
                {label}
              </p>
              <h1
                className="typo-card-title text-4xl md:text-5xl mb-3 leading-tight"
                style={{ color: DEEP_BLUE }}
              >
                {profile.name}
              </h1>
              <p
                className="typo-support mb-2 leading-relaxed"
                style={{ color: "#4b5563" }}
              >
                {profile.designation}
              </p>
              {profile.department && (
                <p className="typo-support mb-6" style={{ color: "#9ca3af" }}>
                  {profile.department}
                </p>
              )}
              {!profile.department && <div className="mb-6" />}
              <p className="typo-body mb-8" style={{ color: "#374151" }}>
                {profile.brief}
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-2 typo-support transition-opacity hover:opacity-70"
                  style={{ color: accentColor }}
                >
                  <Mail className="w-4 h-4" />
                  {profile.email}
                </a>
                <a
                  href={`tel:${profile.phone}`}
                  className="flex items-center gap-2 typo-support transition-opacity hover:opacity-70"
                  style={{ color: accentColor }}
                >
                  <Phone className="w-4 h-4" />
                  {profile.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div style={{ height: "3px", background: accentColor }} />
      </section>

      {/* ── OVERVIEW ── */}
      {profile.brief && (
        <section
          className="bg-white"
          style={{ paddingTop: "72px", paddingBottom: "72px" }}
          data-ocid="admin_profile.overview_section"
        >
          <div className="max-w-6xl mx-auto px-6">
            <AnimatedSection delay={0.1}>
              <div
                className="rounded-2xl p-8 md:p-10"
                style={{
                  background: "rgba(26, 35, 126, 0.03)",
                  border: "1px solid rgba(26, 35, 126, 0.1)",
                  borderLeftWidth: "4px",
                  borderLeftColor: accentColor,
                }}
              >
                <h3
                  className="font-cinzel font-semibold text-2xl mb-4"
                  style={{ color: DEEP_BLUE }}
                >
                  Overview
                </h3>
                <p className="typo-body" style={{ color: "#374151" }}>
                  {profile.brief}
                </p>
                {profile.specialization && (
                  <div
                    className="mt-6 pt-5"
                    style={{ borderTop: "1px solid rgba(26, 35, 126, 0.1)" }}
                  >
                    <p
                      className="typo-section-label mb-2"
                      style={{ color: accentColor }}
                    >
                      Specialization
                    </p>
                    <p className="typo-support" style={{ color: "#4b5563" }}>
                      {profile.specialization}
                    </p>
                  </div>
                )}
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* ── MESSAGE (for Chancellor, Chairman, VC) ── */}
      {profile.message && (
        <section
          style={{
            background: "#fafbff",
            paddingTop: "72px",
            paddingBottom: "72px",
          }}
          data-ocid="admin_profile.message_section"
        >
          <div className="max-w-6xl mx-auto px-6">
            <AnimatedSection delay={0.1}>
              <p
                className="typo-section-label mb-3"
                style={{ color: accentColor }}
              >
                Message
              </p>
              <h2
                className="typo-section-heading mb-8"
                style={{ color: DEEP_BLUE }}
              >
                Message from the {label}
              </h2>
              <div
                className="relative rounded-2xl p-8 md:p-12"
                style={{
                  background: "rgba(26, 35, 126, 0.03)",
                  border: "1px solid rgba(26, 35, 126, 0.1)",
                  borderLeftWidth: "4px",
                  borderLeftColor: accentColor,
                }}
              >
                <div
                  className="absolute top-6 left-8 leading-none select-none font-cinzel"
                  style={{
                    fontSize: "120px",
                    color: accentColor,
                    opacity: 0.06,
                    lineHeight: 1,
                  }}
                >
                  "
                </div>
                <div className="relative z-10">
                  {profile.message.split("\n\n").map((para) => (
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
                    src={profile.photoUrl}
                    alt={profile.name}
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                    style={{ border: "2px solid rgba(26, 35, 126, 0.2)" }}
                  />
                  <div>
                    <p
                      className="font-baskerville font-bold text-base"
                      style={{ color: DEEP_BLUE }}
                    >
                      {profile.name}
                    </p>
                    <p className="typo-support" style={{ color: "#6b7280" }}>
                      {label}, COEP Technological University
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* ── PROFILE DETAILS ── */}
      {(profile.education.length > 0 ||
        profile.experience.length > 0 ||
        profile.research.length > 0 ||
        profile.achievements.length > 0) && (
        <section
          style={{
            background: "#fafbff",
            paddingTop: "72px",
            paddingBottom: "72px",
          }}
          data-ocid="admin_profile.details_section"
        >
          <div className="max-w-6xl mx-auto px-6">
            <AnimatedSection delay={0.05}>
              <p
                className="typo-section-label mb-3"
                style={{ color: accentColor }}
              >
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
                {profile.research.length > 0 && (
                  <AnimatedSection delay={0.1}>
                    <ContentCard
                      icon={Award}
                      title="Research Areas"
                      accentColor={accentColor}
                    >
                      <div className="flex flex-wrap gap-2">
                        {profile.research.map((area) => (
                          <span
                            key={area}
                            className="px-3 py-1 rounded-full typo-support text-xs"
                            style={{
                              background: "rgba(26, 35, 126, 0.08)",
                              color: accentColor,
                            }}
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </ContentCard>
                  </AnimatedSection>
                )}

                {profile.education.length > 0 && (
                  <AnimatedSection delay={0.2}>
                    <ContentCard
                      icon={GraduationCap}
                      title="Education"
                      accentColor={accentColor}
                    >
                      <ul className="space-y-3">
                        {profile.education.map((edu) => (
                          <li key={edu} className="flex items-start gap-3">
                            <div
                              className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                              style={{ background: accentColor }}
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
                )}
              </div>

              <div className="lg:col-span-2 space-y-6">
                {profile.experience.length > 0 && (
                  <AnimatedSection delay={0.1}>
                    <ContentCard
                      icon={Briefcase}
                      title="Professional Experience"
                      accentColor={accentColor}
                    >
                      <div
                        className="relative pl-6 border-l-2"
                        style={{ borderColor: "rgba(26, 35, 126, 0.15)" }}
                      >
                        {profile.experience.map((exp) => (
                          <div
                            key={exp.slice(0, 40)}
                            className="relative mb-5 last:mb-0"
                          >
                            <div
                              className="absolute -left-[25px] top-2 w-3 h-3 rounded-full border-2"
                              style={{
                                background: "#fff",
                                borderColor: accentColor,
                              }}
                            />
                            <div
                              className="rounded-xl p-4"
                              style={{
                                border: "1px solid rgba(26, 35, 126, 0.08)",
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
                )}

                {profile.achievements.length > 0 && (
                  <AnimatedSection delay={0.2}>
                    <ContentCard icon={Award} title="Achievements" accent>
                      <div className="space-y-3">
                        {profile.achievements.map((achievement) => (
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
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section
        className="py-14"
        style={{
          background: `linear-gradient(135deg, ${MIDNIGHT}, ${DEEP_BLUE})`,
        }}
        data-ocid="admin_profile.cta"
      >
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-cinzel font-semibold text-2xl text-white">
              Explore Administration
            </h2>
            <p className="typo-body text-sm text-white/70 mt-1">
              Meet the complete leadership team of COEP Technological University
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
            data-ocid="admin_profile.admin_page_button"
          >
            Back to Administration
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
