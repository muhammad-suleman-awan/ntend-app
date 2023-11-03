import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const BodyDashBoard = () => {
  const navigate = useNavigate();
  const {pathname} = useLocation();
  // const Contract = useNavigate();
  // const addContract = useNavigate();
  // const Categories = useNavigate();
  // const AllContracts = useNavigate();
  const logout = useNavigate();
  const [activeButton, setActiveButton] = useState("null");
  const handleButtonClick = (path, buttonKey) => {
    navigate(path);
    setActiveButton(buttonKey);
  };
  const buttons = [
    <Button
      variant="text"
      key="one"
      className="gap-5 "
      // className={`gap-5 ${activeButton === "one" ? "bg-red-500" : "bg-blue-400"}`}
      sx={{
        // border: "2px solid red",
        borderRadius: "10px",
        color: "black",
        display: "flex",
        justifyContent: "flex-start",
        backgroundColor: pathname === "/dashboard/dashborady1" ? "white" : "transparent",
      }}
      onClick={() => handleButtonClick("/dashboard/dashborady1", "one")}
    >
    {console.log(pathname)}
      <HomeOutlinedIcon />
      Dashboard
    </Button>,

    <Button
      variant="text"
      key="two"
      className="gap-5 rounded-lg"
      // className={`gap-5 ${activeButton === "two" ? "bg-red-500" : ""}`}
      sx={{
        ".css-18ouuxk-MuiButtonGroup-root .MuiButtonGroup-lastButton, .css-18ouuxk-MuiButtonGroup-root .MuiButtonGroup-middleButton":
          { borderRadius: "25px" },

        color: "black",
        display: "flex",
        justifyContent: "flex-start",
        backgroundColor: pathname === "/dashboard/Contract" ? "white" : "transparent",
      }}
      onClick={() => handleButtonClick("/dashboard/Contract", "two")}
    >
      <HomeOutlinedIcon></HomeOutlinedIcon>
      MY Contracts
    </Button>,
    <Button
      key="three"
      sx={{
        color: "black",
        borderRadius: "25px",
        display: "flex",
        justifyContent: "flex-start",
        backgroundColor: pathname === "/dashboard/addContract" ? "white" : "transparent",
      }}
      className="gap-5 border-2"
      variant="text"
      onClick={() => handleButtonClick("/dashboard/addContract", "three")}
    >
      <HomeOutlinedIcon />
      Add Contract
    </Button>,
    <Button
      key="four"
      sx={{
        color: "black",
        display: "flex",
        justifyContent: "flex-start",
        borderRadius: "10px",
        backgroundColor: activeButton === "four" ? "white" : "transparent",
      }}
      className="gap-5"
      variant="text"
      onClick={() => handleButtonClick("/dashboard/Categories", "four")}
    >
      <HomeOutlinedIcon></HomeOutlinedIcon>
      Categories
    </Button>,
    <Button
      key="five"
      sx={{
        color: "black",
        display: "flex",
        justifyContent: "flex-start",
        borderRadius: "10px",
        backgroundColor: activeButton === "five" ? "white" : "transparent",
      }}
      className="gap-5"
      variant="text"
      onClick={() => handleButtonClick("/dashboard/AllContracts", "five")}
    >
      <HomeOutlinedIcon></HomeOutlinedIcon>
      All Contracts
    </Button>,
    <Button
      key="three"
      sx={{ color: "black", display: "flex", justifyContent: "flex-start" }}
      className="gap-5"
      variant="text"
      onClick={() => {
        logout("/logout");
      }}
    >
      <HomeOutlinedIcon></HomeOutlinedIcon>
      Logout
    </Button>,
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
