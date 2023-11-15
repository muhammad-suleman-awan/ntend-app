import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import { useLocation, useNavigate } from "react-router-dom";
import Person3Icon from "@mui/icons-material/Person3";
import TocIcon from "@mui/icons-material/Toc";
import DynamicFormIcon from "@mui/icons-material/DynamicForm";
import CategoryIcon from "@mui/icons-material/Category";
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
      className="gap-5  "
      style={{ borderRadius: "10px" }}
      // className={`gap-5 ${activeButton === "one" ? "bg-red-500" : "bg-blue-400"}`}
      sx={{
        // border: "2px solid red",

        color: "white",
        display: "flex",
        justifyContent: "flex-start",
        backgroundColor:
          pathname === "/dashboard/dashborady1" ? "#4c75b4" : "transparent",
      }}
      onClick={() => handleButtonClick("/dashboard/dashborady1", "one")}
    >
      {/* {console.log(pathname)}  */}
      <HomeOutlinedIcon></HomeOutlinedIcon>
      <span className="text:xs font-bold hidden md:block">
        <h1 className="text-xl	font-bold normal-case	leading-6	  ">Dashboard</h1>
      </span>
    </Button>,

    <Button
      variant="text"
      key="two"
      className="gap-5 rounded-lg"
      // className={`gap-5 ${activeButton === "two" ? "bg-red-500" : ""}`}
      sx={{
        // ".css-18ouuxk-MuiButtonGroup-root .MuiButtonGroup-lastButton, .css-18ouuxk-MuiButtonGroup-root .MuiButtonGroup-middleButton":
        //   { borderRadius: "25px" },

        color: "white",
        display: "flex",
        justifyContent: "flex-start",
        backgroundColor:
          pathname === "/dashboard/Contract" ? "#4c75b4" : "transparent",
      }}
      onClick={() => handleButtonClick("/dashboard/Contract", "two")}
      style={{ borderRadius: "10px" }}
    >
      <TocIcon></TocIcon>
      <span className="text-xs font-bold  hidden md:block normal-case	">
        <h1 className="text-xl	font-bold normal-case	leading-6	  ">
          My Contracts
        </h1>
      </span>
    </Button>,
    <Button
      style={{ borderRadius: "10px" }}
      key="three"
      sx={{
        color: "white",
        borderRadius: "25px",
        display: ["none", "none", "flex"], // Default is "row" for xs, sm, and md screens
        [theme.breakpoints.up("sm")]: {
          display: "flex",
        }, // Change to "column" for lg and larger screens
        justifyContent: "flex-start",
        backgroundColor:
          pathname === "/dashboard/addContract" ? "#4c75b4" : "transparent",
      }}
      className="gap-5 border-2  "
      variant="text"
      onClick={() => handleButtonClick("/dashboard/addContract", "three")}
    >
      <AppRegistrationIcon></AppRegistrationIcon>
      <span className="text-xs font-bold  hidden md:block normal-case	">
        <h1 className="text-xl	font-bold normal-case	leading-6	  ">
          {" "}
          Add Contract
        </h1>
      </span>
    </Button>,
    <Button
      style={{ borderRadius: "10px" }}
      key="four"
      borderRadius="5"
      sx={{
        color: "white",
        display: "flex",
        justifyContent: "flex-start",
        borderRadius: "10px",
        backgroundColor:
          pathname === "/dashboard/Categories" ? "#4c75b4" : "transparent",
      }}
      className="gap-5"
      variant="text"
      onClick={() => handleButtonClick("/dashboard/Categories", "four")}
    >
      <CategoryIcon></CategoryIcon>
      <span className="text-xs font-bold  hidden md:block normal-case	">
        <h1 className="text-xl	font-bold normal-case	leading-6	  ">Categories </h1>
      </span>
    </Button>,
    <Button
      style={{ borderRadius: "10px" }}
      key="five"
      sx={{
        color: "white",
        display: "flex",
        justifyContent: "flex-start",
        borderRadius: "10px",
        backgroundColor:
          pathname === "/dashboard/AllContracts" ? "#4c75b4" : "transparent",
      }}
      className="gap-5"
      variant="text"
      onClick={() => handleButtonClick("/dashboard/AllContracts", "five")}
    >
      {console.log("pathname MY All Contracts   ::   ", pathname)}
      <DynamicFormIcon></DynamicFormIcon>
      <span className="text-xs font-bold  hidden md:block normal-case	">
        <h1 className="text-xl	font-bold normal-case	leading-6	  ">
          All Contracts
        </h1>
      </span>
    </Button>,
    <Button
      style={{ borderRadius: "10px" }}
      key="three"
      sx={{ color: "white", display: "flex", justifyContent: "flex-start" }}
      className="gap-5"
      variant="text"
      onClick={() => {
        logout("/logout");
      }}
    >
      <Person3Icon></Person3Icon>
      <span className="text-xs font-bold  hidden md:block normal-case	">
        <h1 className="text-xl	font-bold normal-case	leading-6	  ">Logout</h1>
      </span>
    </Button>,
  ];

  return (
    <div className=" pt-3">
      <Box
        className=" flex justify-center "
        sx={{
          display: "flex",
        }}
      >
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical outlined button group"
          className="gap-5  justify-start  flex   drwMaxwidth  w-full mx-3	"
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
