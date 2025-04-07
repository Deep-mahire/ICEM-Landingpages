import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css';  // Import AOS CSS
import offer1Image from '../../assets/images/Com-Images/proLang.avif';  // Import the CAD/CAM image
import offer2Image from '../../assets/images/Com-Images/AI.avif';  // Import the robotics image
import offer3Image from '../../assets/images/Com-Images/algorithem.avif';  // Import the thermal engineering image
import offer4Image from '../../assets/images/Com-Images/AppDev.avif';  // Import the energy solutions image
import offer5Image from '../../assets/images/Com-Images/cloudComp.avif';  // Import the prototyping image
import offer6Image from '../../assets/images/Com-Images/Blockchain.avif';  // Import the blockchain image

// Import the background image
import backgroundImage from '../../assets/images/Com-Images/broImage.jpg'; // replace with the actual path to your image

const IntegratedBcaMcaOfferings = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const elements = document.querySelectorAll('.circle');
    const icons = document.querySelectorAll('.icon');

    elements.forEach((circle, index) => {
      const icon = icons[index];

      gsap.set(circle, { opacity: 0, x: -50 });
      gsap.set(icon, { rotationY: 180 });

      circle.parentElement.addEventListener('mouseenter', () => {
        gsap.to(circle, { opacity: 1, x: 0, duration: 0.3 });
        gsap.to(icon, { rotationY: 0, duration: 0.3 });
      });

      circle.parentElement.addEventListener('mouseleave', () => {
        gsap.to(circle, { opacity: 0, x: -50, duration: 0.3 });
        gsap.to(icon, { rotationY: 180, duration: 0.3 });
      });
    });
  }, []);

  return (
    <div className="relative px-4 md:px-8 lg:px-16 py-6 md:py-8 poppins-regular bg-[#F5F0EB]">
      {/* Background Image */}
      {/* <div 
        className="absolute inset-0 bg-contain bg-center opacity-40" 
        style={{ backgroundImage: `url(${backgroundImage})` }} 
      ></div> */}

      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-[#555555]" data-aos="fade-up">
        ICEM <span className='text-[#f37021]'>Offerings</span>  
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-y-8 gap-x-4 md:gap-x-8 lg:gap-x-10">
        {/* Advanced CAD/CAM Systems */}
        <div
          className="bg-[#FCFAEE] shadow-xl flex flex-col items-center justify-start text-center h-full relative"
          data-aos="fade-up"
        >
          <img
            src={offer1Image}
            alt="CAD/CAM Systems"
            className="w-full h-48 object-cover mb-4"
          />
          <div className="text-center px-4 p-2">
            <h3 className="text-xl md:text-2xl font-bold text-[#555555] mb-2"> Programming Languages (Python, Java, C++)</h3>
            <p className="text-base text-[#555555]">Write efficient, scalable code!Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
          </div>
        </div>

        {/* Cutting-edge Robotics & Automation */}
        <div
          className="bg-[#FCFAEE] shadow-xl flex flex-col items-center justify-start text-center h-full relative"
          data-aos="fade-up"
        >
          <img
            src={offer2Image}
            alt="Robotics & Automation"
            className="w-full h-48 object-cover mb-4"
          />
          <div className="text-center px-4 p-2">
            <h3 className="text-xl md:text-2xl font-bold text-[#555555] mb-2">Artificial Intelligence & Machine Learning</h3>
            <p className="text-base text-[#555555]">Train AI models for automation!Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
          </div>
        </div>

        {/* Thermal Engineering & HVAC Systems */}
        <div
          className="bg-[#FCFAEE] shadow-xl flex flex-col items-center justify-start text-center h-full relative"
          data-aos="fade-up"
        >
          <img
            src={offer3Image}
            alt="Thermal Engineering"
            className="w-full h-48 object-cover mb-4"
          />
          <div className="text-center px-4 p-2">
            <h3 className="text-xl md:text-2xl font-bold text-[#555555] mb-2">Data Structures & Algorithms</h3>
            <p className="text-base text-[#555555]">Build optimized software solutions!.Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
          </div>
        </div>

        {/* Sustainable Energy Solutions */}
        <div
          className="bg-[#FCFAEE] shadow-xl flex flex-col items-center justify-start text-center h-full relative"
          data-aos="fade-up"
        >
          <img
            src={offer4Image}
            alt="Energy Solutions"
            className="w-full h-48 object-cover mb-4"
          />
          <div className="text-center px-4 p-2">
            <h3 className="text-xl md:text-2xl font-bold text-[#555555] mb-2">Web & Mobile App Development </h3>
            <p className="text-base text-[#555555]">Design user-friendly applications!Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
          </div>
        </div>

        {/* Mechanical System Design & Prototyping */}
        <div
          className="bg-[#FCFAEE] shadow-xl flex flex-col items-center justify-start text-center h-full relative"
          data-aos="fade-up"
        >
          <img
            src={offer5Image}
            alt="System Design & Prototyping"
            className="w-full h-48 object-cover mb-4"
          />
          <div className="text-center px-4 p-2">
            <h3 className="text-xl md:text-2xl font-bold text-[#555555] mb-2">Cloud Computing & DevOps </h3>
            <p className="text-base text-[#555555]">Work with AWS, Docker & Kubernetes!Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
          </div>
        </div>

        {/* Core Engineering Internships and Industrial Training */}
        <div
          className="bg-[#FCFAEE] shadow-xl flex flex-col items-center justify-start text-center h-full relative"
          data-aos="fade-up"
        >
          <img
            src={offer6Image}
            alt="Internships & Training"
            className="w-full h-48 object-cover mb-4"
          />
          <div className="text-center px-4 p-2">
            <h3 className="text-xl md:text-2xl font-bold text-[#555555] mb-2"> Blockchain & Cybersecurity </h3>
            <p className="text-base text-[#555555]">Secure systems & prevent cyber threats!Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default IntegratedBcaMcaOfferings;


