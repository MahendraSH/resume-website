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
        href="https://github.com/MahendraSH/"
        target="_blank"
        rel="noopener noreferrer"
        className="kbd bg-primary-foreground rounded-md p-1 h-7 flex items-center justify-center"
      >
        <GitHubLogoIcon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/mahendra-s-h-14a74721a/"
        target="_blank"
        rel="noopener noreferrer"
        className="kbd bg-primary-foreground rounded-md p-1 h-7 flex items-center justify-center"
      >
        <LinkedInLogoIcon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
      </Link>
      <Link
        href="https://www.upwork.com/freelancers/~YOUR_UPWORK_ID"
        target="_blank"
        rel="noopener noreferrer"
        className="kbd bg-primary-foreground rounded-md p-1 h-7 flex items-center justify-center"
        title="Upwork Profile"
      >
        <svg
          role="img"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-4.5 w-4.5 text-muted-foreground hover:text-primary transition-colors"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.543-2.548V3.56H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-.354c.511 1.365 1.251 2.946 2.222 4.486l-1.637 7.692h2.825l1.197-5.636c.99.637 2.115 1.009 3.39 1.009 3.037 0 5.51-2.435 5.51-5.51-.001-3.075-2.473-5.51-5.51-5.51z" />
        </svg>
      </Link>
      <Link
        href="https://github.com/MahendraSH/"
        target="_blank"
        rel="noopener noreferrer"
        className="kbd bg-primary-foreground rounded-md p-1 h-7 flex items-center justify-center"
      >
        <TwitterLogoIcon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
      </Link>
    </>
  );
};

export default SocailLinks;
