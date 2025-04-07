import React, { useState, useEffect, useMemo, useRef } from "react";

// Image Imports
import ankitImage from "/public/BBA-MBA/Ankit_Jain.avif";
import misbahImage from "/public/BBA-MBA/Misbah_Aryan.avif";
import akankshaImage from "/public/BBA-MBA/Akanksha_Jain.avif";
import tanishaImage from "/public/BBA-MBA/Tanisha_B.avif";
import salilImage from "/public/BBA-MBA/Salil_Deshpande.avif";
import krishnaImage from "/public/BBA-MBA/Krishna-prajapat.avif";
import giteshImage from "/public/BBA-MBA/Gitesh-Agarwal.avif";

// Testimonials data
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
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);
  const cardRef = useRef([]);
  const [maxHeight, setMaxHeight] = useState(0);

  const groupedTestimonials = useMemo(() => testimonials, []);

  const startAutoSlide = () => {
    if (!isHovered && !intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % groupedTestimonials.length);
      }, 3000);
    }
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Measure all card heights once on mount
  useEffect(() => {
    const heights = cardRef.current.map((el) => (el ? el.offsetHeight : 0));
    const tallest = Math.max(...heights);
    setMaxHeight(tallest);
  }, []);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  useEffect(() => {
    isHovered ? stopAutoSlide() : startAutoSlide();
  }, [isHovered]);

  return (
    <div
      className="w-full py-4 flex flex-col items-center overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Hidden cards to measure height */}
      <div className="invisible absolute top-0">
        {groupedTestimonials.map((testimonial, idx) => (
          <div
            key={idx}
            ref={(el) => (cardRef.current[idx] = el)}
            className="p-6 md:p-8 w-[800px]"
          >
            <p>{testimonial.text}</p>
          </div>
        ))}
      </div>

      <div className="w-full max-w-[1400px] px-4 md:px-6 transition-all duration-500 ease-in-out">
        {groupedTestimonials
          .slice(activeIndex, activeIndex + 1)
          .map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-[#F5F0EB] p-6 md:p-8 rounded-2xl border shadow-md mx-auto flex flex-col sm:flex-row w-full max-w-5xl"
              style={{ minHeight: maxHeight || "auto", borderColor: "#f37021" }}
            >
              <div className="flex-shrink-0 flex justify-center items-start sm:items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-6 flex flex-col justify-between">
                <p className="text-sm sm:text-base text-black leading-relaxed">
                  {testimonial.text}
                </p>
                <p className="text-sm sm:text-base text-[#fc7828] text-right mt-3 font-semibold">
                  {testimonial.name}
                </p>
              </div>
            </div>
          ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 flex-wrap">
        {groupedTestimonials.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full mx-1 transition-all duration-300 ease-in-out ${
              activeIndex === index ? "bg-[#f37021]" : "bg-[#fca46f]"
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1
        className="text-3xl sm:text-4xl font-bold text-center pt-6 pb-2"
        style={{ color: "#555555" }}
      >
        What Our <span className="text-[#f37021]">Alumni</span> Say
      </h1>
      <Testimonials />
    </div>
  );
}

export default App;
