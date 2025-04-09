import React, { useEffect, useState, useMemo } from 'react';
import bgImage from '../../assets/images/itbg.jpg';

function ItHero() {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const words = useMemo(() => ["Innovation", "Automation", "Precision", "Revolution"], []);

  useEffect(() => {
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
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <div
      className="relative pt-8 h-auto bg-cover bg-center bg-no-repeat text-white flex items-start"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Black overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-10"></div>

      {/* Content Wrapper */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start z-20 w-full px-4 md:px-8 py-8 gap-6">
        
        {/* Left Side Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
            <span className='text-[#A540FF]'>Information Technology</span> at Indira College of Engineering & Management
          </p>
          <div className="hidden lg:block">
            <p className="text-lg md:text-xl py-2 italic">
              30 Years of Excellence in Education | 5 Specializations | 100% Placement Assistance
            </p>
            <p className="text-2xl md:text-3xl py-2">
              Transform the Digital World with <span className='text-[#A540FF] font-bold'>IT Engineering</span> at ICEM!
            </p>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="p-6 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[90%] xl:w-[80%] shadow-md rounded-md" style={{ backgroundColor: "rgba(139, 197, 255, 0.3)" }}>
            <form className="space-y-3">
              <input type="text" placeholder="Enter your name" required className="w-full p-2 bg-[#F7F0FC] text-black rounded border border-[#390161] focus:ring-2 focus:ring-[#390161] outline-none" />
              <input type="email" placeholder="Enter your email" required className="w-full p-2 bg-[#F7F0FC] text-black rounded border border-[#390161] focus:ring-2 focus:ring-[#390161] outline-none" />
              <input type="tel" placeholder="Enter your mobile number" required className="w-full p-2 bg-[#F7F0FC] text-black rounded border border-[#390161] focus:ring-2 focus:ring-[#390161] outline-none" />
              <select required className="w-full p-2 bg-[#F7F0FC] text-black rounded border border-[#390161] focus:ring-2 focus:ring-[#390161] outline-none">
                <option value="">Select State</option>
              </select>
              <select required className="w-full p-2 bg-[#F7F0FC] text-black rounded border border-[#390161] focus:ring-2 focus:ring-[#390161] outline-none">
                <option value="">Select City</option>
              </select>
              <select required className="w-full p-2 bg-[#F7F0FC] text-black rounded border border-[#390161] focus:ring-2 focus:ring-[#390161] outline-none">
                <option value="">Select Course</option>
                <option value="Mech">Mechanical Engineering</option>
                <option value="AI">Artificial Intelligence</option>
                <option value="IT">Information Technology</option>
                <option value="CS">Computer Science</option>
                <option value="AIDS">Artificial Intelligence and Data Science</option>
              </select>
              <input type="number" placeholder="Enter CET Score" className="w-full p-2 bg-[#F7F0FC] text-black rounded border border-[#390161] focus:ring-2 focus:ring-[#390161] outline-none" />
              <button type="submit" className="w-full py-2 bg-[#390161] text-white rounded-lg hover:bg-[#9002F5]">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItHero;
