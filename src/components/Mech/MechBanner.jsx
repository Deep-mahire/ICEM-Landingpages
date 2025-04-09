import React from 'react';

const CompBanner = () => {
  // Function to scroll to the top of the page when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="py-4 md:py-8 px-8 sm:px-12 rounded-lg shadow-lg transform transition-all duration-700 ease-in-out">
      <div className="mx-auto text-center">
        {/* Banner Heading */}
        <h1 className="text-2xl md:text-3xl font-extrabold mb-4 animate__animated animate__fadeIn animate__delay-1s">
          Looking for the Best Computer Engineering College in Pune?
        </h1>
        
        {/* Subheading */}
        <p className="text-lg sm:text-xl font-semibold mb-2 md:mb-8 animate__animated animate__fadeIn animate__delay-2s">
          Your search ends at ICEM!
        </p>
        
        {/* Button to Learn More */}
        <div className="flex justify-center mb-4">
          <button
            onClick={scrollToTop} // Call scrollToTop when the button is clicked
            className="bg-[#01224f] text-[#ffc80f] font-bold py-3 px-8 rounded-full shadow-lg hover:bg-[#2241ac] hover:text-[#F7F0FC] transition-all duration-300 ease-in-out"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompBanner;
