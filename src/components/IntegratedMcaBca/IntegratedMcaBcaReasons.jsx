import React from "react";
import {
  FaLaptopCode,
  FaChalkboardTeacher,
  FaRobot,
  FaGraduationCap,
  FaHandshake,
  FaProjectDiagram,
} from "react-icons/fa";

function IntegratedMcaBcaReasons() {
  const cardData = [
    {
      icon: <FaLaptopCode size={56} color="#6B7280" />,
      title: "Strong foundation for high-growth IT careers",
    },
    {
      icon: <FaChalkboardTeacher size={56} color="#6B7280" />,
      title: "Regular pre-placement training by industry experts",
    },
    {
      icon: <FaRobot size={56} color="#6B7280" />,
      title: "Add-on certifications in AI, Data Science, IoT & more",
    },
    {
      icon: <FaGraduationCap size={56} color="#6B7280" />,
      title: "Academic Progression Programs",
    },
    {
      icon: <FaHandshake size={56} color="#6B7280" />,
      title: "100% placement support with active alumni network",
    },
    {
      icon: <FaProjectDiagram size={56} color="#6B7280" />,
      title: "Hands-on learning through projects, role plays & case studies",
    },
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
            className="bg-[#F5F0EB] shadow-md rounded-xl p-6 flex flex-row items-center gap-6 hover:scale-105 hover:border hover:border-[#555555] transition-transform"
          >
            <div className="min-w-[6.5rem] flex justify-center">
              <div className="w-24 h-24 rounded-full border-4 border-dotted border-[#f37021] flex items-center justify-center">
                {card.icon}
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-base font-semibold text-[#333] leading-relaxed">
                {card.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IntegratedMcaBcaReasons;
