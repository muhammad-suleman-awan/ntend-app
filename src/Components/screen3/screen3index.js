import React from "react";
import DrawerBoard from "../dashboard/Drawer_bashboard";
import HeaderIcon from "../dashboard/headerIcon";
import InputbtnScreen3 from "./btnscren3Input";

const Screen3Index = () => {
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
          <span className="text-3xl font-bold	">Add Contacts</span>
        </div>
        <div id="addContractsinfo">
            <div>
                <InputbtnScreen3></InputbtnScreen3>
            </div> 
        </div>
      </div>
    </div>
  );
};

export default Screen3Index;
