import React from "react";
import pic from "../pic.jpg";
import { Avatar } from "@mui/material";

const AvatarPic = ({name,email}) => { 
  return (
    <div className="flex justify-center flex-col  ">
      <Avatar
        className=" self-center"
        alt="Remy Sharp"
        src={pic}
        sx={{ width: 100, height: 100, '.css-1pqm26d-MuiAvatar-img':{objectFit:"fill" }}}
      />
      <span className="text-black-600 text-sm font-bold pt-3  flex justify-center">{name}</span>
      <span className="text-black-600 text-lg   flex justify-center	">{email}</span>
    </div>
  );
};

export default AvatarPic;
