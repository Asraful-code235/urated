"use client";
import { motion } from "motion/react";
import { ContactFormHeader } from "./ContactFormHeader";
import { ContactFormFields } from "./ContactFormFields";
import { ContactFormSocials } from "./ContactFormSocials";

export function ContactForm() {
  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    console.log(target);
  };

  return (
    <div className="bg-[var(--color-urated-primary-background)] w-full flex items-center justify-center">
      <div className="flex relative px-4 z-20 items-center w-full justify-center py-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto w-full max-w-lg bg-[var(--color-urated-primary-background)] border border-[var(--color-border)] px-4 md:px-10 py-8 shadow-2xl rounded-3xl"
        >
          <ContactFormHeader />
          <ContactFormFields onSubmit={handleSubmit} />
          <ContactFormSocials />
        </motion.div>
      </div>
    </div>
  );
}

// Re-export for backward compatibility
export { ContactForm as SimpleCenteredContactForm };
