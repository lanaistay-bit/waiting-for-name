import { Layout } from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { FACULTY_DATA } from "@/data/faculty";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Search,
  Star,
  Users,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";

const DMS_ROUTE =
  "/academics/schools/school-of-multidisciplinary-sciences/department-of-management-studies";

const STATS = [
  { value: `${FACULTY_DATA.length}`, label: "Faculty Members", icon: Users },
  { value: "40+", label: "Years Max Experience", icon: Star },
  { value: "7+", label: "Ph.D. Holders", icon: BookOpen },
  { value: "5", label: "Specialisations", icon: BookOpen },
];

const SPECIALISATION_FILTERS = [
  "All",
  "Finance",
  "Marketing",
  "Operations",
  "HR",
  "Analytics",
];

function filterFaculty(data: typeof FACULTY_DATA, query: string, spec: string) {
  return data.filter((f) => {
    const q = query.toLowerCase();
    const matchesSearch =
      !q ||
      f.name.toLowerCase().includes(q) ||
      f.designation.toLowerCase().includes(q) ||
      f.expertise.some((e) => e.toLowerCase().includes(q));
    const matchesSpec =
      spec === "All" ||
      f.expertise.some((e) => e.toLowerCase().includes(spec.toLowerCase()));
    return matchesSearch && matchesSpec;
  });
}

