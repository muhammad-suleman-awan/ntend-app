import { Avatar, Button, IconButton } from "@mui/material";
import React from "react";
import pic from '../pic.jpg';  
import MenuIcon from '@mui/icons-material/Menu';
import BodyDashBoard from "./Body_DashBoard";

const DrawerBoard = () => {
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
            <IconButton


            size="large"
            edge="start"
            color="inherit" 
          > 
          <MenuIcon>L</MenuIcon>
          </IconButton>
          </div>

          <div className="flex justify-center flex-col  ">
            <Avatar
              className=" self-center"
              alt="Remy Sharp"
              src={pic}
              sx={{ width: 100, height: 100 }}
            />
            <span className="text-black-600 text-sm font-bold pt-3  	">
              Suleman
            </span>
            <span className="text-black-600 text-lg   	">
              mmsuleman@gmail.com
            </span>
          </div>
        </div>
      </div>
      <div className="bg-[#737373]">
        <BodyDashBoard> </BodyDashBoard>
      </div>
    </div>
  );
};

export default DrawerBoard;
