"use client";

import { FC, useState } from "react";

import NavLinks from "./nav-links";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { Button } from "./ui/button";
import { SidebarIcon } from "lucide-react";
import Logo from "./ui/logo";
interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Sheet open={isOpen} onOpenChange={() => setIsOpen(false)}>
        <Button variant={"ghost"} size={"icon"} onClick={() => setIsOpen(true)}>
          <SidebarIcon className=" h-6 w-6 my-auto  " />
        </Button>
        <SheetContent className=" w-[90%]" side={"left"}>
          <SheetHeader className="w-full">
            <SheetTitle>
              <Logo />
            </SheetTitle>
            <div className="flex  justify-start flex-col gap-y-2  w-full ">
              <NavLinks isSidbar={true} onClose={() => setIsOpen(false)} />
            </div>
          </SheetHeader>  
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Sidebar;
