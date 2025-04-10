import React, { useEffect, useState } from "react";
import logo1 from '../../assets/images/Entc-Images/1.avif';
import logo2 from '../../assets/images/Entc-Images/2.avif';
import logo3 from '../../assets/images/Entc-Images/3.avif';
import logo4 from '../../assets/images/Entc-Images/4.avif';
import logo5 from '../../assets/images/Entc-Images/5.avif';
import logo6 from '../../assets/images/Entc-Images/6.avif';
import logo7 from '../../assets/images/Entc-Images/7.avif';
import logo8 from '../../assets/images/Entc-Images/8.avif';
import logo9 from '../../assets/images/Entc-Images/9.avif';
import logo10 from '../../assets/images/Entc-Images/10.avif';
import logo11 from '../../assets/images/Entc-Images/11.avif';
import logo12 from '../../assets/images/Entc-Images/12.avif';
import logo13 from '../../assets/images/Entc-Images/13.avif';
import logo14 from '../../assets/images/Entc-Images/14.avif';
import logo15 from '../../assets/images/Entc-Images/15.avif';

const EntcRecruiters = () => {
  const [isVisible, setIsVisible] = useState(true);
  
  const logos = [
    logo1, logo2, logo3, logo4, logo5,
    logo6, logo7, logo8, logo9, logo10,
    logo11, logo12, logo13, logo14, logo15
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
    <div className="logo-slider-section py-4 font-poppins">
      <div className="text-center mb-4">
        <h2 className="text-2xl text-[#36A5B9] sm:text-3xl lg:text-4xl font-bold">
          Our Recruiters
        </h2>
      </div>
      <div className="logo-slider relative overflow-hidden w-full">
        <div className={`logo-slider-track flex ${isVisible ? 'animate' : ''}`}>
          {logos.map((logo, index) => (
            <div key={index} className="logo-slide flex-none mx-3 sm:mx-4 md:mx-5">
              <img src={logo} alt={`Recruiter Logo ${index + 1}`} className="h-20 sm:h-20 max-w-[150px] object-contain" />
            </div>
          ))}
          {logos.map((logo, index) => (
            <div key={`duplicate-${index}`} className="logo-slide flex-none mx-3 sm:mx-4 md:mx-5">
              <img src={logo} alt={`Recruiter Logo ${index + 1}`} className="h-16 sm:h-20 max-w-[120px] object-contain" />
            </div>
          ))}
        </div>
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

export default EntcRecruiters;
