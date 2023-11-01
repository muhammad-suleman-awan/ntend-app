import React from "react";
import DrawerBoard from "../dashboard/Drawer_bashboard";
import HeaderIcon from "../dashboard/headerIcon";
import RadioButtonsGroup from "./radiobtn";
import { applicationColor } from "../../Constants/color";
import { Button } from "@mui/material";

const Screen6Index = () => {
  return (
    <div className="col-span-10  bg-[#dedede]">
      <div className="bg-white mt-1 h-16 flex  justify-between pt-5 pl-5 pr-5 mb-1">
        <span className="text-3xl font-bold	">Profile</span>
      </div>
      <div className="flex pl-10 m-10 ">
        <RadioButtonsGroup></RadioButtonsGroup>
      </div>
      <div className=" m-10 ">
        <div className=" flex flex-wrap ">
          <div className="w-6/12 flex flex-col">
            <span className=" flex   text-black text-lg font-semibold">
              Name
            </span>
            <input className="rounded-md white h-12 mr-5"></input>
          </div>
          <div className="   w-6/12 flex flex-col ">
            <span className=" text-black text-lg font-semibold flex justify-start">
              Card No
            </span>
            <input className="rounded-md h-12 white "></input>
          </div>
          <div className="   w-3/12 flex flex-col pt-5 ">
            <span className=" text-black text-lg font-semibold flex justify-left">
              CSV
            </span>
            <input className="rounded-md h-12 white mr-5"></input>
          </div>
          <div className="w-7/12 flex flex-col px-5 pt-5">
            <span className="flex w-7/12 text-black text-lg font-semibold   ">
              Expiry
            </span>
            <input className="rounded-md  white h-12 mr-5 "></input>
          </div>
          <div className="  w-2/12 flex justify-end mt-7 pt-5  ">
            <Button variant="contained" className="h-12 flex w-40">
              {" "}
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen6Index;
