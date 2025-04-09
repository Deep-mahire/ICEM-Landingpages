import React from 'react';
import bgImage from '../../assets/images/Entc-Images/entc-bg.avif'; // Adjust the path to your background image
 
function EntcHero() {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          transform: 'rotate(180deg)',
          transformOrigin: 'center',
        }}
      ></div>
 
      {/* Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
 
      {/* Content Container */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center h-full p-4 md:px-16 md:py-8">
        {/* Left Side: Text Content (Hidden only on mobile) */}
        <div className=" sm:flex w-full md:w-1/2 flex-col justify-center text-left">
          <h1 className="text-2xl md:text-5xl text-white font-bold leading-tight mb-4">
            ENTC Engineering at Indira College of Engineering & Management
          </h1>
          <p className="hidden sm:flex text-lg md:text-3xl text-white leading-relaxed mb-2 ">
            2 Decades of Excellence in Education | 5 Specializations | 100% Placement Assistance
          </p>
          <p className="hidden sm:flex text-md md:text-2xl text-white leading-relaxed">
            ENTC at ICEM - Powering the Future with Electronics & Telecommunication!
          </p>
        </div>
 
        {/* Form Section with Responsive Padding */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div
            className="p-4 md:p-6 w-full max-w-md bg-opacity-70 rounded-lg shadow-md"
            style={{ backgroundColor: "rgba(2, 103, 112, 0.7)" }}
          >
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 bg-white text-black rounded border border-[#374151] focus:outline-none focus:ring-2 focus:ring-[#374151]"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 bg-white text-black rounded border border-[#374151] focus:outline-none focus:ring-2 focus:ring-[#374151]"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  id="mobile"
                  className="w-full p-2 bg-white text-black rounded border border-[#374151] focus:outline-none focus:ring-2 focus:ring-[#374151]"
                  placeholder="Enter your mobile number"
                  required
                />
              </div>
              {/* <div>
                <select
                  id="state"
                  className="w-full p-2 bg-white text-black rounded border border-[#374151] focus:outline-none focus:ring-2 focus:ring-[#374151]"
                  required
                >
                  <option value="">Select State</option>
                </select>
              </div>
              <div>
                <select
                  id="city"
                  className="w-full p-2 bg-white text-black rounded border border-[#374151] focus:outline-none focus:ring-2 focus:ring-[#374151]"
                  required
                >
                  <option value="">Select City</option>
                </select>
              </div> */}
              <div>
                <select
                  id="course"
                  className="w-full p-2 bg-white text-black rounded border border-[#374151] focus:outline-none focus:ring-2 focus:ring-[#374151]"
                  required
                >
                  <option value="">Select Course</option>
                  <option value="IT">Information Technology</option>
                  <option value="Mechanical">Mechanical Engineering</option>
                  <option value="ENTC">Electronics and Telecommunication Engineering</option>
                  <option value="Computer">Computer Engineering</option>
                  <option value="AIDS">Artificial Intelligence and Data Science (AIDS)</option>
                </select>
              </div>
              {/* <div>
                <select
                  id="program"
                  className="w-full p-2 bg-white text-black rounded border border-[#374151] focus:outline-none focus:ring-2 focus:ring-[#374151]"
                  required
                >
                  <option value="">Select Program</option>
                </select>
              </div> */}
              {/* <div>
                <input
                  type="number"
                  id="cet-score"
                  className="w-full p-2 bg-white text-black rounded border border-[#374151] focus:outline-none focus:ring-2 focus:ring-[#374151]"
                  placeholder="Enter CET Score"
                />
              </div> */}
              <div>
                <button
                  type="submit"
                  className="w-full py-2 bg-[#026670] text-white rounded-lg hover:bg-[#9FEDD7] hover:text-black"
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
 
export default EntcHero;