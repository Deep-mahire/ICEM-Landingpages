import React, { useEffect } from 'react';
import {
  FaTools,
  FaIndustry,
  FaCogs,
  FaLightbulb,
  FaHandsHelping,
  FaChartLine,
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MyImage from '../../assets/images/infra.jpg'; // Same image as CompStudying
import img from '../../assets/images/Com-Images/image.png';

function ItStudying() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row px-8 md:px-16 py-6 poppins-regular">
      {/* 70% Left Side */}
      <div className="w-full md:w-[70%] pr-0 md:pr-8" data-aos="fade-right">
        <h1 className="text-4xl font-semibold text-left mb-4">Grow. Connect. Lead with ICEM!!</h1>
        <h1 className="text-2xl font-semebold text-[#390161] mb-4">Information Technology</h1>
        <p className="text-left text-md md:text-lg mb-2" data-aos="fade-up">
          Indira College of Engineering & Management offers a comprehensive Information Technology program that blends theoretical knowledge with hands-on experience. Nestled within a vast, vibrant, and lush green campus, the institute provides an inspiring learning environment. The state-of-the-art infrastructure creates the perfect setting for students to thrive academically and personally. Our students gain exposure to Advanced technologies, industrial practices and expert mentoring, preparing them for a successful career in the engineering field.
        </p>

        {/* 2x3 Grid for Cards */}
        <div className="grid grid-cols-2 grid-rows-3 gap-6 mb-4 mt-6">
          <div className="bg-[#F7F0FC] p-4 shadow-lg shadow-[#390161]/50 flex justify-between items-center rounded-lg" data-aos="zoom-in">
            <span className="flex flex-col md:flex-row items-center">
              <FaTools className="text-[#390161] mr-4 text-4xl" />
              <span className="text-sm text-center">15+ YEARS OF IT EXCELLENCE</span>
            </span>
          </div>
          <div className="bg-[#F7F0FC] p-4 shadow-lg shadow-[#390161]/50 flex justify-between items-center rounded-lg" data-aos="zoom-in">
            <span className="flex flex-col md:flex-row items-center">
              <FaIndustry className="text-[#390161] mr-4 text-4xl" />
              <span className="text-sm text-center">450+ INDUSTRY PARTNERS</span>
            </span>
          </div>
          <div className="bg-[#F7F0FC] p-4 shadow-lg shadow-[#390161]/50 flex justify-between items-center rounded-lg" data-aos="zoom-in">
            <span className="flex flex-col md:flex-row items-center">
              <FaCogs className="text-[#390161] mr-4 text-4xl" />
              <span className="text-sm text-center">INNOVATIVE R&D IN IT</span>
            </span>
          </div>
          <div className="bg-[#F7F0FC] p-4 shadow-lg shadow-[#390161]/50 flex justify-between items-center rounded-lg" data-aos="zoom-in">
            <span className="flex flex-col md:flex-row items-center">
              <FaLightbulb className="text-[#390161] mr-4 text-4xl" />
              <span className="text-sm text-center">EXPOSURE TO INDUSTRIAL GUEST LECTURES</span>
            </span>
          </div>
          <div className="bg-[#F7F0FC] p-4 shadow-lg shadow-[#390161]/50 flex justify-between items-center rounded-lg" data-aos="zoom-in">
            <span className="flex flex-col md:flex-row items-center">
              <FaHandsHelping className="text-[#390161] mr-4 text-4xl" />
              <span className="text-sm text-center">IT and Apple Labs</span>
            </span>
          </div>
          <div className="bg-[#F7F0FC] p-4 shadow-lg shadow-[#390161]/50 flex justify-between items-center rounded-lg" data-aos="zoom-in">
            <span className="flex flex-col md:flex-row items-center">
              <FaChartLine className="text-[#390161] mr-4 text-4xl" />
              <span className="text-sm text-center">EXCEPTIONAL GROWTH OPPORTUNITIES</span>
            </span>
          </div>
        </div>

        <div>
          <img src={img} className="h-auto" />
        </div>
      </div>

      {/* 30% Right Side */}
      <div className="w-full md:w-[45%] mt-12 flex flex-col justify-center h-full">
        <div className="flex-1">
          <img
            src={MyImage}
            alt="Indira College Image"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default ItStudying;
