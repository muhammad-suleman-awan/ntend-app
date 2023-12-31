import React from "react";
import DrawerBoard from "../dashboard/Drawer_bashboard";
import HeaderIcon from "../dashboard/headerIcon";
import AvatarPic from "../dashboard/Avatar";
import ProfileDetail from "./ProfileDetail";

const ProfileIndex = () => {
  return (
    <div className="col-span-10  bg-[#dedede]">
      <div className="bg-white mt-1 h-16 flex  justify-between pt-5 pl-5 pr-5 mb-1">
        <span className="text-3xl font-bold	">Profile</span>
      </div>
      <div className=" mt-5 pt-5">
        <AvatarPic name={"Profile Picture"}></AvatarPic>
      </div>
      <div className="">
        <ProfileDetail></ProfileDetail>
      </div>
    </div>
  );
};

export default ProfileIndex;
