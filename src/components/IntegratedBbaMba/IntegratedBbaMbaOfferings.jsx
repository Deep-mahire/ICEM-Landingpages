import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import AOS from 'aos';
import 'aos/dist/aos.css';

import offer1Image from '/public/BBA-MBA/principle.jpg';
import offer2Image from '/public/BBA-MBA/image (1).jpg';
import offer3Image from '/public/BBA-MBA/Dm.jpg';
import offer4Image from '/public/BBA-MBA/anyalisis.jpg';
import offer5Image from '/public/BBA-MBA/behavior.jpg';
import offer6Image from '/public/BBA-MBA/global.jpg';
import offer7Image from '/public/BBA-MBA/internship.jpg';
import offer8Image from '/public/BBA-MBA/apti.jpg';

const IntegratedBbaMbaOfferings = () => {
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
    <div className="relative px-4 md:px-8 lg:px-16 py-6 md:py-8 bg-[#f7f3ef] poppins-regular">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-[#555555]" data-aos="fade-up">
        Integrated <span className='text-[#f37021]'>BBA/MBA </span>Offerings
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-y-8 gap-x-4 md:gap-x-8 lg:gap-x-10">
        {[
          { img: offer1Image, title: "Principles of Management & Marketing" },
          { img: offer2Image, title: "Business Communication & Corporate Etiquette" },
          { img: offer3Image, title: "Digital Marketing & Brand Strategy" },
         ,
          { img: offer5Image, title: "Organizational Behavior & HRM" },
          { img: offer6Image, title: "Global Business & Leadership Skills" },
          { img: offer7Image, title: "Internship Projects & Corporate Exposure" },
          { img: offer4Image, title: "Finance, Analytics & Economics" },
          { img: offer8Image, title: "Soft Skills, Aptitude & Personality Development" },
          
        ].map((item, index) => (
          <div
            key={index}
            className="bg-[#FCFAEE] shadow-xl flex flex-col items-center justify-start text-center h-full relative"
            data-aos="fade-up"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover mb-4"
            />
            <div className="text-center px-4 p-2 w-full">
              <h3 className="text-xl md:text-xl font-bold text-[#555555] mb-2">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntegratedBbaMbaOfferings;
