import React, { useEffect } from 'react';
import {
  FaStar,
  FaBuilding,
  FaUsers,
  FaLaptop,
  FaGraduationCap,
  FaChartLine,
  FaTrophy,
  FaMedal,
  FaAward,
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MyImage from '../../assets/images/Com-Images/ICEM - Landing Page Banner (Infra).jpg';

const highlights = [
  {
    icon: <FaMedal className="text-4xl text-[#f37021]" />,
    text: (
      <>
        Ranked <b>49th</b> in <b>Top 100</b> Private Engineering Institutes and Ranked <b>61st</b> in <b>Top 140 Engineering</b> Institutes conducted by <b>Times of India Engineering Colleges</b>.
      </>
    ),
  },
  {
    icon: <FaAward className="text-4xl text-[#f37021]" />,
    text: (
      <>
        Ranking Survey – <b>2019</b><br />
        Winners of <b>SmartIndia Hackathon</b> for consecutive three years organized by Ministry of <b>HRD, AICTE</b> in association with <b>NASSCOM</b>.
      </>
    ),
  },
  {
    icon: <FaTrophy className="text-4xl text-[#f37021]" />,
    text: (
      <>
        Received <b>Outstanding Education Institute (West)</b> Award by National Education <b>Awards 2018</b>.
      </>
    ),
  },
];

const IntegratedBbaMbaStuddying = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row px-4 sm:px-6 md:px-10 lg:px-16 py-6 poppins-regular bg-[#FCFAEE] overflow-hidden">
      {/* Left Side */}
      <div className="w-full md:w-[65%] md:pr-8" data-aos="fade-right">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2">Invent, Integrate, Impact.</h1>
        <h2 className="text-xl sm:text-2xl md:text-2xl font-semibold text-[#f37021] mb-4">Integrated BBA + MBA</h2>
        <p className="text-sm sm:text-md md:text-lg mb-6 text-[#555555]">
          Indira College of Engineering & Management offers a career-focused 5-year Integrated BBA MBA course after 12th, blending classroom learning with real-world exposure. The vibrant campus features modern classrooms, libraries, labs, spacious hostels, reliable transportation, a hygienic canteen, active sports facilities, and dynamic student events. With expert mentoring and an industry-aligned curriculum, it’s one of the best colleges for integrated BBA MBA in Pune.
        </p>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {[
            { icon: <FaStar />, label: "2 Decades OF ACADEMIC EXCELLENCE" },
            { icon: <FaUsers />, label: "450+ LEADING RECRUITERS" },
            { icon: <FaBuilding />, label: "EXPOSURE TO INDUSTRIAL GUEST LECTURES" },
            { icon: <FaLaptop />, label: "HIGHEST PACKAGE OFFERED" },
            { icon: <FaGraduationCap />, label: "IT and Apple Labs" },
            { icon: <FaChartLine />, label: "EXCEPTIONAL GROWTH OPPORTUNITIES" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FCFAEE] p-4 shadow-md border border-[#f37021] rounded-lg flex items-center"
              data-aos="zoom-in"
            >
              <div className="text-2xl sm:text-3xl text-[#555555] mr-4">{item.icon}</div>
              <p className="text-sm sm:text-base text-[#333]">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Highlights Section */}
        <div className="p-2 rounded-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-2">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#f37021]/20 to-[#FCFAEE] rounded-xl p-6 shadow-sm flex flex-col items-center text-center"
              >
                <div className="mb-4">{item.icon}</div>
                <p className="text-[#555555] text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="w-full md:w-[35%] mt-10 md:mt-0" data-aos="fade-left">
        <img
          src={MyImage}
          alt="Indira College"
          className="w-full h-full object-cover rounded-lg shadow-lg border border-[#555555]"
        />
      </div>
    </div>
  );
};

export default IntegratedBbaMbaStuddying;
