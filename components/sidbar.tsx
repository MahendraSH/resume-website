import { FC } from "react";

import NavLinks from "./nav-links";
interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  return (
    <>
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">{/* Page content here */}</div>
        <div className="drawer-side z-50">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu p-4 w-72 min-h-full  bg-zinc-300 dark:bg-zinc-900 ">
            <NavLinks isSidbar={true} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
