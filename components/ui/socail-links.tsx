import { FC } from "react";
import Link from "next/link";
import {
  GithubIcon,
  LinkedinIcon,
  LucideDownload,
  TwitterIcon,
} from "lucide-react";
import { Button } from "./button";
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
        className="kdb bg-background rounded-md p-1 "
      >
        <GitHubLogoIcon className="h-7 w-7  text-muted-foreground " />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/mahendra-s-h-14a74721a/"}
        className="kdb bg-background rounded-md p-1 "
      >
        <LinkedInLogoIcon className="h-7 w-7  text-muted-foreground " />
      </Link>

      <Link
        href={"https://github.com/MahendraSH/"}
        className="kdb bg-background rounded-md p-1 "
      >
        <TwitterLogoIcon className=" h-7 w-7 text-muted-foreground" />
      </Link>
    </>
  );
};

export default SocailLinks;
