import React, { useEffect } from 'react';
import {
  FaTools,
  FaIndustry,
  FaCogs,
  FaLightbulb,
  FaHandsHelping,
  FaChartLine,
} from 'react-icons/fa';
import std1 from '../../assets/images/Com-Images/image.png';
import indira from '../../assets/images/infra.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function MechStudying() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row px-8 md:px-16 py-6 poppins-regular">
      {/* Left Section: Text + Cards */}
      <div className="w-full md:w-[70%] pr-0 md:pr-8" data-aos="fade-right">
        <h1 className="text-4xl font-semibold text-left mb-4 text-[#01224F]">Invent. Integrate. Impact.</h1>
        <h1 className="text-2xl font-semebold text-[#FFC80F] mb-4">Mechanical Engineering</h1>
        <p className="text-left text-md md:text-lg mb-2 text-[#01224F]" data-aos="fade-up">
          Indira College of Engineering & Management offers a comprehensive mechanical engineering program that blends theoretical knowledge with hands-on experience. Nestled within a vast, vibrant, and lush green campus, the institute provides an inspiring learning environment where innovation meets excellence. The fresh, open spaces and state-of-the-art infrastructure create the perfect setting for students to thrive academically and personally. Our students gain exposure to cutting-edge technologies, industrial practices, and expert mentoring, preparing them for a successful career in the engineering field.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 grid-rows-3 gap-6 mb-4">
          <div className="bg-white p-4 shadow-sm shadow-[#FFC80F] flex justify-between items-center rounded-lg" data-aos="zoom-in">
            <span className="flex flex-col md:flex-row items-center">
              <FaTools className="text-[#01224F] mr-4 text-4xl" />
              <span className="text-sm text-center text-[#01224F]">2 Decades OF MECHANICAL EXCELLENCE</span>
            </span>
          </div>
          <div className="bg-white p-4 shadow-sm shadow-[#FFC80F] flex justify-between items-center rounded-lg" data-aos="zoom-in">
            <span className="flex flex-col md:flex-row items-center">
              <FaIndustry className="text-[#01224F] mr-4 text-4xl" />
              <span className="text-sm text-center text-[#01224F]">450+ INDUSTRY PARTNERS</span>
            </span>
          </div>
          <div className="bg-white p-4 shadow-sm shadow-[#FFC80F] flex justify-between items-center rounded-lg" data-aos="zoom-in">
            <span className="flex flex-col md:flex-row items-center">
              <FaCogs className="text-[#01224F] mr-4 text-4xl" />
              <span className="text-sm text-center text-[#01224F]">INNOVATIVE RESEARCH & DEVELOPMENT</span>
            </span>
          </div>
          <div className="bg-white p-4 shadow-sm shadow-[#FFC80F] flex justify-between items-center rounded-lg" data-aos="zoom-in">
            <span className="flex flex-col md:flex-row items-center">
              <FaLightbulb className="text-[#01224F] mr-4 text-4xl" />
              <span className="text-sm text-center text-[#01224F]">EXPOSURE TO INDUSTRIAL GUEST LECTURES</span>
            </span>
          </div>
          <div className="bg-white p-4 shadow-sm shadow-[#FFC80F] flex justify-between items-center rounded-lg" data-aos="zoom-in">
            <span className="flex flex-col md:flex-row items-center">
              <FaHandsHelping className="text-[#01224F] mr-4 text-4xl" />
              <span className="text-sm text-center text-[#01224F]">HANDS-ON TRAINING IN WORKSHOPS</span>
            </span>
          </div>
          <div className="bg-white p-4 shadow-sm shadow-[#FFC80F] flex justify-between items-center rounded-lg" data-aos="zoom-in">
            <span className="flex flex-col md:flex-row items-center">
              <FaChartLine className="text-[#01224F] mr-4 text-4xl" />
              <span className="text-sm text-center text-[#01224F]">EXCEPTIONAL GROWTH OPPORTUNITIES</span>
            </span>
          </div>
        </div>

        <div className="">
          <img src={std1} alt="Student" className="w-full h-auto object-cover rounded-lg" />
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-[45%] mt-12 flex flex-col justify-center h-full">
        <div className="flex-1">
          <img src={indira} alt="Indira College" className="w-full h-full object-cover rounded-lg shadow-sm" />
        </div>
      </div>
    </div>
  );
}

export default MechStudying;