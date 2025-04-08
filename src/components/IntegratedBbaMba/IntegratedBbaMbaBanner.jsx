import React from 'react';

const IntegratedBbaMbaBanner = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="py-8 px-4 sm:px-8 md:px-16 bg-[#f7f3ef] shadow-md transition-all duration-700 ease-in-out">
      <div className="max-w-5xl mx-auto text-center space-y-4">
        
        {/* Main Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug text-[#555555]">
          Looking for the Best Integrated <span className="text-[#f37021]">BBA/MBA</span> College in Pune?
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl text-[#555555] font-semibold">
          Your search ends at ICEM!
        </p>

        {/* CTA Button */}
        <div>
          <button
            onClick={scrollToTop}
            className="bg-[#F7F0FC] text-[#555555] font-bold py-2.5 px-8 rounded-full shadow-md hover:bg-[#555555] hover:text-white transition-all duration-300"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntegratedBbaMbaBanner;
