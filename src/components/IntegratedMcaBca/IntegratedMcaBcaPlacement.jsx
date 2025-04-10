import React from 'react';
import bannerImage from '../../assets/images/Com-Images/Comp1.png';

const BcaPlacement = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* Responsive Image with Breakpoints */}
      <img
        src={bannerImage}
        alt="Mech Placement"
        className="w-full h-auto object-cover 
           
          transition-all duration-300 ease-in-out" // Added transition effect for smooth resizing
      />
    </div>
  );
}

export default BcaPlacement;
