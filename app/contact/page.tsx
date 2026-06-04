import { FC } from "react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";

interface ContactPageProps {}

const ContactPage: FC<ContactPageProps> = ({}) => {
  return (
    <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
      <div className="max-w-3xl w-full px-4 md:px-8">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-tr from-slate-700 via-primary to-secondary-foreground dark:bg-gradient-to-tr dark:from-slate-300 dark:via-primary dark:to-secondary-foreground">
            Get in Touch
          </h1>
          <p className="text-muted-foreground text-sm max-w-md mx-auto leading-relaxed">
            I am open to discussing new opportunities, collaboration ideas, or simply answering questions. Feel free to contact me using any of the channels below.
          </p>
        </div>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          {/* Email */}
          <a href="mailto:mahendrashongunti@gmail.com" className="group">
            <div className="glass-panel p-5 rounded-xl flex items-center gap-4 hover:bg-secondary/40 hover:scale-[1.02] duration-300">
              <div className="p-3.5 bg-primary/10 rounded-lg text-primary group-hover:bg-primary/20 transition-colors">
                <MailIcon className="h-6 w-6" />
              </div>
              <div className="text-left">
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold">Email</div>
                <div className="text-sm font-medium">mahendrashongunti@gmail.com</div>
              </div>
            </div>
          </a>

          {/* Phone */}
          <a href="tel:+917892041114" className="group">
            <div className="glass-panel p-5 rounded-xl flex items-center gap-4 hover:bg-secondary/40 hover:scale-[1.02] duration-300">
              <div className="p-3.5 bg-primary/10 rounded-lg text-primary group-hover:bg-primary/20 transition-colors">
                <PhoneIcon className="h-6 w-6" />
              </div>
              <div className="text-left">
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold">Phone</div>
                <div className="text-sm font-medium">+91 7892041114</div>
              </div>
            </div>
          </a>

          {/* LinkedIn */}
          <Link href="https://www.linkedin.com/in/mahendra-s-h-14a74721a/" target="_blank" className="group">
            <div className="glass-panel p-5 rounded-xl flex items-center gap-4 hover:bg-secondary/40 hover:scale-[1.02] duration-300">
              <div className="p-3.5 bg-primary/10 rounded-lg text-primary group-hover:bg-primary/20 transition-colors">
                <LinkedInLogoIcon className="h-6 w-6" />
              </div>
              <div className="text-left">
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold">LinkedIn</div>
                <div className="text-sm font-medium">mahendra-s-h-14a74721a</div>
              </div>
            </div>
          </Link>

          {/* GitHub */}
          <Link href="https://github.com/MahendraSH/" target="_blank" className="group">
            <div className="glass-panel p-5 rounded-xl flex items-center gap-4 hover:bg-secondary/40 hover:scale-[1.02] duration-300">
              <div className="p-3.5 bg-primary/10 rounded-lg text-primary group-hover:bg-primary/20 transition-colors">
                <GitHubLogoIcon className="h-6 w-6" />
              </div>
              <div className="text-left">
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold">GitHub</div>
                <div className="text-sm font-medium">github.com/MahendraSH</div>
              </div>
            </div>
          </Link>

          {/* Location */}
          <div className="glass-panel p-5 rounded-xl flex items-center gap-4 md:col-span-2">
            <div className="p-3.5 bg-primary/10 rounded-lg text-primary">
              <MapPinIcon className="h-6 w-6" />
            </div>
            <div className="text-left">
              <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold">Location</div>
              <div className="text-sm font-medium">Mysore, India</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
