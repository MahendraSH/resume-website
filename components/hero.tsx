import Image from "next/image";
import { FC } from "react";
import { Separator } from "@/components/ui/separator";
import SocailLinks from "./ui/socail-links";
import { Button } from "./ui/button";
import Link from "next/link";
import { LucideDownload, MoveRight } from "lucide-react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
interface HeroProps {}
const words = [
  {
    text: "'",
    className: "text-blue-500 dark:text-blue-500",
  },
  {
    text: "Computer",
  },
  {
    text: "science",
  },
  {
    text: "student",
  },
  {
    text: "and",
  },
  {
    text: "passionate",
  },
  {
    text: "about",
  },
  {
    text: "creating",
  },
  {
    text: "responsive",
  },
  {
    text: "and",
  },
  {
    text: "user-friendly",
  },
  {
    text: "web",
  },
  {
    text: "applications",
  },
  {
    text: "with",
  },
  {
    text: "secure",
  },
  {
    text: "backend",
  },
  {
    text: "that",
  },
  {
    text: "solve",
  },
  {
    text: "real-world",
  },
  {
    text: "problems.",
  },
  {
    text: "Strong",
  },
  {
    text: "problem-solving",
  },
  {
    text: "skills",
  },
  {
    text: "and",
  },
  {
    text: "ability",
  },
  {
    text: "to",
  },
  {
    text: "work",
  },
  {
    text: "collaboratively",
  },
  {
    text: "in",
  },
  {
    text: "a",
  },
  {
    text: "team",
  },
  {
    text: "environment.",
  },
  {
    text: "And",
  },
  {
    text: "passionate",
  },
  {
    text: "about",
  },
  {
    text: "learning",
  },
  {
    text: "new",
  },
  {
    text: "things.",
  },
  {
    text: "'",
    className: "text-blue-500 dark:text-blue-500",
  },
];

const Hero: FC<HeroProps> = ({}) => {
  return (
    <>
      <div className="hero min-h-screen   bg-[url('/images.jpeg')] dark:bg-[url('/image.png')] ">
        <div className="hero-overlay  opacity-80  dark:opacity-40  "></div>
        <div className="hero-content flex-col lg:flex-row m-auto ">
          <div className="card lg:card-side  w-full h-full  shadow-md  shadow-muted-foregroundy glass  lg:p-10 p-0      ">
            <figure>
              <div className=" flex-1  rounded-2xl ">
                <div className=" lg:w-96 md:w-96  sm:w-50  lg:pr-12   max-h-90 ">
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
            <div className="card-body  lg:w-[calc(100%-320px)]   flex-1  ">
              <h2 className=" md:text-5xl text-3xl font-bold bg-clip-text text-transparent  bg-gradient-to-tr from-slate-700  via-primary to-secondary-foreground dark:bg-gradient-to-tr dark:from-slate-300  dark:via-primary dark:to-secondary-foreground  ">
                Mahendra S H
              </h2>

              <Separator />

              <div className="flex flex-col gap-4 lg:pr-3 lg:mr-4 text-start lg:min-w-[450px]  min-w-full min-h-[200px] ">
                <TypewriterEffect
                  className="text-lg md:text-xl lg:text-xl font-normal"
                  words={words}
                />
              </div>
              <Card className=" m-0 ">
                <CardHeader className="m-0 p-2">
                  <CardTitle className="text-xl flex justify-center items-center gap-x-3">
                    <span className="md:flex justify-center items-center gap-x-3 hidden">
                      {" "}
                      I am currently working as{" "}
                      <MoveRight className="w-5 h-5" />{" "}
                    </span>
                    React Intern at Merav Infotech
                  </CardTitle>
                </CardHeader>
              </Card>
              <div className="card-actions  md:mt-3 pt-4  ">
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
