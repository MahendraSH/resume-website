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
    text: "I",
  },
  {
    text: "am",
  },
  {
    text: "a",
  },
  {
    text: "Specialist",
    className: "text-blue-500 dark:text-blue-500 font-bold",
  },
  {
    text: "Programmer",
    className: "text-blue-500 dark:text-blue-500 font-bold",
  },
  {
    text: "building",
  },
  {
    text: "scalable",
  },
  {
    text: "full-stack",
  },
  {
    text: "web",
  },
  {
    text: "applications.",
  },
];

const Hero: FC<HeroProps> = ({}) => {
  return (
    <>
      <div className="hero min-h-screen bg-[url('/images.jpeg')] dark:bg-[url('/image.png')] pt-16">
        <div className="hero-overlay opacity-80 dark:opacity-40"></div>
        <div className="hero-content flex-col lg:flex-row m-auto">
          <div className="card lg:card-side w-full h-full shadow-md glass lg:p-10 p-4">
            <figure className="flex justify-center items-center">
              <div className="flex-1 rounded-2xl overflow-hidden max-w-[280px] lg:max-w-none">
                <div className="lg:w-80 md:w-80 sm:w-50 lg:pr-6 max-h-90">
                  <Image
                    src="https://github.com/MahendraSH.png"
                    className="rounded-2xl border-2 border-primary/20 shadow-lg"
                    width={300}
                    height={400}
                    alt="Mahendra S H"
                    priority
                  />
                </div>
              </div>
            </figure>
            <div className="card-body lg:w-[calc(100%-320px)] flex-1 flex flex-col justify-between p-4 lg:p-6">
              <div>
                <h2 className="md:text-5xl text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-tr from-slate-700 via-primary to-secondary-foreground dark:bg-gradient-to-tr dark:from-slate-300 dark:via-primary dark:to-secondary-foreground">
                  Mahendra S H
                </h2>

                <Separator className="my-3" />

                <div className="flex flex-col gap-2 text-start lg:min-w-[450px] min-w-full">
                  <TypewriterEffect
                    className="text-lg md:text-xl lg:text-xl font-normal text-left"
                    words={words}
                  />
                </div>

                <p className="text-sm text-muted-foreground mt-4 leading-relaxed text-left">
                  Experienced Specialist Programmer with over nearly 2 years in
                  developing and maintaining scalable full-stack applications
                  using React, Next.js, and Spring Boot. Proficient in designing
                  REST APIs and robust microservices architecture for modular
                  system design. Skilled in optimizing backend processes,
                  enhancing application efficiency and responsiveness. Expertise
                  in Agile development environments, collaborating with
                  cross-functional teams for timely delivery. Strong foundation
                  in Computer Science and Engineering (B.Tech). Demonstrated
                  ability to build intuitive dashboards, SaaS platforms, and
                  Enterprise Applications.
                </p>
              </div>

              <div className="mt-6 space-y-4">
                <Card className="m-0 border-primary/20 bg-secondary/35">
                  <CardHeader className="m-0 p-3">
                    <CardTitle className="text-base md:text-lg flex flex-wrap justify-center items-center gap-x-2">
                      <span className="text-green-500 font-bold">Open to New Opportunities</span>
                      <span className="text-muted-foreground">|</span>
                      <span>Specialist Programmer (ex-Infosys)</span>
                    </CardTitle>
                  </CardHeader>
                </Card>

                <div className="card-actions flex items-center justify-between pt-2">
                  <div className="flex gap-2">
                    <SocailLinks />
                  </div>
                  <Link
                    href={"Mahendra's Resume.pdf"}
                    download={"Mahendra's Resume.pdf"}
                  >
                    <Button size="sm" className="font-semibold">
                      Resume
                      <LucideDownload className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
