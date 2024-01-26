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
import { Code2Icon, LinkIcon } from "lucide-react";
import { Separator } from "./ui/separator";

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = ({}) => {
  return (
    <div id="projects" className=" mt-8 lg:max-w-full sm:max-w-screen-sm">
      <div className="  w-full h-full   shadow  rounded-md  shadow-muted-foreground ">
        <div className=" m-5   flex flex-col gap-2    ">
          <h2 className="  text-3xl font-medium  mt-5 "> Projects </h2>
          <Separator />

          {projects.map((project, index) => (
            <Card
              className={cn(
                " lg:flex  justify-center items-center   lg:gap-x-10  sm:gap-2 ",
                index % 2 && "lg:flex-row-reverse"
              )}
              key={project.name}
            >
              <div className=" md:hidden   sm:flex justify-center items-center ">
                <Carousel
                  className={cn(
                    "  rounded-md   ",
                    project.imagedark && " block dark:hidden"
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
                    {project.image.map((img) => (
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
              </div>
              <div className="   hidden  aspect-video lg:w-5/12   md:flex justify-center items-center ">
                <Carousel
                  className={cn(
                    "  rounded-md   ",
                    project.imagedark && " flex dark:hidden "
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
                    {project.image.map((img) => (
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
                      project.imagedark?.length === 0 && " hidden dark:flex"
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
              </div>

              <div className=" lg:w-7/12">
                <CardHeader>
                  <CardTitle>{project.name}</CardTitle>
                </CardHeader>
                <CardContent className=" flex flex-col space-y-7">
                  <p>{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.labels.map((label) => (
                      <kbd
                        className="kbd bg-secondary text-foreground"
                        key={label}
                      >
                        {label}
                      </kbd>
                    ))}
                  </div>
                  <code className=" bg-muted text-muted-foreground p-2  rounded">
                    UserName : {project.userName} & Password :{project.password}
                  </code>
                </CardContent>
                <CardFooter
                  className={cn(
                    "   mt-2 lg:mt-0 flex justify-between",
                    index % 2 === 0 && " flex-row-reverse "
                  )}
                >
                  <p className=" dark:text-slate-500 w-3/6  text-slate-600 ">
                    {project.date}
                  </p>
                  <div className={cn("flex gap-2 text-xl w-3/6")}>
                    <Link href={project.sourceCode} target="_blank">
                      <Code2Icon />
                    </Link>
                    {project.liveUrl && (
                      <Link href={project.liveUrl} target="_blank">
                        <LinkIcon />
                      </Link>
                    )}
                  </div>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
