import { cn } from "@/lib/utils";
import React from "react";

type DotBackgroundDemoProps = {
  className?: string;
  contentClassName?: string;
  patternClassName?: string;
  patternStyle?: React.CSSProperties;
  overlayClassName?: string;
  showLabel?: boolean;
  label?: string;
  children?: React.ReactNode;
};

export default function DotBackgroundDemo({
  className,
  contentClassName,
  patternClassName,
  patternStyle,
  overlayClassName,
  showLabel = true,
  label = "Backgrounds",
  children,
}: DotBackgroundDemoProps) {
  return (
    <div
      className={cn(
        "relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black",
        className
      )}
    >
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
          patternClassName
        )}
        style={patternStyle}
      />
      <div
        className={cn(
          "pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black",
          overlayClassName
        )}
      />
      {showLabel ? (
        <p
          className={cn(
            "relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl",
            contentClassName
          )}
        >
          {label}
        </p>
      ) : null}
      {children ? (
        <div className={cn("relative z-20", contentClassName)}>{children}</div>
      ) : null}
    </div>
  );
}
