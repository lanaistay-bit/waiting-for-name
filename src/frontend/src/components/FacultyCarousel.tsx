import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FACULTY_DATA } from "@/data/faculty";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

const FACULTY_ROUTE =
  "/academics/schools/school-of-multidisciplinary-sciences/department-of-management-studies/faculty";

export function FacultyCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = FACULTY_DATA.length;

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(goNext, 4500);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, goNext]);

  // Build the 5-visible window: [active-2, active-1, active, active+1, active+2]
  const getVisibleCards = () => {
    const offsets = [-2, -1, 0, 1, 2];
    return offsets.map((offset) => ({
      offset,
      index: (activeIndex + offset + total) % total,
      faculty: FACULTY_DATA[(activeIndex + offset + total) % total],
    }));
  };

  const visibleCards = getVisibleCards();

  const getCardStyle = (offset: number) => {
    const absOffset = Math.abs(offset);
    if (absOffset === 0) {
      return {
        zIndex: 10,
        scale: 1,
        opacity: 1,
        blur: 0,
        width: "320px",
        shadow: "0 20px 60px rgba(51,44,111,0.30)",
        border: "2px solid #F5A623",
      };
    }
    if (absOffset === 1) {
      return {
        zIndex: 5,
        scale: 0.78,
        opacity: 0.62,
        blur: 2,
        width: "220px",
        shadow: "0 6px 20px rgba(51,44,111,0.12)",
        border: "1.5px solid rgba(51,44,111,0.2)",
      };
    }
    return {
      zIndex: 2,
      scale: 0.62,
      opacity: 0.35,
      blur: 4,
      width: "170px",
      shadow: "0 4px 12px rgba(51,44,111,0.07)",
      border: "1px solid rgba(51,44,111,0.10)",
    };
  };

  return (
    <section
      id="faculty"
      className="py-24 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #f5f7ff 0%, #eef1f8 100%)",
      }}
      data-ocid="dms.faculty_section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <Badge
            variant="outline"
            className="px-4 py-1 mb-4 text-sm"
            style={{
              borderColor: "rgba(51,44,111,0.4)",
              color: "#332C6F",
              background: "rgba(51,44,111,0.05)",
            }}
          >
            Our Faculty
          </Badge>
          <h2
            className="text-3xl md:text-5xl font-display font-bold"
            style={{ color: "#1F1B47" }}
          >
            Meet Our Distinguished Faculty
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto font-body text-lg">
            Experienced academics and industry practitioners bringing diverse
            expertise and mentorship to every classroom.
          </p>
        </motion.div>

        {/* Spotlight Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div
            className="relative flex items-center justify-center"
            style={{ height: "500px" }}
          >
            {/* Arrow Left */}
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous faculty"
              data-ocid="dms.faculty.carousel.prev_button"
              className="absolute left-0 md:left-4 z-20 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-md"
              style={{
                border: "2px solid #332C6F",
                background: "white",
                color: "#332C6F",
              }}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Cards Row */}
            <div
              className="relative flex items-center justify-center w-full"
              style={{ perspective: "1200px" }}
            >
              {visibleCards.map(({ offset, index, faculty }) => {
                const style = getCardStyle(offset);
                return (
                  <motion.div
                    key={faculty.id}
                    layout
                    animate={{
                      scale: style.scale,
                      opacity: style.opacity,
                      filter: `blur(${style.blur}px)`,
                      zIndex: style.zIndex,
                    }}
                    transition={{ type: "spring", stiffness: 280, damping: 28 }}
                    onClick={() => {
                      if (offset !== 0) {
                        setActiveIndex(index);
                      }
                    }}
                    className="absolute rounded-2xl overflow-hidden cursor-pointer flex-shrink-0"
                    style={{
                      width: style.width,
                      left: `calc(50% + ${offset * 200}px - ${Number.parseInt(style.width) / 2}px)`,
                      boxShadow: style.shadow,
                      border: style.border,
                      background: "white",
                    }}
                    data-ocid={`dms.faculty.card.${index + 1}`}
                  >
                    {/* Photo */}
                    <div
                      className="w-full overflow-hidden"
                      style={{ height: offset === 0 ? "240px" : "180px" }}
                    >
                      <motion.img
                        src={faculty.photoUrl}
                        alt={faculty.name}
                        className="w-full h-full object-cover object-top"
                        whileHover={offset === 0 ? { scale: 1.05 } : {}}
                        transition={{ duration: 0.4 }}
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(faculty.name)}&background=332C6F&color=fff&size=300&bold=true`;
                        }}
                      />
                    </div>

                    {/* Gold top accent on active */}
                    {offset === 0 && (
                      <div
                        className="h-1 w-full"
                        style={{
                          background:
                            "linear-gradient(to right, #F5A623, #332C6F)",
                        }}
                      />
                    )}

                    {/* Info — only fully shown on active */}
                    <AnimatePresence>
                      {offset === 0 && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.35 }}
                          className="p-5"
                        >
                          <h3
                            className="font-bold text-base leading-snug font-display"
                            style={{ color: "#1F1B47" }}
                          >
                            {faculty.name}
                          </h3>
                          <p
                            className="mt-1 text-sm font-semibold font-body"
                            style={{ color: "#332C6F" }}
                          >
                            {faculty.title}
                          </p>
                          {faculty.qualification && (
                            <p className="text-xs text-muted-foreground mt-1 font-body">
                              {faculty.qualification}
                            </p>
                          )}
                          <div className="flex flex-wrap gap-1.5 mt-3">
                            {faculty.expertise.slice(0, 2).map((exp) => (
                              <Badge
                                key={exp}
                                variant="secondary"
                                className="text-[10px] px-2 py-0.5 font-body"
                                style={{
                                  background: "rgba(51,44,111,0.09)",
                                  color: "#332C6F",
                                  border: "1px solid rgba(51,44,111,0.2)",
                                }}
                              >
                                {exp}
                              </Badge>
                            ))}
                          </div>

                          {/* View Profile link — navigates to dedicated page */}
                          <Link
                            to="/faculty/$facultyId"
                            params={{ facultyId: faculty.id }}
                            onClick={(e) => e.stopPropagation()}
                            className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold font-body px-4 py-2 rounded-lg transition-all duration-200 hover:opacity-90"
                            style={{
                              background: "#332C6F",
                              color: "white",
                            }}
                            data-ocid={`dms.faculty.view_profile.${index + 1}`}
                          >
                            View Profile
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Minimal info for non-active */}
                    {offset !== 0 && (
                      <div className="p-3 text-center">
                        <p
                          className="text-xs font-bold font-display truncate"
                          style={{ color: "#1F1B47" }}
                        >
                          {faculty.name}
                        </p>
                        <p
                          className="text-[10px] font-body truncate"
                          style={{ color: "#332C6F" }}
                        >
                          {faculty.title}
                        </p>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Arrow Right */}
            <button
              type="button"
              onClick={goNext}
              aria-label="Next faculty"
              data-ocid="dms.faculty.carousel.next_button"
              className="absolute right-0 md:right-4 z-20 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-md"
              style={{
                border: "2px solid #332C6F",
                background: "white",
                color: "#332C6F",
              }}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots */}
          <div
            className="flex gap-2 justify-center mt-8"
            data-ocid="dms.faculty.carousel.dots"
          >
            {FACULTY_DATA.map((f, i) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to faculty ${i + 1}`}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === activeIndex ? "28px" : "8px",
                  height: "8px",
                  background: i === activeIndex ? "#332C6F" : "#CBD5E0",
                }}
              />
            ))}
          </div>

          {/* View all */}
          <motion.div
            className="flex justify-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              asChild
              className="gap-2 font-body font-semibold px-8 py-3 rounded-full text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ background: "#332C6F", color: "white" }}
              data-ocid="dms.faculty.view_all_button"
            >
              <Link to={FACULTY_ROUTE}>
                View More Faculty <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
