import Link from "next/link";
import { HoveredLinkProps } from "@/types/organisms/Navbar.types";

export function HoveredLink({ children, ...rest }: HoveredLinkProps) {
  return (
    <Link
      {...rest}
      className="text-neutral-700 hover:text-black dark:text-neutral-200"
    >
      {children}
    </Link>
  );
}
