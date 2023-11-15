import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Pagination from "@mui/material/Pagination";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { Panorama } from "@mui/icons-material";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const columns = [
  {
    field: "id",
    headerName: "Name",
    sortable: false,
    flex: 1,
    maxWidth: 1250,
    minWidth: 100,
    sx: {
      // ".css-t89xny-MuiDataGrid-columnHeaderTitle": {
      //   fontWeight: "bold",
      // },
    },
    //  fontWeight:"bolder", 
    headerClassName: "flex justify-center tableContacts font-bold px-5", // Apply Tailwind classes
    // headerStyle: { backgroundColor: "red", color: "white" }, // Apply inline styles
    renderCell: (params) => {
      return (
        <span className="flex justify-center font-bold	text-base	">Contract</span>
      );
    },
  },
  {
    field: "firstName",
    headerName: "Date",
    flex: 1,
    maxWidth: 400,
    minWidth: 100,
    headerClassName: "tableContacts",
    sortable: false,
    renderCell: (params) => {
      return <span>1/11/2202</span>;
    },
  },
  {
    field: "lastName",
    headerClassName: "tableContacts",
    flex: 1,
    minWidth: 100,
    headerName: " Detail",
    sortable: false,
    renderCell: (params) => {
      return (
        <Button
          className="detailBttn  rounded-lg"
          sx={{ color: "black" }}
          onClick={() =>
            Swal.fire({
              title: "Contract Detail",
              html: '<h1 class="  text-start font-bold m-0 pb-3">Category 1 </h1> <p class="text-left pl-3"> Make sure to adjust the classes according to your Tailwind CSS setup.If you have any specific styling in mind, feel free to let me know, and I can assist you further! </p> ',
              // html: '<b class="text-left  m-0 pb-1">Category 1</b> </br> If you have any specific styling in mind, feel free to let me know, and I can assist you further!<br><br><h2 class="text-lg font-semibold">This is a subheading</h2>',

              showCancelButton: true,
              showCloseButton: true,
              showConfirmButton: false,
              customClass: {
                popup: "bg-[#f4f4f4] p-4", // Apply Tailwind classes to the popup
                title:
                  "font-bold	 mb-4 text-left border-b-2 border-black p-0 pl-5 pt-5 m-0", // Apply Tailwind classes to the title
                confirmButton: "bg-blue-500 text-white px-8 py-2 rounded-full", // Apply Tailwind classes to the confirm button
              },
            })
          }
        >
          {" "}
          <ListAltIcon className="detailBttn"></ListAltIcon>{" "}
        </Button>
      );
    },
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },

  { id: 10, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 11, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 12, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function ContractDetail() {
  return (
    <div>
      <div className="flex justify-center md:mt-3    ">
        <div className="bg-white w-full h-full flex mx-5  px-5 2xl:px-0">
          <DataGrid rows={rows} columns={columns} disableColumnMenu={true} 
            rowSelection={false}
          />
        </div>
      </div>
    </div>
  );
}
