import React from "react";
import { Outlet } from "react-router-dom";
import DrawerBoard from "./dashboard/Drawer_bashboard";
import HeaderIcon from "./dashboard/headerIcon";

const AppWrapper = () => {
  return (
    <div className="h-screen grid grid-cols-12">
      <div className="col-span-2 h-screen bg-[#737373]">
        <DrawerBoard></DrawerBoard>
      </div>
      <div className="col-span-10 h-screen bg-[#dedede] ">
        <div className="flex justify-end pr-5 h-16 place-content-center bg-white 	pt-5	">
          <HeaderIcon></HeaderIcon>
        </div>
        <div className="bg-[#dedede] ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppWrapper;