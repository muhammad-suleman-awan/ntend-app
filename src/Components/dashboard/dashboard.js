import React from "react";
import DrawerBoard from "./Drawer_bashboard";

const DashBoard = () => {
  return (
    <div className="h-screen grid grid-cols-12">
      <div className="col-span-2">
        <DrawerBoard></DrawerBoard>

      </div>
      <div className="col-span-10 c">
        <div className="border-2 border-blue-300 mb-5">Header-Dashboard</div>
        <div className="border-2 border-blue-500 ">Body-DashBoard</div>
      </div>
    </div>
  );
};

export default DashBoard;
