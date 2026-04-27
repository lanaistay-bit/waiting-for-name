import { Link } from "@tanstack/react-router";
import { ArrowRight, Mail, Phone, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import SubTabRibbon from "../components/SubTabRibbon";
import type { SubTab } from "../components/SubTabRibbon";
import {
  ASSOCIATE_DEANS,
  type AdminProfile,
  DEANS,
  DIRECTORS,
  REGISTRAR,
  VICE_CHANCELLOR,
} from "../data/administration";

const COBALT = "#1648C8";
const DEEP_BLUE = "#0F3499";
const MIDNIGHT = "#081E5C";
const GOLD = "#E8C42A";

const ADMIN_TABS: SubTab[] = [
  { id: "vice-chancellor", label: "Vice Chancellor" },
  { id: "registrar", label: "Registrar" },
  { id: "directors", label: "Directors" },
  { id: "deans", label: "Deans & Associate Deans" },
  { id: "finance", label: "Finance & Accounts Officer" },
  { id: "ombudsperson", label: "Ombudsperson for Students" },
];

// ─── Scroll reveal hook ────────────────────────────────────────────────────
function useScrollReveal<T extends HTMLElement>(threshold = 0.08) {
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

// ─── Thin horizontal rule divider ─────────────────────────────────────────
function Divider() {
  return (
    <div
      className="mx-auto"
      style={{
        height: "1px",
        background: "rgba(22,72,200,0.12)",
        maxWidth: "1152px",
        margin: "0 24px",
      }}
    />
  );
}

// ─── Director Modal ────────────────────────────────────────────────────────
function DirectorModal({
  director,
  onClose,
}: {
  director: AdminProfile;
  onClose: () => void;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      data-ocid="admin.director_dialog"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close modal"
      />
      <div
        className="relative z-10 w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden"
        style={{
          animation: "modalIn 0.28s cubic-bezier(0.34,1.56,0.64,1) both",
        }}
      >
        {/* Header bar */}
        <div
          className="h-1.5 w-full"
          style={{
            background: `linear-gradient(90deg, ${COBALT}, ${DEEP_BLUE})`,
          }}
        />

        <div className="flex flex-col md:flex-row gap-0">
          {/* Photo */}
          <div
            className="md:w-52 flex-shrink-0 flex items-center justify-center p-8 md:p-6"
            style={{ background: "rgba(22,72,200,0.04)" }}
          >
            <div
              className="w-32 h-32 md:w-36 md:h-44 rounded-xl overflow-hidden shadow-lg"
              style={{ border: "3px solid rgba(22,72,200,0.2)" }}
            >
              <img
                src={director.photoUrl}
                alt={director.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 p-7 relative">
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
              style={{ background: "rgba(0,0,0,0.06)", color: "#6b7280" }}
              data-ocid="admin.director_close_button"
            >
              <X className="w-4 h-4" />
            </button>

            <p
              className="text-xs font-bold uppercase tracking-widest mb-1"
              style={{ color: COBALT, fontFamily: "Source Sans 3, sans-serif" }}
            >
              Director
            </p>
            <h2
              className="text-2xl font-bold leading-tight mb-1"
              style={{
                fontFamily: "Playfair Display, serif",
                color: DEEP_BLUE,
              }}
            >
              {director.name}
            </h2>
            {director.board && (
              <p
                className="text-sm mb-5"
                style={{
                  color: "#4b5563",
                  fontFamily: "Source Sans 3, sans-serif",
                }}
              >
                {director.board}
              </p>
            )}
            <div
              className="h-px mb-5"
              style={{ background: "rgba(22,72,200,0.1)" }}
            />
            <p
              className="text-sm leading-relaxed mb-5"
              style={{
                color: "#374151",
                fontFamily: "Source Sans 3, sans-serif",
              }}
            >
              {director.brief}
            </p>
            {director.specialization && (
              <div className="mb-5">
                <p
                  className="text-xs font-bold uppercase tracking-wider mb-1"
                  style={{
                    color: COBALT,
                    fontFamily: "Source Sans 3, sans-serif",
                  }}
                >
                  Specialization
                </p>
                <p
                  className="text-sm"
                  style={{
                    color: "#4b5563",
                    fontFamily: "Source Sans 3, sans-serif",
                  }}
                >
                  {director.specialization}
                </p>
              </div>
            )}
            <div className="flex flex-col gap-1.5">
              <a
                href={`mailto:${director.email}`}
                className="flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
                style={{
                  color: COBALT,
                  fontFamily: "Source Sans 3, sans-serif",
                }}
              >
                <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                {director.email}
              </a>
              <a
                href={`tel:${director.phone}`}
                className="flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
                style={{
                  color: COBALT,
                  fontFamily: "Source Sans 3, sans-serif",
                }}
              >
                <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                {director.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Director Card (editorial style) ──────────────────────────────────────
function DirectorCard({
  director,
  delay,
  onOpen,
}: {
  director: AdminProfile;
  delay: number;
  onOpen: () => void;
}) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
      }}
    >
      <button
        type="button"
        className="group w-full text-left bg-white rounded-2xl overflow-hidden cursor-pointer"
        style={{
          border: "1px solid #e5e7eb",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.transform =
            "translateY(-4px)";
          (e.currentTarget as HTMLButtonElement).style.boxShadow =
            "0 12px 32px rgba(22,72,200,0.14)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.transform =
            "translateY(0)";
          (e.currentTarget as HTMLButtonElement).style.boxShadow =
            "0 2px 8px rgba(0,0,0,0.05)";
        }}
        onClick={onOpen}
        data-ocid={`admin.director_card.${director.slug}`}
      >
        {/* Photo area */}
        <div
          className="relative overflow-hidden"
          style={{ aspectRatio: "3/4", background: "rgba(22,72,200,0.06)" }}
        >
          <img
            src={director.photoUrl}
            alt={director.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(8,30,92,0.25) 0%, transparent 50%)",
            }}
          />
        </div>

        {/* Text */}
        <div className="p-5">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-1"
            style={{ color: COBALT, fontFamily: "Source Sans 3, sans-serif" }}
          >
            Director
          </p>
          <h3
            className="text-lg font-bold leading-snug mb-1"
            style={{ fontFamily: "Playfair Display, serif", color: DEEP_BLUE }}
          >
            {director.name}
          </h3>
          {director.board && (
            <p
              className="text-sm leading-snug mb-4"
              style={{
                color: "#6b7280",
                fontFamily: "Source Sans 3, sans-serif",
              }}
            >
              {director.board}
            </p>
          )}
          <div className="h-px mb-4" style={{ background: "#e5e7eb" }} />
          <span
            className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors group-hover:gap-2.5"
            style={{
              color: COBALT,
              fontFamily: "Source Sans 3, sans-serif",
              transition: "gap 0.25s ease",
            }}
          >
            View Details
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </button>
    </div>
  );
}

