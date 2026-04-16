import * as React from "react";
import { cn } from "@/lib/utils";

type Feature = {
  icon?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
};

type FeatureGridProps = {
  features: Feature[];
  columns?: 2 | 3 | 4;
  className?: string;
};

const columnsMap = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-2 lg:grid-cols-3",
  4: "md:grid-cols-2 lg:grid-cols-4",
};

/**
 * FeatureGrid — unified bento/feature list for benefits, values, etc.
 * Apple-minimal: rounded-apple surfaces, hairline borders, subtle hover lift.
 */
function FeatureGrid({
  features,
  columns = 3,
  className,
}: FeatureGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 md:gap-6",
        columnsMap[columns],
        className
      )}
    >
      {features.map((feature, i) => (
        <div
          key={i}
          className="group relative flex flex-col gap-4 rounded-apple border border-border/60 bg-card p-8 transition-all duration-300 hover:border-border hover:bg-surface-muted"
        >
          {feature.icon ? (
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
              {feature.icon}
            </div>
          ) : null}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              {feature.title}
            </h3>
            {feature.description ? (
              <p className="text-sm md:text-base text-foreground/70 leading-relaxed font-light">
                {feature.description}
              </p>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}

export { FeatureGrid };
export type { Feature };
