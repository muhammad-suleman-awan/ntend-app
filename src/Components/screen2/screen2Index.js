import React from "react";
import DrawerBoard from "../dashboard/Drawer_bashboard";
import HeaderIcon from "../dashboard/headerIcon";
import Mycontact from "./headermidle";

const Screen2Index = () => {
  return (
    <div className="h-screen grid grid-cols-12">
      <div className="col-span-2 h-screen bg-[#737373]">
        <DrawerBoard></DrawerBoard>
      </div>
      <div className="col-span-10 h-screen bg-[#dedede] ">
        <div className="flex justify-end pr-5 h-16 place-content-center bg-white 	pt-5	">
          <HeaderIcon></HeaderIcon>
        </div>
        <div className="bg-white mt-1 h-20 flex justify-start pt-5 pl-5 mb-1">
          <span className="text-3xl font-bold	">My Contacts</span>
        </div>
        <div>
            <Mycontact></Mycontact>
        </div>
      </div>
    </div>
  );
};

export default Screen2Index;
