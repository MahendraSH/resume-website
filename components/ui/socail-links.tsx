import { FC } from "react";
import Link from "next/link";
import {
  GithubIcon,
  LinkedinIcon,
  LucideDownload,
  TwitterIcon,
} from "lucide-react";
import { Button } from "./button";
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
interface SocailLinksProps {}

const SocailLinks: FC<SocailLinksProps> = ({}) => {
  return (
    <>
      <Button size={"icon"} variant={"outline"}>
        <Link href={"https://github.com/MahendraSH/"}>
          <GitHubLogoIcon className="h-5 w-5  text-muted-foreground " />
        </Link>
      </Button>
      <Button size={"icon"} variant={"outline"}>
        <Link href={"https://www.linkedin.com/in/mahendra-s-h-14a74721a/"}>
          <LinkedInLogoIcon className="h-5 w-5  text-muted-foreground " />
        </Link>
      </Button>

      <Button size={"icon"} variant={"outline"}>
        <Link href={"https://github.com/MahendraSH/"}>
          <TwitterLogoIcon className=" h-5 w-5 text-muted-foreground" />
        </Link>
      </Button>
     
    </>
  );
};

export default SocailLinks;
