import React, { useEffect } from 'react';
import {
  FaStar,
  FaBuilding,
  FaUsers,
  FaLaptop,
  FaGraduationCap,
  FaChartLine,
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MyImage from '../../assets/images/infra.jpg';
import img from '../../assets/images/Com-Images/image.png';

function ItStudying() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  const cards = [
    { icon: <FaStar className="text-blue-500 mr-4 text-4xl" />, text: '15+ YEARS OF IT EXCELLENCE' },
    { icon: <FaUsers className="text-blue-500 mr-4 text-4xl" />, text: '450+ INDUSTRY PARTNERS' },
    { icon: <FaBuilding className="text-blue-500 mr-4 text-4xl" />, text: 'EXPOSURE TO INDUSTRIAL GUEST LECTURES' },
    { icon: <FaLaptop className="text-blue-500 mr-4 text-4xl" />, text: 'INNOVATIVE R&D IN IT' },
    { icon: <FaGraduationCap className="text-blue-500 mr-4 text-4xl" />, text: 'IT and Apple Labs' },
    { icon: <FaChartLine className="text-blue-500 mr-4 text-4xl" />, text: 'EXCEPTIONAL GROWTH OPPORTUNITIES' },
  ];

  return (
    <div className="flex flex-col md:flex-row px-8 md:px-16 py-6 poppins-regular">
      {/* Left Side */}
      <div className="w-full md:w-[70%] pr-0 md:pr-8" data-aos="fade-right">
        <h1 className="text-4xl font-semibold text-left mb-4">Grow. Connect. Lead with ICEM!!</h1>
        <h1 className="text-2xl font-semebold text-blue-700 mb-4">Information Technology</h1>
        <p className="text-left text-md md:text-lg mb-2" data-aos="fade-up">
          Indira College of Engineering & Management offers a comprehensive Information Technology program that blends theoretical knowledge with hands-on experience. Nestled within a vast, vibrant, and lush green campus, the institute provides an inspiring learning environment. The state-of-the-art infrastructure creates the perfect setting for students to thrive academically and personally. Our students gain exposure to advanced technologies, industrial practices, and expert mentoring, preparing them for a successful career in the engineering field.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-2 grid-rows-3 gap-6 mb-4 mt-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white p-4 shadow-lg shadow-blue-500/50 flex justify-between items-center rounded-lg"
              data-aos="zoom-in"
            >
              <span className="flex flex-col md:flex-row items-center">
                {card.icon}
                <span className="text-sm text-center">{card.text}</span>
              </span>
            </div>
          ))}
        </div>

        <img src={img} alt="Student Highlight" className="h-auto" />
      </div>

      {/* Right Side */}
      <div className="w-full md:w-[45%] mt-12 flex flex-col justify-center h-full">
        <img
          src={MyImage}
          alt="Indira College"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}

export default ItStudying;
