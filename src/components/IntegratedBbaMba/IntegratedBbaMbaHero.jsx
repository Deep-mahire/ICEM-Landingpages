import React from 'react';
import backgroundImage from '../../assets/Images/BbambaImages/image.png';
 
function IntegratedBbaMbaHero() {
  return (
    <div className="w-full h-[80vh] flex items-center justify-center relative overflow-hidden bg-gradient-to-r from-[#012C64] to-[#00183D]">
      <img
        src={backgroundImage}
        alt="Integrated BBA MBA"
        className="absolute top-0 left-0 w-auto h-full object-contain"
      />
 
      {/* New div container */}
      <div className="flex w-full h-full items-center justify-center relative z-10 px-4">
        {/* Text Section */}
        <div className="w-1/2 text-white text-center md:text-left">
 
        </div>
 
        {/* Component Section */}
        <div className="w-1/2 flex items-center justify-center">
        <div
            className="p-6 max-w-md w-full shadow-md ml-5 rounded-md"
            style={{ backgroundColor: "rgba(139, 197, 255, 0.3)" }}
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
                <select
                  id="course"
                  className="w-full p-1.5 bg-gradient-to-r from-[#FFFFFF] via-[#F0F8FF] to-[#d6F0FF] text-black rounded border border-[#FFD1A3] focus:outline-none focus:ring-2 focus:ring-[#FFB88C]"
                  required
                >
                  <option value="">Select Course</option>
                  <option value="Mech">Mechanical Engineering</option>
                  <option value="AI">Artificial Intelligence</option>
                  <option value="IT">Information Technology</option>
                  <option value="CS">Computer Science</option>
                  <option value="AIDS">Artificial Intelligence and Data Science</option>
                </select>
              </div>
       
              <div>
                <button
                  type="submit"
                  className="w-full py-2 bg-[#006BB3] text-white rounded-lg hover:bg-[#006BB3]"
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
 
 