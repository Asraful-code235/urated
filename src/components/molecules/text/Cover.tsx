"use client";
import React, { useEffect, useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export function Cover({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [beamPositions, setBeamPositions] = useState<number[]>([]);

  useEffect(() => {
    if (ref.current) {
      setContainerWidth(ref.current?.clientWidth ?? 0);
      const height = ref.current?.clientHeight ?? 0;
      const numberOfBeams = Math.floor(height / 10);
      const positions = Array.from(
        { length: numberOfBeams },
        (_, i) => (i + 1) * (height / (numberOfBeams + 1))
      );
      setBeamPositions(positions);
    }
  }, [ref.current]);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      ref={ref}
      className="relative hover:bg-neutral-900 group/cover inline-block dark:bg-neutral-900 bg-neutral-100 px-2 py-2 transition duration-200 rounded-sm"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: {
                duration: 0.15,
                ease: "easeInOut",
              },
            }}
            className="absolute inset-0 bg-neutral-900 rounded-sm"
          >
            <SparklesCore
              id={useId()}
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
            {beamPositions.map((position, index) => (
              <Beam
                key={index}
                hovered={hovered}
                duration={Math.random() * 2 + 1}
                delay={Math.random() * 2 + 1}
                width={containerWidth}
                style={{
                  top: `${position}px`,
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.span
        key={String(hovered)}
        animate={{
          scale: hovered ? 0.8 : 1,
          x: hovered ? Math.random() * 2 - 1 : 0,
          y: hovered ? Math.random() * 2 - 1 : 0,
        }}
        className={cn(
          "relative z-20 text-black dark:text-white transition duration-200 group-hover/cover:text-white",
          className
        )}
      >
        {children}
      </motion.span>
    </div>
  );
}

function Beam({
  className,
  delay,
  duration,
  hovered,
  width = 600,
  ...svgProps
}: {
  className?: string;
  delay?: number;
  duration?: number;
  hovered?: boolean;
  width?: number;
} & React.ComponentProps<"svg">) {
  return (
    <svg
      width={width ?? "600"}
      height="1"
      viewBox={`0 0 ${width ?? "600"} 1`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("absolute inset-x-0 w-full", className)}
      {...svgProps}
    >
      <motion.path
        d={`M0 0.5L${width ?? "600"} 0.5`}
        stroke="url(#svgGradient)"
        strokeLinecap="round"
        strokeWidth="1"
        initial={{
          strokeDasharray: "0 100%",
        }}
        animate={
          hovered
            ? {
                strokeDasharray: ["0 100%", "100% 0"],
              }
            : {
                strokeDasharray: "0 100%",
              }
        }
        transition={{
          duration: duration ?? 1,
          delay: delay ?? 0,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      />
      <defs>
        <linearGradient id="svgGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="5%" stopColor="#3b82f6" stopOpacity="1" />
          <stop offset="95%" stopColor="#8b5cf6" stopOpacity="1" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// Simple SparklesCore component since we can't import from ui
function SparklesCore({
  id,
  background,
  minSize,
  maxSize,
  particleDensity,
  className,
  particleColor,
}: {
  id: string;
  background: string;
  minSize: number;
  maxSize: number;
  particleDensity: number;
  className: string;
  particleColor: string;
}) {
  return (
    <div className={className}>
      {/* Simplified sparkles implementation */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 animate-pulse" />
    </div>
  );
}
