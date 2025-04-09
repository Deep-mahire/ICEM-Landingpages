import { useState, useEffect } from "react";
import backgroundImage from "../../assets/images/Com-Images/herocomp-e.avif"; // Adjust the image source
import gearImage from "../../assets/images/gears.png"; // Adjust the image source

function MechHero() {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const words = [
      "Innovation",
      "Automation",
      "Precision",
      "Revolution",
    ];

    const handleTyping = () => {
      const currentWord = words[currentWordIndex];

      if (!isDeleting) {
        if (currentText === currentWord) {
          setTimeout(() => setIsDeleting(true), 1000);
          return;
        }
        setCurrentText(currentWord.substring(0, currentText.length + 1));
      } else {
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          return;
        }
        setCurrentText(currentWord.substring(0, currentText.length - 1));
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? 80 : 120);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <div
      className="relative pt-8 h-auto bg-cover bg-right md:bg-center bg-no-repeat text-white flex items-start"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Add custom style for selected text */}
      <style>
        {`
          ::selection {
            background-color:#006BB3; /* Blue background */
            color: #fff8f0; /* Off-white text color for better contrast */
          }
        `}
      </style>

      {/* Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-10"></div>

      {/* Small Half Gear Image */}
      <img
        src={gearImage}
        alt="Half Gear"
        className="absolute bottom-0 left-0 w-2/6 z-5 transform scale-x-[-1] mb-4 sm:mb-8 md:mb-16"
      />

      {/* Wrapper for Heading and Form */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start z-20 w-full mb-4 sm:mb-6">
        
        {/* Heading - Visible on all screen sizes */}
        <div className="mt-4  py-2 px-4 text-center lg:text-left">
          <p className="font-semibold text-[#006BB3] text-3xl md:text-5xl md:mb-5">
            Computer Engineering at Indira College of Engineering & Management
          </p>
          <div className="hidden lg:block ">
            <p className=" md:text-xl py-4">
              2 Decades of Excellence in Education | 5 Specializations | 
               <br /> <p className="text-[#006BB3] font-bold" >100%  Guarantee Placement Assistance</p>
            </p>
            <p className=" md:text-3xl py-4">
            <span className="text-[#006BB3] font-bold">Code</span> Your Future with <span className="text-[#006BB3] font-bold">Computer Engineering</span> at ICEM!
            </p>
          </div>
        </div>

        {/* Right side form container */}
        <div className="flex justify-center lg:justify-start z-20 w-full mb-3  sm:mb-2 md:mb-2 mt-4 lg:mt-0">
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
              {/* <div>
                <select
                  id="state"
                  className="w-full p-1.5 bg-gradient-to-r from-[#FFFFFF] via-[#F0F8FF] to-[#d6F0FF] text-black rounded border border-[#FFD1A3] focus:outline-none focus:ring-2 focus:ring-[#FFB88C]"
                  required
                >
                  <option value="">Select State</option>
                </select>
              </div> */}
              {/* <div>
                <select
                  id="city"
                  className="w-full p-1.5 bg-gradient-to-r from-[#FFFFFF] via-[#F0F8FF] to-[#d6F0FF] text-black rounded border border-[#FFD1A3] focus:outline-none focus:ring-2 focus:ring-[#FFB88C]"
                  required
                >
                  <option value="">Select City</option>
                </select>
              </div> */}

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
              {/* <div>
                <select
                  id="program"
                  className="w-full p-1.5 bg-gradient-to-r from-[#FFFFFF] via-[#F0F8FF] to-[#d6F0FF] text-black rounded border border-[#FFD1A3] focus:outline-none focus:ring-2 focus:ring-[#FFB88C]"
                  required
                >
                  <option value="">Select Program</option>
                </select>
              </div> */}
              {/* <div>
                <input
                  type="number"
                  id="cet-score"
                  className="w-full p-1.5 bg-gradient-to-r from-[#FFFFFF] via-[#F0F8FF] to-[#d6F0FF] text-black rounded border border-[#FFD1A3] focus:outline-none focus:ring-2 focus:ring-[#FFB88C]"
                  placeholder="Enter CET Score"
                />
              </div> */}
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

export default MechHero;
