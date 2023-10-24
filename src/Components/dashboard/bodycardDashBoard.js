import React from "react";
import CardCardBodyMainDashBoradTop from "./CardCardBodyMainDashBoradTop";

const dataPrintTop = [
  { title: "Contract 1", body: "Buttler", date: "28/08/2023" },
  { title: "Contract 2", body: "Buttler", date: "28/08/2023" },
  { title: "Contract 3", body: "Buttler", date: "28/08/2023" },
  { title: "Contract 4", body: "Buttler", date: "28/08/2023" },
  { title: "Contract 5", body: "Buttler", },

];

const dataPrintBottom =[
    { title: "Category 1", body: "2",  },
    { title: "Category 2", body: "12",  },
    { title: "Category 3", body: "16",  },
    { title: "Category 4", body: "7",  },
    { title: "Category 5", body: "28",  },
    { title: "Category 6", body: "14",  },]
    

const CardBodyMainDashBorad = () => {
  return (
    <>
      <div className="  grid grid-cols-3 px-5 py-5 gap-5">
      { dataPrintTop.map(bodyData =>(
        <div className="bg-white rounded-lg flex flex-col gap-5 pt-5 pb-5">
          <h1>{bodyData.title}</h1>
          <p>{bodyData.body}</p>
          <h5>{bodyData.date}</h5>
        </div>
        ))}
      </div>
      <div className="  grid grid-cols-3 px-5 py-5 gap-5">
      { dataPrintBottom.map(bodyData =>(
        <div className="bg-[#c56bcd] rounded-lg flex flex-col gap-5 pt-5 pb-5">
          <h1>{bodyData.title}</h1>
          <h1>{bodyData.body}</h1> 
        </div>
        ))}
      </div>
    </>
  );
};

export default CardBodyMainDashBorad;
