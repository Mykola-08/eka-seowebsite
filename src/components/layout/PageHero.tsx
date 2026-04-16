import * as React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

type PageHeroProps = {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  actions?: React.ReactNode;
  align?: "center" | "start";
  className?: string;
};

/**
 * PageHero — unified hero block for every page.
 * Apple-minimal: eyebrow badge, large balanced headline, light subtitle, pill CTAs.
 */
function PageHero({
  eyebrow,
  title,
  subtitle,
  actions,
  align = "center",
  className,
}: PageHeroProps) {
  const alignClasses =
    align === "center"
      ? "items-center text-center"
      : "items-start text-left";

  return (
    <div
      className={cn(
        "flex flex-col gap-6 md:gap-8",
        alignClasses,
        className
      )}
    >
      {eyebrow ? (
        typeof eyebrow === "string" ? (
          <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-xs font-medium tracking-wide uppercase">
            {eyebrow}
          </Badge>
        ) : (
          eyebrow
        )
      ) : null}

      <h1 className="text-balance font-semibold tracking-tight text-foreground text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
        {title}
      </h1>

      {subtitle ? (
        <p className="text-pretty max-w-2xl text-lg md:text-xl text-foreground/70 leading-relaxed font-light">
          {subtitle}
        </p>
      ) : null}

      {actions ? (
        <div className="flex flex-wrap gap-3 md:gap-4 justify-center mt-2">
          {actions}
        </div>
      ) : null}
    </div>
  );
}

export { PageHero };
