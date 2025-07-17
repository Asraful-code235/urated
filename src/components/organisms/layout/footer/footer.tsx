"use client";

import { cn } from "@/lib/utils";
import {
  MessageSquare,
  Twitch,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export function CenteredWithLogo() {
  const [email, setEmail] = useState("");

  const pages = [
    {
      title: "Privacy Policy",
      href: "#",
    },
    {
      title: "Terms of Service", 
      href: "#",
    },
    {
      title: "Support",
      href: "#",
    },
    {
      title: "Careers",
      href: "#",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <div className="border-t border-neutral-700 px-8 py-20 bg-[#1A202C] w-full relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-sm text-[#A0AEC0] justify-between items-start md:px-8">
        <div className="flex flex-col items-center justify-center w-full relative">
          <div className="mr-0 md:mr-4 md:flex mb-8">
            <Logo />
          </div>

          {/* Newsletter Signup */}
          <div className="mb-8 w-full max-w-md">
            <h3 className="text-[#FFFFFF] font-bold text-lg mb-4 text-center">
              Stay Updated
            </h3>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-2 rounded-md bg-[#2D3748] border border-[#4A5568] text-[#FFFFFF] placeholder-[#A0AEC0] focus:outline-none focus:ring-2 focus:ring-[#00B7EB] focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-primary text-[#1A202C] font-semibold rounded-md hover:bg-primary transition-all duration-300 hover:shadow-[0_0_20px_rgba(57,255,20,0.5)] hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </div>

          <ul className="transition-colors flex sm:flex-row flex-col hover:text-[#FFFFFF] text-[#A0AEC0] list-none gap-4 mb-8">
            {pages.map((page, idx) => (
              <li key={"pages" + idx} className="list-none">
                <Link
                  className="transition-all duration-300 hover:text-[#00B7EB] hover:shadow-[0_0_10px_rgba(0,183,235,0.5)]"
                  href={page.href}
                >
                  {page.title}
                </Link>
              </li>
            ))}
          </ul>

          <GridLineHorizontal className="max-w-7xl mx-auto mt-8" />
        </div>
        <div className="flex sm:flex-row flex-col justify-between mt-8 items-center w-full">
          <p className="text-[#A0AEC0] mb-8 sm:mb-0">
            © 2024 URated eSports. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="group">
              <MessageSquare className="h-6 w-6 text-[#A0AEC0] group-hover:text-[#00B7EB] transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(0,183,235,0.6)] group-hover:scale-110" />
            </Link>
            <Link href="#" className="group">
              <Twitch className="h-6 w-6 text-[#A0AEC0] group-hover:text-[#00B7EB] transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(0,183,235,0.6)] group-hover:scale-110" />
            </Link>
            <Link href="#" className="group">
              <Twitter className="h-6 w-6 text-[#A0AEC0] group-hover:text-[#00B7EB] transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(0,183,235,0.6)] group-hover:scale-110" />
            </Link>
            <Link href="#" className="group">
              <Youtube className="h-6 w-6 text-[#A0AEC0] group-hover:text-[#00B7EB] transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(0,183,235,0.6)] group-hover:scale-110" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const GridLineHorizontal = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "1px",
          "--width": "5px",
          "--fade-stop": "90%",
          "--offset": offset || "200px", //-100px if you want to keep the line inside
          "--color-dark": "rgba(255, 255, 255, 0.2)",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "w-[calc(100%+var(--offset))] h-[var(--height)]",
        "bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className
      )}
    ></div>
  );
};

const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm mr-4 text-[#FFFFFF] px-2 py-1 relative z-20 group"
    >
      <div className="w-8 h-8 bg-[#00B7EB] rounded-lg flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(0,183,235,0.5)] transition-all duration-300">
        <span className="text-[#FFFFFF] font-bold text-lg">U</span>
      </div>
      <span className="font-bold text-[#FFFFFF] text-xl group-hover:text-[#00B7EB] transition-colors duration-300">
        URated
      </span>
    </Link>
  );
};