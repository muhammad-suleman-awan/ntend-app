import { Button } from "@mui/material";
import React from "react";

const ProfileDetail = () => {
  return (
    <div className=" m-10 ">
      <div className=" flex flex-wrap ">
        <div className="w-6/12 flex flex-col">
          <span className=" flex   text-black text-lg font-semibold">Name</span>
          <input className="rounded-md white h-12 mr-5"></input>
        </div>
        <div className="   w-6/12 flex flex-col ">
          <span className=" text-black text-lg font-semibold flex justify-start">
            Email
          </span>
          <input className="rounded-md h-12 white "></input>
        </div>
        <div className="   w-6/12 flex flex-col pt-5 ">
          <span className=" text-black text-lg font-semibold flex justify-left">
            Password
          </span>
          <input className="rounded-md h-12 white mr-5"></input>
        </div>
      </div>
      <div className=" gap-5   flex justify-end">
        <div className="   flex justify-end    ">
          <Button variant="contained" className="h-12 flex w-40">
            {" "}
            Update
          </Button>
        </div>
        <div className="  flex justify-end    ">
          <Button
            variant="contained"
            className="h-12 flex w-40"
            sx={{ backgroundColor: "#717c99" }}
          >
            {" "}
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetail;
