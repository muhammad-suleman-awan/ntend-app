import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const dataPrintTop = [
  { title: "Contract 1", body: "Buttler", date: "28/08/2023" },
  { title: "Contract 2", body: "Buttler", date: "28/08/2023" },
  { title: "Contract 3", body: "Buttler", date: "28/08/2023" },
  { title: "Contract 4", body: "Buttler", date: "28/08/2023" },
  { title: "Contract 5", body: "Buttler" },
];

const TopRowCard = () => {
  return (
    <div>
      {" "}
      <div className="  grid md:grid-cols-3 px-5 py-5 gap-5 ">
        <span className="borderLineDown md:hidden block font-bold text-3xl pb-4">
          Latest
        </span>
        {dataPrintTop.map((bodyData) => (
          <div className="bg-white rounded-lg flex flex-col gap-5 pt-5 pb-5 borderLineDown md:block hidden">
            <h1 className="flex justify-center">{bodyData.title}</h1>
            <p className="flex justify-center">{bodyData.body}</p>
            <h5 className="flex justify-center">{bodyData.date}</h5>
          </div>
        ))}
      </div>
      {dataPrintTop.map((bodyData) => (
        <div className=" my-2  md:hidden block ">
          <Accordion>
            <AccordionSummary
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>{bodyData.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{bodyData.body}</Typography>
              <Typography>{bodyData.date}</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </div>
  );
};

export default TopRowCard;
