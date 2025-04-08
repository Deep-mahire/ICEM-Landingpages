import React, { useEffect } from 'react';
// Import the image
import ProgramImage from '../../assets/images/Com-Images/overview.png'
import HatImage from '../../assets/images/hat.avif';  // Import the floating hat image
 
// Import AOS and its CSS
import AOS from 'aos';
import 'aos/dist/aos.css';
 
function IntegratedMcaBcaOverview() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      easing: 'ease-in-out', // Easing function for the animation
      once: true, // Whether the animation should happen only once
    });
  }, []);
 
  return (
    <div className="flex flex-col bg-[#FCFAEE] md:flex-col lg:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8 px-4 sm:px-8 md:px-16 py-8 md:py-12 poppins-regular overflow-hidden">
      {/* Left Part: Heading and Paragraph */}
      <div className="flex-1 text-center md:text-left" data-aos="fade-right">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 mt-4 relative">
          {/* Floating Hat Above the "P" */}
          <img
            src={HatImage}
            alt="Hat"
            className="absolute left-[-25px] top-[-30px] md:top-[-36px] w-16 h-16 animate-floating text-[#555555]" // Apply floating animation class
          />
          Program Overview
        </h2>
        <p className="text-md sm:text-lg md:text-2xl text-[#555555] tracking-wide mt-4">
        Our <b>Integrated BCA MCA  </b>, program after 12th affiliated with the University of Pune and approved by <b>AICTE</b>, 
        offers a perfect blend of theory and tech skills. With <b>modern computer labs, libraries, hostels, transportation,
         canteen, sports</b>, and regular <b>tech events</b> , students thrive in a vibrant, future-ready campus. Expert faculty and 
         an <b> industry-aligned curriculum </b> prepare you for top career opportunities in IT and software<b></b>.
        </p>
      </div>
 
      {/* Right Part: Image */}
      <div className="flex-1 bg-white" data-aos="fade-left">  {/* Make container transparent */}
        <img
          src={ProgramImage} // Use the imported image
          alt="Program"
          className="w-full h-auto rounded-lg object-cover"
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
 
export default IntegratedMcaBcaOverview;