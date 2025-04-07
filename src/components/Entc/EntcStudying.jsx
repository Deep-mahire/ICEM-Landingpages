import React from "react";
import {
  FaTools,
  FaIndustry,
  FaCogs,
  FaLightbulb,
  FaHandsHelping,
  FaRobot
} from "react-icons/fa";
import std1 from '../../assets/images/IT-Images/app1.avif';
import std2 from '../../assets/images/Entc-Images/entclab.avif';
import indira from '../../assets/images/ICEM_College.avif';
 
function EntcStudying() {
  return (
     <div className="flex flex-col lg:flex-row px-4 md:px-8 lg:px-16 py-4 poppins-regular  gap-6">
          {/* Left Side: Image Section */}
          <div className="lg:w-[45%] w-full flex flex-col gap-4">
            {/* Main Image */}
            <div className="w-full h-[250px] md:h-[320px] ">
              <img
                src={indira}
                alt="Main College Building"
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>
     
            {/* Second and Third Images in a Row on Mobile */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 md:px-2">
              <div className="h-[200px] md:h-[350px]">
                <img
                  src={std1}
                  alt="Lab Image 1"
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="h-[200px] md:h-[350px]">
                <img
                  src={std2}
                  alt="Lab Image 2"
                  className="w-full h-full object-top-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
 
      {/* Right Side (Text Content Section) */}
      <div className="w-full md:w-1/2 pl-0 md:pl-8 mt-8 md:mt-0">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-left mb-4 text-black">
        Invent, Integrate, Impact, with Indira!!  
        </h1>
        <p className="text-left text-sm md:text-base lg:text-lg mb-8 md:mb-8 text-black ">
          At Indira College of Engineering & Management, our spacious, high-tech campus provides the perfect environment for innovation.
          Nestled in lush greenery, the campus blends natural beauty with cutting-edge labs, making every moment of learning an experience in itself.
          Our program equips students with practical expertise, live projects, and mentorship from top industry experts, ensuring they are industry-ready from day one.
        </p>
 
        {/* 2x3 Grid for Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-3 gap-6  lg:gap-8">
          {/* Card 1 */}
          <div className="bg-[#9FEDD7] p-4 shadow-lg shadow-[#026670]/50 flex items-center rounded-lg">
            <FaTools className="text-[#026670] mr-4 text-3xl lg:text-4xl" />
            <span className="text-xs lg:text-sm text-[#006BB3]">
              15+ YEARS OF ENGINEERING EXCELLENCE
            </span>
          </div>
 
          {/* Card 2 */}
          <div className="bg-[#9FEDD7] p-4 shadow-lg shadow-[#026670]/50 flex items-center rounded-lg">
            <FaIndustry className="text-[#026670] mr-4 text-3xl lg:text-4xl" />
            <span className="text-xs lg:text-sm text-[#006BB3]">450+ INDUSTRY PARTNERS</span>
          </div>
 
          {/* Card 3 */}
          <div className="bg-[#9FEDD7] p-4 shadow-lg shadow-[#026670]/50 flex items-center rounded-lg">
            <FaCogs className="text-[#026670] mr-4 text-3xl lg:text-4xl" />
            <span className="text-xs lg:text-sm text-[#006BB3]">INNOVATIVE RESEARCH & DEVELOPMENT</span>
          </div>
 
          {/* Card 4 */}
          <div className="bg-[#9FEDD7] p-4 shadow-lg shadow-[#026670]/50 flex items-center rounded-lg">
            <FaLightbulb className="text-[#026670] mr-4 text-3xl lg:text-4xl" />
            <span className="text-xs lg:text-sm text-[#006BB3]">
              EXPOSURE TO INDUSTRY GUEST LECTURES
            </span>
          </div>
 
          {/* Card 5 */}
          <div className="bg-[#9FEDD7] p-4 shadow-lg shadow-[#026670]/50 flex items-center rounded-lg">
            <FaHandsHelping className="text-[#026670] mr-4 text-3xl lg:text-4xl" />
            <span className="text-xs lg:text-sm text-[#006BB3]">HANDS-ON TRAINING (IT & APPLE LABS)</span>
          </div>
          {/* Card 6 */}
          <div className="bg-[#9FEDD7] p-4 shadow-lg shadow-[#026670]/50 flex items-center rounded-lg">
            <FaRobot className="text-[#026670] mr-4 text-3xl lg:text-4xl" />
            <span className="text-xs lg:text-sm text-[#006BB3]">ROBOTICS & AUTOMATION TRAINING</span>
          </div>
           
        </div>
      </div>
    </div>
  );
}
 
export default EntcStudying;