export function FacultyPage() {
  const [search, setSearch] = useState("");
  const [activeSpec, setActiveSpec] = useState("All");

  const filtered = useMemo(
    () => filterFaculty(FACULTY_DATA, search, activeSpec),
    [search, activeSpec],
  );

  return (
    <Layout>
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #1F1B47 0%, #332C6F 55%, #4A3FA0 100%)",
          minHeight: "340px",
        }}
      >
        {/* Decorative orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute -top-24 -right-24 w-96 h-96 rounded-full"
            style={{ background: "rgba(245,166,35,0.07)" }}
            animate={{ scale: [1, 1.12, 1], rotate: [0, 15, 0] }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full"
            style={{ background: "rgba(255,255,255,0.05)" }}
            animate={{ scale: [1, 1.08, 1] }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>

        <div className="relative container px-4 md:px-8 pt-10 pb-14">
          {/* Breadcrumb */}
          <motion.nav
            className="flex flex-wrap items-center gap-1.5 text-xs text-white/50 mb-5"
            aria-label="Breadcrumb"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {[
              { label: "Home", href: "/" },
              { label: "Academics", href: "/academics" },
              { label: "DMS", href: DMS_ROUTE },
              { label: "Faculty", href: null },
            ].map((crumb, i, arr) => (
              <span key={crumb.label} className="flex items-center gap-1.5">
                {i > 0 && <span className="text-white/25">›</span>}
                {crumb.href && i < arr.length - 1 ? (
                  <Link
                    to={crumb.href}
                    className="hover:text-white transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className={i === arr.length - 1 ? "text-white/80" : ""}>
                    {crumb.label}
                  </span>
                )}
              </span>
            ))}
          </motion.nav>

          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Link
              to={DMS_ROUTE}
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors group"
              data-ocid="faculty.back_button"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Department
            </Link>
          </motion.div>

          {/* Title block */}
          <div className="flex items-start gap-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/20"
              style={{ background: "rgba(245,166,35,0.18)" }}
            >
              <Users className="w-8 h-8" style={{ color: "#F5A623" }} />
            </motion.div>
            <div>
              <motion.p
                className="text-white/50 text-xs font-body font-semibold uppercase tracking-[0.2em] mb-2"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                DMS · COEP Technological University
              </motion.p>
              <motion.h1
                className="font-heading text-4xl md:text-6xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
              >
                Our <span style={{ color: "#F5A623" }}>Faculty</span>
              </motion.h1>
              <motion.p
                className="font-body text-white/65 text-base md:text-lg mt-2 max-w-xl"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
              >
                Meet the minds shaping future business leaders
              </motion.p>
            </div>
          </div>

          {/* Stats row */}
          <motion.div
            className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.1)" }}
                >
                  <stat.icon className="w-4 h-4 text-white/70" />
                </div>
                <div>
                  <p
                    className="font-heading text-2xl md:text-3xl font-bold"
                    style={{ color: "#F5A623" }}
                  >
                    {stat.value}
                  </p>
                  <p className="font-body text-[11px] text-white/50 leading-tight">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Wave edge */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 36"
            preserveAspectRatio="none"
            className="w-full h-8 md:h-9"
            style={{ display: "block" }}
            aria-hidden="true"
          >
            <path
              d="M0,36 C360,0 1080,0 1440,36 L1440,36 L0,36 Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* ── SEARCH & FILTER BAR ── */}
      <section
        className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b shadow-sm"
        style={{ borderColor: "#e2e8f0" }}
      >
        <div className="container px-4 md:px-8 py-3 flex flex-col sm:flex-row items-start sm:items-center gap-3">
          {/* Search */}
          <div className="relative flex-1 max-w-sm w-full">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
              style={{ color: "#332C6F" }}
            />
            <Input
              type="text"
              placeholder="Search by name or specialization…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 h-9 font-body text-sm border-2 focus-visible:ring-0"
              style={{
                borderColor: search ? "#332C6F" : "#e2e8f0",
                transition: "border-color 0.2s ease",
              }}
              data-ocid="faculty.search_input"
            />
          </div>

          {/* Specialisation filters */}
          <div className="flex items-center gap-2 flex-wrap">
            {SPECIALISATION_FILTERS.map((spec) => (
              <motion.button
                key={spec}
                type="button"
                onClick={() => setActiveSpec(spec)}
                className="font-body text-xs font-semibold px-3 py-1.5 rounded-full border transition-all"
                style={{
                  background: activeSpec === spec ? "#332C6F" : "transparent",
                  color: activeSpec === spec ? "#fff" : "#332C6F",
                  borderColor: "#332C6F",
                }}
                whileTap={{ scale: 0.95 }}
                data-ocid={`faculty.filter.${spec.toLowerCase()}`}
              >
                {spec}
              </motion.button>
            ))}
          </div>

          <p
            className="font-body text-xs hidden sm:block ml-auto"
            style={{ color: "#6b7280" }}
          >
            <span style={{ color: "#332C6F", fontWeight: 700 }}>
              {filtered.length}
            </span>{" "}
            of {FACULTY_DATA.length} faculty
          </p>
        </div>
      </section>

      {/* ── FACULTY GRID ── */}
      <section className="py-14 md:py-20" style={{ background: "#f8f9ff" }}>
        <div className="container px-4 md:px-8">
          <AnimatePresence mode="wait">
            {filtered.length > 0 ? (
              <motion.div
                key="grid"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {filtered.map((faculty, i) => (
                  <motion.div
                    key={faculty.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.55,
                      delay: i * 0.08,
                      ease: "easeOut",
                    }}
                    data-ocid={`faculty.item.${i + 1}`}
                  >
                    <FacultyGridCard faculty={faculty} index={i} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                className="flex flex-col items-center justify-center py-28 text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                data-ocid="faculty.empty_state"
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-5"
                  style={{ background: "rgba(51,44,111,0.08)" }}
                >
                  <Users className="w-9 h-9" style={{ color: "#332C6F" }} />
                </div>
                <h3
                  className="font-heading text-xl font-semibold mb-2"
                  style={{ color: "#1F1B47" }}
                >
                  No faculty found
                </h3>
                <p
                  className="font-body text-sm mb-5"
                  style={{ color: "#6b7280" }}
                >
                  Try adjusting your search or filter to find what you're
                  looking for.
                </p>
                <button
                  type="button"
                  className="font-body text-sm font-semibold hover:underline"
                  style={{ color: "#332C6F" }}
                  onClick={() => {
                    setSearch("");
                    setActiveSpec("All");
                  }}
                >
                  Clear all filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ── BOTTOM CTA STRIP ── */}
      <motion.section
        className="py-12 md:py-16"
        style={{
          background: "linear-gradient(135deg, #1F1B47 0%, #332C6F 100%)",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2">
              Interested in our MBA Programme?
            </h2>
            <p className="font-body text-white/60 text-sm md:text-base">
              Learn about admissions, curriculum, and placements at COEP DMS.
            </p>
          </div>
          <Link
            to={DMS_ROUTE}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-body font-bold text-sm transition-all hover:scale-105 hover:brightness-110 shrink-0"
            style={{ background: "#F5A623", color: "#1F1B47" }}
          >
            Explore DMS
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.section>
    </Layout>
  );
}

/* ─── Inline Card component ──────────────────────────────────────────────── */
interface CardProps {
  faculty: (typeof FACULTY_DATA)[0];
  index: number;
}

function FacultyGridCard({ faculty, index }: CardProps) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate({ to: "/faculty/$facultyId", params: { facultyId: faculty.id } });
  };

  return (
    <motion.div
      className="relative bg-white rounded-2xl overflow-hidden flex flex-col cursor-pointer"
      style={{
        boxShadow: hovered
          ? "0 20px 48px rgba(51,44,111,0.18), 0 4px 12px rgba(0,0,0,0.08)"
          : "0 4px 20px rgba(0,0,0,0.07)",
        transition: "box-shadow 0.35s ease",
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      onClick={handleNavigate}
      data-ocid={`faculty.card.${index + 1}`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") handleNavigate();
      }}
      aria-label={`View ${faculty.name}'s profile`}
    >
      {/* Gold top border — reveals on hover */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[3px] z-10"
        style={{ background: "linear-gradient(to right, #F5A623, #f5d94d)" }}
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Photo */}
      <div className="relative overflow-hidden" style={{ height: "260px" }}>
        <motion.img
          src={faculty.photoUrl}
          alt={faculty.name}
          className="w-full h-full object-cover object-top"
          loading="lazy"
          animate={{ scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          onError={(e) => {
            const target = e.currentTarget;
            target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(faculty.name)}&background=332C6F&color=fff&size=300&bold=true`;
          }}
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(31,27,71,0.7) 0%, rgba(31,27,71,0.1) 50%, transparent 100%)",
          }}
        />

        {/* Special badge */}
        {faculty.isSpecial && (
          <div
            className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-body font-bold uppercase tracking-wider"
            style={{ background: "#F5A623", color: "#1F1B47" }}
          >
            Featured
          </div>
        )}

        {/* "Click to view" hint on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-body font-semibold"
              style={{ background: "rgba(255,255,255,0.92)", color: "#332C6F" }}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.2 }}
            >
              View Full Profile →
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        {/* Name & designation */}
        <div>
          <h3
            className="font-heading font-bold text-base leading-snug line-clamp-2"
            style={{ color: "#1F1B47" }}
          >
            {faculty.name}
          </h3>
          <p
            className="font-body text-sm font-semibold mt-1 leading-snug line-clamp-2"
            style={{ color: "#332C6F" }}
          >
            {faculty.designation}
          </p>
          {faculty.qualification && (
            <p
              className="font-body text-xs mt-0.5 line-clamp-1"
              style={{ color: "#6b7280" }}
            >
              {faculty.qualification}
            </p>
          )}
        </div>

        {/* Expertise tags */}
        <div className="flex flex-wrap gap-1.5">
          {faculty.expertise.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="font-body text-[10px] font-semibold px-2.5 py-0.5 rounded-full"
              style={{ background: "rgba(51,44,111,0.08)", color: "#332C6F" }}
            >
              {tag}
            </span>
          ))}
          {faculty.expertise.length > 3 && (
            <span
              className="font-body text-[10px] px-2.5 py-0.5 rounded-full"
              style={{ background: "#f1f5f9", color: "#6b7280" }}
            >
              +{faculty.expertise.length - 3}
            </span>
          )}
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* CTA Button */}
        <Link
          to="/faculty/$facultyId"
          params={{ facultyId: faculty.id }}
          onClick={(e) => e.stopPropagation()}
          className="flex items-center justify-between px-4 py-2.5 rounded-xl font-body font-semibold text-sm mt-1 transition-all duration-300"
          style={{
            background: hovered ? "#332C6F" : "#f0f4ff",
            color: hovered ? "#fff" : "#332C6F",
          }}
          data-ocid={`faculty.view_profile.${index + 1}`}
          aria-label={`View profile of ${faculty.name}`}
        >
          <span>View Profile</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
}
