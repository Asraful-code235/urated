"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { Bot, Twitch, Twitter } from "lucide-react";

export function ContactFormSocials() {
  const socials = [
    {
      title: "discord",
      href: "https://discord.gg/gaming",
      icon: (
        <Bot className="h-5 w-5 text-[var(--color-urated-text-secondary)] hover:text-[var(--color-urated-accent-primary)] transition-colors duration-200" />
      ),
    },
    {
      title: "twitch",
      href: "https://twitch.tv/gamingchannel",
      icon: (
        <Twitch className="h-5 w-5 text-[var(--color-urated-text-secondary)] hover:text-[var(--color-urated-accent-primary)] transition-colors duration-200" />
      ),
    },
    {
      title: "twitter",
      href: "https://twitter.com/gaminghub",
      icon: (
        <Twitter className="h-5 w-5 text-[var(--color-urated-text-secondary)] hover:text-[var(--color-urated-accent-primary)] transition-colors duration-200" />
      ),
    },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="flex items-center justify-center space-x-6 py-4"
    >
      {socials.map((social, index) => (
        <motion.div
          key={social.title}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link 
            href={social.href} 
            className="p-2 rounded-full bg-[var(--color-muted)] hover:bg-[#2D3748] transition-all duration-200 hover:shadow-[0_0_10px_rgba(0,183,235,0.3)]"
          >
            {social.icon}
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
