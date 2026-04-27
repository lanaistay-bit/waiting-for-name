import { Badge } from "@/components/ui/badge";
import type { FacultyProfile } from "@/data/faculty";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Mail } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export type { FacultyProfile as FacultyData };

interface FacultyCardProps {
  faculty: FacultyProfile;
  index: number;
}

export function FacultyCard({ faculty, index }: FacultyCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative bg-white rounded-2xl overflow-hidden flex flex-col cursor-pointer"
      style={{
        boxShadow: hovered
          ? "0 20px 48px rgba(22,72,200,0.18), 0 4px 12px rgba(0,0,0,0.08)"
          : "0 4px 20px rgba(0,0,0,0.07)",
        transition: "box-shadow 0.35s ease",
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      data-ocid={`faculty.item.${index + 1}`}
    >
      {/* Gold top border — reveals on hover */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[3px] z-10"
        style={{ background: "linear-gradient(to right, #E8C42A, #f5d94d)" }}
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Photo */}
      <div className="relative overflow-hidden" style={{ height: "240px" }}>
        <motion.img
          src={faculty.photoUrl}
          alt={faculty.name}
          className="w-full h-full object-cover object-top"
          loading="lazy"
          animate={{ scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          onError={(e) => {
            const target = e.currentTarget;
            target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(faculty.name)}&background=1648C8&color=fff&size=300&bold=true`;
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(8,30,92,0.65) 0%, rgba(8,30,92,0.1) 50%, transparent 100%)",
          }}
        />
        {faculty.isSpecial && (
          <div
            className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-body font-bold uppercase tracking-wider"
            style={{ background: "#E8C42A", color: "#081E5C" }}
          >
            Featured
          </div>
        )}
        <AnimatePresence>
          {faculty.email && hovered && (
            <motion.a
              href={`mailto:${faculty.email}`}
              onClick={(e) => e.preventDefault()}
              className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-body font-semibold"
              style={{ background: "rgba(255,255,255,0.92)", color: "#1648C8" }}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.2 }}
            >
              <Mail className="w-3 h-3" />
              Email
            </motion.a>
          )}
        </AnimatePresence>
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div>
          <h3
            className="font-heading font-bold text-base leading-snug line-clamp-2"
            style={{ color: "#0F3499" }}
          >
            {faculty.name}
          </h3>
          <p
            className="font-body text-sm font-semibold mt-1 leading-snug line-clamp-2"
            style={{ color: "#1648C8" }}
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

        <div className="flex flex-wrap gap-1.5">
          {faculty.expertise.slice(0, 3).map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="font-body text-[10px] px-2 py-0 font-normal border-0"
              style={{
                background: "rgba(22,72,200,0.08)",
                color: "#1648C8",
              }}
            >
              {tag}
            </Badge>
          ))}
          {faculty.expertise.length > 3 && (
            <Badge
              variant="secondary"
              className="font-body text-[10px] px-2 py-0 font-normal border-0"
              style={{ background: "#f1f5f9", color: "#6b7280" }}
            >
              +{faculty.expertise.length - 3}
            </Badge>
          )}
        </div>

        <div className="flex-1" />

        <Link
          to="/faculty/$facultyId"
          params={{ facultyId: faculty.id }}
          className="flex items-center justify-between px-4 py-2.5 rounded-xl font-body font-semibold text-sm mt-1 transition-all duration-300"
          style={{
            background: hovered ? "#1648C8" : "#f0f4ff",
            color: hovered ? "#fff" : "#1648C8",
          }}
          data-ocid={`faculty.read_more.${index + 1}`}
        >
          <span>View Profile</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
}
