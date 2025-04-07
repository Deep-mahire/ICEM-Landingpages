import React, { useState, useEffect, useMemo, useRef } from "react";
 
// Import real images from URLs
import ankitImage from "../../assets/Images/bca/Ankit_Jain.avif";
import misbahImage from "../../assets/Images/bca/Misbah_Aryan.avif";
import akankshaImage from "../../assets/Images/bca/Akanksha_Jain.avif";
import tanishaImage from "../../assets/Images/bca/Tanisha_B.avif";
import salilImage from "../../assets/Images/bca/Salil_Deshpande.avif";
import krishnaImage from "../../assets/Images/bca/Krishna-prajapat.avif";
import giteshImage from "../../assets/Images/bca/Gitesh-Agarwal.avif";
 
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
      <div className="flex flex-col md:flex-row space-x-8 w-full max-w-[1200px] overflow-x-hidden py-2 md:py-4 justify-center transition-all duration-500 ease-in-out px-8">
        {groupedTestimonials[activeDot] && (
          <div
            className="bg-[#F5F0EB] p-6 rounded-lg flex flex-col sm:flex-row w-full max-w-[800px] mx-4 flex-shrink-0 transition-all duration-300 ease-in-out border"
            style={{
              // boxShadow: "0 2px 4px rgba(0, 60, 132, 0.4)",
              borderColor: "#f37021", // Primary color for border
            }}
          >
            <div className="flex-shrink-0 justify-center flex mb-1">
              <img
                src={groupedTestimonials[activeDot].image}
                alt={groupedTestimonials[activeDot].name}
                className="w-24 h-24 rounded-full"
              />
            </div>
            <div className="ml-6 flex flex-col justify-center">
              <p className="text-sm md:text-lg text-black mb-4">
                {groupedTestimonials[activeDot].text}
              </p>
              <div className="mt-4 text-right text-sm sm:text-base text-gray-600">
                <p style={{ color: "#fc7828" }}>{groupedTestimonials[activeDot].name}</p>
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
                ? "bg-[#f37021]" // Active dot color (Primary)
                : "bg-[#fca46f]" // Inactive dot color (Secondary)
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
        What Our <span className="text-[#f37021]">Alumni</span> Say
      </h1>
      <Testimonials />
    </div>
  );
}
 
export default App;