import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import type { FacultyProfile } from "@/data/faculty";
import { Link } from "@tanstack/react-router";
import { Award, BookOpen, Mail, Phone, X } from "lucide-react";

interface FacultyModalProps {
  faculty: FacultyProfile | null;
  open: boolean;
  onClose: () => void;
}

export function FacultyModal({ faculty, open, onClose }: FacultyModalProps) {
  if (!faculty) return null;

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent
        className="max-w-2xl w-full p-0 overflow-hidden rounded-2xl border-border"
        data-ocid="faculty.dialog"
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-secondary transition-smooth"
          aria-label="Close profile"
          data-ocid="faculty.close_button"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Hero section */}
        <div
          className="relative h-44 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #081E5C, #1648C8, #0F3499)",
          }}
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-8 w-32 h-32 rounded-full bg-white/20" />
            <div className="absolute bottom-4 right-8 w-24 h-24 rounded-full bg-white/10" />
          </div>
          {/* Photo */}
          <div className="absolute bottom-0 left-8 translate-y-1/2">
            <div className="w-20 h-20 rounded-2xl border-4 border-card overflow-hidden shadow-xl">
              <img
                src={faculty.photoUrl}
                alt={faculty.name}
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    `https://ui-avatars.com/api/?name=${encodeURIComponent(faculty.name)}&size=200&background=1648C8&color=fff&bold=true`;
                }}
              />
            </div>
          </div>
          {faculty.isSpecial && (
            <div className="absolute top-4 left-4">
              <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[#1648C8] text-white">
                Featured Faculty
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="pt-14 px-8 pb-6 space-y-4 max-h-[70vh] overflow-y-auto">
          <DialogTitle
            className="font-heading text-2xl font-bold leading-tight"
            style={{ color: "#0F3499" }}
          >
            {faculty.name}
          </DialogTitle>
          <DialogDescription
            className="font-body text-base font-semibold -mt-3"
            style={{ color: "#1648C8" }}
          >
            {faculty.designation}
          </DialogDescription>

          {/* Contact row */}
          {(faculty.email || faculty.phone) && (
            <div className="flex flex-wrap gap-4">
              {faculty.email && (
                <a
                  href={`mailto:${faculty.email}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[#1648C8] transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>{faculty.email}</span>
                </a>
              )}
              {faculty.phone && (
                <a
                  href={`tel:${faculty.phone}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>{faculty.phone}</span>
                </a>
              )}
            </div>
          )}

          <Separator />

          {/* Bio */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" style={{ color: "#1648C8" }} />
              <h4 className="font-body text-sm font-semibold uppercase tracking-wider text-foreground">
                About
              </h4>
            </div>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              {faculty.bio}
            </p>
          </div>

          {/* Expertise */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4" style={{ color: "#1648C8" }} />
              <h4 className="font-body text-sm font-semibold uppercase tracking-wider text-foreground">
                Areas of Expertise
              </h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {faculty.expertise.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="font-body text-xs border-cobalt-subtle text-cobalt bg-cobalt-subtle px-3 py-0.5"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-2">
            <Link
              to="/faculty/$facultyId"
              params={{ facultyId: faculty.id }}
              onClick={onClose}
              className="font-body text-sm font-semibold px-5 py-2 rounded-lg transition-all duration-200 hover:opacity-90"
              style={{ background: "#E8C42A", color: "#081E5C" }}
              data-ocid="faculty.read_more_button"
            >
              View Full Profile →
            </Link>
            <Button
              variant="outline"
              onClick={onClose}
              className="font-body border-border hover:bg-secondary"
              data-ocid="faculty.cancel_button"
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
