import React from "react";
import CustomizedAccordions from "./mbbtmscreen";
import ControlledAccordions from "./mbbtmscreen";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";

const dataPrintBottom = [
  { key: 0, title: "Category 1", body: "2" },
  { key: 1, title: "Category 2", body: "12" },
  { key: 2, title: "Category 3", body: "16" },
  { key: 3, title: "Category 4", body: "7" },
  { key: 4, title: "Category 5", body: "28" },
  { key: 5, title: "Category 6", body: "14" },
];

const BoptttomRowCard = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <div className="  grid md:grid-cols-3 grid-cols-2    px-5 py-5 gap-5 ">
        {dataPrintBottom.map((bodyData) => (
          <div className=" bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-lg   gap-5 pt-5 pb-5 justify-center  hidden md:block">
            <h1 className="flex justify-center">{bodyData.title}</h1>
            <h1 className="flex justify-center">{bodyData.body}</h1>
          </div>
        ))}
      </div>

      <div className="  grid grid-cols-1   px-5 py-5 gap-5   md:hidden block  ">
        {dataPrintBottom.map((bodyData) => (
          <Accordion
            expanded={expanded === bodyData.key}
            onChange={handleChange(bodyData.key)}
            className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-lgdred"
          >
            <AccordionSummary
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "100%", flexShrink: 0 }}>
                <span className=" font-bold  text-lg	"> {bodyData.title}</span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <span className="font-black text-rose-500	">
                  {bodyData.body}
                </span>
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default BoptttomRowCard;
