import { FC } from "react";
import Link from "next/link";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
interface SocailLinksProps {}

const SocailLinks: FC<SocailLinksProps> = ({}) => {
  return (
    <>
      <Link
        href={"https://github.com/MahendraSH/"}
        className="kdb bg-background rounded-md p-1 h-7 "
      >
        <GitHubLogoIcon className="h-5 w-5  text-muted-foreground " />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/mahendra-s-h-14a74721a/"}
        className="kdb bg-background rounded-md p-1  h-7"
      >
        <LinkedInLogoIcon className="h-5 w-5  text-muted-foreground " />
      </Link>

      <Link
        href={"https://github.com/MahendraSH/"}
        className="kdb bg-background rounded-md p-1 h-7 "
      >
        <TwitterLogoIcon className=" h-5 w-5 text-muted-foreground" />
      </Link>
    </>
  );
};

export default SocailLinks;
