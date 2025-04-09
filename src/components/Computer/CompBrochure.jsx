import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import backgroundImage from '../../assets/images/Com-Images/broImage.jpg';

function CompBrochure() {
  return (
    <div
      className="flex justify-between items-center bg-contain bg-center text-white shadow-lg h-48 px-8 md:px-16 poppins-regular"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-full bg-blue-700 p-6 rounded-3xl flex flex-col md:flex-row justify-between items-center">
        <div className="max-w-full md:max-w-2/3 mb-4 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">Syllabus</h2>
          <p className="text-lg text-gray-200 hidden sm:block">Learn cutting-edge computer engineering skills in AI, full stack development, blockchain, cloud computing, and advanced algorithms..</p>
        </div>
        <div>
          {/* Anchor tag to trigger file download */}
          <a
            href="/path/to/your/dummy/brochure.pdf" // Link to your dummy file
            download="Brochure.pdf" // The file will be downloaded with this name
            className="bg-blue-900 border-2 border-blue-800 text-white px-6 py-3 rounded-3xl hover:bg-blue-800 transition duration-300 flex items-center space-x-2"
          >
            <FontAwesomeIcon icon={faDownload} />
            <span>Download Brochure</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CompBrochure;
