import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import backgroundImage from '../../assets/images/Com-Images/broImage.jpg';

function IntegratedBbaMbaBrochure() {
  return (
    <div
      className="flex justify-between items-center bg-contain bg-center text-white shadow-lg h-48 px-8 md:px-16 poppins-regular"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-full bg-gradient-to-r from-[#003C84] to-[#018697] p-6 rounded-3xl flex flex-col md:flex-row justify-between items-center">
        <div className="max-w-full md:max-w-2/3 mb-4 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">Syllabus</h2>
          <p className="text-lg text-gray-200 hidden sm:block">
            Best-in-class content by leading trainers and industry leaders in the form of videos, real life case studies, projects, and live-sessions.
          </p>
        </div>
        <div>
          {/* Anchor tag to trigger file download */}
          <a
            href="/path/to/your/dummy/brochure.pdf" // Link to your dummy file
            download="Brochure.pdf" // The file will be downloaded with this name
            className="bg-[#F7F0FC] border-2 border-[#003C84] text-[#003C84] px-6 py-3 rounded-3xl hover:bg-[#2241ac] hover:text-[#F7F0FC] transition duration-300 flex items-center space-x-2"
          >
            <FontAwesomeIcon icon={faDownload} />
            <span>Download Brochure</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default IntegratedBbaMbaBrochure;
