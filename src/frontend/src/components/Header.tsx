import { cn } from "@/lib/utils";
import { Link, useRouter } from "@tanstack/react-router";
import {
  ChevronDown,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  Phone,
  Search,
  Twitter,
  X,
  Youtube,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

// ─── Brand colors ─────────────────────────────────────────────────────────────
const COBALT = "#1A237E";
/** Distinct blue for the university name banner — sits between MIDNIGHT ribbon and COBALT nav */
const COBALT_BRIGHT = "#1E3A8A";
const GOLD = "#E8C42A";
const MIDNIGHT = "#081E5C";

// ─── Nav data ────────────────────────────────────────────────────────────────

type NavLink = { label: string; href: string };

type NavItem = {
  label: string;
  /** The base path used to highlight the active tab */
  basePath: string;
  /** Default path when the tab label itself is clicked */
  defaultPath: string;
  links: NavLink[];
};

const NAV_ITEMS: NavItem[] = [
  {
    label: "About Us",
    basePath: "/about-us",
    defaultPath: "/about-us/about-university",
    links: [
      { label: "About University", href: "/about-us/about-university" },
      {
        label: "Authorities, Boards and Committees",
        href: "/about-us/authorities-boards-committees",
      },
      { label: "Board of Governance", href: "/about-us/board-of-governance" },
      { label: "Acts and Statutes", href: "/about-us/about-university" },
      { label: "Vision and Mission", href: "/about-us/about-university" },
    ],
  },
  {
    label: "Administration",
    basePath: "/administration",
    defaultPath: "/administration",
    links: [
      { label: "Vice Chancellor", href: "/administration/vice-chancellor" },
      { label: "Registrar", href: "/administration/registrar" },
      { label: "Directors", href: "/administration#directors" },
      { label: "Dean", href: "/administration#deans" },
      { label: "Associate Deans", href: "/administration#associate-deans" },
      { label: "University Sections", href: "/administration" },
    ],
  },
  {
    label: "Admissions",
    basePath: "/admissions",
    defaultPath: "/admissions",
    links: [
      { label: "Undergraduate (B.Tech)", href: "/admissions/undergraduate" },
      { label: "Post Graduate (M.Tech)", href: "/admissions/postgraduate" },
      { label: "Ph.D.", href: "/admissions/phd" },
      { label: "MBA", href: "/admissions/mba" },
      { label: "PG Diploma", href: "/admissions/pg-diploma" },
      { label: "Fee Structure", href: "/admissions/fee-structure" },
    ],
  },
  {
    label: "Academics",
    basePath: "/academics",
    defaultPath: "/academics",
    links: [
      { label: "Overview", href: "/academics" },
      {
        label: "School of Engineering",
        href: "/academics/schools/school-of-engineering",
      },
      {
        label: "School of Multidisciplinary Sciences",
        href: "/academics/schools/school-of-multidisciplinary-sciences",
      },
      {
        label: "Department of Management Studies (MBA)",
        href: "/academics/schools/school-of-multidisciplinary-sciences/department-of-management-studies",
      },
      {
        label: "Centres of Excellence",
        href: "/academics/centres-of-excellence",
      },
    ],
  },
  {
    label: "Research",
    basePath: "/research",
    defaultPath: "/research",
    links: [
      { label: "Research Publications", href: "/research/publications" },
      { label: "Research Projects", href: "/research/projects" },
      {
        label: "Research Innovation, Incubation and Linkages (RIIL)",
        href: "/research/riil",
      },
      { label: "Ph.D. Data", href: "/research/phd-data" },
      { label: "Our Collaborations", href: "/research/collaborations" },
      { label: "MOUs", href: "/research/mous" },
      { label: "IPR/Patent", href: "/research/ipr-patent" },
      {
        label: "COEP's Research & Innovation Park Chikhali",
        href: "/research/innovation-park",
      },
      { label: "Books Published", href: "/research/books-published" },
    ],
  },
  {
    label: "Campus Life",
    basePath: "/student-life",
    defaultPath: "/student-life",
    links: [
      { label: "Academic Calendar", href: "/student-life/academic-calendar" },
      { label: "Student Clubs", href: "/student-life/clubs" },
      { label: "Anti-Ragging Cell", href: "/student-life/anti-ragging" },
      { label: "Downloads", href: "/student-life/services" },
      { label: "E-Resource", href: "/student-life/services" },
      { label: "Gold Medals", href: "/student-life/services" },
      { label: "How do I get a Certificate", href: "/student-life/services" },
      { label: "Internal Committee (IC)", href: "/student-life/services" },
      { label: "Professional Chapter", href: "/student-life/clubs" },
      { label: "Skill Development Center", href: "/student-life/services" },
      { label: "Student Services", href: "/student-life/services" },
      { label: "Scholarship", href: "/student-life/scholarship" },
      {
        label: "Earn While Learn Scheme",
        href: "/student-life/earn-while-learn",
      },
      { label: "Convocation", href: "/student-life/services" },
    ],
  },
  {
    label: "Facilities",
    basePath: "/facilities",
    defaultPath: "/facilities",
    links: [
      { label: "About", href: "/facilities/about" },
      { label: "Knowledge Resource Center", href: "/facilities/krc" },
      { label: "BIS Academic Dashboard", href: "/facilities/bis-dashboard" },
      { label: "National Service Scheme", href: "/facilities/nss" },
      { label: "Facilities Manager", href: "/facilities/manager" },
      { label: "Notices", href: "/facilities/notices" },
    ],
  },
  {
    label: "Placements & Careers",
    basePath: "/placements",
    defaultPath: "/placements",
    links: [
      { label: "Training & Placement Cell", href: "/placements/tpc" },
      { label: "Placement Statistics 2024-25", href: "/placements/statistics" },
      { label: "Placement Report 2024-25", href: "/placements/report" },
      { label: "Industry Placement Partners", href: "/placements/partners" },
      { label: "Placement Policy 2024-25", href: "/placements/policy" },
      {
        label: "JAF 1 – For Placement & Internship",
        href: "/placements/jaf-forms",
      },
      { label: "JAF 2 – For Summer Internship", href: "/placements/jaf-forms" },
    ],
  },
];

// ─── Ribbon ───────────────────────────────────────────────────────────────────

function Ribbon() {
  return (
    <div
      className="typo-section-label hidden md:block"
      style={{
        backgroundColor: MIDNIGHT,
        color: "rgba(255,255,255,0.72)",
        fontSize: "0.72rem",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-4 xl:px-8 flex items-center justify-between h-9">
        {/* Left: contact */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+912025507000"
            className="flex items-center gap-1.5 font-inter transition-colors"
            style={{ color: "rgba(255,255,255,0.72)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = GOLD;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(255,255,255,0.72)";
            }}
            data-ocid="ribbon.phone_link"
          >
            <Phone className="w-3 h-3 flex-shrink-0" />
            <span>+91-20-25507000</span>
          </a>
          <span style={{ color: "rgba(255,255,255,0.2)" }}>|</span>
          <a
            href="mailto:info@coeptech.ac.in"
            className="flex items-center gap-1.5 font-inter transition-colors"
            style={{ color: "rgba(255,255,255,0.72)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = GOLD;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(255,255,255,0.72)";
            }}
            data-ocid="ribbon.email_link"
          >
            <Mail className="w-3 h-3 flex-shrink-0" />
            <span>info@coeptech.ac.in</span>
          </a>
        </div>

        {/* Right: socials + quick links */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3" aria-label="Social media">
            {[
              {
                href: "https://linkedin.com/school/coep-technological-university",
                Icon: Linkedin,
                label: "LinkedIn",
                ocid: "ribbon.linkedin_link",
              },
              {
                href: "https://twitter.com/coeptech",
                Icon: Twitter,
                label: "Twitter",
                ocid: "ribbon.twitter_link",
              },
              {
                href: "https://instagram.com/coeptech",
                Icon: Instagram,
                label: "Instagram",
                ocid: "ribbon.instagram_link",
              },
              {
                href: "https://youtube.com/@coeptech",
                Icon: Youtube,
                label: "YouTube",
                ocid: "ribbon.youtube_link",
              },
            ].map(({ href, Icon, label, ocid }) => (
              <a
                key={ocid}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="transition-colors"
                style={{ color: "rgba(255,255,255,0.72)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = GOLD;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.72)";
                }}
                data-ocid={ocid}
              >
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>

          <span style={{ color: "rgba(255,255,255,0.2)" }}>|</span>

          <div className="flex items-center gap-3">
            {[
              {
                label: "Alumni Portal",
                href: "https://alumni.coeptech.ac.in",
                ocid: "ribbon.alumni_link",
              },
              {
                label: "MIS Login",
                href: "https://mis.coeptech.ac.in",
                ocid: "ribbon.mis_link",
              },
              {
                label: "NIRF",
                href: "https://www.nirfindia.org",
                ocid: "ribbon.nirf_link",
              },
              {
                label: "NAAC",
                href: "https://naac.gov.in",
                ocid: "ribbon.naac_link",
              },
            ].map(({ label, href, ocid }, i, arr) => (
              <span key={ocid} className="flex items-center gap-3">
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-inter transition-colors"
                  style={{ color: "rgba(255,255,255,0.72)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = GOLD;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(255,255,255,0.72)";
                  }}
                  data-ocid={ocid}
                >
                  {label}
                </a>
                {i < arr.length - 1 && (
                  <span style={{ color: "rgba(255,255,255,0.2)" }}>·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Logo bar ─────────────────────────────────────────────────────────────────

function LogoBar({ collapsed }: { collapsed: boolean }) {
  return (
    <div
      className={cn(
        "overflow-hidden transition-all duration-300 ease-in-out",
        collapsed ? "max-h-0 opacity-0" : "max-h-28 opacity-100",
      )}
      style={{
        backgroundColor: COBALT_BRIGHT,
        borderBottom: collapsed ? "none" : "1px solid rgba(255,255,255,0.15)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-4 xl:px-8 h-[80px] flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3 group min-w-0"
          data-ocid="header.logo_link"
        >
          {/* New COEP logo image */}
          <img
            src="/assets/coep-logo-new.jpg"
            alt="COEP Technological University"
            className="h-14 w-auto flex-shrink-0 object-contain rounded"
            onError={(e) => {
              // Fallback to text logo if image fails
              const img = e.currentTarget;
              img.style.display = "none";
              const fallback = img.nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = "flex";
            }}
          />
          {/* Fallback logo (hidden by default) */}
          <div
            className="w-14 h-14 flex-shrink-0 rounded flex items-center justify-center text-white font-bold text-xl select-none shadow-sm hidden font-cinzel"
            style={{
              background: `linear-gradient(135deg, ${MIDNIGHT} 60%, ${COBALT})`,
            }}
          >
            C
          </div>
          <div className="min-w-0">
            <p
              className="text-[1.05rem] font-bold leading-tight tracking-tight transition-colors text-white font-cinzel"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = GOLD;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#fff";
              }}
            >
              COEP Technological University
            </p>
            <p
              className="text-[0.67rem] leading-tight mt-0.5 font-source"
              style={{ color: "rgba(255,255,255,0.72)" }}
            >
              A Unitary Public University of Government of Maharashtra
              &nbsp;·&nbsp; Estd. 1854
            </p>
          </div>
        </Link>

        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            type="button"
            aria-label="Search"
            className="w-9 h-9 flex items-center justify-center rounded-full transition-colors text-white"
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                "rgba(255,255,255,0.15)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                "transparent";
            }}
            data-ocid="header.search_button"
          >
            <Search className="w-4 h-4" />
          </button>
          <a
            href="https://admissions.coeptech.ac.in"
            target="_blank"
            rel="noreferrer"
            className="typo-btn inline-flex items-center h-9 px-5 rounded transition-all duration-200"
            style={{
              backgroundColor: GOLD,
              color: "#1a1a1a",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                "#b89a18";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 4px 12px rgba(232,196,42,0.35)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                GOLD;
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
            }}
            data-ocid="header.apply_now_button"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── Flat dropdown ────────────────────────────────────────────────────────────

function FlatDropdown({
  item,
  isOpen,
  onClose,
}: { item: NavItem; isOpen: boolean; onClose: () => void }) {
  return (
    <div
      aria-hidden={!isOpen}
      className={cn(
        "absolute top-full left-0 right-0 bg-white z-50 transition-all duration-200 origin-top",
        isOpen
          ? "opacity-100 pointer-events-auto translate-y-0"
          : "opacity-0 pointer-events-none -translate-y-2",
      )}
      style={{
        borderBottom: `3px solid ${COBALT}`,
        boxShadow: "0 12px 40px rgba(26,35,126,0.12)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-4 xl:px-8 py-5">
        {/* Section title */}
        <p className="typo-section-label mb-4" style={{ color: COBALT }}>
          {item.label}
        </p>

        {/* Flat vertical list split into columns of max 7 */}
        <div
          className="grid gap-x-10"
          style={{
            gridTemplateColumns: `repeat(${Math.ceil(item.links.length / 7)}, minmax(0, auto))`,
          }}
        >
          {Array.from(
            { length: Math.ceil(item.links.length / 7) },
            (_, colIdx) => (
              <ul key={`col-${item.label}-${colIdx}`} className="space-y-0.5">
                {item.links.slice(colIdx * 7, colIdx * 7 + 7).map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("/") && !link.href.includes("#") ? (
                      <Link
                        to={link.href as "/"}
                        className="typo-footer-body flex items-center gap-2 py-1.5 transition-colors group"
                        style={{ color: "#444" }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = COBALT;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "#444";
                        }}
                        onClick={onClose}
                      >
                        <span
                          className="w-1 h-1 rounded-full flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                          style={{ backgroundColor: COBALT }}
                        />
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="typo-footer-body flex items-center gap-2 py-1.5 transition-colors group"
                        style={{ color: "#444" }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = COBALT;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "#444";
                        }}
                        onClick={onClose}
                      >
                        <span
                          className="w-1 h-1 rounded-full flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                          style={{ backgroundColor: COBALT }}
                        />
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Desktop nav bar ──────────────────────────────────────────────────────────

function DesktopNav() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const router = useRouter();
  const currentPath = router.state.location.pathname;

  const handleMouseEnter = (idx: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setOpenIdx(idx);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => setOpenIdx(null), 150);
  };

  const handleDropdownEnter = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const handleDropdownLeave = () => {
    timerRef.current = setTimeout(() => setOpenIdx(null), 150);
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenIdx(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isTabActive = (item: NavItem) => currentPath.startsWith(item.basePath);

  return (
    <div
      ref={navRef}
      className="relative hidden lg:block"
      style={{ backgroundColor: COBALT }}
    >
      <div className="max-w-[1280px] mx-auto px-4 xl:px-8">
        <ul className="flex items-center" role="menubar">
          {NAV_ITEMS.map((item, idx) => {
            const active = isTabActive(item);
            return (
              <li
                key={item.label}
                onMouseEnter={() => handleMouseEnter(idx)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={item.defaultPath as "/"}
                  role="menuitem"
                  onClick={() => setOpenIdx(null)}
                  className="typo-nav flex items-center gap-1 px-3.5 py-4 font-semibold tracking-wide relative transition-colors"
                  style={{
                    color:
                      active || openIdx === idx
                        ? GOLD
                        : "rgba(255,255,255,0.9)",
                    borderBottom:
                      active || openIdx === idx
                        ? `2px solid ${GOLD}`
                        : "2px solid transparent",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = GOLD;
                    (
                      e.currentTarget as HTMLAnchorElement
                    ).style.borderBottomColor = GOLD;
                  }}
                  onMouseLeave={(e) => {
                    if (!active && openIdx !== idx) {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "rgba(255,255,255,0.9)";
                      (
                        e.currentTarget as HTMLAnchorElement
                      ).style.borderBottomColor = "transparent";
                    }
                  }}
                  data-ocid={`header.nav_${item.label.toLowerCase().replace(/[^a-z0-9]/g, "_")}_link`}
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      "w-3 h-3 transition-transform duration-200",
                      openIdx === idx && "rotate-180",
                    )}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setOpenIdx(openIdx === idx ? null : idx);
                    }}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Flat dropdowns */}
      {NAV_ITEMS.map((item, idx) => (
        <div
          key={item.label}
          onMouseEnter={handleDropdownEnter}
          onMouseLeave={handleDropdownLeave}
        >
          <FlatDropdown
            item={item}
            isOpen={openIdx === idx}
            onClose={() => setOpenIdx(null)}
          />
        </div>
      ))}
    </div>
  );
}

// ─── Mobile drawer ────────────────────────────────────────────────────────────

function MobileDrawer({
  open,
  onClose,
}: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleSection = (idx: number) =>
    setExpanded(expanded === idx ? null : idx);

  if (!open) return null;

  return (
    <div
      className="lg:hidden fixed inset-0 z-50 flex"
      data-ocid="header.mobile_drawer"
    >
      {/* Backdrop */}
      <button
        type="button"
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-label="Close menu"
      />

      {/* Drawer panel */}
      <nav className="relative ml-auto w-[88vw] max-w-sm bg-white h-full flex flex-col shadow-2xl overflow-y-auto">
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 py-4"
          style={{ borderBottom: "1px solid #e0e6f0", backgroundColor: COBALT }}
        >
          <div className="flex items-center gap-2">
            <img
              src="/assets/coep-logo-new.jpg"
              alt="COEP Tech"
              className="h-8 w-auto object-contain"
            />
            <span className="typo-btn text-sm text-white font-cinzel">
              COEP Tech
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="p-1.5 rounded text-white transition-colors"
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                "rgba(255,255,255,0.15)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                "transparent";
            }}
            data-ocid="header.mobile_close_button"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav items */}
        <ul className="flex-1 divide-y divide-[#f0f0f0]">
          {NAV_ITEMS.map((item, idx) => (
            <li key={item.label}>
              <button
                type="button"
                className="typo-nav flex items-center justify-between w-full px-5 py-3.5 font-semibold transition-colors"
                style={{
                  color: expanded === idx ? COBALT : "#1a1a1a",
                }}
                onClick={() => toggleSection(idx)}
                aria-expanded={expanded === idx}
                data-ocid={`header.mobile_nav_${item.label.toLowerCase().replace(/[^a-z0-9]/g, "_")}_toggle`}
              >
                {item.label}
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-200",
                    expanded === idx ? "rotate-180" : "",
                  )}
                  style={{ color: expanded === idx ? COBALT : "#999" }}
                />
              </button>

              {expanded === idx && (
                <ul className="bg-[#f7f9ff] px-5 pb-4 pt-1 space-y-0.5">
                  {item.links.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith("/") && !link.href.includes("#") ? (
                        <Link
                          to={link.href as "/"}
                          className="typo-footer-body flex items-center gap-2 py-1.5 w-full transition-colors"
                          style={{ color: "#555" }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = COBALT;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#555";
                          }}
                          onClick={onClose}
                        >
                          <span
                            className="w-1 h-1 rounded-full flex-shrink-0"
                            style={{ backgroundColor: COBALT }}
                          />
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className="typo-footer-body flex items-center gap-2 py-1.5 w-full transition-colors"
                          style={{ color: "#555" }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = COBALT;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#555";
                          }}
                          onClick={onClose}
                        >
                          <span
                            className="w-1 h-1 rounded-full flex-shrink-0"
                            style={{ backgroundColor: COBALT }}
                          />
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Footer actions */}
        <div className="p-5" style={{ borderTop: "1px solid #e0e6f0" }}>
          <a
            href="https://admissions.coeptech.ac.in"
            target="_blank"
            rel="noreferrer"
            className="typo-btn block w-full text-center py-3 rounded transition-colors"
            style={{
              backgroundColor: GOLD,
              color: "#1a1a1a",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                "#b89a18";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                GOLD;
            }}
            data-ocid="header.mobile_apply_now_button"
          >
            Apply Now
          </a>
          <div className="mt-3 flex items-center justify-center gap-4">
            <a
              href="tel:+912025507000"
              className="typo-footer-body flex items-center gap-1"
              style={{ color: "#777" }}
            >
              <Phone className="w-3 h-3" />
              +91-20-25507000
            </a>
            <a
              href="mailto:info@coeptech.ac.in"
              className="typo-footer-body flex items-center gap-1"
              style={{ color: "#777" }}
            >
              <Mail className="w-3 h-3" />
              info@coeptech.ac.in
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

// ─── Root export ──────────────────────────────────────────────────────────────

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 w-full">
        {/* Zone 1: Top ribbon */}
        <Ribbon />

        {/* Zone 2: Logo bar — collapses on scroll */}
        <LogoBar collapsed={scrolled} />

        {/* Zone 3: Desktop nav bar — cobalt background */}
        <DesktopNav />

        {/* Zone 3 mobile: compact nav bar */}
        <div
          className="lg:hidden"
          style={{
            backgroundColor: COBALT,
            borderBottom: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <div className="max-w-[1280px] mx-auto px-4 flex items-center justify-between h-14">
            <Link
              to="/"
              className="flex items-center gap-2"
              data-ocid="header.mobile_logo_link"
            >
              <img
                src="/assets/coep-logo-new.jpg"
                alt="COEP Tech"
                className="h-8 w-auto object-contain"
              />
              <span className="typo-nav font-bold text-white font-cinzel">
                COEP Technological University
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="p-2 rounded transition-colors text-white"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                  "rgba(255,255,255,0.15)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                  "transparent";
              }}
              data-ocid="header.mobile_menu_button"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
