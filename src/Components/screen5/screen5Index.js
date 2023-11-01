import React from "react";
import DrawerBoard from "../dashboard/Drawer_bashboard";
import HeaderIcon from "../dashboard/headerIcon";
import { Button } from "@mui/material";

import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import Mycontact from "../screen2/headermidle";
import RecordTabledashboard from "../screen2/recordTable";
import ContractDetail from "./allcontractTable";

const IndexScreen5 = () => {
  return (
    <div className="col-span-10  bg-[#dedede]">
      <div className="bg-white mt-1 h-16 flex  justify-between pt-5 pl-5 pr-5 mb-1">
        <span className="text-3xl font-bold	">All Contracts</span>
      </div>
      <div>
        <Mycontact></Mycontact>
        <ContractDetail></ContractDetail>
      </div>
    </div>
  );
};

export default IndexScreen5;
