// import { useEffect, useRef, useState, useMemo } from 'react';
// import Slider from "react-slick";

// // Image Imports
// import vikramImage from "../../assets/images/AIDS-Imagegs/user-aids.avif";

// function CompTestimonials() {
//   const testimonials = useMemo(() => [
//     { name: "Vikram Singh - Junior Mechanical Engineer", department: "Mechanical Engineering", year: "Batch-24", text: '"ICEM has been the launchpad for my engineering dreams. With world-class faculty, cutting-edge labs, and industry-focused training, I’ve gained the confidence to step into the professional world. The hands-on experience here has truly shaped my career!"', image: vikramImage },
//     { name: "Simran Kaur - Mechanical Engineer Trainee", department: "Mechanical Engineering", year: "Batch-23", text: 'My journey at ICEM has been nothing short of amazing! The curriculum, practical exposure, and placement opportunities have prepared me for industry challenges. I am grateful for the immense learning and growth I have experienced here.', image: vikramImage },
//     { name: "Arjun Rao - Junior Mechanical Engineer", department: "Mechanical Engineering", year: "Batch-25", text: 'ICEM prepares you for the real world. The Industry Readiness Programme, expert guidance, and technical workshops have given me a competitive edge. I feel fully equipped to excel in my career.', image: vikramImage },
//     { name: "Karan Desai - CAD Design Intern", department: "Mechanical Engineering", year: "Batch-24", text: 'The learning environment at ICEM is dynamic, inspiring, and filled with opportunities. The modern infrastructure, Apple labs, and top-notch faculty have helped me sharpen my technical and analytical skills, making me industry-ready.', image: vikramImage },
//     { name: "Aarti Sharma - Junior Mechanical Engineer", department: "Mechanical Engineering", year: "Batch-25", text: 'Engineering at ICEM has been an enriching journey of knowledge, innovation, and professional growth. The support from faculty and the placement cell has helped me secure a great opportunity in my field of interest.', image: vikramImage },
//     { name: "Aarti Sharma - Junior Mechanical Engineer", department: "Mechanical Engineering", year: "Batch-25", text: 'ICEM has given me a home away from home, where I’ve built friendships, explored my potential, and grown beyond academics. The mix of technical learning, cultural events, and career support makes ICEM an unforgettable experience.', image: vikramImage },
//     { name: "Aarti Sharma - Junior Mechanical Engineer", department: "Mechanical Engineering", year: "Batch-25", text: 'At ICEM, learning goes beyond textbooks. With hands-on projects, industrial visits, and expert mentorship, I have developed real-world problem-solving skills. The exposure here has been instrumental in shaping my engineering journey.', image: vikramImage },
//     { name: "Aarti Sharma - Junior Mechanical Engineer", department: "Mechanical Engineering", year: "Batch-25", text: 'Choosing ICEM for my engineering studies was the best decision. The rigorous training, campus placements, and exposure to emerging technologies have helped me secure a promising career. ICEM truly prepares you for the future!', image: vikramImage },
//   ], []);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     pauseOnHover: true,
//     responsive: [
//       { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
//       { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
//     ],
//   };

//   const cardRefs = useRef([]);
//   const [maxHeight, setMaxHeight] = useState(0);

//   useEffect(() => {
//     const updateMaxHeight = () => {
//       const heights = cardRefs.current.map(ref => ref && ref.offsetHeight).filter(Boolean);
//       const tallest = Math.max(...heights);
//       setMaxHeight(tallest);
//     };

//     updateMaxHeight();

//     const resizeObserver = new ResizeObserver(updateMaxHeight);
//     cardRefs.current.forEach(ref => ref && resizeObserver.observe(ref));

//     return () => resizeObserver.disconnect();
//   }, [testimonials]);

//   return (
//     <div className="px-4 md:px-10">
//       <h2 className="text-3xl md:text-4xl mt-4 font-semibold text-[#0c3249] text-center">
//         What Our Students Say
//       </h2>

//       <div className="bg-white shadow-lg p-4 sm:p-6">
//         <Slider {...settings}>
//           {testimonials.map((testimonial, i) => (
//             <div key={i} className="p-2">
//               <div
//                 ref={el => (cardRefs.current[i] = el)}
//                 className="border-4 border-[#41b9d0] rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 w-[90%] sm:w-auto mx-auto sm:mx-0"
//                 style={{ minHeight: maxHeight, backgroundColor: '#0c3249', color: '#e1dede' }}
//               >
//                 <div className="flex justify-center mb-4">
//                   <img
//                     src={testimonial.image}
//                     alt={testimonial.name}
//                     className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-white shadow-lg"
//                   />
//                 </div>

//                 <p className="text-lg font-semibold text-[#e1dede] text-center">{testimonial.name}</p>
//                 <p className="text-sm text-[#d3d1d1] text-center">
//                   {testimonial.department} | {testimonial.year}
//                 </p>
//                 <hr className="my-1 border-t border-[#41b9d0]" />
//                 <p className="text-[#e1dede] text-sm text-center">{testimonial.text}</p>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// }

// export default CompTestimonials;

import React, { useState, useEffect, useMemo, useRef } from "react";
 
// Import real images from URLs
import ankitImage from "../../assets/images/bca/Ankit_Jain.avif";
import misbahImage from "../../assets/images/bca/Misbah_Aryan.avif";
import akankshaImage from "../../assets/images/bca/Akanksha_Jain.avif";
import tanishaImage from "../../assets/images/bca/Tanisha_B.avif";
import salilImage from "../../assets/images/bca/Salil_Deshpande.avif";
import krishnaImage from "../../assets/images/bca/Krishna-prajapat.avif";
import giteshImage from "../../assets/images/bca/Gitesh-Agarwal.avif";
 
