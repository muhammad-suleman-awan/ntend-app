import { Avatar, Button } from "@mui/material";
import React from "react";
import pic from "../pic.jpg";
import { applicationColor } from "../../Constants/color";

const Signup = () => {
  return (
    <div
      style={{ backgroundColor: applicationColor.red }}
      className="flex justify-center items-center h-screen "
    >
      <div className="flex flex-col rounded-2xl  bg-white  gap-5 py-5 my-5 justify-center h-1/ w-full  lg:w-1/4 md:w-1/3 sm:w-1/2 px-5">
        <div className="">
          <div id="log" className="flex justify-center gap-5">
            <Avatar alt="Remy Sharp" src={pic} />
            <span
              className="text-blue-600 text-3xl font-bold"
              style={{ fontFamily: "cursive" }}
            >
              NTEND INFO
            </span>
          </div>

          <div className="flex justify-center flex-col  ">
            <Avatar
              className=" self-center"
              alt="Remy Sharp"
              src={pic}
              sx={{ width: 100, height: 100 }}
            />
            <span className="text-blue-600 text-sm font-bold  	">
              Profile Picture
            </span>
          </div>
        </div>
        <div
          style={{ color: applicationColor.red }}
          className="  flex flex-col items-center py-5"
        >
          <span className="w-2/5 flex w-9/12 py-2 text-black text-lg font-semibold">
            Name
          </span>
          <input
            style={{ backgroundColor: applicationColor.red }}
            className="rounded-md w-9/12"
          ></input>
          <span className="w-2/5 flex w-9/12 py-2 text-black text-lg font-semibold">
            Email
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
          <span className="w-2/5 flex w-9/12 py-2 text-black text-lg font-semibold">
            Confrim Password
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
          <Button variant="contained" className="w-5/12 rounded-4xl	">
            <span className=" font-light">Sign up</span>
          </Button>
          <Button variant="text" className="w-3/12 mt-5">
            <span className="font-light">Signup</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
