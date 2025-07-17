"use client";
import { motion } from "motion/react";
import { Gamepad2 } from "lucide-react";
import { FormSubmitHandler } from "@/types/molecules/ContactForm.types";

interface ContactFormFieldsProps {
  onSubmit: FormSubmitHandler;
}

export function ContactFormFields({ onSubmit }: ContactFormFieldsProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="py-10"
    >
      <div>
        <form onSubmit={onSubmit} className="space-y-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-[var(--color-urated-text-secondary)] font-[var(--font-body)]"
          >
            Player Name
          </label>

          <div className="mt-2">
            <input
              id="name"
              type="name"
              placeholder="Your gaming handle"
              className="block w-full bg-[var(--color-muted)] px-4 rounded-md border-0 py-1.5 text-[var(--color-urated-text-primary)] placeholder:text-[var(--color-urated-text-secondary)] focus:ring-2 focus:ring-[var(--color-urated-accent-primary)] focus:outline-none sm:text-sm sm:leading-6 font-[var(--font-body)] transition-all duration-200 hover:bg-[#2D3748] focus:shadow-[0_0_10px_rgba(0,183,235,0.3)]"
            />
          </div>

          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-[var(--color-urated-text-secondary)] font-[var(--font-body)]"
          >
            Email address
          </label>

          <div className="mt-2">
            <input
              id="email"
              type="email"
              placeholder="your@email.com"
              className="block w-full bg-[var(--color-muted)] px-4 rounded-md border-0 py-1.5 text-[var(--color-urated-text-primary)] placeholder:text-[var(--color-urated-text-secondary)] focus:ring-2 focus:ring-[var(--color-urated-accent-primary)] focus:outline-none sm:text-sm sm:leading-6 font-[var(--font-body)] transition-all duration-200 hover:bg-[#2D3748] focus:shadow-[0_0_10px_rgba(0,183,235,0.3)]"
            />
          </div>

          <label
            htmlFor="company"
            className="block text-sm font-medium leading-6 text-[var(--color-urated-text-secondary)] font-[var(--font-body)]"
          >
            Gaming Organization
          </label>

          <div className="mt-2">
            <input
              id="company"
              type="company"
              placeholder="Your guild, team, or organization"
              className="block w-full bg-[var(--color-muted)] px-4 rounded-md border-0 py-1.5 text-[var(--color-urated-text-primary)] placeholder:text-[var(--color-urated-text-secondary)] focus:ring-2 focus:ring-[var(--color-urated-accent-primary)] focus:outline-none sm:text-sm sm:leading-6 font-[var(--font-body)] transition-all duration-200 hover:bg-[#2D3748] focus:shadow-[0_0_10px_rgba(0,183,235,0.3)]"
            />
          </div>

          <label
            htmlFor="message"
            className="block text-sm font-medium leading-6 text-[var(--color-urated-text-secondary)] font-[var(--font-body)]"
          >
            Message
          </label>

          <div className="mt-2">
            <textarea
              rows={5}
              id="message"
              placeholder="Tell us about your gaming goals and how we can help you dominate..."
              className="block w-full bg-[var(--color-muted)] px-4 rounded-md border-0 py-1.5 text-[var(--color-urated-text-primary)] placeholder:text-[var(--color-urated-text-secondary)] focus:ring-2 focus:ring-[var(--color-urated-accent-primary)] focus:outline-none sm:text-sm sm:leading-6 font-[var(--font-body)] transition-all duration-200 hover:bg-[#2D3748] focus:shadow-[0_0_10px_rgba(0,183,235,0.3)] resize-none"
            />
          </div>

          <div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[var(--color-urated-accent-secondary)] relative z-10 hover:bg-[#33E612] text-[var(--color-urated-primary-background)] text-sm md:text-sm transition-all font-bold duration-200 rounded-full px-4 py-2 flex items-center justify-center w-full font-[var(--font-body)] shadow-[0_0_15px_rgba(57,255,20,0.4)] hover:shadow-[0_0_25px_rgba(57,255,20,0.6)]"
            >
              <Gamepad2 className="w-4 h-4 mr-2" />
              Start Gaming
            </motion.button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
