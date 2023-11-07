import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import DrawerBoard from "./dashboard/Drawer_bashboard";
import HeaderIcon from "./dashboard/headerIcon";
import { Button, IconButton } from "@mui/material";

const AppWrapper = () => {
  return (
    <div className="h-screen grid grid-cols-12   bg:sm-red-100 bg-[#737373] bdred">
      <div className="lg:col-span-2 md:col-span-3 h-screen bg-[#737373]  bdred   ">
         <DrawerBoard></DrawerBoard> 
      </div>
      <div className="lg:col-span-10  md:col-span-9 h-screen bg-[#dedede] bdred ">
        {/* <div className="flex justify-end pr-5 h-16 place-content-center bg-white 	pt-5">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            className="border-2 border-red-400 color-black"
          >
            <HeaderIcon></HeaderIcon>
          </IconButton>
        </div>
        <div className="bg-[#dedede] ">
          <Outlet />
        </div> */}
      </div>
    </div>
  );
};

export default AppWrapper;
