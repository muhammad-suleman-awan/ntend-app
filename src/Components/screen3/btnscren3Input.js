import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#A0AAB4",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7",
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6F7E8C",
    },
  },
});

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#F3F6F9" : "#1A2027",
    border: "1px solid",
    borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
    fontSize: 16,
    width: "auto",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const RedditTextField = styled((props) => (
  <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
  "& .MuiFilledInput-root": {
    overflow: "hidden",
    borderRadius: 4,
    backgroundColor: theme.palette.mode === "light" ? "#F3F6F9" : "#1A2027",
    border: "1px solid",
    borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&.Mui-focused": {
      backgroundColor: "transparent",
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

export default function InputbtnScreen3() {
  return (
    <div className=" flex flex-row   justify-center pt-4 flex-wrap   gap-5 w-12/12    mx-5">
      <div className=" w-96">
        <InputLabel
          id="demo-simple-select-helper-label w-screen "
          sx={{ display: "flex", justifyContent: "start" }}
        >
          <span className="font-bold  "> Name</span>
        </InputLabel>
        <TextField
          className="bg-white  w-full "
          //defaultValue="react-bootstrap"
          id="bootstrap-input"
          sx={{
            ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
              padding: "8px",
            },
          }}
        />
      </div>
      <div className=" w-96">
        <InputLabel
          id="demo-simple-select-helper-label w-screen "
          sx={{ display: "flex", justifyContent: "start" }}
        >
          <span className="font-bold  "> Category</span>
        </InputLabel>

        <Select
          className="w-full bg-white"
          inputProps={{ "aria-label": "Without label" }}
          sx={{
            ".css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
              {
                padding: "8px",
              },
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </div>
      <div className="flex flex-col w-full  md:w-9/12 lg:w-6/12 xl:w-3/4	 2xl:w-6/12 ">
        <InputLabel
          shrink
          className=" w-screen  "
          sx={{ display: "flex", justifyContent: "start" }}
        >
          <span className="tableContacts  ">Description</span>
        </InputLabel>
        <TextField
          className="bg-white  w-full"
          //defaultValue="react-bootstrap"
          id="bootstrap-input"
          sx={{
            ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
              padding: "8px",
              height: "200px",
              borderRadius: "15px",
            },
          }}
        />
      </div>
      <div className="flex flex-row gap-5 w-6/12   ">
        <Button variant="contained" style={{ borderRadius: "10px" }}>
          <span className="font-bold">Publish</span>
        </Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#717c99" }}
          style={{ borderRadius: "10px" }}
        >
          <span className="font-bold normal-case	">Save</span>
        </Button>
      </div>
    </div>
  );
}
