import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import gearImage from '../../assets/images/gears.png'; // Import the gear image

function CompBrochure() {
  return (
    <div
      className="flex justify-between items-center bg-[#FFF8F0] text-white shadow-lg h-auto px-8 md:px-16 py-0 md:py-0 poppins-regular relative"
      style={{
        backgroundImage: `url(${gearImage}), url(${gearImage})`, // Use two instances of the same image
        backgroundPosition: 'left bottom, right top', // Position first at left bottom, second at right top
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain', // Ensure the image doesn't stretch or repeat
      }}
    >
      <div className="w-full bg-[#01224F] p-4 rounded-3xl flex flex-col md:flex-row justify-between items-center">
        {/* Text Content - Heading always visible, text hidden on mobile */}
        <div className="max-w-full md:max-w-2/3 mb-6 md:mb-0 text-center md:text-left">
          {/* Center the Syllabus heading and remove margin */}
          <h2 className="text-2xl font-bold mb-4 m-0 text-white">Syllabus</h2> {/* Dark Blue for heading */}
          <p className="text-lg text-white hidden sm:block">
          Dive into core mechanical domains like robotics, thermodynamics, CAD/CAM, automotive systems, and advanced manufacturing techniques.
          </p>
        </div>

        {/* Download Button */}
        <div className="mt-4 md:mt-4">
          <button className="bg-[#FFC80] border-2 border-[#FFB700] text-white px-6 py-3 rounded-3xl hover:bg-[#FFB700] hover:text-black hover:border-white transition duration-300 flex items-center space-x-2">
            <FontAwesomeIcon icon={faDownload} />
            <span>Download Brochure</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CompBrochure;
