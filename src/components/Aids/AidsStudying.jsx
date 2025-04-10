// import { FaRobot, FaDatabase, FaChartLine, FaLaptopCode, FaBrain, FaSearch } from "react-icons/fa";
// import MyImage from "../../assets/images/ICEM_College.avif"; // Example image
// import Image1 from "../../assets/images/IT-Images/app1.avif"; // Example image
// import Image2 from "../../assets/images/aidslab.avif"; // Example image
 
// function AidsStudying() {
//   return (
//     <div className="flex flex-col lg:flex-row px-4 md:px-8 lg:px-16 py-4 poppins-regular  gap-6">
//       {/* Left Side: Image Section */}
//       <div className="lg:w-[45%] w-full flex flex-col gap-4">
//         {/* Main Image */}
//         <div className="w-full h-[250px] md:h-[350px] ">
//           <img
//             src={MyImage}
//             alt="Main College Building"
//             className="w-full h-full object-cover rounded-xl shadow-lg"
//           />
//         </div>
 
//         {/* Second and Third Images in a Row on Mobile */}
//         <div className="grid grid-cols-2 gap-4">
//           <div className="h-[200px] md:h-[200px]">
//             <img
//               src={Image1}
//               alt="Lab Image 1"
//               className="w-full h-full object-cover rounded-xl shadow-lg"
//             />
//           </div>
//           <div className="h-[200px] md:h-[200px]">
//             <img
//               src={Image2}
//               alt="Lab Image 2"
//               className="w-full h-full object-cover rounded-xl shadow-lg"
//             />
//           </div>
//         </div>
//       </div>
 
//       {/* Right Side: Text and Cards Section */}
//       <div className="lg:w-[55%] w-full text-">
//         <h1 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-left mb-4">
//           Grow. Connect. Lead with Indira!!
//         </h1>
 
//         <p className="text-left text-sm sm:text-lg mb-6 leading-relaxed">
//         Indira College of Engineering & Management offers a comprehensive mechanical engineering program 
//         that blends theoretical knowledge with hands-on experience. Nestled within a vast, vibrant, and lush green campus,
//          the institute provides an inspiring learning environment where innovation meets excellence. The fresh, open spaces
//           and state-of-the-art infrastructure create the perfect setting for students to thrive academically and personally.
//            Our students gain exposure to cutting-edge technologies, industrial practices, and expert mentoring, preparing them 
//            for a successful career in the engineering field.
//         </p>
 
//         {/* Cards Section */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
//           {[
//             { icon: <FaRobot />, title: "AI IN COMPUTER ENGINEERING" },
//             { icon: <FaDatabase />, title: "DATA SCIENCE IN ENGINEERING" },
//             { icon: <FaChartLine />, title: "ADVANCED ALGORITHMS FOR ENGINEERING" },
//             { icon: <FaSearch />, title: "CUTTING-EDGE RESEARCH METHODS" },
//             { icon: <FaBrain />, title: "NEURAL NETWORKS & MACHINE LEARNING" },
//             { icon: <FaLaptopCode />, title: "BUILDING SMART SOFTWARE SYSTEMS" },
//           ].map((item, index) => (
//             <div
//               key={index}
//               className="bg-[#d4f1f7] p-3 sm:p-4 shadow-lg shadow-[#80d4f0]/50 flex items-center rounded-lg"
//             >
//               <div className="text-[#41b9d0] text-3xl sm:text-4xl mr-3">{item.icon}</div> {/* Icon */}
//               <span className="text-xs sm:text-sm text-[#003b4d]">{item.title}</span> {/* Title */}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
 
// export default AidsStudying;

import React, { useEffect } from 'react';
import { FaStar, FaBuilding, FaUsers, FaLaptop, FaGraduationCap, FaChartLine } from 'react-icons/fa'; // Added FaChartLine for the new card icon
import MyImage from '../../assets/images/Com-Images/ICEM - Landing Page Banner (Infra).jpg'; // Import your first PNG image
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import img from '../../assets/images/Com-Images/image.jpg';

function CompStudying() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      easing: 'ease-in-out', // Animation easing type
      once: true, // Animate only once when scrolling into view
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row px-8 md:px-16 py-6 poppins-regular">
      {/* 70% Left Side */}
      <div className="w-full md:w-[70%] pr-0 md:pr-8" data-aos="fade-right">
        <h1 className="text-4xl font-semibold text-left mb-2">Grow, Connect, Lead with Indira!!</h1>
        <h1 className="text-2xl font-semibold text-[#117577] ">AI-DS Engineering & Management</h1>
        <p className="text-left text-md md:text-lg mb-2" data-aos="fade-up">
          Indira College of Engineering & Management offers a comprehensive AI-DS Engineering program that
           blends theoretical knowledge with hands-on experience. Nestled within a vast, vibrant, and lush green campus, 
           the institute provides an inspiring learning environment. The state-of-the-art infrastructure create the perfect
            setting for students to thrive academically and personally. Our students gain exposure to Advanced technologies,
             industrial practices and expert mentoring, preparing them for a successful career in the engineering field.
        </p>

        {/* 2x3 Grid for Cards */}
        <div className="grid grid-cols-2 grid-rows-3 gap-2">
          {/* Card 1 */}
          <div className="bg-white p-4 shadow-lg shadow-blue-500/50 flex justify-between items-center rounded-lg" data-aos="zoom-in">
            <span className="flex flex-col md:flex-row items-center">
              <FaStar className="text-[#117577] mr-4 text-4xl" />
              <span className="text-sm text-center">2 DECADES OF ACADEMIC EXCELLENCE</span>
            </span>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-4 shadow-lg shadow-blue-500/50 flex justify-between items-center rounded-lg" data-aos="zoom-in">
            <span className="flex flex-col md:flex-row items-center">
              <FaUsers className="text-[#117577] mr-4 text-4xl" />
              <span className="text-sm text-center">450+ LEADING RECRUITERS</span>
            </span>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-4 shadow-lg shadow-blue-500/50 flex justify-between items-center rounded-lg" data-aos="zoom-in">
            <span className="flex flex-col md:flex-row items-center">
              <FaBuilding className="text-[#117577] mr-4 text-4xl" />
              <span className="text-sm text-center">INDUSTRY GUEST LECTURE & MENTORSHIP</span>
            </span>
          </div>
          {/* Card 4 */}
          <div className="bg-white p-4 shadow-lg shadow-blue-500/50 flex justify-between items-center rounded-lg" data-aos="zoom-in">
            <span className="flex flex-col md:flex-row items-center">
              <FaLaptop className="text-[#117577] mr-4 text-4xl" />
              <span className="text-sm text-center">HIGHEST PACKAGE OFFERED</span>
            </span>
          </div>
          {/* Card 5 */}
          <div className="bg-white p-4 shadow-lg shadow-blue-500/50 flex justify-between items-center rounded-lg" data-aos="zoom-in">
            <span className="flex flex-col md:flex-row items-center">
              <FaGraduationCap className="text-[#117577] mr-4 text-4xl" />
              <span className="text-sm text-center">IT & APPLE LABS</span>
            </span>
          </div>
          {/* Card 6 */}
          <div className="bg-white p-4 shadow-lg shadow-blue-500/50 flex justify-between items-center rounded-lg" data-aos="zoom-in">
            <span className="flex flex-col md:flex-row items-center">
              <FaChartLine className="text-[#117577] mr-4 text-4xl" /> {/* New Icon */}
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
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default CompStudying;
