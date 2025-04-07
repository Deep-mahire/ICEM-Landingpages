  import React from "react";
  import robotImage from "../../assets/images/AIDS-Imagegs/aids-robot-tab (1).avif";

  function AidsHero() {
    return (
      <div className="relative flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-16 pt-12 min-h-auto bg-gradient-to-r from-[#0c3249] via-[#1e5f76] to-[#41b9d0]">
        {/* Dark overlay for better contrast */}
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

        {/* Left Side: Robot Image + Overlay Text */}
        <div className="hidden sm:block relative w-full lg:w-1/2 flex items-center justify-center">
          <img
            src={robotImage}
            alt="Robot"
            className="animate-robot w-full h-auto max-h-[90vh] object-contain"
          />

          {/* Overlay Text on Robot */}
          <div className="absolute top-10  left-8 lg:left-8 xl:left-16 p-6 md:p-8 z-20 text-start text-white">
            <h1 className="text-xl md:text-5xl lg:text-5xl font-bold leading-tight">
              Decode Your Future with AI-DS at ICEM!
            </h1>
            <p className="hidden md:block md:text-xl lg:text-2xl font-semibold mt-4 ">
              2 Decades of Excellence | 5 Specializations | 100% Placement Assistance
            </p>
            <p className="hidden md:block text-md md:text-lg lg:text-3xl font-semibold mt-4">
              Apply now for the exciting field of AI-DS Research & Development!
            </p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="relative z-20 w-full lg:w-1/2 flex flex-col items-center lg:items-end">
          <div className="p-4 md:p-6 max-w-sm md:max-w-md w-full shadow-md bg-opacity-30 bg-[#41b9d0] border-2 border-[#1e5f76] rounded-lg">
            <form className="space-y-3 md:space-y-4">
              {[{ type: "text", id: "name", placeholder: "Enter your name" },
                { type: "email", id: "email", placeholder: "Enter your email" },
                { type: "tel", id: "mobile", placeholder: "Enter your mobile number" }].map((input, index) => (
                <input
                  key={index}
                  type={input.type}
                  id={input.id}
                  className="w-full p-2 bg-gradient-to-r from-white via-[#f0f8ff] to-[#d6f0ff] text-black rounded border border-[#8BC5FF] focus:outline-none focus:ring-2 focus:ring-[#006BB3]"
                  placeholder={input.placeholder}
                  required
                />
              ))}
              {[{ id: "course", options: ["Select Course", "Information Technology", "Mechanical Engineering", "Electronics and Telecommunication Engineering", "Computer Engineering", "Artificial Intelligence and Data Science (AIDS)"] }]
              .map((select, index) => (
                <select
                  key={index}
                  id={select.id}
                  className="w-full p-2 bg-gradient-to-r from-white via-[#f0f8ff] to-[#d6f0ff] text-black rounded border border-[#8BC5FF] focus:outline-none focus:ring-2 focus:ring-[#006BB3]"
                  required
                >
                  {select.options.map((option, idx) => (
                    <option key={idx} value={option === "Select Course" ? "" : option}>
                      {option}
                    </option>
                  ))}
                </select>
              ))}
              
              <button type="submit" className="w-full py-2 bg-[#006BB3] text-white rounded-lg hover:bg-[#00508D]">
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Animation Styles */}
        <style>
          {`
            @keyframes robotMove {
              0%, 100% { transform: scaleX(-1) translateX(-30px) translateY(-10px); }
              25% { transform: scaleX(-1) translateX(-15px) translateY(-20px); }
              50% { transform: scaleX(-1) translateX(30px) translateY(-10px); }
              75% { transform: scaleX(-1) translateX(15px) translateY(-20px); }
            }
            .animate-robot { animation: robotMove 5s ease-in-out infinite alternate; }
          `}
        </style>
      </div>
    );
  }

  export default AidsHero;
