import { Avatar, Button, IconButton } from "@mui/material";
import React from "react";
import pic from "../pic.jpg";
import MenuIcon from "@mui/icons-material/Menu";
import BodyDashBoard from "./Body_DashBoard";
import AvatarPic from "./Avatar";
import { useNavigate } from "react-router-dom";

const DrawerBoard = () => {
  const profile = useNavigate();
  return (
    <div>
      <div>
        <div className="pt-5 bg-[#67e8f9] py-8">
          <div id="log" className="flex justify-center gap-5">
            <Avatar alt="Remy Sharp" src={pic} />
            <span
              className="text-blue-600 text-2xl font-bold pb-5"
              style={{ fontFamily: "cursive" }}
            >
              NTEND INFO
            </span>
            <IconButton size="large" edge="start" color="inherit"
            onClick={()=>profile("/dashboard/profile")}
            >
              <MenuIcon >  </MenuIcon>
            </IconButton>
          </div>
        <AvatarPic name={"Suleman"} email={"mmsulemanawan@gmail.com"} ></AvatarPic>
          
        </div>
      </div>
      <div className="bg-[#737373]">
        <BodyDashBoard> </BodyDashBoard>
      </div>
    </div>
  );
};

export default DrawerBoard;
