import React from "react";
import { applicationColor } from "../../Constants/color";
import { Avatar, Button } from "@mui/material";
import pic from "../pic.jpg";
import { useNavigate } from "react-router-dom";

const StartUpLogin = () => {
  const goto = useNavigate();
  const signinGoto = useNavigate();

  return (
    <div       className=" flex flex-col justify-center h-screen items-center mt-30 py-5  "
      style={{ backgroundColor: applicationColor.red }}
    >
      <div className=" bg-white w-11/12 xl:w-3/12 lg:w-4/12 md:w-6/12 sm:w-6/12 rounded-3xl ">
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
          <Button
            variant="contained"
            className="w-5/12 rounded-2xl	"
            onClick={() => signinGoto("/dashboard/dashborady1")}
          >
            <span className=" font-light">Sign-in</span>
          </Button>
          <Button
            variant="text"
            className="w-3/12"
            onClick={() => goto("/signUpPage")}
          >
            <span className="font-light">Signup</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StartUpLogin;
