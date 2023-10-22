import { FC } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { XIcon } from "lucide-react";

interface NavLinksProps {
  isSidbar: boolean;
}

const NavRoutes = [
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/contact",
    label: "Contact",
  },
  {
    href: "/#skills",
    label: "Skills",
  },
  {
    href: "/#strengths",
    label: "Strengths",
  },
  {
    href: "/#projects",
    label: "Projects",
  },
  {
    href: "/blogs",
    label: "Blogs",
  },
];

const NavLinks: FC<NavLinksProps> = ({ isSidbar }) => {
  const routers = NavRoutes;
  return (
    <>
      {isSidbar && (
        <Button size={"icon"} variant={"outline"}>
          <label htmlFor="my-drawer-4" className="drawer-button ">
            <XIcon className=" h-6 w-6    text-muted-foreground  " />
          </label>
        </Button>
      )}
      {routers.map((route) => (
        <Button variant={"ghost"} key={route.href}>
          <Link href={route.href}> {route.label} </Link>
        </Button>
      ))}
    </>
  );
};

export default NavLinks;