// Updated Testimonials
const testimonials = [
  {
    name: "Ankit Jain - Associate, JP Morgan Chase",
    text: `"Indira is a fantastic college that offers excellent faculty and a wide range of extracurricular activities throughout your academic journey. The teaching-learning structure is well-balanced, combining theoretical and practical learning, which builds a strong foundation for personal and professional growth."`,
    image: ankitImage,
  },
  {
    name: "Misbah Afshari - CEO, DOT",
    text: `"I had countless memorable moments at Indira. The college gave me some of the best experiences, not only on campus but also through classroom sessions and real-world exposure. Indira helped me stand out in this competitive world. Even as a foreign student, I never felt like an outsider. The faculty and students were incredibly supportive and taught me valuable lessons. I sincerely thank all the faculty members for treating us like their own children."`,
    image: misbahImage,
  },
  {
    name: "Akanksha Jain - Founder & CEO, Central Convoy",
    text: `"Indira helped me realize my true potential and prepared me to seize new opportunities. During my time there, I was entrusted with various responsibilities that shaped my personality and enhanced my leadership skills. The teachers at Indira are dedicated and truly focus on the holistic development of students."`,
    image: akankshaImage,
  },
  {
    name: "Tanisha Barnwal - Hedge Fund Analyst, Northern Trust",
    text: `"My enriching three-year journey at Indira BBA helped me improve my skills, gain confidence, and focus on self-development. Through presentations, academic activities, college fests, cultural events, and industrial visits, I gained both immense knowledge and unforgettable experiences."`,
    image: tanishaImage,
  },
  {
    name: "Salil Deshpande - Senior Analyst, Deutsche Bank",
    text: `"Indira nurtured my passion for learning and gave me a platform to grow both personally and professionally. Everyone needs an opportunity to enhance their personality, and Indira provided that space for me."`,
    image: salilImage,
  },
  {
    name: "Krishna Prajapat - Vice President, Anand Rathi Wealth Limited",
    text: `"Indira provides excellent career guidance and campus placement support, helping students build successful careers and stay ahead in the competitive job market. The college offers numerous placement opportunities, backed by highly qualified and experienced faculty members."`,
    image: krishnaImage,
  },
  {
    name: "Gitesh Agarwal - CEO & Founder, Vennplay",
    text: `"Indira boasts a vast and beautiful campus with outstanding infrastructure. There are dedicated buildings for BBA, BBA IB, BBA CA, and B.Sc. programs. The faculty members are highly knowledgeable, and the quality of teaching is exceptional. They provide a well-rounded perspective on every subject."`,
    image: giteshImage,
  },
];
 
const Testimonials = () => {
  const [activeDot, setActiveDot] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);
 
  const groupedTestimonials = useMemo(() => testimonials, []);
 
  const startAutoSlide = () => {
    if (!isHovered && !intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setActiveDot((prevDot) => (prevDot + 1) % groupedTestimonials.length);
      }, 3000);
    }
  };
 
  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };
 
  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [groupedTestimonials.length]);
 
  useEffect(() => {
    if (isHovered) stopAutoSlide();
    else startAutoSlide();
  }, [isHovered]);
 
  return (
    <div
      className="w-auto py-2 md:py-4 flex flex-col justify-center items-center overflow-hidden "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col md:flex-row space-x-8 w-full max-w-[1200px] overflow-x-hidden py-2 md:py-4 justify-center transition-all duration-500 ease-in-out px-4 md:px-8">
        {groupedTestimonials[activeDot] && (
          <div
            className="bg-[#F5F0EB] p-6 rounded-lg flex flex-col sm:flex-row w-full max-w-[800px] md:mx-4 flex-shrink-0 transition-all duration-300 ease-in-out border"
            style={{
              // boxShadow: "0 2px 4px rgba(0, 60, 132, 0.4)",
              borderColor: "#1e858f", // Primary color for border
            }}
          >
            <div className="flex-shrink-0 justify-center flex mb-1">
              <img
                src={groupedTestimonials[activeDot].image}
                alt={groupedTestimonials[activeDot].name}
                className="w-24 h-24 rounded-full"
              />
            </div>
            <div className="md:ml-6 flex flex-col justify-center">
              <p className="text-sm md:text-lg text-black mb-4">
                {groupedTestimonials[activeDot].text}
              </p>
              <div className="mt-4 text-right text-sm sm:text-base text-gray-600">
                <p style={{ color: "#1e858f" }}>{groupedTestimonials[activeDot].name}</p>
              </div>
            </div>
          </div>
        )}
      </div>
 
      <div className="flex justify-center mt-4">
        {groupedTestimonials.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full mx-1 transition-all duration-300 ease-in-out ${
              activeDot === index
                ? "bg-[#026670]" // Active dot color (Primary)
                : "bg-[#1e858f]" // Inactive dot color (Secondary)
            }`}
            onClick={() => setActiveDot(index)}
          />
        ))}
      </div>
    </div>
  );
};
 
function App() {
  return (
    <div className="App">
      <h1 className="text-3xl sm:text-4xl font-bold text-center pt-4" style={{ color: "#555555" }}>
        What Our <span className="text-[#026670]">Alumni</span> Say
      </h1>
      <Testimonials />
    </div>
  );
}
 
export default App;