import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface LogoProps {}

const Logo: FC<LogoProps> = ({}) => {
  return (
    <>
      <Link href={"/"} className="btn btn-ghost normal-case text-xl">
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
    </>
  );
};

export default Logo;
