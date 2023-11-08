import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import DrawerBoard from "./dashboard/Drawer_bashboard";
import HeaderIcon from "./dashboard/headerIcon";
import { Button, IconButton } from "@mui/material";
import BodyDashBoard from "./dashboard/Body_DashBoard";

const AppWrapper = () => {
  return (
    <div className="h-screen grid grid-cols-12   bg-[#737373]  ">
      <div className="lg:col-span-2 md:col-span-3 hidden md:block h-screen bg-[#737373] ">
        <DrawerBoard></DrawerBoard>
      </div>
      <div className="lg:col-span-10  md:col-span-9 h-screen col-span-12 bg-[#dedede]  flex flex-col place-content-between md:place-content-start	">
        <div className="flex justify-end pr-5 h-16 place-content-center bg-white 	pt-5 hidden md:block">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            className="border-2 border-red-400 color-black"
          >
            <HeaderIcon></HeaderIcon>
          </IconButton>
        </div>
        <div className="bg-white md:bg-[#dedede] ">
          <Outlet />
        </div>
        <div className=" stickyStyle md:hidden block      ">
          <BodyDashBoard></BodyDashBoard>
        </div>
      </div>
    </div>
  );
};

export default AppWrapper;
