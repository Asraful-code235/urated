"use client";
import { Button } from "@/components/atoms/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export function SimpleNavbarWithHoverEffects() {
  return <Navbar />;
}

const Navbar = () => {
  const navItems = [
    { name: "Home", link: "#" },
    { name: "About", link: "#" },
    { name: "Features", link: "#" },
    { name: "Clans", link: "#" },
    { name: "Contact", link: "#" },
  ];

  return (
    <div className="w-full">
      <DesktopNav navItems={navItems} />
      <MobileNav navItems={navItems} />
    </div>
  );
};

const DesktopNav = ({ navItems }: any) => {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <motion.div
      onMouseLeave={() => {
        setHovered(null);
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-[#1A202C]/95 backdrop-blur-sm px-4 py-2 lg:flex border border-[#4A5568]/30",
        "sticky inset-x-0 top-40"
      )}
    >
      <Logo />
      <div className="hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-[#A0AEC0] transition duration-200 hover:text-[#FFFFFF] lg:flex lg:space-x-2">
        {navItems.map((navItem: any, idx: number) => (
          <Link
            onMouseEnter={() => setHovered(idx)}
            className="relative px-4 py-2 text-[#A0AEC0] hover:text-[#FFFFFF] transition-colors duration-200 font-[var(--font-body)] font-medium"
            key={`link=${idx}`}
            href={navItem.link}
            style={{ 
              textShadow: hovered === idx ? "0 0 8px #D4AF37" : "none"
            }}
          >
            {hovered === idx && (
              <motion.div
                layoutId="hovered"
                className="absolute inset-0 h-full w-full rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 shadow-[0_0_20px_rgba(0,183,235,0.3)]"
              />
            )}
            <span className="relative z-20">{navItem.name}</span>
          </Link>
        ))}
      </div>
      <Button variant={"default"} className="hidden rounded-full px-8 py-2 text-sm font-bold text-[#1A202C] cursor-pointer hover:shadow-[0px_-2px_0px_0px_rgba(255,255,255,0.4)_inset] transition-all duration-200 md:block">
        Join Now
      </Button>
    </motion.div>
  );
};

const MobileNav = ({ navItems }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        animate={{ borderRadius: open ? "4px" : "2rem" }}
        key={String(open)}
        className="relative mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-[#1A202C]/95 backdrop-blur-sm px-4 py-2 lg:hidden border border-[#4A5568]/30"
      >
        <div className="flex w-full flex-row items-center justify-between">
          <Logo />
          {open ? (
            <X
              className="text-[#FFFFFF] hover:text-[#D4AF37] transition-colors duration-200 cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          ) : (
            <Menu
              className="text-[#FFFFFF] hover:text-[#D4AF37] transition-colors duration-200 cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          )}
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-x-0 top-16 z-20 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-[#1A202C]/95 backdrop-blur-sm px-4 py-8 border border-[#4A5568]/30"
            >
              {navItems.map((navItem: any, idx: number) => (
                <Link
                  key={`link=${idx}`}
                  href={navItem.link}
                  className="relative text-[#A0AEC0] hover:text-[#FFFFFF] transition-colors duration-200 font-[var(--font-body)] font-medium"
                >
                  <motion.span className="block">{navItem.name} </motion.span>
                </Link>
              ))}
              <Button className="w-full rounded-lg px-8 py-2 font-medium text-[#1A202C] hover:shadow-[0px_-2px_0px_0px_rgba(255,255,255,0.4)_inset] transition-all duration-200">
                Join Now
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

const Logo = () => {
  return (
    <Link
      href="/"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-[#FFFFFF]"
    >
       <Image
        src="/logo.png"
        alt="logo"
        width={30}
        height={30}
        className="rounded-full object-contain w-full h-full overflow-hidden"
      />
      <span className="font-medium text-[#FFFFFF] sr-only">
        <span className="text-primary">U</span>Rated
      </span>
    </Link>
  );
};