import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import backgroundImage from '../../assets/images/Com-Images/broImage.jpg';

function IntegratedMcaBcaBrochure() {
  return (
    <div
      className="flex justify-between items-center bg-contain bg-center text-white shadow-lg h-48 px-8 md:px-16 poppins-regular bg-[#FCFAEE] overflow-hidden"
      // style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-full bg-[#F5F0EB] p-6 rounded-3xl flex flex-col md:flex-row justify-between items-center">
        <div className="max-w-full md:max-w-2/3 mb-4 md:mb-0">
          <h2 className="text-[#f37021]  text-2xl font-bold mb-4">Syllabus</h2>
          <p className="text-lg text-gray-700 hidden sm:block">Best-in-class content by leading trainers and industry leaders in the form of videos, real life case studies, projects and live-sessions.</p>
        </div>
        <div>
  {/* Anchor tag to trigger file download */}
  <a
    href="#"
    // download="Brochure.pdf"
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    className="border border-[#FCFAEE] text-[#555555] px-6 py-3 border-[#f37021] rounded-3xl hover:bg-white transition duration-300 flex items-center space-x-2"
  >
    <FontAwesomeIcon icon={faDownload} className="text-orange-500 text-2xl" />
    <span>Download Brochure</span>
  </a>
</div>
      </div>
    </div>
  );
}

export default IntegratedMcaBcaBrochure;

