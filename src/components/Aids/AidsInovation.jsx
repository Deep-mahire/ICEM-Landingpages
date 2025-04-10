import React from 'react';
import { FaSatellite } from 'react-icons/fa'; // Satellite icon
import ProgramImage from '../../assets/images/AIDS-Imagegs/robothero.avif'; // Robot image
import HatImage from '../../assets/images/hat.avif'; // Red hat image

export default function AidsInnovation() {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between px-6 sm:px-12 md:px-16 lg:px-24 py-6 md:py-12 bg-gradient-to-r from-[#104552] to-[#206b6e] text-white overflow-hidden">
      {/* Moving Satellite Icon */}
      <FaSatellite className="absolute top-6 left-0 text-6xl text-gray-400 animate-satellite" />

      {/* Left: Robot Image */}
      <div className="flex-1 flex justify-center items-center relative top-4 hidden sm:flex">
        <img
          src={ProgramImage}
          alt="AI Robot"
          className="w-40 sm:w-56 md:w-72 lg:w-[350px] h-auto object-contain animate-float-large"
        />
      </div>

      {/* Right: Content */}
      <div className="flex-1 text-center md:text-left mt-4 md:mt-0 relative">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight inline-block relative">
          <span className="relative inline-block">
            <img
              src={HatImage}
              alt="Red Hat"
              className="absolute -top-8 -left-12 hidden sm:block md:w-16 lg:w-20 animate-floating" />
            Where AI Meets Innovation  
          </span>
        </h1>

        <p className="mt-3 sm:mt-5 text-2xl sm:text-lg md:text-xl leading-relaxed">
          Have you ever wondered how Netflix recommends your favorite shows, how chatbots talk like humans, or how AI can
          diagnose diseases faster than doctors? <br/>That’s the power of Artificial Intelligence and Data Science!
        </p>

        <p className="mt-2 sm:mt-3 text-sm sm:text-lg md:text-xl">
          At <strong>ICEM</strong>, we turn curiosity into expertise by combining AI, programming, and data analytics
          into a future-ready curriculum!
        </p>
      </div>

      {/* Floating animation CSS */}
      <style>{`
      @keyframes float-large {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-10px);
        }
      }

      @keyframes floating {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-5px);
        }
      }

      @keyframes satellite-move {
        0% {
          transform: translateX(-100px);
        }
        100% {
          transform: translateX(100vw);
        }
      }

      .animate-float-large {
        animation: float-large 3s ease-in-out infinite;
      }

      .animate-floating {
        animation: floating 2.5s ease-in-out infinite;
      }

      .animate-satellite {
        animation: satellite-move 8s linear infinite;
      }
      `}</style>
    </div>
  );
}
