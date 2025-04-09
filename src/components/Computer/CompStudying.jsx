import React, { useEffect, memo } from 'react';
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
import MyImage from '../../assets/images/infra.jpg';
import img from '../../assets/images/highlight.png';

const cardData = [
  { icon: <FaTools className="text-[#390161] mr-4 text-4xl" />, text: '15+ YEARS OF IT EXCELLENCE' },
  { icon: <FaIndustry className="text-[#390161] mr-4 text-4xl" />, text: '450+ INDUSTRY PARTNERS' },
  { icon: <FaCogs className="text-[#390161] mr-4 text-4xl" />, text: 'INNOVATIVE R&D IN IT' },
  { icon: <FaLightbulb className="text-[#390161] mr-4 text-4xl" />, text: 'EXPOSURE TO INDUSTRIAL GUEST LECTURES' },
  { icon: <FaHandsHelping className="text-[#390161] mr-4 text-4xl" />, text: 'IT and Apple Labs' },
  { icon: <FaChartLine className="text-[#390161] mr-4 text-4xl" />, text: 'EXCEPTIONAL GROWTH OPPORTUNITIES' },
];

function ItStudying() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <div className="flex flex-col md:flex-row px-8 md:px-16 py-6 poppins-regular">
      {/* Left Content */}
      <div className="w-full md:w-[70%] md:pr-8" data-aos="fade-right">
        <h1 className="text-4xl font-semibold mb-4">Grow. Connect. Lead with ICEM!!</h1>
        <h2 className="text-2xl font-semibold text-[#390161] mb-4">Information Technology</h2>
        <p className="text-md md:text-lg mb-2" data-aos="fade-up">
          Indira College of Engineering & Management offers a comprehensive Information Technology program that blends theoretical knowledge with hands-on experience. Nestled within a vast, vibrant, and lush green campus, the institute provides an inspiring learning environment. The state-of-the-art infrastructure creates the perfect setting for students to thrive academically and personally. Our students gain exposure to Advanced technologies, industrial practices and expert mentoring, preparing them for a successful career in the engineering field.
        </p>

        {/* Info Cards */}
        <div className="grid grid-cols-2 gap-6 my-6">
          {cardData.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#F7F0FC] p-4 shadow-lg shadow-[#390161]/50 flex items-center rounded-lg"
              data-aos="zoom-in"
            >
              <span className="flex flex-col md:flex-row items-center">
                {card.icon}
                <span className="text-sm text-center">{card.text}</span>
              </span>
            </div>
          ))}
        </div>

        <img src={img} alt="IT Students" className="h-auto" loading="lazy" />
      </div>

      {/* Right Image */}
      <div className="w-full md:w-[45%] mt-12 flex justify-center h-full">
        <img
          src={MyImage}
          alt="Indira Campus Infrastructure"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}

export default memo(ItStudying);
