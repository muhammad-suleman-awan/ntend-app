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
    //  fontWeight:"bolder",
    minWidth: 200,
    width: 350,
    maxWidth: 600,

    headerClassName: "flex tableContacts font-bold	 color-red-400   	min-w-full	", // Apply Tailwind classes
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
    headerClassName: "tableContacts",

    minWidth: 100,
    width: 400,
    maxWidth: 600,
    sortable: false,
    renderCell: (params) => {
      return <span>1/11/2202</span>;
    },
  },
  {
    field: "lastName",
    headerClassName: "tableContacts",

    headerName: "Detail",

    minWidth: 100,
    width: 400,
    maxWidth: 600,
    sortable: false,
    renderCell: (params) => {
      return (
        <Button
          className="detailBttn"
          sx={{ color: "black" }}
          onClick={() =>
            Swal.fire({
              title: "Contract Detail",
              text: "Make sure to adjust the classes according to your Tailwind CSS setup. If you have any specific styling in mind, feel free to let me know, and I can assist you further! ",
              showCancelButton: true,
              showConfirmButton: false,
              customClass: {
                popup: "bg-[#f4f4f4] p-4", // Apply Tailwind classes to the popup
                title: "text-xl font-bold mb-4", // Apply Tailwind classes to the title

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
  {
    field: "age",
    headerName: "Publish",
    headerClassName: "tableContacts",

    minWidth: 300,
    width: 400,
    maxWidth: 600,
    sortable: false,
    renderCell: (params) => {
      return <Checkbox color="default" />;
    },
  },

  {
    field: "fullName",
    headerName: "Delete",
    headerClassName: "tableContacts",

    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 100,
    renderCell: (params) => <DeleteIcon className=" ml-5" />,
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

export default function RecordTabledashboard() {
  return (
    <div className=" mx-auto mt-3    px-10    w-full">
      <div className="flex w-full h-96	 max-h-screen min-h-full	  bg-white   overflow-auto px-10   ">
        <DataGrid
          rows={rows}
          columns={columns}
          disableColumnMenu={true}
          hideFooterPagination
          pagination={false}
          hideFooter
          className="flex overflow-auto 	  "
        />
      </div>

      <Stack spacing={8} className="flex items-center mt-5 mx-10 ">
        <Pagination count={7} siblingCount={0} color="primary" />
      </Stack>
    </div>
  );
}
