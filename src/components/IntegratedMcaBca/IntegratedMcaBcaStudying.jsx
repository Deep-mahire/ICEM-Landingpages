// import React, { useEffect } from 'react';
// import { FaStar, FaBuilding, FaUsers, FaLaptop, FaGraduationCap, FaChartLine } from 'react-icons/fa'; // Added FaChartLine for the new card icon
// import MyImage from '../../assets/images/Com-Images/ICEM - Landing Page Banner (Infra).jpg'; // Import your first PNG image
// import AOS from 'aos'; // Import AOS
// import 'aos/dist/aos.css'; // Import AOS styles
// import img from '../../assets/images/Com-Images/highlight.jpg';

// const highlights = [
//   {
//     icon: <FaMedal className="text-4xl text-[#f37021]" />,
//     text: (
//       <>
//         Ranked <b>49th</b> in <b>Top 100</b> Private Engineering Institutes and Ranked <b>61st</b> in <b>Top 140 Engineering</b> Institutes conducted by <b>Times of India Engineering Colleges</b>.
//       </>
//     ),
//   },
//   {
//     icon: <FaAward className="text-4xl text-[#f37021]" />,
//     text: (
//       <>
//         Ranking Survey – <b>2019</b><br />
//         Winners of <b>SmartIndia Hackathon</b> for consecutive three years organized by Ministry of <b>HRD, AICTE</b> in association with <b>NASSCOM</b>.
//       </>
//     ),
//   },
//   {
//     icon: <FaTrophy className="text-4xl text-[#f37021]" />,
//     text: (
//       <>
//         Received <b>Outstanding Education Institute (West)</b> Award by National Education <b>Awards 2018</b>.
//       </>
//     ),
//   },
// ];
// function BcaStudying() {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000, // Duration of the animation
//       easing: 'ease-in-out', // Animation easing type
//       once: true, // Animate only once when scrolling into view
//     });
//   }, []);

//   return (
//     <div className="flex flex-col md:flex-row px-8 md:px-16 py-6 poppins-regular bg-[#F5F0EB] overflow-hidden">
//       {/* 70% Left Side */}
//       <div className="w-full md:w-[70%] pr-0 md:pr-8" data-aos="fade-right">
//         <h1 className="text-4xl font-semibold text-left mb-4 text-[#555555]">Invent, Integrate, Impact.</h1>
//         <h1 className="text-2xl font-semebold text-orange-500">Integrated BCA + MCA</h1>
//         <p className="text-left text-md md:text-lg mb-8 text-[#555555]" data-aos="fade-up">
//         Indira College of Engineering & Management offers a future-focused <b>5-year Integrated BCA-MCA course after 12th, </b>
//         blending tech education with hands-on experience. The campus features <b>advanced computer labs </b>, modern <b>libraries </b>,
//          digital <b> laboratories </b>, spacious <b>hostels</b>, reliable <b>transportation</b>, a hygienic <b>canteen </b>, and top-notch <b>sports </b> facilities. 
//          With regular tech <b>events</b>, expert mentorship, and an industry-aligned curriculum, it's one of the <b>best colleges for
//           integrated BCA MCA. </b>
//         </p>

//         {/* 2x3 Grid for Cards */}
//         <div className="grid grid-cols-2 grid-rows-3 gap-2">
//           {/* Card 1 */}
//           <div className="bg-[#FCFAEE] p-6 shadow-lg shadow-blue-500/20 flex justify-between items-center rounded-lg" data-aos="zoom-in">
//             <span className="flex flex-col md:flex-row items-center">
//               <FaStar className="text-orange-500 mr-4 text-4xl" />
//               <span className="text-sm text-center text-[#555555]">2 Decades OF ACADEMIC EXCELLENCE</span>
//             </span>
//           </div>
//           {/* Card 2 */}
//           <div className="bg-[#FCFAEE] p-4 shadow-lg shadow-blue-500/20 flex justify-between items-center rounded-lg" data-aos="zoom-in">
//             <span className="flex flex-col md:flex-row items-center">
//               <FaUsers className="text-orange-500 mr-4 text-4xl" />
//               <span className="text-sm text-center text-[#555555]">450+ LEADING RECRUITERS</span>
//             </span>
//           </div>
//           {/* Card 3 */}
//           <div className="bg-[#FCFAEE] p-4 shadow-lg shadow-blue-500/20 flex justify-between items-center rounded-lg" data-aos="zoom-in">
//             <span className="flex flex-col md:flex-row items-center">
//               <FaBuilding className="text-orange-500 mr-4 text-4xl" />
//               <span className="text-sm text-center text-[#555555]">EXPOSURE TO INDUSTRIAL GUEST LECTURES</span>
//             </span>
//           </div>
//           {/* Card 4 */}
//           <div className="bg-[#FCFAEE] p-4 shadow-lg shadow-blue-500/20 flex justify-between items-center rounded-lg" data-aos="zoom-in">
//             <span className="flex flex-col md:flex-row items-center">
//               <FaLaptop className="text-orange-500 mr-4 text-4xl" />
//               <span className="text-sm text-center text-[#555555]">HIGHEST PACKAGE OFFERED</span>
//             </span>
//           </div>
//           {/* Card 5 */}
//           <div className="bg-[#FCFAEE] p-4 shadow-lg shadow-blue-500/20 flex justify-between items-center rounded-lg" data-aos="zoom-in">
//             <span className="flex flex-col md:flex-row items-center">
//               <FaGraduationCap className="text-orange-500 mr-4 text-4xl" />
//               <span className="text-sm text-center text-[#555555]">IT and Apple Labs</span>
//             </span>
//           </div>
//           {/* Card 6 */}
//           <div className="bg-[#FCFAEE] p-4 shadow-lg shadow-blue-500/20 flex justify-between items-center rounded-lg" data-aos="zoom-in">
//             <span className="flex flex-col md:flex-row items-center">
//               <FaChartLine className="text-orange-500 mr-4 text-4xl" /> {/* New Icon */}
//               <span className="text-sm text-center text-[#555555]">EXCEPTIONAL GROWTH OPPORTUNITIES</span> {/* New Text */}
//             </span>
//           </div>
//         </div>
//         <div>
//           <img src={img} alt="" className="mb-4  " />
//         </div>
//       </div>

//       {/* 30% Right Side with 3 Images */}
//       <div className="w-full md:w-[45%] mt-12 flex flex-col justify-center h-full">
//         {/* First Image */}
//         <div className="flex-1">
//           <img
//             src={MyImage}
//             alt="Indira College Image"
//             className="w-full h-full object-cover rounded-lg shadow-lg"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BcaStudying;

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
        <h2 className="text-xl sm:text-2xl md:text-2xl font-semibold text-[#f37021] mb-4">Integrated BCA + MCA</h2>
        <p className="text-sm sm:text-md md:text-lg mb-6 text-[#555555]">
        Indira College of Engineering & Management offers a future-focused <b>5-year Integrated BCA-MCA course after 12th, </b>
        blending tech education with hands-on experience. The campus features <b>advanced computer labs </b>, modern <b>libraries </b>,
         digital <b> laboratories </b>, spacious <b>hostels</b>, reliable <b>transportation</b>, a hygienic <b>canteen </b>, and top-notch <b>sports </b> facilities. 
         With regular tech <b>events</b>, expert mentorship, and an industry-aligned curriculum, it's one of the <b>best colleges for
          integrated BCA MCA. </b>
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