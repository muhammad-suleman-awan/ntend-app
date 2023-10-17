import React from "react";
import { applicationColor } from "../../Constants/color";
import { Avatar, Button } from "@mui/material";
import pic from "../pic.jpg";
const Login = () => {
  return (
    <div
      style={{ backgroundColor: applicationColor.red }}
      className=" flex flex-col justify-center h-screen items-center mt-30 py-5"
    >
      <div className=" bg-white w-full lg:w-1/4 md:w-1/3 sm:w-1/2 rounded-3xl F">
        <div
          style={{ color: applicationColor.red }}
          className=" flex  justify-center items-center gap-5 h-40"
        >
          <div id="log">
            <Avatar alt="Remy Sharp" src={pic} />
          </div>
          <div id="appName">
            {" "}
            <span
              className="text-blue-400 text-lg font-bold font-mono	"
              style={{ fontFamily: "cursive" }}
            >
              NTEND INFO
            </span>
          </div>
        </div>
        <div
          style={{ color: applicationColor.red }}
          className="  flex flex-col items-center py-5"
        >
          <span className="w-2/5 flex w-9/12 py-2 text-black text-lg font-semibold">
            Username/Email
          </span>
          <input
            style={{ backgroundColor: applicationColor.red }}
            className="rounded-md w-9/12"
          ></input>
          <span className="w-2/5 flex w-9/12 py-2 text-black text-lg font-semibold">
            Password
          </span>
          <input
            style={{ backgroundColor: applicationColor.red }}
            className="rounded-md w-9/12"
          ></input>
        </div>
        <div
          style={{ color: applicationColor.red }}
          className="flex flex-col justify-center items-center py-3"
        >
          <Button variant="contained" className="w-5/12 rounded-2xl	">
            <span className=" font-light">Signin</span>
          </Button>
          <Button variant="text" className="w-3/12">
            <span className="font-light">Signup</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
