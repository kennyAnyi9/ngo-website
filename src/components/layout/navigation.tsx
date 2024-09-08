import { NavigationItem } from "@/lib/types";
import Link from "next/link";
import React from "react";

const navigationItems: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul className="flex space-x-4">
        {navigationItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
