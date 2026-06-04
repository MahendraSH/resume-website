import { FC } from "react";
import { Separator } from "./ui/separator";
import { BriefcaseIcon, CalendarIcon } from "lucide-react";

interface ExperienceProps {}

const experiences = [
  {
    role: "Specialist Programmer",
    company: "Infosys",
    duration: "Jul 2024 – Present",
    bullets: [
      "Developed and maintained scalable full-stack applications using Spring Boot and React, enhancing application efficiency and user experience.",
      "Designed and implemented REST APIs, contributing to a robust microservices architecture for modular system design.",
      "Optimized backend processes to significantly improve application performance and responsiveness.",
      "Collaborated effectively with cross-functional teams in Agile environments to ensure timely delivery of production-ready features.",
      "Participated in code reviews, promoting adherence to clean coding standards and best practices across the development team."
    ]
  },
  {
    role: "Intern",
    company: "Merav Infotech",
    duration: "121 Days (Approx. 4 Months)",
    bullets: [
      "Gained hands-on experience developing front-end features and components using React.js and modern JavaScript methodologies."
    ]
  }
];

const Experience: FC<ExperienceProps> = ({}) => {
  return (
    <div id="experience" className=" pt-12 ">
      <div className="card w-full h-full shadow shadow-muted-foreground ">
        <div className="card-body">
          <h2 className=" text-3xl font-medium "> Work Experience </h2>
          <Separator />
          
          <div className="relative border-l border-primary/20 ml-4 md:ml-8 mt-6 space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-6 md:pl-8">
                {/* Timeline node icon */}
                <span className="absolute -left-[17px] top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-secondary border-2 border-primary text-primary shadow-sm">
                  <BriefcaseIcon className="h-4 w-4" />
                </span>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-base font-semibold text-primary/80">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full w-fit">
                    <CalendarIcon className="h-3.5 w-3.5" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {exp.bullets.length > 0 && (
                  <ul className="list-disc pl-5 mt-4 space-y-2 text-sm text-muted-foreground">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
