import React, { useEffect, useState } from "react";
 
// Image Imports
import logo1 from "../../assets/images/COMP-images/sas-min.avif";
import logo2 from "../../assets/images/COMP-images/yash-min.avif";
import logo3 from "../../assets/images/COMP-images/philips-min.avif";
import logo4 from "../../assets/images/COMP-images/jaspay-min.avif";
import logo5 from "../../assets/images/COMP-images/zs-min.avif";
import logo6 from "../../assets/images/COMP-images/e-zest-min.avif";
import logo7 from "../../assets/images/COMP-images/veritas-min.avif";
import logo8 from "../../assets/images/COMP-images/avalara-min.avif";
import logo9 from "../../assets/images/COMP-images/capgi-min.avif";
import logo10 from "../../assets/images/COMP-images/dataaxle-min.avif";
import logo11 from "../../assets/images/COMP-images/fis-min (1).avif";
import logo12 from "../../assets/images/COMP-images/gslab-min.avif";
import logo13 from "../../assets/images/COMP-images/infosys-min.avif";
import logo14 from "../../assets/images/COMP-images/kpit-min.avif";
import logo15 from "../../assets/images/COMP-images/kpmg-min.avif";
import logo16 from "../../assets/images/COMP-images/l&T-min.avif";
import logo17 from "../../assets/images/COMP-images/nttdata-min.avif";
import logo18 from "../../assets/images/COMP-images/palo-min.avif";
import logo19 from "../../assets/images/COMP-images/Persistent-min.avif";
import logo20 from "../../assets/images/COMP-images/pubmatic-min.avif";
import logo21 from "../../assets/images/COMP-images/sigma-min.avif";
import logo22 from "../../assets/images/COMP-images/Tcs-min.avif";
import logo23 from "../../assets/images/COMP-images/tibco-min.avif";
import logo24 from "../../assets/images/COMP-images/wipro-min.avif";
 
const IntegratedMcaBcaMajorRecruiters = () => {
  const [reverse, setReverse] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
 
  const logoImages = [
    logo1, logo2, logo3, logo4, logo5, logo6,
    logo7, logo8, logo9, logo10, logo11, logo12,
    logo13, logo14, logo15, logo16, logo17, logo18,
    logo19, logo20, logo21, logo22, logo23, logo24,
  ];
 
  const logos = logoImages.map((src, index) => (
    <div key={`first-${index}`} className="flex-none mx-4 my-2">
      <img
        src={src}
        alt={`Recruiter ${index + 1}`}
        className="h-12 sm:h-16 md:h-20 max-w-full object-contain"
      />
    </div>
  ));
 
  const duplicatedLogos = logos.map((logo, index) =>
    React.cloneElement(logo, { key: `second-${index}` })
  );
 
  useEffect(() => {
    const handleAnimationEnd = (e) => {
      if (e.animationName === (isMobile ? "scroll-mobile" : "scroll")) {
        setReverse(true);
      } else if (e.animationName === "reverseScroll") {
        setReverse(false);
      }
    };
 
    const logoSlider = document.querySelector(".logo-slider-track");
    if (logoSlider) logoSlider.addEventListener("animationend", handleAnimationEnd);
 
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
 
    window.addEventListener("resize", handleResize);
 
    return () => {
      if (logoSlider) logoSlider.removeEventListener("animationend", handleAnimationEnd);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);
 
  return (
    <div className="logo-slider-section roboto-regular relative">
      {/* Info box top left */}
      {!isMobile && (
        <div className=" absolute top-0 left-0 bg-white shadow-lg flex items-center h-full z-10">
          <h2 className="text-2xl text-[#555555] font-extrabold px-16 "><span className="text-[#f37021]">450+  Industry</span> <br /> Collaboration</h2>
        </div>
      )}
 
      {/* Logo slider */}
      <div className="logo-slider relative overflow-hidden w-full">
        <div
          className={`logo-slider-track flex ${
            reverse ? "reverse" : isMobile ? "animate-scroll-mobile" : "animate-scroll"
          }`}
        >
          {[...logos, ...duplicatedLogos]}
        </div>
      </div>
 
      {/* Inline CSS */}
      <style>{`
        .logo-slider-section {
          padding: 0;
          margin: 0;
          position: relative;
        }
 
        .info-box {
          width: 200px;
          height: 100%;
          {/* background-color: #01224F; */}
          display: flex;
          align-items: center;
        }
 
        @media (max-width: 768px) {
          .info-box {
            display: none;
          }
        }
 
        .logo-slider-track {
          display: flex;
          width: calc(120px * 48); /* Enough width for 2 sets */
        }
 
        .animate-scroll {
          animation: scroll 15s linear forwards;
        }
 
        .animate-scroll-mobile {
          animation: scroll-mobile 10s linear forwards;
        }
 
        .reverse {
          animation: reverseScroll 5s linear forwards;
        }
 
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-120px * 24)); }
        }
 
        @keyframes scroll-mobile {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-120px * 24)); }
        }
 
        @keyframes reverseScroll {
          0% { transform: translateX(calc(-120px * 24)); }
          100% { transform: translateX(0); }
        }
 
        .logo-slider-track:hover {
          animation-play-state: paused;
        }
 
        @media (max-width: 640px) {
          .logo-slider-track {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};
 
export default IntegratedMcaBcaMajorRecruiters;
 
 