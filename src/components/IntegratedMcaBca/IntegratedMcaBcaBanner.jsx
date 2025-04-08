import React from 'react';

const IntegratedBcaMcaBanner = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="py-4 md:py-4 px-8 sm:px-12 shadow-lg transform transition-all duration-700 ease-in-out bg-[#F5F0EB] overflow-hidden">
      <div className="mx-auto text-center">
        {/* Banner Heading */}
        <h1 className="text-2xl md:text-4xl font-extrabold mb-4 animate__animated animate__fadeIn animate__delay-1s text-[#555555]">
          Looking for the Best Integrated <span className="text-[#f37021]">BCA/MCA</span> College in Pune?
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl font-semibold mb-2 md:mb-4 animate__animated animate__fadeIn animate__delay-2s text-[#555555]">
          Your search ends at ICEM!
        </p>

        <button
  onClick={scrollToTop}
  className="bg-[#FCFAEE] text-[#555] font-bold py-3 px-8 rounded-full bordrer border-2 shadow-lg hover:bg-[#555555] hover:text-white transition-all duration-300 ease-in-out"
  style={{
    boxShadow: '0 4px 14px 0 #F5F0EB',
  }}
>
  Apply Now
</button>

        </div>
      </div>
  
  );
};

export default IntegratedBcaMcaBanner;
