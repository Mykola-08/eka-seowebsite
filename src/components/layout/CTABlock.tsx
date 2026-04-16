import * as React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

type CTABlockProps = {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  actions?: React.ReactNode;
  tone?: "soft" | "bold";
  className?: string;
};

/**
 * CTABlock — unified end-of-page call to action.
 * `soft` = light surface; `bold` = primary blue surface with inverted text.
 */
function CTABlock({
  eyebrow,
  title,
  subtitle,
  actions,
  tone = "soft",
  className,
}: CTABlockProps) {
  const toneClasses =
    tone === "bold"
      ? "bg-primary text-primary-foreground"
      : "bg-muted/50 text-foreground";

  const subtitleClasses =
    tone === "bold"
      ? "text-primary-foreground/80"
      : "text-foreground/70";

  return (
    <Container>
      <div
        className={cn(
          "flex flex-col items-center gap-6 rounded-apple-lg px-6 py-16 md:py-24 text-center",
          toneClasses,
          className
        )}
      >
        {eyebrow ? (
          <span className="text-xs font-medium tracking-[0.2em] uppercase opacity-80">
            {eyebrow}
          </span>
        ) : null}
        <h2 className="text-balance max-w-3xl text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
          {title}
        </h2>
        {subtitle ? (
          <p
            className={cn(
              "text-pretty max-w-2xl text-lg md:text-xl font-light leading-relaxed",
              subtitleClasses
            )}
          >
            {subtitle}
          </p>
        ) : null}
        {actions ? (
          <div className="flex flex-wrap gap-3 md:gap-4 justify-center mt-2">
            {actions}
          </div>
        ) : null}
      </div>
    </Container>
  );
}

export { CTABlock };
