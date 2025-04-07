import React, { useEffect } from 'react';
import { FaStar, FaBuilding, FaUsers, FaLaptop, FaGraduationCap, FaChartLine } from 'react-icons/fa'; // Added FaChartLine for the new card icon
import MyImage from '../../assets/images/Com-Images/ICEM - Landing Page Banner (Infra).jpg'; // Import your first PNG image
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import img from '../../assets/images/Com-Images/image.png';

function IntegratedBbaMbaStuddying() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      easing: 'ease-in-out', // Animation easing type
      once: true, // Animate only once when scrolling into view
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row px-8 md:px-16 py-6 poppins-regular bg-[#FCFAEE]">
      {/* 70% Left Side */}
      <div className="w-full md:w-[70%] pr-0 md:pr-8" data-aos="fade-right">
        <h1 className="text-4xl font-semibold text-left mb-2">Invent. Integrate. Impact.</h1>
        <h1 className="text-2xl font-semebold text-[#f37021] ">Integrated BBA and MBA</h1>
        <p className="text-left text-md md:text-lg mb-2" data-aos="fade-up">
          Indira College of Engineering & Management offers a comprehensive Computer engineering program that blends theoretical knowledge with hands-on experience. Nestled within a vast, vibrant, and lush green campus, the institute provides an inspiring learning environment. The state-of-the-art infrastructure create the perfect setting for students to thrive academically and personally. Our students gain exposure to Advanced technologies, industrial practices and expert mentoring, preparing them for a successful career in the engineering field.
        </p>

        {/* 2x3 Grid for Cards */}
        <div className="grid grid-cols-2 grid-rows-3 gap-2">
          {/* Card 1 */}
          <div className="bg-[#FCFAEE] p-4 shadow-lg border-1 border-[#f37021] flex justify-between items-center rounded-lg" data-aos="zoom-in">
            <span className="flex flex-col md:flex-row items-center">
              <FaStar className="text-[#555555] mr-4 text-4xl" />
              <span className="text-sm text-center">2 Decades OF ACADEMIC EXCELLENCE</span>
            </span>
          </div>
          {/* Card 2 */}
          <div className="bg-[#FCFAEE] p-4 shadow-lg border-1 border-[#f37021]  flex justify-between items-center rounded-lg" data-aos="zoom-in">
            <span className="flex flex-col md:flex-row items-center">
              <FaUsers className="text-[#555555] mr-4 text-4xl" />
              <span className="text-sm text-center">450+ LEADING RECRUITERS</span>
            </span>
          </div>
          {/* Card 3 */}
          <div className="bg-[#FCFAEE] p-4 shadow-lg border-1 border-[#f37021]  flex justify-between items-center rounded-lg" data-aos="zoom-in">
            <span className="flex flex-col md:flex-row items-center">
              <FaBuilding className="text-[#555555] mr-4 text-4xl" />
              <span className="text-sm text-center">EXPOSURE TO INDUSTRIAL GUEST LECTURES</span>
            </span>
          </div>
          {/* Card 4 */}
          <div className="bg-[#FCFAEE] p-4 shadow-lg border-1 border-[#f37021]  flex justify-between items-center rounded-lg" data-aos="zoom-in">
            <span className="flex flex-col md:flex-row items-center">
              <FaLaptop className="text-[#555555] mr-4 text-4xl" />
              <span className="text-sm text-center">HIGHEST PACKAGE OFFERED</span>
            </span>
          </div>
          {/* Card 5 */}
          <div className="bg-[#FCFAEE] p-4 shadow-lg border-1 border-[#f37021]  flex justify-between items-center rounded-lg" data-aos="zoom-in">
            <span className="flex flex-col md:flex-row items-center">
              <FaGraduationCap className="text-[#555555] mr-4 text-4xl" />
              <span className="text-sm text-center">IT and Apple Labs</span>
            </span>
          </div>
          {/* Card 6 */}
          <div className="bg-[#FCFAEE] p-4 shadow-lg border-1 border-[#f37021]  flex justify-between items-center rounded-lg" data-aos="zoom-in">
            <span className="flex flex-col md:flex-row items-center">
              <FaChartLine className="text-[#555555] mr-4 text-4xl" /> {/* New Icon */}
              <span className="text-sm text-center">EXCEPTIONAL GROWTH OPPORTUNITIES</span> {/* New Text */}
            </span>
          </div>
        </div>
        <div>
          <img src={img} alt="" className=" " />
        </div>
      </div>

      {/* 30% Right Side with 3 Images */}
      <div className="w-full md:w-[45%] mt-12 flex flex-col justify-center h-full">
        {/* First Image */}
        <div className="flex-1">
          <img
            src={MyImage}
            alt="Indira College Image"
            className="w-full h-full object-cover rounded-lg shadow-lg x   border-[#555555]"
          />
        </div>
      </div>
    </div>
  );
}

export default IntegratedBbaMbaStuddying;
