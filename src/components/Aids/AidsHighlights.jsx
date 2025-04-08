import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faAward, faMedal } from '@fortawesome/free-solid-svg-icons';

// Import the image
import bgImage from '../../assets/images/highbg.avif';

function AidsHighlights() {
  return (
    <div
      className="poppins-regular"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="px-6 md:px-16 py-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 poppins-bold text-[#1e84a8]">
          ICEM Highlights
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 justify-center">
          {/* Highlight Cards */}
          {[ 
            { icon: faTrophy, text: 'Ranked 49th in Top 100 Private Engineering Institutes and Ranked 61st in Top 140 Engineering Institutes conducted by Times of India Engineering Colleges.' },
            { icon: faAward, text: 'Ranking Survey - 2019 Winners of SmartIndia Hackathon for consecutive three years organized by Ministry of HRD, AICTE in association with NASSCOM.' },
            { icon: faMedal, text: 'Received Outstanding Education Institute (West) Award by National Education Awards 2018.' }
          ].map((item, index) => (
            <div key={index} className="bg-[#F6FBFF] p-6 shadow-lg text-center rounded-lg flex flex-col items-center">
              <div className="w-12 h-12 bg-[#1e84a8] text-white rounded-full flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={item.icon} className="text-xl" />
              </div>
              <p className="text-gray-600 poppins-regular text-sm md:text-base">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AidsHighlights;