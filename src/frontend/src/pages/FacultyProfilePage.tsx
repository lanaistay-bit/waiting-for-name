import { Layout } from "@/components/Layout";
import { FACULTY_DATA } from "@/data/faculty";
import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  GraduationCap,
  Mail,
  Phone,
} from "lucide-react";
import { useEffect, useRef } from "react";

const NAVY = "#1A237E";
const DARK_NAVY = "#0F3399";
const LIGHT_NAVY = "#283593";
const GOLD = "#E8C42A";

const DMS_ROUTE =
  "/academics/schools/school-of-multidisciplinary-sciences/department-of-management-studies";
const FACULTY_ROUTE = `${DMS_ROUTE}/faculty`;

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
          className="rounded-full flex-shrink-0"
          style={{
            width: "4px",
            height: "20px",
            background: accent ? GOLD : NAVY,
          }}
        />
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{
            background: accent
              ? "rgba(232,196,42,0.12)"
              : "rgba(26,35,126,0.08)",
          }}
        >
          <Icon className="w-5 h-5" style={{ color: accent ? GOLD : NAVY }} />
        </div>
        <h2
          className="typo-section-heading"
          style={{ fontFamily: "var(--font-heading)", color: DARK_NAVY }}
        >
          {title}
        </h2>
      </div>
      {children}
    </div>
  );
}

