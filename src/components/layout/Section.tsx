import * as React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  /** Visual treatment. `muted` uses bg-muted/30 for subtle separation. */
  tone?: "default" | "muted" | "inverted";
  /** Vertical rhythm density. */
  spacing?: "tight" | "default" | "loose";
  /** Render without the default Container wrapper (for full-bleed content). */
  bleed?: boolean;
};

const spacingMap = {
  tight: "py-14 md:py-20",
  default: "py-20 md:py-28 lg:py-32",
  loose: "py-24 md:py-36 lg:py-44",
};

const toneMap = {
  default: "bg-background text-foreground",
  muted: "bg-muted/40 text-foreground",
  inverted: "bg-foreground text-background",
};

/**
 * Section — standardized vertical slice of a page.
 * Apple-minimal rhythm: generous whitespace, consistent across all pages.
 */
function Section({
  className,
  children,
  tone = "default",
  spacing = "default",
  bleed = false,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(spacingMap[spacing], toneMap[tone], className)}
      {...props}
    >
      {bleed ? children : <Container>{children}</Container>}
    </section>
  );
}

export { Section };
