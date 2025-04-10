import React from "react";
import entc from '../../assets/images/Entc-Images/ennovation.avif';
// import bgImage from '../../assets/images/Entc-Images/entc.jpg'; 
import bgImage from '../../assets/images/bg.jpg'; 
// import bgImage from '../../assets/images/Entc-Images/bulb.jpg'; 


export default function EntcInovataion() {
  return (
    <div className="relative flex flex-col md:flex-row items-center  shadow-lg p-4 mb-2 md:mb-8 md:px-16 overflow-hidden">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center  z-0"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Foreground Content */}
      <div className="relative z-10 w-full h-full md:w-1/3 flex justify-center">
        <img
          src={entc}
          alt="Innovation and Connectivity"
          className="w-full"
        />
      </div>

      <div className="relative z-10 w-full md:w-2/3 md:pl-6">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Where Innovation Meets Connectivity!
        </h1>
        <p className="text-base md:text-lg text-gray-200 mb-4">
          Ever wondered how your smartphone connects seamlessly across the globe?<br />
          How autonomous vehicles communicate in real time?<br />
          How AI-powered devices make decisions in a fraction of a second?<br />
          That’s the magic of Electronics & Telecommunication Engineering!<br />
          Discover the advanced innovations that shape the connected world.
          At <strong>ICEM</strong>, we empower students for the future with practical training and real-world expertise!
        </p>
      </div>
    </div>
  );
}
