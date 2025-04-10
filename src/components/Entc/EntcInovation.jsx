import React from "react";
import entc from '../../assets/images/Entc-Images/ennovation.avif'
 
export default function EntcInovataion() {
  return (
    <div className="flex flex-col md:flex-row items-center  rounded-lg shadow-lg p-4 mb-2 md:mb-8 mr-4 ml-4 md:px-16">
      {/* Left Side Image with Reduced Size */}
      <div className="w-full h-full md:w-1/3 flex justify-center">
        <img
          src={entc}
          alt="Innovation and Connectivity"
          className="w-full "
        />
      </div>
 
      {/* Right Side Content with Increased Text Size */}
      <div className="w-full md:w-2/3  md:pl-6">
      <h1 className="text-2xl md:text-3xl font-bold text-[#104552] mb-4">
      Where Innovation Meets Connectivity! 
          </h1>
          <p className="text-base md:text-lg text-gray-700 mb-4">
            Ever wondered how your smartphone connects seamlessly across the globe?<br/>
            How autonomous vehicles communicate in real time?<br/>
            How AI-powered devices make decisions in a fraction of a second?<br/>
            That’s the magic of Electronics & Telecommunication Engineering!<br/>
            Discover the advanced innovations that shape the connected world.
            At <strong>ICEM</strong>, we empower students for the future with practical training and real-world expertise!
          </p>
      </div>
    </div>
  );
}