import React from "react";
import pic from "../pic.jpg";
import { Avatar } from "@mui/material";

const AvatarPic = ({name,email}) => {
    console.log("pakistan")
    console.log("Hello", name)
  return (
    <div className="flex justify-center flex-col  ">
      <Avatar
        className=" self-center"
        alt="Remy Sharp"
        src={pic}
        sx={{ width: 100, height: 100 }}
      />
      <span className="text-black-600 text-sm font-bold pt-3  	">{name}</span>
      <span className="text-black-600 text-lg   	">{email}</span>
    </div>
  );
};

export default AvatarPic;
