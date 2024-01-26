import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import {
  ArrowBigRight,
  LocateIcon,
  MailIcon,
  MapIcon,
  MapPinIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface ContactPageProps {}

const ContactPage: FC<ContactPageProps> = ({}) => {
  return (
    <div>
      <div className="px-5 grid gap-8 grid-cols-1 md:grid-cols-2 py-24 mx-auto rounded-lg">
        <div className="flex flex-col justify-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Lets talk about everything!
            </h2>
          </div>
          <div className="mt-12 text-center">
            <Image
              src="/meeting.png"
              alt="Contact"
              width={400}
              height={400}
              className="dark:hidden"
            />
            <Image
              src="/meeting-dark.png"
              alt="Contact"
              width={400}
              height={400}
              className=" hidden dark:block"
            />
          </div>
        </div>
        <div>
          <div className=" kbd bg-secondary-foreground text-secondary">
            <a href="mailto:mahendrashongunti@gmail.com">
              <MailIcon className=" h-8 w-8 mr-2" />
            </a>
            <span> mahendrashongunti@gmail.com</span>
          </div>
          <Link href="https://github.com/MahendraSH/" className=" block">
            <div className=" mt-6 kbd bg-secondary-foreground text-secondary ">
              <GitHubLogoIcon className=" h-8 w-8 mr-2" />

              <span> https://github.com/MahendraSH/</span>
            </div>
          </Link>
          <Link href={"https://www.linkedin.com/in/mahendra-s-h-14a74721a/"}>
            <div className=" mt-6 kbd bg-secondary-foreground text-secondary">
              <LinkedInLogoIcon className=" h-8 w-8 mr-2" />

              <span> https://www.linkedin.com/in/mahendra-s-h-14a74721a/</span>
            </div>
          </Link>
          <div className=" mt-6 kbd bg-secondary-foreground text-secondary">
            <MapPinIcon className=" h-8 w-8 mr-2" />

            <span> Mysore , India </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
