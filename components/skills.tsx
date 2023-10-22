import { FC } from "react";
import { Separator } from "./ui/separator";

interface SkillsProps {}

const skills = [
  "C/C++",
  "JavaScript",
  "React",
  "Nodejs/Express",
  "MongoDB",
  "java",
  "git & github",
  "SQL",
  "tailwindcss",
  "Nextjs",
];
const Skills: FC<SkillsProps> = ({}) => {
  return (
    <div id="skills" className=" pt-12 " >
      <div className="card md:card-side  w-full h-full glass  ">
        <div className="card-body    ">
          <h2 className="  text-3xl font-medium  "> Teck Skills</h2>
          <Separator />
          <div className="  md:m-2 md:p-2  space-x-8  md:space-x-12 space-y-4 justify-center text-center text-secondary-foreground  ">
            {skills.map((skill) => (
              <kbd key={skill} className="kbd bg-secondary">
                {skill}
              </kbd>
            ))}
          </div>

          <div className="card-actions  md:mt-3 mt-1  "></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
