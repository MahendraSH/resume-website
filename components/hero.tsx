import Image from "next/image";
import { FC } from "react";
import { Separator } from "@/components/ui/separator";
import SocailLinks from "./ui/socail-links";
import { Button } from "./ui/button";
import Link from "next/link";
import { LucideDownload } from "lucide-react";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <>
      <div className="hero min-h-screen   bg-[url('/images.jpeg')] dark:bg-[url('/image.png')]">
        <div className="hero-overlay  opacity-80  dark:opacity-40 "></div>
        <div className="hero-content flex-col lg:flex-row m-auto">
          <div className="card md:card-side  w-full h-full  shadow-md  shadow-primary    ">
            <figure>
              <div className=" flex-1  rounded-2xl ">
                <div className=" md:w-80 sm:w-50  p-10 md:pr-12   max-h-90 ">
                  <Image
                    src="https://github.com/MahendraSH.png"
                    className=" rounded  "
                    width={3000}
                    height={4000}
                    alt="avatar "
                  />
                </div>
              </div>
            </figure>
            <div className="card-body  md:w-[calc(100%-320px)]   flex-1  ">
              <h2 className=" md:text-5xl text-3xl font-bold bg-clip-text text-transparent  bg-gradient-to-tr from-slate-700  via-primary to-secondary-foreground dark:bg-gradient-to-tr dark:from-slate-300  dark:via-primary dark:to-secondary-foreground  ">
                Mahendra S H
              </h2>

              <Separator />

              <div className="flex flex-col gap-4 lg:pr-3 lg:mr-4 text-start ">
                <p className="   md:text-lg lg:text-xl  ">
                  "Computer science student and Passionate about creating
                  responsive and user-friendly web applications with secure
                  backend that solve real-world problems. Strong problem-solving
                  skills and ability to work collaboratively in a team
                  environment. and passionate about learning new things”
                </p>
              </div>
              <div className="card-actions  md:mt-3 mt-1  ">
                <SocailLinks />
                <Link
                  className=" ml-auto"
                  href={"Mahendra's Resume.pdf"}
                  download={"Mahendra's Resume.pdf"}
                >
                  <Button>
                    Resume
                    <LucideDownload className="h-4 w-4  ml-2 " />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
