import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Container — page-level max-width wrapper with horizontal padding.
 * Single source of truth for content width across the site.
 */
function Container({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export { Container };
