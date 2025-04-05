import React from 'react';

const IntegratedBbaMbaBanner = () => {
  // Function to scroll to the top of the page when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="py-4 md:py-4 px-8 sm:px-12  shadow-lg transform transition-all duration-700 ease-in-out bg-[#f7f3ef]">
      <div className="mx-auto text-center">
        {/* Banner Heading */}
        <h1 className="text-2xl md:text-3xl font-extrabold mb-4 animate__animated animate__fadeIn animate__delay-1s text-[#555555]">
          Looking for the Best Integrated BBA/MBA College in Pune?
        </h1>
        
        {/* Subheading */}
        <p className="text-lg sm:text-xl text-[#555555] font-semibold mb-2 md:mb-4 animate__animated animate__fadeIn animate__delay-2s ">
          Your search ends at ICEM!
        </p>
        
        {/* Button to Learn More */}
        <div className="flex justify-center">
          <button
            onClick={scrollToTop} // Call scrollToTop when the button is clicked
            className="bg-[#F7F0FC] text-[#555555] font-bold py-3 px-8 rounded-full shadow-lg hover:bg-[#555555] hover:text-white transition-all duration-300 ease-in-out"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntegratedBbaMbaBanner;
