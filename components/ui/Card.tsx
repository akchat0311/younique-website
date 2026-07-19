import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
  highlighted = false,
}: {
  children: React.ReactNode;
  className?: string;
  highlighted?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border bg-white p-6 shadow-card transition-shadow duration-150",
        highlighted ? "border-gold-300 shadow-elevated" : "border-stone-200 hover:shadow-elevated",
        className
      )}
    >
      {children}
    </div>
  );
}
