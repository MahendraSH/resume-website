import { FC } from "react";
import SocailLinks from "./ui/socail-links";
import Logo from "./ui/logo";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <>
      <footer className="footer items-center  pb-6 bg-inherit  pt-3  ">
        <aside className="items-center grid-flow-col">
          <Logo />
          <p hidden>Copyright © 2023 Mahendra </p>
        </aside>
        <nav className="grid-flow-col  md:place-self-center md:justify-self-end mx-10 ">
          <SocailLinks />
        </nav>
      </footer>
    </>
  );
};

export default Footer;
