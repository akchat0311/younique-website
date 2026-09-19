import { cn } from "@/lib/utils";

// Sprint 8.11 — retyped to match the report, which is the best-designed
// thing YOUnique produces and was sharing none of its language with the
// site. Two borrowings, both straight off the page:
//
//   · the eyebrow sits behind a short vertical accent rule rather than
//     inside a pill Badge (see the bar before "Profile Snapshot"), and
//   · the heading is set in the display serif (Fraunces), the face that
//     gives the report its authority and which the site had loaded but
//     used exactly twice.
//
// `tone` exists because sections now alternate grounds — the same heading
// has to sit on canvas, on white, and on the deep azure panel.
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  const onLight = tone === "dark";
  return (
    <div
      className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}
    >
      {eyebrow ? (
        <p
          className={cn(
            "flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.14em]",
            align === "center" && "justify-center",
            onLight ? "text-brand-700" : "text-brand-200"
          )}
        >
          <span
            aria-hidden
            className={cn(
              "h-4 w-[3px] rounded-full",
              onLight ? "bg-brand-600" : "bg-brand-300"
            )}
          />
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "mt-4 font-display text-[2rem] font-semibold leading-[1.12] tracking-tight sm:text-[2.6rem]",
          onLight ? "text-stone-900" : "text-white"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            onLight ? "text-stone-600" : "text-white/70"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
