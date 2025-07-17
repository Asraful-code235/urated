"use client";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

export function NavbarWithChildren() {
  return <Navbar />;
}

function Navbar() {
  const navItems = [
    {
      title: "Services",
      href: "#",
      children: [
        { title: "Web Development", href: "#" },
        { title: "Interface Design", href: "#" },
        { title: "Search Engine Optimization", href: "#" },
        { title: "Branding", href: "#" },
      ],
    },
    {
      title: "Products",
      href: "#",
      children: [
        { title: "Algochurn", href: "#" },
        { title: "Tailwind Master Kit", href: "#" },
      ],
    },
    {
      title: "Pricing",
      href: "#",
      children: [
        { title: "Hobby", href: "#" },
        { title: "Individual", href: "#" },
        { title: "Team", href: "#" },
      ],
    },
  ];

  return (
    <div className="w-full">
      <DesktopNav navItems={navItems} />
      <MobileNav navItems={navItems} />
    </div>
  );
}


