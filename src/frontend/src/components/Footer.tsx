import { Link } from "@tanstack/react-router";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import type { MouseEvent } from "react";

const MIDNIGHT = "#081E5C";
const GOLD = "#E8C42A";
const MUTED_WHITE = "rgba(255,255,255,0.65)";
const DIM_WHITE_45 = "rgba(255,255,255,0.45)";

const quickLinks = [
  { label: "About Us", href: "/about-us/about-university" },
  { label: "Administration", href: "/administration" },
  { label: "Admissions", href: "/admissions" },
  { label: "Academics", href: "/academics" },
  { label: "Research", href: "/research" },
  { label: "Student Life", href: "/student-life" },
  { label: "Facilities", href: "/facilities" },
  { label: "Placements", href: "/placements" },
];

const importantLinks = [
  { label: "NIRF Ranking", href: "https://www.nirfindia.org/", external: true },
  { label: "NAAC", href: "https://www.naac.gov.in/", external: true },
  { label: "IQAC", href: "#", external: false },
  { label: "Alumni Portal", href: "#", external: false },
  { label: "MIS Student Login", href: "#", external: false },
  { label: "RTI (Right to Info)", href: "#", external: false },
  { label: "Anti-Ragging", href: "#", external: false },
  { label: "Grievance Cell", href: "#", external: false },
];

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/school/coep-technological-university/",
    label: "LinkedIn",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/coeptech",
    label: "Facebook",
  },
  { icon: Twitter, href: "https://twitter.com/coeptech", label: "Twitter" },
  {
    icon: Youtube,
    href: "https://www.youtube.com/@coeptechpune",
    label: "YouTube",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/coeptech/",
    label: "Instagram",
  },
];

// ── Hover helpers (avoid inline assignment lint errors) ─────────────────────
function setColorGold(e: MouseEvent<HTMLAnchorElement>) {
  e.currentTarget.style.color = GOLD;
}
function setColorMuted(e: MouseEvent<HTMLAnchorElement>) {
  e.currentTarget.style.color = MUTED_WHITE;
}
function setColorDim(e: MouseEvent<HTMLAnchorElement>) {
  e.currentTarget.style.color = DIM_WHITE_45;
}
function setMapBgHover(e: MouseEvent<HTMLAnchorElement>) {
  e.currentTarget.style.background = "rgba(232,196,42,0.25)";
}
function setMapBgNormal(e: MouseEvent<HTMLAnchorElement>) {
  e.currentTarget.style.background = "rgba(232,196,42,0.13)";
}

function ColHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="typo-footer-heading uppercase tracking-widest mb-6"
      style={{
        color: GOLD,
        borderBottom: "1px solid rgba(232,196,42,0.25)",
        paddingBottom: "0.6rem",
      }}
    >
      {children}
    </h3>
  );
}

function FooterLink({
  href,
  children,
  ocid,
  external,
}: {
  href: string;
  children: React.ReactNode;
  ocid?: string;
  external?: boolean;
}) {
  const baseStyle: React.CSSProperties = {
    color: MUTED_WHITE,
    transition: "color 0.2s ease",
    lineHeight: "1.6",
  };

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="typo-footer-body"
        style={baseStyle}
        data-ocid={ocid}
        onMouseEnter={setColorGold}
        onMouseLeave={setColorMuted}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      to={href as "/"}
      className="typo-footer-body"
      style={baseStyle}
      data-ocid={ocid}
      onMouseEnter={setColorGold}
      onMouseLeave={setColorMuted}
    >
      {children}
    </Link>
  );
}

