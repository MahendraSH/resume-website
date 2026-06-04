"use client";

import { FC } from "react";
import { projects } from "@/lib/project-list";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Code2Icon, LinkIcon, TerminalIcon } from "lucide-react";
import { Separator } from "./ui/separator";

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = ({}) => {
  return (
    <div id="projects" className=" mt-8 lg:max-w-full sm:max-w-screen-sm">
      <div className="  w-full h-full  glass-panel rounded-md ">
        <div className=" m-5   flex flex-col gap-2    ">
          <h2 className="  text-3xl font-medium  mt-5 "> Projects </h2>
          <Separator />

          {projects.map((project, index) => {
            const hasImages = project.image && project.image.length > 0;
            return (
              <Card
                className={cn(
                  " lg:flex  justify-center items-center   lg:gap-x-10  sm:gap-2 p-4 lg:p-6 ",
                  index % 2 && "lg:flex-row-reverse",
                )}
                key={project.name}
              >
                {/* Mobile View Image/Placeholder */}
                <div className=" md:hidden   sm:flex justify-center items-center w-full aspect-video mb-4 ">
                  {hasImages ? (
                    <>
                      <Carousel
                        className={cn(
                          "  rounded-md   ",
                          project.imagedark && " block dark:hidden",
                        )}
                        opts={{
                          loop: true,
                        }}
                        plugins={[
                          Autoplay({
                            delay: 3500,
                          }),
                        ]}
                      >
                        <CarouselContent>
                          {project.image!.map((img) => (
                            <CarouselItem
                              className="   m-4  w-full   flex justify-center items-center  rounded-md"
                              key={img}
                            >
                              <Link
                                target="_blank"
                                href={project.liveUrl ?? project.sourceCode}
                                className="relative w-full  aspect-video lg:border-2 border-slate-700 rounded-xl"
                              >
                                <Image
                                  src={img}
                                  alt={project.name}
                                  fill
                                  sizes="100%"
                                  className="       border-2 border-primary   rounded"
                                />
                              </Link>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                      </Carousel>
                      {project.imagedark && (
                        <Carousel
                          className={cn("  rounded-md hidden dark:flex ")}
                          opts={{
                            align: "center",
                            loop: true,
                          }}
                          plugins={[
                            Autoplay({
                              delay: 3500,
                            }),
                          ]}
                        >
                          <CarouselContent>
                            {project.imagedark.map((img) => (
                              <CarouselItem
                                className="     m-4   w-full   flex justify-center items-center  rounded-md"
                                key={img}
                              >
                                <Link
                                  target="_blank"
                                  href={project.liveUrl ?? project.sourceCode}
                                  className=" relative w-full   aspect-video lg:border-2 border-slate-700 rounded-xl"
                                >
                                  <Image
                                    src={img}
                                    alt={project.name}
                                    fill
                                    sizes="100%"
                                    className="       border-2  border-primary rounded"
                                  />
                                </Link>
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                        </Carousel>
                      )}
                    </>
                  ) : (
                    <div className="w-full h-full rounded-xl bg-gradient-to-br from-slate-900 via-purple-900 to-slate-950 flex flex-col items-center justify-center border-2 border-primary/30 p-6 text-center text-white">
                      <TerminalIcon className="w-12 h-12 mb-2 text-primary" />
                      <div className="font-bold text-lg">{project.name}</div>
                      <div className="text-xs text-slate-400 mt-1">
                        Full-Stack Application
                      </div>
                    </div>
                  )}
                </div>

                {/* Desktop View Image/Placeholder */}
                <div className="   hidden  aspect-video lg:w-5/12   md:flex justify-center items-center ">
                  {hasImages ? (
                    <>
                      <Carousel
                        className={cn(
                          "  rounded-md   ",
                          project.imagedark && " flex dark:hidden ",
                        )}
                        opts={{
                          loop: true,
                        }}
                        plugins={[
                          Autoplay({
                            delay: 3500,
                          }),
                        ]}
                      >
                        <CarouselContent>
                          {project.image!.map((img) => (
                            <CarouselItem
                              className="  aspect-video   m-4  p-4   flex justify-center items-center  rounded-md"
                              key={img}
                            >
                              <Image
                                src={img}
                                alt={project.name}
                                width={500}
                                height={500}
                                className=" w-full h-full  aspect-video   p-2 m-1 border-2 border-primary   rounded"
                              />
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                      </Carousel>
                      {project.imagedark && (
                        <Carousel
                          className={cn(
                            "  rounded-md  hidden dark:flex",
                            project.imagedark?.length === 0 &&
                              " hidden dark:flex",
                          )}
                          opts={{
                            align: "center",
                            loop: true,
                          }}
                          plugins={[
                            Autoplay({
                              delay: 3500,
                            }),
                          ]}
                        >
                          <CarouselContent>
                            {project.imagedark.map((img) => (
                              <CarouselItem
                                className="  aspect-video   m-4  p-4   flex justify-center items-center  rounded-md"
                                key={img}
                              >
                                <Image
                                  src={img}
                                  alt={project.name}
                                  width={500}
                                  height={500}
                                  className=" w-full h-full aspect-video   p-1 m-1  border-2  border-primary rounded"
                                />
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                        </Carousel>
                      )}
                    </>
                  ) : (
                    <div className="w-full h-[220px] rounded-xl bg-gradient-to-br from-slate-900 via-purple-900 to-slate-950 flex flex-col items-center justify-center border-2 border-primary/30 p-6 text-center text-white">
                      <TerminalIcon className="w-12 h-12 mb-2 text-primary" />
                      <div className="font-bold text-lg">{project.name}</div>
                      <div className="text-xs text-slate-400 mt-1">
                        Full-Stack Application
                      </div>
                    </div>
                  )}
                </div>

                <div className=" lg:w-7/12 flex flex-col justify-between">
                  <div>
                    <CardHeader className="p-0 mb-3">
                      <CardTitle className="text-2xl">{project.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 flex flex-col space-y-4">
                      <p className="text-sm text-muted-foreground">
                        {project.description}
                      </p>

                      {project.bullets && project.bullets.length > 0 && (
                        <ul className="list-disc pl-5 space-y-1 text-xs text-muted-foreground/90">
                          {project.bullets.map((bullet, i) => (
                            <li key={i}>{bullet}</li>
                          ))}
                        </ul>
                      )}

                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.labels.map((label) => (
                          <kbd
                            className="kbd bg-secondary text-foreground text-[10px]"
                            key={label}
                          >
                            {label}
                          </kbd>
                        ))}
                      </div>

                      {project.userName && project.password && (
                        <div className="pt-2">
                          <code className=" bg-muted text-muted-foreground p-2 rounded text-xs block w-fit">
                            UserName : {project.userName} & Password :{" "}
                            {project.password}
                          </code>
                        </div>
                      )}
                    </CardContent>
                  </div>
                  <CardFooter
                    className={cn(
                      "p-0 mt-6 flex justify-between items-center",
                      index % 2 === 0 && " flex-row-reverse ",
                    )}
                  >
                    <div className={cn("flex gap-4 text-xl")}>
                      <Link
                        href={project.sourceCode}
                        target="_blank"
                        className="hover:text-primary transition-colors"
                      >
                        <Code2Icon className="w-5 h-5" />
                      </Link>
                      {project.liveUrl && (
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          className="hover:text-primary transition-colors"
                        >
                          <LinkIcon className="w-5 h-5" />
                        </Link>
                      )}
                    </div>
                  </CardFooter>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
