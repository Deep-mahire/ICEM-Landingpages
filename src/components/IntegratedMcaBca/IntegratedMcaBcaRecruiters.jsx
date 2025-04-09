import React from 'react';
 
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
 
const IntegratedMcaBCaRecruiters = () => {
  const logos = [
    logo1, logo2, logo3, logo4, logo5, logo6,
    logo7, logo8, logo9, logo10, logo11, logo12,
    logo13, logo14, logo15, logo16, logo17, logo18,
    logo19, logo20, logo21, logo22, logo23, logo24
  ];
 
  return (
    <div className="logo-grid-section py-4 roboto-regular bg-[#FCFAEE] px-4 md:px-16 overflow-hidden">
      <div className="text-center mb-4">
        <h2 className="text-3xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold text-[#555555]">
          TOP <span className="text-[#f37021]">Recruiters</span> AT ICEM
        </h2>
      </div>
      <div className="logo-grid w-full grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6  gap-4 ">
        {/* Map over the logos and display them in a grid */}
        {logos.map((logo, index) => (
          <div key={index} className="logo-item flex justify-center items-center bg-white shadow-lg  bg-[#F5F0EB] hover:bg-[#FCFAEE] transition-colors duration-300">
            <img
              src={logo}
              alt={`Recruiter Logo ${index + 1}`}
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
 
export default IntegratedMcaBCaRecruiters;