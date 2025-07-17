"use client";
import { motion } from "motion/react";

export function ContactFormHeader() {
  return (
    <div>
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-8 text-2xl font-bold leading-9 tracking-tight text-[var(--color-urated-text-primary)] font-[var(--font-heading)]"
      >
        Level Up Your <span className="text-[var(--color-urated-accent-primary)] animate-pulse">Game</span>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-4 text-[var(--color-urated-text-secondary)] font-[var(--font-body)] text-sm max-w-sm"
      >
        Ready to dominate? Get in touch with our team and let's conquer the digital realm together.
      </motion.p>
    </div>
  );
}
