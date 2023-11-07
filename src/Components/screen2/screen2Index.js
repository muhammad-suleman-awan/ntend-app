import React from "react";
import DrawerBoard from "../dashboard/Drawer_bashboard";
import HeaderIcon from "../dashboard/headerIcon";
import Mycontact from "./headermidle";
import RecordTabledashboard from "./recordTable";

const Screen2Index = () => {
  return (
    <div className="col-span-10 flex flex-col ">
      <div className="bg-white mt-1  h-20 flex justify-start pt-5 pl-5 mb-1   ">
        <span className="text-3xl font-bold	">My Contacts</span>
      </div>
      <div className="flex flex-col  ">
        <Mycontact></Mycontact>
        <RecordTabledashboard></RecordTabledashboard>
      </div>
    </div>
  );
};

export default Screen2Index;
