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
      <div className="  grid md:grid-cols-2 px-5 py-5 gap-5 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3">
        <span className="borderLineDown md:hidden block font-bold text-3xl pb-4 stickySty">
          Latest
        </span>
        {dataPrintTop.map((bodyData) => (
          <div className="bg-white rounded-lg flex flex-col gap-5 pt-5 pb-5  md:block hidden">
            <h1 className="flex justify-center font-bold text-2xl text-black leading-9	">
              {bodyData.title}
            </h1>
            <p className="flex justify-center font-medium	text-sm	leading-6	">
              {bodyData.body}
            </p>
            <h5 className="flex justify-center font-medium text-sm		leading-6	">
              {bodyData.date}
            </h5>
          </div>
        ))}
      </div>
      {dataPrintTop.map((bodyData) => (
        <div className=" grid my-2  px-5 py-3 gap-5  md:hidden block ">
          <Accordion>
            <AccordionSummary
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <h1 className=" flex justify-center font-bold text-2xl text-black leading-9   w-full">
                {bodyData.title}
              </h1>
            </AccordionSummary>
            <AccordionDetails>
              <p className=" flex justify-center font-medium	text-sm	leading-6	 ">
                {bodyData.body}
              </p>
              <h5 className="flex justify-center font-medium text-sm		leading-6	">
                {bodyData.date}
              </h5>
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </div>
  );
};

export default TopRowCard;
