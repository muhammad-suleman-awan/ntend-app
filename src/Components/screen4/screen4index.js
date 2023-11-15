import React from "react";
import DrawerBoard from "../dashboard/Drawer_bashboard";
import HeaderIcon from "../dashboard/headerIcon";
import { Button } from "@mui/material";
import BoptttomRowCard from "../dashboard/BoptttomRowCard";
import WrapPaignation from "./wrapPaignation";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const CategoryScreenIndex = () => {
  return (
    <div className="col-span-10  bg-[#dedede]  ">
      <div className="bg-white mt-1 h-16 flex  justify-between pt-5 pl-5 pr-5 mb-1 ">
        <span className="text-3xl font-bold	">Category</span>
        <Button
          variant="contained"
          className="p-0 mr-10 h-7 w-38"
          sx={{ color: "black" }}
          style={{ borderRadius: "10px" }}
          onClick={async () => {
            const { value: email } = await Swal.fire({
              showCloseButton: true,
              showCancelButton: true,
              showCancelButtonText: "Cancel",
              title: "Add Category",
              html: '<div class="text-start text-bold p-2">Category</div>', // Apply Tailwind classes to style the HTML content
              input: "text",
              inputPlaceholder: "",
              confirmButtonText: "Publish",
              customClass: {
                title: "text-start border-b-2 border-black p-0 pl-5",
                input: "text-start border-0 bg-[#dedede] p-2 m-0", // Apply Tailwind classes to style the input
              },
            });
          }}
        >
          <span className="text-white font-bold normal-case	"> Add </span>
        </Button>
      </div>
      <div className="">
        <BoptttomRowCard></BoptttomRowCard>
        <WrapPaignation></WrapPaignation>
      </div>
    </div>
  );
};

export default CategoryScreenIndex;
