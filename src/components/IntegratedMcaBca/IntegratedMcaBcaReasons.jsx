import React from "react";
import {  FaLaptopCode,
  FaChalkboardTeacher,
  FaRobot,
  FaGraduationCap,
  FaHandshake,
  FaProjectDiagram,} from "react-icons/fa";

function IntegratedMcaBcaReasons() {
  const cardData = [
    {
      icon: <FaLaptopCode size={28} color="#6B7280" />,
      title: "Strong foundation for high-growth IT careers",
    },
    {
      icon: <FaChalkboardTeacher size={28} color="#6B7280" />,
      title: "Regular pre-placement training by industry experts",
    },
    {
      icon: <FaRobot size={28} color="#6B7280" />,
      title: "Add-on certifications in AI, Data Science, IoT & more",
    },
    {
      icon: <FaGraduationCap size={28} color="#6B7280" />,
      title: "Academic Progression Programs",
    },
    {
      icon: <FaHandshake size={28} color="#6B7280" />,
      title: "100% placement support with active alumni network",
    },
    {
      icon: <FaProjectDiagram size={28} color="#6B7280" />,
      title: "Hands-on learning through projects, role plays & case studies",
    },
    // { icon: <FaUserGraduate size={28} color="#D2691E" />, title: "International Co-Supervisors" },
    // { icon: <FaPuzzlePiece size={28} color="#D2691E" />, title: "Collaborative Research Projects" },
  ];

  return (
    <div className="relative py-6 md:py-12 bg-[#FCFAEE] overflow-hidden px-8 md:px-16">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-6 md:mb-8 text-[#555555]">
        Why Choose ICEM for Your Integrated BCA/MCA Journey?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 space-y-4 md:space-y-0 md:gap-8 ">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-[#F5F0EB] shadow-md rounded-xl p-6 flex flex-col items-start text-center hover:scale-105 transition-transform"
          >
            <div className="w-16 h-16 rounded-full border-4 border-dotted border-[#f37021]  flex items-center justify-center mb-4">
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
