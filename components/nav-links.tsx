"use client";

import { FC } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { XIcon } from "lucide-react";
import NavItem from "./ui/nav-item";

interface NavLinksProps {
  isSidbar: boolean;
  onClose?:()=>void;
}


const NavRoutes = [
  {
    href: "/",
    label: "About",
  },
  {
    href: "/#skills",
    label: "Skills",
  },
  {
    href: "/#strengths",
    label: "Strengths",
  },

  // {
  //   href: "/#edu",
  //   label: "education",
  // },

  {
    href: "/#projects",
    label: "Projects",
  },
  // {
  //   href: "/blogs",
  //   label: "Blogs",
  // },

  {
    href: "/contact",
    label: "Contact",
  },
];

const NavLinks: FC<NavLinksProps> = ({ isSidbar,onClose }) => {
  const routers = NavRoutes;
  return (
    <>
      {routers.map((route) => (
        <NavItem
          isSidbar={isSidbar}
          label={route.label}
          href={route.href}
          key={route.href}
          onClose={onClose}
        />
      ))}
    </>
  );
};

export default NavLinks;
