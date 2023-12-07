"use client";

import { FC } from "react";
import { ModeToggle } from "./mode-toggle";
import NavLinks from "./nav-links";
import { LucideMenu } from "lucide-react";
import { useScrollTop } from "@/hooks/use-sroll-top";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Logo from "./ui/logo";
interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const scrolled = useScrollTop();

  return (
    <>
      <div
        className={cn(
          "navbar z-40 fixed top-0    text-sm m-0 p-0 pr-4   bg-background   ",
          scrolled &&
            " border-b shadow w shadow-slate-800  dark:shadow-gray-300"
        )}
      >
        <div className="flex-1">
          <Logo />
        </div>
        <div className="hidden md:flex">
          <div className="menu menu-horizontal px-2  space-x-4 lg:space-x-5   ">
            <NavLinks isSidbar={false} />
            <ModeToggle />
          </div>
        </div>
        <div className="flex  md:hidden ">
          <div className="menu menu-horizontal px-1 gap-x-2 ">
            <Button size={"icon"} variant={"outline"}>
              <label htmlFor="my-drawer-4" className="drawer-button ">
                <LucideMenu className="h-6 w-6   mx-2 " />
              </label>
            </Button>

            <ModeToggle />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
