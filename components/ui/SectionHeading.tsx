import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <Badge tone="brand" className="mb-4">
          {eyebrow}
        </Badge>
      ) : null}
      <h2 className="text-3xl font-semibold text-stone-900 sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-lg leading-relaxed text-stone-600">{description}</p>
      ) : null}
    </div>
  );
}
