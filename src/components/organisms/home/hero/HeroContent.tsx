"use client";
import { ChevronRight, Play, Gamepad2 } from 'lucide-react';
import { motion } from 'motion/react';

export function HeroContent() {
  return (
    <div className="mx-auto max-w-2xl shrink-0 lg:mx-0 lg:pt-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3"
      >
        <Gamepad2 className="h-11 w-11 text-primary" />
        <span className="text-2xl font-bold text-white">URated</span>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-24 sm:mt-32 lg:mt-16"
      >
        <a href="#" className="inline-flex space-x-6">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-sm/6 font-semibold text-primary ring-1 ring-primary/20 ring-inset shadow-[0_0_20px_rgba(57,255,20,0.3)]">
            New Season
          </span>
          <span className="inline-flex items-center space-x-2 text-sm/6 font-medium text-[#A0AEC0]">
            <span>Championship starts now</span>
            <ChevronRight aria-hidden="true" className="size-5 text-gray-500" />
          </span>
        </a>
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-10 text-5xl font-bold tracking-tight text-pretty text-white sm:text-7xl font-[var(--font-heading)]"
      >
        Dominate the Competition with URated eSports
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-8 text-lg font-medium text-pretty text-[#A0AEC0] sm:text-xl/8"
      >
        Join the ultimate gaming platform where skill meets strategy. Connect with elite players, build your clan, and rise to the top of the leaderboards.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-10 flex items-center gap-x-6"
      >
        <a
          href="#"
          className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-[#1A202C] shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-primary/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-200"
        >
          Start Your Journey
        </a>
        <a 
          href="#" 
          className="inline-flex items-center gap-2 text-sm/6 font-semibold text-white border border-secondary rounded-md px-3.5 py-2.5 shadow-lg shadow-secondary/25 hover:bg-secondary/10 hover:shadow-secondary/40 transition-all duration-200"
        >
          <Play className="h-4 w-4" />
          Watch Trailer
        </a>
      </motion.div>
    </div>
  );
}
