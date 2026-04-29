import { useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import SubTabRibbon from "../components/SubTabRibbon";
import type { SubTab } from "../components/SubTabRibbon";
import { ALUMNI_DATA, TIMELINE_DATA } from "../data/aboutus";
import type { Alumni, TimelineEvent } from "../data/aboutus";

const COBALT = "#1A237E";
const DEEP_BLUE = "#0F3399";
const MIDNIGHT = "#081E5C";
const GOLD = "#E8C42A";

const ABOUT_US_TABS: SubTab[] = [
  { id: "about-university", label: "About University" },
  {
    id: "authorities-boards-committees",
    label: "Authorities, Boards & Committees",
  },
  { id: "board-of-governance", label: "Board of Governance" },
];

const TAB_ROUTES: Record<string, string> = {
  "about-university": "/about-us/about-university",
  "authorities-boards-committees": "/about-us/authorities-boards-committees",
  "board-of-governance": "/about-us/board-of-governance",
};

function useScrollReveal<T extends HTMLElement>() {
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
      { threshold: 0.12 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function useGridReveal<T extends HTMLElement>() {
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
      { threshold: 0.08 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function TimelineEntry({
  event,
  index,
}: { event: TimelineEvent; index: number }) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="relative flex items-start gap-0 group"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.65s ease ${index * 0.07}s, transform 0.65s ease ${index * 0.07}s`,
      }}
    >
      <div
        className={`flex-1 ${isEven ? "pr-10 text-right" : "order-last pl-10 text-left"}`}
      >
        {isEven ? (
          <TimelineCard event={event} align="right" />
        ) : (
          <div className="hidden md:block" />
        )}
      </div>

      <div className="flex flex-col items-center z-10 shrink-0 w-10">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center font-inter font-bold text-white shadow-cobalt"
          style={{ background: COBALT }}
        >
          <span style={{ fontSize: "10px" }}>{event.year}</span>
        </div>
        <div
          className="flex-1 w-0.5 bg-cobalt opacity-30 mt-1"
          style={{ minHeight: "40px" }}
        />
      </div>

      <div
        className={`flex-1 ${!isEven ? "pl-10 text-left" : "order-none pr-0"}`}
      >
        {!isEven ? (
          <TimelineCard event={event} align="left" />
        ) : (
          <div className="hidden md:block" />
        )}
      </div>

      <div className="md:hidden absolute left-14 right-0 top-0">
        <TimelineCard event={event} align="left" />
      </div>
    </div>
  );
}

function TimelineCard({
  event,
  align,
}: { event: TimelineEvent; align: "left" | "right" }) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-premium hover:shadow-premium-hover transition-premium p-5 mb-8 border border-gray-100 group-hover:border-cobalt-subtle ${align === "right" ? "text-right" : "text-left"}`}
    >
      <div
        className={`flex items-center gap-2 mb-2 ${align === "right" ? "justify-end" : ""}`}
      >
        <span
          className="px-3 py-0.5 rounded-full typo-support text-xs"
          style={{ background: "rgba(26, 35, 126, 0.1)", color: COBALT }}
        >
          {event.era}
        </span>
        <span
          className="font-inter font-bold text-2xl"
          style={{ color: COBALT }}
        >
          {event.year}
        </span>
      </div>
      <h3
        className="font-cinzel font-semibold text-lg mb-2 leading-snug"
        style={{ color: DEEP_BLUE }}
      >
        {event.title}
      </h3>
      <p className="typo-body text-sm mb-3" style={{ color: "#4a5568" }}>
        {event.description}
      </p>
      {event.imageUrl && (
        <div className="overflow-hidden rounded-xl img-hover-zoom">
          <img
            src={event.imageUrl}
            alt={event.title}
            className="w-full h-40 object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
}

function AlumniCard({ alumni, delay }: { alumni: Alumni; delay: number }) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="bg-white rounded-2xl shadow-premium hover:shadow-premium-hover transition-premium cursor-default relative overflow-hidden group border-l-4"
      style={{
        borderLeftColor: COBALT,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500 rounded-2xl"
        style={{
          background:
            "linear-gradient(135deg, rgba(26, 35, 126, 0.04) 0%, rgba(26, 35, 126, 0) 60%)",
        }}
      />
      <div className="p-6 flex flex-col items-center text-center">
        <div className="w-20 h-20 rounded-full mb-4 ring-4 ring-cobalt overflow-hidden shadow-cobalt transition-transform duration-500 group-hover:scale-105">
          <img
            src={alumni.imageUrl}
            alt={alumni.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        {alumni.award && (
          <span
            className="px-3 py-1 rounded-full typo-support text-xs mb-2 inline-block font-bold"
            style={{ background: COBALT, color: "white" }}
          >
            {alumni.award}
          </span>
        )}
        <h3
          className="typo-card-title text-lg mb-1"
          style={{ color: DEEP_BLUE }}
        >
          {alumni.name}
        </h3>
        <div className="flex items-center justify-center gap-2 mb-1 flex-wrap">
          <span className="typo-support font-semibold text-cobalt">
            {alumni.batch}
          </span>
          <span className="text-xs text-gray-300">•</span>
          <span className="typo-support text-cobalt">{alumni.department}</span>
        </div>
        <p className="typo-support italic mb-3" style={{ color: "#4a5568" }}>
          {alumni.designation}
        </p>
        <p className="typo-body text-sm" style={{ color: "#6b7280" }}>
          {alumni.contribution}
        </p>
      </div>
    </div>
  );
}

export default function AboutUniversityPage() {
  const introRef = useScrollReveal<HTMLDivElement>();
  const statsRef = useScrollReveal<HTMLDivElement>();
  const alumniGrid = useGridReveal<HTMLDivElement>();
  const navigate = useNavigate();

  function handleTabChange(tabId: string) {
    const route = TAB_ROUTES[tabId];
    if (route) navigate({ to: route });
  }

  return (
    <main className="font-source">
      {/* HERO */}
      <section
        className="relative min-h-[420px] flex flex-col justify-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #081E5C 0%, #0F3399 45%, #1A237E 100%)",
        }}
        data-ocid="about-university.hero"
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('/assets/dms-hero-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            mixBlendMode: "overlay",
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(8, 30, 92, 0.45)" }}
        />

        <div
          className="relative z-10 max-w-5xl mx-auto px-6 py-16 text-center fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          <nav
            className="flex items-center justify-center gap-2 typo-support text-sm mb-6"
            style={{ color: "rgba(255,255,255,0.65)" }}
            aria-label="Breadcrumb"
            data-ocid="about-university.breadcrumb"
          >
            <span>Home</span>
            <span>›</span>
            <span>About Us</span>
            <span>›</span>
            <span style={{ color: "rgba(255,255,255,0.85)" }}>
              About University
            </span>
          </nav>

          <h1
            className="typo-hero-heading text-white mb-5 leading-tight fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            About COEP
            <br />
            <span style={{ color: "white" }}>Technological University</span>
          </h1>

          <p
            className="typo-hero-tagline text-white/80 fade-in-up"
            style={{ animationDelay: "0.35s" }}
          >
            Established 1854 &nbsp;·&nbsp; Third Oldest Engineering College in
            Asia &nbsp;·&nbsp; 172 Years of Excellence
          </p>

          <div
            className="mx-auto mt-8 rounded-full fade-in-up"
            style={{
              width: "60px",
              height: "3px",
              background: GOLD,
              animationDelay: "0.5s",
            }}
          />
        </div>
      </section>

      <SubTabRibbon
        tabs={ABOUT_US_TABS}
        activeTab="about-university"
        onTabChange={handleTabChange}
      />

      {/* INTRO */}
      <section
        className="bg-white py-16 md:py-20"
        data-ocid="about-university.intro"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div
            ref={statsRef.ref}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14"
            style={{
              opacity: statsRef.visible ? 1 : 0,
              transform: statsRef.visible
                ? "translateY(0)"
                : "translateY(20px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            {[
              { label: "Founded", value: "1854" },
              { label: "Rank in Asia", value: "3rd Oldest" },
              { label: "Years of Excellence", value: "172" },
              { label: "University Status", value: "Unitary Public" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center py-5 px-4 rounded-xl border-b-4"
                style={{
                  borderBottomColor: COBALT,
                  background: "rgba(26, 35, 126, 0.04)",
                }}
              >
                <div
                  className="typo-stat-number mb-1"
                  style={{ color: DEEP_BLUE }}
                >
                  {stat.value}
                </div>
                <div
                  className="typo-stat-label uppercase tracking-wide font-semibold"
                  style={{ color: COBALT }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div
            ref={introRef.ref}
            className="grid md:grid-cols-5 gap-10 items-start"
            style={{
              opacity: introRef.visible ? 1 : 0,
              transform: introRef.visible
                ? "translateY(0)"
                : "translateY(24px)",
              transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
            }}
          >
            <div className="md:col-span-3 space-y-5">
              <div className="flex items-center gap-3 mb-1">
                <div className="divider-cobalt" />
                <span className="typo-section-label text-cobalt">
                  Our Heritage
                </span>
              </div>
              <h2
                className="typo-section-heading leading-tight"
                style={{ color: DEEP_BLUE }}
              >
                172 Years of Engineering Excellence
              </h2>
              <p className="typo-body" style={{ color: "#374151" }}>
                Established in the era of British in the year 1854, well before
                any of the formal degree awarding universities took roots in
                India, College of Engineering Pune (COEP) now known as COEP
                Technological University (COEP Tech) is the third oldest
                engineering college in the country, and indeed in Asia, after
                College of Engineering, Guindy, and IIT Roorkee, having glorious
                history of 172 years.
              </p>
              <p className="typo-body" style={{ color: "#374151" }}>
                Started as the Poona Engineering Class and Mechanical School, it
                was used for training officers involved in public works such as
                the construction of buildings, dams, canals, railways and
                bridges. The school was renamed several times before it became
                College of Engineering, Poona (COEP), in the year 1911.
              </p>
              <p className="typo-body" style={{ color: "#374151" }}>
                It was initially affiliated to the University of Bombay for a
                degree of Licentiate in Civil Engineering known as LCE and later
                to the University of Pune. The degree programs in Civil
                Engineering, Mechanical Engineering and Electrical Engineering
                were started in 1908, 1912 and 1932, respectively. From then on,
                the college has gone on expanding adding new departments and new
                wings by the year.
              </p>
            </div>

            <div className="md:col-span-2 flex flex-col gap-5">
              <div
                className="rounded-2xl p-7 text-white relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #0F3399, #1A237E)",
                }}
              >
                <div
                  className="absolute top-4 left-5 font-cinzel font-bold opacity-10"
                  style={{ fontSize: "6rem", color: "#283593" }}
                >
                  "
                </div>
                <p
                  className="typo-body-lg relative z-10 italic"
                  style={{ fontStyle: "italic" }}
                >
                  In 2022, COEP was elevated to a full-fledged Unitary Public
                  University — opening new avenues for research, innovation, and
                  global partnerships.
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="w-8 h-0.5 bg-gold" />
                  <span className="typo-section-label text-white/70">
                    Government of Maharashtra, 2022
                  </span>
                </div>
              </div>
              <div
                className="rounded-2xl p-6 border-l-4"
                style={{
                  borderLeftColor: COBALT,
                  background: "rgba(26, 35, 126, 0.05)",
                }}
              >
                <p
                  className="font-baskerville font-semibold text-sm mb-1"
                  style={{ color: MIDNIGHT }}
                >
                  Unitary Public University
                </p>
                <p className="typo-body text-sm" style={{ color: "#4a5568" }}>
                  Recognised by the Government of Maharashtra with full academic
                  and administrative independence — the highest distinction in
                  Indian higher education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section
        className="py-16 md:py-24"
        style={{ background: "#f8f9fa" }}
        data-ocid="about-university.timeline"
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="divider-cobalt mx-0" />
              <span className="typo-section-label text-cobalt">Since 1854</span>
              <div className="divider-cobalt mx-0" />
            </div>
            <h2
              className="typo-section-heading mb-4"
              style={{ color: DEEP_BLUE }}
            >
              Our Journey Through History
            </h2>
            <div className="w-16 h-1 bg-cobalt mx-auto rounded-full" />
          </div>

          <div className="relative">
            <div
              className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 hidden md:block"
              style={{
                background:
                  "linear-gradient(to bottom, #1A237E, rgba(26, 35, 126, 0.1))",
              }}
            />
            <div className="space-y-0">
              {TIMELINE_DATA.map((event, index) => (
                <TimelineEntry
                  key={`${event.year}-${event.title}`}
                  event={event}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ALUMNI */}
      <section
        className="bg-white py-16 md:py-24"
        data-ocid="about-university.alumni"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="divider-cobalt mx-0" />
              <span className="typo-section-label text-cobalt">
                Alumni Legacy
              </span>
              <div className="divider-cobalt mx-0" />
            </div>
            <h2
              className="typo-section-heading mb-3"
              style={{ color: DEEP_BLUE }}
            >
              Distinguished Alumni
            </h2>
            <p className="typo-body-lg" style={{ color: "#6b7280" }}>
              Minds that shaped the world
            </p>
            <div className="w-16 h-1 bg-cobalt mx-auto mt-4 rounded-full" />
          </div>

          <div
            ref={alumniGrid.ref}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
          >
            {ALUMNI_DATA.map((alumni, index) => (
              <AlumniCard
                key={alumni.id}
                alumni={alumni}
                delay={alumniGrid.visible ? index * 0.08 : 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-14 text-white text-center"
        style={{
          background: "linear-gradient(135deg, #081E5C 0%, #1A237E 100%)",
        }}
        data-ocid="about-university.cta"
      >
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="typo-section-heading mb-4 text-white">
            Be Part of the Legacy
          </h2>
          <p className="typo-body-lg text-white/80 mb-8">
            Join one of Asia's oldest and most prestigious engineering
            universities — where tradition meets innovation.
          </p>
          <a
            href="https://www.coeptech.ac.in/admissions"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-full typo-btn transition-smooth hover:opacity-90 hover:shadow-gold"
            style={{ background: GOLD, color: MIDNIGHT }}
            data-ocid="about-university.admissions_link"
          >
            Explore Admissions
          </a>
        </div>
      </section>
    </main>
  );
}
