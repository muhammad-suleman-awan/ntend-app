import { Avatar, Button, IconButton } from "@mui/material";
import React, { useState } from "react";
import pic from "../pic.jpg";
import pic2 from "../pic2.jpg";
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
          className="flex justify-between place-items-center	px-3 mt-3 "
        >
          <div className="flex  md:gap-2 lg:gap-3  ">
            <Avatar alt="Remy Sharp" src={pic2} className="  " />

            <span className="text-[#4579FF] md:text-base lg:text-2xl xl:text-3xl		 font-normal	decoration-8 leading-9	 place-self-center ft">
              NTEND INFO
            </span>
          </div>
          <div className=" flex justify-end  ">
            <MenuIcon> </MenuIcon>
          </div>
        </div>
        <div className="  mb-5  ">
          <AvatarPic></AvatarPic>
          <h1 className="flex justify-center text-3xl	text-black font-normal leading-9	">
            Jessica
          </h1>
          <h1 className="flex justify-center text-base	 font-normal	leading-5	">
            jessicaBauer@yahoo.com
          </h1>
        </div>
      </div>

      <div className="bg-[#535865] h-screen">
        <BodyDashBoard> </BodyDashBoard>
      </div>
    </div>
  );
};

export default DrawerBoard;
