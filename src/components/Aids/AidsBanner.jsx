import React from "react";
 
function AidsBanner() {
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
 
export default AidsBanner;