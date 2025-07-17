import { MenuProps } from "@/types/organisms/Navbar.types";

export function Menu({ setActive, children }: MenuProps) {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative flex justify-center space-x-4 rounded-full bg-white px-4 py-3 dark:bg-neutral-950"
    >
      {children}
    </nav>
  );
}
