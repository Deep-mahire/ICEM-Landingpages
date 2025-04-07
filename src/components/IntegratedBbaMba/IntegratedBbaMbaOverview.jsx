import React, { useEffect } from 'react';
// Import the image
import ProgramImage from '/public/BBA-MBA/ProgramOverview.jpg';
import HatImage from '../../assets/images/hat.avif';  // Import the floating hat image

// Import AOS and its CSS
import AOS from 'aos';
import 'aos/dist/aos.css';

function IntegratedBbaMbaOverview() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      easing: 'ease-in-out', // Easing function for the animation
      once: true, // Whether the animation should happen only once
    });
  }, []);

  return (
    <div className="flex flex-col bg-[#FCFAEE] md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8 px-4 sm:px-8 md:px-16 py-8 md:py-12 poppins-regular">
      {/* Left Part: Heading and Paragraph */}
      <div className="flex-1 text-center md:text-left" data-aos="fade-right">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 relative">
          {/* Floating Hat Above the "P" */}
          <img
            src={HatImage}
            alt="Hat"
            className="absolute left-[-25px] top-[-38px] w-16 h-16 animate-floating text-[#555555]" // Apply floating animation class
          />
          Program Overview
        </h2>
        <p className="text-md sm:text-lg md:text-xl text-[#555555] tracking-wide mt-4">
        Our <strong>Integrated BBA MBA program</strong>, affiliated with the University of Pune and approved by <strong>AICTE</strong>, is a direct pathway into the world of business and management. Nestled in a lush green campus with <strong>state-of-the-art infrastructure</strong>, the department offers one of the <strong>best 5-year BBA MBA courses after 12th</strong>. With expert faculty, real-world case studies, and an <strong>industry-aligned curriculum</strong>, students gain a strong foundation in business and leadership. Whether you're exploring <strong>job opportunities after integrated BBA MBA</strong> or looking for a college with strong corporate exposure, this is where your business journey begins.
        </p>
      </div>

      {/* Right Part: Image */}
      <div className="flex-1 bg-white" data-aos="fade-left">  {/* Make container transparent */}
        <img
          src={ProgramImage} // Use the imported image
          alt="Program"
          className="w-full h-auto rounded-lg object-cover shadow-lg"
        />
      </div>

      {/* Floating animation CSS */}
      <style>{`
        @keyframes floating {
          0% {
            transform: translateY(0); /* Start at original position */
          }
          50% {
            transform: translateY(-10px); /* Move up a bit */
          }
          100% {
            transform: translateY(0); /* Return to original position */
          }
        }

        .animate-floating {
          animation: floating 3s ease-in-out infinite; /* Apply floating animation */
        }
      `}</style>
    </div>
  );
}

export default IntegratedBbaMbaOverview;
