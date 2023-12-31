import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import DrawerBoard from "./dashboard/Drawer_bashboard";
import HeaderIcon from "./dashboard/headerIcon";
import { Button, IconButton } from "@mui/material";
import BodyDashBoard from "./dashboard/Body_DashBoard";

const AppWrapper = () => {
  return (
    <div className="h-screen grid grid-cols-12   bg-[#535865]    ">
      <div className="2xl:col-span-2 xl:col-span-3 lg:col-span-3 md:col-span-4 hidden md:block h-screen ">
        <DrawerBoard></DrawerBoard>
      </div>
      <div className="2xl:col-span-10 xl:col-span-9  lg:col-span-9  md:col-span-8 h-screen   overflow-y-auto	 col-span-12 bg-[#dedede]  flex flex-col place-content-between md:place-content-start	">
        <div className="flex justify-end   pr-5 h-16 place-content-center bg-white 	pt-5   hidden md:block ">
          <HeaderIcon></HeaderIcon>
        </div>
        <div className="bg-white md:bg-[#dedede] ">
          <Outlet />
        </div>
        <div className=" stickyStyle md:hidden block    ">
          <BodyDashBoard></BodyDashBoard>
        </div>
      </div>
    </div>
  );
};

export default AppWrapper;
