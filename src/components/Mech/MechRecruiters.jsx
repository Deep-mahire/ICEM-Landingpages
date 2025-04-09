import React, { useEffect, useState } from 'react';

import logo1 from '../../assets/images/MECH-images/bluestar.avif';
import logo2 from '../../assets/images/MECH-images/kpit.webp';
import logo3 from '../../assets/images/MECH-images/force.avif';
import logo4 from '../../assets/images/MECH-images/hettich.avif';
import logo5 from '../../assets/images/MECH-images/rudder.avif';
import logo6 from '../../assets/images/MECH-images/skf.avif';
import logo7 from '../../assets/images/MECH-images/tata.avif';
import logo8 from '../../assets/images/MECH-images/techM.avif';
import logo9 from '../../assets/images/MECH-images/thai.avif';
import logo10 from '../../assets/images/MECH-images/thys.avif';
import logo11 from '../../assets/images/MECH-images/abc.avif';
import logo12 from '../../assets/images/MECH-images/rudder.avif';
const CompRecruiter = () => {
  const [isVisible, setIsVisible] = useState(true);

  const logos = [
    logo1, logo2, logo3, logo4, logo5, logo6,
    logo7, logo8, logo9, logo10, logo11, logo12,
  ];

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div className="logo-slider-section py-4 roboto-regular">
      <div className="text-center mb-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold">
          <span >Top Recruiters</span> 
        </h2>
      </div>
      <div className="logo-slider relative overflow-hidden w-full">
        <div className={`logo-slider-track flex ${isVisible ? 'animate' : ''}`}>
          {/* Map over the logos and display them */}
          {logos.map((logo, index) => (
            <div key={index} className="logo-slide flex-none mx-3 sm:mx-4 md:mx-5">
              <img
                src={logo}
                alt={`Recruiter Logo ${index + 1}`}
                className="h-20 sm:h-20 max-w-[120px] object-contain"
              />
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div key={`duplicate-${index}`} className="logo-slide flex-none mx-3 sm:mx-4 md:mx-5">
              <img
                src={logo}
                alt={`Recruiter Logo ${index + 1}`}
                className="h-20 sm:h-20 max-w-[120px] object-contain"
              />
            </div>
          ))}
        </div>

        <div className="absolute left-0 top-0 h-full w-24  to-transparent z-10" />
        <div className="absolute right-0 top-0 h-full w-24 to-transparent z-10" />
      </div>

      <style>{`
        .logo-slider {
          position: relative;
          padding: 0 20px;
        }

        .logo-slider-track {
          display: flex;
          width: fit-content;
        }

        .logo-slider-track.animate {
          animation: slide 40s linear infinite;
        }

        .logo-slide {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .logo-slider:hover .logo-slider-track {
          animation-play-state: paused;
        }

        @media (max-width: 640px) {
          .logo-slider-track.animate {
            animation-duration: 30s;
          }
        }
      `}</style>
    </div>
  );
};

export default CompRecruiter;
