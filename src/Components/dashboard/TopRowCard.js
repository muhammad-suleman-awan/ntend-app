import React from 'react'
const dataPrintTop = [
    { title: "Contract 1", body: "Buttler", date: "28/08/2023" },
    { title: "Contract 2", body: "Buttler", date: "28/08/2023" },
    { title: "Contract 3", body: "Buttler", date: "28/08/2023" },
    { title: "Contract 4", body: "Buttler", date: "28/08/2023" },
    { title: "Contract 5", body: "Buttler", },
  
  ];

const TopRowCard = () => {
  return (
    <div> <div className="  grid grid-cols-3 px-5 py-5 gap-5">
    { dataPrintTop.map(bodyData =>(
      <div className="bg-white rounded-lg flex flex-col gap-5 pt-5 pb-5">
        <h1  className="flex justify-center">{bodyData.title}</h1>
        <p  className="flex justify-center">{bodyData.body}</p>
        <h5  className="flex justify-center">{bodyData.date}</h5>
      </div>
      ))}
    </div></div>
  )
}

export default TopRowCard