import React, { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import gearImage from '../../assets/images/gears.png'; // Import the gear image

const ItBrochure = () => {
  return (
    <div
      className="flex justify-between items-center bg-[#F7F0FC] text-white shadow-lg h-48 px-8 md:px-16 poppins-regular relative"
      style={{
        backgroundImage: `url(${gearImage})`,
        backgroundPosition: 'left bottom, right top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain', // Ensure the image doesn't stretch or repeat
      }}
    >
      <div className="w-full bg-[#9002F5] p-6 rounded-3xl flex justify-between items-center">
        <div className="max-w-2/3">
          {/* Syllabus heading always visible */}
          <h2 className="text-2xl font-bold mb-4 text-white">Syllabus</h2>

          {/* Description text hidden on mobile */}
          <p className="text-lg text-white hidden sm:block">
          Master the world of Information Technology with a focus on cloud computing, cybersecurity, data analytics, software engineering, and IT infrastructure.
          </p>
        </div>

        <div>
          {/* Anchor tag to trigger file download */}
          <a
            href="/path/to/your/dummy/brochure.pdf" // Link to your dummy file (replace with actual path)
            download="Brochure.pdf" // The file will be downloaded with this name
            className="bg-[#390161] border-2 border-[#390161] text-white px-6 py-3 rounded-3xl hover:bg-[#390161] transition duration-300 flex items-center space-x-2"
          >
            <FontAwesomeIcon icon={faDownload} />
            <span>Download Brochure</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default memo(ItBrochure); // Wrapping with React.memo to avoid unnecessary re-renders
