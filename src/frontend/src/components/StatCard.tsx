interface StatCardProps {
  value: string;
  label: string;
  sublabel?: string;
  delay?: number;
}

export function StatCard({ value, label, sublabel, delay = 0 }: StatCardProps) {
  return (
    <div
      className="flex flex-col items-center text-center p-6 rounded-2xl border border-border bg-card hover:border-cobalt-subtle hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-smooth group"
      style={{ animationDelay: `${delay}s` }}
    >
      <span
        className="typo-stat-number leading-tight mb-1"
        style={{ color: "#0F3399" }}
      >
        {value}
      </span>
      <span className="typo-stat-label font-inter font-semibold text-foreground">
        {label}
      </span>
      {sublabel && (
        <span className="typo-stat-label font-source text-muted-foreground mt-0.5">
          {sublabel}
        </span>
      )}
    </div>
  );
}
