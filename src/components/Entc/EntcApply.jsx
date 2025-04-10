import React from "react";
import backgroundImage from "../../assets/images/plane.avif"; // Make sure the path is correct
 
const EntcApply = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0, // Scroll to the top of the page
      behavior: "smooth", // Smooth scroll effect
    });
  }; 
  return (
    <div
      className="bg-[#ffffff] py-10 px-8 md:px-16 text-center text-white mb-12 shadow-lg relative bg-contain bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Light gray overlay */}
      <div className="absolute inset-0 bg-[#F7F0FC] opacity-60 z-0"></div>
 
      <div className="relative z-10">
        <h2 className="text-3xl font-semibold text-[#026670] mb-6"> Admission Process: Get Started Today!</h2>
        <p className="text-sm md:text-lg mb-6 text-gray-700">
          Follow these simple steps to apply for the Information Technology
          program at ICEM College Pune:
        </p>
 
        {/* Container for steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 md:gap-8 mx-auto mb-8">
          {[  
            "Fill out the online application form on our website.",
            "Submit the required documents (mark sheets, ID, etc.)",
            "Pay the application fee securely online.",
            "Attend the counseling and interview session.",
            "Confirm your seat and join ICEM College!"
          ].map((step, index) => (
            <div
              key={index}
              className="relative bg-[#001E5D] p-6 shadow-xl w-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              style={{ backgroundColor: "rgba(18, 132, 143, 0.6)" }}
            >
              <div
                className="absolute top-[-15px] left-[-15px] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
                style={{ backgroundColor: "#026670" }}
              >
                {index + 1}
              </div>
              <p className="text-lg text-white">{step}</p>
            </div>
          ))}
        </div>
 
        {/* Apply Now Button with Pulsating Effect */}
        
        <a
        href="#apply"
        onClick={handleClick} // Call handleClick on click
        className=" bg-[#41b9d0] text-[#0c3249] py-4 px-8 rounded-full text-xl font-semibold shadow-md hover:bg-gray-200 hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out mt-8">
         Apply Now
      </a>
      </div>
    </div>
  );
};
 
export default EntcApply;
 