export function FacultyProfilePage() {
  const { facultyId } = useParams({ from: "/faculty/$facultyId" });
  const faculty = FACULTY_DATA.find((f) => f.id === facultyId);

  if (!faculty) {
    return (
      <Layout>
        <div
          className="min-h-[60vh] flex flex-col items-center justify-center gap-5 text-center px-4"
          data-ocid="faculty_profile.not_found"
        >
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mb-2"
            style={{ background: "rgba(26,35,126,0.08)" }}
          >
            <span className="text-3xl">🔍</span>
          </div>
          <h1 className="typo-section-heading" style={{ color: DARK_NAVY }}>
            Profile Not Found
          </h1>
          <p className="typo-body max-w-sm" style={{ color: "#6b7280" }}>
            The requested faculty profile could not be found.
          </p>
          <Link
            to={FACULTY_ROUTE}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl typo-btn"
            style={{
              background: GOLD,
              color: DARK_NAVY,
            }}
            data-ocid="faculty_profile.back_link"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Faculty
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* ── EDITORIAL HERO ── */}
      <section
        className="bg-white"
        style={{ paddingTop: "64px", paddingBottom: "0" }}
        data-ocid="faculty_profile.hero"
      >
        <div className="max-w-6xl mx-auto px-6 pb-0">
          {/* Breadcrumb */}
          <nav
            className="flex flex-wrap items-center gap-2 typo-stat-label mb-10"
            style={{ color: "#9ca3af" }}
            aria-label="Breadcrumb"
            data-ocid="faculty_profile.breadcrumb"
          >
            <Link to="/" className="hover:underline" style={{ color: NAVY }}>
              Home
            </Link>
            <span>›</span>
            <Link
              to="/academics"
              className="hover:underline"
              style={{ color: NAVY }}
            >
              Academics
            </Link>
            <span>›</span>
            <Link
              to={DMS_ROUTE}
              className="hover:underline"
              style={{ color: NAVY }}
            >
              DMS
            </Link>
            <span>›</span>
            <Link
              to={FACULTY_ROUTE}
              className="hover:underline"
              style={{ color: NAVY }}
            >
              Faculty
            </Link>
            <span>›</span>
            <span>{faculty.name}</span>
          </nav>

          <Link
            to={FACULTY_ROUTE}
            className="inline-flex items-center gap-2 typo-support mb-10 group"
            style={{ color: NAVY }}
            data-ocid="faculty_profile.back_button"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Faculty
          </Link>

          {/* Two-column hero layout — matches AdminProfilePage exactly */}
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center pb-16">
            {/* Left: Portrait Photo */}
            <div className="flex justify-start">
              <div className="relative">
                <div
                  className="overflow-hidden rounded-2xl shadow-2xl"
                  style={{
                    width: "300px",
                    aspectRatio: "4/5",
                    border: "2px solid rgba(26,35,126,0.15)",
                    animation:
                      "revealScale 0.9s cubic-bezier(0.22,1,0.36,1) both",
                  }}
                >
                  <img
                    src={faculty.photoUrl}
                    alt={faculty.name}
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        `https://ui-avatars.com/api/?name=${encodeURIComponent(faculty.name)}&size=400&background=1A237E&color=fff&bold=true`;
                    }}
                  />
                </div>
                <div
                  className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full"
                  style={{ background: "rgba(232,196,42,0.10)", zIndex: -1 }}
                />
                {faculty.isSpecial && (
                  <div
                    className="absolute -top-3 -right-3 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-md"
                    style={{
                      background: GOLD,
                      color: DARK_NAVY,
                      fontFamily: "Source Sans 3, sans-serif",
                    }}
                  >
                    Featured
                  </div>
                )}
              </div>
            </div>

            {/* Right: Info */}
            <div>
              <p
                className="typo-section-label mb-3"
                style={{ color: LIGHT_NAVY }}
              >
                {faculty.title}
              </p>
              <h1
                className="typo-hero-heading leading-tight mb-3"
                style={{ color: DARK_NAVY }}
              >
                {faculty.name}
              </h1>
              <p
                className="typo-body-lg mb-2 leading-relaxed"
                style={{ color: "#4b5563" }}
              >
                {faculty.designation}
              </p>
              {faculty.qualification && (
                <p className="typo-support mb-6" style={{ color: "#9ca3af" }}>
                  {faculty.qualification}
                </p>
              )}
              {!faculty.qualification && <div className="mb-6" />}

              {faculty.bio && (
                <p
                  className="typo-body leading-relaxed mb-8"
                  style={{ color: "#374151" }}
                >
                  {faculty.bio}
                </p>
              )}

              <div className="flex flex-col gap-2">
                {faculty.email && (
                  <a
                    href={`mailto:${faculty.email}`}
                    className="flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
                    style={{
                      color: NAVY,
                      fontFamily: "Source Sans 3, sans-serif",
                    }}
                  >
                    <Mail className="w-4 h-4" />
                    {faculty.email}
                  </a>
                )}
                {faculty.phone && (
                  <a
                    href={`tel:${faculty.phone}`}
                    className="flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
                    style={{
                      color: NAVY,
                      fontFamily: "Source Sans 3, sans-serif",
                    }}
                  >
                    <Phone className="w-4 h-4" />
                    {faculty.phone}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Color rule */}
        <div style={{ height: "3px", background: NAVY }} />
      </section>

      {/* ── PROFILE DETAILS ── */}
      {(faculty.education ||
        faculty.experience ||
        faculty.researchInterests ||
        faculty.achievements) && (
        <section
          style={{
            background: "#fafbff",
            paddingTop: "72px",
            paddingBottom: "72px",
          }}
          data-ocid="faculty_profile.details_section"
        >
          <div className="max-w-6xl mx-auto px-6">
            <AnimatedSection delay={0.05}>
              <p className="typo-section-label mb-3" style={{ color: NAVY }}>
                Profile
              </p>
              <h2
                className="typo-section-heading mb-10"
                style={{ color: DARK_NAVY }}
              >
                Academic &amp; Professional Profile
              </h2>
            </AnimatedSection>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Sidebar */}
              <div className="space-y-6">
                {/* Research Interests */}
                {faculty.researchInterests &&
                  faculty.researchInterests.length > 0 && (
                    <AnimatedSection delay={0.1}>
                      <ContentCard icon={BookOpen} title="Research Interests">
                        <div className="flex flex-wrap gap-2">
                          {faculty.researchInterests.map((area) => (
                            <span
                              key={area}
                              className="px-3 py-1 rounded-full text-xs font-semibold"
                              style={{
                                background: "rgba(26,35,126,0.08)",
                                color: NAVY,
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

                {/* Expertise Tags */}
                <AnimatedSection delay={0.15}>
                  <ContentCard icon={Award} title="Areas of Expertise">
                    <div className="flex flex-wrap gap-2">
                      {faculty.expertise.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs font-semibold"
                          style={{
                            background: "rgba(74,63,160,0.08)",
                            color: LIGHT_NAVY,
                            fontFamily: "Source Sans 3, sans-serif",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </ContentCard>
                </AnimatedSection>

                {/* Education */}
                {faculty.education && faculty.education.length > 0 && (
                  <AnimatedSection delay={0.2}>
                    <ContentCard icon={GraduationCap} title="Education">
                      <ul className="space-y-3">
                        {faculty.education.map((edu) => (
                          <li
                            key={edu.degree}
                            className="flex items-start gap-3"
                          >
                            <div
                              className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                              style={{ background: NAVY }}
                            />
                            <div>
                              <p
                                className="typo-body leading-snug"
                                style={{ color: "#374151" }}
                              >
                                {edu.degree}
                              </p>
                              {edu.institution && (
                                <p
                                  className="text-xs mt-0.5"
                                  style={{ color: "#9ca3af" }}
                                >
                                  {edu.institution}
                                </p>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </ContentCard>
                  </AnimatedSection>
                )}
              </div>

              {/* Main */}
              <div className="lg:col-span-2 space-y-6">
                {/* Experience */}
                {faculty.experience && faculty.experience.length > 0 && (
                  <AnimatedSection delay={0.1}>
                    <ContentCard
                      icon={Briefcase}
                      title="Professional Experience"
                    >
                      <div
                        className="relative pl-6 border-l-2"
                        style={{ borderColor: "rgba(26,35,126,0.15)" }}
                      >
                        {faculty.experience.map((exp) => (
                          <div
                            key={exp.slice(0, 40)}
                            className="relative mb-5 last:mb-0"
                          >
                            <div
                              className="absolute -left-[25px] top-2 w-3 h-3 rounded-full border-2"
                              style={{ background: "#fff", borderColor: NAVY }}
                            />
                            <div
                              className="rounded-xl p-4"
                              style={{
                                border: "1px solid rgba(26,35,126,0.08)",
                              }}
                            >
                              <p
                                className="typo-support leading-relaxed"
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

                {/* Achievements */}
                {faculty.achievements && faculty.achievements.length > 0 && (
                  <AnimatedSection delay={0.2}>
                    <ContentCard
                      icon={Award}
                      title="Achievements & Awards"
                      accent
                    >
                      <div className="space-y-3">
                        {faculty.achievements.map((achievement) => (
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
                              className="typo-body leading-relaxed"
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

                {/* For faculty without detailed info */}
                {!faculty.experience && !faculty.achievements && (
                  <AnimatedSection delay={0.2}>
                    <div
                      className="rounded-2xl p-8"
                      style={{
                        background: "rgba(26,35,126,0.03)",
                        border: "1px solid rgba(26,35,126,0.1)",
                        borderLeft: `4px solid ${NAVY}`,
                        borderLeftWidth: "4px",
                      }}
                    >
                      <h3
                        className="typo-card-title mb-3"
                        style={{ color: DARK_NAVY }}
                      >
                        About
                      </h3>
                      <p
                        className="typo-body leading-relaxed"
                        style={{ color: "#374151" }}
                      >
                        {faculty.bio ||
                          "Detailed profile information for this faculty member is being updated. Please contact the department for more information."}
                      </p>
                      {faculty.email && (
                        <a
                          href={`mailto:${faculty.email}`}
                          className="inline-flex items-center gap-2 mt-5 typo-btn px-5 py-2.5 rounded-lg"
                          style={{
                            background: GOLD,
                            color: DARK_NAVY,
                          }}
                        >
                          <Mail className="w-4 h-4" />
                          Contact {faculty.name.split(" ")[0]}
                        </a>
                      )}
                    </div>
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
        style={{ background: `linear-gradient(135deg, ${DARK_NAVY}, ${NAVY})` }}
        data-ocid="faculty_profile.cta"
      >
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="typo-section-heading text-white">
              Explore More Faculty
            </h2>
            <p className="typo-body text-white/70 mt-1">
              Meet all the distinguished faculty members at DMS, COEP
            </p>
          </div>
          <Link
            to={FACULTY_ROUTE}
            className="inline-flex items-center gap-2 typo-btn px-7 py-3.5 rounded-xl whitespace-nowrap transition-all hover:scale-105"
            style={{
              background: GOLD,
              color: DARK_NAVY,
              boxShadow: "0 4px 16px rgba(232,196,42,0.25)",
            }}
            data-ocid="faculty_profile.all_faculty_button"
          >
            View All Faculty
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
