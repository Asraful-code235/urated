'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface NewsletterFormProps {
  className?: string;
  onSubmit?: (email: string) => void;
}

export function NewsletterForm({ className, onSubmit }: NewsletterFormProps) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && onSubmit) {
      onSubmit(email);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className={cn(
        'flex flex-col lg:flex-row w-full max-w-[320px] lg:max-w-[642px] items-center gap-4',
        className
      )}
    >
      <div className="flex-1 w-full">
        <input
          type="email"
          placeholder="Enter a valid email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-5 py-[14px] rounded-lg bg-[#F9FAFB] text-[#4A5565] text-base lg:text-xl font-inter font-normal placeholder:text-[#4A5565] border-0 focus:outline-none focus:ring-2 focus:ring-[#FCC800]"
          required
        />
      </div>
      <button 
        type="submit"
        className="px-5 py-3 lg:py-[14px] bg-[#FCC800] rounded-lg text-[#1E2939] text-base lg:text-xl font-inter font-semibold hover:bg-[#e6b400] transition-colors w-full lg:w-auto"
      >
        Join the Elite
      </button>
    </form>
  );
}
