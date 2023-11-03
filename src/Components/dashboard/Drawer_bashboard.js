import { Avatar, Button, IconButton } from "@mui/material";
import React, { useState } from "react";
import pic from "../pic.jpg";
import MenuIcon from "@mui/icons-material/Menu";
import BodyDashBoard from "./Body_DashBoard";
import AvatarPic from "./Avatar";
import { useNavigate } from "react-router-dom";

const DrawerBoard = () => {
  return (
    <div className="  h-screen  flex flex-col   pb-2">
      <div className=" bg-[#67e8f9] p-1">
        <div id="log" className="flex  ">
          <div className="">
            <Avatar alt="Remy Sharp" src={pic} className=" " />
          </div>
          <div className="flex ">
            <span
              className="text-blue-600 xl:text-2xl text-lg font-bold pl-5"
              style={{ fontFamily: "cursive" }}
            >
              NTEND INFO
            </span>
          </div>
          <div className=" flex justify-end">
            <IconButton size="large" edge="start" color="inherit">
              <MenuIcon> </MenuIcon>
            </IconButton>
          </div>
        </div>
        <div className=" ">
          <AvatarPic></AvatarPic>
          <h1 className="flex justify-center text-lg font-bold	">{"Suleman"}</h1>
          <h1 className="flex justify-center text-xs	">
            mmsulemanawan@gmail.com
          </h1>
        </div>
      </div>

      <div className="bg-[#737373] h-screen">
        <BodyDashBoard> </BodyDashBoard>
      </div>
    </div>
  );
};

export default DrawerBoard;
