"use client";

import { FC } from "react";
import { ModeToggle } from "./mode-toggle";
import NavLinks from "./nav-links";
import { useScrollTop } from "@/hooks/use-sroll-top";
import { cn } from "@/lib/utils";
import Logo from "./ui/logo";
import Sidebar from "./sidbar";
interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const scrolled = useScrollTop();

  return (
    <>
      <div
        className={cn(
          "navbar z-40 fixed top-0    text-sm m-0 p-0 pr-4 bg-background",
          scrolled && " border-b shadow-md shadow-muted-foreground",
        )}
      >
        <div className="flex-1">
          <Logo />
        </div>
        <div className="hidden md:flex">
          <div className="flex flex-1 px-2  space-x-4 lg:space-x-5   ">
            <NavLinks isSidbar={false} />
            <ModeToggle />
          </div>
        </div>
        <div className="flex  md:hidden ">
          <div className=" flex   space-x-4 ">
            <Sidebar />
            <ModeToggle />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
