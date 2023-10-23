import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Strengths from "@/components/strengths";
import { FC } from "react";

interface MainPageProps {}

const MainPage: FC<MainPageProps> = ({}) => {
  return (
    <>
      <main>
        <Hero />
        <div
          className="hero min-h-screen"
          // style={{
          //   backgroundImage:
          //     "url(images-dark.avif)",
          // }}
        >
          <div className="hero-overlay bg-opacity-60 dark:bg-opacity-90"></div>
          <div className="hero-content flex-col  m-auto">
            <Skills />
            <Strengths />
            <Projects />
          </div>
        </div>
      </main>
    </>
  );
};

export default MainPage;
