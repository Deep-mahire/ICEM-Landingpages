import React, { useState, useEffect, useMemo, useRef } from "react";

// Image Imports
import ankitImage from "/public/BBA-MBA/Ankit_Jain.avif";
import misbahImage from "/public/BBA-MBA/Misbah_Aryan.avif";
import akankshaImage from "/public/BBA-MBA/Akanksha_Jain.avif";
import tanishaImage from "/public/BBA-MBA/Tanisha_B.avif";
import salilImage from "/public/BBA-MBA/Salil_Deshpande.avif";
import krishnaImage from "/public/BBA-MBA/Krishna-prajapat.avif";
import giteshImage from "/public/BBA-MBA/Gitesh-Agarwal.avif";

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
      }, 4000);
    }
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

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
      className="w-full py-4 px-4 md:px-8 flex flex-col items-center overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Hidden cards for measuring height */}
      <div className="invisible absolute top-0 left-0">
        {groupedTestimonials.map((testimonial, idx) => (
          <div
            key={idx}
            ref={(el) => (cardRef.current[idx] = el)}
            className="p-4 w-[90vw] md:w-[800px]"
          >
            <p>{testimonial.text}</p>
          </div>
        ))}
      </div>

      <div className="w-full max-w-6xl transition-all duration-500 ease-in-out">
        {groupedTestimonials.slice(activeIndex, activeIndex + 1).map((testimonial, idx) => (
          <div
            key={idx}
            className="p-4 sm:p-6 md:p-8 rounded-2xl border shadow-md mx-auto flex flex-col sm:flex-row items-center sm:items-start"
            style={{ minHeight: maxHeight || "auto", borderColor: "#FAB701" }}
          >
            <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 sm:w-20 h-16 sm:h-20 rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between text-center sm:text-left">
              <p className="text-sm sm:text-base text-black leading-relaxed">
                {testimonial.text}
              </p>
              <p className="text-sm sm:text-base text-[#FAB701] mt-3 font-semibold">
                {testimonial.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-4 flex-wrap gap-2">
        {groupedTestimonials.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full transition-all duration-300 ease-in-out ${
              activeIndex === index ? "bg-[#FAB701]" : "bg-[#FAB701]"
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
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center pt-6 pb-4 text-[#555555]">
        What Our <span className="text-[#FAB701]">Alumni</span> Say
      </h1>
      <Testimonials />
    </div>
  );
}

export default App;
