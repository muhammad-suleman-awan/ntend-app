import React from "react";


const dataPrintBottom =[
    { title: "Category 1", body: "2",  },
    { title: "Category 2", body: "12",  },
    { title: "Category 3", body: "16",  },
    { title: "Category 4", body: "7",  },
    { title: "Category 5", body: "28",  },
    { title: "Category 6", body: "14",  },]

const BoptttomRowCard = () => {
  return (
    <div>
      {" "}
      <div className="  grid grid-cols-3 px-5 py-5 gap-5">
        {dataPrintBottom.map((bodyData) => (
          <div className=" bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-lg flex flex-col gap-5 pt-5 pb-5 justify-center">
            <h1 className="flex justify-center">{bodyData.title}</h1>
            <h1 className="flex justify-center">{bodyData.body}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoptttomRowCard;
