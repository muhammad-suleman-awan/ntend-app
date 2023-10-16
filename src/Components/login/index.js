import React from "react";
import Login from "./login";
import { applicationColor } from "../../Constants/color";
import { Avatar, Button } from "@mui/material";

const LoginApp = () => {
  return (
    <div
      style={{ backgroundColor: applicationColor.red }}
      className=" flex flex-col justify-center h-screen items-center mt-30 py-5"
    >
      <div
        style={{ color: applicationColor.red }}
        className=" bg-white w-full lg:w-1/4 md:w-1/3 sm:w-1/2 flex  justify-center items-center gap-5 h-40"
      >
        <div id="log">
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </div>
        <div id="appName">Application Name</div> 
      </div>
      <div
        style={{ color: applicationColor.red }}
        className="asdf bg-white w-full lg:w-1/4 md:w-1/3 sm:w-1/2 h-45 flex flex-col items-center py-5"
      >
        <span className="w-2/5 flex">Username/Email</span>
        <input style={{ backgroundColor: applicationColor.red }}></input>
        <span className="w-2/5 flex">Password</span>
        <input style={{ backgroundColor: applicationColor.red }}></input>
      </div>
      <div
        style={{ color: applicationColor.red }}
        className="asdf bg-white w-full lg:w-1/4 md:w-1/3 sm:w-1/2 flex flex-col justify-center items-center py-5"
      >
        <Button variant="contained" className="w-3/12">
          Signin
        </Button>
        <Button variant="text" className="w-3/12">
          Signup?
        </Button>
      </div>
    </div>
  );
};

export default LoginApp;
