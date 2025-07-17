"use client";
import { cn } from "@/lib/utils";
import React from "react";

export function BackgroundLines({
  children,
  className,
  svgOptions,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  svgOptions?: {
    duration?: number;
  };
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center bg-white dark:bg-black",
        className
      )}
      {...props}
    >
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full fill-neutral-400/80"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <g className="fill-neutral-400/40">
              <polygon points="40,40 20,40 20,20 40,20" />
            </g>
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth="0"
          fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
        />
      </svg>
      <div className="relative z-20">{children}</div>
    </div>
  );
}
