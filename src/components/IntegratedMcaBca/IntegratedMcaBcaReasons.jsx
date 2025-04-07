import React from "react";
import { FaGlobe, FaUniversity, FaExchangeAlt, FaChartLine, FaPlane, FaFileAlt, FaUserGraduate, FaPuzzlePiece } from "react-icons/fa";

function IntegratedMcaBcaReasons() {
  const cardData = [
    { icon: <FaGlobe size={28} color="#D2691E" />, title: "Global Immersion Program" },
    { icon: <FaUniversity size={28} color="#D2691E" />, title: "Summer Schools" },
    { icon: <FaExchangeAlt size={28} color="#D2691E" />, title: "International Dual Degree Programs" },
    { icon: <FaChartLine size={28} color="#D2691E" />, title: "Academic Progression Programs" },
    { icon: <FaPlane size={28} color="#D2691E" />, title: "International Study Tours" },
    { icon: <FaFileAlt size={28} color="#D2691E" />, title: "Credit Transfer" },
    { icon: <FaUserGraduate size={28} color="#D2691E" />, title: "International Co-Supervisors" },
    { icon: <FaPuzzlePiece size={28} color="#D2691E" />, title: "Collaborative Research Projects" },
  ];

  return (
    <div className="relative py-12 bg-[#FCFAEE]">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#555555]">
        Why Choose ICEM for Your Integrated BCA/MCA Journey?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 md:px-12">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 flex flex-col items-start text-center hover:scale-105 transition-transform"
          >
            <div className="w-20 h-20 rounded-full border-4 border-dotted border-yellow-400  flex items-center justify-center mb-4">
              {card.icon}
            </div>
            <h3 className="text-lg font-semibold text-[#333] text-left">{card.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IntegratedMcaBcaReasons;
