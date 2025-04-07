import React from "react";
import { FaUniversity, FaRegHandshake, FaUsers, FaBriefcase, FaGlobe, FaLaptopCode } from "react-icons/fa";

function IntegratedBbaMbaReasons() {
  return (
    <div className="relative py-8 bg-[#FCFAEE]">
      <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-center mb-6 z-10 relative text-[#555555]">
        💡 Why Choose the Integrated BBA-MBA Program at ICEM?
      </h2>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-6 px-6 md:px-10 lg:px-16">
        
        {/* Industry-Integrated Curriculum */}
        <div className="bg-[#f7f3ef] shadow-lg p-6 flex flex-col items-start rounded-lg hover:shadow-xl hover:border-2 hover:scale-105 hover:border-[#555555]">
          <div className="border-4 border-dotted border-[#f37021] rounded-full p-4 mb-4">
            <FaUniversity className="w-8 h-8 text-[#555555]" />
          </div>
          <p className="text-sm md:text-base text-gray-600">Specialized Programs in HR, Marketing & Finance</p>
        </div>

        {/* Live Projects & Internships */}
        <div className="bg-[#f7f3ef] shadow-lg p-6 flex flex-col items-start rounded-lg hover:shadow-xl hover:border-2 hover:scale-105 hover:border-[#555555]">
          <div className="border-4 border-dotted border-[#f37021] rounded-full p-4 mb-4">
            <FaRegHandshake className="w-8 h-8 text-[#555555]" />
          </div>
          <p className="text-sm md:text-base text-gray-600">Global Exposure through International Business Practices & Foreign Visits</p>
        </div>

        {/* Expert Faculty & Industry Mentors */}
        <div className="bg-[#f7f3ef] shadow-lg p-6 flex flex-col items-start rounded-lg hover:shadow-xl hover:border-2 hover:scale-105 hover:border-[#555555]">
          <div className="border-4 border-dotted border-[#f37021] rounded-full p-4 mb-4">
            <FaUsers className="w-8 h-8 text-[#555555]" />
          </div>
          <p className="text-sm md:text-base text-gray-600">100% Placement Assistance with a Strong Alumni Network</p>
        </div>

        {/* Top Placements */}
        <div className="bg-[#f7f3ef] shadow-lg p-6 flex flex-col items-start rounded-lg hover:shadow-xl hover:border-2 hover:scale-105 hover:border-[#555555]">
          <div className="border-4 border-dotted border-[#f37021] rounded-full p-4 mb-4">
            <FaBriefcase className="w-8 h-8 text-[#555555]" />
          </div>
          <p className="text-sm md:text-base text-gray-600">Experiential Learning: Field Projects, Presentations, Role Plays & Case Studies</p>
        </div>

        {/* Global Career Prospects */}
        <div className="bg-[#f7f3ef] shadow-lg p-6 flex flex-col items-start rounded-lg hover:shadow-xl hover:border-2 hover:scale-105 hover:border-[#555555]">
          <div className="border-4 border-dotted border-[#f37021] rounded-full p-4 mb-4">
            <FaGlobe className="w-8 h-8 text-[#555555]" />
          </div>
          <p className="text-sm md:text-base text-gray-600">Leadership & Management Training through Outdoor Management Training, GUSTO, I-MUN, IPL, Youth Parliament & More!</p>
        </div>

        {/* Hackathons & Coding Competitions */}
        <div className="bg-[#f7f3ef] shadow-lg p-6 flex flex-col items-start rounded-lg hover:shadow-xl hover:border-2 hover:scale-105 hover:border-[#555555]">
          <div className="border-4 border-dotted border-[#f37021] rounded-full p-4 mb-4">
            <FaLaptopCode className="w-8 h-8 text-[#555555]" />
          </div>
          <p className="text-sm md:text-base text-gray-600">Live Industry Sessions & Real-World Projects</p>
        </div>

      </div>
    </div>
  );
}

export default IntegratedBbaMbaReasons;
