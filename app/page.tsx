import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Education from "@/components/education";
import { Card, CardContent } from "@/components/ui/card";
import { FC } from "react";

interface MainPageProps {}

const MainPage: FC<MainPageProps> = ({}) => {
  return (
    <>
      <main className="bggrad">
        <Hero />
        <Card className="bggrad border-none rounded-none shadow-none">
          <CardContent className="flex flex-col m-auto max-w-6xl w-full px-4 md:px-8">
            <Skills />
            <Experience />
            <Education />
            <Projects />
          </CardContent>
        </Card>
      </main>
    </>
  );
};

export default MainPage;
