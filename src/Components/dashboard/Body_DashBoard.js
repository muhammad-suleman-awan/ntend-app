import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { useLocation, useNavigate } from "react-router-dom";
import Person3Icon from '@mui/icons-material/Person3';
import TocIcon from '@mui/icons-material/Toc';
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import CategoryIcon from '@mui/icons-material/Category';
import { useState } from "react";
import { useTheme } from "@mui/material/styles";

const BodyDashBoard = () => {
  const theme = useTheme();

  const navigate = useNavigate();
  const { pathname } = useLocation();
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
        backgroundColor:
          pathname === "/dashboard/dashborady1" ? "white" : "transparent",
      }}
      onClick={() => handleButtonClick("/dashboard/dashborady1", "one")}
    >
      {/* {console.log(pathname)}  */}
      <HomeOutlinedIcon />
      <span className="text:xs, font-bold hidden md:block">Dashboard</span>
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
        backgroundColor:
          pathname === "/dashboard/Contract" ? "white" : "transparent",
      }}
      onClick={() => handleButtonClick("/dashboard/Contract", "two")}
    >
      <TocIcon></TocIcon>
      <span className="text-xs font-bold  hidden md:block">MY Contracts</span>
    </Button>,
    <Button
      key="three"
      sx={{
        color: "black",
        borderRadius: "25px",
        display: ["none", "none", "flex"], // Default is "row" for xs, sm, and md screens
        [theme.breakpoints.up("sm")]: {
          display: "flex",
        }, // Change to "column" for lg and larger screens
        justifyContent: "flex-start",
        backgroundColor:
          pathname === "/dashboard/addContract" ? "white" : "transparent",
      }}
      className="gap-5 border-2  "
      variant="text"
      onClick={() => handleButtonClick("/dashboard/addContract", "three")}
    >
      <AppRegistrationIcon></AppRegistrationIcon>
      <span className="text-xs font-bold  hidden md:block"> Add Contract</span>
    </Button>,
    <Button
      key="four"
      sx={{
        color: "black",
        display: "flex",
        justifyContent: "flex-start",
        borderRadius: "10px",
        backgroundColor:
          pathname === "/dashboard/Categories" ? "white" : "transparent",
      }}
      className="gap-5"
      variant="text"
      onClick={() => handleButtonClick("/dashboard/Categories", "four")}
    >
      <CategoryIcon></CategoryIcon>
      <span className="text-xs font-bold  hidden md:block"> Categories </span>
    </Button>,
    <Button
      key="five"
      sx={{
        color: "black",
        display: "flex",
        justifyContent: "flex-start",
        borderRadius: "10px",
        backgroundColor:
          pathname === "/dashboard/AllContracts" ? "white" : "transparent",
      }}
      className="gap-5"
      variant="text"
      onClick={() => handleButtonClick("/dashboard/AllContracts", "five")}
    >
      {console.log("pathname MY All Contracts   ::   ", pathname)}
      <DynamicFormIcon></DynamicFormIcon>
      <span className="text-xs font-bold  hidden md:block"> All Contracts</span>
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
      <Person3Icon></Person3Icon>
      <span className="text-xs font-bold  hidden md:block"> Logout</span>
    </Button>,
  ];

  return (
    <div className=" pt-3">
      <Box
        className=" flex justify-center"
        sx={{
          display: "flex",
        }}
      >
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical outlined button group"
          className="gap-5  justify-start  flex  "
          sx={{
            display: "flex",
            flexDirection: ["row", "row", "column"], // Default is "row" for xs, sm, and md screens
            [theme.breakpoints.up("sm")]: {
              flexDirection: "column", // Change to "column" for lg and larger screens
            },
          }}
        >
          {buttons}
        </ButtonGroup>
      </Box>
    </div>
  );
};

export default BodyDashBoard;
