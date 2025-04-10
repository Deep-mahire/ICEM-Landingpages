import React from "react";
import { FaChalkboard, FaRegClock, FaRupeeSign } from "react-icons/fa";

const data = [
  {
    icon: <FaChalkboard size={50} className="text-[#f37021]" />,
    value: "Program Format",
    description: "Offline",
  },
  {
    icon: <FaRegClock size={50} className="text-[#f37021]" />,
    value: "Duration",
    description: "BBA: 3 Years\nMBA: 2 Years\nI-MBA: 5 Years",
  },
  {
    icon: <FaRupeeSign size={50} className="text-[#f37021]" />,
    value: "Program Fees",
    description: "Rs.77,368.00/-",
  },
];

export default function IntegratedBbaMbaPointers() {
  return (
    <div className="px-8 lg:px-8 py-4 shadow shadow-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 justify-center max-w-5xl mx-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-[#FCFAEE] p-2 lg:p-4 shadow-lg flex flex-col items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-[#E9F7FA]"
          >
            {item.icon}
            <h2 className="text-[#555555] text-sm lg:text-lg font-semibold mt-2 text-center">
              {item.value}
            </h2>
            <p className="text-[#2A9DA2] text-sm lg:text-lg text-center">
              {item.description.split("\n").map((line, idx) => (
                <React.Fragment key={idx}>
                  {line}
                  {idx < item.description.split("\n").length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
