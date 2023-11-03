import { Avatar, Button } from "@mui/material";
import React from "react";
import pic from "../pic.jpg";
import { applicationColor } from "../../Constants/color";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const goto = useNavigate();
  const gotoSignUp = useNavigate();
  return (
    <div
      style={{ backgroundColor: applicationColor.red }}
      className="flex justify-center items-center h-screen   "
    >
      <div
        className="flex flex-col rounded-2xl 
       bg-white    justify-center  xl:w-3/12
        lg:w-5/12 md:w-2/4 sm:w-1/5     h-screen
             w-full

        "
      >
        <div className=" ">
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
            <span className="text-blue-600 text-sm font-bold flex justify-center 	">
              Profile Picture
            </span>
          </div>
        </div>
        <div className="   flex flex-col items-center py-5"

          style={{ color: applicationColor.red }}
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
        <div  className="  flex flex-col justify-center items-center "

          style={{ color: applicationColor.red }}
        >
          <Button
            variant="contained"
            className="w-5/12 rounded-4xl	"
            onClick={() => gotoSignUp("/dashboard ")}
          >
            <span className=" font-light">Signin</span>
          </Button>
          <Button
            variant="text"
            className="w-3/12 mt-5 pt-2 border-2 border-red-500"
            onClick={() => goto("/gotoSignUp")}
          >
            <span className="font-light">Signup</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
