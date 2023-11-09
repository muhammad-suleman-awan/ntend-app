import { Avatar, Button, IconButton } from "@mui/material";
import React, { useState } from "react";
import pic from "../pic.jpg";
import MenuIcon from "@mui/icons-material/Menu";
import BodyDashBoard from "./Body_DashBoard";
import AvatarPic from "./Avatar";
import { useNavigate } from "react-router-dom";

const DrawerBoard = () => {
  return (
    <div className="  h-screen  flex flex-col  pb-2">
      <div className=" bg-[#98e5ff] pt-1">
        <div
          id="log"
          className="flex justify-between place-items-center	px-3 mt-3"
        >
          <div className=" ">
            <Avatar alt="Remy Sharp" src={pic} className=" " />
          </div>
          <div className="flex justify-center     ">
            <span
              className="text-[#4579ff] md:text-sm text-sm font-bold decoration-8	indent-px leading-8	"
              style={{ fontFamily: "cursive" }}
            >
              NTEND INFO
            </span>
          </div>
          <div className=" flex justify-end  ">
            <MenuIcon> </MenuIcon>
          </div>
        </div>
        <div className="  mb-5 ">
          <AvatarPic></AvatarPic>
          <h1 className="flex justify-center text-lg text-black font-medium">
            Jessica
          </h1>
          <h1 className="flex justify-center text-xs	">jessicaBauer@yahoo.com</h1>
        </div>
      </div>

      <div className="bg-[#35393f] h-screen">
        <BodyDashBoard> </BodyDashBoard>
      </div>
    </div>
  );
};

export default DrawerBoard;
