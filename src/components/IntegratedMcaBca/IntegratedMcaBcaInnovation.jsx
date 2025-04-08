import React from 'react'
import ProgramImage from '../../assets/images/Com-Images/Untitled design.avif'

const BcaInnovation = () => {
  return (
    <div className="flex flex-col px-4 md:px-10 lg:px-16 py-4 mb-2 overflow-hidden">
      {/* Heading Section */}
      <div className="flex flex-col md:flex-row items-center justify-center">

        {/* Left Part: Image */}
        <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
          <img
            src={ProgramImage}
            alt="Computer Engineering"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        {/* Right Part: Paragraph */}
        <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
          <h2 className=" text-2xl sm:text-3xl lg:text-3xl font-bold text-center sm:text-left mt-2 ">
          Where Algorithms Drive Innovation!
          </h2>
          <p className="text-md sm:text-2xl md:text-xl text-gray-600 tracking-wide mt-4 px-2">
          <strong className='text-blue-600 text-2xl'>Ever wondered?</strong> <br />
          How apps like <strong>Instagram</strong> process millions of images per second? <br />
          How <strong>AI chatbots</strong> can talk just like humans? <br />
          How <strong>self-driving cars</strong> and <strong>blockchain security</strong> do all the technicalities behind? <br />
          That’s the magic of Computer Engineering! <br /> 
          At ICEM, we shape future tech leaders who build smart software, intelligent systems, and innovative solutions.
          </p>
        </div>
      </div>
    </div>
  )
}

export default BcaInnovation
