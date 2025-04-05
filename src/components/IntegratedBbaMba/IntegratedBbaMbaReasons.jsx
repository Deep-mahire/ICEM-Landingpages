import React from "react";
import img1 from '../../assets/images/Com-Images/7.png';
import img4 from '../../assets/images/Com-Images/1 (2).png';
import img5 from '../../assets/images/Com-Images/2.png';
import img6 from '../../assets/images/Com-Images/3.png';
import img7 from '../../assets/images/Com-Images/4.png';
import img8 from '../../assets/images/Com-Images/8.png';
import img9 from '../../assets/images/5.png';
import img10 from '../../assets/images/6.png';
import img11 from '../../assets/images/7.png';

function IntegratedBbaMbaReasons() {
  return (
    <div className="relative py-8 bg-gradient-to-r from-[#003C84] to-[#018697]"> {/* Gradient background */}
      {/* Background Images */}
      <div className="absolute top-0 left-0 z-0 opacity-10">
        <img src={img1} alt="" className="object-cover w-50 h-50" />
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-center mb-6 z-10 relative text-white">
        Why Choose ICEM for Your Integrated BBA/MBA Journey?
      </h2>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 z-10 relative px-6 md:px-10 lg:px-16">
        
        {/* Industry-Integrated Curriculum */}
        <div className="bg-white shadow-lg p-6 flex flex-col items-center text-center rounded-lg hover:shadow-xl hover:border-2 hover:scale-105 hover:border-[#003C84] transition-all">
          <div className="text-[#003C84]">
            <img src={img4} alt="" className="w-20 h-20 object-contain" />
          </div>
          <h3 className="text-xl font-semibold text-[#003C84]">Industry-Integrated Curriculum</h3>
          <p className="text-sm md:text-base text-gray-600">Learn trending tech like AI, Cloud, & DevOps!</p>
        </div>

        {/* Live Projects & Internships */}
        <div className="bg-white shadow-lg p-6 flex flex-col items-center text-center rounded-lg hover:shadow-xl hover:border-2 hover:scale-105 hover:border-[#003C84] transition-all">
          <div className="text-[#003C84]">
            <img src={img5} alt="" className="w-20 h-20 object-contain" />
          </div>
          <h3 className="text-xl font-semibold text-[#003C84]">Live Projects & Internships</h3>
          <p className="text-sm md:text-base text-gray-600">Gain hands-on experience with real-world projects!</p>
        </div>

        {/* Expert Faculty & Industry Mentors */}
        <div className="bg-white shadow-lg p-6 flex flex-col items-center text-center rounded-lg hover:shadow-xl hover:border-2 hover:scale-105 hover:border-[#003C84] transition-all">
          <div className="text-[#003C84]">
            <img src={img6} alt="" className="w-20 h-20 object-contain" />
          </div>
          <h3 className="text-xl font-semibold text-[#003C84]">Expert Faculty & Industry Mentors</h3>
          <p className="text-sm md:text-base text-gray-600">Learn from top professionals in the field!</p>
        </div>

        {/* Top Placements */}
        <div className="bg-white shadow-lg p-6 flex flex-col items-center text-center rounded-lg hover:shadow-xl hover:border-2 hover:scale-105 hover:border-[#003C84] transition-all">
          <div className="text-[#003C84]">
            <img src={img7} alt="" className="w-20 h-20 object-contain" />
          </div>
          <h3 className="text-xl font-semibold text-[#003C84]">Top Placements</h3>
          <p className="text-sm md:text-base text-gray-600">Get hired by leading tech giants & startups!</p>
        </div>

        {/* Global Career Prospects */}
        <div className="bg-white shadow-lg p-6 flex flex-col items-center text-center rounded-lg hover:shadow-xl hover:border-2 hover:scale-105 hover:border-[#003C84] transition-all">
          <div className="text-[#003C84]">
            <img src={img9} alt="" className="w-20 h-20 object-contain" />
          </div>
          <h3 className="text-xl font-semibold text-[#003C84]">Global Career Prospects</h3>
          <p className="text-sm md:text-base text-gray-600">Opportunities in MNCs across the world!</p>
        </div>

        {/* Hackathons & Coding Competitions */}
        <div className="bg-white shadow-lg p-6 flex flex-col items-center text-center rounded-lg hover:shadow-xl hover:border-2 hover:scale-105 hover:border-[#003C84] transition-all">
          <div className="text-[#003C84]">
            <img src={img10} alt="" className="w-20 h-20 object-contain" />
          </div>
          <h3 className="text-xl font-semibold text-[#003C84]">Hackathons & Coding Competitions</h3>
          <p className="text-sm md:text-base text-gray-600">Compete, innovate & build solutions!</p>
        </div>

        {/* State-of-the-Art Labs */}
        <div className="bg-white shadow-lg p-6 flex flex-col items-center text-center rounded-lg hover:shadow-xl hover:border-2 hover:scale-105 hover:border-[#003C84] transition-all">
          <div className="text-[#003C84]">
            <img src={img11} alt="" className="w-20 h-20 object-contain" />
          </div>
          <h3 className="text-xl font-semibold text-[#003C84]">State-of-the-Art Labs</h3>
          <p className="text-sm md:text-base text-gray-600">Work in high-tech IT & Apple labs!</p>
        </div>

        {/* Exciting Campus Life */}
        <div className="bg-white shadow-lg p-6 flex flex-col items-center text-center rounded-lg hover:shadow-xl hover:border-2 hover:scale-105 hover:border-[#003C84] transition-all">
          <div className="text-[#003C84]">
            <img src={img8} alt="" className="w-20 h-20 object-contain" />
          </div>
          <h3 className="text-xl font-semibold text-[#003C84]">Exciting Campus Life</h3>
          <p className="text-sm md:text-base text-gray-600">Sports, events & tech fests to fuel your passion!</p>
        </div>
      </div>
    </div>
  );
}

export default IntegratedBbaMbaReasons;