// ─── Leadership Person Card (editorial style) ──────────────────────────────
function LeadershipPersonCard({
  person,
  delay,
  label,
}: {
  person: AdminProfile;
  delay: number;
  label: string;
}) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
    >
      <div
        className="group bg-white rounded-xl overflow-hidden flex items-center gap-5 p-5"
        style={{
          border: "1px solid #e5e7eb",
          boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.transform =
            "translateY(-3px)";
          (e.currentTarget as HTMLDivElement).style.boxShadow =
            "0 8px 24px rgba(22,72,200,0.1)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
          (e.currentTarget as HTMLDivElement).style.boxShadow =
            "0 1px 6px rgba(0,0,0,0.04)";
        }}
      >
        {/* Avatar */}
        <div
          className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0"
          style={{ border: "2px solid rgba(22,72,200,0.25)" }}
        >
          <img
            src={person.photoUrl}
            alt={person.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <p
            className="text-xs font-bold uppercase tracking-wider mb-0.5"
            style={{ color: COBALT, fontFamily: "Source Sans 3, sans-serif" }}
          >
            {label}
          </p>
          <Link
            to="/administration/$adminId"
            params={{ adminId: person.slug }}
            className="block font-bold text-base leading-snug hover:underline underline-offset-2"
            style={{ fontFamily: "Playfair Display, serif", color: DEEP_BLUE }}
            data-ocid={`admin.leadership_name_link.${person.slug}`}
          >
            {person.name}
          </Link>
          {person.department && (
            <p
              className="text-sm mt-0.5 truncate"
              style={{
                color: "#6b7280",
                fontFamily: "Source Sans 3, sans-serif",
              }}
            >
              {person.department}
            </p>
          )}
        </div>

        {/* Arrow link */}
        <Link
          to="/administration/$adminId"
          params={{ adminId: person.slug }}
          className="flex-shrink-0 flex items-center gap-1 text-sm font-semibold whitespace-nowrap"
          style={{ color: COBALT, fontFamily: "Source Sans 3, sans-serif" }}
          data-ocid={`admin.leadership_view_button.${person.slug}`}
        >
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

// ─── Section Label + Title component ──────────────────────────────────────
function SectionHeading({
  label,
  title,
  subtitle,
}: { label?: string; title: string; subtitle?: string }) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="mb-14"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.65s ease, transform 0.65s ease",
      }}
    >
      {label && (
        <p
          className="text-xs font-bold uppercase tracking-widest mb-2"
          style={{ color: COBALT, fontFamily: "Source Sans 3, sans-serif" }}
        >
          {label}
        </p>
      )}
      <h2
        className="text-3xl md:text-4xl font-bold leading-tight"
        style={{ fontFamily: "Playfair Display, serif", color: DEEP_BLUE }}
      >
        {title}
      </h2>
      <div
        className="mt-4 rounded-full"
        style={{ width: "48px", height: "3px", background: COBALT }}
      />
      {subtitle && (
        <p
          className="mt-3 text-base"
          style={{ color: "#6b7280", fontFamily: "Source Sans 3, sans-serif" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

// ─── Dean Modal (reuses DirectorModal structure, relabelled) ──────────────
function DeanModal({
  dean,
  onClose,
}: {
  dean: AdminProfile;
  onClose: () => void;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      data-ocid="admin.dean_dialog"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close modal"
      />
      <div
        className="relative z-10 w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden"
        style={{
          animation: "modalIn 0.28s cubic-bezier(0.34,1.56,0.64,1) both",
        }}
      >
        <div
          className="h-1.5 w-full"
          style={{
            background: `linear-gradient(90deg, ${COBALT}, ${DEEP_BLUE})`,
          }}
        />
        <div className="flex flex-col md:flex-row gap-0">
          {/* Photo */}
          <div
            className="md:w-52 flex-shrink-0 flex items-center justify-center p-8 md:p-6"
            style={{ background: "rgba(22,72,200,0.04)" }}
          >
            <div
              className="w-32 h-32 md:w-36 md:h-44 rounded-xl overflow-hidden shadow-lg"
              style={{ border: "3px solid rgba(22,72,200,0.2)" }}
            >
              <img
                src={dean.photoUrl}
                alt={dean.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Info */}
          <div className="flex-1 p-7 relative">
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
              style={{ background: "rgba(0,0,0,0.06)", color: "#6b7280" }}
              data-ocid="admin.dean_close_button"
            >
              <X className="w-4 h-4" />
            </button>
            <p
              className="text-xs font-bold uppercase tracking-widest mb-1"
              style={{ color: COBALT, fontFamily: "Source Sans 3, sans-serif" }}
            >
              Dean
            </p>
            <h2
              className="text-2xl font-bold leading-tight mb-1"
              style={{
                fontFamily: "Playfair Display, serif",
                color: DEEP_BLUE,
              }}
            >
              {dean.name}
            </h2>
            {dean.department && (
              <p
                className="text-sm mb-5"
                style={{
                  color: "#4b5563",
                  fontFamily: "Source Sans 3, sans-serif",
                }}
              >
                {dean.department}
              </p>
            )}
            <div
              className="h-px mb-5"
              style={{ background: "rgba(22,72,200,0.1)" }}
            />
            <p
              className="text-sm leading-relaxed mb-5"
              style={{
                color: "#374151",
                fontFamily: "Source Sans 3, sans-serif",
              }}
            >
              {dean.brief}
            </p>
            {dean.specialization && (
              <div className="mb-5">
                <p
                  className="text-xs font-bold uppercase tracking-wider mb-1"
                  style={{
                    color: COBALT,
                    fontFamily: "Source Sans 3, sans-serif",
                  }}
                >
                  Specialization
                </p>
                <p
                  className="text-sm"
                  style={{
                    color: "#4b5563",
                    fontFamily: "Source Sans 3, sans-serif",
                  }}
                >
                  {dean.specialization}
                </p>
              </div>
            )}
            <div className="flex flex-col gap-1.5">
              <a
                href={`mailto:${dean.email}`}
                className="flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
                style={{
                  color: COBALT,
                  fontFamily: "Source Sans 3, sans-serif",
                }}
              >
                <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                {dean.email}
              </a>
              <a
                href={`tel:${dean.phone}`}
                className="flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
                style={{
                  color: COBALT,
                  fontFamily: "Source Sans 3, sans-serif",
                }}
              >
                <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                {dean.phone}
              </a>
            </div>
            <div className="mt-5">
              <Link
                to="/administration/$adminId"
                params={{ adminId: dean.slug }}
                className="inline-flex items-center gap-1.5 text-sm font-semibold"
                style={{
                  color: COBALT,
                  fontFamily: "Source Sans 3, sans-serif",
                }}
                onClick={onClose}
                data-ocid={`admin.dean_profile_link.${dean.slug}`}
              >
                Full Profile
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Dean Card (portrait card, matches DirectorCard style) ─────────────────
function DeanCard({
  dean,
  delay,
  onOpen,
}: {
  dean: AdminProfile;
  delay: number;
  onOpen: () => void;
}) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
      }}
    >
      <button
        type="button"
        className="group w-full text-left bg-white rounded-2xl overflow-hidden cursor-pointer"
        style={{
          border: "1px solid #e5e7eb",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.transform =
            "translateY(-4px)";
          (e.currentTarget as HTMLButtonElement).style.boxShadow =
            "0 12px 32px rgba(22,72,200,0.14)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.transform =
            "translateY(0)";
          (e.currentTarget as HTMLButtonElement).style.boxShadow =
            "0 2px 8px rgba(0,0,0,0.05)";
        }}
        onClick={onOpen}
        data-ocid={`admin.dean_card.${dean.slug}`}
      >
        {/* Photo area */}
        <div
          className="relative overflow-hidden"
          style={{ aspectRatio: "3/4", background: "rgba(22,72,200,0.06)" }}
        >
          <img
            src={dean.photoUrl}
            alt={dean.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(8,30,92,0.25) 0%, transparent 50%)",
            }}
          />
        </div>
        {/* Text */}
        <div className="p-5">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-1"
            style={{ color: COBALT, fontFamily: "Source Sans 3, sans-serif" }}
          >
            Dean
          </p>
          <h3
            className="text-lg font-bold leading-snug mb-1"
            style={{ fontFamily: "Playfair Display, serif", color: DEEP_BLUE }}
          >
            {dean.name}
          </h3>
          {dean.department && (
            <p
              className="text-sm leading-snug mb-4"
              style={{
                color: "#6b7280",
                fontFamily: "Source Sans 3, sans-serif",
              }}
            >
              {dean.department}
            </p>
          )}
          <div className="h-px mb-4" style={{ background: "#e5e7eb" }} />
          <span
            className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors group-hover:gap-2.5"
            style={{
              color: COBALT,
              fontFamily: "Source Sans 3, sans-serif",
              transition: "gap 0.25s ease",
            }}
          >
            View Details
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </button>
    </div>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────
export default function AdministrationPage() {
  const [openDirector, setOpenDirector] = useState<AdminProfile | null>(null);
  const [openDean, setOpenDean] = useState<AdminProfile | null>(null);
  const [activeTab, setActiveTab] = useState("vice-chancellor");

  const vcRef = useScrollReveal<HTMLDivElement>(0.05);
  const regRef = useScrollReveal<HTMLDivElement>(0.05);

  const sectionIds = [
    "vice-chancellor",
    "registrar",
    "directors",
    "deans",
    "finance",
    "ombudsperson",
  ];
  const observerRef = useRef<IntersectionObserver | null>(null);

  const setupObserver = useCallback(() => {
    if (observerRef.current) observerRef.current.disconnect();
    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 },
    );
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    }
  }, []);

  useEffect(() => {
    setupObserver();
    return () => observerRef.current?.disconnect();
  }, [setupObserver]);

  function handleTabChange(tabId: string) {
    const el = document.getElementById(tabId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <main style={{ fontFamily: "Source Sans 3, sans-serif" }}>
      {/* ── EDITORIAL HERO ── */}
      <section
        className="bg-white"
        style={{ paddingTop: "72px", paddingBottom: "0" }}
        data-ocid="administration.hero"
      >
        <div className="max-w-6xl mx-auto px-6 pb-10">
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-2 text-xs mb-10"
            style={{
              color: "#9ca3af",
              fontFamily: "Source Sans 3, sans-serif",
            }}
            aria-label="Breadcrumb"
            data-ocid="administration.breadcrumb"
          >
            <Link
              to="/"
              className="hover:underline transition-colors"
              style={{ color: COBALT }}
            >
              Home
            </Link>
            <span>›</span>
            <span>Administration</span>
          </nav>

          {/* Large editorial title */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{
                  color: COBALT,
                  fontFamily: "Source Sans 3, sans-serif",
                }}
              >
                COEP Technological University
              </p>
              <h1
                className="text-5xl md:text-7xl font-bold leading-none tracking-tight"
                style={{
                  fontFamily: "Playfair Display, serif",
                  color: DEEP_BLUE,
                }}
              >
                Administration
              </h1>
            </div>
            <p
              className="text-base max-w-md leading-relaxed pb-1"
              style={{
                color: "#6b7280",
                fontFamily: "Source Sans 3, sans-serif",
              }}
            >
              Leadership and governance of COEP Technological University, Pune —
              shaping excellence since 1854.
            </p>
          </div>
        </div>

        {/* Cobalt rule */}
        <div style={{ height: "3px", background: COBALT }} />
      </section>

      {/* ── SUB-TAB RIBBON ── */}
      <SubTabRibbon
        tabs={ADMIN_TABS}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />

      {/* ── VICE CHANCELLOR ── */}
      <section
        id="vice-chancellor"
        className="bg-white"
        style={{ paddingTop: "96px", paddingBottom: "96px" }}
        data-ocid="administration.vc_section"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div
            ref={vcRef.ref}
            className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center"
            style={{
              opacity: vcRef.visible ? 1 : 0,
              transform: vcRef.visible ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            {/* LEFT: Text */}
            <div>
              <p
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{
                  color: COBALT,
                  fontFamily: "Source Sans 3, sans-serif",
                }}
              >
                Vice Chancellor
              </p>
              <h2
                className="text-4xl md:text-5xl font-bold leading-tight mb-3"
                style={{
                  fontFamily: "Playfair Display, serif",
                  color: DEEP_BLUE,
                }}
              >
                {VICE_CHANCELLOR.name}
              </h2>
              <p
                className="text-base mb-6 leading-relaxed"
                style={{
                  color: "#4b5563",
                  fontFamily: "Source Sans 3, sans-serif",
                }}
              >
                {VICE_CHANCELLOR.designation}
              </p>
              <p
                className="text-base leading-relaxed mb-8"
                style={{
                  color: "#374151",
                  fontFamily: "Source Sans 3, sans-serif",
                }}
              >
                {VICE_CHANCELLOR.brief}
              </p>
              <div className="flex flex-col gap-2 mb-8">
                <a
                  href={`mailto:${VICE_CHANCELLOR.email}`}
                  className="flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
                  style={{
                    color: COBALT,
                    fontFamily: "Source Sans 3, sans-serif",
                  }}
                >
                  <Mail className="w-4 h-4" />
                  {VICE_CHANCELLOR.email}
                </a>
                <a
                  href={`tel:${VICE_CHANCELLOR.phone}`}
                  className="flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
                  style={{
                    color: COBALT,
                    fontFamily: "Source Sans 3, sans-serif",
                  }}
                >
                  <Phone className="w-4 h-4" />
                  {VICE_CHANCELLOR.phone}
                </a>
              </div>
              <Link
                to="/administration/vice-chancellor"
                className="inline-flex items-center gap-2 text-base font-semibold group"
                style={{
                  color: COBALT,
                  fontFamily: "Source Sans 3, sans-serif",
                }}
                data-ocid="administration.vc_profile_button"
              >
                View Profile &amp; Message
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
              </Link>
            </div>

            {/* RIGHT: Photo */}
            <div className="flex justify-end">
              <div
                className="relative"
                style={{
                  opacity: vcRef.visible ? 1 : 0,
                  transform: vcRef.visible ? "scale(1)" : "scale(1.04)",
                  transition:
                    "opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s",
                }}
              >
                <div
                  className="overflow-hidden rounded-2xl shadow-2xl"
                  style={{
                    width: "320px",
                    aspectRatio: "4/5",
                    border: "2px solid rgba(22,72,200,0.18)",
                  }}
                >
                  <img
                    src={VICE_CHANCELLOR.photoUrl}
                    alt={VICE_CHANCELLOR.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div
                  className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(22,72,200,0.08)",
                    border: "1px solid rgba(22,72,200,0.12)",
                  }}
                />
                <div
                  className="absolute -top-4 -left-4 w-16 h-16 rounded-full"
                  style={{ background: "rgba(232,196,42,0.15)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── REGISTRAR ── */}
      <section
        id="registrar"
        style={{
          background: "#fafbff",
          paddingTop: "96px",
          paddingBottom: "96px",
        }}
        data-ocid="administration.registrar_section"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div
            ref={regRef.ref}
            className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center"
            style={{
              opacity: regRef.visible ? 1 : 0,
              transform: regRef.visible ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            {/* LEFT: Photo (alternating) */}
            <div className="flex justify-start order-2 md:order-1">
              <div
                className="relative"
                style={{
                  opacity: regRef.visible ? 1 : 0,
                  transform: regRef.visible ? "scale(1)" : "scale(1.04)",
                  transition:
                    "opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s",
                }}
              >
                <div
                  className="overflow-hidden rounded-2xl shadow-2xl"
                  style={{
                    width: "300px",
                    aspectRatio: "4/5",
                    border: "2px solid rgba(15,52,153,0.18)",
                  }}
                >
                  <img
                    src={REGISTRAR.photoUrl}
                    alt={REGISTRAR.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div
                  className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full"
                  style={{
                    background: "rgba(15,52,153,0.06)",
                    border: "1px solid rgba(15,52,153,0.1)",
                  }}
                />
              </div>
            </div>

            {/* RIGHT: Text */}
            <div className="order-1 md:order-2">
              <p
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{
                  color: DEEP_BLUE,
                  fontFamily: "Source Sans 3, sans-serif",
                }}
              >
                Registrar
              </p>
              <h2
                className="text-4xl md:text-5xl font-bold leading-tight mb-3"
                style={{
                  fontFamily: "Playfair Display, serif",
                  color: DEEP_BLUE,
                }}
              >
                {REGISTRAR.name}
              </h2>
              <p
                className="text-base mb-6 leading-relaxed"
                style={{
                  color: "#4b5563",
                  fontFamily: "Source Sans 3, sans-serif",
                }}
              >
                {REGISTRAR.designation}
              </p>
              <p
                className="text-base leading-relaxed mb-8"
                style={{
                  color: "#374151",
                  fontFamily: "Source Sans 3, sans-serif",
                }}
              >
                {REGISTRAR.brief}
              </p>
              <div className="flex flex-col gap-2 mb-8">
                <a
                  href={`mailto:${REGISTRAR.email}`}
                  className="flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
                  style={{
                    color: DEEP_BLUE,
                    fontFamily: "Source Sans 3, sans-serif",
                  }}
                >
                  <Mail className="w-4 h-4" />
                  {REGISTRAR.email}
                </a>
                <a
                  href={`tel:${REGISTRAR.phone}`}
                  className="flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
                  style={{
                    color: DEEP_BLUE,
                    fontFamily: "Source Sans 3, sans-serif",
                  }}
                >
                  <Phone className="w-4 h-4" />
                  {REGISTRAR.phone}
                </a>
              </div>
              <Link
                to="/administration/registrar"
                className="inline-flex items-center gap-2 text-base font-semibold group"
                style={{
                  color: DEEP_BLUE,
                  fontFamily: "Source Sans 3, sans-serif",
                }}
                data-ocid="administration.registrar_profile_button"
              >
                View Profile
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── DIRECTORS ── */}
      <section
        id="directors"
        className="bg-white"
        style={{ paddingTop: "96px", paddingBottom: "96px" }}
        data-ocid="administration.directors_section"
      >
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            label="University Administration"
            title="Directors"
            subtitle="Overseeing specialized boards and administrative functions of COEP Tech"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DIRECTORS.map((director, idx) => (
              <DirectorCard
                key={director.email}
                director={director}
                delay={idx * 0.1}
                onOpen={() => setOpenDirector(director)}
              />
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── UNIVERSITY LEADERSHIP ── */}
      <section
        id="deans"
        style={{
          background: "#fafbff",
          paddingTop: "96px",
          paddingBottom: "96px",
        }}
        data-ocid="administration.leadership_section"
      >
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            label="Academic Leadership"
            title="University Leadership"
            subtitle="Academic deans guiding COEP Tech's schools and departments"
          />

          {/* Deans — portrait cards matching Director style */}
          <div className="mb-16">
            <h3
              className="text-xl font-bold mb-8 flex items-center gap-3"
              style={{
                fontFamily: "Playfair Display, serif",
                color: DEEP_BLUE,
              }}
            >
              <span
                className="inline-block rounded-full"
                style={{ width: "4px", height: "20px", background: COBALT }}
              />
              Deans
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-2xl">
              {DEANS.map((dean, idx) => (
                <DeanCard
                  key={dean.email}
                  dean={dean}
                  delay={idx * 0.1}
                  onOpen={() => setOpenDean(dean)}
                />
              ))}
            </div>
          </div>

          {/* Associate Deans */}
          <div id="associate-deans">
            <h3
              className="text-xl font-bold mb-8 flex items-center gap-3"
              style={{
                fontFamily: "Playfair Display, serif",
                color: DEEP_BLUE,
              }}
            >
              <span
                className="inline-block rounded-full"
                style={{ width: "4px", height: "20px", background: COBALT }}
              />
              Associate Deans
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {ASSOCIATE_DEANS.map((ad, idx) => (
                <LeadershipPersonCard
                  key={ad.email}
                  person={ad}
                  delay={idx * 0.1}
                  label="Associate Dean"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── FINANCE & ACCOUNTS OFFICER ── */}
      <section
        id="finance"
        className="bg-white"
        style={{ paddingTop: "80px", paddingBottom: "80px" }}
        data-ocid="administration.finance_section"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{
                  color: COBALT,
                  fontFamily: "Source Sans 3, sans-serif",
                }}
              >
                Financial Administration
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold leading-tight mb-5"
                style={{
                  fontFamily: "Playfair Display, serif",
                  color: DEEP_BLUE,
                }}
              >
                Finance &amp; Accounts Officer
              </h2>
              <p
                className="text-base leading-relaxed mb-8"
                style={{
                  color: "#374151",
                  fontFamily: "Source Sans 3, sans-serif",
                }}
              >
                The Finance &amp; Accounts Office oversees all financial
                operations of COEP Technological University — ensuring
                transparent resource allocation, budget management, and
                compliance with government norms.
              </p>
              <a
                href="mailto:finance@coeptech.ac.in"
                className="inline-flex items-center gap-2 text-base font-semibold group"
                style={{
                  color: COBALT,
                  fontFamily: "Source Sans 3, sans-serif",
                }}
                data-ocid="administration.finance_contact_button"
              >
                <Mail className="w-4 h-4" />
                finance@coeptech.ac.in
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            <div
              className="rounded-2xl p-8"
              style={{
                background: "rgba(22,72,200,0.04)",
                border: "1px solid rgba(22,72,200,0.1)",
              }}
            >
              <p
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{
                  color: COBALT,
                  fontFamily: "Source Sans 3, sans-serif",
                }}
              >
                Responsibilities
              </p>
              {[
                "University budget planning and allocation",
                "Fee management and student accounts",
                "Audit and regulatory compliance",
                "Vendor payments and procurement",
                "Financial reporting to governing bodies",
              ].map((item, i) => (
                <div
                  key={item}
                  className="flex items-start gap-3 mb-3 last:mb-0"
                >
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{
                      background: COBALT,
                      color: "#fff",
                      fontFamily: "Source Sans 3, sans-serif",
                      marginTop: "1px",
                    }}
                  >
                    {i + 1}
                  </span>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: "#374151",
                      fontFamily: "Source Sans 3, sans-serif",
                    }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── OMBUDSPERSON FOR STUDENTS ── */}
      <section
        id="ombudsperson"
        style={{
          background: "#fafbff",
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
        data-ocid="administration.ombudsperson_section"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{
                  color: COBALT,
                  fontFamily: "Source Sans 3, sans-serif",
                }}
              >
                Student Grievance Redressal
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold leading-tight mb-5"
                style={{
                  fontFamily: "Playfair Display, serif",
                  color: DEEP_BLUE,
                }}
              >
                Ombudsperson for Students
              </h2>
              <p
                className="text-base leading-relaxed mb-6"
                style={{
                  color: "#374151",
                  fontFamily: "Source Sans 3, sans-serif",
                }}
              >
                The Ombudsperson for Students is an independent authority
                appointed under UGC guidelines to address grievances related to
                admissions, examinations, fee refunds, and student welfare. The
                office ensures fair, transparent, and timely resolution.
              </p>
              <a
                href="mailto:ombudsperson@coeptech.ac.in"
                className="inline-flex items-center gap-2 text-base font-semibold group"
                style={{
                  color: COBALT,
                  fontFamily: "Source Sans 3, sans-serif",
                }}
                data-ocid="administration.ombudsperson_contact_link"
              >
                <Mail className="w-4 h-4" />
                ombudsperson@coeptech.ac.in
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            <div>
              <p
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{
                  color: COBALT,
                  fontFamily: "Source Sans 3, sans-serif",
                }}
              >
                How to File a Grievance
              </p>
              {[
                {
                  step: "01",
                  text: "Submit a written complaint to the Registrar's Office",
                },
                {
                  step: "02",
                  text: "The Ombudsperson reviews within 10 working days",
                },
                {
                  step: "03",
                  text: "Resolution communicated in writing to the student",
                },
              ].map(({ step, text }) => (
                <div
                  key={step}
                  className="flex items-start gap-5 mb-6 last:mb-0"
                >
                  <span
                    className="text-3xl font-bold flex-shrink-0 leading-none"
                    style={{
                      color: "rgba(22,72,200,0.15)",
                      fontFamily: "Playfair Display, serif",
                    }}
                  >
                    {step}
                  </span>
                  <p
                    className="text-base leading-relaxed pt-1"
                    style={{
                      color: "#374151",
                      fontFamily: "Source Sans 3, sans-serif",
                    }}
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FOOTER ── */}
      <section
        className="py-16 text-white"
        style={{
          background: `linear-gradient(135deg, ${MIDNIGHT} 0%, ${DEEP_BLUE} 50%, ${COBALT} 100%)`,
        }}
        data-ocid="administration.cta"
      >
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p
              className="text-xs font-bold uppercase tracking-widest mb-2 opacity-70"
              style={{ fontFamily: "Source Sans 3, sans-serif" }}
            >
              COEP Technological University
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-white"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Get in Touch
            </h2>
            <p
              className="text-white/70 mt-2 text-base"
              style={{ fontFamily: "Source Sans 3, sans-serif" }}
            >
              Reach out to our administration team for inquiries,
              collaborations, or partnerships.
            </p>
          </div>
          <a
            href="mailto:info@coeptech.ac.in"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all hover:scale-105 whitespace-nowrap"
            style={{
              background: GOLD,
              color: MIDNIGHT,
              fontFamily: "Source Sans 3, sans-serif",
              boxShadow: "0 4px 20px rgba(232,196,42,0.3)",
            }}
            data-ocid="administration.contact_link"
          >
            Contact Administration
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* ── Director Modal ── */}
      {openDirector && (
        <DirectorModal
          director={openDirector}
          onClose={() => setOpenDirector(null)}
        />
      )}

      {/* ── Dean Modal ── */}
      {openDean && (
        <DeanModal dean={openDean} onClose={() => setOpenDean(null)} />
      )}
    </main>
  );
}
