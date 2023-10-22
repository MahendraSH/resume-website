import { FC } from "react";
import Link from "next/link";
import {
  GithubIcon,
  LinkedinIcon,
  LucideDownload,
  TwitterIcon,
} from "lucide-react";
import { Button } from "./button";
interface SocailLinksProps {}

const SocailLinks: FC<SocailLinksProps> = ({}) => {
  return (
    <>
      <Button size={"icon"} variant={"outline"}>
        <Link href={"https://github.com/MahendraSH/"}>
          <GithubIcon className="h-5 w-5  text-muted-foreground " />
        </Link>
      </Button>
      <Button size={"icon"} variant={"outline"}>
        <Link href={"https://www.linkedin.com/in/mahendra-s-h-14a74721a/"}>
          <LinkedinIcon className="h-5 w-5  text-muted-foreground " />
        </Link>
      </Button>

      <Button size={"icon"} variant={"outline"}>
        <Link href={"https://github.com/MahendraSH/"}>
          <TwitterIcon className=" h-5 w-5 text-muted-foreground" />
        </Link>
      </Button>
     
    </>
  );
};

export default SocailLinks;
