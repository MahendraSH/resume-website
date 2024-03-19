import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface LogoProps {}

const Logo: FC<LogoProps> = ({}) => {
  const sidebar = false;
  return (
    <Button
      variant={sidebar ? "default" : "shadow"}
      size={"lg"}
      className={cn(
        "   normal-case text-xl  shadow-none w-full justify-start px-0 mx-0",
      )}
    >
      <Link href={"/"} className=" flex justify-center items-center">
        <Image
          src={"/logo.png"}
          width={40}
          height={40}
          alt="logo"
          className="ml-2 hidden dark:block "
        />
        <Image
          src={"/logo-dark.png"}
          width={40}
          height={40}
          alt="logo"
          className="ml-2 dark:hidden  "
        />
        Mahendra S H
      </Link>
    </Button>
  );
};

export default Logo;
