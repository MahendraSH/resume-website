import { FC } from "react";
import { Separator } from "./ui/separator";
interface StrengthsProps {}

const strengths = [
  " Logical thinking ",
  " Solving complex problems ",
  " Team player ",
  " Communication skills ",
];

const Strengths: FC<StrengthsProps> = ({}) => {
  return (
    <div id="strengths" className="min-w-full">
      <div className="card md:card-side  w-full h-full    shadow shadow-primary   ">
        <div className="card-body    ">
          <h2 className="  text-3xl font-medium  "> Strengths </h2>
          <Separator />
          <div className="  md:m-2 md:p-2  space-x-8  md:space-x-12 space-y-4 justify-center text-center text-primary-foreground  ">
            {strengths.map((strength) => (
              <kbd key={strength} className="kbd bg-primary ">
                {strength}
              </kbd>
            ))}
          </div>

          <div className="card-actions  md:mt-3 mt-1  "></div>
        </div>
      </div>
    </div>
  );
};

export default Strengths;
