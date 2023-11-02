import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { useNavigate } from "react-router-dom";

const BodyDashBoard = () => {
const navigate = useNavigate();
  const Contract = useNavigate();
  const addContract = useNavigate();
  const Categories = useNavigate();
  const AllContracts =useNavigate();
  const logout = useNavigate();
  const buttons = [
  
    <Button
      variant="text"
      key="one"
      className=" gap-5"
      sx={{ display: "flex", justifyContent: "flex-start", background: "white" }}
      onClick={()=>navigate("/dashboard/dashborady1")}
    >
      <HomeOutlinedIcon></HomeOutlinedIcon>
      Dashboard
    </Button>,
    <Button
      key="three"
      sx={{ color: "white", display: "flex", justifyContent: "flex-start" }}
      className="gap-5 flex justify-start"
      variant="text"
      onClick={()=>Contract('/dashboard/Contract')}
    >
      <HomeOutlinedIcon></HomeOutlinedIcon>
      MY Contracts
    </Button>,
    <Button
      key="three"
      sx={{ color: "white", display: "flex", justifyContent: "flex-start" }}
      className="gap-5 flex justify-start"
      variant="text"
      onClick={()=>addContract('/dashboard/addContract')}
    >
      <HomeOutlinedIcon></HomeOutlinedIcon>
      Add Contract
    </Button>,
    <Button
      key="one"
      sx={{ color: "white", display: "flex", justifyContent: "flex-start" }}
      className="gap-5"
      variant="text"
      onClick={()=>Categories('/dashboard/Categories')}
    >
      <HomeOutlinedIcon></HomeOutlinedIcon>
      Categories
    </Button>,
    <Button
      key="two"
      sx={{ color: "white", display: "flex", justifyContent: "flex-start" }}
      className="gap-5"
      variant="text"
      onClick={()=>AllContracts('/dashboard/AllContracts')}
    >
      <HomeOutlinedIcon></HomeOutlinedIcon>
      All Contracts
    </Button>,
    <Button
      key="three"
      sx={{ color: "white", display: "flex", justifyContent: "flex-start" }}
      className="gap-5"
      variant="text"
      onClick={()=>{logout('/logout')}}
     >
      <HomeOutlinedIcon></HomeOutlinedIcon>
      Logout
    </Button>
    
  ];

  return (
    <Box
      className="gap-5 flex justify-center pt-10"
      sx={{
        display: "flex",
      }}
    >
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical outlined button group"
        className="gap-5 flex justify-start "
      >
        {buttons}
      </ButtonGroup>
    </Box>
  );
};

export default BodyDashBoard;