import { FC } from "react";
import { Separator } from "./ui/separator";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { projects } from "@/lib/project-list";
import { Code2Icon, LinkIcon } from "lucide-react";


interface ProjectsProps {}

const Projects: FC<ProjectsProps> = ({}) => {
  return (
    <div id="projects">
      <div className="card md:card-side  w-full h-full glass   ">
        <div className="card-body    ">
          <h2 className="  text-3xl font-medium  "> Projects </h2>
          <Separator />

          <div className="grid gap-6">
            {projects.map(
              (project, index) =>
                index < 4 && (
                  <div
                    className="flex flex-col-reverse lg:grid lg:grid-cols-4 items-center pb-2 border-b last-of-type:border-b-0 last-of-type:pb-0 border-b-slate-800"
                    key={project.id}
                  >
                    <div className="flex flex-col gap-4 col-span-3 mt-4 lg:mt-0 lg:pr-8">
                      <div className="flex flex-col gap-1">
                        <h3 className=" text-xl">{project.name}</h3>
                        <p>{project.description}</p>
                      </div>
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
                      <div className="mt-2 lg:mt-0 flex justify-between">
                        <p className="text-slate-300">{project.date}</p>
                        <div className="flex gap-2 text-xl">
                          <Link href={project.sourceCode} target="_blank">
                            <Code2Icon />
                          </Link>
                          {project.liveUrl && (
                            <Link href={project.liveUrl} target="_blank">
                              <LinkIcon />
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                    <Link
                      href={project.liveUrl ?? project.sourceCode}
                      className="relative w-full aspect-video lg:border-2 border-slate-700 rounded-xl"
                    >
                      <Image
                        src={project.image}
                        alt={project.name}
                        className="block rounded-xl lg:p-1"
                        fill
                        sizes="100%"
                      />
                    </Link>
                  </div>
                )
            )}
            {projects.length > 4 && (
              <Button className="mx-auto py-2 w-fit md:w-fit px-16" asChild>
                <Link
                  href={`?${new URLSearchParams({
                    "show-projects":
                      4 >= projects.length ? "4" : projects.length.toString(),
                  })}`}
                  scroll={false}
                >
                  {4 >= projects.length ? "View Less" : "View More"}
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
