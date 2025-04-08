// import React from "react";
 
// function EntcAdmission() {
//   const handleClick = () => {
//     window.scrollTo({
//       top: 0, // Scroll to the top of the page
//       behavior: "smooth", // Smooth scroll effect
//     });
//   }; 
//   return (
//     <div className="w-full p-6 bg-gradient-to-r from-[#3BA6A2] to-[#005D5D] text-white ">
//       {/* Main Heading */}
//       <h1 className="text-xl md:text-4xl font-bold text-center mb-2">
//         Looking for the Best ENTC Engineering College in Pune?
//       </h1>
 
//       {/* Sub-heading */}
//       <h2 className="text-lg md:text-3xl text-center font-semibold mb-2">
//         Your search ends at <span className="text-[#32E2E2]">ICEM!</span>
//       </h2>
 
//       {/* Admission Process Box */}
//       <div className=" text-white p-6 rounded-lg ">
//         <h3 className="text-xl md:text-2xl font-bold text-center mb-2">
//           Admission Process: <span className="text-white">Get Started Today!</span>
//         </h3>
//         <p className="text-center text-lg md:text-xl mb-4">
//           Engineering Admissions Open for 2025! Secure your seat & take the first step towards a future of innovation!
//         </p>
 
//         {/* Call-to-action button */}
//         <div className="flex justify-center">
//         <a
//         href="#apply"
//         onClick={handleClick} // Call handleClick on click
//         className=" bg-[#41b9d0] text-[#0c3249] py-2 px-8 rounded-full text-xl font-semibold shadow-md hover:bg-gray-200 hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out mt-8">
//          Apply Now
//       </a>
         
//         </div>
//       </div>
//     </div>
//   );
// }
 
// export default EntcAdmission;

import React from "react";
 
function EntcBanner() {
  const handleClick = () => {
    window.scrollTo({
      top: 0, // Scroll to the top of the page
      behavior: "smooth", // Smooth scroll effect
    });
  }; 
  return (
    <div className=" text-white py-8 md: px-6 text-center flex flex-col items-center justify-center">
      <h1 className="text-2xl md:text-4xl font-extrabold text-black mb-2">
        Searching for the Best AIDS College in Pune?
      </h1>
 
      <p className="text-lg md:text-2xl font-medium text-black">
        Your search ends at <span className="text-[#41b9d0] font-semibold">ICEM!</span>
      </p>
 
      <a
        href="#apply"
        onClick={handleClick} // Call handleClick on click
        className=" bg-[#41b9d0] text-[#0c3249] py-4 px-8 rounded-full text-xl font-semibold shadow-md hover:bg-gray-200 hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out mt-8">
         Apply Now
      </a>

    </div>
  );
}
 
export default EntcBanner;