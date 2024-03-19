import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Strengths from "@/components/strengths";
import { Card, CardContent } from "@/components/ui/card";
import { FC } from "react";

interface MainPageProps {}

const MainPage: FC<MainPageProps> = ({}) => {
  return (
    <>
      <main className="bggrad">
        <Hero />
        <Card className="bggrad">
          <CardContent className="  flex flex-col  m-auto">
            <Skills />
            <Strengths />
            <Projects />
          </CardContent>
        </Card>
      </main>
    </>
  );
};

export default MainPage;
