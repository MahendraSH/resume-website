import { FC } from "react";
import { Separator } from "./ui/separator";
import { GraduationCapIcon, CalendarIcon, AwardIcon } from "lucide-react";

interface EducationProps {}

const Education: FC<EducationProps> = ({}) => {
  return (
    <div id="education" className=" pt-12 ">
      <div className="card w-full h-full glass-panel">
        <div className="card-body">
          <h2 className=" text-3xl font-medium "> Education </h2>
          <Separator />
          
          <div className="relative border-l border-primary/20 ml-4 md:ml-8 mt-6">
            <div className="relative pl-6 md:pl-8">
              {/* Timeline cap icon */}
              <span className="absolute -left-[17px] top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-secondary border-2 border-primary text-primary shadow-sm">
                <GraduationCapIcon className="h-4 w-4" />
              </span>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    B.Tech / B.E. in Computer Science and Engineering
                  </h3>
                  <p className="text-base font-semibold text-primary/80">
                    National Institute of Engineering (NIE)
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full w-fit">
                  <CalendarIcon className="h-3.5 w-3.5" />
                  <span>Graduation Year: 2024</span>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                <AwardIcon className="h-4 w-4 text-primary" />
                <span><strong>Grade:</strong> 7.3 / 10 CGPA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
