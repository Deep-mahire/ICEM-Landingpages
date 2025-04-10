// import React from 'react';
// import bannerImage from '../../assets/images/Com-Images/Comp1.png';

// const BcaPlacement = () => {
//   return (
//     <div className="w-full overflow-hidden">
//       {/* Responsive Image with Breakpoints */}
//       <img
//         src={bannerImage}
//         alt="Mech Placement"
//         className="w-full h-auto object-cover 
           
//           transition-all duration-300 ease-in-out" // Added transition effect for smooth resizing
//       />
//     </div>
//   );
// }

// export default BcaPlacement;
// import React from 'react';
// import { FaChalkboard, FaRegClock, FaChartLine } from 'react-icons/fa';

// function MarketingManagementPointers() {
//   return (
//     <div className="px-4 md:px-8 py-6 poppins-regular w-full">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center w-full">
//         {/* Card 1: Program Format */}
//         <div className="bg-[#FCFAEE] w-full max-w-[400px] min-h-[220px] p-5 shadow-md flex flex-col items-center justify-center text-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
//           <FaChalkboard size={40} className="text-[#F37020] " />
//           <h2 className="text-[#555555] text-base md:text-xl font-semibold mt-3">Program Format</h2>
//           <p className="text-[#F37020] text-lg md:text-2xl font-bold">Offline</p>
//         </div>

//         {/* Card 2: Duration */}
//         <div className="bg-[#FCFAEE] w-full max-w-[400px] min-h-[220px] p-5 shadow-md flex flex-col items-center justify-center text-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
//           <FaRegClock size={40} className="text-[#F37020]" />
//           <h2 className="text-[#555555] text-base md:text-xl font-semibold mt-3">Duration</h2>
//           <p className="text-[#F37020] text-sm md:text-2xl font-bold mt-1">
//          I MCA : 5 yrs
//           </p>
//         </div>

//         {/* Card 3: Highest CTC */}
//         <div className="bg-[#FCFAEE] w-full max-w-[400px] min-h-[220px] p-5 shadow-md flex flex-col items-center justify-center text-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
//           <FaChartLine size={40} className="text-[#F37020]" />
//           <h2 className="text-[#555555] text-base md:text-xl font-semibold mt-3">Highest CTC</h2>
//           <p className="text-[#F37020] text-sm md:text-2xl font-bold mt-1">27 LPA</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MarketingManagementPointers;

import React from 'react';
import offlineIcon from '../../assets/images/bca/logo4.png';
import durationIcon from '../../assets/images/bca/logo1.png';
import feesIcon from '../../assets/images/bca/logo2.png';

function MarketingManagementPointers() {
  return (
    <div className="px-8 md:px-16 py-4 poppins-regular">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 justify-center max-w-5xl mx-auto">
        {/* Card 1: Program Format */}
        <div className="bg-[#FCFAEE] p-2 md:p-4 shadow-md flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
          <img src={offlineIcon} alt="Program Format Icon" className="w-10 h-10 object-contain" />
          <h2 className="text-[#555555] text-sm md:text-base font-semibold mt-2">Program Format</h2>
          <p className="text-[#f37021] text-sm md:text-xl font-semibold">Offline</p>
        </div>

        {/* Card 2: Duration */}
        <div className="bg-[#FCFAEE] p-2 md:p-4 shadow-md flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
          <img src={durationIcon} alt="Duration Icon" className="w-10 h-10 object-contain" />
          <h2 className="text-[#555555] text-sm md:text-base font-semibold mt-2">Duration</h2>
          <p className="text-[#f37021] text-sm md:text-xl font-semibold text-center">
            BCA - 3 years<br />MCA - 2 years<br />I-MCA - 5 years
          </p>
        </div>

        {/* Card 3: Highest CTC */}
        <div className="bg-[#FCFAEE] p-2 md:p-4 shadow-md flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
          <img src={feesIcon} alt="Highest CTC Icon" className="w-10 h-10 object-contain" />
          <h2 className="text-[#555555] text-sm md:text-base font-semibold mt-2">Highest CTC</h2>
          <p className="text-[#f37021] text-sm md:text-xl font-semibold">27 LPA</p>
        </div>
      </div>
    </div>
  );
}

export default MarketingManagementPointers;
