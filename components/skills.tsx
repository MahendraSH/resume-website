import { FC } from "react";
import { Separator } from "./ui/separator";

interface SkillsProps {}

const skillCategories = [
  {
    category: "Web & Fullstack Development",
    skills: ["Web Development", "Fullstack Development", "MERN Stack", "Software Development", "Software Engineering"]
  },
  {
    category: "Backend Technologies & Frameworks",
    skills: ["Java", "Spring Boot", "Microservices", "RESTful API", "Spring Batch", "Camunda BPM"]
  },
  {
    category: "Frontend Technologies",
    skills: ["JavaScript", "React.js", "Next.js", "Tailwind CSS"]
  },
  {
    category: "Databases",
    skills: ["PostgreSQL"]
  },
  {
    category: "Methodologies & Practices",
    skills: ["Agile Methodology", "Code Review"]
  }
];

const Skills: FC<SkillsProps> = ({}) => {
  return (
    <div id="skills" className=" pt-12 ">
      <div className="card w-full h-full shadow shadow-muted-foreground ">
        <div className="card-body">
          <h2 className=" text-3xl font-medium "> Tech Skills </h2>
          <Separator />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {skillCategories.map((cat) => (
              <div 
                key={cat.category} 
                className="p-4 rounded-xl border border-primary/10 bg-card/50 backdrop-blur-sm flex flex-col justify-start hover:border-primary/30 transition-all duration-300"
              >
                <h3 className="font-semibold text-base mb-3 text-primary">
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <kbd 
                      key={skill} 
                      className="kbd bg-secondary text-secondary-foreground text-xs py-1 px-2.5 h-auto font-sans"
                    >
                      {skill}
                    </kbd>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
