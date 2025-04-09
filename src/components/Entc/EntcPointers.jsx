import React from 'react'

const EntcPointers = () => {
  return (
    <div></div>
  )
}

export default EntcPointers

// import { useEffect } from 'react';
// import { FaCog } from 'react-icons/fa';  // Mechanical cog icon
// import { FaTools } from 'react-icons/fa'; // Tools icon
// import { FaDollarSign } from 'react-icons/fa'; // Factory icon
 
// // Import AOS for animations
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // Import AOS styles
 
// function EntcPointers() {
//   useEffect(() => {
//     // Initialize AOS
//     AOS.init({
//       duration: 1000, // Animation duration
//       once: true, // Animation happens only once
//     });
//   }, []);
 
//   return (
//     <div className="px-8 md:px-10 lg:px-16 py-6 md:py-12 ">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 lg:gap-16">
//         {/* Card 1: Program Format */}
//         <div
//           className="bg-[#9FEDD7] p-6 shadow-lg flex flex-col items-center text-center"
//           data-aos="fade-up"
//         >
//           <FaCog size={50} className="text-[#026670]" />
//           <h2 className="text-lg  text-sm md:text-2xl font-medium">Program Format</h2>
//           <p className="mt-2 text-sm md:text-2xl font-bold">Offline</p> {/* Responsive text */}
//         </div>
 
//         {/* Card 2: Duration */}
//         <div
//           className="bg-[#9FEDD7] p-6 shadow-lg flex flex-col items-center text-center"
//           data-aos="fade-up"
//         >
//           <FaTools size={50} className="text-[#026670] " />
//           <h2 className="text-lg text-sm md:text-2xl font-medium">Duration</h2>
//           <p className="mt-2 text-sm md:text-2xl font-bold">4 Years</p> {/* Responsive text */}
//         </div>
 
//         {/* Card 3: Program Fees */}
//         <div
//           className="bg-[#9FEDD7] p-6 shadow-lg flex flex-col items-center text-center"
//           data-aos="fade-up"
//         >
//           <FaDollarSign size={50} className="text-[#026670]" />
//           <h2 className="text-lg text-sm md:text-2xl font-medium">Highest CTC</h2>
//           <p className="mt-2 text-sm md:text-2xl font-bold">27 LPA</p> {/* Responsive text */}
//         </div>
//       </div>
//     </div>
//   );
// }
 
// export default EntcPointers;