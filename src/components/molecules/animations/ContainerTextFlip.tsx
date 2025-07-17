"use client";

import React, { useState, useEffect, useId } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export interface ContainerTextFlipProps {
  /** Array of words to cycle through in the animation */
  words?: string[];
  /** Time in milliseconds between word transitions */
  interval?: number;
  /** Additional CSS classes to apply to the container */
  className?: string;
  /** Additional CSS classes to apply to the text */
  textClassName?: string;
  /** Duration of the transition animation in milliseconds */
  animationDuration?: number;
}

export function ContainerTextFlip({
  words = ["better", "modern", "beautiful", "awesome"],
  interval = 3000,
  className,
  textClassName,
  animationDuration = 700,
}: ContainerTextFlipProps) {
  const id = useId();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [width, setWidth] = useState(100);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  useEffect(() => {
    const measureWidth = () => {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      if (context) {
        context.font = "1em Arial"; // Approximate font
        const metrics = context.measureText(words[currentWordIndex]);
        setWidth(metrics.width);
      }
    };

    measureWidth();
  }, [currentWordIndex, words]);

  return (
    <div
      className={cn(
        "relative inline-block overflow-hidden",
        className
      )}
      style={{ width: `${width + 20}px` }}
    >
      <motion.div
        key={`${id}-${currentWordIndex}`}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{
          duration: animationDuration / 1000,
          ease: "easeInOut",
        }}
        className={cn(
          "absolute inset-0 flex items-center justify-center",
          textClassName
        )}
      >
        {words[currentWordIndex]}
      </motion.div>
    </div>
  );
}
