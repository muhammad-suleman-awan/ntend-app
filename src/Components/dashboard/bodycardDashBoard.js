import React from "react";
import CardCardBodyMainDashBoradTop from "./CardCardBodyMainDashBoradTop";
import TopRowCard from "./TopRowCard";
import BoptttomRowCard from "./BoptttomRowCard";
import BodyDashBoard from "./Body_DashBoard";


    

const CardBodyMainDashBorad = () => {
  return (
    <> 
      <TopRowCard></TopRowCard>
      <BoptttomRowCard></BoptttomRowCard>
      <div className=" stickyStyle md:hidden block">
      <BodyDashBoard></BodyDashBoard>
       </div>
   
    </>
  );
};

export default CardBodyMainDashBorad;
