import { cn } from "@/lib/utils";

type Tone = "brand" | "gold" | "accent" | "success" | "neutral";

const toneClasses: Record<Tone, string> = {
  brand: "bg-brand-50 text-brand-700 border-brand-100",
  gold: "bg-gold-50 text-gold-700 border-gold-200",
  accent: "bg-accent-50 text-accent-700 border-accent-100",
  success: "bg-success-50 text-success-700 border-success-100",
  neutral: "bg-stone-100 text-stone-600 border-stone-200",
};

export function Badge({
  children,
  tone = "brand",
  className,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium tracking-wide",
        toneClasses[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
