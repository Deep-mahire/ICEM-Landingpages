import React, { useEffect } from 'react';
import ProgramImage from '/public/BBA-MBA/overview.png';
import HatImage from '../../assets/images/hat.avif';

import AOS from 'aos';
import 'aos/dist/aos.css';

function IntegratedBbaMbaOverview() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="bg-[#FCFAEE] px-4 sm:px-6 md:px-12 lg:px-16 py-10 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 lg:gap-16">
        
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left relative" data-aos="fade-right">
          <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 relative inline-block">
            <span className="inline-block relative">
              <img
                src={HatImage}
                alt="Hat"
                className="absolute -left-6 -top-4 sm:-top-7 md:-top-8 w-10 sm:w-12 md:w-14 lg:w-16 animate-floating"
              />
              Program Overview
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#555555] font-medium tracking-wide leading-relaxed">
            Our <strong>Integrated BBA MBA program</strong>, affiliated with the University of Pune and approved by <strong>AICTE</strong>, is a direct pathway into the world of business and management.
            Nestled in a lush green campus with <strong>state-of-the-art infrastructure</strong>, the department offers one of the best 5-year Integrated BBA-MBA courses.
            With expert faculty, real-world case studies, and an <strong>industry-aligned curriculum</strong>, students gain a strong foundation in business and leadership.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center" data-aos="fade-left">
          <img
            src={ProgramImage}
            alt="Program Overview"
            className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full h-auto object-contain"
          />
        </div>
      </div>

      <style>{`
        @keyframes floating {
          0%   { transform: translateY(0); }
          50%  { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }
        .animate-floating {
          animation: floating 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default IntegratedBbaMbaOverview;
