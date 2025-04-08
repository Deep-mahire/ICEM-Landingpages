import React from 'react';
import backgroundImage from '/public/BBA-MBA/ChatGPT Image Apr 5, 2025, 06_51_42 PM.png';

function IntegratedBbaMbaHero() {
  return (
    <div className="w-full h-auto lg:min-h-[80vh] md:min-h-[40vh] flex items-center justify-center relative overflow-hidden bg-[#001842]">
      {/* Image - visible only on md and above */}
      <img
        src={backgroundImage}
        alt="Integrated BBA/MBA"
        className="hidden md:block absolute top-0 left-4 right-4 bottom-4 w-auto h-[100%] object-contain  sm:pl-10 md:pl-16"
      />

      {/* Main content */}
      <div className="flex flex-col md:flex-row w-full h-full items-center justify-center relative z-10 px-4 py-8 md:py-0">
        
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-white text-center md:text-left mb-6 md:mb-0">
          {/* Show only on mobile */}
          <div className="block md:hidden mb-6">
            <h1 className="text-2xl font-bold mb-2">
              Integrated <span className='text-[#f37021]'>BBA + MBA</span> Program
            </h1>
            <p className="text-sm">
              Join our industry-ready 5-year Integrated BBA+MBA program and take your career to the next level!
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div
            className="p-6 w-full max-w-sm sm:max-w-md shadow-md md:ml-5 rounded-md"
            style={{ backgroundColor: 'rgba(139, 197, 255, 0.3)' }}
          >
            <form className="space-y-3 p-1">
              <div>
                <input
                  type="text"
                  id="name"
                  className="w-full p-1.5 bg-gradient-to-r from-[#FFFFFF] via-[#F0F8FF] to-[#d6F0FF] text-black rounded border border-[#FFD1A3] focus:outline-none focus:ring-2 focus:ring-[#FFB88C]"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  className="w-full p-1.5 bg-gradient-to-r from-[#FFFFFF] via-[#F0F8FF] to-[#d6F0FF] text-black rounded border border-[#FFD1A3] focus:outline-none focus:ring-2 focus:ring-[#FFB88C]"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  id="mobile"
                  className="w-full p-1.5 bg-gradient-to-r from-[#FFFFFF] via-[#F0F8FF] to-[#d6F0FF] text-black rounded border border-[#FFD1A3] focus:outline-none focus:ring-2 focus:ring-[#FFB88C]"
                  placeholder="Enter your mobile number"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-2 bg-[#006BB3] text-white rounded-lg hover:bg-[#005a99]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}

export default IntegratedBbaMbaHero;
