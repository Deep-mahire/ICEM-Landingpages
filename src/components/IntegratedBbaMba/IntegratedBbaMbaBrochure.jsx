import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import backgroundImage from '../../assets/images/Com-Images/broImage.jpg';

function IntegratedBbaMbaBrochure() {
  return (
    <div
      className="flex justify-between items-center bg-[#f7f3ef] h-48 px-8 md:px-16 poppins-regular"
     
    >
      <div className="w-full bg-[#FCFAEE] p-6 rounded-3xl flex flex-col md:flex-row justify-between items-center border-1 border-[#9A2627]">
        <div className="max-w-full md:max-w-2/3 mb-4 md:mb-0">
          <h2 className="text-2xl text-[#555555] font-bold mb-4">Syllabus</h2>
          <p className="text-lg text-[#555555] hidden sm:block">
            Best-in-class content by leading trainers and industry leaders in the form of videos, real life case studies, projects, and live-sessions.
          </p>
        </div>
        <div>
          {/* Anchor tag to trigger file download */}
          <a
            href="/path/to/your/dummy/brochure.pdf" // Link to your dummy file
            download="Brochure.pdf" // The file will be downloaded with this name
            className="bg-[#FCFAEE] border-2 border-[#9A2627] text-[#9A2627] px-6 py-3 rounded-3xl hover:bg-[#555555] hover:text-[#F7F0FC] hover:border-[#555555] transition duration-300 flex items-center space-x-2"
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