function SocialIcon({
  icon: Icon,
  href,
  label,
}: {
  icon: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>;
  href: string;
  label: string;
}) {
  function handleEnter(e: MouseEvent<HTMLAnchorElement>) {
    const el = e.currentTarget;
    el.style.transform = "scale(1.1)";
    el.style.borderColor = GOLD;
    el.style.background = "rgba(232,196,42,0.15)";
    const svg = el.querySelector("svg");
    if (svg) (svg as SVGElement).style.color = GOLD;
  }
  function handleLeave(e: MouseEvent<HTMLAnchorElement>) {
    const el = e.currentTarget;
    el.style.transform = "scale(1)";
    el.style.borderColor = "rgba(232,196,42,0.30)";
    el.style.background = "rgba(255,255,255,0.05)";
    const svg = el.querySelector("svg");
    if (svg) (svg as SVGElement).style.color = "white";
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 rounded-full flex items-center justify-center"
      style={{
        border: "1px solid rgba(232,196,42,0.30)",
        background: "rgba(255,255,255,0.05)",
        transition:
          "transform 0.2s ease, border-color 0.2s ease, background 0.2s ease",
      }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      data-ocid={`footer.social.${label.toLowerCase()}`}
    >
      <Icon
        className="w-4 h-4 text-white"
        style={{ transition: "color 0.2s ease" }}
      />
    </a>
  );
}

function ContactLink({
  href,
  children,
  ocid,
  type,
}: {
  href: string;
  children: React.ReactNode;
  ocid?: string;
  type?: "tel" | "mailto";
}) {
  const prefix = type === "tel" ? "tel:" : "mailto:";
  return (
    <a
      href={`${prefix}${href}`}
      className="typo-footer-body"
      style={{
        color: MUTED_WHITE,
        transition: "color 0.2s ease",
      }}
      onMouseEnter={setColorGold}
      onMouseLeave={setColorMuted}
      data-ocid={ocid}
    >
      {children}
    </a>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer
      style={{ background: MIDNIGHT }}
      className="text-white"
      data-ocid="footer"
    >
      {/* Top gold accent line */}
      <div
        className="w-full"
        style={{ height: "2px", background: GOLD }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto py-16 px-6 lg:px-8">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* ── Col 1: Brand ───────────────────────────────────── */}
          <div
            className="space-y-5 lg:pr-8"
            style={{ borderRight: "1px solid rgba(232,196,42,0.15)" }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg font-cinzel"
                style={{
                  background: GOLD,
                  color: MIDNIGHT,
                }}
              >
                CT
              </div>
              <p className="typo-footer-heading text-white leading-snug">
                COEP Technological
                <br />
                University
              </p>
            </div>

            <p
              className="text-sm italic leading-relaxed font-cinzel"
              style={{
                color: GOLD,
                opacity: 0.9,
              }}
            >
              170 Years of Excellence,
              <br />
              Innovation &amp; Leadership
            </p>

            <div className="flex items-start gap-3">
              <MapPin
                className="w-4 h-4 flex-shrink-0 mt-0.5"
                style={{ color: GOLD }}
              />
              <p
                className="typo-footer-body leading-relaxed"
                style={{ color: "rgba(255,255,255,0.60)" }}
              >
                Survey No. 1893-A, Wellesley Rd,
                <br />
                Shivajinagar, Pune – 411 005,
                <br />
                Maharashtra, India
              </p>
            </div>

            <div
              className="flex items-center gap-2 pt-1 flex-wrap"
              data-ocid="footer.social_row"
            >
              {socialLinks.map((s) => (
                <SocialIcon
                  key={s.label}
                  icon={s.icon}
                  href={s.href}
                  label={s.label}
                />
              ))}
            </div>
          </div>

          {/* ── Col 2: Quick Links ─────────────────────────────── */}
          <div>
            <ColHeading>Quick Links</ColHeading>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label} className="flex items-center gap-2">
                  <span style={{ color: GOLD, fontSize: "0.45rem" }}>▶</span>
                  <FooterLink
                    href={link.href}
                    ocid={`footer.quick_link.${link.label.toLowerCase().replace(/[^a-z0-9]/g, "_")}`}
                  >
                    {link.label}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Important Links ─────────────────────────── */}
          <div>
            <ColHeading>Important Links</ColHeading>
            <ul className="space-y-3">
              {importantLinks.map((link) => (
                <li key={link.label} className="flex items-center gap-2">
                  <span style={{ color: GOLD, fontSize: "0.45rem" }}>▶</span>
                  <FooterLink
                    href={link.href}
                    external={link.external}
                    ocid={`footer.important.${link.label.toLowerCase().replace(/[^a-z0-9]/g, "_")}`}
                  >
                    {link.label}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Contact & Connect ───────────────────────── */}
          <div>
            <ColHeading>Contact &amp; Connect</ColHeading>
            <ul className="space-y-5">
              <li className="flex items-center gap-3">
                <Phone
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: GOLD }}
                />
                <ContactLink
                  href="+912025507201"
                  type="tel"
                  ocid="footer.contact.phone"
                >
                  +91 20 2550 7201
                </ContactLink>
              </li>
              <li className="flex items-center gap-3">
                <Mail
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: GOLD }}
                />
                <ContactLink
                  href="info@coeptech.ac.in"
                  type="mailto"
                  ocid="footer.contact.email"
                >
                  info@coeptech.ac.in
                </ContactLink>
              </li>
            </ul>

            {/* Map card */}
            <div
              className="mt-8 rounded-lg overflow-hidden"
              style={{ border: "1px solid rgba(232,196,42,0.20)" }}
            >
              <div
                className="flex items-center gap-2 px-4 py-3"
                style={{ background: "rgba(255,255,255,0.04)" }}
              >
                <MapPin
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: GOLD }}
                />
                <span
                  className="typo-footer-body"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  COEP Tech, Shivajinagar, Pune
                </span>
              </div>
              <div
                className="h-24 flex items-center justify-center"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  borderTop: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <a
                  href="https://maps.google.com/?q=COEP+Technological+University+Pune"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="typo-btn text-xs px-4 py-2 rounded-md"
                  style={{
                    background: "rgba(232,196,42,0.13)",
                    color: GOLD,
                    border: "1px solid rgba(232,196,42,0.35)",
                    transition: "background 0.2s ease",
                  }}
                  onMouseEnter={setMapBgHover}
                  onMouseLeave={setMapBgNormal}
                  data-ocid="footer.map_link"
                >
                  View on Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Gold gradient divider */}
        <div
          className="mt-14 mb-6 w-full"
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(232,196,42,0.55), transparent)",
          }}
          aria-hidden="true"
        />

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p
            className="typo-footer-body text-xs"
            style={{ color: "rgba(255,255,255,0.50)" }}
          >
            © {year} COEP Technological University. All rights reserved.
          </p>

          <p
            className="typo-footer-body text-xs text-center"
            style={{ color: "rgba(255,255,255,0.40)" }}
          >
            Autonomous University established 2022
          </p>

          <p
            className="typo-footer-body text-xs"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            Built with love using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: DIM_WHITE_45, transition: "color 0.2s ease" }}
              onMouseEnter={setColorGold}
              onMouseLeave={setColorDim}
              data-ocid="footer.caffeine_link"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
