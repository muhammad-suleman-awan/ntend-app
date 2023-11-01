import React from "react";
import DrawerBoard from "../dashboard/Drawer_bashboard";
import HeaderIcon from "../dashboard/headerIcon";
import InputbtnScreen3 from "./btnscren3Input";

const Screen3Index = () => {
  return (
    <div className="col-span-10   bg-[#dedede] ">
      <div className="bg-white mt-1 h-20 flex justify-start pt-5 pl-5 mb-1">
        <span className="text-3xl font-bold	">Add Contracts</span>
      </div>
      <div id="addContractsinfo">
        <div>
          <InputbtnScreen3></InputbtnScreen3>
        </div>
      </div>
    </div>
  );
};

export default Screen3Index;
